import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";

type Props = { locale: Locale; dict: Dictionary };

export function Footer({ locale, dict }: Props) {
  const legal = [
    { href: `/${locale}/imprint/`, label: dict.nav.imprint },
    { href: `/${locale}/privacy/`, label: dict.nav.privacy },
  ];
  return (
    <footer className="border-t border-line bg-surface-raised">
      <Container className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <Wordmark size={18} />
        <nav aria-label="Legal">
          <ul className="flex items-center gap-4">
            {legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-small text-ink-muted transition-colors duration-(--motion-fast) hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="font-mono text-mono-label text-ink-muted">
          © {new Date().getFullYear()} troventis · {dict.footer.tagline}
        </p>
      </Container>
    </footer>
  );
}
