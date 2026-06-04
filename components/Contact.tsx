'use client';

import React from 'react';
import { ArrowRight, Github, Globe, Mail, MessageCircle, MessageSquare } from 'lucide-react';

import { CodeLabel, EditorPanel, StatusChip } from './ui/Workspace';
import { Locale, contactLinks, t, txt } from '@/lib/data';
import { useRevealOnScroll } from '@/lib/useRevealOnScroll';

interface ContactProps {
  locale: Locale;
}

export default function Contact({ locale }: ContactProps) {
  const containerRef = useRevealOnScroll<HTMLElement>();
  const copy = txt[locale];

  const getContactIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'email':
        return <Mail size={18} />;
      case 'github':
        return <Github size={18} />;
      case 'line':
        return <MessageCircle size={18} />;
      case 'portfolio':
        return <Globe size={18} />;
      default:
        return <MessageSquare size={18} />;
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative overflow-hidden px-4 pb-10 pt-16 sm:px-6 lg:pb-14 lg:pt-24"
    >
      <div className="blob blob--warm absolute -left-12 bottom-0 h-72 w-72 opacity-25" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 reveal-on-scroll" data-reveal="up">
          <div className="eyebrow mb-4">
            <MessageSquare size={14} className="text-accent-cool" />
            {copy.cEye}
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-4xl lg:text-5xl">
                {copy.cTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-body">{copy.cBody}</p>
            </div>
            <StatusChip tone="blue">open for new builds</StatusChip>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="reveal-on-scroll" data-reveal="left">
            <EditorPanel
              title="contact/command-palette.tsx"
              path="workspace / communication"
              badge="primary action"
              className="h-full"
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="space-y-5">
                  <CodeLabel>ready-to-collaborate</CodeLabel>
                  <p className="max-w-2xl text-lg leading-8 text-slate-100">
                    Share the goal, context, and timeline. I can help shape the interface, the system behind it, or the production handoff.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="workspace-surface rounded-[22px] p-4">
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                        preferred brief
                      </div>
                      <div className="mt-3 text-base leading-7 text-body">
                        product goal, current stack, desired launch window
                      </div>
                    </div>
                    <div className="workspace-surface rounded-[22px] p-4">
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                        typical support
                      </div>
                      <div className="mt-3 text-base leading-7 text-body">
                        platform builds, migrations, interface refinement, admin workflows
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a href="mailto:lucky99.commit@gmail.com" className="btn-primary group">
                    {copy.cCta}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>

                  <div className="code-label">chanthaburi://th</div>
                </div>
              </div>
            </EditorPanel>
          </div>

          <div className="grid gap-6">
            <div className="reveal-on-scroll" data-reveal="right">
              <EditorPanel
                title="contact/links.json"
                path="workspace / external-links"
                badge="open tabs"
              >
                <div className="grid gap-4">
                  {contactLinks.map((item, idx) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-card group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/8 bg-white/[0.04] text-accent-cool">
                          {getContactIcon(t(item.label, locale))}
                        </div>
                        <div>
                          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                            0{idx + 1} / {t(item.label, locale)}
                          </div>
                          <div className="mt-2 text-sm font-medium text-slate-100 sm:text-base">
                            {item.value}
                          </div>
                        </div>
                      </div>

                      <ArrowRight
                        size={16}
                        className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-slate-100"
                      />
                    </a>
                  ))}
                </div>
              </EditorPanel>
            </div>

            <div className="reveal-on-scroll" data-reveal="up" data-reveal-delay="90">
              <EditorPanel
                title="presence/status.md"
                path="workspace / footer"
                badge="online"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CodeLabel className="mb-4">availability</CodeLabel>
                    <p className="text-base leading-8 text-body">{copy.footer}</p>
                    <div className="mt-3 font-mono text-xs text-muted">lucky.commit © {new Date().getFullYear()}</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <StatusChip tone="teal">Chanthaburi, TH</StatusChip>
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
