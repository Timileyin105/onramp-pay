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

      const inputClasses = "w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400 text-slate-900 shadow-sm";

      return (
            <div className="min-h-screen bg-slate-50 py-12 px-6">
                  <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                                    Track Payment Status
                              </h1>
                              <p className="text-lg text-slate-600">
                                    Enter your payment tracking ID to view real-time transaction status
                              </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                              <form onSubmit={handleTrack} className="space-y-4 mb-8">
                                    <div>
                                          <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                                                Payment Tracking ID
                                          </label>
                                          <div className="relative">
                                                <input
                                                      type="text"
                                                      className={inputClasses}
                                                      placeholder="Enter Tracking ID"
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
                                          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all disabled:opacity-50 shadow-lg shadow-indigo-100"
                                    >
                                          Track Payment
                                    </button>
                              </form>

                              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                                    <h3 className="text-sm font-bold text-blue-900 mb-2">💡 How to find your Tracking ID</h3>
                                    <ul className="text-sm text-blue-800 space-y-2">
                                          <li>• If you created a payment link, the tracking ID was displayed after generation</li>
                                          <li>• Check your email confirmation for the tracking ID</li>
                                          <li>• The tracking ID is the wallet address used for the transaction</li>
                                    </ul>
                              </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200">
                              <h2 className="text-xl font-bold text-slate-900 mb-4">Payment Status Information</h2>
                              <div className="space-y-3 text-sm text-slate-600">
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-slate-900">Pending:</strong> Payment has been initiated but not yet confirmed
                                          </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-slate-900">Paid:</strong> Payment confirmed, crypto has been sent to the recipient
                                          </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-slate-900">Expired:</strong> Payment window has closed without completion
                                          </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-slate-900">Cancelled:</strong> Payment was cancelled by user or system
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default TrackPaymentPage;
