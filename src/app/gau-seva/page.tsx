"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { HScroll } from "@/components/h-scroll";
import { SectionHeader } from "@/components/section-header";
import { SewaList } from "@/components/sewa-list";
import { useLanguage } from "@/components/language-provider";
import { localizedGauSeva, localizedGoshalas } from "@/lib/localize";

export default function GauSevaPage() {
  const { t, language } = useLanguage();
  const g = useMemo(() => localizedGauSeva(language), [language]);
  const goshalas = useMemo(() => localizedGoshalas(language), [language]);

  return (
    <div>
      <PageHeader
        title={t("gauSewaPageTitle")}
        subtitle={t("gauSewaPageSub")}
      />

      {/* Hero */}
      <div className="px-4">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[4/5] sm:aspect-[16/10]">
            <Image
              src={g.heroImage}
              alt="Shri Jadkhor Gaudham"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                Shri Jadkhor Gaudham
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                Purity by Cow&apos;s Sight
              </h2>
              <p className="mt-2 max-w-md font-serif text-base italic leading-relaxed text-white/85">
                {g.quotes[0].sa}
              </p>
              <Link
                href="/donate"
                className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900"
              >
                {t("donateForGauMata")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-4 gap-2 px-4">
        {g.stats.map((s) => (
          <div
            key={s.l}
            className="rounded-2xl bg-secondary px-1.5 py-4 text-center"
          >
            <p className="text-lg font-bold tracking-tight text-ink">{s.n}</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>

      {/* Quote band */}
      <section className="mx-4 mt-8 overflow-hidden rounded-3xl bg-primary px-5 py-7 text-white">
        <p className="font-serif text-xl leading-snug italic text-white/95">
          {g.quotes[1].sa}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{g.quotes[1].en}</p>
      </section>

      {/* About */}
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          {t("aboutJadkhor")}
        </h2>
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gold">
          Est. 2010 · 80G · 12AA · FCRA · CSR
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {g.about.legal}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          {g.about.location}
        </p>
      </section>

      {/* Establishment story */}
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          {t("howItBegan")}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {g.about.establishment}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {g.about.vision}
        </p>
      </section>

      {/* Mission */}
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          {t("missionVision")}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {g.mission}
        </p>
        <p className="mt-5 font-serif text-lg italic leading-snug text-ink">
          {g.quotes[2].sa}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{g.quotes[2].en}</p>
      </section>

      {/* Impact stories */}
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          {t("whatWeDo")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("impactStories")}
        </p>
        <div className="mt-5 space-y-6">
          {g.impact.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-secondary px-4 py-4"
            >
              <h3 className="text-base font-bold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Goshalas */}
      <section className="mt-10">
        <SectionHeader title={t("ourGoshalas")} />
        <HScroll>
          {goshalas.map((gh) => (
            <article
              key={gh.id}
              className="w-72 shrink-0 snap-start overflow-hidden rounded-3xl bg-secondary"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={gh.image}
                  alt={gh.name}
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold text-gold">
                  {gh.cows} {t("cows")}
                </p>
                <h3 className="mt-1 text-base font-bold tracking-tight text-ink">
                  {gh.name}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{gh.place}</p>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {gh.description}
                </p>
              </div>
            </article>
          ))}
        </HScroll>
      </section>

      {/* Gallery */}
      <section className="mt-10">
        <SectionHeader title={t("gallery")} subtitle={t("gallerySub")} />
        <HScroll contentClassName="gap-2.5">
          {g.gallery.map((src, i) => (
            <div
              key={src}
              className="relative h-44 w-36 shrink-0 snap-start overflow-hidden rounded-2xl sm:h-52 sm:w-44"
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>
          ))}
        </HScroll>
      </section>

      {/* Donate CTA */}
      <section className="mt-10 px-4 pb-2">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          {t("supportGauMata")}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("supportGauMataSub")}
        </p>
        <div className="mt-5">
          <SewaList linkToDonate featuredOnly />
        </div>
      </section>

      {/* Products */}
      <section className="mt-10">
        <SectionHeader
          title={t("gaushalaProducts")}
          subtitle={t("gaushalaProductsSub")}
        />
        <HScroll>
          {g.products.map((p) => (
            <article
              key={p.title}
              className="w-44 shrink-0 snap-start overflow-hidden rounded-2xl bg-secondary"
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain p-3"
                  sizes="176px"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-bold leading-snug text-ink">{p.title}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {p.subtitle}
                </p>
              </div>
            </article>
          ))}
        </HScroll>
      </section>

      {/* Contact */}
      <section className="mx-4 mt-10 mb-6 overflow-hidden rounded-3xl border border-border p-5">
        <h2 className="text-xl font-bold tracking-tight text-ink">
          {t("visitConnect")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Shree Jadkhor Gaudham
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-ink" />
            {g.about.address}
          </li>
          <li className="flex gap-3 text-sm text-muted-foreground">
            <Phone className="mt-0.5 size-4 shrink-0 text-ink" />
            <span className="flex flex-col gap-0.5">
              {g.about.phone.split(" · ").map((num) => (
                <a key={num} href={`tel:${num.replace(/\s/g, "")}`}>
                  {num}
                </a>
              ))}
            </span>
          </li>
          <li className="flex gap-3 text-sm text-muted-foreground">
            <Mail className="mt-0.5 size-4 shrink-0 text-ink" />
            <a href={`mailto:${g.about.email}`}>{g.about.email}</a>
          </li>
        </ul>
        <div className="mt-5 flex gap-2">
          <Link
            href="/donate"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
          >
            {t("donateNow")}
          </Link>
          <a
            href="https://jadkhor.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-ink"
          >
            jadkhor.org
          </a>
        </div>
      </section>
    </div>
  );
}
