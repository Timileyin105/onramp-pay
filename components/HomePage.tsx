'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { purchaseService } from '@/services/purchaseService';

type PurchaseMethod = 'card' | 'crypto' | 'onramppay';

type PlanOption = {
      name: string;
      amount: number;
};

const HomePage: React.FC = () => {
      const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
      const [selectedPlan, setSelectedPlan] = useState<PlanOption | null>(null);
      const [purchaseForm, setPurchaseForm] = useState({
            name: '',
            email: '',
            paymentMethod: 'crypto' as PurchaseMethod,
      });
      const [purchaseError, setPurchaseError] = useState<string | null>(null);
      const [purchaseLoading, setPurchaseLoading] = useState(false);

      const openPurchaseModal = (plan: PlanOption) => {
            setSelectedPlan(plan);
            setPurchaseError(null);
            setIsPurchaseOpen(true);
      };

      const closePurchaseModal = () => {
            setIsPurchaseOpen(false);
            setPurchaseLoading(false);
      };

      const handlePurchaseSubmit = async (event: React.FormEvent) => {
            event.preventDefault();
            if (!selectedPlan) return;
            setPurchaseLoading(true);
            setPurchaseError(null);
            try {
                  const response = await purchaseService.createTransaction({
                        name: purchaseForm.name,
                        email: purchaseForm.email,
                        plan: selectedPlan.name,
                        amount: selectedPlan.amount,
                        currency: 'USD',
                        paymentMethod: purchaseForm.paymentMethod,
                  });
                  window.location.href = response.redirectUrl;
            } catch (error) {
                  const message = error instanceof Error ? error.message : 'Unable to create transaction.';
                  setPurchaseError(message);
                  setPurchaseLoading(false);
            }
      };
      return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
                  {/* Hero Section */}
                  <section className="min-h-screen flex items-center justify-center px-6">
                        <div className="max-w-6xl mx-auto text-center mb-[20%] sm:mb-0">
                              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                                    Accept <span className="text-indigo-600">Crypto Payments</span> on Your E-Commerce Store
                              </h1>
                              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                                    Powerful plugins for WooCommerce, PrestaShop, OpenCart, and API integration. Let customers pay with credit/debit cards and receive crypto instantly.
                              </p>
                              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                          href="#pricing"
                                          className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
                                    >
                                          Get Started - $150
                                    </a>
                                    <Link
                                          href="/payment-generator"
                                          className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl font-bold text-base sm:text-lg hover:bg-indigo-50 transition-all"
                                    >
                                          Try Payment Link Generator
                                    </Link>
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
                                                      href="#pricing"
                                                      className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
                                                >
                                                      Get Started Now
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

                  {/* Pricing */}
                  <section id="pricing" className="py-16 px-6 bg-white">
                        <div className="max-w-6xl mx-auto">
                              <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
                                    <p className="text-xl text-slate-600">One-time payment per platform • Lifetime updates</p>
                              </div>

                              <div className="grid md:grid-cols-3 gap-8 mb-12">
                                    {/* WooCommerce */}
                                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                                          <h3 className="text-2xl font-bold mb-3">WooCommerce</h3>
                                          <div className="text-5xl font-extrabold mb-2">$150</div>
                                          <p className="text-indigo-100 mb-6 text-sm">One-time payment</p>
                                          <ul className="text-left space-y-2 mb-6 text-sm">
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>20+ Payment Providers</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Unlimited transactions</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Auto order updates</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Lifetime updates</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Premium support</span>
                                                </li>
                                          </ul>
                                          <button
                                                type="button"
                                                onClick={() => openPurchaseModal({ name: 'WooCommerce', amount: 150 })}
                                                className="block w-full px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold text-center hover:bg-gray-50 transition-all"
                                          >
                                                Purchase
                                          </button>
                                    </div>

                                    {/* PrestaShop */}
                                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
                                          <h3 className="text-2xl font-bold mb-3">PrestaShop</h3>
                                          <div className="text-5xl font-extrabold mb-2">$150</div>
                                          <p className="text-purple-100 mb-6 text-sm">One-time payment</p>
                                          <ul className="text-left space-y-2 mb-6 text-sm">
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>20+ Payment Providers</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Unlimited transactions</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Auto order updates</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Lifetime updates</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Premium support</span>
                                                </li>
                                          </ul>
                                          <button
                                                type="button"
                                                onClick={() => openPurchaseModal({ name: 'PrestaShop', amount: 150 })}
                                                className="block w-full px-6 py-3 bg-white text-purple-600 rounded-xl font-bold text-center hover:bg-gray-50 transition-all"
                                          >
                                                Purchase
                                          </button>
                                    </div>

                                    {/* OpenCart */}
                                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
                                          <h3 className="text-2xl font-bold mb-3">OpenCart</h3>
                                          <div className="text-5xl font-extrabold mb-2">$150</div>
                                          <p className="text-blue-100 mb-6 text-sm">One-time payment</p>
                                          <ul className="text-left space-y-2 mb-6 text-sm">
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>20+ Payment Providers</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Unlimited transactions</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Auto order updates</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Lifetime updates</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      <span>Premium support</span>
                                                </li>
                                          </ul>
                                          <button
                                                type="button"
                                                onClick={() => openPurchaseModal({ name: 'OpenCart', amount: 150 })}
                                                className="block w-full px-6 py-3 bg-white text-blue-600 rounded-xl font-bold text-center hover:bg-gray-50 transition-all"
                                          >
                                                Purchase
                                          </button>
                                    </div>
                              </div>

                              {/* API Documentation CTA */}
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

                                    <a href="#" className="inline-block px-10 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-lg">
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
                  {isPurchaseOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                              <div
                                    className="absolute inset-0 bg-slate-900/60"
                                    onClick={closePurchaseModal}
                                    role="button"
                                    aria-label="Close purchase modal"
                              />
                              <div className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">
                                    <div className="flex items-start justify-between gap-4 mb-6">
                                          <div>
                                                <h3 className="text-2xl font-bold text-slate-900">Complete your purchase</h3>
                                                <p className="text-sm text-slate-500">{selectedPlan?.name} • ${selectedPlan?.amount}</p>
                                          </div>
                                          <button
                                                type="button"
                                                onClick={closePurchaseModal}
                                                className="text-slate-500 hover:text-slate-700"
                                                aria-label="Close"
                                          >
                                                ✕
                                          </button>
                                    </div>

                                    {purchaseError && (
                                          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                                {purchaseError}
                                          </div>
                                    )}

                                    <form onSubmit={handlePurchaseSubmit} className="space-y-4">
                                          <div>
                                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                                                      Full Name
                                                </label>
                                                <input
                                                      type="text"
                                                      required
                                                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                                      placeholder="John Doe"
                                                      value={purchaseForm.name}
                                                      onChange={(event) => setPurchaseForm({ ...purchaseForm, name: event.target.value })}
                                                />
                                          </div>

                                          <div>
                                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                                                      Email Address
                                                </label>
                                                <input
                                                      type="email"
                                                      required
                                                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                                      placeholder="johndoe@gmail.com"
                                                      value={purchaseForm.email}
                                                      onChange={(event) => setPurchaseForm({ ...purchaseForm, email: event.target.value })}
                                                />
                                          </div>

                                          <div>
                                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                                                      Payment Method
                                                </label>
                                                <select
                                                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                                      value={purchaseForm.paymentMethod}
                                                      onChange={(event) =>
                                                            setPurchaseForm({
                                                                  ...purchaseForm,
                                                                  paymentMethod: event.target.value as PurchaseMethod,
                                                            })
                                                      }
                                                >
                                                      {/* <option value="card">Bank Card</option> */}
                                                      <option value="crypto">Cryptocurrency</option>
                                                      <option value="onramppay">Bank Card (Onramppay)</option>
                                                </select>
                                          </div>

                                          <button
                                                type="submit"
                                                disabled={purchaseLoading}
                                                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all disabled:opacity-70"
                                          >
                                                {purchaseLoading ? 'Creating transaction...' : 'Continue to Payment'}
                                          </button>
                                    </form>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default HomePage;
