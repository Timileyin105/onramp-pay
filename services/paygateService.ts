
import { PaymentRequest, PaymentResponse, PaymentDetails, PaymentStatus } from '../types';

/**
 * Paygate API Service Wrapper
 * Documentation: https://documenter.getpostman.com/view/14826208/2sA3Bj9aBi
 */
const BASE_URL = 'https://paygate.to/api';

export const paygateService = {
  /**
   * Generates a new payment link using the checkout API
   */
  createPayment: async (request: PaymentRequest): Promise<PaymentResponse> => {
    try {
      const response = await fetch(`${BASE_URL}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          wallet_address: request.walletAddress,
          email_address: request.customerEmail,
          amount: request.amount.toString(),
          currency: request.currency,
          provider: request.provider,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API Error: ${response.status}`);
      }

      const data = await response.json();

      // Mapping Paygate API response to our app's PaymentResponse type
      // Based on typical Paygate responses containing a redirect URL and ID
      return {
        id: data.id || `pg_${Math.random().toString(36).substr(2, 9)}`,
        paymentUrl: data.url || data.redirect_url || `https://paygate.to/pay/${data.id}`,
        status: PaymentStatus.PENDING,
        amount: request.amount,
        currency: request.currency,
        provider: request.provider,
        walletAddress: request.walletAddress,
        createdAt: new Date().toISOString()
      };
    } catch (error) {
      console.error("PayGate Create Payment Failed:", error);
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
        paymentUrl: data.url || `https://paygate.to/pay/${paymentId}`,
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
      console.error("PayGate Track Payment Failed:", error);
      throw error;
    }
  }
};
