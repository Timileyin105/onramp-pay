import React from 'react';
import Link from 'next/link';

export const metadata = {
      title: 'Legal Enquiries | Onramp Pay',
      description: 'Compliance notice for Onramp Pay software integrations and third-party service connectivity.',
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
      <section className="space-y-3 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <div className="text-sm md:text-base text-slate-200 leading-relaxed space-y-2">{children}</div>
      </section>
);

const LegalEnquiriesPage: React.FC = () => {
      return (
            <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-12 px-6">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/20 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  <div className="relative max-w-4xl mx-auto space-y-8">
                        <div className="space-y-3 text-center">
                              <p className="text-xs font-bold text-cyan-200 uppercase tracking-[0.24em]">Legal Enquiries</p>
                              <h1 className="text-4xl md:text-5xl font-extrabold text-white">Compliance Notice</h1>
                              <p className="text-base md:text-lg text-slate-200/85 max-w-3xl mx-auto">
                                    Onramp Pay provides software integrations only. We do not process payments, hold funds, or perform regulated financial services. All transactions occur with independent, licensed third parties.
                              </p>
                        </div>

                        <Section title="Nature of Services">
                              <p>Onramp Pay is a software company offering API integrations, plugins, and modules that connect merchants to independent third-party providers. Onramp Pay does not act as a payment processor, bank, money transmitter, custodian, exchange, or financial intermediary.</p>
                              <p>All financial transactions are executed solely by third-party providers operating under their own licenses, compliance frameworks, and risk controls. Onramp Pay does not authorize, settle, clear, hold, route, or reverse funds, and does not manage chargebacks, disputes, or transaction approvals.</p>
                        </Section>

                        <Section title="Scope of Cryptocurrency Connectivity">
                              <p>Where cryptocurrency is supported, transactions occur on decentralized blockchain networks that are not owned or controlled by Onramp Pay.</p>
                              <ul className="list-disc list-inside space-y-1 text-slate-200/90">
                                    <li>We do not control blockchain networks or validate transactions.</li>
                                    <li>We do not hold private keys, provide wallet custody, or freeze, reverse, or recover crypto transfers.</li>
                                    <li>All wallet, exchange, custody, and payout services are delivered by independent third-party providers.</li>
                                    <li>Confirmed blockchain transactions are irreversible; Onramp Pay has no authority to alter them.</li>
                              </ul>
                        </Section>

                        <Section title="Data, Records, and Law Enforcement Requests">
                              <p>Onramp Pay does not possess customer funds, transaction settlement controls, or KYC/AML documentation maintained by payment processors. We do not store transaction logs, payment records, blockchain records, or API request logs related to financial processing.</p>
                              <p>Requests regarding freezes, fund seizure or recovery, disputes, chargebacks, compliance documents, or reversals must be directed to the licensed payment or crypto service provider that executed the transaction.</p>
                              <p>Formal legal requests to Onramp Pay must include proper legal authority, jurisdictional basis, and supporting documentation. Informal or improperly served requests will not be processed.</p>
                        </Section>

                        <Section title="Merchant Responsibilities">
                              <p>Merchants using Onramp Pay software are solely responsible for complying with all applicable laws, regulations, licensing, tax obligations, consumer protection standards, and AML requirements in their jurisdictions. Onramp Pay assumes no responsibility and accepts no liability for the business practices, compliance posture, or activities of its users.</p>
                        </Section>

                        <Section title="Third-Party Provider Responsibilities">
                              <p>Onramp Pay offers neutral connectivity between systems and does not supervise or manage merchant activities. If a third-party provider determines a merchant violates its policies or terms, it is that provider's responsibility to revoke credentials or restrict access. Onramp Pay has no authority and no obligation to enforce another provider's policies absent a valid, binding legal order.</p>
                              <p>There is no general prohibition on directing traffic or API requests to publicly accessible endpoints. Providers must implement and enforce their own access controls, authentication, encryption, firewalls, and security. Onramp Pay is not liable for a provider's failure to secure its systems or enforce its own compliance controls.</p>
                        </Section>

                        <div className="text-center text-sm text-slate-300 space-y-2">
                              <p>For formal legal enquiries, contact our team with jurisdictional basis and supporting documents.</p>
                              <p>
                                    Visit <a href="https://onramp-pay.com" className="text-cyan-200 hover:text-white font-semibold" target="_blank" rel="noopener noreferrer">onramp-pay.com</a> for product information.
                              </p>
                              <p>
                                    <Link href="/contact" className="text-cyan-200 hover:text-white font-semibold">Contact Support</Link>
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default LegalEnquiriesPage;
