import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { domainSlugs, domainIcons } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { MonoLabel } from "@/components/ui/MonoLabel";
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
    <>
      <Section label={dict.services.label}>
        <h1 className="text-h1 font-semibold text-ink">{dict.services.heading}</h1>
        <p className="mt-5 max-w-[68ch] text-body-lg text-ink-muted">
          {dict.services.intro}
        </p>
        <div className="mt-16 space-y-16">
          {domainSlugs.map((slug, i) => {
            const Icon = domainIcons[slug];
            const domain = dict.services.domains[slug];
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
                      <h2 className="mt-1 text-h3 font-semibold text-ink">
                        {domain.title}
                      </h2>
                    </div>
                  </div>
                  <div>
                    <p className="max-w-[68ch] text-body font-medium text-ink">
                      {domain.tagline}
                    </p>
                    <p className="mt-5 font-mono text-mono-label uppercase text-ink-muted">
                      {dict.services.capabilitiesLabel}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {domain.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="rounded-sm border border-line bg-surface-raised px-2.5 py-1 text-small text-ink-muted"
                        >
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section raised>
        <h2 className="text-h2 font-semibold text-ink">
          {dict.services.engagement.heading}
        </h2>
        <p className="mt-4 max-w-[68ch] text-body-lg text-ink-muted">
          {dict.services.engagement.intro}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.engagement.models.map((model, i) => (
            <Reveal key={model.title} delay={(i % 3) * 60}>
              <div className="h-full rounded-lg border border-line bg-surface p-6">
                <h3 className="text-h3 font-semibold text-ink">{model.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{model.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-h2 font-semibold text-ink">
          {dict.services.ecosystem.heading}
        </h2>
        <p className="mt-4 max-w-[68ch] text-body-lg text-ink-muted">
          {dict.services.ecosystem.intro}
        </p>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.ecosystem.groups.map((group) => (
            <div key={group.name}>
              <MonoLabel>{group.name}</MonoLabel>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-line bg-surface-raised px-2.5 py-1 text-small text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
