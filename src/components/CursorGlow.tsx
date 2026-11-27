'use client';

import * as React from 'react';

const GLOW_SIZE = 420;
const HALF = GLOW_SIZE / 2;

export function CursorGlow() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Desktop-only (fine pointer) and respect reduced motion
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reduceMotion.matches) return;

    let x = 0;
    let y = 0;

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      // Direct style write (transform is GPU-composited; the CSS transition
      // provides the smoothing). Avoids requestAnimationFrame, which stalls
      // in background tabs.
      el.style.transform = `translate3d(${x - HALF}px, ${y - HALF}px, 0)`;
      el.style.opacity = '1';
    };

    const onLeave = () => {
      el.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] size-[420px] rounded-full opacity-0 transition-[transform,opacity] duration-200 ease-out motion-reduce:transition-none bg-[radial-gradient(circle,rgba(52,211,153,0.16),rgba(45,212,191,0.08)_45%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(52,211,153,0.14),rgba(45,212,191,0.07)_45%,transparent_70%)]"
    />
  );
}
