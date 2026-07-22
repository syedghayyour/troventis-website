"use client";

/**
 * ADR-007: auto-advancing image slider (sanctioned exception to
 * Signal §5 "nothing loops"). Accessibility contract:
 *  - visible pause/play control (WCAG 2.2.2)
 *  - pauses on hover, on focus within, and when the tab is hidden
 *  - autoplay disabled entirely under prefers-reduced-motion
 * Crossfade only; slides remain in DOM for stable layout.
 */
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type Slide = { node: React.ReactNode; caption: string };

type Props = {
  slides: Slide[];
  pauseLabel: string;
  playLabel: string;
  slideAriaPrefix: string;
  intervalMs?: number;
};

export function ImageSlider({
  slides,
  pauseLabel,
  playLabel,
  slideAriaPrefix,
  intervalMs = 5000,
}: Props) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  const hovered = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) setPlaying(false);
    const onChange = (e: MediaQueryListEvent) => {
      setReduced(e.matches);
      if (e.matches) setPlaying(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!playing || reduced) return;
    const id = setInterval(() => {
      if (!hovered.current && !document.hidden) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, intervalMs);
    return () => clearInterval(id);
  }, [playing, reduced, intervalMs, slides.length]);

  return (
    <figure
      className="relative overflow-hidden rounded-lg border border-line shadow-raise"
      onMouseEnter={() => {
        hovered.current = true;
      }}
      onMouseLeave={() => {
        hovered.current = false;
      }}
      onFocus={() => {
        hovered.current = true;
      }}
      onBlur={() => {
        hovered.current = false;
      }}
      aria-roledescription="carousel"
    >
      <div className="relative aspect-[4/3]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-(--motion-slow) ease-(--ease-standard)"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            {slide.node}
          </div>
        ))}
      </div>
      <figcaption className="sr-only">
        {slideAriaPrefix} {index + 1} / {slides.length}: {slides[index]?.caption}
      </figcaption>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <div className="flex gap-1.5" role="tablist" aria-label={slideAriaPrefix}>
          {slides.map((slide, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${slideAriaPrefix} ${i + 1}: ${slide.caption}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-(--motion-fast) ${
                i === index
                  ? "w-6 bg-[#2DD48F]"
                  : "w-3 bg-[#E6EBF2]/40 hover:bg-[#E6EBF2]/70"
              }`}
            />
          ))}
        </div>
        {!reduced ? (
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? pauseLabel : playLabel}
            className="inline-flex size-9 items-center justify-center rounded-md bg-[#0B1420]/70 text-[#E6EBF2] transition-colors duration-(--motion-fast) hover:text-[#2DD48F]"
          >
            {playing ? (
              <Pause size={16} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Play size={16} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        ) : null}
      </div>
    </figure>
  );
}
