/**
 * Signal §9 — the block-only icon (favicon/avatar contexts, sizes
 * below 96px wordmark minimum).
 */
type Props = { size?: number; className?: string };

export function Mark({ size = 32, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Troventis"
      className={className}
    >
      <rect width="32" height="32" rx="7" fill="#12263F" />
      <rect x="11" y="8" width="10" height="16" fill="#2DD48F" />
    </svg>
  );
}
