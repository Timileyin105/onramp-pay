
import React, { useState } from 'react';
import { Currency, PaymentRequest, PaymentResponse, PaymentProvider } from '../types';
import { onramppayService } from '../services/onramppayService';
import { geminiService } from '../services/geminiService';

interface PaymentFormProps {
      onSuccess: (data: PaymentResponse) => void;
      onError: (message: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSuccess, onError }) => {
      const [loading, setLoading] = useState(false);
      const [suggesting, setSuggesting] = useState(false);
      const [formData, setFormData] = useState<PaymentRequest>({
            walletAddress: '',
            customerEmail: '',
            amount: 0,
            currency: 'USD',
            provider: 'hosted',
            description: '',
      });

      const currencies: Currency[] = ['USD', 'EUR', 'CAD', 'INR', 'GBP'];

      const providers: { value: PaymentProvider; label: string }[] = [
            { value: 'hosted', label: 'Multi Hosted Providers' },
            { value: 'wert', label: 'Wert.io' },
            { value: 'stripe', label: 'Stripe (USA)' },
            { value: 'rampnetwork', label: 'ramp.network' },
            { value: 'robinhood', label: 'Robinhood (USA)' },
            { value: 'revolut', label: 'Revolut (EU/EEA)' },
            { value: 'unlimit', label: 'Unlimit' },
            { value: 'bitnovo', label: 'Bitnovo' },
            { value: 'topper', label: 'Topper' },
            { value: 'transak', label: 'Transak' },
            { value: 'binance', label: 'Binance Connect' },
            { value: 'moonpay', label: 'MoonPay' },
            { value: 'banxa', label: 'Banxa' },
            { value: 'cryptix', label: 'Cryptix' },
            { value: 'particle', label: 'particle.network' },
            { value: 'sardine', label: 'Sardine.ai' },
            { value: 'utorg', label: 'UTORG' },
            { value: 'ideal', label: 'iDEAL (NL)' },
            { value: 'simplex', label: 'Simplex' },
            { value: 'upi', label: 'UPI/IMPS' },
            { value: 'interac', label: 'Interac' },
      ];

      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setLoading(true);
            try {
                  const response = await onramppayService.createPayment(formData);
                  onSuccess(response);
            } catch (err: any) {
                  const baseMessage = 'An unexpected error happened. Please return to the previous tab and select another payment provider.';
                  const details = err?.message ? ` Details: ${err.message}` : '';
                  onError(`${baseMessage}${details}`);
            } finally {
                  setLoading(false);
            }
      };

      const handleSuggestDescription = async () => {
            //     if (!formData.description) return;
            //     setSuggesting(true);
            //     const suggestion = await geminiService.suggestDescription(formData.description);
            //     setFormData(prev => ({ ...prev, description: suggestion }));
            //     setSuggesting(false);
      };

      // User requested: white background with grey borders
      const inputClasses = "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-900 shadow-sm";
      const labelClasses = "text-sm font-semibold text-slate-700 block mb-1.5";

      return (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Create Payment Link</h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                              <label className={labelClasses}>Merchant or Freelancer Wallet Address (Receiver)</label>
                              <input
                                    type="text"
                                    required
                                    className={inputClasses}
                                    placeholder="Enter wallet address"
                                    value={formData.walletAddress}
                                    onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
                              />
                        </div>

                        <div className="space-y-1">
                              <label className={labelClasses}>Customer or Payer Email</label>
                              <input
                                    type="email"
                                    required
                                    className={inputClasses}
                                    placeholder="customer@email.com"
                                    value={formData.customerEmail}
                                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                              />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                    <label className={labelClasses}>Amount to Pay</label>
                                    <input
                                          type="number"
                                          step="0.01"
                                          required
                                          className={inputClasses}
                                          placeholder="0.00"
                                          value={formData.amount || ''}
                                          onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) || 0 })}
                                    />
                              </div>
                              <div className="space-y-1">
                                    <label className={labelClasses}>Currency</label>
                                    <select
                                          className={inputClasses}
                                          value={formData.currency}
                                          onChange={(e) => setFormData({ ...formData, currency: e.target.value as Currency })}
                                    >
                                          {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                              </div>
                        </div>

                        <div className="space-y-1">
                              <label className={labelClasses}>Provider</label>
                              <select
                                    className={inputClasses}
                                    value={formData.provider}
                                    onChange={(e) => setFormData({ ...formData, provider: e.target.value as PaymentProvider })}
                              >
                                    {providers.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                              </select>
                        </div>

                        {/* Payment Description removed as requested */}

                        <button
                              type="submit"
                              disabled={loading}
                              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 mt-2"
                        >
                              {loading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                              ) : 'Generate Payment Link'}
                        </button>
                  </form>
            </div>
      );
};

export default PaymentForm;
