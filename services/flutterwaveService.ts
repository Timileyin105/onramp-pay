/**
 * Flutterwave Payment Service
 * Creates payment links for card payments
 */

interface FlutterwavePaymentParams {
      email: string;
      amount: number;
      currency: string;
      reference: string;
      customerName: string;
      metadata?: Record<string, any>;
}

interface FlutterwavePaymentResponse {
      status: string;
      message: string;
      data: {
            link: string;
      };
}

interface FlutterwaveWebhookResult {
      reference: string;
      isSuccess: boolean;
      status?: string;
      providerTransactionId?: string;
}

export const flutterwaveService = {
      /**
       * Generate a Flutterwave payment link
       */
      createPaymentLink: async (params: FlutterwavePaymentParams): Promise<string> => {

            const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;

            if (!secretKey) {
                  throw new Error('Flutterwave secret key not configured');
            }

            const payload = {
                  tx_ref: params.reference,
                  amount: params.amount,
                  currency: params.currency,
                  redirect_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-success`,
                  payment_options: 'card,ussd,banktransfer',
                  customer: {
                        email: params.email,
                        name: params.customerName,
                  },
                  customizations: {
                        title: 'Onramp Pay Plugin',
                        description: `Payment for ${params.metadata?.plan || 'Plugin'}`,
                        logo: 'https://onramp-pay.com/assets/images/onramp-pay.png',
                  },
                  meta: params.metadata,
            };

            try {
                  const response = await fetch('https://api.flutterwave.com/v3/payments', {
                        method: 'POST',
                        headers: {
                              'Authorization': `Bearer ${secretKey}`,
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload),
                  });

                  if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(errorData.message || `Flutterwave API Error: ${response.status}`);
                  }

                  const data: FlutterwavePaymentResponse = await response.json();

                  if (data.status !== 'success') {
                        throw new Error(data.message || 'Failed to create payment link');
                  }

                  return data.data.link;
            } catch (error) {
                  console.error('Flutterwave payment creation failed:', error);
                  throw error;
            }
      },

      /**
       * Verify a payment transaction
       */
      verifyPayment: async (transactionId: string): Promise<boolean> => {
            const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;

            if (!secretKey) {
                  throw new Error('Flutterwave secret key not configured');
            }

            try {
                  const response = await fetch(
                        `https://api.flutterwave.com/v3/transactions/${transactionId}/verify`,
                        {
                              method: 'GET',
                              headers: {
                                    'Authorization': `Bearer ${secretKey}`,
                              },
                        }
                  );

                  if (!response.ok) {
                        return false;
                  }

                  const data = await response.json();
                  return data.status === 'success' && data.data.status === 'successful';
            } catch (error) {
                  console.error('Flutterwave verification failed:', error);
                  return false;
            }
      },

      /**
       * Parse Flutterwave webhook payload
       */
      parseWebhook: (payload: any): FlutterwaveWebhookResult | null => {
            if (!payload || !payload.data) return null;

            if (payload.event === 'charge.completed') {
                  const status = payload.data.status || '';
                  return {
                        reference: payload.data.tx_ref || '',
                        isSuccess: status === 'successful',
                        status,
                        providerTransactionId: payload.data.id ? String(payload.data.id) : undefined,
                  };
            }

            return null;
      },
};
