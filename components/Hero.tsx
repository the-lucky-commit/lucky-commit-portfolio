'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Locale, txt } from '@/lib/data';
import { useRevealOnScroll } from '@/lib/useRevealOnScroll';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const containerRef = useRevealOnScroll<HTMLElement>();
  const copy = txt[locale];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-4xl text-center w-full z-10">
        <div className="reveal-on-scroll" data-reveal="up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-zinc-300 uppercase">Available for work</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            {locale === 'en' ? 'Digital systems,' : 'ระบบดิจิทัล,'} <br className="hidden sm:block" />
            <span className="text-zinc-500">{locale === 'en' ? 'designed and built.' : 'ออกแบบและพัฒนา'}</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-zinc-400 max-w-2xl mx-auto">
            {copy.heroSub2}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="btn-primary group">
              {copy.heroCta}
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="btn-ghost">
              {copy.heroCta2}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-zinc-500 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
