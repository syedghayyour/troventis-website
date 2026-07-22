import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  /** Mono meta tag, e.g. "01" or a short stack label (Signal §6.2). */
  meta?: string;
  linkLabel: string;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  meta,
  linkLabel,
}: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-line bg-surface p-6 shadow-raise transition-all duration-(--motion-base) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-lift motion-reduce:hover:translate-y-0"
    >
      <div className="flex items-start justify-between">
        <Icon size={24} strokeWidth={1.75} className="text-ink" aria-hidden="true" />
        {meta ? (
          <span
            className="font-mono text-mono-label uppercase text-ink-faint"
            aria-hidden="true"
          >
            {meta}
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 text-h3 font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-body text-ink-muted">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-small font-medium text-ink transition-colors duration-(--motion-fast) group-hover:text-signal">
        {linkLabel}
        <ArrowRight
          size={16}
          strokeWidth={1.75}
          aria-hidden="true"
          className="transition-transform duration-(--motion-fast) group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
        />
      </span>
    </Link>
  );
}
