/**
 * i18n core (ADR-002: route-based locales with static export).
 * Every page lives under app/[locale]/ and is statically generated
 * once per locale via generateStaticParams.
 */
export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Human-readable names for the language switcher. */
export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
};
