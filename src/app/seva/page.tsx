"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { PageHeader } from "@/components/page-header";
import { useLanguage } from "@/components/language-provider";
import { localizedSevaCauses } from "@/lib/localize";

export default function SevaPage() {
  const { t, language } = useLanguage();
  const sevaCauses = useMemo(() => localizedSevaCauses(language), [language]);

  return (
    <div>
      <PageHeader title={t("sevaTitle")} subtitle={t("sevaSubtitle")} />

      <div className="space-y-5 px-4 pb-6">
        {sevaCauses.map((cause, i) => (
          <article
            key={cause.id}
            id={cause.id}
            className="scroll-mt-24 overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={cause.image}
                alt={cause.title}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${cause.accent}ee, transparent 65%)`,
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                  {cause.subtitle}
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">
                  {cause.title}
                </h2>
              </div>
            </div>
            <div className="bg-secondary px-5 py-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {cause.description}
              </p>
              <Link
                href="/donate"
                className="mt-3 inline-flex text-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                {t("contribute")}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
