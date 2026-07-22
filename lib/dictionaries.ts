import type { Locale } from "./i18n";
import de from "@/content/locales/de.json";
import en from "@/content/locales/en.json";

/**
 * Typed dictionary access. The German dictionary is the source of
 * shape truth; the Dictionary type guarantees en stays in sync at
 * compile time (a missing key fails `pnpm typecheck`).
 */
export type Dictionary = typeof de;

const dictionaries: Record<Locale, Dictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
