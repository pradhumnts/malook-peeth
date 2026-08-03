"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { PageHeader } from "@/components/page-header";
import { ConnectCard } from "@/components/connect-card";
import { HScroll } from "@/components/h-scroll";
import { SectionHeader } from "@/components/section-header";
import { ImageCarousel } from "@/components/image-carousel";
import { useLanguage } from "@/components/language-provider";
import { localizedAbout, localizedBrand } from "@/lib/localize";

export default function AboutPage() {
  const { t, language } = useLanguage();
  const a = useMemo(() => localizedAbout(language), [language]);
  const brand = useMemo(() => localizedBrand(language), [language]);

  return (
    <div>
      <PageHeader title={t("aboutTitle")} subtitle={brand.shortMaharaj} />

      {/* Hero */}
      <div className="px-4">
        <div className="relative overflow-hidden rounded-[1.75rem]">
          <div className="relative aspect-[4/5]">
            <Image
              src={a.image}
              alt={a.shortName}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                Malook Peethadheeshwar
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight text-white">
                {a.shortName}
              </h2>
              <p className="mt-2 text-sm text-white/70">
                {a.birth} · {a.birthplace}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Traits */}
      <div className="mt-5 grid grid-cols-2 gap-2.5 px-4">
        {a.traits.map((trait) => (
          <div key={trait.label} className="rounded-2xl bg-secondary px-3.5 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {trait.label}
            </p>
            <p className="mt-1 text-sm font-semibold leading-snug text-ink">
              {trait.value}
            </p>
          </div>
        ))}
      </div>

      {/* Intro */}
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          Meet Maharaj Ji
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          {a.name}
        </p>
        <div className="mt-5 space-y-2 rounded-2xl bg-secondary px-4 py-4 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-ink">Father · </span>
            {a.father}
          </p>
          <p>
            <span className="font-semibold text-ink">Mother · </span>
            {a.mother}
          </p>
          <p>
            <span className="font-semibold text-ink">{t("guru")} · </span>
            {a.guru}
          </p>
          <p>
            <span className="font-semibold text-ink">{t("languagesLabel")} · </span>
            {a.languages}
          </p>
        </div>
      </section>

      {/* Biography sections */}
      {a.sections.map((section, i) => (
        <section key={section.title} className="mt-10 px-4">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            {section.title}
          </h2>
          {"images" in section && section.images ? (
            <ImageCarousel
              className="mt-5"
              slides={section.images}
              aspectClassName="aspect-[16/10]"
            />
          ) : (
            <div
              className={`relative mt-5 overflow-hidden rounded-3xl ${
                i % 2 === 0 ? "aspect-[4/5]" : "aspect-[3/4]"
              }`}
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          )}
          <div className="mt-5 space-y-4">
            {section.body.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-[15px] leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}

      {/* Gallery */}
      <section className="mt-10">
        <SectionHeader title={t("darshan")} subtitle={t("darshanSub")} />
        <HScroll contentClassName="gap-2.5">
          {a.gallery.map((src, i) => (
            <div
              key={src}
              className="relative h-48 w-36 shrink-0 snap-start overflow-hidden rounded-2xl sm:h-56 sm:w-44"
            >
              <Image
                src={src}
                alt={`Maharaj Ji ${i + 1}`}
                fill
                className="object-cover object-top"
                sizes="176px"
              />
            </div>
          ))}
        </HScroll>
      </section>

      {/* Quote / CTA */}
      <section className="mx-4 mt-10 overflow-hidden rounded-3xl bg-primary px-5 py-7 text-white">
        <p className="font-serif text-2xl leading-snug">
          Listen. Serve. Protect.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/65">
          Explore Katha, join Gau Sewa, or support the peeth&apos;s sacred work
          under Maharaj Ji&apos;s guidance.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/katha"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900"
          >
            {t("kathaTitle")}
          </Link>
          <Link
            href="/gau-seva"
            className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white"
          >
            {t("gauSewa")}
          </Link>
          <Link
            href="/donate"
            className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white"
          >
            {t("donateTitle")}
          </Link>
        </div>
      </section>

      {/* Contact */}
      <ConnectCard className="mx-4 mt-8 mb-6 overflow-hidden rounded-3xl border border-border p-5" />
    </div>
  );
}
