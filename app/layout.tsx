

import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
      title: 'Onramp Pay – Card-to-Crypto Payments, Crypto Cards, Exchange & WooCommerce Plugin',
      description:
            'Onramp Pay lets merchants create card-to-crypto payments, issue crypto cards, exchange crypto, generate invoicing links, and accept fiat-to-crypto checkout across 20+ providers. Supports WooCommerce plugin integration and direct merchant/freelancer checkout on our site.',
      keywords:
            'Onramp Pay, onramp-pay, onramp, WooCommerce crypto plugin, card to crypto, crypto cards, crypto exchange, fiat to crypto, buy crypto with card, crypto payments, crypto payment links, prepaid crypto card, stablecoin payouts, onramp payments, digital asset checkout, merchant crypto payments, freelancer crypto checkout',
      robots: 'index, follow',
      openGraph: {
            title: 'Onramp Pay – Card-to-Crypto Payments, Crypto Cards & Exchange',
            description:
                  'Create card-to-crypto payments, issue crypto cards, exchange digital assets, and generate crypto payment links with Onramp Pay. Supports WooCommerce plugin installs and direct merchant/freelancer use. Onramp Pay helps merchants and freelancers accept fiat-to-crypto checkout on their sites.',
            type: 'website',
            url: 'https://onramp-pay.com',
            siteName: 'Onramp Pay',
            images: [
                  {
                        url: 'https://onramp-pay.com/assets/images/onramp-pay.png?v=1',
                        width: 1200,
                        height: 630,
                        alt: 'Onramp Pay Card-to-Crypto Platform',
                  },
            ],
      },
      twitter: {
            card: 'summary_large_image',
            title: 'Onramp Pay – Card-to-Crypto Payments, Crypto Cards & Exchange',
            description:
                  'Create card-to-crypto payments, issue crypto cards, exchange crypto, and generate payment links with Onramp Pay. Supports WooCommerce plugin installs and direct merchant/freelancer use. Onramp Pay helps merchants and freelancers accept fiat-to-crypto checkout on their sites.',
            images: ['https://onramp-pay.com/assets/images/onramp-pay.png?v=1'],
      },
};

export default function RootLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <html lang="en">
                  <head>
                        {/* Google tag (gtag.js) */}
                        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18104808579"></script>
                        <script>
                              {`
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', 'AW-18104808579');
                              `}
                        </script>
                        <link rel="icon" href="/assets/images/onramp-pay-white.png" type="image/png" />
                        <meta name="theme-color" content="#4f46e5" />
                        <meta name="application-name" content="Onramp Pay Link Generator" />
                        <meta name="apple-mobile-web-app-title" content="Onramp Pay" />
                        <meta name="format-detection" content="telephone=no" />
                        <link
                              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                              rel="stylesheet"
                        />
                        <script
                              type="application/ld+json"
                              dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                          '@context': 'https://schema.org',
                                          '@type': 'SoftwareApplication',
                                          name: 'Onramp Pay – Card-to-Crypto Payments, Crypto Cards & Crypto Exchange Platform',
                                          description:
                                                'Onramp Pay enables merchants to create card-to-crypto payments, mint crypto cards, exchange digital assets, and generate payment links with 20+ providers. Supports WooCommerce plugin integration as well as direct merchant and freelancer checkout workflows.',
                                          url: 'https://onramp-pay.com',
                                          applicationCategory: 'BusinessApplication',
                                          operatingSystem: 'Web',
                                          offers: {
                                                '@type': 'Offer',
                                                price: '0',
                                                priceCurrency: 'USD',
                                                availability: 'https://schema.org/InStock',
                                                priceValidUntil: '2026-12-31',
                                          },
                                          featureList: [
                                                '20+ payment providers',
                                                'Card-to-crypto checkout',
                                                'Instant USDC payouts',
                                                'No KYC required for sellers',
                                                'Zero chargebacks',
                                                'WooCommerce plugin support and direct checkout on our site',
                                                'Lifetime updates',
                                                'Free plugin download',
                                          ],
                                          aggregateRating: {
                                                '@type': 'AggregateRating',
                                                ratingValue: '4.8',
                                                ratingCount: '127',
                                          },
                                    }),
                              }}
                        />
                        <script
                              type="application/ld+json"
                              dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                          '@context': 'https://schema.org',
                                          '@type': 'WebSite',
                                          name: 'Onramp Pay',
                                          url: 'https://onramp-pay.com',
                                          description:
                                                'Onramp Pay is a card-to-crypto platform for merchants, freelancers, and WooCommerce sites. Create payment links, issue crypto cards, exchange assets, and accept fiat-to-crypto checkout.',
                                          potentialAction: {
                                                '@type': 'SearchAction',
                                                target: 'https://onramp-pay.com/?q={search_term_string}',
                                                'query-input': 'required name=search_term_string',
                                          },
                                    }),
                              }}
                        />
                  </head>
                  <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
                        <Header />
                        <main className="flex-grow">
                              {children}
                        </main>
                        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
                              <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-slate-200">
                                          <div className="space-y-3">
                                                <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-100">Product</h4>
                                                <div className="flex flex-col gap-2 text-sm">
                                                      <Link href="/payment-generator" className="hover:text-white transition-colors">Payment Generator</Link>
                                                      <Link href="/crypto-payment" className="hover:text-white transition-colors">Crypto Payment</Link>
                                                      <Link href="/no-kyc-virtual-credit-card" className="hover:text-white transition-colors">No KYC Cards</Link>
                                                      <Link href="/track-payment" className="hover:text-white transition-colors">Track Payment</Link>
                                                      <Link href="/minimum-amounts" className="hover:text-white transition-colors">Status & Limits</Link>
                                                </div>
                                          </div>

                                          <div className="space-y-3">
                                                <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-100">Company</h4>
                                                <div className="flex flex-col gap-2 text-sm">
                                                      <a href="/assets/plugins/woocommerce/onrampay-instant-payment-gateway.zip" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WooCommerce Plugin</a>
                                                      <a href='#' className="hover:text-white transition-colors cursor-pointer">PrestaShop Plugin</a>
                                                      <a href='#' className="hover:text-white transition-colors cursor-pointer">OpenCart Plugin</a>
                                                      <a href="https://documenter.getpostman.com/view/14826208/2sBXcHiz2s" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">API Documentation</a>
                                                      <a href="mailto:support@onramp-pay.com" className="hover:text-white transition-colors">Contact Support</a>
                                                      <a href="mailto:support@onramp-pay.com" className="hover:text-white transition-colors">support@onramp-pay.com</a>
                                                </div>
                                          </div>

                                          <div className="space-y-3">
                                                <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-100">Legal</h4>
                                                <div className="flex flex-col gap-2 text-sm">
                                                      <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                                                      <Link href="/legal-enquiries" className="hover:text-white transition-colors">Legal Enquiries</Link>
                                                      <Link href="/prohibited-businesses" className="hover:text-white transition-colors">Prohibited Businesses</Link>
                                                      <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
                                                      <Link href="/virtual-card-policies" className="hover:text-white transition-colors">Card Info & Restrictions</Link>
                                                </div>
                                          </div>

                                          <div className="space-y-3">
                                                <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-100">Resources</h4>
                                                <div className="flex flex-col gap-2 text-sm">
                                                      <Link href="/minimum-amounts" className="hover:text-white transition-colors">Minimum Amounts</Link>
                                                      <Link href="/track-payment" className="hover:text-white transition-colors">Redeem Status</Link>
                                                      <Link href="/crypto-payment" className="hover:text-white transition-colors">Crypto QR Checkout</Link>
                                                      <Link href="/payment-generator" className="hover:text-white transition-colors">Invoice Links</Link>
                                                      <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Legal Disclaimer */}
                                    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8">
                                          <div className="flex items-start gap-3 mb-4">
                                                <span className="text-yellow-500 text-xl flex-shrink-0">⚠️</span>
                                                <h3 className="text-sm font-bold text-yellow-500 uppercase tracking-wider">Important Legal Notice</h3>
                                          </div>
                                          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                                                Onramp Pay operates independently and has no affiliation with Visa, Mastercard, PayPal, or other brands mentioned on this site. All brand names and logos belong to their respective trademark holders and are used solely for descriptive purposes. Our platform provides software solutions only—we do not process payments or handle money directly. All transactions are processed by licensed third-party payment providers and cryptocurrency services. <span className="text-yellow-400 font-semibold">We offer technical integration tools, not financial services.</span> Users accept all responsibility and liability when using our software. By accessing this website, you acknowledge that you've read our Terms of Use and agree to use our services at your own discretion and risk.
                                          </p>
                                    </div>

                                    {/* Copyright */}
                                    <div className="text-center pt-6 border-t border-slate-700 space-y-2">
                                          <p className="text-sm text-slate-400">
                                                Copyright © 2026 Onramp Pay. All Rights Reserved.
                                          </p>
                                          <p className="text-sm text-slate-400">
                                                A product of <a href="https://exquisitedev.com" className="text-cyan-200 hover:text-white font-semibold" target="_blank" rel="noopener noreferrer">ExquisiteDev Technologies</a>.
                                          </p>
                                    </div>
                              </div>
                        </footer>
                  </body>
            </html>
      );
}
