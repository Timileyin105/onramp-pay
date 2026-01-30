/**
 * NOWPayments Service
 * Creates payment links for cryptocurrency payments
 */

interface NowPaymentsInvoiceParams {
      email: string;
      amount: number;
      currency: string;
      reference: string;
      customerName: string;
      metadata?: Record<string, any>;
}

interface NowPaymentsInvoiceResponse {
      id: string;
      token_id: string;
      order_id: string;
      order_description: string;
      price_amount: string;
      price_currency: string;
      pay_currency: string;
      invoice_url: string;
      success_url: string;
      cancel_url: string;
      created_at: string;
      updated_at: string;
}

interface NowPaymentsWebhookResult {
      reference: string;
      isSuccess: boolean;
      status?: string;
      providerTransactionId?: string;
}

export const nowpaymentsService = {
      /**
       * Generate a NOWPayments invoice/payment link
       */
      createPaymentLink: async (params: NowPaymentsInvoiceParams): Promise<string> => {
            const apiKey = process.env.NOWPAYMENTS_API_KEY;

            if (!apiKey) {
                  throw new Error('NOWPayments API key not configured');
            }

            const payload = {
                  price_amount: params.amount,
                  price_currency: params.currency.toLowerCase(),
                  pay_currency: '', // Let user choose crypto
                  ipn_callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks`,
                  order_id: params.reference,
                  order_description: `${params.metadata?.plan || 'Plugin'} Purchase`,
                  success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-success`,
                  cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-cancelled`,
                  is_fixed_rate: false,
                  is_fee_paid_by_user: true,
            };

            try {
                  const response = await fetch('https://api.nowpayments.io/v1/invoice', {
                        method: 'POST',
                        headers: {
                              'x-api-key': apiKey,
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload),
                  });

                  if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(errorData.message || `NOWPayments API Error: ${response.status}`);
                  }

                  const data: NowPaymentsInvoiceResponse = await response.json();

                  return data.invoice_url;
            } catch (error) {
                  console.error('NOWPayments invoice creation failed:', error);
                  throw error;
            }
      },

      /**
       * Get payment status
       */
      getPaymentStatus: async (paymentId: string): Promise<string | null> => {
            const apiKey = process.env.NOWPAYMENTS_API_KEY;

            if (!apiKey) {
                  throw new Error('NOWPayments API key not configured');
            }

            try {
                  const response = await fetch(
                        `https://api.nowpayments.io/v1/payment/${paymentId}`,
                        {
                              method: 'GET',
                              headers: {
                                    'x-api-key': apiKey,
                              },
                        }
                  );

                  if (!response.ok) {
                        return null;
                  }

                  const data = await response.json();
                  return data.payment_status;
            } catch (error) {
                  console.error('NOWPayments status check failed:', error);
                  return null;
            }
      },

      /**
       * Parse NOWPayments webhook payload
       */
      parseWebhook: (payload: any): NowPaymentsWebhookResult | null => {
            if (!payload || !payload.order_id || !payload.payment_status) return null;

            const status = String(payload.payment_status).toLowerCase();
            const successStatuses = ['finished', 'confirmed', 'sending'];

            return {
                  reference: String(payload.order_id),
                  isSuccess: successStatuses.includes(status),
                  status,
                  providerTransactionId: payload.payment_id ? String(payload.payment_id) : undefined,
            };
      },
};
