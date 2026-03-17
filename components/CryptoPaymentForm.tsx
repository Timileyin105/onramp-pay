'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CryptoPaymentRequest, CryptoPaymentResponse, Currency } from '../types';
import { onrampPayGatewayService } from '../services/onrampPayGatewayService';

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
      const cardClass = 'bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]';
      const primaryButton = 'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400 shadow-[0_10px_40px_rgba(99,102,241,0.35)] transition-all disabled:opacity-70';
      const inputClasses = 'w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-transparent transition-all shadow-[0_10px_25px_rgba(0,0,0,0.25)]';
      const selectClasses = 'w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-900/70 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-transparent transition-all shadow-[0_10px_25px_rgba(0,0,0,0.25)] appearance-none';
      const labelClasses = 'text-sm font-semibold text-slate-200 block mb-1.5';

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
                  const payment = await onrampPayGatewayService.createCryptoPayment(formData);
                  const qrCode = await onrampPayGatewayService.getCryptoQrCode(payment.cryptoCurrency, payment.addressIn);
                  setResult({ payment, qrCode });
            } catch (err: any) {
                  setError(err?.message || 'Failed to create crypto payment.');
            } finally {
                  setLoading(false);
            }
      };

      return (
            <div className="space-y-6 text-slate-100">
                  <div className={`${cardClass} p-8`}>
                        <div className="flex items-start justify-between gap-3 mb-4">
                              <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Crypto QR Invoice</p>
                                    <h2 className="text-3xl font-bold text-white">Create Crypto Payment</h2>
                                    <p className="text-sm text-slate-300 mt-1">Generate a coin amount, QR, and address-in for your payout wallet.</p>
                              </div>
                              <span className="px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-100 text-[11px] font-semibold border border-emerald-400/30">Live</span>
                        </div>

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
                                                className={selectClasses}
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
                                          className={selectClasses}
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

                              {error && <p className="text-sm text-red-300 font-medium">{error}</p>}

                              <button
                                    type="submit"
                                    disabled={loading}
                                    className={`${primaryButton} w-full py-4 text-lg`}
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
                        <div ref={detailsRef} className={`${cardClass} p-8 space-y-5`}>
                              <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white">Payment Details</h3>
                                    <span className="text-[11px] px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-100 border border-cyan-400/30">Share & Pay</span>
                              </div>

                              <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                                          <p className="text-xs font-bold text-slate-300 uppercase mb-1">Pay This Coin Amount</p>
                                          <p className="text-lg font-bold text-cyan-100">{result.payment.coinAmount} {result.payment.cryptoCurrency.toUpperCase()}</p>
                                          <p className="text-sm text-slate-300 mt-1">From {result.payment.fiatAmount} {result.payment.fiatCurrency}</p>
                                    </div>
                                    <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                                          <p className="text-xs font-bold text-slate-300 uppercase mb-1">Address In</p>
                                          <p className="text-sm font-mono text-slate-100 break-all">{result.payment.addressIn}</p>
                                    </div>
                              </div>

                              <div className="flex justify-center">
                                    <img
                                          src={`data:image/png;base64,${result.qrCode}`}
                                          alt="Crypto payment QR code"
                                          className="w-56 h-56 rounded-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                                    />
                              </div>

                              <div>
                                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">Shareable Payment Link</label>
                                    <div className="flex items-center gap-2">
                                          <input
                                                type="text"
                                                readOnly
                                                value={result.payment.paymentUrl}
                                                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-cyan-100 font-medium text-sm"
                                          />
                                          <button
                                                type="button"
                                                onClick={() => handleCopy(result.payment.paymentUrl, 'Payment link copied!')}
                                                className={`${primaryButton} px-3 py-3 text-xs font-bold shadow-none`}
                                          >
                                                Copy
                                          </button>
                                    </div>
                              </div>

                              <div>
                                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">Address In</label>
                                    <div className="flex items-center gap-2">
                                          <input
                                                type="text"
                                                readOnly
                                                value={result.payment.addressIn}
                                                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-cyan-100 font-mono text-xs"
                                          />
                                          <button
                                                type="button"
                                                onClick={() => handleCopy(result.payment.addressIn, 'Address copied!')}
                                                className={`${primaryButton} px-3 py-3 text-xs font-bold shadow-none`}
                                          >
                                                Copy
                                          </button>
                                    </div>
                              </div>

                              {copyMessage && <p className="text-sm text-emerald-200 font-medium">{copyMessage}</p>}
                        </div>
                  )}
            </div>
      );
};

export default CryptoPaymentForm;
