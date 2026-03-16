'use client';

import React, { useState } from 'react';

const TrackPaymentPage: React.FC = () => {
      const [paymentId, setPaymentId] = useState('');

      const handleTrack = (e: React.FormEvent) => {
            e.preventDefault();
            if (!paymentId) return;
            const url = `https://api.onramp-pay.com/control/status.php?redeem_id=${encodeURIComponent(paymentId)}`;
            window.open(url, '_blank');
      };

      const inputClasses = "w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400 text-slate-900 shadow-sm";

      return (
            <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-50 py-12 px-6">
                  <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                                    Track Card Order Status
                              </h1>
                              <p className="text-lg text-slate-600">
                                    Enter your redeem ID to view card payment status and redeem details
                              </p>
                        </div>

                        <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200/80 shadow-xl">
                              <form onSubmit={handleTrack} className="space-y-4 mb-8">
                                    <div>
                                          <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                                                Redeem ID
                                          </label>
                                          <div className="relative">
                                                <input
                                                      type="text"
                                                      className={inputClasses}
                                                      placeholder="Enter Redeem ID"
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
                                          Track Order
                                    </button>
                              </form>

                              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                                    <h3 className="text-sm font-bold text-blue-900 mb-2">💡 How to find your Tracking ID</h3>
                                    <ul className="text-sm text-blue-800 space-y-2">
                                          <li>• If you created a card order, the redeem ID was returned after generation</li>
                                          <li>• Save your redeem ID immediately. It is required for status checks and redemption</li>
                                          <li>• You can use this page to monitor when payment is marked paid and card issuance is completed</li>
                                    </ul>
                              </div>
                        </div>

                        <div className="mt-8 bg-white/90 backdrop-blur p-6 rounded-3xl border border-slate-200/80 shadow-xl">
                              <h2 className="text-xl font-bold text-slate-900 mb-4">Card Status Information</h2>
                              <div className="space-y-3 text-sm text-slate-600">
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-slate-900">Unpaid:</strong> Deposit is not confirmed yet
                                          </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-slate-900">Paid:</strong> Payment confirmed and card can proceed to issuance
                                          </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-slate-900">Pending Issuer:</strong> Payment received but card issuer still processing
                                          </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                          <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                                          <div>
                                                <strong className="text-slate-900">Completed:</strong> Redeem link is available in API response
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default TrackPaymentPage;
