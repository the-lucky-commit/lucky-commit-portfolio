'use client';

import React from 'react';
import { CalendarDays, ExternalLink, FolderKanban, Globe2, Layers } from 'lucide-react';

import { CodeLabel, EditorPanel } from './ui/Workspace';
import { Locale, projects, t, txt } from '@/lib/data';
import { useRevealOnScroll } from '@/lib/useRevealOnScroll';

interface ProjectsProps {
  locale: Locale;
}

export default function Projects({ locale }: ProjectsProps) {
  const containerRef = useRevealOnScroll<HTMLElement>();
  const copy = txt[locale];

  const getStatusBadge = (status: { en: string; th: string }) => {
    const statusText = t(status, locale).toLowerCase();

    if (statusText.includes('live')) {
      return <span className="status-badge status-badge--live">{t(status, locale)}</span>;
    }

    if (statusText.includes('ongoing') || statusText.includes('migration')) {
      return <span className="status-badge status-badge--progress">{t(status, locale)}</span>;
    }

    return <span className="status-badge status-badge--campaign">{t(status, locale)}</span>;
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="blob blob--cool absolute left-0 top-1/3 h-72 w-72 opacity-25" />
      <div className="blob blob--warm absolute bottom-8 right-6 h-80 w-80 opacity-20" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 reveal-on-scroll" data-reveal="up">
          <div className="max-w-3xl">
            <div className="eyebrow mb-4">
              <Layers size={14} className="text-accent-cool" />
              {copy.pEye}
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-4xl lg:text-5xl">
              {copy.pTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-body">{copy.pDesc}</p>
          </div>

          <div className="flex items-center gap-3">
            <CodeLabel>portfolio/index.ts</CodeLabel>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="reveal-on-scroll"
              data-reveal={idx % 2 === 0 ? 'left' : 'right'}
              data-reveal-delay={`${Math.min(idx * 50, 180)}`}
            >
              <EditorPanel
                title={`${project.title.toLowerCase().replace(/[^a-z0-9]+/gi, '-')}.tsx`}
                path={`workspace / projects / case-study-0${idx + 1}`}
                badge={project.year}
                className="overflow-visible"
              >
                <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
                  <div className={`${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div
                      className={`relative overflow-hidden rounded-[26px] border border-white/8 ${project.gradientClass} p-4`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%)]" />
                      <div className="relative rounded-[22px] border border-white/8 bg-[#202124]/70 p-5">
                        <div className="mb-6 flex items-center justify-between">
                          <CodeLabel>case-study-0{idx + 1}</CodeLabel>
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04]">
                            <FolderKanban size={18} className="text-accent-cool" />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                            {t(project.cat, locale)}
                          </div>
                          <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-4xl">
                            {project.title}
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {project.tech.slice(0, 4).map((tech) => (
                              <div
                                key={tech}
                                className="rounded-[18px] border border-white/6 bg-white/[0.04] px-4 py-3 font-mono text-sm text-body"
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`space-y-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                        <CalendarDays size={14} className="text-accent-amber" />
                        {project.year}
                      </div>
                      {getStatusBadge(project.status)}
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-100 sm:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-body">{t(project.desc, locale)}</p>
                    </div>

                    <div className="workspace-surface rounded-[24px] p-5">
                      <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                        <Globe2 size={14} className="text-accent-cool" />
                        engineered with
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tag-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noreferrer" className="btn-primary group">
                          {copy.visit}
                          <ExternalLink size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                      ) : (
                        <div className="status-badge status-badge--campaign">{copy.onReq}</div>
                      )}
                    </div>
                  </div>
                </div>
              </EditorPanel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
