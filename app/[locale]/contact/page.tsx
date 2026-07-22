import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Mail } from "lucide-react";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <Section label={dict.contact.label} className="min-h-[60vh]">
      <h1 className="text-h1 font-semibold text-ink">{dict.contact.heading}</h1>
      <p className="mt-5 max-w-[60ch] text-body-lg text-ink-muted">
        {dict.contact.intro}
      </p>
      <ul className="mt-12 space-y-4">
        <li>
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex min-h-11 items-center gap-3 rounded-md text-body font-medium text-ink transition-colors duration-(--motion-fast) hover:text-signal"
          >
            <Mail size={20} strokeWidth={1.75} aria-hidden="true" />
            <span className="sr-only">{dict.contact.emailLabel}: </span>
            {site.email}
          </a>
        </li>
        <li>
          <a
            href={site.linkedin}
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-3 rounded-md text-body font-medium text-ink transition-colors duration-(--motion-fast) hover:text-signal"
          >
            <ArrowUpRight size={20} strokeWidth={1.75} aria-hidden="true" />
            {dict.contact.linkedinLabel}
          </a>
        </li>
      </ul>
      <p className="mt-12 max-w-[60ch] text-small text-ink-muted">
        {dict.contact.formNote}
      </p>
    </Section>
  );
}
