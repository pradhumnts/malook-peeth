"use client";

import Image from "next/image";
import { useMemo } from "react";
import { PageHeader } from "@/components/page-header";
import { ImageCarousel } from "@/components/image-carousel";
import { useLanguage } from "@/components/language-provider";
import { localizedPeeth } from "@/lib/localize";

export default function PeethPage() {
  const { t, language } = useLanguage();
  const peethInfo = useMemo(() => localizedPeeth(language), [language]);

  return (
    <div>
      <PageHeader title={t("peethTitle")} subtitle={t("peethSubtitle")} />

      <div className="px-4">
        <ImageCarousel slides={peethInfo.images} aspectClassName="aspect-[16/10]" />
      </div>

      <div className="mt-8 space-y-8 px-4 pb-6">
        {peethInfo.sections.map((section) => (
          <article key={section.title}>
            <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-ink">
              {section.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {section.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
