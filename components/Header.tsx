'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Toast from './Toast';

const Header: React.FC = () => {
      const pathname = usePathname();
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [mobileDocsOpen, setMobileDocsOpen] = useState(false);
      const [mobilePluginsOpen, setMobilePluginsOpen] = useState(false);
      const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
      const [mobileLegalOpen, setMobileLegalOpen] = useState(false);
      const [toast, setToast] = useState<string | null>(null);

      const isActive = (path: string) => pathname === path;

      const navLinks = [
            { path: '/', label: 'Home' },
            { path: '/payment-generator', label: 'Card To Crypto Payment' },
      ];

      const productLinks = [
            { path: '/payment-generator', label: 'Payment Generator' },
            { path: '/crypto-payment', label: 'Crypto Payment' },
            { path: '/no-kyc-virtual-credit-card', label: 'No KYC Cards' },
            { path: '/track-payment', label: 'Track Payment' },
            { path: '/minimum-amounts', label: 'Status & Limits' },
      ];

      const pluginLinks = [
            { path: '/assets/plugins/woocommerce/onrampay-instant-payment-gateway.zip', label: 'WooCommerce Fiat-Crypto Payment', external: true },
            { path: '/assets/plugins/woocommerce/onrampay-crypto-payment-gateway.zip', label: 'WooCommerce Crypto Payment', external: true },
            { path: '#', label: 'PrestaShop Plugin', comingSoon: true },
            { path: '#', label: 'OpenCart Plugin', comingSoon: true },
      ];

      const docLinks = [
            { path: '/virtual-card-policies', label: 'Card Info & Restrictions', external: false },
            { path: 'https://documenter.getpostman.com/view/15018241/2sBXc7M4ud', label: 'Card To Crypto API', external: true },
            { path: 'https://documenter.getpostman.com/view/15018241/2sBXihosBP', label: 'Crypto API', external: true },
            { path: '/faq', label: 'FAQ', external: false },
      ];

      const legalLinks = [
            { path: '/privacy-policy', label: 'Privacy Policy' },
            { path: '/legal-enquiries', label: 'Legal Enquiries' },
            { path: '/terms-of-use', label: 'Terms of Use' },
            { path: '/virtual-card-policies', label: 'Virtual Card Policies' },
            { path: '/prohibited-businesses', label: 'Prohibited Businesses' },
      ];

      const closeMenu = () => {
            setIsMenuOpen(false);
            setMobileDocsOpen(false);
            setMobilePluginsOpen(false);
            setMobileProductsOpen(false);
            setMobileLegalOpen(false);
      };

      const handleComingSoon = (e: React.MouseEvent) => {
            e.preventDefault();
            setToast('This plugin is coming soon. Please check back later!');
            closeMenu();
            window.setTimeout(() => setToast(null), 2800);
      };

      return (
            <>
                  <header className="bg-slate-950/70 backdrop-blur-xl border-b border-white/10 py-3 px-6 sticky top-0 z-50 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                        <div className="max-w-7xl mx-auto flex items-center justify-between">
                              <Link href="/" className="flex gap-2 items-center hover:opacity-80 transition-opacity" onClick={closeMenu}>
                                    <img src="/assets/images/onramp-pay-white.png" alt="Onramp Pay Logo" className="w-auto h-8" />
                                    <span className="text-lg font-bold tracking-tight text-white">Onramp Pay</span>
                              </Link>

                              {/* Desktop Navigation */}
                              <nav className="hidden md:flex items-center gap-5">
                                    {navLinks.map((link) => (
                                          <Link
                                                key={link.path}
                                                href={link.path}
                                                className={`text-[11px] font-extrabold uppercase tracking-[0.16em] transition-colors ${isActive(link.path) ? 'text-cyan-300' : 'text-slate-200 hover:text-cyan-200'}`}
                                          >
                                                {link.label}
                                          </Link>
                                    ))}

                                    <div className="relative group">
                                          <button
                                                type="button"
                                                className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-200 group-hover:text-cyan-200 transition-colors inline-flex items-center gap-1"
                                          >
                                                Products
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                          </button>
                                          <div className="absolute right-0 mt-2 w-64 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.45)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
                                                {productLinks.map((link) => (
                                                      <Link
                                                            key={link.path}
                                                            href={link.path}
                                                            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-100 hover:bg-white/10"
                                                      >
                                                            {link.label}
                                                      </Link>
                                                ))}
                                          </div>
                                    </div>

                                    <div className="relative group">
                                          <button
                                                type="button"
                                                className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-200 group-hover:text-cyan-200 transition-colors inline-flex items-center gap-1"
                                          >
                                                Legal
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                          </button>
                                          <div className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.45)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
                                                {legalLinks.map((link) => (
                                                      <Link
                                                            key={link.path}
                                                            href={link.path}
                                                            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-100 hover:bg-white/10"
                                                      >
                                                            {link.label}
                                                      </Link>
                                                ))}
                                          </div>
                                    </div>

                                    <div className="relative group">
                                          <button
                                                type="button"
                                                className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-200 group-hover:text-cyan-200 transition-colors inline-flex items-center gap-1"
                                          >
                                                Plugins
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                          </button>
                                          <div className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.45)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
                                                {pluginLinks.map((link) => (
                                                      (link as any).comingSoon ? (
                                                            <button
                                                                  key={link.label}
                                                                  onClick={handleComingSoon}
                                                                  className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-100 hover:bg-white/10"
                                                            >
                                                                  {link.label}
                                                            </button>
                                                      ) : (
                                                            <a
                                                                  key={link.label}
                                                                  href={link.path}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-100 hover:bg-white/10"
                                                            >
                                                                  {link.label}
                                                            </a>
                                                      )
                                                ))}
                                          </div>
                                    </div>

                                    <div className="relative group">
                                          <button
                                                type="button"
                                                className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-200 group-hover:text-cyan-200 transition-colors inline-flex items-center gap-1"
                                          >
                                                Documentation
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                          </button>
                                          <div className="absolute right-0 mt-2 w-60 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.45)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
                                                {docLinks.map((link) => (
                                                      link.external ? (
                                                            <a
                                                                  key={link.label}
                                                                  href={link.path}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-100 hover:bg-white/10"
                                                            >
                                                                  {link.label}
                                                            </a>
                                                      ) : (
                                                            <Link
                                                                  key={link.label}
                                                                  href={link.path}
                                                                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-100 hover:bg-white/10"
                                                            >
                                                                  {link.label}
                                                            </Link>
                                                      )
                                                ))}
                                          </div>
                                    </div>
                              </nav>

                              {/* Mobile Menu Button */}
                              <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="md:hidden p-2 rounded-lg border border-white/10 text-white hover:bg-white/10 transition-colors"
                                    aria-label="Toggle menu"
                              >
                                    {isMenuOpen ? (
                                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                          </svg>
                                    ) : (
                                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                          </svg>
                                    )}
                              </button>
                        </div>
                  </header>

                  {/* Mobile Menu Drawer */}
                  {isMenuOpen && (
                        <>
                              {/* Backdrop */}
                              <div
                                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                                    onClick={closeMenu}
                              ></div>

                              {/* Drawer */}
                              <div className="fixed top-0 right-0 h-full w-72 bg-slate-950 border-l border-white/10 shadow-2xl shadow-black/40 z-50 md:hidden transform transition-transform duration-300 ease-in-out">
                                    <div className="flex flex-col h-full">
                                          {/* Drawer Header */}
                                          <div className="flex items-center justify-between p-6 border-b border-white/10">
                                                <span className="text-base font-bold uppercase tracking-wide text-white">Menu</span>
                                                <button
                                                      onClick={closeMenu}
                                                      className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                                                      aria-label="Close menu"
                                                >
                                                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                      </svg>
                                                </button>
                                          </div>

                                          {/* Navigation Links */}
                                          <nav className="flex-1 overflow-y-auto p-6">
                                                <div className="space-y-2">
                                                      {navLinks.map((link) => (
                                                            <Link
                                                                  key={link.path}
                                                                  href={link.path}
                                                                  onClick={closeMenu}
                                                                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive(link.path)
                                                                        ? 'bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 text-white'
                                                                        : 'text-slate-100 hover:bg-white/10'
                                                                        }`}
                                                            >
                                                                  {link.label}
                                                            </Link>
                                                      ))}

                                                      <button
                                                            type="button"
                                                            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-100 hover:bg-white/10"
                                                      >
                                                            Products
                                                            <svg className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                      </button>
                                                      {mobileProductsOpen && (
                                                            <div className="pl-3 space-y-1">
                                                                  {productLinks.map((link) => (
                                                                        <Link
                                                                              key={link.path}
                                                                              href={link.path}
                                                                              onClick={closeMenu}
                                                                              className="block px-4 py-2 rounded-lg text-sm text-slate-100 hover:bg-white/10"
                                                                        >
                                                                              {link.label}
                                                                        </Link>
                                                                  ))}
                                                            </div>
                                                      )}

                                                      <button
                                                            type="button"
                                                            onClick={() => setMobilePluginsOpen(!mobilePluginsOpen)}
                                                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-100 hover:bg-white/10"
                                                      >
                                                            Plugins
                                                            <svg className={`w-4 h-4 transition-transform ${mobilePluginsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                      </button>
                                                      {mobilePluginsOpen && (
                                                            <div className="pl-3 space-y-1">
                                                                  {pluginLinks.map((link) => (
                                                                        (link as any).comingSoon ? (
                                                                              <button
                                                                                    key={link.label}
                                                                                    onClick={handleComingSoon}
                                                                                    className="block w-full text-left px-4 py-2 rounded-lg text-sm text-slate-100 hover:bg-white/10"
                                                                              >
                                                                                    {link.label}
                                                                              </button>
                                                                        ) : (
                                                                              <a
                                                                                    key={link.label}
                                                                                    href={link.path}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    onClick={closeMenu}
                                                                                    className="block px-4 py-2 rounded-lg text-sm text-slate-100 hover:bg-white/10"
                                                                              >
                                                                                    {link.label}
                                                                              </a>
                                                                        )
                                                                  ))}
                                                            </div>
                                                      )}

                                                      <button
                                                            type="button"
                                                            onClick={() => setMobileDocsOpen(!mobileDocsOpen)}
                                                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-100 hover:bg-white/10"
                                                      >
                                                            Documentation
                                                            <svg className={`w-4 h-4 transition-transform ${mobileDocsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                      </button>
                                                      {mobileDocsOpen && (
                                                            <div className="pl-3 space-y-1">
                                                                  {docLinks.map((link) => (
                                                                        link.external ? (
                                                                              <a
                                                                                    key={link.label}
                                                                                    href={link.path}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    onClick={closeMenu}
                                                                                    className="block px-4 py-2 rounded-lg text-sm text-slate-100 hover:bg-white/10"
                                                                              >
                                                                                    {link.label}
                                                                              </a>
                                                                        ) : (
                                                                              <Link
                                                                                    key={link.label}
                                                                                    href={link.path}
                                                                                    onClick={closeMenu}
                                                                                    className="block px-4 py-2 rounded-lg text-sm text-slate-100 hover:bg-white/10"
                                                                              >
                                                                                    {link.label}
                                                                              </Link>
                                                                        )
                                                                  ))}
                                                            </div>
                                                      )}

                                                      <button
                                                            type="button"
                                                            onClick={() => setMobileLegalOpen(!mobileLegalOpen)}
                                                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-100 hover:bg-white/10"
                                                      >
                                                            Legal
                                                            <svg className={`w-4 h-4 transition-transform ${mobileLegalOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                      </button>
                                                      {mobileLegalOpen && (
                                                            <div className="pl-3 space-y-1">
                                                                  {legalLinks.map((link) => (
                                                                        <Link
                                                                              key={link.path}
                                                                              href={link.path}
                                                                              onClick={closeMenu}
                                                                              className="block px-4 py-2 rounded-lg text-sm text-slate-100 hover:bg-white/10"
                                                                        >
                                                                              {link.label}
                                                                        </Link>
                                                                  ))}
                                                            </div>
                                                      )}
                                                </div>
                                          </nav>

                                          {/* Drawer Footer */}
                                          <div className="p-6 border-t border-white/10">
                                                <p className="text-xs text-slate-300 text-center">© 2025 Onramp Pay</p>
                                          </div>
                                    </div>
                              </div>
                        </>
                  )}

                  {toast && <Toast message={toast} onClose={() => setToast(null)} position="center" />}
            </>
      );
};

export default Header;
