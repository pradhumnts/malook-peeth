"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Bell, ChevronRight } from "lucide-react";
import { AppDrawer } from "@/components/app-drawer";
import { ConnectCard } from "@/components/connect-card";
import { EventCard } from "@/components/event-card";
import { ExploreTile } from "@/components/explore-tile";
import { FeaturedCarousel } from "@/components/featured-carousel";
import { HScroll } from "@/components/h-scroll";
import { MediaTile } from "@/components/media-tile";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/components/language-provider";
import {
  localizedEvents,
  localizedExploreLinks,
  localizedKathas,
} from "@/lib/localize";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HomePage() {
  const { t, language } = useLanguage();
  const events = useMemo(() => localizedEvents(language), [language]);
  const kathas = useMemo(() => localizedKathas(language), [language]);
  const explore = useMemo(() => localizedExploreLinks(language), [language]);

  return (
    <div className="pt-[max(0.5rem,env(safe-area-inset-top))]">
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between px-4 py-3"
      >
        <AppDrawer />
        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-ink transition-transform active:scale-95"
          >
            {t("contribute")}
          </Link>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-full bg-secondary text-ink"
            aria-label={t("notifications")}
          >
            <Bell className="size-4" strokeWidth={1.75} />
          </button>
        </div>
      </motion.header>

      <div className="mt-1">
        <FeaturedCarousel />
      </div>

      <motion.section
        custom={1}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-8"
      >
        <SectionHeader
          title={t("upcomingEvents")}
          subtitle={t("upcomingEventsSub")}
          href="/events"
        />
        <HScroll>
          {events.map((event) => (
            <EventCard
              key={event.id}
              href={`/events/${event.id}`}
              image={event.image}
              title={event.title}
              type={event.type}
              location={event.location}
              dates={event.dates}
            />
          ))}
        </HScroll>
      </motion.section>

      <motion.section
        custom={2}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-8"
      >
        <SectionHeader
          title={t("listenWatch")}
          subtitle={t("listenWatchSub")}
          href="/katha"
        />
        <HScroll>
          {kathas.map((k) => (
            <MediaTile
              key={k.id}
              href={`/katha/${k.id}`}
              image={k.image}
              title={k.title}
              subtitle={`${k.type === "video" ? t("video") : t("audio")} · ${k.episodes} ${t("parts")}`}
            />
          ))}
        </HScroll>
      </motion.section>

      <motion.section
        custom={3}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-8 px-4"
      >
        <SectionHeader
          title={t("gauSewa")}
          subtitle={t("gauSewaHomeSub")}
          href="/gau-seva"
          className="px-0"
        />
        <Link
          href="/gau-seva"
          className="group block overflow-hidden rounded-3xl bg-secondary"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/gau-6.webp"
              alt="Jadkhor Gaudham · Gau Mata"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <div className="flex items-end gap-3 px-5 py-4">
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                Jadkhor Gaudham
              </p>
              <h3 className="mt-1 text-xl font-bold tracking-tight text-ink">
                {t("gauSewaHomeHeadline")}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {t("gauSewaHomeMeta")}
              </p>
            </div>
            <span className="mb-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform group-hover:translate-x-0.5 group-active:scale-95">
              <ChevronRight className="size-4" strokeWidth={2.25} />
            </span>
          </div>
        </Link>
      </motion.section>

      <motion.section
        custom={4}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-8"
      >
        <SectionHeader title={t("explore")} />
        <HScroll>
          {explore.map((link) => (
            <ExploreTile key={link.href} {...link} />
          ))}
        </HScroll>
      </motion.section>

      <motion.section
        custom={5}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-8 px-4 pb-4"
      >
        <SectionHeader
          title={t("connect")}
          subtitle={t("connectSub")}
          className="px-0"
        />
        <ConnectCard />
      </motion.section>
    </div>
  );
}
