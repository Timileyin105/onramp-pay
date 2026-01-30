
'use client';

import React, { useState } from 'react';


const PaymentTracker: React.FC = () => {
      const [paymentId, setPaymentId] = useState('');

      const handleTrack = (e: React.FormEvent) => {
            e.preventDefault();
            if (!paymentId) return;
            const url = `https://api.onramp-pay.com/control/track.php?address=${paymentId}`;
            window.open(url, '_blank');
      };

      const inputClasses = "w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400 text-slate-900 shadow-sm";

      return (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Track Payment</h2>
                  <form onSubmit={handleTrack} className="space-y-4 mb-8">
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
                        <button
                              type="submit"
                              disabled={!paymentId}
                              className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all disabled:opacity-50"
                        >
                              Track Payment
                        </button>
                  </form>
                  <div className="text-center py-8 text-slate-400">
                        <p className="text-sm">Enter a Payment ID and click Track Payment to view live status in a new tab.</p>
                  </div>
            </div>
      );
};

export default PaymentTracker;
