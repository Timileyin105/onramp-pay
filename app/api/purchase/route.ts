import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import TransactionModel from '@/models/Transaction';
import { flutterwaveService } from '@/services/flutterwaveService';
import { nowpaymentsService } from '@/services/nowpaymentsService';
import { onramppayPaymentService } from '@/services/onramppayPaymentService';

type PurchasePayload = {
      name: string;
      email: string;
      plan: string;
      amount: number;
      currency?: string;
      paymentMethod: 'card' | 'crypto' | 'onramppay';
};

export async function POST(request: Request) {
      try {
            const body = (await request.json()) as PurchasePayload;

            if (!body?.name || !body?.email || !body?.plan || !body?.amount || !body?.paymentMethod) {
                  return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
            }

            const currency = body.currency || 'USD';
            const reference = `txn_${Date.now()}_${Math.floor(Math.random() * 1_000_000)}`;

            // Generate payment link based on payment method
            let redirectUrl: string;
            let provider: string;

            if (body.paymentMethod === 'card') {
                  // Use Flutterwave for card payments
                  redirectUrl = await flutterwaveService.createPaymentLink({
                        email: body.email,
                        amount: body.amount,
                        currency: currency,
                        reference: reference,
                        customerName: body.name,
                        metadata: {
                              plan: body.plan,
                        },
                  });
                  provider = 'flutterwave';
            } else if (body.paymentMethod === 'crypto') {
                  // Use NOWPayments for crypto payments
                  redirectUrl = await nowpaymentsService.createPaymentLink({
                        email: body.email,
                        amount: body.amount,
                        currency: currency,
                        reference: reference,
                        customerName: body.name,
                        metadata: {
                              plan: body.plan,
                        },
                  });
                  provider = 'nowpayment';
            } else if (body.paymentMethod === 'onramppay') {
                  // Use Onramp Pay for direct crypto bridge
                  const merchantWallet = process.env.MERCHANT_WALLET_ADDRESS;
                  if (!merchantWallet) {
                        return NextResponse.json({ message: 'Merchant wallet not configured.' }, { status: 500 });
                  }

                  redirectUrl = await onramppayPaymentService.createPaymentLink({
                        email: body.email,
                        amount: body.amount,
                        currency: currency,
                        reference: reference,
                        customerName: body.name,
                        walletAddress: merchantWallet,
                        metadata: {
                              plan: body.plan,
                        },
                  });
                  provider = 'onramppay';
            } else {
                  return NextResponse.json({ message: 'Invalid payment method.' }, { status: 400 });
            }

            // Save transaction to database
            await connectToDatabase();
            const transaction = await TransactionModel.create({
                  name: body.name,
                  email: body.email,
                  plan: body.plan,
                  amount: body.amount,
                  currency,
                  paymentMethod: body.paymentMethod,
                  provider,
                  status: 'pending',
                  reference,
                  redirectUrl,
            });

            return NextResponse.json({
                  transactionId: transaction._id,
                  reference,
                  redirectUrl,
            });
      } catch (error) {
            console.error('Purchase transaction failed:', error);
            const message = error instanceof Error ? error.message : 'Unable to create transaction.';
            return NextResponse.json({ message }, { status: 500 });
      }
}
