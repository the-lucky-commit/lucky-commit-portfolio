'use client';

import React, { useEffect, useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Locale, locales, navItems, t } from '@/lib/data';

interface NavigationProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export default function Navigation({ locale, setLocale }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 18);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] px-4 pt-4 sm:px-6">
        <nav
          className={`mx-auto max-w-[1220px] rounded-full border px-6 py-3 transition-all duration-300 ${
            isScrolled
              ? 'border-white/10 bg-black/80 shadow-lg backdrop-blur-md'
              : 'border-transparent bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-mono text-sm font-bold text-black">
                LC
              </div>
              <div className="text-sm font-semibold tracking-wide text-white">lucky.commit</div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {t(item.label, locale)}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1">
                {locales.map((item) => (
                  <button
                    key={item}
                    onClick={() => setLocale(item)}
                    className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase transition-all ${
                      locale === item ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <a href="#contact" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105">
                Let&apos;s talk
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setLocale(locale === 'en' ? 'th' : 'en')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:text-white"
                aria-label="Toggle locale"
              >
                <Globe size={18} />
              </button>

              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                onClick={() => setIsMobileMenuOpen((value) => !value)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-90 flex flex-col bg-black/95 px-6 pb-10 pt-28 backdrop-blur-lg transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-1 flex-col justify-between">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/10 pb-4 text-2xl font-medium text-white transition-colors hover:text-zinc-400"
              >
                <span>{t(item.label, locale)}</span>
                <span className="font-mono text-sm text-zinc-500">0{index + 1}</span>
              </a>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
              {locales.map((item) => (
                <button
                  key={item}
                  onClick={() => setLocale(item)}
                  className={`flex-1 rounded-full py-3 font-mono text-sm uppercase transition-all ${
                    locale === item ? 'bg-white text-black' : 'text-zinc-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-white py-4 text-lg font-medium text-black"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
