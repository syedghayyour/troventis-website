import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

type Props = { locale: Locale; dict: Dictionary };

export function Navbar({ locale, dict }: Props) {
  const links = [
    { href: `/${locale}/services/`, label: dict.nav.services },
    { href: `/${locale}/projects/`, label: dict.nav.projects },
    { href: `/${locale}/about/`, label: dict.nav.about },
    { href: `/${locale}/contact/`, label: dict.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href={`/${locale}/`}
          className="inline-flex shrink-0 items-center rounded-sm"
          aria-label={dict.nav.homeAria}
        >
          <Wordmark size={22} />
        </Link>
        <nav aria-label="Main" className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-md px-3 text-small font-medium text-ink-muted transition-colors duration-(--motion-fast) hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} />
          <ThemeToggle labelLight={dict.nav.themeLight} labelDark={dict.nav.themeDark} />
        </div>
      </Container>
      <nav aria-label="Main" className="border-t border-line sm:hidden">
        <Container>
          <ul className="flex items-center gap-1 py-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-md px-3 text-small font-medium text-ink-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
