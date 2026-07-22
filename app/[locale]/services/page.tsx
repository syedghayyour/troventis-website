import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { serviceSlugs, serviceIcons } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.services.metaTitle,
    description: dict.services.metaDescription,
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <Section label={dict.services.label}>
      <h1 className="text-h1 font-semibold text-ink">{dict.services.heading}</h1>
      <p className="mt-5 max-w-[68ch] text-body-lg text-ink-muted">
        {dict.services.intro}
      </p>
      <div className="mt-16 space-y-16">
        {serviceSlugs.map((slug, i) => {
          const Icon = serviceIcons[slug];
          const item = dict.services.items[slug];
          return (
            <Reveal key={slug}>
              <article
                id={slug}
                className="grid scroll-mt-24 gap-6 border-t border-line pt-10 lg:grid-cols-[1fr_2fr] lg:gap-12"
              >
                <div className="flex items-start gap-4">
                  <Icon
                    size={24}
                    strokeWidth={1.75}
                    className="mt-1 shrink-0 text-ink"
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="font-mono text-mono-label uppercase text-ink-faint"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-1 text-h3 font-semibold text-ink">{item.title}</h2>
                  </div>
                </div>
                <div>
                  <p className="text-body font-medium text-ink">{item.summary}</p>
                  <p className="mt-3 max-w-[68ch] text-body text-ink-muted">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
