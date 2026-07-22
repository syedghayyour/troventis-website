import { Wordmark } from "@/components/brand/Wordmark";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";

type Cta = { label: string; href: string };

type Props = {
  label: string;
  heading: string;
  tagline: string;
  subline?: string;
  primary: Cta;
  secondary?: Cta;
  /** Mono assertion badge text; ✓ appended in signal (Signal §6.3). */
  assertion?: string;
  /** Show the wordmark with blinking cursor (homepage only). */
  brandmark?: boolean;
};

export function Hero({
  label,
  heading,
  tagline,
  subline,
  primary,
  secondary,
  assertion,
  brandmark = false,
}: Props) {
  return (
    <Section label={label} className="flex min-h-[70vh] items-center">
      <div className="max-w-[68ch]">
        {brandmark ? (
          <Reveal>
            <Wordmark size={44} blink />
          </Reveal>
        ) : null}
        <Reveal delay={brandmark ? 60 : 0}>
          <h1
            className={`${brandmark ? "mt-8" : ""} text-display font-semibold text-ink`}
          >
            {heading}
          </h1>
        </Reveal>
        <Reveal delay={brandmark ? 120 : 60}>
          <p className="mt-6 text-body-lg text-ink-muted">{tagline}</p>
          {subline ? <p className="mt-2 text-body text-ink-muted">{subline}</p> : null}
        </Reveal>
        <Reveal delay={brandmark ? 180 : 120}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={primary.href} variant="primary">
              {primary.label}
            </Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            ) : null}
            {assertion ? (
              <Badge>
                {assertion}
                <span aria-hidden="true" className="text-signal">
                  ✓
                </span>
              </Badge>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
