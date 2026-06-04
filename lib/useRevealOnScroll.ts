'use client';

import { useEffect, useRef } from 'react';

type RevealElement = HTMLElement & {
  dataset: DOMStringMap & {
    reveal?: 'up' | 'left' | 'right' | 'scale';
    revealDelay?: string;
  };
};

export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<RevealElement>('[data-reveal]'));
    if (!items.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    items.forEach((item, index) => {
      const delay = item.dataset.revealDelay ?? `${Math.min(index * 80, 320)}`;
      item.style.setProperty('--reveal-delay', `${delay}ms`);
    });

    if (reducedMotion) {
      items.forEach((item) => item.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return ref;
}
