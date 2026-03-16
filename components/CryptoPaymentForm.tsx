'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CryptoPaymentRequest, CryptoPaymentResponse, Currency } from '../types';
import { paygateService } from '../services/paygateService';

interface CryptoPaymentResult {
      payment: CryptoPaymentResponse;
      qrCode: string;
}

const CryptoPaymentForm: React.FC = () => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const [copyMessage, setCopyMessage] = useState<string | null>(null);
      const [result, setResult] = useState<CryptoPaymentResult | null>(null);
      const detailsRef = useRef<HTMLDivElement | null>(null);
      const [formData, setFormData] = useState<CryptoPaymentRequest>({
            amount: 0,
            fiatCurrency: 'USD',
            cryptoCurrency: 'btc',
            payoutAddress: '',
      });

      useEffect(() => {
            if (!result || !detailsRef.current) return;
            const timer = setTimeout(() => {
                  detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            return () => clearTimeout(timer);
      }, [result]);

      const currencies: Currency[] = ['USD', 'EUR', 'CAD', 'INR', 'GBP'];
      const cryptoOptions: { label: string; value: string }[] = [
            { label: 'BTC', value: 'btc' },
            { label: 'ETH', value: 'eth' },
            { label: 'BCH', value: 'bch' },
            { label: 'DOGE', value: 'doge' },
            { label: 'Polygon USDC', value: 'polygon/usdc' },
            { label: 'Polygon USDT', value: 'polygon/usdt' },
            { label: 'BEP20 XRP', value: 'bep20/xrp' },
            { label: 'ERC20/WXRP', value: 'erc20/wxrp' },
      ];
      const inputClasses = 'w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-900 shadow-sm';
      const labelClasses = 'text-sm font-semibold text-slate-700 block mb-1.5';

      const handleCopy = async (value: string, message: string) => {
            try {
                  await navigator.clipboard.writeText(value);
                  setCopyMessage(message);
            } catch {
                  setCopyMessage('Copy failed.');
            } finally {
                  setTimeout(() => setCopyMessage(null), 2000);
            }
      };

      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            if (!formData.amount || formData.amount <= 0) {
                  setError('Amount must be greater than 0.');
                  return;
            }
            if (!formData.payoutAddress.trim()) {
                  setError('Payout wallet address is required.');
                  return;
            }

            setLoading(true);
            setError(null);
            setResult(null);

            try {
                  const payment = await paygateService.createCryptoPayment(formData);
                  const qrCode = await paygateService.getCryptoQrCode(payment.cryptoCurrency, payment.addressIn);
                  setResult({ payment, qrCode });
            } catch (err: any) {
                  setError(err?.message || 'Failed to create crypto payment.');
            } finally {
                  setLoading(false);
            }
      };

      return (
            <div className="space-y-6">
                  <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200/80 shadow-xl">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Create Crypto Payment</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                          <label className={labelClasses}>Fiat Currency</label>
                                          <select
                                                className={inputClasses}
                                                value={formData.fiatCurrency}
                                                onChange={(e) => setFormData({ ...formData, fiatCurrency: e.target.value as Currency })}
                                          >
                                                {currencies.map((currency) => (
                                                      <option key={currency} value={currency}>{currency}</option>
                                                ))}
                                          </select>
                                    </div>
                              </div>

                              <div className="space-y-1">
                                    <label className={labelClasses}>Crypto Currency</label>
                                    <select
                                          required
                                          className={inputClasses}
                                          value={formData.cryptoCurrency}
                                          onChange={(e) => setFormData({ ...formData, cryptoCurrency: e.target.value })}
                                    >
                                          {cryptoOptions.map((option) => (
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                          ))}
                                    </select>
                              </div>

                              <div className="space-y-1">
                                    <label className={labelClasses}>Merchant or Freelancer Wallet Address (Receiver)</label>
                                    <input
                                          type="text"
                                          required
                                          className={inputClasses}
                                          placeholder="Enter payout wallet address"
                                          value={formData.payoutAddress}
                                          onChange={(e) => setFormData({ ...formData, payoutAddress: e.target.value })}
                                    />
                              </div>

                              {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

                              <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-cyan-700 transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
                              >
                                    {loading ? (
                                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                          </svg>
                                    ) : 'Create Crypto Payment'}
                              </button>
                        </form>
                  </div>

                  {result && (
                        <div ref={detailsRef} className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200/80 shadow-xl space-y-5">
                              <h3 className="text-2xl font-bold text-slate-900">Payment Details</h3>

                              <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                                          <p className="text-xs font-bold text-slate-500 uppercase mb-1">Pay This Coin Amount</p>
                                          <p className="text-lg font-bold text-indigo-700">{result.payment.coinAmount} {result.payment.cryptoCurrency.toUpperCase()}</p>
                                          <p className="text-sm text-slate-600 mt-1">From {result.payment.fiatAmount} {result.payment.fiatCurrency}</p>
                                    </div>
                                    <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                                          <p className="text-xs font-bold text-slate-500 uppercase mb-1">Address In</p>
                                          <p className="text-sm font-mono text-slate-800 break-all">{result.payment.addressIn}</p>
                                    </div>
                              </div>

                              <div className="flex justify-center">
                                    <img
                                          src={`data:image/png;base64,${result.qrCode}`}
                                          alt="Crypto payment QR code"
                                          className="w-56 h-56 rounded-xl border border-slate-200"
                                    />
                              </div>

                              <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Shareable Payment Link</label>
                                    <div className="flex items-center gap-2">
                                          <input
                                                type="text"
                                                readOnly
                                                value={result.payment.paymentUrl}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-indigo-600 font-medium text-sm"
                                          />
                                          <button
                                                type="button"
                                                onClick={() => handleCopy(result.payment.paymentUrl, 'Payment link copied!')}
                                                className="px-3 py-3 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors"
                                          >
                                                Copy
                                          </button>
                                    </div>
                              </div>

                              <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Address In</label>
                                    <div className="flex items-center gap-2">
                                          <input
                                                type="text"
                                                readOnly
                                                value={result.payment.addressIn}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-700 font-mono text-xs"
                                          />
                                          <button
                                                type="button"
                                                onClick={() => handleCopy(result.payment.addressIn, 'Address copied!')}
                                                className="px-3 py-3 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors"
                                          >
                                                Copy
                                          </button>
                                    </div>
                              </div>

                              {copyMessage && <p className="text-sm text-green-600 font-medium">{copyMessage}</p>}
                        </div>
                  )}
            </div>
      );
};

export default CryptoPaymentForm;
