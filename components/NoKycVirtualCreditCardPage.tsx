'use client';

import React, { useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import {
      CreateNoKycCardResponse,
      NoKycCardProvider,
      NoKycCardStatusResponse,
      noKycCardService,
} from '@/services/noKycCardService';
import Toast from './Toast';

const providers: Array<{ value: NoKycCardProvider; label: string; min: number; max: number }> = [
      { value: 'mastercard', label: 'Mastercard', min: 100, max: 499 },
      { value: 'visa', label: 'Visa', min: 5, max: 1000 },
      { value: 'paypal', label: 'PayPal Gift Card', min: 5, max: 1000 },
];

const NoKycVirtualCreditCardPage: React.FC = () => {
      const [provider, setProvider] = useState<NoKycCardProvider>('mastercard');
      const [amount, setAmount] = useState<number>(150);
      const [paypalEmail, setPaypalEmail] = useState<string>('');
      const [loadingCreate, setLoadingCreate] = useState(false);
      const [loadingStatus, setLoadingStatus] = useState(false);
      const [cardData, setCardData] = useState<CreateNoKycCardResponse | null>(null);
      const [redeemId, setRedeemId] = useState<string>('');
      const [statusData, setStatusData] = useState<NoKycCardStatusResponse | null>(null);
      const [toast, setToast] = useState<string | null>(null);

      const showToast = useCallback((message: string) => {
            setToast(message);
            window.setTimeout(() => setToast(null), 2800);
      }, []);

      const selectedProvider = useMemo(
            () => providers.find((p) => p.value === provider) || providers[0],
            [provider]
      );

      const panelClass = 'bg-slate-900/60 text-slate-100 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]';
      const primaryButtonClass =
            'relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_15px_45px_rgba(59,130,246,0.4)] transition-all duration-200 hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed';
      const selectClass = 'w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-900/70 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-transparent transition-all backdrop-blur appearance-none';

      const handleCreateCard = async (event: React.FormEvent) => {
            event.preventDefault();
            setStatusData(null);

            if (amount < selectedProvider.min || amount > selectedProvider.max) {
                  showToast(`${selectedProvider.label} amount must be between ${selectedProvider.min} and ${selectedProvider.max} USD.`);
                  return;
            }

            if (provider === 'paypal' && !paypalEmail.trim()) {
                  showToast('PayPal email is required when card type is PayPal.');
                  return;
            }

            setLoadingCreate(true);
            try {
                  const response = await noKycCardService.createCard({
                        provider,
                        amount,
                        paypalEmail: provider === 'paypal' ? paypalEmail.trim() : undefined,
                  });
                  setCardData(response);
                  setRedeemId(response.redeem_id);
            } catch (err) {
                  const message = err instanceof Error ? err.message : 'Unable to create card order.';
                  showToast(message);
            } finally {
                  setLoadingCreate(false);
            }
      };

      const handleCheckStatus = async (event: React.FormEvent) => {
            event.preventDefault();
            if (!redeemId.trim()) {
                  showToast('Please enter a redeem ID.');
                  return;
            }

            setLoadingStatus(true);
            try {
                  const response = await noKycCardService.checkStatus(redeemId.trim());
                  setStatusData(response);
            } catch (err) {
                  const message = err instanceof Error ? err.message : 'Unable to check card status.';
                  showToast(message);
            } finally {
                  setLoadingStatus(false);
            }
      };

      return (
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/25 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-indigo-500/25 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  <div className="relative max-w-6xl mx-auto py-14 px-6 space-y-8">
                        <div className="text-center space-y-4">
                              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-100 shadow-[0_10px_40px_rgba(59,130,246,0.35)] backdrop-blur">
                                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                                    Instant delivery, no KYC, USDT on Polygon
                              </div>
                              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                    <span className="bg-gradient-to-r from-cyan-200 via-indigo-200 to-pink-200 bg-clip-text text-transparent">No KYC Virtual Cards</span>
                              </h1>
                              <p className="text-base md:text-lg text-slate-200/80 max-w-3xl mx-auto">
                                    Spin up Visa, Mastercard, or PayPal gift cards in minutes. Fund with crypto, get a redeem ID instantly, and track status live.
                              </p>
                              <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-200/80">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">💳 Choose 3 card types</span>
                                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">⚡ Instant redeem ID</span>
                                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">🛡️ Funds stay on-chain</span>
                              </div>
                        </div>

                        <div className="rounded-2xl border border-amber-300/40 bg-amber-500/10 px-5 py-4 backdrop-blur">
                              <p className="text-sm font-semibold text-amber-100">
                                    Please review the prohibited country list and virtual card info before funding.
                              </p>
                              <Link
                                    href="/virtual-card-policies"
                                    className="mt-2 inline-flex items-center text-sm font-bold text-amber-100 hover:text-white underline underline-offset-4 decoration-amber-200 hover:decoration-white"
                              >
                                    Check prohibited countries & card info
                                    <span className="ml-1">→</span>
                              </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                                    <p className="text-xs text-slate-200/70">Min / Max</p>
                                    <p className="text-lg font-bold">${selectedProvider.min} - ${selectedProvider.max}</p>
                                    <p className="text-xs text-slate-200/70">Based on selected card</p>
                              </div>
                              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                                    <p className="text-xs text-slate-200/70">Network</p>
                                    <p className="text-lg font-bold">USDT • Polygon</p>
                                    <p className="text-xs text-slate-200/70">Exact amount required</p>
                              </div>
                              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                                    <p className="text-xs text-slate-200/70">Delivery</p>
                                    <p className="text-lg font-bold">Instant redeem ID</p>
                                    <p className="text-xs text-slate-200/70">Track live status</p>
                              </div>
                              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                                    <p className="text-xs text-slate-200/70">Support</p>
                                    <p className="text-lg font-bold">24/7 chat</p>
                                    <p className="text-xs text-slate-200/70">Escalations in minutes</p>
                              </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                              <div className={panelClass}>
                                    <div className="flex items-center justify-between mb-6">
                                          <h2 className="text-2xl font-bold text-white">1) Create Card Order</h2>
                                          <span className="rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1">Live</span>
                                    </div>

                                    <form onSubmit={handleCreateCard} className="space-y-5">
                                          <div>
                                                <label className="text-sm font-semibold text-slate-200 block mb-1.5">Card Type</label>
                                                <select
                                                      className={selectClass}
                                                      value={provider}
                                                      onChange={(event) => setProvider(event.target.value as NoKycCardProvider)}
                                                >
                                                      {providers.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                  {option.label}
                                                            </option>
                                                      ))}
                                                </select>
                                          </div>

                                          <div>
                                                <label className="text-sm font-semibold text-slate-200 block mb-1.5">Amount (USD)</label>
                                                <input
                                                      type="number"
                                                      required
                                                      min={selectedProvider.min}
                                                      max={selectedProvider.max}
                                                      step="0.01"
                                                      value={amount}
                                                      onChange={(event) => setAmount(parseFloat(event.target.value) || 0)}
                                                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-900/60 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
                                                />
                                                <p className="mt-1 text-xs text-slate-300">
                                                      Allowed range: {selectedProvider.min} - {selectedProvider.max} USD
                                                </p>
                                          </div>

                                          {provider === 'paypal' && (
                                                <div>
                                                      <label className="text-sm font-semibold text-slate-200 block mb-1.5">PayPal Email</label>
                                                      <input
                                                            type="email"
                                                            required
                                                            value={paypalEmail}
                                                            onChange={(event) => setPaypalEmail(event.target.value)}
                                                            placeholder="your-paypal@email.com"
                                                            className="w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-900/60 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
                                                      />
                                                </div>
                                          )}

                                          <button type="submit" disabled={loadingCreate} className={primaryButtonClass}>
                                                {loadingCreate ? 'Creating card order...' : 'Create Card'}
                                          </button>
                                    </form>
                              </div>

                              <div className={panelClass}>
                                    <div className="flex items-center justify-between mb-6">
                                          <h2 className="text-2xl font-bold text-white">2) Payment Details</h2>
                                          <span className="rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1">Auto-generated</span>
                                    </div>

                                    {!cardData ? (
                                          <p className="text-slate-300 text-sm">
                                                Create a card order to receive deposit wallet, QR code, and redeem ID.
                                          </p>
                                    ) : (
                                          <div className="space-y-4 text-sm">
                                                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/10">
                                                      <p className="text-xs text-slate-300">Redeem ID</p>
                                                      <p className="font-mono text-white break-all">{cardData.redeem_id}</p>
                                                </div>
                                                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/10">
                                                      <p className="text-xs text-slate-300">Pay To Address (USDT Polygon)</p>
                                                      <p className="font-mono text-white break-all">{cardData.address_in}</p>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                      <div className="p-4 rounded-xl bg-slate-900/50 border border-white/10">
                                                            <p className="text-xs text-slate-300">Amount</p>
                                                            <p className="font-semibold text-white">{cardData.amount} {cardData.payment_coin}</p>
                                                      </div>
                                                      <div className="p-4 rounded-xl bg-slate-900/50 border border-white/10">
                                                            <p className="text-xs text-slate-300">Card Value</p>
                                                            <p className="font-semibold text-white">{cardData.card_value} {cardData.card_currency}</p>
                                                      </div>
                                                </div>

                                                {cardData.qr_code && (
                                                      <div className="p-4 rounded-xl bg-slate-900/50 border border-white/10 flex flex-col items-center">
                                                            <p className="text-xs text-slate-300 mb-2">Payment QR</p>
                                                            <img
                                                                  src={`data:image/png;base64,${cardData.qr_code}`}
                                                                  alt="Payment QR"
                                                                  className="w-40 h-40 rounded-lg border border-slate-200"
                                                            />
                                                      </div>
                                                )}

                                                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                                                      Send exact amount in USDT Polygon only. Wrong token/network may permanently lose funds.
                                                </p>
                                          </div>
                                    )}
                              </div>
                        </div>

                        <div className={panelClass}>
                              <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-white">3) Check Status & Redeem</h2>
                                    <span className="rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1">Track</span>
                              </div>

                              <form onSubmit={handleCheckStatus} className="grid md:grid-cols-[1fr_auto] gap-3 mb-6">
                                    <input
                                          type="text"
                                          value={redeemId}
                                          onChange={(event) => setRedeemId(event.target.value)}
                                          placeholder="Enter redeem ID"
                                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-slate-900/60 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
                                          required
                                    />
                                    <button type="submit" disabled={loadingStatus} className={`${primaryButtonClass} md:w-auto`}>
                                          {loadingStatus ? 'Checking...' : 'Check Status'}
                                    </button>
                              </form>

                              {statusData && (
                                    <div className="space-y-3 text-sm">
                                          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/10">
                                                <p className="text-xs text-slate-300">Payment Status</p>
                                                <p className="font-semibold text-white uppercase">{statusData.payment_status}</p>
                                          </div>
                                          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/10">
                                                <p className="text-xs text-slate-300">Card Issuer Status</p>
                                                <p className="font-semibold text-white uppercase">{statusData.card_issuer_status}</p>
                                          </div>
                                          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/10">
                                                <p className="text-xs text-slate-300">Redeem Link</p>
                                                {statusData.redeem_link && statusData.redeem_link !== 'N/A' ? (
                                                      <a
                                                            href={statusData.redeem_link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-cyan-200 font-semibold break-all hover:text-white"
                                                      >
                                                            {statusData.redeem_link}
                                                      </a>
                                                ) : (
                                                      <p className="text-slate-300">N/A (not ready yet)</p>
                                                )}
                                          </div>
                                    </div>
                              )}
                        </div>
                  </div>

                  {toast && <Toast message={toast} onClose={() => setToast(null)} position="center" />}
            </div>
      );
};

export default NoKycVirtualCreditCardPage;
