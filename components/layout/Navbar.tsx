import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

type Props = { locale: Locale; dict: Dictionary };

export function Navbar({ locale, dict }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href={`/${locale}/`}
          className="inline-flex items-center rounded-sm"
          aria-label={dict.nav.homeAria}
        >
          <Wordmark size={22} />
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} />
          <ThemeToggle labelLight={dict.nav.themeLight} labelDark={dict.nav.themeDark} />
        </div>
      </Container>
    </header>
  );
}
