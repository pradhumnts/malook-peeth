"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Headphones } from "lucide-react";
import { HScroll } from "@/components/h-scroll";
import { MediaTile } from "@/components/media-tile";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/components/language-provider";
import { localizedKathas } from "@/lib/localize";

export default function KathaPage() {
  const { t, language } = useLanguage();
  const kathas = useMemo(() => localizedKathas(language), [language]);
  const audio = kathas.filter((k) => k.type === "audio");
  const video = kathas.filter((k) => k.type === "video");

  return (
    <div>
      <PageHeader title={t("kathaTitle")} subtitle={t("kathaSubtitle")} />

      <section className="mt-1">
        <SectionHeader title={t("watch")} />
        <HScroll>
          {video.map((k) => (
            <MediaTile
              key={k.id}
              href={`/katha/${k.id}`}
              image={k.image}
              title={k.title}
              subtitle={`${k.episodes} ${t("episodes")} · ${k.duration}`}
              size="lg"
            />
          ))}
        </HScroll>
      </section>

      <section className="mt-7">
        <SectionHeader title={t("listen")} />
        <div className="space-y-1 px-4">
          {audio.map((k) => (
            <Link
              key={k.id}
              href={`/katha/${k.id}`}
              className="flex items-center gap-3 rounded-2xl py-2.5 transition-colors active:bg-secondary"
            >
              <div className="relative size-14 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={k.image}
                  alt={k.title}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">
                  {k.title}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {k.scripture} · {k.duration}
                </p>
              </div>
              <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-ink">
                <Headphones className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-7 px-4 pb-4">
        <SectionHeader title={t("allSeries")} className="px-0" />
        <div className="grid grid-cols-2 gap-3">
          {kathas.map((k) => (
            <MediaTile
              key={k.id}
              href={`/katha/${k.id}`}
              image={k.image}
              title={k.title}
              subtitle={k.subtitle}
              className="w-full"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
