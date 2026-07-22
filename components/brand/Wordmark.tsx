import { Mark } from "./Mark";

/**
 * Signal §9 — wordmark v2: official T-mark + type. Layouts import this
 * component, never raw assets — this file IS the swap point, and this
 * is its first real swap (banner rebrand, 2026-07-22).
 */
type Props = {
  /** Pixel height of the wordmark text. */
  size?: number;
  /** Kept for API compatibility; cursor retired with the v2 mark. */
  blink?: boolean;
  className?: string;
};

export function Wordmark({ size = 28, className }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-[0.45em] ${className ?? ""}`}
      style={{ fontSize: size, lineHeight: 1 }}
      aria-label="Troventis"
    >
      <Mark size={size * 1.15} />
      <span className="font-sans font-semibold tracking-[0.02em] text-ink">
        TROVENTIS
      </span>
    </span>
  );
}
