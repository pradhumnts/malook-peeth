"use client";

import { useMemo } from "react";
import { CalendarDays, Clock3, Sunrise } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useLanguage } from "@/components/language-provider";
import { daysUntilEkadashi, getNextEkadashi } from "@/lib/data";
import {
  localizedEkadashiCalendar,
  localizedEkadashiGuide,
} from "@/lib/localize";

function formatDisplayDate(iso: string, language: "en" | "hi") {
  return new Date(`${iso}T00:00:00`).toLocaleDateString(
    language === "hi" ? "hi-IN" : "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      numberingSystem: "latn",
    },
  );
}

export default function EkadashiPage() {
  const { t, language } = useLanguage();
  const calendar = useMemo(
    () => localizedEkadashiCalendar(language),
    [language],
  );
  const guide = useMemo(() => localizedEkadashiGuide(language), [language]);
  const nextEn = useMemo(() => getNextEkadashi(), []);
  const next = useMemo(
    () => calendar.find((e) => e.id === nextEn.id) ?? nextEn,
    [calendar, nextEn],
  );
  const daysLeft = useMemo(() => daysUntilEkadashi(next), [next]);
  const upcoming = useMemo(() => {
    const idx = calendar.findIndex((e) => e.id === next.id);
    return calendar.slice(Math.max(0, idx), idx + 4);
  }, [calendar, next]);

  return (
    <div>
      <PageHeader
        title={t("ekadashiTitle")}
        subtitle={t("ekadashiSubtitle")}
      />

      {/* Next Ekadashi */}
      <section className="px-4">
        <div className="overflow-hidden rounded-3xl bg-ink text-white">
          <div className="bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.35),_transparent_55%)] px-5 pb-6 pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
              {t("nextEkadashi")}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              {next.name}
            </h2>
            <p className="mt-1 text-sm text-white/65">
              {next.paksha} · {next.month}
            </p>

            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-white/70">
                  {next.day} · {formatDisplayDate(next.date, language)}
                </p>
                {next.note ? (
                  <p className="mt-1 max-w-xs text-xs leading-relaxed text-white/50">
                    {next.note}
                  </p>
                ) : null}
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold tabular-nums leading-none">
                  {daysLeft}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/60">
                  {daysLeft === 0
                    ? t("today")
                    : daysLeft === 1
                      ? t("tomorrow")
                      : t("daysAway")}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 rounded-2xl bg-white/10 p-4">
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
                    {t("tithiBegins")}
                  </p>
                  <p className="mt-0.5 text-sm font-medium">{next.tithiBegins}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
                    {t("tithiEnds")}
                  </p>
                  <p className="mt-0.5 text-sm font-medium">{next.tithiEnds}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Sunrise className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
                    {t("parana")}
                  </p>
                  <p className="mt-0.5 text-sm font-medium">
                    {next.paranaDate} · {next.paranaTime}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-white/40">
              Timings are indicative for India. Please confirm with your local
              panchang before observing the vrat.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming list */}
      <section className="mt-8 px-4">
        <h2 className="text-xl font-bold tracking-tight text-ink">
          {t("upcomingEkadashis")}
        </h2>
        <div className="mt-3 divide-y divide-border rounded-2xl border border-border">
          {upcoming.map((e) => {
            const days = daysUntilEkadashi(e);
            return (
              <div key={e.id} className="flex items-center gap-3 px-4 py-3.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <CalendarDays className="size-4 text-ink" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">
                    {e.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {e.day} · {formatDisplayDate(e.date, language)}
                  </p>
                </div>
                <p className="shrink-0 text-xs font-medium text-gold">
                  {days === 0
                    ? t("today")
                    : days === 1
                      ? t("tomorrow")
                      : `${days}d`}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          {guide.about.title}
        </h2>
        <div className="mt-4 space-y-4">
          {guide.about.paragraphs.map((p) => (
            <p
              key={p.slice(0, 48)}
              className="text-[15px] leading-relaxed text-muted-foreground"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Significance */}
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          {guide.significance.title}
        </h2>
        <div className="mt-4 space-y-3">
          {guide.significance.points.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl bg-secondary px-4 py-4"
            >
              <h3 className="text-sm font-bold text-ink">{point.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Guidelines */}
      <section className="mt-10 px-4 pb-8">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          {guide.guidelines.title}
        </h2>

        <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {t("observe")}
        </h3>
        <div className="mt-3 space-y-3">
          {guide.guidelines.types.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border px-4 py-4"
            >
              <p className="text-sm font-bold text-ink">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          What to do
        </h3>
        <ul className="mt-3 space-y-2.5">
          {guide.guidelines.do.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {t("avoid")}
        </h3>
        <ul className="mt-3 space-y-2.5">
          {guide.guidelines.avoid.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/30" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
