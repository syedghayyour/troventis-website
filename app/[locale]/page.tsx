import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { domainSlugs, domainIcons, flagshipDomain } from "@/content/services";
import { projectSlugs } from "@/content/projects";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { StatBlock } from "@/components/sections/StatBlock";
import { CTABanner } from "@/components/sections/CTABanner";
import { Carousel } from "@/components/sections/Carousel";
import { ImageSlider } from "@/components/sections/ImageSlider";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Reveal } from "@/components/motion/Reveal";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <Hero
        label={dict.home.sectionLabel}
        heading={dict.home.heading}
        tagline={dict.home.tagline}
        primary={{ label: dict.home.ctaPrimary, href: `/${locale}/contact/` }}
        secondary={{ label: dict.home.ctaSecondary, href: `/${locale}/services/` }}
        assertion={dict.home.assertion}
        aside={
          <ImageSlider
            pauseLabel={dict.home.slider.pause}
            playLabel={dict.home.slider.play}
            slideAriaPrefix={dict.home.slider.slide}
            slides={["presentation", "partnership", "engineering", "consulting"].map(
              (name, i) => ({
                node: (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`/slides/${name}.webp`}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ),
                caption: dict.home.slider.captions[i] ?? "",
              }),
            )}
          />
        }
      />

      <Section label={dict.home.domainsLabel} raised>
        <h2 className="max-w-[28ch] text-h2 font-semibold text-ink">
          {dict.home.domainsHeading}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {domainSlugs.map((slug, i) => (
            <Reveal
              key={slug}
              delay={i * 60}
              className={
                slug === flagshipDomain ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""
              }
            >
              <div className="relative h-full">
                {slug === flagshipDomain ? (
                  <MonoLabel className="absolute -top-3 left-4 z-10 bg-surface-raised px-2">
                    {dict.home.flagship}
                  </MonoLabel>
                ) : null}
                <ServiceCard
                  icon={domainIcons[slug]}
                  meta={String(i + 1).padStart(2, "0")}
                  title={dict.services.domains[slug].title}
                  description={dict.services.domains[slug].tagline}
                  href={`/${locale}/services/#${slug}`}
                  linkLabel={dict.home.domainsLink}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section label={dict.home.thesisLabel}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-[24ch] text-h2 font-semibold text-ink">
              {dict.home.thesisHeading}
            </h2>
            <div className="mt-5 space-y-4">
              {dict.home.thesisBody.map((paragraph) => (
                <p key={paragraph} className="max-w-[60ch] text-body text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="grid content-center gap-8 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <StatBlock
              value={10}
              suffix={dict.home.stats.years.suffix}
              label={dict.home.stats.years.label}
              verified
            />
            <StatBlock value={2026} label={dict.home.stats.founded.label} />
            <StatBlock value={5} label={dict.home.stats.disciplines.label} />
          </div>
        </div>
      </Section>

      <Section label={dict.home.approachLabel} raised>
        <h2 className="text-h2 font-semibold text-ink">{dict.home.approachHeading}</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {dict.home.approachSteps.map((step, i) => (
            <Reveal key={step.name} delay={i * 60}>
              <li className="h-full border-t-2 border-line pt-4">
                <p className="font-mono text-mono-label uppercase text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-h3 font-semibold text-ink">{step.name}</p>
                <p className="mt-1 text-small text-ink-muted">{step.line}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section label={dict.home.whyLabel}>
        <h2 className="text-h2 font-semibold text-ink">{dict.home.whyHeading}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.why.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="h-full rounded-lg border border-line bg-surface p-6">
                <h3 className="text-h3 font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section label={dict.home.projectsLabel} raised>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-h2 font-semibold text-ink">{dict.home.projectsHeading}</h2>
          <Button href={`/${locale}/projects/`} variant="ghost">
            {dict.home.projectsLink} →
          </Button>
        </div>
        <div className="mt-10">
          <Carousel
            prevLabel={dict.home.carousel.prev}
            nextLabel={dict.home.carousel.next}
          >
            {projectSlugs.map((slug) => (
              <ProjectCard
                key={slug}
                title={dict.projects.items[slug].title}
                summary={dict.projects.items[slug].summary}
                tags={[...dict.projects.items[slug].tags]}
                href={`/${locale}/projects/`}
              />
            ))}
          </Carousel>
        </div>
      </Section>

      <CTABanner
        label={dict.home.ctaBanner.label}
        heading={dict.home.ctaBanner.heading}
        body={dict.home.ctaBanner.body}
        cta={{ label: dict.home.ctaBanner.cta, href: `/${locale}/contact/` }}
      />
    </>
  );
}
