'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CryptoPaymentPage from '@/components/CryptoPaymentPage';
import { CryptoPaymentPayload } from '@/types';
import { onrampPayGatewayService } from '@/services/onrampPayGatewayService';
import Toast from '@/components/Toast';

const CryptoPaymentInvoiceRoute: React.FC = () => {
      const searchParams = useSearchParams();
      const [payload, setPayload] = useState<CryptoPaymentPayload | null>(null);
      const [qrCode, setQrCode] = useState<string | null>(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const [toast, setToast] = useState<string | null>(null);
      const [initializing, setInitializing] = useState(true);
      const paymentCardRef = useRef<HTMLDivElement | null>(null);

      useEffect(() => {
            const token = searchParams.get('cryptoPayment');
            if (!token) {
                  setPayload(null);
                  setError('Payment link is missing or invalid.');
                  setInitializing(false);
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
            } catch (_err) {
                  setPayload(null);
                  setError('Invalid or expired crypto payment link.');
            } finally {
                  setInitializing(false);
            }
      }, [searchParams]);

      useEffect(() => {
            const loadQr = async () => {
                  if (!payload) return;
                  setLoading(true);
                  try {
                        const code = await onrampPayGatewayService.getCryptoQrCode(payload.cryptoCurrency, payload.addressIn);
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

      useEffect(() => {
            if (!payload || !qrCode || loading) return;
            paymentCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, [payload, qrCode, loading]);

      useEffect(() => {
            if (!error || payload) return; // show toast only for missing/invalid payload; QR errors are handled inside the card
            setToast(error);
            const id = window.setTimeout(() => setToast(null), 2800);
            return () => window.clearTimeout(id);
      }, [error, payload]);

      const showFallback = !initializing && !payload;

      return (
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-12 px-6">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/20 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  <div className="relative max-w-6xl mx-auto space-y-10">
                        <div className="text-center space-y-3">
                              <p className="text-xs font-bold text-cyan-200 uppercase tracking-[0.24em]">Invoice Payment</p>
                              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Pay This Crypto Invoice</h1>
                              <p className="text-lg text-slate-200/85 max-w-3xl mx-auto">Review the details below and send the exact coin amount to complete this invoice securely.</p>
                        </div>

                        {initializing ? (
                              <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center text-slate-200">
                                    <div className="mx-auto mb-4 h-10 w-10 rounded-full border-2 border-white/20 border-t-cyan-300 animate-spin" aria-hidden="true" />
                                    <p className="text-sm font-semibold">Loading payment...</p>
                                    <p className="text-sm text-slate-300 mt-2">We are preparing your invoice details.</p>
                              </div>
                        ) : payload ? (
                              <div ref={paymentCardRef} className="max-w-4xl mx-auto">
                                    <CryptoPaymentPage payload={payload} qrCode={qrCode} loading={loading} error={error} />
                              </div>
                        ) : (
                              <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center text-slate-200">
                                    <p className="text-sm font-semibold">Payment details not available.</p>
                                    <p className="text-sm text-slate-300 mt-2">Ask the sender for a fresh link or create your own payment request below.</p>
                              </div>
                        )}

                        <div className="text-center max-w-3xl mx-auto space-y-3">
                              <p className="text-sm text-slate-200/80">Need to collect a payment instead?</p>
                              <a
                                    href="/crypto-payment"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400 shadow-[0_10px_40px_rgba(99,102,241,0.35)] transition-all"
                              >
                                    Create your own payment link in seconds
                              </a>
                        </div>
                  </div>

                  {toast && <Toast message={toast} onClose={() => setToast(null)} position="center" />}
            </div>
      );
};

export default CryptoPaymentInvoiceRoute;
