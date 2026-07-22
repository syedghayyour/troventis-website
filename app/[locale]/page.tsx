import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Wordmark } from "@/components/brand/Wordmark";
import { Reveal } from "@/components/motion/Reveal";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <Section label={dict.home.sectionLabel} className="flex min-h-[70vh] items-center">
      <div className="max-w-[68ch]">
        <Reveal>
          <Wordmark size={44} blink />
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-8 text-display font-semibold text-ink">
            {dict.home.heading}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-body-lg text-ink-muted">{dict.home.tagline}</p>
          <p className="mt-2 text-body text-ink-muted">{dict.home.status}</p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={`/${locale}/`} variant="primary">
              {dict.home.ctaPrimary}
            </Button>
            <Button href={`/${locale}/`} variant="secondary">
              {dict.home.ctaSecondary}
            </Button>
            <Badge>
              {dict.home.assertion}
              <span aria-hidden="true" className="text-signal">
                ✓
              </span>
            </Badge>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
