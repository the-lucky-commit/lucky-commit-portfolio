'use client';

import React, { useEffect, useState } from 'react';
import { Locale } from '@/lib/data';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className={`workspace-root min-h-screen ${locale === 'th' ? 'font-thai' : 'font-body'}`}>
      <Navigation locale={locale} setLocale={setLocale} />

      <main className="relative z-10 pb-16">
        <Hero locale={locale} />

        <div className="section-divider" />
        <About locale={locale} />

        <div className="section-divider" />
        <Services locale={locale} />

        <div className="section-divider" />
        <Projects locale={locale} />

        <Contact locale={locale} />
      </main>

      <div className="workspace-statusbar">
        <div className="flex items-center gap-4">
          <span>portfolio.workspace</span>
          <span className="hidden sm:inline">main.tsx</span>
          <span className="hidden md:inline">UTF-8</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{locale.toUpperCase()}</span>
          <span className="hidden sm:inline">ready</span>
          <span className="hidden md:inline">TypeScript JSX</span>
        </div>
      </div>
    </div>
  );
}
