"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useLanguage } from "@/components/language-provider";
import { aboutMaharaj } from "@/lib/data";
import {
  localizedBrand,
  localizedDiksha,
} from "@/lib/localize";
import { cn } from "@/lib/utils";

function storageKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `malook-diksha-practice-${y}-${m}-${day}`;
}

export default function DikshaPage() {
  const { t, language } = useLanguage();
  const diksha = useMemo(() => localizedDiksha(language), [language]);
  const brand = useMemo(() => localizedBrand(language), [language]);
  const practices = diksha.practices;
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey());
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      // ignore
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(storageKey(), JSON.stringify(done));
  }, [done, ready]);

  const completed = useMemo(
    () => practices.filter((p) => done[p.id]).length,
    [done, practices],
  );

  function toggle(id: string) {
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div>
      <PageHeader
        title={t("dikshaTitle")}
        subtitle={t("dikshaSubtitle")}
        backHref="/"
      />

      {/* Hero — Maharaj Ji */}
      <div className="px-4">
        <div className="relative overflow-hidden rounded-[1.75rem]">
          <div className="relative aspect-[4/5]">
            <Image
              src={aboutMaharaj.image}
              alt={aboutMaharaj.shortName}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                {diksha.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight text-white">
                {diksha.title}
              </h2>
              <p className="mt-2 text-sm text-white/70">
                {diksha.underGuidance(brand.shortMaharaj)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-8">
        {/* Today's practice */}
        <div className="mt-8 flex items-end justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-ink">
              {t("dailyPractice")}
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Mark what you complete today
            </p>
          </div>
          <p className="text-sm font-semibold tabular-nums text-ink">
            {completed}/{practices.length}
          </p>
        </div>

        <div className="mt-4 space-y-2.5">
          {practices.map((item) => {
            const checked = Boolean(done[item.id]);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggle(item.id)}
                className={cn(
                  "flex w-full items-start gap-3.5 rounded-2xl border px-3.5 py-3.5 text-left transition-colors",
                  checked
                    ? "border-ink/10 bg-secondary"
                    : "border-border bg-background active:bg-secondary/50",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors",
                    checked
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-background text-transparent",
                  )}
                >
                  <Check className="size-3.5" strokeWidth={2.75} />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block text-[15px] font-semibold tracking-tight",
                      checked ? "text-ink/55 line-through" : "text-ink",
                    )}
                  >
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                    {item.subtitle}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Code of conduct */}
        <h3 className="mt-10 text-xl font-bold tracking-tight text-ink">
          {t("codeOfConduct")}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Required for initiated Vaishnavas
        </p>

        <ol className="mt-5 space-y-4">
          {diksha.codeOfConduct.map((rule, i) => (
            <li key={rule.slice(0, 32)} className="flex gap-3.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-ink">
                {i + 1}
              </span>
              <p className="pt-0.5 text-[15px] leading-relaxed text-muted-foreground">
                {rule}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
