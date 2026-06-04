'use client';

import React, { ReactNode } from 'react';

type Tone = 'blue' | 'teal' | 'amber' | 'neutral';

interface EditorPanelProps {
  title: string;
  path?: string;
  badge?: string;
  actions?: ReactNode;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}

interface StatusChipProps {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}

interface CodeLabelProps {
  children: ReactNode;
  className?: string;
}

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

export function WindowControls({ className }: { className?: string }) {
  return (
    <div className={cx('window-controls', className)}>
      <span className="window-controls__dot window-controls__dot--close" />
      <span className="window-controls__dot window-controls__dot--minimize" />
      <span className="window-controls__dot window-controls__dot--zoom" />
    </div>
  );
}

export function CodeLabel({ children, className }: CodeLabelProps) {
  return <span className={cx('code-label', className)}>{children}</span>;
}

export function StatusChip({ tone = 'blue', children, className }: StatusChipProps) {
  return (
    <span className={cx('status-chip', `status-chip--${tone}`, className)}>
      {children}
    </span>
  );
}

export function EditorPanel({
  title,
  path,
  badge,
  actions,
  className,
  contentClassName,
  children,
}: EditorPanelProps) {
  return (
    <div className={cx('workspace-panel', className)}>
      <div className="workspace-panel__header">
        <div className="flex min-w-0 items-center gap-3">
          <WindowControls />
          <div className="min-w-0">
            <div className="workspace-panel__title">{title}</div>
            {path ? <div className="workspace-panel__path">{path}</div> : null}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {badge ? <CodeLabel>{badge}</CodeLabel> : null}
          {actions}
        </div>
      </div>

      <div className={cx('workspace-panel__content', contentClassName)}>{children}</div>
    </div>
  );
}
