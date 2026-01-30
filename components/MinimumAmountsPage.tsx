import React from 'react';

const MinimumAmountsPage: React.FC = () => {
      return (
            <div className="min-h-screen bg-slate-50 py-12 px-6">
                  <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                                    Minimum Order Amounts
                              </h1>
                              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                    Each payment provider has different minimum order requirements. Choose the provider that best fits your transaction sizes.
                              </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
                              <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm bg-transparent">
                                          <thead>
                                                <tr className="bg-indigo-600 text-white">
                                                      <th className="py-4 px-6 text-left font-bold rounded-tl-xl">Payment Provider</th>
                                                      <th className="py-4 px-6 text-center font-bold">Minimum Order Amount</th>
                                                      <th className="py-4 px-6 text-center font-bold rounded-tr-xl">Status</th>
                                                </tr>
                                          </thead>
                                          <tbody className="divide-y divide-slate-200">
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Wert.io</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$1</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Stripe (USA)</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$2</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Coinbase Pay</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$2</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">⚠️ Unstable</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">ramp.network</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$4</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Robinhood (USA)</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$5</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Revolut (EU/EEA)</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">€6</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Unlimit</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$10</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Bitnovo</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$10</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Kryptonim</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$10</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">⚠️ Unstable</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Topper</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$10</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Transak</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$15</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Binance Connect</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$15</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Alchemy Pay</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$15</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">⚠️ Unstable</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">MoonPay</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$20</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Banxa</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$20</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Guardarian</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$21</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">⚠️ Unstable</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Cryptix</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$20</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">particle.network</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$30</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">mercuryo.io</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$30</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">⚠️ Unstable</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Sardine.ai</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$30</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">UTORG</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$50</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">iDEAL (NL)</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">€46</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Simplex</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">$50</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">UPI/IMPS</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">₹1600</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                      <td className="py-4 px-6 font-medium text-slate-900">Interac</td>
                                                      <td className="py-4 px-6 text-center text-slate-700">CA$100</td>
                                                      <td className="py-4 px-6 text-center"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </div>

                              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl space-y-3 text-sm text-slate-700">
                                    <div>💡 <span className="text-red-600 font-medium">Payouts may be sent in ETH, USDC, USDT (Polygon/BEP-20), or POL native token. Use a self-custodial wallet to receive payouts.</span></div>
                                    <div>⚠️ <span className="font-medium">Providers marked as "Unstable" are experiencing issues or under maintenance. We recommend avoiding these temporarily.</span></div>
                                    <div>📌 <span className="font-medium">UK Customers:</span> Due to UK 🇬🇧 FCA regulations, some providers enforce a 24-hour cooling-off period. <strong>Enable Revolut</strong> to allow UK customers to purchase without waiting.</div>
                                    <div>🌍 <span className="font-medium">Multi-Hosted Provider:</span> Select "Multi Hosted Providers" to offer customers a choice of multiple providers in one checkout flow.</div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default MinimumAmountsPage;
