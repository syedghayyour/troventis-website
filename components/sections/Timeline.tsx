type Step = {
  /** Mono label, e.g. a phase number or date (Signal §6.2). */
  meta: string;
  title: string;
  description: string;
  /** Completed steps get a signal marker (Signal §1.3). */
  done?: boolean;
};

type Props = { steps: Step[] };

export function Timeline({ steps }: Props) {
  return (
    <ol className="relative space-y-10 border-l border-line pl-8">
      {steps.map((step) => (
        <li key={step.meta} className="relative">
          <span
            aria-hidden="true"
            className={`absolute -left-[37px] top-1.5 size-2.5 rounded-full border-2 ${
              step.done ? "border-signal bg-signal" : "border-line-strong bg-surface"
            }`}
          />
          <p className="font-mono text-mono-label uppercase text-ink-muted">
            {step.meta}
            {step.done ? <span className="sr-only"> (abgeschlossen)</span> : null}
          </p>
          <h3 className="mt-1 text-h3 font-semibold text-ink">{step.title}</h3>
          <p className="mt-1.5 max-w-[60ch] text-body text-ink-muted">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
