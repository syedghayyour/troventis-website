import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { projectSlugs } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.projects.metaTitle,
    description: dict.projects.metaDescription,
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <Section label={dict.projects.label}>
      <h1 className="text-h1 font-semibold text-ink">{dict.projects.heading}</h1>
      <p className="mt-5 max-w-[68ch] text-body-lg text-ink-muted">
        {dict.projects.intro}
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projectSlugs.map((slug, i) => {
          const item = dict.projects.items[slug];
          return (
            <Reveal key={slug} delay={(i % 2) * 60}>
              <article className="flex h-full flex-col rounded-lg border border-line bg-surface p-6 shadow-raise">
                <ul className="flex flex-wrap gap-2" aria-label="Tags">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm border border-line bg-surface-raised px-2 py-0.5 font-mono text-mono-label uppercase text-ink-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <h2 className="mt-4 text-h3 font-semibold text-ink">{item.title}</h2>
                <p className="mt-2 text-body text-ink-muted">{item.summary}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-12">
        <Badge>{dict.projects.confidentiality}</Badge>
      </div>
    </Section>
  );
}
