'use client';

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
      const primaryButton = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 text-white font-semibold text-sm shadow-[0_12px_35px_rgba(59,130,246,0.35)] transition-all hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400 active:scale-[0.99]';
      const ghostButton = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/10 text-white font-semibold text-sm shadow-[0_8px_28px_rgba(15,23,42,0.35)] transition-all hover:bg-white/15';
      const outlineButton = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/70 text-cyan-100 font-semibold text-sm bg-transparent hover:bg-cyan-400/10 transition-all';
      return (
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 [&_.text-slate-900]:text-white [&_.text-slate-800]:text-slate-100 [&_.text-slate-700]:text-slate-200 [&_.text-slate-600]:text-slate-300 [&_.text-slate-500]:text-slate-300">
                  <div className="absolute inset-0 galaxy-bg" aria-hidden="true">
                        <div className="galaxy-blob galaxy-blob-1"></div>
                        <div className="galaxy-blob galaxy-blob-2"></div>
                        <div className="galaxy-blob galaxy-blob-3"></div>
                        <div className="galaxy-stars"></div>
                  </div>
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/25 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-indigo-500/25 blur-3xl" />
                  </div>

                  <div className="relative z-10">
                        {/* Hero Section */}
                        <section className="min-h-screen flex items-center justify-center px-6 py-16">
                              <div className="max-w-7xl mx-auto w-full">
                                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                                          <div>
                                                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-indigo-200 px-4 py-2 text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-3">
                                                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                      Live checkout infrastructure
                                                </div>
                                                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                                                      Modern <span className="text-indigo-600">Card-to-Crypto</span> Checkout Built for You
                                                </h1>
                                                <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                                                      Launch no-code payment links, no-KYC virtual cards, and plugin integrations with one consistent workflow. Share a link and start collecting in minutes.
                                                </p>
                                                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                                                      <a
                                                            href="/assets/plugins/woocommerce/onrampay-instant-payment-gateway.zip"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`${primaryButton} w-full sm:w-auto`}
                                                      >
                                                            Free Plugin
                                                      </a>
                                                      <Link
                                                            href="/no-kyc-virtual-credit-card"
                                                            className={`${ghostButton} w-full sm:w-auto`}
                                                      >
                                                            No KYC Virtual Cards
                                                      </Link>
                                                      <Link
                                                            href="/payment-generator"
                                                            className={`${outlineButton} w-full sm:w-auto`}
                                                      >
                                                            Create Payment Link
                                                      </Link>
                                                </div>
                                                <div className="mt-7 flex flex-wrap gap-2">
                                                      <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white">🚀 Hosted Checkout</span>
                                                      <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white">🛡️ Fraud-lite Routing</span>
                                                      <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white">💳 No-KYC Cards</span>
                                                      <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white">🧾 Invoice Links</span>
                                                </div>
                                          </div>

                                          <div className="relative">
                                                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-7 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
                                                      <div className="flex items-center justify-between mb-5">
                                                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Live Preview</h3>
                                                            <span className="text-xs font-semibold text-emerald-200 bg-emerald-500/20 px-2 py-1 rounded-full">Pending</span>
                                                      </div>
                                                      <div className="space-y-3">
                                                            <div className="rounded-xl border border-white/10 p-3 bg-white/5">
                                                                  <p className="text-xs text-slate-300">Payer</p>
                                                                  <p className="text-sm font-semibold text-white">customer@email.com</p>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-3">
                                                                  <div className="rounded-xl border border-white/10 p-3 bg-white/5">
                                                                        <p className="text-xs text-slate-300">Amount</p>
                                                                        <p className="text-sm font-semibold text-white">150 USD</p>
                                                                  </div>
                                                                  <div className="rounded-xl border border-white/10 p-3 bg-white/5">
                                                                        <p className="text-xs text-slate-300">Provider</p>
                                                                        <p className="text-sm font-semibold text-white">Mastercard</p>
                                                                  </div>
                                                            </div>
                                                            <div className="rounded-xl border border-cyan-300/40 p-3 bg-cyan-500/10">
                                                                  <p className="text-xs text-cyan-100">Tracking ID</p>
                                                                  <p className="text-xs font-mono text-white break-all">_nK2qUzxf1EM4NnNjAGypJ2n</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="absolute -z-10 -top-6 -right-6 w-44 h-44 rounded-full bg-cyan-400/40 blur-3xl"></div>
                                                <div className="absolute -z-10 -bottom-6 -left-6 w-44 h-44 rounded-full bg-indigo-500/40 blur-3xl"></div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* Feature Highlights */}
                        <section className="py-16 px-6 bg-slate-900/60 backdrop-blur">
                              <div className="max-w-7xl mx-auto">
                                    <div className="text-center mb-12 space-y-3">
                                          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Feature Stack</p>
                                          <h2 className="text-4xl font-extrabold text-white">All-in-one rails for bold teams</h2>
                                          <p className="text-lg text-slate-200/80 max-w-3xl mx-auto">Ship faster with prebuilt flows, zero-KYC cards, crypto QR invoices, and plugin starters that work together.</p>
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
                                                <div key={item.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                                                      <div className="flex items-center gap-3 mb-3">
                                                            <span className="text-2xl" aria-hidden>{item.emoji}</span>
                                                            <span className="px-2.5 py-1 text-xs font-bold bg-white/15 text-cyan-100 rounded-full">LIVE</span>
                                                      </div>
                                                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                                      <p className="text-sm text-slate-200 leading-relaxed">{item.desc}</p>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </section>

                        {/* Feature Map */}
                        <section className="py-16 px-6 bg-slate-900/40 backdrop-blur">
                              <div className="max-w-7xl mx-auto">
                                    <div className="text-center mb-12 space-y-3">
                                          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Explore the suite</p>
                                          <h2 className="text-4xl font-extrabold text-white">Everything live in this site</h2>
                                          <p className="text-lg text-slate-200/80 max-w-3xl mx-auto">Jump into any feature: payment links, crypto QR invoices, no-KYC cards, status checks, limits, and policy details.</p>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                          {[
                                                { title: 'Payment Generator', desc: 'Create shareable card-to-crypto invoices with tracking IDs.', href: '/payment-generator', badge: 'Links', emoji: '🔗' },
                                                { title: 'Crypto Payment', desc: 'Convert fiat, get coin amount, QR, and address-in instantly.', href: '/crypto-payment', badge: 'Crypto', emoji: '🪙' },
                                                { title: 'No KYC Cards', desc: 'Order Visa, Mastercard, or PayPal gift cards funded by USDT.', href: '/no-kyc-virtual-credit-card', badge: 'Cards', emoji: '💳' },
                                                { title: 'Track Payment', desc: 'Open live status for any redeem ID in a new tab.', href: '/track-payment', badge: 'Status', emoji: '📡' },
                                                { title: 'Status & Limits', desc: 'Review minimums, networks, and provider availability.', href: '/minimum-amounts', badge: 'Limits', emoji: '📏' },
                                                { title: 'Card Info & Restrictions', desc: 'Read prohibited country list and virtual card policies.', href: '/virtual-card-policies', badge: 'Policy', emoji: '⚖️' },
                                          ].map((item) => (
                                                <Link
                                                      key={item.title}
                                                      href={item.href}
                                                      className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-300/40 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-all group"
                                                >
                                                      <div className="flex items-center justify-between mb-3">
                                                            <span className="text-2xl" aria-hidden>{item.emoji}</span>
                                                            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] bg-white/15 text-cyan-100">{item.badge}</span>
                                                      </div>
                                                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">{item.title}</h3>
                                                      <p className="text-sm text-slate-200 leading-relaxed">{item.desc}</p>
                                                </Link>
                                          ))}
                                    </div>
                              </div>
                        </section>

                        {/* High-Risk Payments Section */}
                        <section className="py-20 px-6 bg-slate-900/40 backdrop-blur">
                              <div className="max-w-7xl mx-auto">
                                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                                          {/* Left: Content */}
                                          <div>
                                                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                                      High-Risk Payments for <span className="bg-gradient-to-r from-cyan-200 via-indigo-200 to-pink-200 bg-clip-text text-transparent">E-Commerce</span>
                                                </h2>
                                                <p className="text-xl text-slate-200/85 mb-8 leading-relaxed">
                                                      Accept cards with confidence. Keep checkout on your domain, reduce bans & limits, and unlock fast USDC payouts.
                                                </p>

                                                <div className="space-y-4">
                                                      <div className="flex items-start gap-4">
                                                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                  </svg>
                                                            </div>
                                                            <div>
                                                                  <h3 className="font-bold text-white text-lg">Receive instant payouts via USDC</h3>
                                                                  <p className="text-slate-300 text-sm">Get paid immediately in stablecoin without delays</p>
                                                            </div>
                                                      </div>

                                                      <div className="flex items-start gap-4">
                                                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                  </svg>
                                                            </div>
                                                            <div>
                                                                  <h3 className="font-bold text-white text-lg">No need for a registered LTD or LLC</h3>
                                                                  <p className="text-slate-300 text-sm">Start accepting payments as an individual or startup</p>
                                                            </div>
                                                      </div>

                                                      <div className="flex items-start gap-4">
                                                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                  </svg>
                                                            </div>
                                                            <div>
                                                                  <h3 className="font-bold text-white text-lg">No KYC required for sellers</h3>
                                                                  <p className="text-slate-300 text-sm">Skip the paperwork and start selling immediately</p>
                                                            </div>
                                                      </div>

                                                      <div className="flex items-start gap-4">
                                                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                  </svg>
                                                            </div>
                                                            <div>
                                                                  <h3 className="font-bold text-white text-lg">Quick setup — install and activate in less than a minute</h3>
                                                                  <p className="text-slate-300 text-sm">Simple one-click installation and configuration</p>
                                                            </div>
                                                      </div>

                                                      <div className="flex items-start gap-4">
                                                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                  </svg>
                                                            </div>
                                                            <div>
                                                                  <h3 className="font-bold text-white text-lg">Supports high-risk businesses, individuals, and startups</h3>
                                                                  <p className="text-slate-300 text-sm">Perfect for industries often rejected by traditional processors</p>
                                                            </div>
                                                      </div>

                                                      <div className="flex items-start gap-4">
                                                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                  </svg>
                                                            </div>
                                                            <div>
                                                                  <h3 className="font-bold text-white text-lg">Zero chargebacks guaranteed</h3>
                                                                  <p className="text-slate-300 text-sm">Crypto payments are final and irreversible</p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="mt-10">
                                                      <a
                                                            href="/assets/plugins/woocommerce/onrampay-instant-payment-gateway.zip"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`${primaryButton} text-base px-8 py-4`}
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
                        <section className="py-16 px-6 bg-slate-900/60 backdrop-blur">
                              <div className="max-w-7xl mx-auto">
                                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                                          Why Choose Onramp Pay for Your Store?
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-8">
                                          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-shadow">
                                                <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                      </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3">Lightning Fast Setup</h3>
                                                <p className="text-slate-200">Install in minutes. No complex configuration. Works out of the box with 20+ payment providers.</p>
                                          </div>

                                          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-shadow">
                                                <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                      </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3">Secure & Compliant</h3>
                                                <p className="text-slate-200">Enterprise-grade security. PCI DSS compliant payment providers. Your customers' data is protected.</p>
                                          </div>

                                          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-shadow">
                                                <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                      </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3">20+ Global Providers</h3>
                                                <p className="text-slate-200">Support customers worldwide with Stripe, MoonPay, Wert.io, Revolut, and 15+ more providers.</p>
                                          </div>

                                          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-shadow">
                                                <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                      </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3">Low Fees Start at $1</h3>
                                                <p className="text-slate-200">Competitive minimums from $1 (Wert.io) to $50 (Simplex). Choose the best provider for your customers.</p>
                                          </div>

                                          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-shadow">
                                                <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                                      </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3">Instant Crypto Delivery</h3>
                                                <p className="text-slate-200">Customers receive crypto directly to their wallets. ETH, USDC, USDT, POL supported.</p>
                                          </div>

                                          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-shadow">
                                                <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                                      </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3">Premium Support</h3>
                                                <p className="text-slate-200">Email support, detailed documentation, and regular updates included with your license.</p>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* How It Works */}
                        <section className="py-16 px-6 bg-slate-900/40 backdrop-blur">
                              <div className="max-w-5xl mx-auto">
                                    <h2 className="text-4xl font-bold text-center text-white mb-12">How It Works</h2>
                                    <div className="space-y-8">
                                          <div className="flex gap-6 items-start">
                                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-indigo-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">1</div>
                                                <div>
                                                      <h3 className="text-xl font-bold text-white mb-2">Install the Plugin</h3>
                                                      <p className="text-slate-200">Download and activate the Onramp Pay plugin for your platform (WooCommerce, PrestaShop, or OpenCart). Configure your wallet address and preferred providers.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-6 items-start">
                                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-indigo-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">2</div>
                                                <div>
                                                      <h3 className="text-xl font-bold text-white mb-2">Customer Checkout</h3>
                                                      <p className="text-slate-200">Customers select "Pay with Crypto" at checkout. They're redirected to pay with their card into a unique wallet address.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-6 items-start">
                                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-indigo-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">3</div>
                                                <div>
                                                      <h3 className="text-xl font-bold text-white mb-2">Instant Settlement</h3>
                                                      <p className="text-slate-200">Payment is processed, crypto is automatically forwarded to your merchant wallet address set in plugin settings, and you receive confirmation.</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* API Documentation CTA */}
                        <section className="py-16 px-6 bg-slate-900/60 backdrop-blur">
                              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                                    <div className="bg-white/5 border border-white/10 rounded-3xl p-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                                          <h3 className="text-3xl font-bold mb-3 text-white">Need Custom Integration?</h3>
                                          <p className="text-slate-200 mb-6 text-lg">Use our API to build your own payment solution.</p>

                                          <ul className="space-y-3 mb-8 text-slate-200">
                                                {[
                                                      'Complete API documentation with examples',
                                                      'RESTful endpoints for payment creation & tracking',
                                                      'Webhook support for real-time notifications',
                                                      'Developer support & integration assistance',
                                                ].map((item) => (
                                                      <li key={item} className="flex items-start gap-3">
                                                            <svg className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span>{item}</span>
                                                      </li>
                                                ))}
                                          </ul>

                                          <div className="flex flex-wrap gap-3">
                                                <a href="https://documenter.getpostman.com/view/14826208/2sBXcHiz2s" target="_blank" rel="noopener noreferrer" className={`${primaryButton} px-8 py-3 text-base inline-flex`}>View API Documentation</a>
                                                <Link href="/track-payment" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all">
                                                      Track Payments
                                                </Link>
                                          </div>
                                    </div>

                                    <div className="relative">
                                          <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/15 via-indigo-500/15 to-pink-500/15 blur-3xl rounded-[36px]" aria-hidden="true" />
                                          <div className="relative bg-slate-950/60 border border-white/10 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl flex flex-col gap-6">
                                                <div className="flex items-center justify-between">
                                                      <div className="flex items-center gap-3">
                                                            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">API</div>
                                                            <div>
                                                                  <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Environment</p>
                                                                  <p className="text-sm font-semibold text-white">Production</p>
                                                            </div>
                                                      </div>
                                                      <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-400/15 text-emerald-100 border border-emerald-300/25">Status: Live</span>
                                                </div>

                                                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-sm text-slate-100 space-y-2">
                                                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                                                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                                            payment-link.js
                                                      </div>
                                                      <pre className="whitespace-pre-wrap leading-relaxed text-slate-100">{`const response = await fetch(
      "https://api.onramp-pay.com/control/wallet.php?provider=mastercard&amount=250"
);

const data = await response.json();

console.log(data.status_url); // shareable link
console.log(data.address_in || "0xDEMO1234..."); // address in`}</pre>
                                                </div>

                                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                                                      <div className="flex items-center justify-between mb-2">
                                                            <span className="text-sm font-semibold text-white">Webhook sample</span>
                                                            <span className="text-[11px] px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-100 border border-indigo-400/30">POST</span>
                                                      </div>
                                                      <p className="text-xs font-mono text-slate-200/90">{`/api/webhooks/onramppay`}</p>
                                                      <p className="text-xs text-slate-300 mt-2">Receive payment status updates in real time to keep your ledger in sync.</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* Payment Link Generator CTA */}
                        <section className="py-16 px-6 bg-slate-900/40 backdrop-blur">
                              <div className="max-w-4xl mx-auto text-center">
                                    <h2 className="text-3xl font-bold text-white mb-4">Need Just Payment Links?</h2>
                                    <p className="text-lg text-slate-200 mb-8">
                                          Create standalone card-to-crypto payment links without WooCommerce. Perfect for freelancers, invoicing, and one-time payments.
                                    </p>
                                    <Link
                                          href="/payment-generator"
                                          className={`${primaryButton} px-8 py-4 text-base inline-flex`}
                                    >
                                          Try Payment Link Generator →
                                    </Link>
                              </div>
                        </section>
                  </div>
            </div>
      );
};

export default HomePage;
