export type NoKycCardProvider = 'visa' | 'mastercard' | 'paypal';

export interface CreateNoKycCardRequest {
      provider: NoKycCardProvider;
      amount: number;
      paypalEmail?: string;
}

export interface CreateNoKycCardResponse {
      redeem_id: string;
      amount: number;
      payment_coin: string;
      payment_instructions: string;
      network: string;
      card_value: string;
      card_currency: string;
      card_type: string;
      address_in: string;
      timestamp_token?: string;
      qr_code?: string;
      ipn_token?: string;
}

export interface NoKycCardStatusResponse {
      payment_status: 'paid' | 'unpaid' | string;
      card_issuer_status: 'completed' | 'pending' | 'N/A' | string;
      redeem_link: string;
}

const CARD_API_BASE_URL = process.env.NEXT_PUBLIC_CARD_API_BASE_URL || 'https://api.onramp-pay.com/control';

export const noKycCardService = {
      createCard: async (payload: CreateNoKycCardRequest): Promise<CreateNoKycCardResponse> => {
            const params = new URLSearchParams({
                  provider: payload.provider,
                  amount: String(payload.amount),
            });

            if (payload.provider === 'paypal') {
                  if (!payload.paypalEmail) {
                        throw new Error('PayPal card requires a valid PayPal email.');
                  }
                  params.set('paypal_email', payload.paypalEmail);
            }

            const response = await fetch(`${CARD_API_BASE_URL}/wallet.php?${params.toString()}`);
            if (!response.ok) {
                  const errorData = await response.json().catch(() => ({}));
                  throw new Error(errorData.message || `Create card failed (${response.status})`);
            }

            const data = (await response.json()) as CreateNoKycCardResponse;
            if (!data.redeem_id) {
                  throw new Error('Invalid API response: missing redeem_id.');
            }

            return data;
      },

      checkStatus: async (redeemId: string): Promise<NoKycCardStatusResponse> => {
            const response = await fetch(`${CARD_API_BASE_URL}/status.php?redeem_id=${encodeURIComponent(redeemId)}`);
            if (!response.ok) {
                  const errorData = await response.json().catch(() => ({}));
                  throw new Error(errorData.message || `Status check failed (${response.status})`);
            }

            return (await response.json()) as NoKycCardStatusResponse;
      },
};
