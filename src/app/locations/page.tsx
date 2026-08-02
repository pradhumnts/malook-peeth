"use client";

import Image from "next/image";
import { useMemo } from "react";
import { MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useLanguage } from "@/components/language-provider";
import { localizedLocations } from "@/lib/localize";

export default function LocationsPage() {
  const { t, language } = useLanguage();
  const locations = useMemo(() => localizedLocations(language), [language]);

  return (
    <div>
      <PageHeader title={t("ashramsTitle")} subtitle={t("ashramsSubtitle")} />

      <div className="space-y-6 px-4 pb-6">
        {locations.map((loc, i) => (
          <article
            key={loc.id}
            id={loc.id}
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-border"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h2 className="text-xl font-bold tracking-tight text-white">
                  {loc.name}
                </h2>
                <p className="mt-1 flex items-start gap-1 text-xs text-white/75">
                  <MapPin className="mt-0.5 size-3 shrink-0" />
                  {loc.place}
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {loc.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {loc.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
