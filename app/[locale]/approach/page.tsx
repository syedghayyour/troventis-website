import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Timeline } from "@/components/sections/Timeline";
import { Reveal } from "@/components/motion/Reveal";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.approach.metaTitle,
    description: dict.approach.metaDescription,
  };
}

export default async function ApproachPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <Section label={dict.approach.label}>
      <h1 className="max-w-[24ch] text-h1 font-semibold text-ink">
        {dict.approach.heading}
      </h1>
      <p className="mt-5 max-w-[68ch] text-body-lg text-ink-muted">
        {dict.approach.intro}
      </p>
      <div className="mt-16 max-w-[76ch]">
        <Timeline
          steps={dict.approach.phases.map((phase) => ({
            meta: phase.meta,
            title: phase.title,
            description: phase.body,
          }))}
        />
      </div>
      <div className="mt-14 grid max-w-[76ch] gap-3 sm:grid-cols-2">
        {dict.approach.phases.map((phase) => (
          <Reveal key={phase.title}>
            <Badge className="w-full justify-start">
              {phase.title}: {phase.deliverable}
              <span aria-hidden="true" className="ml-auto text-signal">
                ✓
              </span>
            </Badge>
          </Reveal>
        ))}
      </div>
      <p className="mt-14 max-w-[60ch] border-l-2 border-signal pl-5 text-body-lg font-medium text-ink">
        {dict.approach.closing}
      </p>
      <div className="mt-12">
        <Button href={`/${locale}/contact/`} variant="primary">
          {dict.approach.cta}
        </Button>
      </div>
    </Section>
  );
}
