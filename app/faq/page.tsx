import React from 'react';

export const metadata = {
      title: 'FAQ | Onramp Pay',
      description: 'Frequently asked questions about Onramp Pay onboarding, payouts, and supported payment methods.',
};

const QnA: React.FC<{ q: string; a: React.ReactNode }> = ({ q, a }) => (
      <div className="group space-y-3 bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] break-words transition hover:border-cyan-400/50 hover:shadow-[0_25px_80px_rgba(34,211,238,0.2)]">
            <h3 className="text-lg font-bold text-white break-words flex items-start gap-2">
                  <span className="text-cyan-200 mt-0.5">•</span>
                  <span>{q}</span>
            </h3>
            <div className="text-sm md:text-base text-slate-200 leading-relaxed space-y-1 break-words">{a}</div>
      </div>
);

const faqs: { q: string; a: React.ReactNode }[] = [
      {
            q: 'What services do you offer?',
            a: <p>We are a software company providing payment solutions for all kinds of online businesses, including high-risk models. You can accept Visa, Mastercard, American Express, Maestro, Apple Pay, Google Pay, SEPA, and local bank transfers, with instant USDC (Polygon/MATIC) payouts.</p>,
      },
      {
            q: 'What information or documents are needed?',
            a: <p>No information or documents are required to start. You can accept credit card payments instantly without KYC from us.</p>,
      },
      {
            q: 'What payment methods do you accept?',
            a: <p>Credit/debit cards (Visa, Mastercard, Maestro, American Express), Apple Pay, Google Pay, SEPA bank transfers, and selected local bank transfer options.</p>,
      },
      {
            q: 'Do you accept high-risk businesses?',
            a: <p>Yes. The platform is built for high-risk merchant accounts and provides instant approval.</p>,
      },
      {
            q: 'What fees do you charge?',
            a: <p>Fees vary by provider and order amount. Our share is under 1%; the rest is set by the provider. All fees are shown clearly at checkout, and you can choose to pass them to customers or absorb them.</p>,
      },
      {
            q: 'Is there a minimum order amount?',
            a: <p>Yes. Minimums typically range from $1 to $30 depending on the payment provider.</p>,
      },
      {
            q: 'Do you accept payments worldwide?',
            a: <p>Any merchant worldwide can use the service. Customer acceptance depends on each provider’s restricted countries list.</p>,
      },
      {
            q: 'How quickly are payouts processed?',
            a: <p>Payouts are instant to your USDC (Polygon) wallet after each successful order.</p>,
      },
      {
            q: 'Can my payouts be held for 180 days?',
            a: <p>No. We do not control payouts or handle processing; funds go instantly and automatically to your wallet once paid.</p>,
      },
      {
            q: 'Is there a rolling reserve?',
            a: <p>No. Payouts are instant and in full—there is no rolling reserve.</p>,
      },
      {
            q: 'What if a customer disputes or makes a chargeback?',
            a: <p>Licensed payment providers handle all chargebacks. Payments are final, and your USDC payouts are instant and irreversible.</p>,
      },
      {
            q: 'Can you ban me from using the payment gateway?',
            a: <p>The gateway is open and anonymous for merchants, but abuse or prohibited activities can lead to blocking. Review the Prohibited Businesses list.</p>,
      },
      {
            q: 'Is customer verification required?',
            a: <p>Customers may be asked for quick ID verification (KYC) during checkout; smaller orders may bypass it depending on the provider.</p>,
      },
      {
            q: 'Can I use this with unlimited websites?',
            a: <p>Yes. You can use the gateway on unlimited websites instantly.</p>,
      },
];

const FaqPage: React.FC = () => (
      <div className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-14 px-6 md:px-10 break-words">

            <div className="relative max-w-6xl mx-auto space-y-10">
                  <div className="space-y-4 text-center">
                        <p className="text-xs font-bold text-cyan-200 uppercase tracking-[0.24em]">FAQ</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Frequently Asked Questions</h1>
                        <p className="text-base md:text-lg text-slate-200/85 max-w-3xl mx-auto">
                              Quick answers about setup, payouts, supported methods, and policies for using Onramp Pay.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em]">
                              <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-200 border border-cyan-400/30">Instant Approval</span>
                              <span className="px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-100 border border-indigo-400/30">No Docs Needed</span>
                              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-100 border border-emerald-400/30">Worldwide Merchants</span>
                        </div>
                  </div>

                  <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
                        {faqs.map((item) => (
                              <QnA key={item.q} q={item.q} a={item.a} />
                        ))}
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-center space-y-2 break-words">
                        <h3 className="text-lg font-bold text-white">Need more help?</h3>
                        <p className="text-sm md:text-base text-slate-200">
                              Email us at <a href="mailto:support@onramp-pay.com" className="text-cyan-200 hover:text-white font-semibold">support@onramp-pay.com</a> and we will reply quickly.
                        </p>
                  </div>
            </div>
      </div>
);

export default FaqPage;
