
import React, { useState } from 'react';
import Header from './components/Header';
import PaymentForm from './components/PaymentForm';
import PaymentTracker from './components/PaymentTracker';
import { PaymentResponse } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'track'>('create');
  const [lastPayment, setLastPayment] = useState<PaymentResponse | null>(null);

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('Payment link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Instant Payment <span className="text-indigo-600">Links</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Create and share professional payment links in seconds. Powered by PayGate for lightning-fast global settlements.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
              <button 
                onClick={() => setActiveTab('create')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'create' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:text-indigo-600'}`}
              >
                Create Link
              </button>
              <button 
                onClick={() => setActiveTab('track')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'track' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:text-indigo-600'}`}
              >
                Track Payment
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Form/Tracker */}
            <div className="space-y-6">
              {activeTab === 'create' ? (
                <PaymentForm onSuccess={(data) => setLastPayment(data)} />
              ) : (
                <PaymentTracker />
              )}
            </div>

            {/* Right Column: Preview/Success */}
            <div className="sticky top-28">
              {activeTab === 'create' && lastPayment ? (
                <div className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-xl shadow-indigo-100/50 animate-in zoom-in-95 duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Link Generated!</h3>
                      <p className="text-sm text-slate-500">Your payment link is ready to share.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-6 group cursor-pointer" onClick={() => handleCopyLink(lastPayment.paymentUrl)}>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Shareable URL</p>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-600 font-medium truncate mr-2">{lastPayment.paymentUrl}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">ID</p>
                      <p className="font-mono text-sm text-slate-700">{lastPayment.id}</p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Total</p>
                      <p className="font-bold text-slate-900">{lastPayment.amount} {lastPayment.currency}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setLastPayment(null)}
                    className="mt-8 text-sm text-slate-400 hover:text-slate-600 font-medium w-full text-center"
                  >
                    Generate another link
                  </button>
                </div>
              ) : (
                <div className="bg-indigo-600 p-8 rounded-3xl text-white overflow-hidden relative shadow-2xl shadow-indigo-200">
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-400 opacity-20 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">Why use PayGate?</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold">Real-time Settlements</p>
                          <p className="text-indigo-100 text-sm">Funds arrive in your wallet as soon as the customer pays.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold">Global Coverage</p>
                          <p className="text-indigo-100 text-sm">Accept cards, bank transfers, and crypto from over 150 countries.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold">Enterprise Security</p>
                          <p className="text-indigo-100 text-sm">Advanced fraud protection and AML compliance built-in.</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-12 p-4 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                         <span className="text-indigo-600 font-bold">99%</span>
                      </div>
                      <p className="text-sm font-medium">Over 2M links generated with 99.9% uptime.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm">
            © 2025 PayGate Link Generator. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">API Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
