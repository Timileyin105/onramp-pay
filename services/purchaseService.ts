export type PurchaseRequest = {
      name: string;
      email: string;
      plan: string;
      amount: number;
      currency: string;
      paymentMethod: 'card' | 'crypto' | 'onramppay';
};

export type PurchaseResponse = {
      transactionId: string;
      reference: string;
      redirectUrl: string;
};

export const purchaseService = {
      createTransaction: async (payload: PurchaseRequest): Promise<PurchaseResponse> => {
            const response = await fetch('/api/purchase', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(payload),
            });

            if (!response.ok) {
                  const errorData = await response.json().catch(() => ({}));
                  throw new Error(errorData.message || 'Unable to create purchase transaction.');
            }

            return response.json();
      },
};
