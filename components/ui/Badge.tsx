type Props = { children: React.ReactNode; className?: string };

/** Mono metric badge, e.g. an assertion with checkmark (Signal §6.3). */
export function Badge({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm border border-line bg-surface-raised px-3 py-1.5 font-mono text-mono-label text-ink-muted ${className}`}
    >
      {children}
    </span>
  );
}
