"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n";

type Props = { current: Locale };

export function LanguageSwitcher({ current }: Props) {
  const pathname = usePathname() ?? `/${current}/`;

  function pathFor(locale: Locale) {
    const parts = pathname.split("/");
    parts[1] = locale;
    return parts.join("/") || `/${locale}/`;
  }

  return (
    <nav aria-label="Language">
      <ul className="flex items-center gap-1">
        {locales.map((locale) => {
          const active = locale === current;
          return (
            <li key={locale}>
              <Link
                href={pathFor(locale)}
                lang={locale}
                aria-current={active ? "true" : undefined}
                className={`inline-flex min-h-11 items-center rounded-md px-2.5 font-mono text-mono-label uppercase transition-colors duration-(--motion-fast) ${
                  active ? "text-signal" : "text-ink-muted hover:text-ink"
                }`}
              >
                {locale}
                <span className="sr-only">, {localeNames[locale]}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
