import Link from 'next/link';

const prohibitedCountries = [
      'Afghanistan',
      'Albania',
      'Belarus',
      'Bosnia',
      'Bosnia and Herzegovina',
      'Burma',
      'Myanmar',
      'Central African Republic',
      'Croatia',
      'Democratic Republic of Congo',
      'Cuba',
      'Ethiopia',
      'Iran',
      'Islamic Republic of Iran',
      'Iraq',
      'North Korea',
      'Democratic Peoples Republic of Korea',
      'Lebanon',
      'Libya',
      'Mali',
      'Nicaragua',
      'Palestine',
      'Russia',
      'Russian Federation',
      'Saudi Arabia',
      'Serbia',
      'Somalia',
      'South Sudan',
      'Sudan',
      'Syrian Arab Republic',
      'Syria',
      'Turkey',
      'Ukraine',
      'Venezuela',
      'Yemen',
      'Zimbabwe',
];

const VirtualCardPoliciesPage: React.FC = () => {
      const cardClass = "bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]";
      const pill = "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100";

      return (
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-16 px-6">
                  <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/25 to-pink-500/20 blur-3xl" />
                        <div className="absolute -bottom-48 -right-24 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-indigo-500/25 blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.1),transparent_35%)]" />
                  </div>

                  <div className="relative max-w-5xl mx-auto space-y-12">
                        <header className="text-center space-y-4">
                              <div className={pill}>
                                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                                    Card Info & Restrictions
                              </div>
                              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                    <span className="bg-gradient-to-r from-cyan-200 via-indigo-200 to-pink-200 bg-clip-text text-transparent">Virtual Card Policies</span>
                              </h1>
                              <p className="text-lg text-slate-200/85 max-w-3xl mx-auto">
                                    Know the rules before funding and redeeming your no-KYC virtual card. Review usage guidance, country restrictions, and common decline reasons to avoid interruptions.
                              </p>
                        </header>

                        <section className={`p-8 ${cardClass} space-y-6`}>
                              <h2 className="text-2xl font-bold text-white">Key information</h2>
                              <ul className="space-y-3 text-sm text-slate-200/90">
                                    <li className="flex gap-3">
                                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                                          <span>Cards are available without KYC. Activation may still require a name, email, phone, and address.</span>
                                    </li>
                                    <li className="flex gap-3">
                                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                                          <span>VPN/proxy usage is not accepted by issuers and can trigger cancellation without refund.</span>
                                    </li>
                                    <li className="flex gap-3">
                                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                                          <span>3D Secure (3DS) is not supported; some merchants may refuse prepaid virtual cards.</span>
                                    </li>
                                    <li className="flex gap-3">
                                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                                          <span>Save your redeem ID immediately; it is required for status checks and card redemption.</span>
                                    </li>
                              </ul>
                        </section>

                        <section className={`p-8 ${cardClass} space-y-5`}>
                              <h2 className="text-2xl font-bold text-white">Availability & timing</h2>
                              <p className="text-sm text-slate-200/85">
                                    Cards are usually redeemable a few minutes after payment confirmation. During supply constraints or high demand, availability can take up to 48 hours.
                              </p>
                              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200/90">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                                          <h3 className="font-semibold text-white">Faster approvals</h3>
                                          <ul className="space-y-1 list-disc list-inside text-slate-200/85">
                                                <li>Use consistent billing details and IP geolocation</li>
                                                <li>Limit retries after a decline to avoid issuer risk flags</li>
                                                <li>Keep a valid email for delivery of the redeem ID</li>
                                          </ul>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                                          <h3 className="font-semibold text-white">If delayed</h3>
                                          <ul className="space-y-1 list-disc list-inside text-slate-200/85">
                                                <li>Wait for the confirmation email before re-purchasing</li>
                                                <li>Check spam for the redeem ID</li>
                                                <li>Contact support with payment proof if 48h passes</li>
                                          </ul>
                                    </div>
                              </div>
                        </section>

                        <section className={`p-8 ${cardClass} space-y-5`}>
                              <div className="flex items-center gap-3">
                                    <span className="text-xl">⚠️</span>
                                    <h2 className="text-2xl font-bold text-white">Prohibited or high-risk uses</h2>
                              </div>
                              <p className="text-sm text-slate-200/85">
                                    Transactions in these categories are blocked or may be reversed by issuers and payment partners.
                              </p>
                              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
                                    {[
                                          'Gambling, betting, or lottery services',
                                          'Adult content or escort services',
                                          'Cash advances, ATM withdrawals, or money-mover apps',
                                          'Crypto buys on platforms that forbid prepaid cards',
                                          'Gift card arbitrage or high-ticket reselling',
                                          'Donations/charity platforms that block prepaid instruments',
                                    ].map((item) => (
                                          <div key={item} className="flex gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                                                <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                                                <span>{item}</span>
                                          </div>
                                    ))}
                              </div>
                        </section>

                        <section className={`p-8 ${cardClass} space-y-5`}>
                              <h2 className="text-2xl font-bold text-white">Country restrictions</h2>
                              <p className="text-sm text-slate-200/85">
                                    Orders, activation, or usage routed through the countries below are not supported and may be canceled without refund. Access via VPN/proxy can trigger automatic declines.
                              </p>
                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {prohibitedCountries.map((country) => (
                                          <div key={country} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100">
                                                {country}
                                          </div>
                                    ))}
                              </div>
                        </section>

                        <section className={`p-8 ${cardClass} space-y-5`}>
                              <h2 className="text-2xl font-bold text-white">Refunds, chargebacks, and reversals</h2>
                              <ul className="space-y-3 text-sm text-slate-200/90">
                                    <li className="flex gap-3">
                                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                                          <span>Card loads are final once processed; issuer reversals can take 5-10 business days to appear.</span>
                                    </li>
                                    <li className="flex gap-3">
                                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                                          <span>Chargebacks are not supported for prepaid virtual cards; dispute the merchant directly if goods/services are not delivered.</span>
                                    </li>
                                    <li className="flex gap-3">
                                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                                          <span>Suspected fraud, abuse, or policy violations can trigger immediate card closure without refund.</span>
                                    </li>
                              </ul>
                        </section>

                        <section className={`p-8 ${cardClass} space-y-4`}>
                              <h2 className="text-2xl font-bold text-white">Support</h2>
                              <p className="text-sm text-slate-200/85">
                                    Have an issue with a redeem ID or a decline? Collect screenshots, the redeem ID, and merchant name before contacting support. This helps the issuer investigate faster.
                              </p>
                              <div className="flex flex-wrap gap-3 text-sm">
                                    <a href="mailto:support@onramp-pay.com" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 text-white font-semibold shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400 transition-all">
                                          Email Support
                                    </a>
                                    <Link href="/payment-generator" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all">
                                          Create Payment Link
                                    </Link>
                                    <Link href="/track-payment" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all">
                                          Track Redeem Status
                                    </Link>
                              </div>
                        </section>
                  </div>
            </div>
      );
};

export default VirtualCardPoliciesPage;
