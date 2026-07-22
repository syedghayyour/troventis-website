import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mark } from "@/components/brand/Mark";
import { Reveal } from "@/components/motion/Reveal";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <Section label={dict.about.label}>
        <h1 className="max-w-[24ch] text-h1 font-semibold text-ink">
          {dict.about.heading}
        </h1>
        <p className="mt-5 max-w-[68ch] text-body-lg text-ink-muted">
          {dict.about.intro}
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-h2 font-semibold text-ink">{dict.about.storyHeading}</h2>
            <div className="mt-5 space-y-4">
              {dict.about.story.map((paragraph) => (
                <p key={paragraph} className="max-w-[60ch] text-body text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-h2 font-semibold text-ink">
              {dict.about.founderHeading}
            </h2>
            <div className="mt-5 flex items-start gap-4 rounded-lg border border-line bg-surface-raised p-6">
              <Mark size={44} className="shrink-0" />
              <div>
                <p className="text-body font-semibold text-ink">
                  {dict.about.founderName}
                </p>
                <p className="font-mono text-mono-label uppercase text-ink-muted">
                  {dict.about.founderRole}
                </p>
                <p className="mt-3 text-body text-ink-muted">{dict.about.founderBio}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section raised>
        <h2 className="text-h2 font-semibold text-ink">{dict.about.valuesHeading}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {dict.about.values.map((value, i) => (
            <Reveal key={value.title} delay={i * 60}>
              <div className="h-full rounded-lg border border-line bg-surface p-6">
                <h3 className="text-h3 font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Button href={`/${locale}/contact/`} variant="primary">
            {dict.about.cta}
          </Button>
        </div>
      </Section>
    </>
  );
}
