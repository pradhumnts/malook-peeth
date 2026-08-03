"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { HScroll } from "@/components/h-scroll";
import { SectionHeader } from "@/components/section-header";
import { ImageCarousel } from "@/components/image-carousel";
import { useLanguage } from "@/components/language-provider";
import { localizedAbout, localizedBrand } from "@/lib/localize";

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.3 3.5-6.3 3.5Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm6.3-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21.9 7.3a5.5 5.5 0 0 0-1.5-3.9 5.5 5.5 0 0 0-3.9-1.5c-1.5-.1-6-.1-7.5 0a5.5 5.5 0 0 0-3.9 1.5 5.5 5.5 0 0 0-1.5 3.9c-.1 1.5-.1 6 0 7.5a5.5 5.5 0 0 0 1.5 3.9 5.5 5.5 0 0 0 3.9 1.5c1.5.1 6 .1 7.5 0a5.5 5.5 0 0 0 3.9-1.5 5.5 5.5 0 0 0 1.5-3.9c.1-1.5.1-6 0-7.5Zm-2.2 9.1a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.4.4-5.8.4s-4.5.1-5.8-.4a3.3 3.3 0 0 1-1.9-1.9c-.5-1.3-.4-4.4-.4-5.8s-.1-4.5.4-5.8a3.3 3.3 0 0 1 1.9-1.9c1.3-.5 4.4-.4 5.8-.4s4.5-.1 5.8.4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.4.4 5.8s.1 4.5-.4 5.8Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.2 3H21l-6.5 7.4L22 21h-6.2l-4.9-6.4L5.3 21H2.5l7-8L2 3h6.3l4.4 5.8L18.2 3Zm-1.1 16.2h1.7L7 4.7H5.2l11.9 14.5Z" />
    </svg>
  );
}

const socialIcons: Record<
  string,
  (props: { className?: string }) => React.ReactNode
> = {
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: XIcon,
};

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
      <section className="mx-4 mt-8 mb-6 overflow-hidden rounded-3xl border border-border p-5">
        <h2 className="text-xl font-bold tracking-tight text-ink">
          Sri Malook Peeth
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Vrindavan Ashram</p>
        <ul className="mt-4 space-y-3">
          <li className="flex gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-ink" />
            {a.contact.address}
          </li>
          <li className="flex gap-3 text-sm text-muted-foreground">
            <Phone className="mt-0.5 size-4 shrink-0 text-ink" />
            <a href={`tel:${a.contact.phone.replace(/\s/g, "")}`}>
              {a.contact.phone}
            </a>
          </li>
          <li className="flex gap-3 text-sm text-muted-foreground">
            <Mail className="mt-0.5 size-4 shrink-0 text-ink" />
            <a href={`mailto:${a.contact.email}`}>{a.contact.email}</a>
          </li>
          <li className="flex gap-3 text-sm text-muted-foreground">
            <Globe className="mt-0.5 size-4 shrink-0 text-ink" />
            <a
              href={a.contact.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              malookpeeth.com
            </a>
          </li>
        </ul>

        <div className="mt-6 border-t border-border pt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Follow Maharaj Ji
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {a.socials.map((s) => {
              const Icon = socialIcons[s.id];
              return (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-ink transition-colors hover:bg-primary hover:text-white"
                >
                  {Icon ? <Icon className="size-5" /> : null}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
