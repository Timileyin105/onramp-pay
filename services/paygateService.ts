
import { PaymentRequest, PaymentResponse, PaymentDetails, PaymentStatus } from '../types';

/**
 * Paygate API Service Wrapper
 * Documentation: https://documenter.getpostman.com/view/14826208/2sA3Bj9aBi
 */
const BASE_URL = 'https://voodoo-pay.uk/api';

export const paygateService = {
      /**
       * Generates a new payment link using the checkout API
       */
      createPayment: async (request: PaymentRequest): Promise<PaymentResponse> => {
            try {
                  // Build custom_id for callback (timestamp + random)
                  const customId = `${Date.now()}_${Math.floor(Math.random() * 10000000)}`;
                  const callbackUrl = `https://voodoo-pay.uk/payment-link/invoice.php?payment=${customId}`;
                  // Encode callback URL for GET param
                  const encodedCallback = encodeURIComponent(callbackUrl);
                  const walletApiUrl = `https://api.voodoo-pay.uk/control/wallet.php?address=${request.walletAddress}&callback=${encodedCallback}`;

                  const response = await fetch(walletApiUrl);
                  if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(errorData.message || `API Error: ${response.status}`);
                  }
                  const data = await response.json();
                  // Compose checkout URL
                  const checkoutUrl = `https://checkout.voodoo-pay.uk/pay.php?address=${data.address_in}` +
                        `&amount=${request.amount}` +
                        `&provider=${request.provider}` +
                        `&email=${encodeURIComponent(request.customerEmail)}` +
                        `&currency=${request.currency}`;

                  return {
                        id: data.address_in, // tracking id
                        paymentUrl: checkoutUrl,
                        status: PaymentStatus.PENDING,
                        amount: request.amount,
                        currency: request.currency,
                        provider: request.provider,
                        walletAddress: request.walletAddress,
                        createdAt: new Date().toISOString()
                  };
            } catch (error) {
                  console.error("Voodoo Pay Create Payment Failed:", error);
                  throw error;
            }
      },

      /**
       * Tracks/Fetches payment status by ID
       */
      trackPayment: async (paymentId: string): Promise<PaymentDetails> => {
            try {
                  // Endpoint typically used for checking status of a transaction
                  const response = await fetch(`${BASE_URL}/status?id=${paymentId}`);

                  if (!response.ok) {
                        throw new Error(`Tracking Error: ${response.status}`);
                  }

                  const data = await response.json();

                  return {
                        id: paymentId,
                        paymentUrl: data.url || `https://voodoo-pay.uk/pay/${paymentId}`,
                        status: (data.status?.toLowerCase() as PaymentStatus) || PaymentStatus.PENDING,
                        amount: parseFloat(data.amount) || 0,
                        currency: data.currency || 'USD',
                        createdAt: data.created_at || new Date().toISOString(),
                        description: data.description || "Transaction Details",
                        customerEmail: data.email_address || "",
                        provider: data.provider || 'hosted',
                        walletAddress: data.wallet_address || ''
                  };
            } catch (error) {
                  console.error("Voodoo Pay Track Payment Failed:", error);
                  throw error;
            }
      }
};
