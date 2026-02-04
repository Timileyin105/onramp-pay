import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
      title: 'Onramp Pay - WooCommerce Crypto Payment Plugin',
      description:
            'Accept crypto payments on WooCommerce. Premium payment plugin for card-to-crypto checkout with 20+ providers. Free payment link generator included.',
      keywords:
            'WooCommerce crypto payment, woocommerce bitcoin, card to crypto, buy crypto with card, crypto payments, onramp, fiat to crypto, crypto checkout, payment links, crypto onramp, woocommerce payment gateway',
      robots: 'index, follow',
      openGraph: {
            title: 'Onramp Pay - WooCommerce Crypto Payment Plugin',
            description:
                  'Accept crypto payments on WooCommerce with 20+ payment providers. Premium plugin with card-to-crypto checkout.',
            type: 'website',
            url: 'https://onramp-pay.com',
            siteName: 'Onramp Pay',
            images: [
                  {
                        url: 'https://onramp-pay.com/assets/images/onramp-pay.png',
                        width: 1200,
                        height: 630,
                        alt: 'Onramp Pay WooCommerce Plugin',
                  },
            ],
      },
      twitter: {
            card: 'summary_large_image',
            title: 'Onramp Pay - WooCommerce Crypto Payment Plugin',
            description:
                  'Accept crypto payments on WooCommerce with 20+ payment providers. Premium plugin with card-to-crypto checkout.',
            images: ['https://onramp-pay.com/assets/images/onramp-pay.png'],
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
                        <link rel="icon" href="/assets/images/onramp-pay.png" type="image/png" />
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
                                          name: 'Onramp Pay - WooCommerce, PrestaShop & OpenCart Payment Plugin',
                                          description:
                                                'Accept crypto payments on WooCommerce, PrestaShop, and OpenCart with card-to-crypto checkout. 20+ payment providers including Stripe, MoonPay, Wert.io, and Revolut. Instant USDC payouts, no KYC required.',
                                          url: 'https://onramp-pay.com',
                                          applicationCategory: 'BusinessApplication',
                                          operatingSystem: 'Web',
                                          offers: {
                                                '@type': 'Offer',
                                                price: '150',
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
                                                'WooCommerce, PrestaShop, OpenCart support',
                                                'Lifetime updates',
                                                'Premium support',
                                          ],
                                          aggregateRating: {
                                                '@type': 'AggregateRating',
                                                ratingValue: '4.8',
                                                ratingCount: '127',
                                          },
                                    }),
                              }}
                        />
                  </head>
                  <body className="min-h-screen bg-slate-50 flex flex-col">
                        <Header />
                        <main className="flex-grow">{children}</main>
                        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
                              <div className="max-w-7xl mx-auto px-6 py-12">
                                    {/* Footer Links */}
                                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
                                          <Link href="/privacy-policy" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                                Privacy Policy
                                          </Link>
                                          <span className="hidden md:inline text-slate-600">•</span>
                                          <Link href="/refund-policy" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                                Refund Policy
                                          </Link>
                                          <span className="hidden md:inline text-slate-600">•</span>
                                          <Link href="/terms-of-use" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                                Terms of Use
                                          </Link>
                                          <span className="hidden md:inline text-slate-600">•</span>
                                          <a href="https://documenter.getpostman.com/view/15018241/2sBXc7M4ud" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                                API Documentation
                                          </a>
                                          <span className="hidden md:inline text-slate-600">•</span>
                                          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                                Contact Support
                                          </a>
                                    </div>

                                    {/* Legal Disclaimer */}
                                    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8 mb-8">
                                          <div className="flex items-start gap-3 mb-4">
                                                <span className="text-yellow-500 text-xl flex-shrink-0">⚠️</span>
                                                <h3 className="text-sm font-bold text-yellow-500 uppercase tracking-wider">Important Legal Notice</h3>
                                          </div>
                                          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                                                Onramp Pay operates independently and has no affiliation with Visa, Mastercard, PayPal, or other brands mentioned on this site. All brand names and logos belong to their respective trademark holders and are used solely for descriptive purposes. Our platform provides software solutions only—we do not process payments or handle money directly. All transactions are processed by licensed third-party payment providers and cryptocurrency services. <span className="text-yellow-400 font-semibold">We offer technical integration tools, not financial services.</span> Users accept all responsibility and liability when using our software. By accessing this website, you acknowledge that you've read our Terms of Use and agree to use our services at your own discretion and risk.
                                          </p>
                                    </div>

                                    {/* Copyright */}
                                    <div className="text-center pt-6 border-t border-slate-700">
                                          <p className="text-sm text-slate-400">
                                                Copyright © 2026 Onramp Pay. All Rights Reserved.
                                          </p>
                                    </div>
                              </div>
                        </footer>
                  </body>
            </html>
      );
}
