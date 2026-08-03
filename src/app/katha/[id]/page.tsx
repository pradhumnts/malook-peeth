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
        In-flow layout (no -mt / padding cancel):
        1) blurred poster band under the status bar
        2) sharp poster below it — top of art fully visible
        3) controls positioned below the safe area so they stay tappable
      */}
      <section className="relative">
        {/* Blurred poster extension — paints under status bar / Dynamic Island */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            height: "calc(env(safe-area-inset-top, 0px) + 0.75rem)",
          }}
          aria-hidden
        >
          <Image
            src={katha.image}
            alt=""
            fill
            priority
            className="scale-125 object-cover object-top blur-2xl brightness-[0.7] saturate-125"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
          {/* Feather into the sharp poster */}
          <div
            className="absolute inset-x-0 bottom-0 h-10"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(0,0,0,0.35))",
            }}
          />
        </div>

        {/* Controls — always below the status bar, never inside it */}
        <div
          className="absolute inset-x-0 z-30 flex items-center justify-between px-4"
          style={{
            top: "calc(env(safe-area-inset-top, 0px) + 0.5rem)",
          }}
        >
          <Link
            href="/katha"
            className="flex size-10 items-center justify-center rounded-full bg-black/35 text-white shadow-sm backdrop-blur-xl"
            aria-label={t("back")}
          >
            <ChevronLeft className="size-5" />
          </Link>
          <div className="flex items-center gap-0.5 rounded-full bg-black/35 px-1.5 py-1 shadow-sm backdrop-blur-xl">
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

        {/* Sharp poster — full top of artwork visible (not under the notch) */}
        <div className="relative aspect-[4/5] max-h-[68vh] w-full overflow-hidden sm:aspect-[16/11] sm:max-h-none">
          <Image
            src={katha.image}
            alt={katha.title}
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />

          {/* Bottom darkening for title */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%]"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
            }}
            aria-hidden
          />

          {/* Overlay content */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-8 text-center">
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
      </section>

      {/* Episodes */}
      <section className="bg-background px-4 pb-8 pt-6">
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
