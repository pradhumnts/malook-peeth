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
      {/* Hero — blur band under status bar; clean fade into episodes */}
      <section className="relative -mt-[env(safe-area-inset-top,0px)]">
        <div className="relative aspect-[4/5] max-h-[calc(68vh+env(safe-area-inset-top,0px))] w-full overflow-hidden sm:aspect-[16/11] sm:max-h-none">
          {/* Sharp poster */}
          <Image
            src={katha.image}
            alt={katha.title}
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="100vw"
          />

          {/* Blurred poster band at TOP — softens status bar / Dynamic Island */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden"
            style={{
              height: "calc(env(safe-area-inset-top, 0px) + 5.5rem)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
            }}
            aria-hidden
          >
            <Image
              src={katha.image}
              alt=""
              fill
              className="scale-110 object-cover object-top blur-2xl brightness-75 saturate-125"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Bottom darkening for title only — no white wash over metadata */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%]"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
            }}
            aria-hidden
          />

          {/* Top controls — clear of status bar */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 pt-[max(0.85rem,calc(env(safe-area-inset-top)+0.35rem))]">
            <Link
              href="/katha"
              className="flex size-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-xl"
              aria-label={t("back")}
            >
              <ChevronLeft className="size-5" />
            </Link>
            <div className="flex items-center gap-0.5 rounded-full bg-black/30 px-1.5 py-1 backdrop-blur-xl">
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

      {/* Episodes — clean join, no blur overlay */}
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
