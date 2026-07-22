import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/sections/LegalPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.imprint.metaTitle,
    description: dict.imprint.metaDescription,
    robots: { index: false },
  };
}

export default async function ImprintPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <LegalPage
      label={dict.imprint.label}
      heading={dict.imprint.heading}
      sections={dict.imprint.sections}
    />
  );
}
