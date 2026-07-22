"use client";

/**
 * User-controlled carousel: scroll-snap swipe on touch, arrow buttons
 * on pointer devices. No autoplay — Signal §5 forbids self-moving UI.
 * Native scrolling keeps it keyboard- and screen-reader-friendly.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode[];
  prevLabel: string;
  nextLabel: string;
};

export function Carousel({ children, prevLabel, nextLabel }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  function scrollByCard(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <div>
      <ul
        ref={trackRef}
        className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2 [scrollbar-width:none] md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <li key={i} className="w-[85%] flex-none snap-start sm:w-[46%] lg:w-[31%]">
            {child}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label={prevLabel}
          className="inline-flex size-11 items-center justify-center rounded-md border border-line-strong text-ink transition-colors duration-(--motion-fast) hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-40"
        >
          <ArrowLeft size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label={nextLabel}
          className="inline-flex size-11 items-center justify-center rounded-md border border-line-strong text-ink transition-colors duration-(--motion-fast) hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-40"
        >
          <ArrowRight size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
