import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
      return (
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-12 px-6">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/25 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-indigo-500/25 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  <div className="relative max-w-4xl mx-auto">
                        <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-8 md:p-12 text-slate-100 [&_.text-slate-700]:text-slate-200 [&_.text-slate-900]:text-white [&_.text-slate-800]:text-slate-100 [&_.text-slate-600]:text-slate-300 [&_.text-slate-500]:text-slate-300 [&_.text-blue-900]:text-white [&_.text-blue-800]:text-cyan-100 [&_.text-yellow-900]:text-amber-100">
                              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                                    <span className="bg-gradient-to-r from-cyan-200 via-indigo-200 to-pink-200 bg-clip-text text-transparent">Privacy Policy</span>
                              </h1>

                              <div className="bg-white/5 border border-white/10 p-6 mb-8 rounded-2xl">
                                    <h2 className="text-xl font-bold text-white mb-3">📋 Policy Overview</h2>
                                    <p className="text-slate-200 text-sm leading-relaxed">
                                          Onramp Pay is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.
                                    </p>
                              </div>

                              <div className="prose prose-invert max-w-none space-y-8">
                                    <section>
                                          <h2 className="text-2xl font-bold">1. What Information We Collect</h2>
                                          <p className="leading-relaxed mb-4 text-slate-200">
                                                We collect different information depending on how you interact with our Platform.
                                          </p>

                                          <h3 className="text-xl font-semibold mb-3 text-slate-100">For Plugin Purchases</h3>
                                          <p className="leading-relaxed mb-3 text-slate-200">
                                                When you purchase a WooCommerce, PrestaShop, or OpenCart plugin, we collect:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-200 space-y-2 ml-4 mb-4">
                                                <li><strong>Full Name</strong> - For customer identification and license delivery</li>
                                                <li><strong>Email Address</strong> - For account communication and plugin delivery</li>
                                          </ul>

                                          <h3 className="text-xl font-semibold mb-3 text-slate-100">For Payment Link Generation</h3>
                                          <p className="leading-relaxed mb-3 text-slate-200">
                                                When you create a payment link through our payment link generator, we collect:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-200 space-y-2 ml-4">
                                                <li><strong>Email Address</strong> - Temporarily to send payment notifications</li>
                                                <li><strong>Cryptocurrency Wallet Address</strong> - To process and forward crypto payments</li>
                                          </ul>
                                          <p className="leading-relaxed mt-3 text-sm italic text-slate-300">
                                                Note: Payment link data is not retained after transaction completion.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
                                          <p className="leading-relaxed mb-4 text-slate-200">
                                                We use collected information only for specific, legitimate purposes:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-200 space-y-2 ml-4">
                                                <li>Delivering purchased plugins and license keys</li>
                                                <li>Processing payments through third-party providers</li>
                                                <li>Sending transaction confirmations and payment notifications</li>
                                                <li>Maintaining audit trails and legal compliance records</li>
                                                <li>Responding to customer inquiries and support requests</li>
                                          </ul>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold">3. Third-Party Information Sharing</h2>
                                          <p className="leading-relaxed mb-4 text-slate-200">
                                                We share your information with third-party payment service providers to process transactions. Specifically:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-200 space-y-2 ml-4 mb-4">
                                                <li><strong>Email Address</strong> - Shared with payment processors for transaction notifications</li>
                                                <li><strong>Cryptocurrency Wallet Address</strong> - Shared with payment processors to complete crypto transfers</li>
                                          </ul>
                                          <p className="leading-relaxed text-slate-200">
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

                              <div className="mt-12 pt-8 border-t border-white/10">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                                          <div className="flex items-start justify-between gap-4 mb-4">
                                                <div>
                                                      <h3 className="text-lg md:text-xl font-bold text-white">Key Takeaways</h3>
                                                      <p className="text-sm text-slate-300">The fastest things to know about how we handle your data.</p>
                                                </div>
                                                <span className="px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-100 text-[11px] font-semibold border border-emerald-400/30">Privacy-first</span>
                                          </div>

                                          <div className="grid md:grid-cols-2 gap-3">
                                                {[
                                                      { title: 'No tracking', desc: 'No cookies, analytics, or pixels on this site.' },
                                                      { title: 'Minimal collection', desc: 'Only fields needed to process a transaction.' },
                                                      { title: 'No payment-link storage', desc: 'Emails and wallet addresses for link flows are discarded after completion.' },
                                                      { title: 'Plugin data kept for licensing', desc: 'Name/email retained only to deliver and verify your plugin license.' },
                                                      { title: 'Security-first processors', desc: 'Payments handled by licensed providers with their own encryption.' },
                                                ].map((item) => (
                                                      <div key={item.title} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-100">
                                                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                  </svg>
                                                            </span>
                                                            <div className="space-y-1">
                                                                  <p className="text-sm font-semibold text-white">{item.title}</p>
                                                                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
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
