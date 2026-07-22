import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Hero } from "@/components/sections/Hero";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <Hero
      brandmark
      label={dict.home.sectionLabel}
      heading={dict.home.heading}
      tagline={dict.home.tagline}
      subline={dict.home.status}
      primary={{ label: dict.home.ctaPrimary, href: `/${locale}/` }}
      secondary={{ label: dict.home.ctaSecondary, href: `/${locale}/` }}
      assertion={dict.home.assertion}
    />
  );
}
