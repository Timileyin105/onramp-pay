
import React, { useState } from 'react';
import { paygateService } from '../services/paygateService';
import { PaymentDetails, PaymentStatus } from '../types';

const PaymentTracker: React.FC = () => {
  const [paymentId, setPaymentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState<PaymentDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentId) return;
    
    setLoading(true);
    setError(null);
    setDetails(null);
    
    try {
      const result = await paygateService.trackPayment(paymentId);
      setDetails(result);
    } catch (err: any) {
      setError(err.message || "Payment not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: PaymentStatus) => {
    switch (status) {
      case PaymentStatus.PAID: return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case PaymentStatus.PENDING: return 'bg-amber-100 text-amber-700 border-amber-200';
      case PaymentStatus.EXPIRED: return 'bg-slate-100 text-slate-700 border-slate-200';
      case PaymentStatus.CANCELLED: return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700';
    }
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
            placeholder="Enter Payment ID (e.g. pg_abc123)"
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
          disabled={loading || !paymentId}
          className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Track Status'}
        </button>
      </form>

      {error && (
        <div className="p-4 bg-rose-50 text-rose-600 rounded-xl border border-rose-100 text-sm mb-4">
          {error}
        </div>
      )}

      {details && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</p>
              <div className={`mt-1 px-3 py-1 rounded-full text-xs font-bold border inline-block uppercase ${getStatusColor(details.status)}`}>
                {details.status}
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</p>
              <p className="text-xl font-bold text-slate-900">{details.amount} {details.currency}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Payment ID</span>
              <span className="font-mono text-slate-700">{details.id}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Created At</span>
              <span className="text-slate-700">{new Date(details.createdAt).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Description</span>
              <span className="text-slate-700 font-medium">{details.description}</span>
            </div>
            {details.customerEmail && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Customer</span>
                <span className="text-slate-700">{details.customerEmail}</span>
              </div>
            )}
            {details.walletAddress && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Recipient Wallet</span>
                <span className="text-slate-700 truncate ml-4 max-w-[150px]" title={details.walletAddress}>
                  {details.walletAddress}
                </span>
              </div>
            )}
          </div>

          <a 
            href={details.paymentUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center py-3 border border-indigo-200 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
          >
            Open Payment Page
          </a>
        </div>
      )}

      {!details && !loading && !error && (
        <div className="text-center py-12 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-sm">Enter a Payment ID to view live status details.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentTracker;
