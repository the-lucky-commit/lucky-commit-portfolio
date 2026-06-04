'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, Target, User, Zap } from 'lucide-react';

import { CodeLabel, EditorPanel, StatusChip } from './ui/Workspace';
import { Locale, txt } from '@/lib/data';
import { useRevealOnScroll } from '@/lib/useRevealOnScroll';

interface AboutProps {
  locale: Locale;
}

export default function About({ locale }: AboutProps) {
  const containerRef = useRevealOnScroll<HTMLElement>();
  const copy = txt[locale];

  const metrics = [
    { value: '20+', label: copy.s1, icon: <ShieldCheck size={18} className="text-accent-cool" /> },
    { value: '3+', label: copy.s2, icon: <Target size={18} className="text-accent-sage" /> },
    { value: 'E2E', label: copy.s3, icon: <Zap size={18} className="text-accent-amber" /> },
  ];

  const strengths = [copy.str1, copy.str2, copy.str3];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 reveal-on-scroll" data-reveal="up">
          <div className="eyebrow mb-4">
            <User size={14} className="text-accent-cool" />
            {copy.aEye}
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-4xl lg:text-5xl">
                {copy.aTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-body">{copy.aSub}</p>
            </div>
            <CodeLabel>profile/readme.md</CodeLabel>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="reveal-on-scroll" data-reveal="left">
            <EditorPanel
              title="about/profile.png"
              path="workspace / assets / portrait"
              badge="preview"
              className="h-full"
            >
              <div className="relative">
                <div className="overflow-hidden rounded-[26px] border border-white/8 bg-black/20 p-3">
                  <Image
                    src="/profile-3326.jpg"
                    alt="Portrait of lucky.commit"
                    width={800}
                    height={980}
                    className="aspect-[4/5] w-full rounded-[20px] object-cover object-center"
                  />
                </div>

                <div className="absolute -bottom-2 left-4 right-4 rounded-[20px] border border-white/8 bg-[#1e1e1e]/90 px-4 py-3 backdrop-blur">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    role
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-100">
                    Developer. Builder. Problem-solver.
                  </div>
                </div>

              </div>
            </EditorPanel>
          </div>

          <div className="grid gap-6">
            <div className="reveal-on-scroll" data-reveal="right">
              <EditorPanel
                title="about/summary.ts"
                path="workspace / profile / summary"
                badge="active note"
              >
                <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <StatusChip tone="blue" className="mb-5">
                      creative at the core
                    </StatusChip>
                    <p className="border-l border-[#3794ef]/30 pl-5 text-lg leading-8 text-slate-100">
                      {copy.aBody}
                    </p>
                    <p className="mt-5 text-base leading-8 text-body">{copy.aNote}</p>
                  </div>

                  <div className="workspace-surface rounded-[24px] p-5">
                    <CodeLabel className="mb-4">strengths[]</CodeLabel>
                    <div className="space-y-3">
                      {strengths.map((strength) => (
                        <div
                          key={strength}
                          className="rounded-[18px] border border-white/6 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-body"
                        >
                          {strength}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </EditorPanel>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="reveal-on-scroll" data-reveal="up" data-reveal-delay="90">
                <EditorPanel
                  title="about/metrics.json"
                  path="workspace / profile / metrics"
                  badge="structured"
                  className="h-full"
                >
                  <div className="grid gap-3">
                    {metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="workspace-surface flex items-center justify-between rounded-[20px] px-4 py-4"
                      >
                        <div>
                          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                            {metric.label}
                          </div>
                          <div className="mt-2 text-2xl font-semibold text-slate-100">{metric.value}</div>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/6 bg-white/[0.04]">
                          {metric.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </EditorPanel>
              </div>

              <div className="reveal-on-scroll" data-reveal="up" data-reveal-delay="140">
                <EditorPanel
                  title="cta/open-projects.tsx"
                  path="workspace / shortcuts"
                  badge="link"
                  className="h-full"
                >
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div>
                      <CodeLabel className="mb-4">next-action</CodeLabel>
                      <p className="text-base leading-8 text-body">
                        The strongest work happens where product clarity and production delivery need to meet in the same place.
                      </p>
                    </div>

                    <a href="#projects" className="btn-ghost group self-start">
                      {copy.heroCta}
                      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </EditorPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
