"use client";

/**
 * Signal §5.4 — count-up. Animates once when visible (800ms), renders
 * the final value immediately under reduced motion. The stat may be
 * phrased as a verified assertion via `suffix` + `verified`.
 */
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  /** Rendered before/after the number, e.g. "≥ " / " %". */
  prefix?: string;
  suffix?: string;
  label: string;
  /** Append signal ✓ (counts against the Signal Budget). */
  verified?: boolean;
  decimals?: number;
};

export function StatBlock({
  value,
  prefix = "",
  suffix = "",
  label,
  verified = false,
  decimals = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      setDone(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || done) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 800;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(value * eased);
          if (t < 1) requestAnimationFrame(tick);
          else setDone(true);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, done]);

  const formatted = display.toFixed(decimals);

  return (
    <div ref={ref}>
      <p className="font-mono text-h2 font-normal text-ink">
        {prefix}
        {formatted}
        {suffix}
        {verified ? (
          <span aria-hidden="true" className="ml-2 text-signal">
            ✓
          </span>
        ) : null}
      </p>
      <p className="mt-1 text-small text-ink-muted">{label}</p>
    </div>
  );
}
