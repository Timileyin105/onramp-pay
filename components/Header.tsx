'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
      const pathname = usePathname();
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [mobileDocsOpen, setMobileDocsOpen] = useState(false);
      const [mobilePluginsOpen, setMobilePluginsOpen] = useState(false);

      const isActive = (path: string) => pathname === path;

      const navLinks = [
            { path: '/', label: 'Home' },
            { path: '/payment-generator', label: 'Payment Generator' },
            { path: '/crypto-payment', label: 'Crypto Payment' },
            { path: '/no-kyc-virtual-credit-card', label: 'No KYC Cards' },
            { path: '/track-payment', label: 'Track Payment' },
            { path: '/minimum-amounts', label: 'Status & Limits' },
      ];

      const pluginLinks = [
            { path: 'https://onramp-pay.com/downloads/onramppay-plugin.zip', label: 'WooCommerce Plugin' },
            { path: 'https://onramp-pay.com/downloads/onramppay-plugin.zip', label: 'PrestaShop Plugin' },
            { path: 'https://onramp-pay.com/downloads/onramppay-plugin.zip', label: 'OpenCart Plugin' },
      ];

      const docLinks = [
            { path: '/virtual-card-policies', label: 'Card Info & Restrictions', external: false },
            { path: 'https://documenter.getpostman.com/view/14826208/2sBXcHiz2s', label: 'No KYC Virtual Card API', external: true },
      ];

      const closeMenu = () => {
            setIsMenuOpen(false);
            setMobileDocsOpen(false);
            setMobilePluginsOpen(false);
      };

      return (
            <>
                  <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 px-6 sticky top-0 z-50">
                        <div className="max-w-7xl mx-auto flex items-center justify-between">
                              <Link href="/" className="flex gap-2 items-center hover:opacity-80 transition-opacity" onClick={closeMenu}>
                                    <img src="/assets/images/onramp-pay.png" alt="Onramp Pay Logo" className="w-auto h-8" />
                                    <span className="text-lg font-bold text-slate-900 tracking-tight">Onramp Pay</span>
                              </Link>

                              {/* Desktop Navigation */}
                              <nav className="hidden md:flex items-center gap-5">
                                    {navLinks.map((link) => (
                                          <Link
                                                key={link.path}
                                                href={link.path}
                                                className={`text-xs font-semibold uppercase tracking-wide transition-colors ${isActive(link.path) ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
                                          >
                                                {link.label}
                                          </Link>
                                    ))}

                                    <div className="relative group">
                                          <button
                                                type="button"
                                                className="text-xs font-semibold uppercase tracking-wide text-slate-600 group-hover:text-indigo-600 transition-colors inline-flex items-center gap-1"
                                          >
                                                Plugins
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                          </button>
                                          <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
                                                {pluginLinks.map((link) => (
                                                      <a
                                                            key={link.label}
                                                            href={link.path}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
                                                      >
                                                            {link.label}
                                                      </a>
                                                ))}
                                          </div>
                                    </div>

                                    <div className="relative group">
                                          <button
                                                type="button"
                                                className="text-xs font-semibold uppercase tracking-wide text-slate-600 group-hover:text-indigo-600 transition-colors inline-flex items-center gap-1"
                                          >
                                                Documentation
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                          </button>
                                          <div className="absolute right-0 mt-2 w-60 rounded-xl border border-slate-200 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
                                                {docLinks.map((link) => (
                                                      link.external ? (
                                                            <a
                                                                  key={link.label}
                                                                  href={link.path}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
                                                            >
                                                                  {link.label}
                                                            </a>
                                                      ) : (
                                                            <Link
                                                                  key={link.label}
                                                                  href={link.path}
                                                                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
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
                                    className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                                    aria-label="Toggle menu"
                              >
                                    {isMenuOpen ? (
                                          <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                          </svg>
                                    ) : (
                                          <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                              <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
                                    <div className="flex flex-col h-full">
                                          {/* Drawer Header */}
                                          <div className="flex items-center justify-between p-6 border-b border-slate-200">
                                                <span className="text-base font-bold uppercase tracking-wide text-slate-900">Menu</span>
                                                <button
                                                      onClick={closeMenu}
                                                      className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                                                      aria-label="Close menu"
                                                >
                                                      <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                                                        ? 'bg-indigo-600 text-white'
                                                                        : 'text-slate-700 hover:bg-slate-100'
                                                                        }`}
                                                            >
                                                                  {link.label}
                                                            </Link>
                                                      ))}

                                                      <button
                                                            type="button"
                                                            onClick={() => setMobilePluginsOpen(!mobilePluginsOpen)}
                                                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100"
                                                      >
                                                            Plugins
                                                            <svg className={`w-4 h-4 transition-transform ${mobilePluginsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                      </button>
                                                      {mobilePluginsOpen && (
                                                            <div className="pl-3 space-y-1">
                                                                  {pluginLinks.map((link) => (
                                                                        <a
                                                                              key={link.label}
                                                                              href={link.path}
                                                                              target="_blank"
                                                                              rel="noopener noreferrer"
                                                                              onClick={closeMenu}
                                                                              className="block px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100"
                                                                        >
                                                                              {link.label}
                                                                        </a>
                                                                  ))}
                                                            </div>
                                                      )}

                                                      <button
                                                            type="button"
                                                            onClick={() => setMobileDocsOpen(!mobileDocsOpen)}
                                                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100"
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
                                                                                    className="block px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100"
                                                                              >
                                                                                    {link.label}
                                                                              </a>
                                                                        ) : (
                                                                              <Link
                                                                                    key={link.label}
                                                                                    href={link.path}
                                                                                    onClick={closeMenu}
                                                                                    className="block px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100"
                                                                              >
                                                                                    {link.label}
                                                                              </Link>
                                                                        )
                                                                  ))}
                                                            </div>
                                                      )}
                                                </div>
                                          </nav>

                                          {/* Drawer Footer */}
                                          <div className="p-6 border-t border-slate-200">
                                                <p className="text-xs text-slate-500 text-center">© 2025 Onramp Pay</p>
                                          </div>
                                    </div>
                              </div>
                        </>
                  )}
            </>
      );
};

export default Header;
