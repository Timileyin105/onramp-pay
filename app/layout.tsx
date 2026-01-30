import type { Metadata } from 'next';
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
                                          name: 'Onramp Pay WooCommerce Plugin',
                                          description:
                                                'Accept crypto payments on WooCommerce with card-to-crypto checkout and 20+ payment providers.',
                                          url: 'https://onramp-pay.com',
                                          applicationCategory: 'BusinessApplication',
                                          operatingSystem: 'Web',
                                          offers: {
                                                '@type': 'Offer',
                                                price: '99',
                                                priceCurrency: 'USD',
                                          },
                                    }),
                              }}
                        />
                  </head>
                  <body className="min-h-screen bg-slate-50 flex flex-col">
                        <Header />
                        <main className="flex-grow">{children}</main>
                        <footer className="bg-white border-t border-slate-200 py-12 px-6">
                              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                                    <div className="text-slate-500 text-sm">
                                          © 2025 Onramp Pay. All rights reserved.
                                    </div>
                                    <div className="flex gap-8 text-sm font-medium text-slate-400">
                                          <a href="#" className="hover:text-indigo-600 transition-colors">
                                                Privacy Policy
                                          </a>
                                          <a href="#" className="hover:text-indigo-600 transition-colors">
                                                Terms of Service
                                          </a>
                                          <a href="#" className="hover:text-indigo-600 transition-colors">
                                                Contact Support
                                          </a>
                                    </div>
                              </div>
                        </footer>
                  </body>
            </html>
      );
}
