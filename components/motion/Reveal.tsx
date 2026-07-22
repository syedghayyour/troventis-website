"use client";

/**
 * Signal §5.1 — fade-rise. The only entrance animation in the system.
 * Triggers once at 20% visibility; honors prefers-reduced-motion via
 * MotionConfig in addition to the global CSS reset.
 */
import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";

type Props = {
  children: React.ReactNode;
  /** Stagger offset in ms (Signal: 60ms steps). */
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: Props) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <m.div
          className={className}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.22, ease: [0.2, 0, 0, 1], delay: delay / 1000 }}
        >
          {children}
        </m.div>
      </MotionConfig>
    </LazyMotion>
  );
}
