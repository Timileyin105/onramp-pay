'use client';

import React from 'react';
import CryptoPaymentForm from '@/components/CryptoPaymentForm';

const CryptoPaymentRoute: React.FC = () => {
      return (
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-12 px-6">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/20 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  <div className="relative max-w-6xl mx-auto space-y-10">
                        <div className="text-center space-y-3">
                              <p className="text-xs font-bold text-cyan-200 uppercase tracking-[0.24em]">Crypto</p>
                              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Crypto Payments & QR Checkout</h1>
                              <p className="text-lg text-slate-200/85 max-w-3xl mx-auto">Create a crypto invoice, get a shareable link, and let your customer scan a fresh QR to pay the exact coin amount.</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                              <CryptoPaymentForm />
                              <div className="space-y-6 sticky top-28">
                                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                                          <div className="flex items-center justify-between mb-4">
                                                <h2 className="text-2xl font-bold text-white">How It Works</h2>
                                                <span className="px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-100 text-[11px] font-semibold border border-emerald-400/30">Live</span>
                                          </div>
                                          <div className="space-y-4 text-slate-200">
                                                {[
                                                      { step: '1', title: 'Create the crypto request', desc: 'We convert your fiat amount to coin and generate a unique address for this payment.' },
                                                      { step: '2', title: 'Share the link', desc: 'Send the shareable link to your customer via chat, email, or invoice.' },
                                                      { step: '3', title: 'They scan and pay', desc: 'The link loads a fresh QR code and shows the exact coin amount to send.' },
                                                ].map((item) => (
                                                      <div key={item.step} className="flex gap-4">
                                                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 via-indigo-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-[0_10px_30px_rgba(99,102,241,0.35)]">{item.step}</div>
                                                            <div>
                                                                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                                                                  <p className="text-sm text-slate-300">{item.desc}</p>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                                          <h2 className="text-xl font-bold mb-3 text-white">Why merchants use this</h2>
                                          <ul className="space-y-2 text-sm text-slate-200 list-disc list-inside">
                                                <li>No-KYC card-to-crypto flow for quick payouts.</li>
                                                <li>Unique address per invoice to keep funds separated.</li>
                                                <li>Shareable URLs that open directly into payment view.</li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CryptoPaymentRoute;
