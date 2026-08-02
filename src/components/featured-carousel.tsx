"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { localizedFeaturedMedia } from "@/lib/localize";
import { cn } from "@/lib/utils";

export function FeaturedCarousel() {
  const { language } = useLanguage();
  const media = localizedFeaturedMedia(language);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const syncVideos = useCallback((activeIndex: number) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      video.muted = true;
      if (i === activeIndex) {
        video.currentTime = 0;
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      const slide = el.children[i] as HTMLElement | undefined;
      if (!slide) return;
      el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
      setIndex(i);
      syncVideos(i);
    },
    [syncVideos],
  );

  useEffect(() => {
    syncVideos(index);
  }, [index, syncVideos]);

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
    if (paused || media.length < 2) return;
    const active = media[index];
    const delay = active?.type === "video" ? 7000 : 4500;

    const timer = window.setTimeout(() => {
      goTo((index + 1) % media.length);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [index, paused, goTo, media]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative px-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        ref={scrollerRef}
        className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-[1.75rem]"
      >
        {media.map((item, i) => (
          <div
            key={item.id}
            className="relative aspect-[4/5] min-w-full shrink-0 snap-center snap-always overflow-hidden bg-[#c8c8ce] sm:aspect-[16/10]"
          >
            {item.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                className="absolute inset-0 size-full object-cover"
                src={item.src}
                muted
                playsInline
                loop
                autoPlay={i === index}
                preload="auto"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.caption}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-sm font-medium leading-snug text-white/90">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {media.map((item, i) => (
          <button
            key={item.id}
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
    </motion.section>
  );
}
