'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
      CreateNoKycCardResponse,
      NoKycCardProvider,
      NoKycCardStatusResponse,
      noKycCardService,
} from '@/services/noKycCardService';

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
      const [error, setError] = useState<string | null>(null);
      const [cardData, setCardData] = useState<CreateNoKycCardResponse | null>(null);
      const [redeemId, setRedeemId] = useState<string>('');
      const [statusData, setStatusData] = useState<NoKycCardStatusResponse | null>(null);

      const selectedProvider = useMemo(
            () => providers.find((p) => p.value === provider) || providers[0],
            [provider]
      );

      const handleCreateCard = async (event: React.FormEvent) => {
            event.preventDefault();
            setError(null);
            setStatusData(null);

            if (amount < selectedProvider.min || amount > selectedProvider.max) {
                  setError(`${selectedProvider.label} amount must be between ${selectedProvider.min} and ${selectedProvider.max} USD.`);
                  return;
            }

            if (provider === 'paypal' && !paypalEmail.trim()) {
                  setError('PayPal email is required when card type is PayPal.');
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
                  setError(message);
            } finally {
                  setLoadingCreate(false);
            }
      };

      const handleCheckStatus = async (event: React.FormEvent) => {
            event.preventDefault();
            if (!redeemId.trim()) {
                  setError('Please enter a redeem ID.');
                  return;
            }

            setLoadingStatus(true);
            setError(null);
            try {
                  const response = await noKycCardService.checkStatus(redeemId.trim());
                  setStatusData(response);
            } catch (err) {
                  const message = err instanceof Error ? err.message : 'Unable to check card status.';
                  setError(message);
            } finally {
                  setLoadingStatus(false);
            }
      };

      return (
            <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-50 py-12 px-6">
                  <div className="max-w-6xl mx-auto space-y-8">
                        <div className="text-center">
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                                    No KYC Virtual Credit Card
                              </h1>
                              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                                    Create Visa, Mastercard, or PayPal gift cards without KYC. Pay with USDT on Polygon and redeem using your redeem ID.
                              </p>
                        </div>

                        {error && (
                              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {error}
                              </div>
                        )}

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
                              <p className="text-sm font-medium text-amber-900">
                                    Please review the prohibited country list and virtual card info before funding.
                              </p>
                              <Link href="/virtual-card-policies" className="mt-2 inline-block text-sm font-bold text-amber-800 hover:text-amber-900">
                                    Check prohibited countries & card info
                                    <span className="ml-1">→</span>
                              </Link>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                              <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200/80 shadow-xl">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Create Card Order</h2>

                                    <form onSubmit={handleCreateCard} className="space-y-5">
                                          <div>
                                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Card Type</label>
                                                <select
                                                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Amount (USD)</label>
                                                <input
                                                      type="number"
                                                      required
                                                      min={selectedProvider.min}
                                                      max={selectedProvider.max}
                                                      step="0.01"
                                                      value={amount}
                                                      onChange={(event) => setAmount(parseFloat(event.target.value) || 0)}
                                                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                                <p className="mt-1 text-xs text-slate-500">
                                                      Allowed range: {selectedProvider.min} - {selectedProvider.max} USD
                                                </p>
                                          </div>

                                          {provider === 'paypal' && (
                                                <div>
                                                      <label className="text-sm font-semibold text-slate-700 block mb-1.5">PayPal Email</label>
                                                      <input
                                                            type="email"
                                                            required
                                                            value={paypalEmail}
                                                            onChange={(event) => setPaypalEmail(event.target.value)}
                                                            placeholder="your-paypal@email.com"
                                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                      />
                                                </div>
                                          )}

                                          <button
                                                type="submit"
                                                disabled={loadingCreate}
                                                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-3 rounded-xl font-bold hover:from-indigo-700 hover:to-cyan-700 transition-all disabled:opacity-70"
                                          >
                                                {loadingCreate ? 'Creating card order...' : 'Create Card'}
                                          </button>
                                    </form>
                              </div>

                              <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200/80 shadow-xl">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Payment Details</h2>

                                    {!cardData ? (
                                          <p className="text-slate-500 text-sm">
                                                Create a card order to receive deposit wallet, QR code, and redeem ID.
                                          </p>
                                    ) : (
                                          <div className="space-y-4 text-sm">
                                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                      <p className="text-xs text-slate-500">Redeem ID</p>
                                                      <p className="font-mono text-slate-900 break-all">{cardData.redeem_id}</p>
                                                </div>
                                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                      <p className="text-xs text-slate-500">Pay To Address (USDT Polygon)</p>
                                                      <p className="font-mono text-slate-900 break-all">{cardData.address_in}</p>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                            <p className="text-xs text-slate-500">Amount</p>
                                                            <p className="font-semibold text-slate-900">{cardData.amount} {cardData.payment_coin}</p>
                                                      </div>
                                                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                            <p className="text-xs text-slate-500">Card Value</p>
                                                            <p className="font-semibold text-slate-900">{cardData.card_value} {cardData.card_currency}</p>
                                                      </div>
                                                </div>

                                                {cardData.qr_code && (
                                                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                            <p className="text-xs text-slate-500 mb-2">Payment QR</p>
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

                        <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200/80 shadow-xl">
                              <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Check Status & Redeem</h2>

                              <form onSubmit={handleCheckStatus} className="grid md:grid-cols-[1fr_auto] gap-3 mb-6">
                                    <input
                                          type="text"
                                          value={redeemId}
                                          onChange={(event) => setRedeemId(event.target.value)}
                                          placeholder="Enter redeem ID"
                                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                          required
                                    />
                                    <button
                                          type="submit"
                                          disabled={loadingStatus}
                                          className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors disabled:opacity-70"
                                    >
                                          {loadingStatus ? 'Checking...' : 'Check Status'}
                                    </button>
                              </form>

                              {statusData && (
                                    <div className="space-y-3 text-sm">
                                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                <p className="text-xs text-slate-500">Payment Status</p>
                                                <p className="font-semibold text-slate-900 uppercase">{statusData.payment_status}</p>
                                          </div>
                                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                <p className="text-xs text-slate-500">Card Issuer Status</p>
                                                <p className="font-semibold text-slate-900 uppercase">{statusData.card_issuer_status}</p>
                                          </div>
                                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                <p className="text-xs text-slate-500">Redeem Link</p>
                                                {statusData.redeem_link && statusData.redeem_link !== 'N/A' ? (
                                                      <a
                                                            href={statusData.redeem_link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-indigo-600 font-semibold break-all hover:text-indigo-700"
                                                      >
                                                            {statusData.redeem_link}
                                                      </a>
                                                ) : (
                                                      <p className="text-slate-500">N/A (not ready yet)</p>
                                                )}
                                          </div>
                                    </div>
                              )}
                        </div>
                  </div>
            </div>
      );
};

export default NoKycVirtualCreditCardPage;
