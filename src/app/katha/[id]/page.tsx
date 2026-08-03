"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  MoreHorizontal,
  Play,
  Plus,
  Video,
  Headphones,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import {
  localizedBrand,
  localizedEpisodes,
  localizedKatha,
} from "@/lib/localize";
import { notFound } from "next/navigation";

export default function KathaSeriesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { t, language } = useLanguage();
  const brand = useMemo(() => localizedBrand(language), [language]);
  const katha = useMemo(() => localizedKatha(language, id), [language, id]);
  const [expanded, setExpanded] = useState(false);

  const episodes = useMemo(
    () => (katha ? localizedEpisodes(language, katha) : []),
    [language, katha],
  );

  if (!katha) {
    notFound();
  }

  const desc = katha.description;
  const needsToggle = desc.length > 85;
  const shortDesc =
    needsToggle && !expanded ? `${desc.slice(0, 85).trim()}…` : desc;

  return (
    <div className="min-h-dvh bg-background">
      {/*
        Apple Podcasts-style hero:
        full poster color-wash (blurred) under the status bar,
        sharp artwork below the safe area so nothing is cropped.
      */}
      <section className="relative overflow-hidden">
        {/* Full immersive color wash from the poster itself */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <Image
            src={katha.image}
            alt=""
            fill
            priority
            className="scale-[1.45] object-cover object-top blur-[56px] brightness-[0.92] saturate-150"
            sizes="100vw"
          />
          {/* Soft top vignette for status-bar glyphs — no hard bar */}
          <div
            className="absolute inset-x-0 top-0 h-36"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
            }}
          />
          {/* Dissolve wash into page white behind the lower hero */}
          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.45) 55%, #ffffff 100%)",
            }}
          />
        </div>

        {/* Foreground: safe-area pad + sharp poster (no -mt cancel) */}
        <div
          className="relative z-10"
          style={{
            paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.5rem)",
          }}
        >
          {/* Controls — clear of the notch, over the wash */}
          <div className="flex items-center justify-between px-4 pb-3">
            <Link
              href="/katha"
              className="flex size-10 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-xl"
              aria-label={t("back")}
            >
              <ChevronLeft className="size-5" />
            </Link>
            <div className="flex items-center gap-0.5 rounded-full bg-black/25 px-1.5 py-1 backdrop-blur-xl">
              <button
                type="button"
                className="flex size-8 items-center justify-center text-white"
                aria-label="Save"
              >
                <Plus className="size-4" />
              </button>
              <button
                type="button"
                className="flex size-8 items-center justify-center text-white"
                aria-label={t("more")}
              >
                <MoreHorizontal className="size-4" />
              </button>
            </div>
          </div>

          {/* Sharp poster — top of art fully visible; soft-blend into wash */}
          <div
            className="relative aspect-[4/5] max-h-[62vh] w-full overflow-hidden sm:aspect-[16/11] sm:max-h-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 5%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 5%, black 100%)",
            }}
          >
            <Image
              src={katha.image}
              alt={katha.title}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />

            {/* Title readability */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%]"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 50%, transparent 100%)",
              }}
              aria-hidden
            />

            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <h1 className="font-serif text-3xl tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-4xl">
                  {katha.title}
                </h1>

                <p className="mx-auto mt-3 max-w-md text-sm leading-snug text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
                  <span className={expanded ? undefined : "line-clamp-2"}>
                    {shortDesc}
                    {needsToggle ? (
                      <>
                        {" "}
                        <button
                          type="button"
                          onClick={() => setExpanded((e) => !e)}
                          className="font-bold uppercase tracking-wide text-white"
                        >
                          {expanded ? t("less") : t("more")}
                        </button>
                      </>
                    ) : null}
                  </span>
                </p>

                <p className="mt-3 flex items-center justify-center gap-2 text-xs text-white/75">
                  <span>
                    {katha.episodes} {t("parts")}
                  </span>
                  <span>·</span>
                  {katha.type === "video" ? (
                    <span className="inline-flex items-center gap-1">
                      <Video className="size-3" /> {t("video")}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <Headphones className="size-3" /> {t("audio")}
                    </span>
                  )}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="relative z-[1] -mt-4 bg-background px-4 pb-8 pt-4">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          {t("episodes")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {brand.shortMaharaj} · {katha.duration} total
        </p>

        <div className="mt-5 divide-y divide-border">
          {episodes.map((ep) => (
            <article key={ep.id} className="flex gap-3 py-5 first:pt-0">
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span>{ep.publishedAgo}</span>
                  <span>·</span>
                  {ep.type === "video" ? (
                    <span className="inline-flex items-center gap-1">
                      <Video className="size-3" /> {t("video")}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <Headphones className="size-3" /> {t("audio")}
                    </span>
                  )}
                </p>
                <h3 className="mt-1 text-[15px] font-bold leading-snug tracking-tight text-ink">
                  {ep.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {ep.description}
                </p>
                <div className="mt-2.5">
                  <Link
                    href={`/katha/${katha.id}/play/${ep.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-ink transition-transform active:scale-95"
                  >
                    <Play className="size-3 fill-current" />
                    {ep.duration}
                  </Link>
                </div>
              </div>
              <Link
                href={`/katha/${katha.id}/play/${ep.id}`}
                className="relative size-[4.5rem] shrink-0 overflow-hidden rounded-2xl bg-secondary"
              >
                <Image
                  src={ep.image}
                  alt={ep.title}
                  fill
                  className="object-cover"
                  sizes="72px"
                />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
