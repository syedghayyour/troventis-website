import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";

type Props = {
  label: string;
  heading: string;
  body: string;
  cta: { label: string; href: string };
};

/** Navy section — the structural blue at full strength (Signal §1). */
export function CTABanner({ label, heading, body, cta }: Props) {
  return (
    <section className="bg-navy py-16 md:py-24">
      <Container>
        <MonoLabel className="mb-4 block [&>span]:text-signal-hover">{label}</MonoLabel>
        <h2 className="max-w-[24ch] text-h1 font-semibold text-on-navy">{heading}</h2>
        <p className="mt-4 max-w-[60ch] text-body-lg text-on-navy/80">{body}</p>
        <div className="mt-8">
          <Button
            href={cta.href}
            variant="secondary"
            className="border-on-navy/40 text-on-navy hover:border-signal hover:text-signal"
          >
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
