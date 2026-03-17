
'use client';

import React, { useState } from 'react';


const PaymentTracker: React.FC = () => {
      const [paymentId, setPaymentId] = useState('');

      const handleTrack = (e: React.FormEvent) => {
            e.preventDefault();
            if (!paymentId) return;
            const url = `https://api.onramp-pay.com/control/status.php?redeem_id=${encodeURIComponent(paymentId)}`;
            window.open(url, '_blank');
      };

      const inputClasses = "w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all placeholder:text-slate-400 text-slate-100 shadow-sm backdrop-blur";
      const primaryButton = "w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400 transition-all disabled:opacity-50 shadow-[0_10px_40px_rgba(99,102,241,0.35)]";

      return (
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                  <h2 className="text-2xl font-bold text-white mb-6">Track No-KYC Card Order</h2>
                  <form onSubmit={handleTrack} className="space-y-4 mb-8">
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
                        <button
                              type="submit"
                              disabled={!paymentId}
                              className={primaryButton}
                        >
                              Track Order
                        </button>
                  </form>
                  <div className="text-center py-6 text-slate-200">
                        <p className="text-sm">Enter your redeem ID and open live status/redeem details in a new tab.</p>
                  </div>
            </div>
      );
};

export default PaymentTracker;
