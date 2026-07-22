import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { serviceSlugs, serviceIcons } from "@/content/services";
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
import { Reveal } from "@/components/motion/Reveal";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <Hero
        brandmark
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

      <Section label={dict.home.servicesLabel} raised>
        <h2 className="text-h2 font-semibold text-ink">{dict.home.servicesHeading}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceSlugs.map((slug, i) => (
            <Reveal key={slug} delay={i * 60}>
              <ServiceCard
                icon={serviceIcons[slug]}
                meta={String(i + 1).padStart(2, "0")}
                title={dict.services.items[slug].title}
                description={dict.services.items[slug].summary}
                href={`/${locale}/services/#${slug}`}
                linkLabel={dict.home.servicesLink}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section label={dict.home.approachLabel}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h2 font-semibold text-ink">
              {dict.home.approachHeading}
            </h2>
            <p className="mt-5 max-w-[60ch] text-body text-ink-muted">
              {dict.home.approachBody}
            </p>
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
