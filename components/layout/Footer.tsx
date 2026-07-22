import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";

type Props = { locale: Locale; dict: Dictionary };

export function Footer({ dict }: Props) {
  return (
    <footer className="border-t border-line bg-surface-raised">
      <Container className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <Wordmark size={18} />
        <p className="font-mono text-mono-label text-ink-muted">
          © {new Date().getFullYear()} troventis · {dict.footer.tagline}
        </p>
      </Container>
    </footer>
  );
}
