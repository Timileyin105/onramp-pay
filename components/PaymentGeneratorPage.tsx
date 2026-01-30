'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import PaymentForm from './PaymentForm';
import { PaymentResponse } from '../types';

const PaymentGeneratorPage: React.FC = () => {
      const [lastPayment, setLastPayment] = useState<PaymentResponse | null>(null);
      const [toast, setToast] = useState<string | null>(null);
      const shareableUrlRef = useRef<HTMLDivElement | null>(null);
      const router = useRouter();

      const handleCopyLink = (url: string) => {
            navigator.clipboard.writeText(url);
            setToast('Payment link copied to clipboard!');
            setTimeout(() => setToast(null), 2000);
      };

      const handlePaymentSuccess = (data: PaymentResponse) => {
            setLastPayment(data);
            setToast('Payment link created successfully!');
            setTimeout(() => {
                  if (shareableUrlRef.current) {
                        shareableUrlRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
            }, 100);
            setTimeout(() => setToast(null), 2000);
      };

      const handlePaymentError = (message: string) => {
            setToast(null);
            router.push(`/error?message=${encodeURIComponent(message)}`);
      };

      return (
            <div className="min-h-screen bg-slate-50 py-12 px-6">
                  {/* Toast Notification */}
                  {toast && (
                        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
                              <div className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-sm animate-in fade-in duration-300">
                                    {toast}
                              </div>
                        </div>
                  )}

                  <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                                    Payment Link <span className="text-indigo-600">Generator</span>
                              </h1>
                              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                    Create card‑to‑crypto payment links in seconds. Perfect for freelancers, invoicing, and one-time payments.
                              </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                              {/* Left Column: Form */}
                              <div className="space-y-6">
                                    <PaymentForm onSuccess={handlePaymentSuccess} onError={handlePaymentError} />

                                    {lastPayment && (
                                          <div ref={shareableUrlRef} className="mt-2 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Shareable URL</label>
                                                <div className="flex items-center gap-2 mb-4">
                                                      <input
                                                            type="text"
                                                            readOnly
                                                            value={lastPayment.paymentUrl}
                                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-indigo-600 font-medium text-sm select-all overflow-x-auto"
                                                            style={{ fontFamily: 'monospace', minWidth: 0 }}
                                                      />
                                                      <button
                                                            type="button"
                                                            onClick={() => handleCopyLink(lastPayment.paymentUrl)}
                                                            className="px-3 py-3 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors flex items-center gap-1 shadow"
                                                            aria-label="Copy payment link"
                                                      >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                            </svg>
                                                      </button>
                                                </div>
                                                <label className="text-xs font-bold text-slate-400 uppercase mb-1 block">Tracking ID</label>
                                                <div className="flex items-center gap-2 mb-2">
                                                      <input
                                                            type="text"
                                                            readOnly
                                                            value={lastPayment.id}
                                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-700 font-mono text-xs select-all break-all"
                                                      />
                                                      <button
                                                            type="button"
                                                            onClick={() => handleCopyLink(lastPayment.id)}
                                                            className="px-3 py-3 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors flex items-center gap-1 shadow"
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
                                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
                                          <h2 className="text-2xl font-bold mb-4 text-slate-900">How It Works</h2>
                                          <div className="space-y-4">
                                                <div className="flex gap-4">
                                                      <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                                      <div>
                                                            <h3 className="font-semibold text-slate-900 mb-1">Fill the Form</h3>
                                                            <p className="text-sm text-slate-600">Enter wallet address, customer email, amount, and select a payment provider.</p>
                                                      </div>
                                                </div>
                                                <div className="flex gap-4">
                                                      <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                                      <div>
                                                            <h3 className="font-semibold text-slate-900 mb-1">Get Payment Link</h3>
                                                            <p className="text-sm text-slate-600">Receive a shareable URL that you can send to your customer via email or chat.</p>
                                                      </div>
                                                </div>
                                                <div className="flex gap-4">
                                                      <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                                      <div>
                                                            <h3 className="font-semibold text-slate-900 mb-1">Customer Pays</h3>
                                                            <p className="text-sm text-slate-600">Customer clicks the link, pays with credit/debit card, and receives crypto instantly.</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl border border-purple-200">
                                          <h2 className="text-xl font-bold mb-3 text-slate-900">Need This for WooCommerce?</h2>
                                          <p className="text-sm text-slate-600 mb-4">
                                                Integrate card-to-crypto payments directly into your WooCommerce store with our premium plugin.
                                          </p>
                                          <a href="/" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all">
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
