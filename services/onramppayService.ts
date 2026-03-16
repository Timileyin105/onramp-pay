
import { PaymentRequest, PaymentResponse, PaymentDetails, PaymentStatus } from '../types';

/**
 * Onramp Pay API Service Wrapper
 * Documentation: https://documenter.getpostman.com/view/14826208/2sBXcHiz2s
 */
const BASE_URL = 'https://api.onramp-pay.com/control';

export const onramppayService = {
      /**
       * Generates a new payment link using the checkout API
       */
      createPayment: async (request: PaymentRequest): Promise<PaymentResponse> => {
            try {
                  if (!['mastercard', 'visa', 'paypal'].includes(request.provider)) {
                        throw new Error('No-KYC cards currently support only mastercard, visa, or paypal providers.');
                  }

                  const params = new URLSearchParams({
                        provider: request.provider,
                        amount: String(request.amount),
                  });

                  if (request.provider === 'paypal') {
                        if (!request.customerEmail) {
                              throw new Error('PayPal provider requires a valid PayPal email.');
                        }
                        params.set('paypal_email', request.customerEmail);
                  }

                  const walletApiUrl = `${BASE_URL}/wallet.php?${params.toString()}`;

                  const response = await fetch(walletApiUrl);
                  if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(errorData.message || `API Error: ${response.status}`);
                  }
                  const data = await response.json();

                  const redeemId = data.redeem_id || data.timestamp_token;
                  if (!redeemId) {
                        throw new Error('Card order was created but redeem ID is missing in API response.');
                  }

                  const statusUrl = `${BASE_URL}/status.php?redeem_id=${encodeURIComponent(redeemId)}`;

                  return {
                        id: redeemId,
                        paymentUrl: statusUrl,
                        status: PaymentStatus.PENDING,
                        amount: request.amount,
                        currency: request.currency,
                        provider: request.provider,
                        walletAddress: data.address_in || '',
                        createdAt: new Date().toISOString()
                  };
            } catch (error) {
                  console.error("Onramp Pay Create Payment Failed:", error);
                  throw error;
            }
      },

      /**
       * Tracks/Fetches payment status by ID
       */
      trackPayment: async (paymentId: string): Promise<PaymentDetails> => {
            try {
                  const response = await fetch(`${BASE_URL}/status.php?redeem_id=${encodeURIComponent(paymentId)}`);

                  if (!response.ok) {
                        throw new Error(`Tracking Error: ${response.status}`);
                  }

                  const data = await response.json();

                  const paymentStatus = data.payment_status === 'paid' ? PaymentStatus.PAID : PaymentStatus.PENDING;
                  const detailsUrl = data.redeem_link && data.redeem_link !== 'N/A'
                        ? data.redeem_link
                        : `${BASE_URL}/status.php?redeem_id=${encodeURIComponent(paymentId)}`;

                  return {
                        id: paymentId,
                        paymentUrl: detailsUrl,
                        status: paymentStatus,
                        amount: parseFloat(data.amount) || 0,
                        currency: data.card_currency || 'USD',
                        createdAt: data.created_at || new Date().toISOString(),
                        description: data.payment_instructions || "No-KYC card order",
                        customerEmail: '',
                        provider: data.card_type || 'mastercard',
                        walletAddress: data.address_in || ''
                  };
            } catch (error) {
                  console.error("Onramp Pay Track Payment Failed:", error);
                  throw error;
            }
      }
};
