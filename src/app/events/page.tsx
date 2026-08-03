"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { PageHeader } from "@/components/page-header";
import { useLanguage } from "@/components/language-provider";
import { localizedEvents } from "@/lib/localize";

export default function EventsPage() {
  const { t, language } = useLanguage();
  const events = useMemo(() => localizedEvents(language), [language]);
  const next = events[0];

  return (
    <div>
      <PageHeader title={t("eventsTitle")} subtitle={t("eventsSubtitle")} />

      <div className="px-4 pb-6">
        <Link
          href={`/events/${next.id}`}
          className="relative mb-6 block overflow-hidden rounded-[1.75rem]"
        >
          <div className="relative aspect-square">
            <Image
              src={next.image}
              alt={next.title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                {t("nextUp")}
              </p>
              <h2 className="mt-1 font-serif text-3xl leading-tight text-white">
                {next.title}
              </h2>
              <p className="mt-1.5 text-sm text-white/75">
                {next.dates} · {next.location}
              </p>
            </div>
          </div>
        </Link>

        <div className="mt-2">
          <h2 className="mb-1 text-lg font-bold tracking-tight text-ink">
            {t("upcomingEvents")}
          </h2>
          <div className="divide-y divide-border">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="flex items-center gap-4 py-4 transition-opacity first:pt-3 active:opacity-80"
              >
                <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {event.type}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {event.dates}
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-[15px] font-bold leading-snug tracking-tight text-ink">
                    {event.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {event.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
