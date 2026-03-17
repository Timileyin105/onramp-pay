
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Currency, PaymentRequest, PaymentResponse, PaymentProvider, ProviderStatus } from '../types';
import { onrampPayGatewayService } from '../services/onrampPayGatewayService';

interface PaymentFormProps {
      onSuccess: (data: PaymentResponse) => void;
      onError: (message: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSuccess, onError }) => {
      const [loading, setLoading] = useState(false);
      const [providersLoading, setProvidersLoading] = useState(true);
      const [providersError, setProvidersError] = useState<string | null>(null);
      const [providerStatusMap, setProviderStatusMap] = useState<Partial<Record<PaymentProvider, ProviderStatus>>>({});
      const [formData, setFormData] = useState<PaymentRequest>({
            walletAddress: '',
            customerEmail: '',
            amount: 1,
            currency: 'USD',
            provider: 'hosted',
            description: '',
      });

      const currencies: Currency[] = ['USD', 'EUR', 'CAD', 'INR', 'GBP'];

      const fallbackProviders: ProviderStatus[] = [
            { id: 'hosted', provider_name: 'Multi Hosted Providers', status: 'active', minimum_currency: 'USD', minimum_amount: 1 },
            { id: 'wert', provider_name: 'Wert.io', status: 'active', minimum_currency: 'USD', minimum_amount: 1 },
            { id: 'stripe', provider_name: 'Stripe (USA)', status: 'active', minimum_currency: 'USD', minimum_amount: 2 },
            { id: 'rampnetwork', provider_name: 'ramp.network', status: 'active', minimum_currency: 'USD', minimum_amount: 4 },
            { id: 'robinhood', provider_name: 'Robinhood (USA)', status: 'active', minimum_currency: 'USD', minimum_amount: 5 },
            { id: 'revolut', provider_name: 'Revolut (EU/EEA)', status: 'active', minimum_currency: 'EUR', minimum_amount: 6 },
            { id: 'bitnovo', provider_name: 'Bitnovo', status: 'active', minimum_currency: 'USD', minimum_amount: 10 },
            { id: 'topper', provider_name: 'Topper', status: 'active', minimum_currency: 'USD', minimum_amount: 10 },
            { id: 'transak', provider_name: 'Transak', status: 'active', minimum_currency: 'USD', minimum_amount: 10 },
            { id: 'binance', provider_name: 'Binance Connect', status: 'active', minimum_currency: 'USD', minimum_amount: 10 },
      ];

      const providerOptions = useMemo(() => {
            return Object.values(providerStatusMap).map((p) => ({
                  value: p.id,
                  label: p.provider_name,
                  minAmount: p.minimum_amount,
                  minCurrency: p.minimum_currency,
            }));
      }, [providerStatusMap]);

      const selectedProvider = providerStatusMap[formData.provider];
      const minAmount = selectedProvider?.minimum_amount ?? 1;

      useEffect(() => {
            let isMounted = true;

            const normalize = (list: ProviderStatus[]) => {
                  const activeProviders = list.filter((p) => p.status === 'active');
                  const hasHosted = activeProviders.some((p) => p.id === 'hosted');
                  if (!hasHosted) {
                        activeProviders.unshift({
                              id: 'hosted',
                              provider_name: 'Multi Hosted Providers',
                              status: 'active',
                              minimum_currency: 'USD',
                              minimum_amount: 1,
                        });
                  }
                  return activeProviders;
            };

            const fetchProviders = async () => {
                  setProvidersLoading(true);
                  try {
                        const liveProviders = await onrampPayGatewayService.fetchProviders();
                        if (!isMounted) return;
                        const normalized = normalize(liveProviders);
                        const map = normalized.reduce((acc, provider) => {
                              acc[provider.id as PaymentProvider] = provider;
                              return acc;
                        }, {} as Partial<Record<PaymentProvider, ProviderStatus>>);
                        setProviderStatusMap(map);
                        const first = normalized[0];
                        setFormData((prev) => ({
                              ...prev,
                              provider: first?.id ?? prev.provider,
                              currency: first?.minimum_currency ?? prev.currency,
                              amount: Math.max(first?.minimum_amount ?? 1, prev.amount || 0),
                        }));
                  } catch (err: any) {
                        const normalized = normalize(fallbackProviders);
                        const map = normalized.reduce((acc, provider) => {
                              acc[provider.id as PaymentProvider] = provider;
                              return acc;
                        }, {} as Partial<Record<PaymentProvider, ProviderStatus>>);
                        if (isMounted) {
                              setProviderStatusMap(map);
                              setProvidersError('Live provider status unavailable. Using fallback list.');
                              const first = normalized[0];
                              setFormData((prev) => ({
                                    ...prev,
                                    provider: first?.id ?? prev.provider,
                                    currency: first?.minimum_currency ?? prev.currency,
                                    amount: Math.max(first?.minimum_amount ?? 1, prev.amount || 0),
                              }));
                        }
                  } finally {
                        if (isMounted) setProvidersLoading(false);
                  }
            };

            fetchProviders();
            return () => {
                  isMounted = false;
            };
      }, []);

      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            if (!formData.walletAddress.trim()) {
                  onError('Wallet address is required to generate a payment link.');
                  return;
            }

            if (formData.amount < minAmount) {
                  const providerLabel = selectedProvider?.provider_name || formData.provider;
                  const minCurrency = selectedProvider?.minimum_currency || formData.currency;
                  onError(`Minimum amount for ${providerLabel} is ${minCurrency} ${minAmount}.`);
                  return;
            }

            setLoading(true);
            try {
                  const response = await onrampPayGatewayService.createPayment(formData);
                  onSuccess(response);
            } catch (err: any) {
                  const baseMessage = 'An unexpected error happened. Please return to the previous tab and select another payment provider.';
                  const details = err?.message ? ` Details: ${err.message}` : '';
                  onError(`${baseMessage}${details}`);
            } finally {
                  setLoading(false);
            }
      };

      const inputClasses = "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-100 shadow-sm backdrop-blur";
      const selectClasses = "w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-900/70 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all backdrop-blur appearance-none disabled:opacity-60";
      const labelClasses = "text-sm font-semibold text-slate-100 block mb-1.5";
      const primaryButton = "w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400 transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(99,102,241,0.35)] mt-2";

      return (
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                  <h2 className="text-3xl font-bold text-white mb-6">Create Payment Link</h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                              <label className={labelClasses}>Merchant or Freelancer Wallet Address (Receiver)</label>
                              <input
                                    type="text"
                                    className={inputClasses}
                                    placeholder="Enter wallet address"
                                    value={formData.walletAddress}
                                    onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
                                    required
                              />
                        </div>

                        <div className="space-y-1">
                              <label className={labelClasses}>Customer or Payer Email</label>
                              <input
                                    type="email"
                                    className={inputClasses}
                                    placeholder="customer@email.com"
                                    value={formData.customerEmail}
                                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                                    required
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
                                    />
                              </div>
                              <div className="space-y-1">
                                    <label className={labelClasses}>Currency</label>
                                    <select
                                          className={selectClasses}
                                          value={formData.currency}
                                          onChange={(e) => setFormData({ ...formData, currency: e.target.value as Currency })}
                                          disabled={providersLoading}
                                    >
                                          {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                              </div>
                        </div>

                        <div className="space-y-1">
                              <label className={labelClasses}>Provider</label>
                              <select
                                    className={selectClasses}
                                    value={formData.provider}
                                    onChange={(e) => {
                                          const newProvider = e.target.value as PaymentProvider;
                                          const providerInfo = providerStatusMap[newProvider];
                                          setFormData((prev) => ({
                                                ...prev,
                                                provider: newProvider,
                                                currency: providerInfo?.minimum_currency || prev.currency,
                                                amount: Math.max(providerInfo?.minimum_amount ?? 1, prev.amount || 0),
                                          }));
                                    }}
                                    disabled={providersLoading}
                              >
                                    {providersLoading && providerOptions.length === 0 && (
                                          <option value="" disabled>Loading providers...</option>
                                    )}
                                    {providerOptions.map((p) => (
                                          <option key={p.value} value={p.value}>
                                                {p.label} (min {p.minCurrency} {p.minAmount})
                                          </option>
                                    ))}
                              </select>
                        </div>

                        <p className="text-xs text-slate-200/80">
                              Select a provider to see the minimum supported amount and currency. Payment coin remains USDT on Polygon.
                        </p>

                        {providersError && (
                              <p className="text-xs text-amber-200/80">{providersError}</p>
                        )}

                        {/* Payment Description removed as requested */}

                        <button
                              type="submit"
                              disabled={loading || providersLoading}
                              className={primaryButton}
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
