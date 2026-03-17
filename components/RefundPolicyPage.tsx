import React from 'react';
import Link from 'next/link';

const RefundPolicyPage: React.FC = () => {
      return (
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-12 px-6">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/25 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-indigo-500/25 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  <div className="relative max-w-4xl mx-auto">
                        <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-8 md:p-12 text-slate-100 [&_.text-slate-700]:text-slate-200 [&_.text-slate-900]:text-white [&_.text-slate-800]:text-slate-100 [&_.text-slate-600]:text-slate-300 [&_.text-slate-500]:text-slate-300 [&_.text-blue-900]:text-white [&_.text-blue-800]:text-cyan-100 [&_.text-indigo-900]:text-white [&_.text-indigo-700]:text-cyan-100">
                              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                                    <span className="bg-gradient-to-r from-cyan-200 via-indigo-200 to-pink-200 bg-clip-text text-transparent">Refund Policy</span>
                              </h1>

                              <div className="bg-white/5 border border-white/10 p-6 mb-8 rounded-2xl">
                                    <h2 className="text-xl font-bold text-white mb-3">ℹ️ Important Notice</h2>
                                    <p className="text-slate-200 text-sm leading-relaxed">
                                          All plugin sales are final. We encourage you to test our payment link generator before purchasing to ensure our service meets your needs.
                                    </p>
                              </div>

                              <div className="prose prose-invert max-w-none space-y-8">
                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">No Refund Policy</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                At Onramp Pay, we maintain a strict no-refund policy for all plugin purchases (WooCommerce, PrestaShop, OpenCart). Once a purchase is completed and the plugin download link is delivered to your email, the transaction is considered final and non-refundable.
                                          </p>
                                          <p className="text-slate-700 leading-relaxed">
                                                This policy exists because our plugins are digital products that are immediately accessible upon purchase. Once the download link and license key are provided, we cannot retrieve or revoke the product.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Test Before You Buy</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                We strongly encourage all prospective customers to thoroughly test our service before making a purchase. You can:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                                                <li>Use our <Link href="/payment-generator" className="text-indigo-600 hover:text-indigo-700 font-semibold">free Payment Link Generator</Link> to create and test payment links</li>
                                                <li>Review the <Link href="/minimum-amounts" className="text-indigo-600 hover:text-indigo-700 font-semibold">minimum order amounts</Link> for each payment provider</li>
                                                <li>Check our documentation and feature list to ensure compatibility with your needs</li>
                                                <li>Contact our support team with any pre-purchase questions</li>
                                          </ul>
                                          <p className="text-slate-700 leading-relaxed mt-4">
                                                The payment link generator provides the same underlying technology as our premium plugins, allowing you to verify that our service works for your use case before committing to a purchase.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">What This Policy Covers</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                Our no-refund policy applies to:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                                                <li>All plugin purchases for WooCommerce, PrestaShop, and OpenCart</li>
                                                <li>All payment methods (bank card, cryptocurrency, and Onramp Pay bridge)</li>
                                                <li>All pricing tiers and special offers</li>
                                                <li>Purchases made after testing our free payment link generator</li>
                                          </ul>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Support</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                While we do not offer refunds, we are committed to helping you get the most out of your purchase:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                                                <li>Premium email support for all plugin customers</li>
                                                <li>Detailed documentation and setup guides</li>
                                                <li>Regular plugin updates and improvements</li>
                                                <li>Bug fixes and compatibility updates</li>
                                          </ul>
                                          <p className="text-slate-700 leading-relaxed mt-4">
                                                If you encounter technical issues with your plugin, please contact our support team. We will work diligently to resolve any legitimate technical problems.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Exceptional Circumstances</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                In rare cases where a customer is charged multiple times for the same purchase due to a payment processing error, we will refund the duplicate charges. To request this type of refund:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                                                <li>Contact our support team within 48 hours of the duplicate charge</li>
                                                <li>Provide proof of multiple charges (transaction IDs, bank statements, etc.)</li>
                                                <li>Allow 5-10 business days for investigation and processing</li>
                                          </ul>
                                          <p className="text-slate-700 leading-relaxed mt-4">
                                                This exception applies only to verified payment processing errors and does not extend to change of mind, compatibility issues, or dissatisfaction with features.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Chargebacks</h2>
                                          <p className="text-slate-700 leading-relaxed">
                                                Filing a chargeback or payment dispute instead of contacting us first is considered a breach of our Terms of Use. Chargebacks result in immediate termination of your license, access to support, and updates. We strongly encourage customers to contact our support team to resolve any concerns before initiating a chargeback.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Making an Informed Decision</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                Before purchasing, please ensure that:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                                                <li>You have tested the payment link generator and confirmed it works for your needs</li>
                                                <li>Your platform (WooCommerce, PrestaShop, or OpenCart) is compatible with our plugin</li>
                                                <li>You have reviewed the payment provider minimum amounts</li>
                                                <li>You understand that the plugin facilitates third-party payment processing</li>
                                                <li>You have read and agree to our <Link href="/terms-of-use" className="text-indigo-600 hover:text-indigo-700 font-semibold">Terms of Use</Link></li>
                                          </ul>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions?</h2>
                                          <p className="text-slate-700 leading-relaxed">
                                                If you have any questions about our refund policy or need clarification before making a purchase, please contact our support team. We're here to help ensure you make an informed decision.
                                          </p>
                                    </section>
                              </div>

                              <div className="mt-12 pt-8 border-t border-slate-200">
                                    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center">
                                          <h3 className="text-lg font-bold text-indigo-900 mb-2">Try Before You Buy</h3>
                                          <p className="text-indigo-700 text-sm mb-4">
                                                Test our service for free with the payment link generator
                                          </p>
                                          <Link
                                                href="/payment-generator"
                                                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
                                          >
                                                Try Payment Link Generator
                                          </Link>
                                    </div>
                              </div>

                              <div className="mt-8 text-center">
                                    <p className="text-sm text-slate-500">
                                          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default RefundPolicyPage;
