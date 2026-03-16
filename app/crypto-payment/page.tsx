'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CryptoPaymentForm from '@/components/CryptoPaymentForm';
import CryptoPaymentPage from '@/components/CryptoPaymentPage';
import { CryptoPaymentPayload } from '@/types';
import { paygateService } from '@/services/paygateService';

const CryptoPaymentRoute: React.FC = () => {
      const searchParams = useSearchParams();
      const [payload, setPayload] = useState<CryptoPaymentPayload | null>(null);
      const [qrCode, setQrCode] = useState<string | null>(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
            const token = searchParams.get('cryptoPayment');
            if (!token) {
                  setPayload(null);
                  setQrCode(null);
                  setError(null);
                  return;
            }

            try {
                  const decoded = typeof window !== 'undefined' ? window.atob(token) : '';
                  const parsed = JSON.parse(decoded) as CryptoPaymentPayload;

                  if (!parsed || !parsed.addressIn || !parsed.cryptoCurrency || !parsed.coinAmount) {
                        throw new Error('Invalid payment payload.');
                  }

                  setPayload(parsed);
                  setError(null);
            } catch (err: any) {
                  setPayload(null);
                  setError('Invalid or expired crypto payment link.');
            }
      }, [searchParams]);

      useEffect(() => {
            const loadQr = async () => {
                  if (!payload) return;
                  setLoading(true);
                  try {
                        const code = await paygateService.getCryptoQrCode(payload.cryptoCurrency, payload.addressIn);
                        setQrCode(code);
                        setError(null);
                  } catch (err: any) {
                        setError(err?.message || 'Failed to load QR code.');
                  } finally {
                        setLoading(false);
                  }
            };

            loadQr();
      }, [payload]);

      return (
            <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-50 py-12 px-6">
                  <div className="max-w-6xl mx-auto space-y-10">
                        <div className="text-center">
                              <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em]">Crypto</p>
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">Crypto Payments & QR Checkout</h1>
                              <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-3">Create a crypto invoice, get a shareable link, and let your customer scan a fresh QR to pay the exact coin amount.</p>
                        </div>

                        {!payload && error && (
                              <div className="max-w-3xl mx-auto w-full p-4 rounded-2xl border border-red-200 bg-red-50 text-red-700 font-semibold text-center">
                                    {error}
                              </div>
                        )}

                        {payload ? (
                              <CryptoPaymentPage payload={payload} qrCode={qrCode} loading={loading} error={error} />
                        ) : (
                              <div className="grid lg:grid-cols-2 gap-8 items-start">
                                    <CryptoPaymentForm />
                                    <div className="space-y-6 sticky top-28">
                                          <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200/80 shadow-xl">
                                                <h2 className="text-2xl font-bold mb-4 text-slate-900">How It Works</h2>
                                                <div className="space-y-4">
                                                      <div className="flex gap-4">
                                                            <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                                            <div>
                                                                  <h3 className="font-semibold text-slate-900 mb-1">Create the crypto request</h3>
                                                                  <p className="text-sm text-slate-600">We convert your fiat amount to coin and generate a unique address for this payment.</p>
                                                            </div>
                                                      </div>
                                                      <div className="flex gap-4">
                                                            <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                                            <div>
                                                                  <h3 className="font-semibold text-slate-900 mb-1">Share the link</h3>
                                                                  <p className="text-sm text-slate-600">Send the shareable link to your customer via chat, email, or invoice.</p>
                                                            </div>
                                                      </div>
                                                      <div className="flex gap-4">
                                                            <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                                            <div>
                                                                  <h3 className="font-semibold text-slate-900 mb-1">They scan and pay</h3>
                                                                  <p className="text-sm text-slate-600">The link loads a fresh QR code and shows the exact coin amount to send.</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 rounded-3xl border border-indigo-200/80 shadow-lg">
                                                <h2 className="text-xl font-bold mb-3 text-slate-900">Why merchants use this</h2>
                                                <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
                                                      <li>No-KYC card-to-crypto flow for quick payouts.</li>
                                                      <li>Unique address per invoice to keep funds separated.</li>
                                                      <li>Shareable URLs that open directly into payment view.</li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default CryptoPaymentRoute;
