import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import TransactionModel from '@/models/Transaction';
import { sendPluginEmail } from '@/lib/email';
import { flutterwaveService } from '@/services/flutterwaveService';
import { nowpaymentsService } from '@/services/nowpaymentsService';
import { onramppayPaymentService } from '@/services/onramppayPaymentService';
import { promises as fs } from 'fs';
import path from 'path';

// Helper function to log webhook data to file
async function logWebhookToFile(data: any, stage: string) {
      try {
            const logDir = path.join(process.cwd(), 'logs');
            const logFile = path.join(logDir, 'webhooks.txt');

            // Create logs directory if it doesn't exist
            try {
                  await fs.mkdir(logDir, { recursive: true });
            } catch (err) {
                  // Directory might already exist
            }

            const timestamp = new Date().toISOString();
            const logEntry = `
================================================================================
[${timestamp}] ${stage}
================================================================================
${JSON.stringify(data, null, 2)}

`;

            await fs.appendFile(logFile, logEntry);
      } catch (error) {
            console.error('Failed to write webhook log:', error);
      }
}

export async function POST(request: Request) {
      try {
            const body = await request.json();
            console.log('Webhook received:', JSON.stringify(body, null, 2));

            // Log incoming webhook data
            await logWebhookToFile(body, 'INCOMING WEBHOOK');

            await connectToDatabase();

            // Strategy to identify transaction and success status
            // Uses provider libraries + fallback for generic structures
            let reference = '';
            let isSuccess = false;
            let providerStatus: string | undefined;
            let providerTransactionId: string | undefined;

            // First, check if reference is in the URL query params (from our callback URL)
            const url = new URL(request.url);
            const queryReference = url.searchParams.get('reference');

            if (queryReference) {
                  reference = queryReference;
            }

            const flutterwaveResult = flutterwaveService.parseWebhook(body);
            const nowpaymentsResult = nowpaymentsService.parseWebhook(body);
            const onramppayResult = onramppayPaymentService.parseWebhook(body);
            const providerResult = flutterwaveResult || nowpaymentsResult || onramppayResult;

            if (!reference && providerResult?.reference) {
                  reference = providerResult.reference;
            }

            if (providerResult) {
                  isSuccess = providerResult.isSuccess;
                  providerStatus = providerResult.status;
                  providerTransactionId = providerResult.providerTransactionId;
            }

            if (!reference) {
                  reference = body.reference || body.tx_ref || body.order_id || '';
            }

            if (!isSuccess) {
                  const status = (body.status || body.payment_status || providerStatus || '').toLowerCase();
                  isSuccess = ['successful', 'success', 'paid', 'confirmed', 'finished'].includes(status);
            }

            console.log(
                  `Extracted Reference: ${reference}, IsSuccess: ${isSuccess}, ProviderStatus: ${providerStatus || 'n/a'}, ProviderTxId: ${providerTransactionId || 'n/a'}`
            );

            if (!reference) {
                  await logWebhookToFile({ body, error: 'Reference not found' }, 'ERROR - No Reference');
                  return NextResponse.json({ message: 'Reference not found in payload' }, { status: 400 });
            }

            const transaction = await TransactionModel.findOne({ reference });

            if (!transaction) {
                  console.log(`Transaction with reference ${reference} not found.`);
                  await logWebhookToFile({ reference, body }, 'ERROR - Transaction Not Found');
                  return NextResponse.json({ message: 'Transaction not found' }, { status: 404 });
            }

            if (transaction.status === 'paid') {
                  console.log('Transaction already marked as paid.');
                  await logWebhookToFile({ reference, status: 'already_paid' }, 'INFO - Already Processed');
                  return NextResponse.json({ message: 'Transaction already processed' }, { status: 200 });
            }

            if (isSuccess) {
                  // Update transaction
                  transaction.status = 'paid';

                  // Update with any useful metadata from webhook if needed (e.g. provider transaction id)
                  // transaction.providerId = providerTransactionId;

                  await transaction.save();
                  console.log('Transaction updated to paid.');

                  // Send Email
                  console.log(`Sending plugin email to ${transaction.email}`);
                  const emailSent = await sendPluginEmail(transaction.email, transaction.name);

                  if (!emailSent) {
                        console.error('Failed to send email after successful payment');
                        await logWebhookToFile({ reference, email: transaction.email, emailSent: false, providerStatus, providerTransactionId }, 'ERROR - Email Failed');
                  } else {
                        console.log('Email sent.');
                        await logWebhookToFile({ reference, email: transaction.email, emailSent: true, providerStatus, providerTransactionId }, 'SUCCESS - Payment Confirmed & Email Sent');
                  }

                  return NextResponse.json({ message: 'Payment confirmed and email sent' }, { status: 200 });
            } else {
                  console.log(`Payment not successful. Status: ${body.status || body.payment_status}`);
                  await logWebhookToFile({ reference, status: body.status || body.payment_status || providerStatus, providerTransactionId, body }, 'INFO - Payment Not Successful');
                  return NextResponse.json({ message: 'Payment status not successful', currentStatus: body.status || body.payment_status }, { status: 200 });
            }

      } catch (error) {
            console.error('Webhook handler error:', error);
            await logWebhookToFile({ error: error instanceof Error ? error.message : String(error), stack: error instanceof Error ? error.stack : undefined }, 'ERROR - Handler Exception');
            return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
      }
}
