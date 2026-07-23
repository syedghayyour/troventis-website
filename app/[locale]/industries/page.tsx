import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.industries.metaTitle,
    description: dict.industries.metaDescription,
  };
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <Section label={dict.industries.label}>
      <h1 className="max-w-[28ch] text-h1 font-semibold text-ink">
        {dict.industries.heading}
      </h1>
      <p className="mt-5 max-w-[68ch] text-body-lg text-ink-muted">
        {dict.industries.intro}
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {dict.industries.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 60}>
            <article className="flex h-full flex-col rounded-lg border border-line bg-surface p-6 shadow-raise">
              <h2 className="text-h3 font-semibold text-ink">{item.title}</h2>
              <p className="mt-4 font-mono text-mono-label uppercase text-ink-faint">
                {dict.industries.constraintLabel}
              </p>
              <p className="mt-1.5 text-body text-ink-muted">{item.constraint}</p>
              <p className="mt-4 font-mono text-mono-label uppercase text-signal">
                {dict.industries.adaptationLabel}
              </p>
              <p className="mt-1.5 text-body text-ink-muted">{item.adaptation}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-12">
        <Button href={`/${locale}/contact/`} variant="primary">
          {dict.industries.cta}
        </Button>
      </div>
    </Section>
  );
}
