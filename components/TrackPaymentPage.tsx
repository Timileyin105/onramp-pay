'use client';

import React, { useState } from 'react';

const TrackPaymentPage: React.FC = () => {
      const [paymentId, setPaymentId] = useState('');

      const handleTrack = (e: React.FormEvent) => {
            e.preventDefault();
            if (!paymentId) return;
            const url = `https://api.onramp-pay.com/control/track.php?address=${paymentId}`;
            window.open(url, '_blank');
      };

      const inputClasses = "w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all placeholder:text-slate-400 text-slate-100 shadow-sm backdrop-blur";
      const primaryButton = "w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400 transition-all disabled:opacity-50 shadow-[0_10px_40px_rgba(99,102,241,0.35)]";
      const cardClass = "bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]";

      return (
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-6 text-slate-100">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/25 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-indigo-500/25 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                                    Track Payment Status
                              </h1>
                              <p className="text-lg text-slate-200/80">
                                    Enter your payment or transaction ID to check the real-time status of your payment
                              </p>
                        </div>

                        <div className={`${cardClass} p-8 rounded-3xl relative`}>
                              <form onSubmit={handleTrack} className="space-y-4 mb-8">
                                    <div>
                                          <label className="text-sm font-semibold text-slate-100 block mb-1.5">
                                                Payment ID or Tracking ID
                                          </label>
                                          <div className="relative">
                                                <input
                                                      type="text"
                                                      className={inputClasses}
                                                      placeholder="Enter Payment ID"
                                                      value={paymentId}
                                                      onChange={(e) => setPaymentId(e.target.value)}
                                                />
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                      </svg>
                                                </div>
                                          </div>
                                    </div>
                                    <button
                                          type="submit"
                                          disabled={!paymentId}
                                          className={primaryButton}
                                    >
                                          Track Payment
                                    </button>
                              </form>

                              <div className="rounded-xl p-6 bg-white/5 border border-white/10 text-slate-100">
                                    <h3 className="text-sm font-bold mb-2 text-white">💡 How to find your Payment ID</h3>
                                    <ul className="text-sm text-slate-200 space-y-2">
                                          <li>• Payment ID is provided when you create a crypto payment or payment link</li>
                                          <li>• Check your email confirmation or invoice for the tracking ID</li>
                                          <li>• Use this page to monitor payment status in real-time</li>
                                          <li>• Payment details will open in a new tab for verification</li>
                                    </ul>
                              </div>
                        </div>

                        <div className={`mt-8 ${cardClass} p-6 rounded-3xl`}>
                              <h2 className="text-xl font-bold text-white mb-4">Payment Status Guide</h2>
                              <div className="space-y-3 text-sm text-slate-200">
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-white">Pending:</strong> Payment is awaiting confirmation on the blockchain
                                          </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-white">Processing:</strong> Payment is being processed by the provider
                                          </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-white">Confirmed:</strong> Payment has been successfully received and confirmed
                                          </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-white">Failed:</strong> Payment could not be processed. Contact support for assistance
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default TrackPaymentPage;
