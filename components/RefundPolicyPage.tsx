import React from 'react';
import Link from 'next/link';

const RefundPolicyPage: React.FC = () => {
      return (
            <div className="min-h-screen bg-slate-50 py-12 px-6">
                  <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-12">
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 text-center">
                                    Refund Policy
                              </h1>

                              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
                                    <h2 className="text-xl font-bold text-blue-900 mb-3">ℹ️ Important Notice</h2>
                                    <p className="text-blue-800 text-sm leading-relaxed">
                                          All plugin sales are final. We encourage you to test our payment link generator before purchasing to ensure our service meets your needs.
                                    </p>
                              </div>

                              <div className="prose prose-slate max-w-none space-y-8">
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
