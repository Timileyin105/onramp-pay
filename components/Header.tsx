'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
      const pathname = usePathname();
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const isActive = (path: string) => pathname === path;

      const navLinks = [
            { path: '/', label: 'Home' },
            { path: '/payment-generator', label: 'Payment Generator' },
            { path: '/track-payment', label: 'Track Payment' },
            { path: '/minimum-amounts', label: 'Status & Limits' },
      ];

      const closeMenu = () => setIsMenuOpen(false);

      return (
            <>
                  <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-50">
                        <div className="max-w-7xl mx-auto flex items-center justify-between">
                              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={closeMenu}>
                                    <img src="/assets/images/onramp-pay.png" alt="Onramp Pay Logo" className="w-20 h-14" />
                                    <span className="text-xl font-bold text-slate-900 tracking-tight">Onramp Pay</span>
                              </Link>

                              {/* Desktop Navigation */}
                              <nav className="hidden md:flex items-center gap-6">
                                    {navLinks.map((link) => (
                                          <Link
                                                key={link.path}
                                                href={link.path}
                                                className={`text-sm font-semibold transition-colors ${isActive(link.path) ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
                                          >
                                                {link.label}
                                          </Link>
                                    ))}
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
                              <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
                                    <div className="flex flex-col h-full">
                                          {/* Drawer Header */}
                                          <div className="flex items-center justify-between p-6 border-b border-slate-200">
                                                <span className="text-lg font-bold text-slate-900">Menu</span>
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
                                                                  className={`block px-4 py-3 rounded-xl font-semibold transition-all ${isActive(link.path)
                                                                        ? 'bg-indigo-600 text-white'
                                                                        : 'text-slate-700 hover:bg-slate-100'
                                                                        }`}
                                                            >
                                                                  {link.label}
                                                            </Link>
                                                      ))}
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
