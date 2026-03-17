'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { CryptoPaymentPayload } from '../types';
import Toast from './Toast';

interface CryptoPaymentPageProps {
      payload: CryptoPaymentPayload;
      qrCode: string | null;
      loading: boolean;
      error: string | null;
}

const CryptoPaymentPage: React.FC<CryptoPaymentPageProps> = ({ payload, qrCode, loading, error }) => {
      const [copyMessage, setCopyMessage] = useState<string | null>(null);
      const [toast, setToast] = useState<string | null>(null);
      const shareableLink = useMemo(() => {
            if (typeof window === 'undefined') return '';
            return window.location.href;
      }, []);

      const primaryButton = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400 shadow-[0_10px_40px_rgba(99,102,241,0.35)] transition-all";
      const cardClass = "bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]";

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

      useEffect(() => {
            if (!error) return;
            setToast(error);
            const id = window.setTimeout(() => setToast(null), 2800);
            return () => window.clearTimeout(id);
      }, [error]);

      return (
            <div className={`${cardClass} p-8 space-y-6 text-slate-100`}>
                  <div className="flex items-start justify-between gap-4">
                        <div>
                              <p className="text-xs font-bold text-cyan-200 uppercase tracking-[0.18em]">Crypto Checkout</p>
                              <h1 className="text-3xl font-extrabold text-white mt-2">Complete Your Payment</h1>
                              <p className="text-sm text-slate-200 mt-1">Send the exact coin amount to the address below. We refresh the QR on load for safety.</p>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-100 text-xs font-semibold border border-emerald-400/30">Secure</div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                              <p className="text-xs font-bold text-slate-300 uppercase mb-1">Pay This Coin Amount</p>
                              <p className="text-xl font-bold text-cyan-100">{payload.coinAmount} {payload.cryptoCurrency.toUpperCase()}</p>
                              <p className="text-sm text-slate-300 mt-1">From {payload.fiatAmount} {payload.fiatCurrency}</p>
                        </div>
                        <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                              <p className="text-xs font-bold text-slate-300 uppercase mb-1">Address In</p>
                              <p className="text-sm font-mono text-slate-100 break-all">{payload.addressIn}</p>
                        </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                        {loading && <p className="text-sm text-slate-300">Refreshing QR code...</p>}
                        {!loading && qrCode && (
                              <img
                                    src={`data:image/png;base64,${qrCode}`}
                                    alt="Crypto payment QR code"
                                    className="w-64 h-64 rounded-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                              />
                        )}
                  </div>

                  <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">Shareable Payment Link</label>
                        <div className="flex items-center gap-2">
                              <input
                                    type="text"
                                    readOnly
                                    value={shareableLink}
                                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-cyan-100 font-medium text-sm"
                              />
                              <button
                                    type="button"
                                    onClick={() => handleCopy(shareableLink, 'Payment link copied!')}
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
                                    value={payload.addressIn}
                                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-cyan-100 font-mono text-xs"
                              />
                              <button
                                    type="button"
                                    onClick={() => handleCopy(payload.addressIn, 'Address copied!')}
                                    className={`${primaryButton} px-3 py-3 text-xs font-bold shadow-none`}
                              >
                                    Copy
                              </button>
                        </div>
                  </div>

                  {copyMessage && <p className="text-sm text-emerald-200 font-medium">{copyMessage}</p>}

                  {toast && <Toast message={toast} onClose={() => setToast(null)} position="center" />}
            </div>
      );
};

export default CryptoPaymentPage;
