/**
 * Onramp Pay Direct Payment Service
 * Creates payment links for direct crypto bridge payments
 */

interface OnramppayPaymentParams {
      email: string;
      amount: number;
      currency: string;
      reference: string;
      customerName: string;
      walletAddress: string;
      metadata?: Record<string, any>;
}

interface OnramppayWebhookResult {
      reference: string;
      isSuccess: boolean;
      status?: string;
      providerTransactionId?: string;
      valueReceived?: number;
      coinType?: string;
      addressIn?: string;
      addressOut?: string;
}

export const onramppayPaymentService = {
      /**
       * Generate an Onramp Pay payment link for crypto bridge
       */
      createPaymentLink: async (params: OnramppayPaymentParams): Promise<string> => {
            try {
                  // Build webhook callback URL with reference
                  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://onramp-pay.com';
                  const callbackUrl = `${baseUrl}/api/webhook/onramppay?reference=${params.reference}`;
                  const encodedCallback = encodeURIComponent(callbackUrl);

                  // Call Onramp Pay API to get payment address
                  const walletApiUrl = `https://api.onramp-pay.com/control/wallet.php?address=${params.walletAddress}&callback=${encodedCallback}`;

                  const response = await fetch(walletApiUrl);
                  if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(errorData.message || `Wallet API Error: ${response.status}`);
                  }

                  const data = await response.json();

                  // Build checkout URL using the address_in from API
                  const checkoutUrl = `https://checkout.onramp-pay.com/pay.php?address=${data.address_in}` +
                        `&amount=${params.amount}` +
                        `&provider=hosted` +
                        `&email=${encodeURIComponent(params.email)}` +
                        `&currency=${params.currency}`;

                  return checkoutUrl;
            } catch (error) {
                  console.error('Onramp Pay payment creation failed:', error);
                  throw error;
            }
      },

      /**
       * Parse Onramp Pay webhook payload
       * Expected fields: number, value_coin, coin, txid_in, txid_out, address_in, value_forwarded_coin
       */
      parseWebhook: (payload: any): OnramppayWebhookResult | null => {
            if (!payload || !payload.number) return null;

            // Onramp Pay webhook contains transaction details
            const isSuccess = !!(payload.txid_out && payload.value_forwarded_coin);

            return {
                  reference: String(payload.number),
                  isSuccess,
                  status: isSuccess ? 'completed' : 'pending',
                  providerTransactionId: payload.txid_out || payload.txid_in,
                  valueReceived: payload.value_forwarded_coin ? parseFloat(payload.value_forwarded_coin) : undefined,
                  coinType: payload.coin,
                  addressIn: payload.address_in,
                  addressOut: payload.txid_out,
            };
      },
};
