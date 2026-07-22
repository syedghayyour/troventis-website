/**
 * Signal §9 — the v1 wordmark. Layouts must import this component,
 * never a raw asset: a future professional logo is a one-file swap.
 */
type Props = {
  /** Pixel height of the wordmark text. */
  size?: number;
  /** Blink the cursor 3× on mount (hero only, Signal §5.5). */
  blink?: boolean;
  className?: string;
};

export function Wordmark({ size = 28, blink = false, className }: Props) {
  return (
    <span
      className={className}
      style={{ fontSize: size, lineHeight: 1 }}
      aria-label="troventis"
    >
      <span className="font-sans font-semibold tracking-[-0.03em] text-ink">
        troventis
      </span>
      <span
        aria-hidden="true"
        className={`ml-[0.18em] inline-block h-[0.72em] w-[0.42em] bg-signal align-baseline${blink ? " cursor-blink" : ""}`}
      />
    </span>
  );
}
