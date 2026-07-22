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
    title: dict.privacy.metaTitle,
    description: dict.privacy.metaDescription,
    robots: { index: false },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <LegalPage
      label={dict.privacy.label}
      heading={dict.privacy.heading}
      updated={dict.privacy.updated}
      sections={dict.privacy.sections}
    />
  );
}
