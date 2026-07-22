import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

type LegalSection = { h: string; p: string[] };

type Props = {
  label: string;
  heading: string;
  updated?: string;
  sections: LegalSection[];
};

/** Shared renderer for imprint/privacy. {email} resolves from site.ts. */
export function LegalPage({ label, heading, updated, sections }: Props) {
  const resolve = (text: string) => text.replaceAll("{email}", site.email);
  return (
    <Section label={label}>
      <h1 className="text-h1 font-semibold text-ink">{heading}</h1>
      {updated ? (
        <p className="mt-3 font-mono text-mono-label uppercase text-ink-muted">
          {updated}
        </p>
      ) : null}
      <div className="mt-12 max-w-[68ch] space-y-10">
        {sections.map((section) => (
          <section key={section.h}>
            <h2 className="text-h3 font-semibold text-ink">{section.h}</h2>
            {section.p.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-body text-ink-muted">
                {resolve(paragraph)}
              </p>
            ))}
          </section>
        ))}
      </div>
    </Section>
  );
}
