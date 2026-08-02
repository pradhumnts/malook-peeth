"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useMemo } from "react";
import { CalendarDays, MapPin, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { useLanguage } from "@/components/language-provider";
import { localizedEvent, localizedEvents } from "@/lib/localize";

export default function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { t, language } = useLanguage();
  const event = useMemo(() => localizedEvent(language, id), [language, id]);
  const related = useMemo(() => {
    if (!event) return [];
    return localizedEvents(language)
      .filter((e) => e.id !== event.id)
      .slice(0, 3);
  }, [language, event]);

  if (!event) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title={event.type}
        subtitle={t("eventLabel")}
        backHref="/events"
      />

      {/* Hero */}
      <div className="px-4">
        <div className="relative overflow-hidden rounded-[1.75rem]">
          <div className="relative aspect-[16/10]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                {event.type}
              </span>
              <h2 className="mt-2 font-serif text-3xl leading-tight text-white">
                {event.title}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-5 space-y-3 px-4">
        <div className="flex gap-3 text-sm text-muted-foreground">
          <CalendarDays className="mt-0.5 size-4 shrink-0 text-ink" />
          <div>
            <p className="font-semibold text-ink">{event.dates}</p>
            <p className="mt-0.5 text-xs">Dates subject to peeth announcement</p>
          </div>
        </div>
        <div className="flex gap-3 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0 text-ink" />
          <div>
            <p className="font-semibold text-ink">{event.location}</p>
            {event.venue ? (
              <p className="mt-0.5 text-xs leading-relaxed">{event.venue}</p>
            ) : null}
          </div>
        </div>
      </div>

      {/* About */}
      <section className="mt-8 px-4">
        <h3 className="text-xl font-bold tracking-tight text-ink">
          {t("aboutEvent")}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          {event.description}
        </p>
      </section>

      {/* Notes */}
      {event.notes?.length ? (
        <section className="mt-8 px-4">
          <h3 className="text-xl font-bold tracking-tight text-ink">
            {t("notes")}
          </h3>
          <ul className="mt-3 space-y-2">
            {event.notes.map((note) => (
              <li
                key={note}
                className="text-[15px] leading-relaxed text-muted-foreground"
              >
                · {note}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Actions — UI only */}
      <section className="mx-4 mt-8 overflow-hidden rounded-3xl bg-primary px-5 py-6 text-white">
        <p className="font-serif text-2xl leading-snug">Plan your visit</p>
        <p className="mt-2 text-sm leading-relaxed text-white/65">
          Express interest, support seva, or share this event with family and
          fellow devotees.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink"
          >
            I&apos;m interested
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white"
            aria-label="Share"
          >
            <Share2 className="size-3.5" />
            Share
          </button>
        </div>
      </section>

      {/* Related */}
      {related.length ? (
        <section className="mt-10 px-4 pb-8">
          <h3 className="text-xl font-bold tracking-tight text-ink">
            {t("relatedEvents")}
          </h3>
          <div className="mt-4 space-y-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/events/${item.id}`}
                className="flex gap-3.5 rounded-2xl transition-opacity active:opacity-80"
              >
                <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="min-w-0 flex-1 py-0.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.type} · {item.dates}
                  </p>
                  <p className="mt-1 text-[15px] font-bold leading-snug tracking-tight text-ink">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {item.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
