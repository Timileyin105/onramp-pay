'use client';

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
      return (
            <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-50">
                  {/* Hero Section */}
                  <section className="min-h-screen flex items-center justify-center px-6 py-16">
                        <div className="max-w-7xl mx-auto w-full">
                              <div className="grid lg:grid-cols-2 gap-10 items-center">
                                    <div>
                                          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-indigo-200 px-4 py-2 text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-3">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                Live checkout infrastructure
                                          </div>
                                          <div className="flex flex-wrap items-center gap-3 mb-6">
                                                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-300/60">
                                                      <img src="/assets/images/onramp-pay-white.png" alt="Onramp Pay White" className="h-7 w-auto" />
                                                      <span className="text-xs font-semibold tracking-wide">Dark</span>
                                                </div>
                                                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                                                      <img src="/assets/images/onramp-pay.png" alt="Onramp Pay" className="h-7 w-auto" />
                                                      <span className="text-xs font-semibold text-slate-700 tracking-wide">Light</span>
                                                </div>
                                                <span className="px-3 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">✨ Brand-ready assets</span>
                                          </div>
                                          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                                                Modern <span className="text-indigo-600">Card-to-Crypto</span> Checkout for Fast Teams
                                          </h1>
                                          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                                                Launch no-code payment links, no-KYC virtual cards, and plugin integrations with one consistent workflow. Share a link and start collecting in minutes.
                                          </p>
                                          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                                <a
                                                      href="https://onramp-pay.com/downloads/onramppay-plugin.zip"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-base hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
                                                >
                                                      Download Plugin For Free
                                                </a>
                                                <Link
                                                      href="/no-kyc-virtual-credit-card"
                                                      className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-base hover:bg-slate-800 transition-all"
                                                >
                                                      No KYC Virtual Cards
                                                </Link>
                                                <Link
                                                      href="/payment-generator"
                                                      className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl font-bold text-base hover:bg-indigo-50 transition-all"
                                                >
                                                      Try Payment Link Generator
                                                </Link>
                                          </div>
                                          <div className="mt-7 flex flex-wrap gap-2">
                                                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">🚀 Hosted Checkout</span>
                                                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">🛡️ Fraud-lite Routing</span>
                                                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">💳 No-KYC Cards</span>
                                                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">🧾 Invoice Links</span>
                                          </div>
                                    </div>

                                    <div className="relative">
                                          <div className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur p-7 shadow-xl">
                                                <div className="flex items-center justify-between mb-5">
                                                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Live Preview</h3>
                                                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Pending</span>
                                                </div>
                                                <div className="space-y-3">
                                                      <div className="rounded-xl border border-slate-200 p-3 bg-slate-50">
                                                            <p className="text-xs text-slate-500">Payer</p>
                                                            <p className="text-sm font-semibold text-slate-900">customer@email.com</p>
                                                      </div>
                                                      <div className="grid grid-cols-2 gap-3">
                                                            <div className="rounded-xl border border-slate-200 p-3 bg-slate-50">
                                                                  <p className="text-xs text-slate-500">Amount</p>
                                                                  <p className="text-sm font-semibold text-slate-900">150 USD</p>
                                                            </div>
                                                            <div className="rounded-xl border border-slate-200 p-3 bg-slate-50">
                                                                  <p className="text-xs text-slate-500">Provider</p>
                                                                  <p className="text-sm font-semibold text-slate-900">Mastercard</p>
                                                            </div>
                                                      </div>
                                                      <div className="rounded-xl border border-indigo-200 p-3 bg-indigo-50">
                                                            <p className="text-xs text-indigo-700">Tracking ID</p>
                                                            <p className="text-xs font-mono text-indigo-900 break-all">_nK2qUzxf1EM4NnNjAGypJ2n</p>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="absolute -z-10 -top-6 -right-6 w-44 h-44 rounded-full bg-cyan-200/50 blur-3xl"></div>
                                          <div className="absolute -z-10 -bottom-6 -left-6 w-44 h-44 rounded-full bg-indigo-200/60 blur-3xl"></div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* Feature Highlights */}
                  <section className="py-16 px-6 bg-white">
                        <div className="max-w-7xl mx-auto">
                              <div className="text-center mb-12 space-y-3">
                                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-600">Feature Stack</p>
                                    <h2 className="text-4xl font-extrabold text-slate-900">All-in-one rails for bold teams</h2>
                                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">Ship faster with prebuilt flows, zero-KYC cards, crypto QR invoices, and plugin starters that work together.</p>
                              </div>

                              <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                          { emoji: '🧾', title: 'Payment Links', desc: 'Spin up branded payment links with shareable tracking in seconds.' },
                                          { emoji: '🛡️', title: 'No-KYC Cards', desc: 'Issue Visa, Mastercard, or PayPal gift cards with Polygon USDT funding.' },
                                          { emoji: '💸', title: 'Crypto QR', desc: 'Generate coin amounts, QR, and address-in for every invoice automatically.' },
                                          { emoji: '🔌', title: 'Plugins', desc: 'WooCommerce, PrestaShop, and OpenCart downloads ready to drop in.' },
                                          { emoji: '📡', title: 'Status & Webhooks', desc: 'Live status checks and callbacks keep your backoffice in sync.' },
                                          { emoji: '🌎', title: '20+ Providers', desc: 'Stripe, MoonPay, Wert, Revolut, and more—pick the best route per buyer.' },
                                    ].map((item) => (
                                          <div key={item.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white transition-all shadow-sm hover:shadow-md">
                                                <div className="flex items-center gap-3 mb-3">
                                                      <span className="text-2xl" aria-hidden>{item.emoji}</span>
                                                      <span className="px-2.5 py-1 text-xs font-bold bg-indigo-100 text-indigo-700 rounded-full">LIVE</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* High-Risk Payments Section */}
                  <section className="py-20 px-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
                        <div className="max-w-7xl mx-auto">
                              <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    {/* Left: Content */}
                                    <div>
                                          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                                                High-Risk Payments for <span className="text-indigo-600">E-Commerce</span>
                                          </h2>
                                          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                                Accept cards with confidence. Keep checkout on your domain, reduce bans & limits, and unlock fast USDC payouts.
                                          </p>

                                          <div className="space-y-4">
                                                <div className="flex items-start gap-4">
                                                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                      </div>
                                                      <div>
                                                            <h3 className="font-bold text-slate-900 text-lg">Receive instant payouts via USDC</h3>
                                                            <p className="text-slate-600 text-sm">Get paid immediately in stablecoin without delays</p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                      </div>
                                                      <div>
                                                            <h3 className="font-bold text-slate-900 text-lg">No need for a registered LTD or LLC</h3>
                                                            <p className="text-slate-600 text-sm">Start accepting payments as an individual or startup</p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                      </div>
                                                      <div>
                                                            <h3 className="font-bold text-slate-900 text-lg">No KYC required for sellers</h3>
                                                            <p className="text-slate-600 text-sm">Skip the paperwork and start selling immediately</p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                      </div>
                                                      <div>
                                                            <h3 className="font-bold text-slate-900 text-lg">Quick setup — install and activate in less than a minute</h3>
                                                            <p className="text-slate-600 text-sm">Simple one-click installation and configuration</p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                      </div>
                                                      <div>
                                                            <h3 className="font-bold text-slate-900 text-lg">Supports high-risk businesses, individuals, and startups</h3>
                                                            <p className="text-slate-600 text-sm">Perfect for industries often rejected by traditional processors</p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                      </div>
                                                      <div>
                                                            <h3 className="font-bold text-slate-900 text-lg">Zero chargebacks guaranteed</h3>
                                                            <p className="text-slate-600 text-sm">Crypto payments are final and irreversible</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="mt-10">
                                                <a
                                                      href="https://onramp-pay.com/downloads/onramppay-plugin.zip"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
                                                >
                                                      Download Plugin
                                                </a>
                                          </div>
                                    </div>

                                    {/* Right: Image */}
                                    <div className="relative">
                                          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                                                <img
                                                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
                                                      alt="Secure payment processing"
                                                      className="rounded-2xl w-full h-auto shadow-lg"
                                                      onError={(e) => {
                                                            // Fallback to gradient background with icon if image fails
                                                            e.currentTarget.style.display = 'none';
                                                      }}
                                                />
                                                {/* Fallback design if image doesn't load */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                                      <div className="text-center text-white p-8">
                                                            <svg className="w-24 h-24 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                            </svg>
                                                            <h3 className="text-2xl font-bold">Secure Payments</h3>
                                                            <p className="text-indigo-100">Protected by blockchain technology</p>
                                                      </div>
                                                </div>
                                          </div>
                                          {/* Decorative elements */}
                                          <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                                          <div className="absolute -z-10 -bottom-8 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* Features Section */}
                  <section className="py-16 px-6 bg-white">
                        <div className="max-w-7xl mx-auto">
                              <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                                    Why Choose Onramp Pay for Your Store?
                              </h2>
                              <div className="grid md:grid-cols-3 gap-8">
                                    <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                                          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                          </div>
                                          <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast Setup</h3>
                                          <p className="text-slate-600">Install in minutes. No complex configuration. Works out of the box with 20+ payment providers.</p>
                                    </div>

                                    <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                          </div>
                                          <h3 className="text-xl font-bold text-slate-900 mb-3">Secure & Compliant</h3>
                                          <p className="text-slate-600">Enterprise-grade security. PCI DSS compliant payment providers. Your customers' data is protected.</p>
                                    </div>

                                    <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                          </div>
                                          <h3 className="text-xl font-bold text-slate-900 mb-3">20+ Global Providers</h3>
                                          <p className="text-slate-600">Support customers worldwide with Stripe, MoonPay, Wert.io, Revolut, and 15+ more providers.</p>
                                    </div>

                                    <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                          </div>
                                          <h3 className="text-xl font-bold text-slate-900 mb-3">Low Fees Start at $1</h3>
                                          <p className="text-slate-600">Competitive minimums from $1 (Wert.io) to $50 (Simplex). Choose the best provider for your customers.</p>
                                    </div>

                                    <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                                </svg>
                                          </div>
                                          <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Crypto Delivery</h3>
                                          <p className="text-slate-600">Customers receive crypto directly to their wallets. ETH, USDC, USDT, POL supported.</p>
                                    </div>

                                    <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                          </div>
                                          <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Support</h3>
                                          <p className="text-slate-600">Email support, detailed documentation, and regular updates included with your license.</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* How It Works */}
                  <section className="py-16 px-6">
                        <div className="max-w-5xl mx-auto">
                              <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">How It Works</h2>
                              <div className="space-y-8">
                                    <div className="flex gap-6 items-start">
                                          <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                                          <div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">Install the Plugin</h3>
                                                <p className="text-slate-600">Download and activate the Onramp Pay plugin for your platform (WooCommerce, PrestaShop, or OpenCart). Configure your wallet address and preferred providers.</p>
                                          </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                          <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                                          <div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Checkout</h3>
                                                <p className="text-slate-600">Customers select "Pay with Crypto" at checkout. They're redirected to pay with their card into a unique wallet address.</p>
                                          </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                          <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                                          <div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Settlement</h3>
                                                <p className="text-slate-600">Payment is processed, crypto is automatically forwarded to your merchant wallet address set in plugin settings, and you receive confirmation.</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* API Documentation CTA */}
                  <section className="py-16 px-6 bg-white">
                        <div className="max-w-6xl mx-auto">
                              <div className="bg-slate-900 rounded-3xl p-12 text-white shadow-2xl text-center">
                                    <h3 className="text-3xl font-bold mb-4">Need Custom Integration?</h3>
                                    <p className="text-slate-300 mb-6 text-lg">Use our API to build your own payment solution</p>

                                    <ul className="text-left space-y-3 mb-8 max-w-lg mx-auto">
                                          <li className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Complete API documentation with examples</span>
                                          </li>
                                          <li className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>RESTful endpoints for payment creation & tracking</span>
                                          </li>
                                          <li className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Webhook support for real-time notifications</span>
                                          </li>
                                          <li className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Developer support & integration assistance</span>
                                          </li>
                                    </ul>

                                    <a href="https://documenter.getpostman.com/view/14826208/2sBXcHiz2s" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-lg">
                                          View API Documentation
                                    </a>
                              </div>
                        </div>
                  </section>

                  {/* Payment Link Generator CTA */}
                  <section className="py-16 px-6 bg-gradient-to-br from-slate-100 to-slate-200">
                        <div className="max-w-4xl mx-auto text-center">
                              <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Just Payment Links?</h2>
                              <p className="text-lg text-slate-600 mb-8">
                                    Create standalone card-to-crypto payment links without WooCommerce. Perfect for freelancers, invoicing, and one-time payments.
                              </p>
                              <Link
                                    href="/payment-generator"
                                    className="inline-block px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg"
                              >
                                    Try Payment Link Generator →
                              </Link>
                        </div>
                  </section>
            </div>
      );
};

export default HomePage;
