'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: `${basePath}/`, label: 'Home' },
    { href: `${basePath}/experience`, label: 'Experience' },
    { href: `${basePath}/projects`, label: 'Projects' },
    { href: `${basePath}/education`, label: 'Certifications & Education' },
    { href: `${basePath}/articles`, label: 'Articles' },
    { href: `${basePath}/contact`, label: 'Contact' },
  ];

  const isActiveLink = (href: string) => {
    if (typeof window !== 'undefined') {
      const current = window.location.pathname;
      // Normalize both with basePath
      const normalizedHref = href.replace(/\/$/, '');
      const normalizedCurrent = current.replace(/\/$/, '');
      return normalizedCurrent === normalizedHref;
    }
    return false;
  };

  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
      if (e.key === 'Tab') {
        // very small focus trap: keep focus within drawer
        const focusable = document.querySelectorAll<HTMLElement>('[data-mobile-drawer] a, [data-mobile-drawer] button');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    firstLinkRef.current?.focus();
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href={`${basePath}/`} className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent hover:from-primary-700 hover:to-primary-900 transition-all duration-300">
              My Portfolio
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                    isActiveLink(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-primary-100 dark:bg-primary-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                  className="ml-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {theme === 'dark' ? (
                    // Sun icon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm10 9a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm13.657 7.071a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM8.464 6.343A1 1 0 0 1 7.05 4.93l.707-.707A1 1 0 1 1 9.172 5.64l-.707.707Zm8.486-1.414a1 1 0 0 1 0-1.414l.707-.707A1 1 0 0 1 18.07 4.93l-.707.707a1 1 0 0 1-1.414 0ZM5.636 19.778a1 1 0 0 1-1.414-1.414l.707-.707A1 1 0 1 1 6.343 18.95l-.707.707Z"/></svg>
                  ) : (
                    // Moon icon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z"/></svg>
                  )}
                </button>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              ref={menuButtonRef}
              aria-haspopup="dialog"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div
            data-mobile-drawer
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85%] bg-white dark:bg-gray-900 shadow-xl border-l border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                ref={idx === 0 ? firstLinkRef : undefined}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-3 rounded-lg text-base font-medium transition ${
                  isActiveLink(item.href)
                    ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4">
              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-full px-3 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
