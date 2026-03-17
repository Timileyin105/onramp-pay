import React from 'react';

const MinimumAmountsPage: React.FC = () => {
      return (
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-12 px-6">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/25 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-indigo-500/25 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  <div className="relative max-w-5xl mx-auto">
                        <div className="text-center mb-12 space-y-3">
                              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-100 shadow-[0_10px_40px_rgba(59,130,246,0.35)] backdrop-blur">
                                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                                    Provider minimums live
                              </div>
                              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                    <span className="bg-gradient-to-r from-cyan-200 via-indigo-200 to-pink-200 bg-clip-text text-transparent">Minimum Order Amounts</span>
                              </h1>
                              <p className="text-lg text-slate-200/80 max-w-2xl mx-auto">
                                    Each payment provider has different minimum order requirements. Choose the provider that best fits your transaction sizes.
                              </p>
                        </div>

                        <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                              <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm bg-transparent">
                                          <thead>
                                                <tr className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 text-white">
                                                      <th className="py-4 px-6 text-left font-bold rounded-tl-xl">Payment Provider</th>
                                                      <th className="py-4 px-6 text-center font-bold">Minimum Order Amount</th>
                                                      <th className="py-4 px-6 text-center font-bold rounded-tr-xl">Status</th>
                                                </tr>
                                          </thead>
                                          <tbody className="divide-y divide-white/5">
                                                {[{ name: 'Wert.io', min: '$1', status: 'Active', tone: 'green' },
                                                { name: 'Stripe (USA)', min: '$2', status: 'Active', tone: 'green' },
                                                { name: 'Coinbase Pay', min: '$2', status: '⚠️ Unstable', tone: 'yellow' },
                                                { name: 'ramp.network', min: '$4', status: 'Active', tone: 'green' },
                                                { name: 'Robinhood (USA)', min: '$5', status: 'Active', tone: 'green' },
                                                { name: 'Revolut (EU/EEA)', min: '€6', status: 'Active', tone: 'green' },
                                                { name: 'Unlimit', min: '$10', status: 'Active', tone: 'green' },
                                                { name: 'Bitnovo', min: '$10', status: 'Active', tone: 'green' },
                                                { name: 'Kryptonim', min: '$10', status: '⚠️ Unstable', tone: 'yellow' },
                                                { name: 'Topper', min: '$10', status: 'Active', tone: 'green' },
                                                { name: 'Transak', min: '$15', status: 'Active', tone: 'green' },
                                                { name: 'Binance Connect', min: '$15', status: 'Active', tone: 'green' },
                                                { name: 'Alchemy Pay', min: '$15', status: '⚠️ Unstable', tone: 'yellow' },
                                                { name: 'MoonPay', min: '$20', status: 'Active', tone: 'green' },
                                                { name: 'Banxa', min: '$20', status: 'Active', tone: 'green' },
                                                { name: 'Guardarian', min: '$21', status: '⚠️ Unstable', tone: 'yellow' },
                                                { name: 'Cryptix', min: '$20', status: 'Active', tone: 'green' },
                                                { name: 'particle.network', min: '$30', status: 'Active', tone: 'green' },
                                                { name: 'mercuryo.io', min: '$30', status: '⚠️ Unstable', tone: 'yellow' },
                                                { name: 'Sardine.ai', min: '$30', status: 'Active', tone: 'green' },
                                                { name: 'UTORG', min: '$50', status: 'Active', tone: 'green' },
                                                { name: 'iDEAL (NL)', min: '€46', status: 'Active', tone: 'green' },
                                                { name: 'Simplex', min: '$50', status: 'Active', tone: 'green' },
                                                { name: 'UPI/IMPS', min: '₹1600', status: 'Active', tone: 'green' },
                                                { name: 'Interac', min: 'CA$100', status: 'Active', tone: 'green' }].map((row) => (
                                                      <tr key={row.name} className="bg-white/5 hover:bg-white/8 transition-colors">
                                                            <td className="py-4 px-6 font-medium text-slate-50">{row.name}</td>
                                                            <td className="py-4 px-6 text-center text-slate-100">{row.min}</td>
                                                            <td className="py-4 px-6 text-center">
                                                                  <span
                                                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${row.tone === 'green'
                                                                                    ? 'bg-emerald-500/20 text-emerald-100 border border-emerald-400/40'
                                                                                    : 'bg-amber-500/20 text-amber-100 border border-amber-400/40'
                                                                              }`}
                                                                  >
                                                                        {row.status}
                                                                  </span>
                                                            </td>
                                                      </tr>
                                                ))}
                                          </tbody>
                                    </table>
                              </div>

                              <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl space-y-3 text-sm text-slate-100">
                                    <div>💡 <span className="text-amber-100 font-medium">Payouts may be sent in ETH, USDC, USDT (Polygon/BEP-20), or POL native token. Use a self-custodial wallet to receive payouts.</span></div>
                                    <div>⚠️ <span className="font-medium text-amber-100">Providers marked as "Unstable" are experiencing issues or under maintenance. We recommend avoiding these temporarily.</span></div>
                                    <div>📌 <span className="font-medium text-slate-100">UK Customers:</span> Due to UK FCA regulations, some providers enforce a 24-hour cooling-off period. <strong>Enable Revolut</strong> to allow UK customers to purchase without waiting.</div>
                                    <div>🌍 <span className="font-medium text-slate-100">Multi-Hosted Provider:</span> Select "Multi Hosted Providers" to offer customers a choice of multiple providers in one checkout flow.</div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default MinimumAmountsPage;
