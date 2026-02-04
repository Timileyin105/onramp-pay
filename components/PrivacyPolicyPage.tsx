import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
      return (
            <div className="min-h-screen bg-slate-50 py-12 px-6">
                  <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-12">
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 text-center">
                                    Privacy Policy
                              </h1>

                              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
                                    <h2 className="text-xl font-bold text-blue-900 mb-3">📋 Policy Overview</h2>
                                    <p className="text-blue-800 text-sm leading-relaxed">
                                          Onramp Pay is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.
                                    </p>
                              </div>

                              <div className="prose prose-slate max-w-none space-y-8">
                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Information We Collect</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                We collect different information depending on how you interact with our Platform.
                                          </p>

                                          <h3 className="text-xl font-semibold text-slate-800 mb-3">For Plugin Purchases</h3>
                                          <p className="text-slate-700 leading-relaxed mb-3">
                                                When you purchase a WooCommerce, PrestaShop, or OpenCart plugin, we collect:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mb-4">
                                                <li><strong>Full Name</strong> - For customer identification and license delivery</li>
                                                <li><strong>Email Address</strong> - For account communication and plugin delivery</li>
                                          </ul>

                                          <h3 className="text-xl font-semibold text-slate-800 mb-3">For Payment Link Generation</h3>
                                          <p className="text-slate-700 leading-relaxed mb-3">
                                                When you create a payment link through our payment link generator, we collect:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                                                <li><strong>Email Address</strong> - Temporarily to send payment notifications</li>
                                                <li><strong>Cryptocurrency Wallet Address</strong> - To process and forward crypto payments</li>
                                          </ul>
                                          <p className="text-slate-700 leading-relaxed mt-3 text-sm italic">
                                                Note: Payment link data is not retained after transaction completion.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                We use collected information only for specific, legitimate purposes:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                                                <li>Delivering purchased plugins and license keys</li>
                                                <li>Processing payments through third-party providers</li>
                                                <li>Sending transaction confirmations and payment notifications</li>
                                                <li>Maintaining audit trails and legal compliance records</li>
                                                <li>Responding to customer inquiries and support requests</li>
                                          </ul>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Third-Party Information Sharing</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                We share your information with third-party payment service providers to process transactions. Specifically:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mb-4">
                                                <li><strong>Email Address</strong> - Shared with payment processors for transaction notifications</li>
                                                <li><strong>Cryptocurrency Wallet Address</strong> - Shared with payment processors to complete crypto transfers</li>
                                          </ul>
                                          <p className="text-slate-700 leading-relaxed">
                                                These third-party providers are contractually obligated to maintain confidentiality and use your information solely for payment processing purposes. We do not share your information with any other third parties for marketing, analytics, or any other purposes.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                Our data retention practices vary based on the type of transaction:
                                          </p>

                                          <h3 className="text-xl font-semibold text-slate-800 mb-3">Plugin Purchases</h3>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                For users who purchase plugins, we retain your name and email address permanently. This retention is necessary for:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                                                <li>License verification and anti-fraud purposes</li>
                                                <li>Legal and regulatory compliance</li>
                                                <li>Support and account management</li>
                                                <li>Audit trail maintenance</li>
                                          </ul>

                                          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Payment Link Transactions</h3>
                                          <p className="text-slate-700 leading-relaxed">
                                                For payment link generator users, we do not retain your information. Your email and wallet address are used temporarily for transaction processing only and are not stored in our systems after payment completion.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights and Choices</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                If you have purchased a plugin from us, you have the following rights:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mb-4">
                                                <li><strong>Right to Access</strong> - Request a copy of the personal data we hold about you</li>
                                                <li><strong>Right to Deletion</strong> - Request deletion of your account and associated data (subject to legal retention requirements)</li>
                                                <li><strong>Right to Correction</strong> - Request updates or corrections to inaccurate information</li>
                                          </ul>
                                          <p className="text-slate-700 leading-relaxed">
                                                To exercise any of these rights, please contact us with your request. Note that some data may be retained for legal or audit purposes even after deletion requests, and we will inform you of any such exceptions.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies and Tracking</h2>
                                          <p className="text-slate-700 leading-relaxed">
                                                Onramp Pay does not use cookies, tracking pixels, analytics tools, or any other tracking technologies on our website. We do not track user behavior, collect analytics data, or engage in online tracking. Your browsing activity on our site is completely private.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security Measures</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                                          </p>
                                          <p className="text-slate-700 leading-relaxed">
                                                Payment processing is handled by licensed third-party payment providers that maintain their own security standards and encryption protocols.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Children's Privacy</h2>
                                          <p className="text-slate-700 leading-relaxed">
                                                Our services are not directed to users under 18 years of age. We do not knowingly collect personal information from minors. If we become aware that we have collected information from someone under 18, we will take steps to delete such information promptly.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Third-Party Links</h2>
                                          <p className="text-slate-700 leading-relaxed">
                                                Our website may contain links to external websites and services. This privacy policy applies only to Onramp Pay. We are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any external services before providing your information.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Policy Updates</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                Onramp Pay may update this Privacy Policy periodically to reflect changes in our practices, technology, or applicable laws. We will notify users of significant changes via email or by posting an updated policy on this page.
                                          </p>
                                          <p className="text-slate-700 leading-relaxed">
                                                Your continued use of our Platform following any policy updates constitutes your acceptance of the revised Privacy Policy.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us through our support channels.
                                          </p>
                                          <p className="text-slate-700 leading-relaxed">
                                                We are committed to addressing your privacy concerns and will respond to inquiries in a timely manner.
                                          </p>
                                    </section>
                              </div>

                              <div className="mt-12 pt-8 border-t border-slate-200">
                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                          <h3 className="text-lg font-bold text-slate-900 mb-3">Key Takeaways</h3>
                                          <ul className="space-y-3 text-slate-700 text-sm">
                                                <li className="flex gap-3">
                                                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                      <span><strong>No tracking:</strong> We don't use cookies, analytics, or tracking technologies</span>
                                                </li>
                                                <li className="flex gap-3">
                                                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                      <span><strong>Limited collection:</strong> We only collect what's necessary for transactions</span>
                                                </li>
                                                <li className="flex gap-3">
                                                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                      <span><strong>No payment link storage:</strong> Payment link data is temporary, not retained</span>
                                                </li>
                                                <li className="flex gap-3">
                                                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                      <span><strong>User rights:</strong> Plugin purchasers can request, access, or delete their data</span>
                                                </li>
                                          </ul>
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

export default PrivacyPolicyPage;
