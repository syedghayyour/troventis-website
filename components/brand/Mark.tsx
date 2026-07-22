/**
 * Signal §9 — the brand mark (v2: extracted from the official banner).
 * Transparent PNG; green mark works on light and dark surfaces.
 */
type Props = { size?: number; className?: string };

export function Mark({ size = 32, className }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/mark.png"
      alt="Troventis"
      width={size}
      height={Math.round(size * 0.7)}
      className={className}
      style={{ width: size, height: "auto" }}
    />
  );
}
