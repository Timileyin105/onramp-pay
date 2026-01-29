
import React, { useState, useRef } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import PaymentForm from './components/PaymentForm';
import PaymentTracker from './components/PaymentTracker';
import ErrorPage from './components/ErrorPage';
import { PaymentResponse } from './types';


const App: React.FC = () => {

      const [activeTab, setActiveTab] = useState<'create' | 'track'>('create');
      const [lastPayment, setLastPayment] = useState<PaymentResponse | null>(null);
      const [toast, setToast] = useState<string | null>(null);
      const [errorMessage, setErrorMessage] = useState<string | null>(null);
      const shareableUrlRef = useRef<HTMLDivElement | null>(null);
      const navigate = useNavigate();
      const location = useLocation();


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
            setErrorMessage(message);
            setToast(null);
            navigate('/error', { state: { message } });
      };

      const handleBackToCreate = () => {
            setErrorMessage(null);
            setActiveTab('create');
            navigate('/');
      };

      return (
            <div className="min-h-screen bg-slate-50 flex flex-col">
                  <Header />

                  {/* Toast Notification */}
                  {toast && (
                        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
                              <div className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-sm animate-in fade-in duration-300">
                                    {toast}
                              </div>
                        </div>
                  )}

                  <main className="flex-grow py-12 px-6">
                        <div className="max-w-7xl mx-auto">
                              <Routes>
                                    <Route
                                          path="/"
                                          element={
                                                <>
                                                      <div className="text-center mb-12">
                                                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                                                                  Instant Payment <span className="text-indigo-600">Links</span>
                                                            </h1>
                                                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                                                  Create and share professional payment links in seconds. Powered by Onramp Pay for lightning-fast global settlements.
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
                                                                        <>
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
                                                                        </>
                                                                  ) : (
                                                                        <PaymentTracker />
                                                                  )}
                                                            </div>

                                                            {/* Right Column: Payment Link Display + Why Use Onramp Pay */}
                                                            <div className="space-y-8 sticky top-28">
                                                                  {activeTab === 'create' && (
                                                                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl">
                                                                              <h2 className="text-2xl font-bold mb-4 text-slate-900">Minimum Order Amount</h2>
                                                                              <p className="mb-4 text-slate-700">💡 Minimum order amount varies per provider:</p>
                                                                              <div className="overflow-x-auto">
                                                                                    <table className="min-w-full text-center text-sm bg-transparent border border-slate-300 rounded-xl">
                                                                                          <thead>
                                                                                                <tr className="bg-slate-100">
                                                                                                      <th className="py-2 px-4 font-semibold text-slate-700 border border-slate-300">Payment Provider</th>
                                                                                                      <th className="py-2 px-4 font-semibold text-slate-700 border border-slate-300">Minimum Order Amount</th>
                                                                                                </tr>
                                                                                          </thead>
                                                                                          <tbody>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Wert.io</td><td className="py-2 px-4 border border-slate-200">$1</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Stripe (USA)</td><td className="py-2 px-4 border border-slate-200">$2</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Coinbase Pay <span title="Unstable">⚠️</span></td><td className="py-2 px-4 border border-slate-200">$2</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">ramp.network</td><td className="py-2 px-4 border border-slate-200">$4</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Robinhood (USA)</td><td className="py-2 px-4 border border-slate-200">$5</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Revolut (EU/EEA)</td><td className="py-2 px-4 border border-slate-200">€6</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Unlimit</td><td className="py-2 px-4 border border-slate-200">$10</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Bitnovo</td><td className="py-2 px-4 border border-slate-200">$10</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Kryptonim <span title="Unstable">⚠️</span></td><td className="py-2 px-4 border border-slate-200">$10</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Topper</td><td className="py-2 px-4 border border-slate-200">$10</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Transak</td><td className="py-2 px-4 border border-slate-200">$15</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Binance Connect</td><td className="py-2 px-4 border border-slate-200">$15</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Alchemy Pay <span title="Unstable">⚠️</span></td><td className="py-2 px-4 border border-slate-200">$15</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">MoonPay</td><td className="py-2 px-4 border border-slate-200">$20</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Banxa</td><td className="py-2 px-4 border border-slate-200">$20</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Guardarian <span title="Unstable">⚠️</span></td><td className="py-2 px-4 border border-slate-200">$21</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Cryptix</td><td className="py-2 px-4 border border-slate-200">$20</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">particle.network</td><td className="py-2 px-4 border border-slate-200">$30</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">mercuryo.io <span title="Unstable">⚠️</span></td><td className="py-2 px-4 border border-slate-200">$30</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Sardine.ai</td><td className="py-2 px-4 border border-slate-200">$30</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">UTORG</td><td className="py-2 px-4 border border-slate-200">$50</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">iDEAL (NL)</td><td className="py-2 px-4 border border-slate-200">€46</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Simplex</td><td className="py-2 px-4 border border-slate-200">$50</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">UPI/IMPS</td><td className="py-2 px-4 border border-slate-200">₹1600</td></tr>
                                                                                                <tr className="hover:bg-slate-50 transition-colors"><td className="py-2 px-4 border border-slate-200">Interac</td><td className="py-2 px-4 border border-slate-200">CA$100</td></tr>
                                                                                          </tbody>
                                                                                    </table>
                                                                              </div>
                                                                              <div className="mt-6 text-sm text-slate-700 space-y-3">
                                                                                    <div>💡 <span className="text-red-600">Payouts may be sent in ETH, USDC, USDT (Polygon/BEP-20), or POL native token. Use a self-custodial wallet to receive payouts.</span></div>
                                                                                    <div>⚠️ Providers with a warning sign are unstable or under maintenance. Avoid enabling them at the moment.</div>
                                                                                    <div>📌 Due to UK 🇬🇧 FCA regulations, some providers enforce a 24-hour cooling-off period for UK customers. Enable <b>Revolut</b> to allow UK customers to purchase without waiting.</div>
                                                                              </div>
                                                                        </div>
                                                                  )}
                                                            </div>

                                                      </div>
                                                </>
                                          }
                                    />
                                    <Route
                                          path="/error"
                                          element={
                                                <div className="max-w-2xl mx-auto">
                                                      <ErrorPage
                                                            message={
                                                                  (location.state as { message?: string } | null)?.message ||
                                                                  errorMessage ||
                                                                  'An unexpected error happened. Please return to the previous tab and select another payment provider.'
                                                            }
                                                            onBack={handleBackToCreate}
                                                      />
                                                </div>
                                          }
                                    />
                                    <Route path="*" element={<Navigate to="/" replace />} />
                              </Routes>
                        </div>
                  </main>

                  <footer className="bg-white border-t border-slate-200 py-12 px-6">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                              <div className="text-slate-500 text-sm">
                                    © 2025 Onramp Pay Link Generator. All rights reserved.
                              </div>
                              <div className="flex gap-8 text-sm font-medium text-slate-400">
                                    <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
                                    <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
                                    {/* <a href="#" className="hover:text-indigo-600 transition-colors">API Docs</a> */}
                              </div>
                        </div>
                  </footer>
            </div>
      );
};

export default App;
