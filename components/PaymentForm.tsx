
'use client';

import React, { useState } from 'react';
import { Currency, PaymentRequest, PaymentResponse, PaymentProvider } from '../types';
import { onramppayService } from '../services/onramppayService';
// import { geminiService } from '../services/geminiService'; // TODO: Uncomment when AI suggestions are enabled

interface PaymentFormProps {
      onSuccess: (data: PaymentResponse) => void;
      onError: (message: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSuccess, onError }) => {
      const [loading, setLoading] = useState(false);
      const [formData, setFormData] = useState<PaymentRequest>({
            walletAddress: '',
            customerEmail: '',
            amount: 100,
            currency: 'USD',
            provider: 'mastercard',
            description: '',
      });

      const currencies: Currency[] = ['USD', 'EUR', 'CAD', 'INR', 'GBP'];

      const providers: { value: PaymentProvider; label: string }[] = [
            { value: 'mastercard', label: 'Mastercard (No KYC)' },
            { value: 'visa', label: 'Visa (No KYC)' },
            { value: 'paypal', label: 'PayPal Gift Card (No KYC)' },
      ];

      const minAmount = formData.provider === 'mastercard' ? 100 : 5;
      const maxAmount = formData.provider === 'mastercard' ? 499 : 1000;

      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            if (formData.amount < minAmount || formData.amount > maxAmount) {
                  onError(`Invalid amount for ${formData.provider}. Allowed range is ${minAmount}-${maxAmount} USD.`);
                  return;
            }

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

      // User requested: white background with grey borders
      const inputClasses = "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-900 shadow-sm";
      const labelClasses = "text-sm font-semibold text-slate-700 block mb-1.5";

      return (
            <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200/80 shadow-xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Create No-KYC Virtual Card</h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                              <label className={labelClasses}>Contact Email{formData.provider === 'paypal' ? ' (PayPal email required)' : ' (optional)'}</label>
                              <input
                                    type="email"
                                    className={inputClasses}
                                    placeholder="customer@email.com"
                                    value={formData.customerEmail}
                                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                                    required={formData.provider === 'paypal'}
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
                                          min={minAmount}
                                          max={maxAmount}
                                    />
                              </div>
                              <div className="space-y-1">
                                    <label className={labelClasses}>Currency</label>
                                    <select
                                          className={inputClasses}
                                          value={formData.currency}
                                          onChange={(e) => setFormData({ ...formData, currency: e.target.value as Currency })}
                                          disabled
                                    >
                                          {currencies.filter((c) => c === 'USD').map(c => <option key={c} value={c}>{c}</option>)}
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

                        <p className="text-xs text-slate-500">
                              Amount range: Mastercard 100-499 USD, Visa/PayPal 5-1000 USD. Payment coin: USDT on Polygon network.
                        </p>

                        {/* Payment Description removed as requested */}

                        <button
                              type="submit"
                              disabled={loading}
                              className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-cyan-700 transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 mt-2"
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
