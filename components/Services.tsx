'use client';

import React from 'react';
import { Briefcase, Compass, LayoutPanelTop, Settings2, Zap } from 'lucide-react';

import { CodeLabel, EditorPanel, StatusChip } from './ui/Workspace';
import { Locale, services, t, txt } from '@/lib/data';
import { useRevealOnScroll } from '@/lib/useRevealOnScroll';

interface ServicesProps {
  locale: Locale;
}

export default function Services({ locale }: ServicesProps) {
  const containerRef = useRevealOnScroll<HTMLElement>();
  const copy = txt[locale];

  const getServiceIcon = (n: string) => {
    switch (n) {
      case '01':
        return <LayoutPanelTop size={18} className="text-accent-cool" />;
      case '02':
        return <Settings2 size={18} className="text-accent-sage" />;
      case '03':
        return <Compass size={18} className="text-accent-amber" />;
      default:
        return <Zap size={18} className="text-accent-cool" />;
    }
  };

  const tones = ['blue', 'teal', 'amber'] as const;

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="blob blob--cool absolute right-0 top-12 h-80 w-80 opacity-30" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 reveal-on-scroll" data-reveal="up">
          <div className="max-w-3xl">
            <div className="eyebrow mb-4">
              <Briefcase size={14} className="text-accent-cool" />
              {copy.sEye}
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-4xl lg:text-5xl">
              {copy.sTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-body">{copy.sDesc}</p>
          </div>

          <div className="flex items-center gap-3">
            <CodeLabel>services/index.ts</CodeLabel>
            <StatusChip tone="blue">operator-first systems</StatusChip>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
            {services.slice(0, 2).map((service, idx) => (
              <div
                key={service.n}
                className="reveal-on-scroll"
                data-reveal="up"
                data-reveal-delay={`${idx * 90}`}
              >
                <EditorPanel
                  title={`${t(service.title, locale).toLowerCase().replace(/\s+/g, '-')}.tsx`}
                  path={`workspace / services / ${service.n}`}
                  badge={t(service.tag, locale)}
                  className="h-full"
                >
                  <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/8 bg-white/[0.04]">
                      {getServiceIcon(service.n)}
                    </div>

                    <div>
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <StatusChip tone={tones[idx]}>{service.n}</StatusChip>
                        <CodeLabel>{t(service.title, locale)}</CodeLabel>
                      </div>

                      <p className="text-base leading-8 text-body">{t(service.body, locale)}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span key={tag} className="tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </EditorPanel>
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            <div className="reveal-on-scroll" data-reveal="right">
              <EditorPanel
                title="service-stack.ts"
                path="workspace / services / board"
                badge="featured"
                className="h-full"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/8 bg-white/[0.04]">
                      {getServiceIcon(services[2].n)}
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                        {services[2].n}
                      </div>
                      <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-slate-100">
                        {t(services[2].title, locale)}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base leading-8 text-body">{t(services[2].body, locale)}</p>

                  <div className="workspace-surface rounded-[24px] p-5">
                    <CodeLabel className="mb-4">output.checklist</CodeLabel>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {services[2].tags.map((tag) => (
                        <div
                          key={tag}
                          className="rounded-[18px] border border-white/6 bg-white/[0.03] px-4 py-3 font-mono text-sm text-body"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </EditorPanel>
            </div>

            <div className="reveal-on-scroll" data-reveal="up" data-reveal-delay="90">
              <EditorPanel
                title="delivery-notes.md"
                path="workspace / process"
                badge="ops aware"
                className="h-full"
              >
                <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <CodeLabel className="mb-4">workflow</CodeLabel>
                    <p className="text-base leading-8 text-body">
                      Strategy, interface design, admin logic, and implementation quality stay connected so the product is easier to operate after launch.
                    </p>
                  </div>

                  <div className="flex justify-center">
                  </div>
                </div>
              </EditorPanel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
