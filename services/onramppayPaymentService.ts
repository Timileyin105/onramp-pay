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
                  const provider = params.metadata?.provider || 'mastercard';
                  const walletApiUrl = `https://api.onramp-pay.com/control/wallet.php?provider=${encodeURIComponent(provider)}&amount=${encodeURIComponent(String(params.amount))}&paypal_email=${encodeURIComponent(params.email)}`;

                  const response = await fetch(walletApiUrl);
                  if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(errorData.message || `Wallet API Error: ${response.status}`);
                  }

                  const data = await response.json();

                  const redeemId = data.redeem_id || params.reference;
                  const checkoutUrl = `https://api.onramp-pay.com/control/status.php?redeem_id=${encodeURIComponent(redeemId)}`;

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
