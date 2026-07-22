import Link from "next/link";

type Props = {
  title: string;
  summary: string;
  /** Mono stack/domain tags (Signal §6.2). Keep to ≤3. */
  tags: string[];
  href: string;
};

export function ProjectCard({ title, summary, tags, href }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-line bg-surface p-6 shadow-raise transition-all duration-(--motion-base) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-lift motion-reduce:hover:translate-y-0"
    >
      <ul className="flex flex-wrap gap-2" aria-label="Tags">
        {tags.slice(0, 3).map((tag) => (
          <li
            key={tag}
            className="rounded-sm border border-line bg-surface-raised px-2 py-0.5 font-mono text-mono-label uppercase text-ink-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <h3 className="mt-4 text-h3 font-semibold text-ink transition-colors duration-(--motion-fast) group-hover:text-signal">
        {title}
      </h3>
      <p className="mt-2 text-body text-ink-muted">{summary}</p>
    </Link>
  );
}
