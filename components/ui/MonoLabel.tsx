/**
 * Signal §6 — terminal language. The only sanctioned mono display
 * element. Brackets render in signal; text in ink-muted.
 */
type Props = { children: React.ReactNode; className?: string };

export function MonoLabel({ children, className = "" }: Props) {
  return (
    <span className={`font-mono text-mono-label uppercase text-ink-muted ${className}`}>
      <span aria-hidden="true" className="text-signal">
        [{" "}
      </span>
      {children}
      <span aria-hidden="true" className="text-signal">
        {" "}
        ]
      </span>
    </span>
  );
}
