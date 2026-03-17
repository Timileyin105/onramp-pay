import React from 'react';
import Link from 'next/link';

export const metadata = {
      title: 'Prohibited Businesses | Onramp Pay',
      description: 'List of prohibited business activities for using Onramp Pay gateway and APIs.',
};

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <li className="flex gap-2 items-start text-slate-200 text-sm md:text-base leading-relaxed">
            <span className="mt-0.5 text-red-400">❌</span>
            <span>{children}</span>
      </li>
);

const ProhibitedBusinessesPage: React.FC = () => {
      return (
            <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-12 px-6">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/20 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  <div className="relative max-w-4xl mx-auto space-y-8">
                        <div className="space-y-3 text-center">
                              <p className="text-xs font-bold text-cyan-200 uppercase tracking-[0.24em]">Prohibited Business List</p>
                              <h1 className="text-4xl md:text-5xl font-extrabold text-white">Gateway Access Policy</h1>
                              <p className="text-base md:text-lg text-slate-200/85 max-w-3xl mx-auto">
                                    Any merchant can use our gateway, but illegal or abusive activities are blocked at our sole discretion.
                              </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] space-y-4">
                              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                                    The following businesses are strictly prohibited from using our gateway and will be denied access without notice:
                              </p>
                              <ul className="space-y-2">
                                    <Bullet>Fake shops or scammers that fail to deliver goods/services after payment.</Bullet>
                                    <Bullet>Intoxicating substances affecting consciousness (liquor, alcohol, narcotic medications, and recreational plants/herbs).</Bullet>
                                    <Bullet>Adult or pornographic material, including nudity or sexual content.</Bullet>
                                    <Bullet>Casino, gambling, and betting activities.</Bullet>
                                    <Bullet>Any activity commonly categorized as criminal or dark web.</Bullet>
                                    <Bullet>Merchants receiving complaints from customers, providers, or law enforcement about their activities.</Bullet>
                              </ul>
                              <div className="bg-amber-500/10 border border-amber-400/40 text-amber-100 rounded-2xl p-4 text-sm md:text-base">
                                    ⚠️ Warning: Do not embed checkout pages in iframes. Customers must be redirected directly to the licensed payment provider.
                              </div>
                        </div>

                        <div className="text-center text-sm text-slate-300 space-y-2">
                              <p>Questions about acceptable use? Contact our team.</p>
                              <p>
                                    <Link href="/legal-enquiries" className="text-cyan-200 hover:text-white font-semibold">Legal Enquiries</Link>
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default ProhibitedBusinessesPage;
