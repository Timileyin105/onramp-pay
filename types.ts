
export type Currency = 'USD' | 'EUR' | 'CAD' | 'INR' | 'GBP';

export type PaymentProvider = 
  | 'hosted' | 'wert' | 'stripe' | 'rampnetwork' | 'robinhood' | 'revolut' 
  | 'unlimit' | 'bitnovo' | 'topper' | 'transak' | 'binance' | 'moonpay' 
  | 'banxa' | 'cryptix' | 'particle' | 'sardine' | 'utorg' | 'ideal' 
  | 'simplex' | 'upi' | 'interac';

export interface PaymentRequest {
  walletAddress: string;
  customerEmail: string;
  amount: number;
  currency: Currency;
  provider: PaymentProvider;
  description: string;
}

export interface PaymentResponse {
  id: string;
  paymentUrl: string;
  status: PaymentStatus;
  amount: number;
  currency: string;
  createdAt: string;
  provider?: string;
  walletAddress?: string;
}

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  EXPIRED = 'expired',
  CANCELLED = 'cancelled'
}

export interface PaymentDetails extends PaymentResponse {
  customerEmail: string;
  description: string;
}
