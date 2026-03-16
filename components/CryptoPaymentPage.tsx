'use client';

import React, { useMemo, useState } from 'react';
import { CryptoPaymentPayload } from '../types';

interface CryptoPaymentPageProps {
      payload: CryptoPaymentPayload;
      qrCode: string | null;
      loading: boolean;
      error: string | null;
}

const CryptoPaymentPage: React.FC<CryptoPaymentPageProps> = ({ payload, qrCode, loading, error }) => {
      const [copyMessage, setCopyMessage] = useState<string | null>(null);
      const shareableLink = useMemo(() => {
            if (typeof window === 'undefined') return '';
            return window.location.href;
      }, []);

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

      return (
            <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200/80 shadow-xl space-y-6">
                  <div className="flex items-start justify-between gap-4">
                        <div>
                              <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.18em]">Crypto Checkout</p>
                              <h1 className="text-3xl font-extrabold text-slate-900 mt-2">Complete Your Payment</h1>
                              <p className="text-sm text-slate-600 mt-1">Send the exact coin amount to the address below. We refresh the QR on load for safety.</p>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">Secure</div>
                  </div>

                  {error && (
                        <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-700 font-semibold">{error}</div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Pay This Coin Amount</p>
                              <p className="text-xl font-bold text-indigo-700">{payload.coinAmount} {payload.cryptoCurrency.toUpperCase()}</p>
                              <p className="text-sm text-slate-600 mt-1">From {payload.fiatAmount} {payload.fiatCurrency}</p>
                        </div>
                        <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Address In</p>
                              <p className="text-sm font-mono text-slate-800 break-all">{payload.addressIn}</p>
                        </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                        {loading && <p className="text-sm text-slate-600">Refreshing QR code...</p>}
                        {!loading && qrCode && (
                              <img
                                    src={`data:image/png;base64,${qrCode}`}
                                    alt="Crypto payment QR code"
                                    className="w-64 h-64 rounded-xl border border-slate-200 shadow-sm"
                              />
                        )}
                  </div>

                  <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Shareable Payment Link</label>
                        <div className="flex items-center gap-2">
                              <input
                                    type="text"
                                    readOnly
                                    value={shareableLink}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-indigo-600 font-medium text-sm"
                              />
                              <button
                                    type="button"
                                    onClick={() => handleCopy(shareableLink, 'Payment link copied!')}
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
                                    value={payload.addressIn}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-700 font-mono text-xs"
                              />
                              <button
                                    type="button"
                                    onClick={() => handleCopy(payload.addressIn, 'Address copied!')}
                                    className="px-3 py-3 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors"
                              >
                                    Copy
                              </button>
                        </div>
                  </div>

                  {copyMessage && <p className="text-sm text-green-600 font-medium">{copyMessage}</p>}
            </div>
      );
};

export default CryptoPaymentPage;
