'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import PaymentForm from './PaymentForm';
import { PaymentResponse } from '../types';
import Toast from './Toast';

const PaymentGeneratorPage: React.FC = () => {
      const [lastPayment, setLastPayment] = useState<PaymentResponse | null>(null);
      const [toast, setToast] = useState<string | null>(null);
      const shareableUrlRef = useRef<HTMLDivElement | null>(null);
      const router = useRouter();

      const handleCopyLink = (url: string) => {
            navigator.clipboard.writeText(url);
            setToast('Payment link copied to clipboard!');
      };

      const handlePaymentSuccess = (data: PaymentResponse) => {
            setLastPayment(data);
            setToast('Payment link created successfully!');
            setTimeout(() => {
                  if (shareableUrlRef.current) {
                        shareableUrlRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
            }, 100);
      };

      const handlePaymentError = (message: string) => {
            setToast(null);
            router.push(`/error?message=${encodeURIComponent(message)}`);
      };

      const primaryButton = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400 shadow-[0_10px_40px_rgba(99,102,241,0.35)] transition-all";
      const cardClass = "bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]";

      return (
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-6 text-slate-100">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/25 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-indigo-500/25 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  {toast && <Toast message={toast} onClose={() => setToast(null)} position="center" />}

                  <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                                    Payment Link <span className="bg-gradient-to-r from-cyan-200 via-indigo-200 to-pink-200 bg-clip-text text-transparent">Generator</span>
                              </h1>
                              <p className="text-lg text-slate-200/80 max-w-2xl mx-auto">
                                    Create card‑to‑crypto payment links in seconds. Perfect for freelancers, invoicing, and one-time payments.
                              </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                              {/* Left Column: Form */}
                              <div className="space-y-6">
                                    <PaymentForm onSuccess={handlePaymentSuccess} onError={handlePaymentError} />

                                    {lastPayment && (
                                          <div ref={shareableUrlRef} className={`mt-2 p-6 rounded-3xl ${cardClass}`}>
                                                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2 block">Shareable URL</label>
                                                <div className="flex items-center gap-2 mb-4">
                                                      <input
                                                            type="text"
                                                            readOnly
                                                            value={lastPayment.paymentUrl}
                                                            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-cyan-100 font-medium text-sm select-all overflow-x-auto placeholder:text-slate-400"
                                                            style={{ fontFamily: 'monospace', minWidth: 0 }}
                                                      />
                                                      <button
                                                            type="button"
                                                            onClick={() => handleCopyLink(lastPayment.paymentUrl)}
                                                            className={`${primaryButton} px-3 py-3 text-xs font-bold shadow-none`}
                                                            aria-label="Copy payment link"
                                                      >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                            </svg>
                                                      </button>
                                                </div>
                                                <label className="text-xs font-bold text-slate-200 uppercase mb-1 block">Tracking ID</label>
                                                <div className="flex items-center gap-2 mb-2">
                                                      <input
                                                            type="text"
                                                            readOnly
                                                            value={lastPayment.id}
                                                            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-cyan-100 font-mono text-xs select-all break-all"
                                                      />
                                                      <button
                                                            type="button"
                                                            onClick={() => handleCopyLink(lastPayment.id)}
                                                            className={`${primaryButton} px-3 py-3 text-xs font-bold shadow-none`}
                                                            aria-label="Copy tracking id"
                                                      >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                            </svg>
                                                      </button>
                                                </div>
                                          </div>
                                    )}
                              </div>

                              {/* Right Column: Info */}
                              <div className="space-y-6 sticky top-28">
                                    <div className={`${cardClass} p-8 rounded-3xl`}>
                                          <h2 className="text-2xl font-bold mb-4 text-white">How It Works</h2>
                                          <div className="space-y-4">
                                                <div className="flex gap-4">
                                                      <div className="w-8 h-8 bg-white/10 text-cyan-200 rounded-full flex items-center justify-center font-bold flex-shrink-0 border border-white/15">1</div>
                                                      <div>
                                                            <h3 className="font-semibold text-white mb-1">Fill the Form</h3>
                                                            <p className="text-sm text-slate-200/80">Enter wallet address, customer email, amount, and select a payment provider.</p>
                                                      </div>
                                                </div>
                                                <div className="flex gap-4">
                                                      <div className="w-8 h-8 bg-white/10 text-cyan-200 rounded-full flex items-center justify-center font-bold flex-shrink-0 border border-white/15">2</div>
                                                      <div>
                                                            <h3 className="font-semibold text-white mb-1">Get Payment Link</h3>
                                                            <p className="text-sm text-slate-200/80">Receive a shareable URL that you can send to your customer via email or chat.</p>
                                                      </div>
                                                </div>
                                                <div className="flex gap-4">
                                                      <div className="w-8 h-8 bg-white/10 text-cyan-200 rounded-full flex items-center justify-center font-bold flex-shrink-0 border border-white/15">3</div>
                                                      <div>
                                                            <h3 className="font-semibold text-white mb-1">Customer Pays</h3>
                                                            <p className="text-sm text-slate-200/80">Customer clicks the link, pays with credit/debit card, and receives crypto instantly.</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-indigo-500/15 to-pink-500/15 border border-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                                          <h2 className="text-xl font-bold mb-3 text-white">Need This for WooCommerce?</h2>
                                          <p className="text-sm text-slate-200 mb-4">
                                                Integrate card-to-crypto payments directly into your WooCommerce store with our free plugin download.
                                          </p>
                                          <a href="/" className={primaryButton}>
                                                View WooCommerce Plugin
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default PaymentGeneratorPage;
