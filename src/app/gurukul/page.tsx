"use client";

import Image from "next/image";
import { useMemo } from "react";
import { PageHeader } from "@/components/page-header";
import { useLanguage } from "@/components/language-provider";
import { localizedGurukul } from "@/lib/localize";

export default function GurukulPage() {
  const { t, language } = useLanguage();
  const gurukulInfo = useMemo(() => localizedGurukul(language), [language]);

  return (
    <div>
      <PageHeader title={t("gurukulTitle")} subtitle={t("gurukulSubtitle")} />

      <div className="px-4">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/10]">
            <Image
              src={gurukulInfo.image}
              alt="Gurukul"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                {gurukulInfo.subtitle}
              </p>
              <h2 className="mt-1 text-2xl font-bold text-white">
                {gurukulInfo.title}
              </h2>
            </div>
          </div>
        </div>

        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          {gurukulInfo.description}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 px-4 pb-6">
        {gurukulInfo.programs.map((p) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-2xl bg-secondary"
          >
            <div className="relative aspect-square">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="p-3.5">
              <h3 className="text-sm font-bold tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {p.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
