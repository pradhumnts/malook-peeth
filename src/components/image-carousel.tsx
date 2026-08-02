"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  src: string;
  caption?: string;
};

type ImageCarouselProps = {
  slides: CarouselSlide[];
  className?: string;
  aspectClassName?: string;
};

export function ImageCarousel({
  slides,
  className,
  aspectClassName = "aspect-[16/10]",
}: ImageCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.children[i] as HTMLElement | undefined;
    if (!slide) return;
    el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setIndex(i);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      const mid = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let best = Infinity;
      children.forEach((child, i) => {
        const center = child.offsetLeft + child.clientWidth / 2;
        const dist = Math.abs(center - mid);
        if (dist < best) {
          best = dist;
          closest = i;
        }
      });
      setIndex(closest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const timer = window.setInterval(() => {
      goTo((index + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [index, paused, goTo, slides.length]);

  if (!slides.length) return null;

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        ref={scrollerRef}
        className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-3xl"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={cn(
              "relative min-w-full shrink-0 snap-center snap-always overflow-hidden bg-secondary",
              aspectClassName,
            )}
          >
            <Image
              src={slide.src}
              alt={slide.caption ?? `Slide ${i + 1}`}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
            />
            {slide.caption ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white/90">
                  {slide.caption}
                </p>
              </>
            ) : null}
          </div>
        ))}
      </div>

      {slides.length > 1 ? (
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-5 bg-primary" : "w-1.5 bg-primary/20",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
