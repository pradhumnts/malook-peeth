"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/components/language-provider";
import { SewaRow } from "@/components/sewa-row";
import { type JadkhorSewa } from "@/lib/data";
import { localizedSewas } from "@/lib/localize";

type SewaListProps = {
  /** Link rows to /donate when shown on another page */
  linkToDonate?: boolean;
  /** Show only the flexible any-amount card */
  featuredOnly?: boolean;
};

function GroupList({
  groupId,
  linkToDonate,
  sewas,
}: {
  groupId: JadkhorSewa["group"];
  linkToDonate?: boolean;
  sewas: JadkhorSewa[];
}) {
  const items = sewas.filter((s) => s.group === groupId);
  if (!items.length) return null;

  return (
    <div className="divide-y divide-border rounded-2xl border border-border">
      {items.map((s) => (
        <SewaRow
          key={s.id}
          name={s.name}
          detail={s.detail}
          amount={s.amount}
          href={linkToDonate ? "/donate" : undefined}
        />
      ))}
    </div>
  );
}

export function SewaList({ linkToDonate, featuredOnly }: SewaListProps) {
  const { language, t } = useLanguage();
  const { sewas, groups, any } = useMemo(
    () => localizedSewas(language),
    [language],
  );

  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-3xl bg-ink text-white">
        <div className="bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.35),_transparent_55%)] px-5 py-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
            {t("flexibleOffering")}
          </p>
          <div className="mt-3 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-2xl font-bold tracking-tight">{any.name}</h3>
              <p className="mt-1 text-sm text-white/65">{any.detail}</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
              <p className="text-lg font-bold tabular-nums leading-none text-gold">
                {any.amount.replace("Min ", "").replace("न्यूनतम ", "")}
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/60">
                {t("minimum")}
              </p>
            </div>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-white/40">
            {t("anyAmountBlurb")}
          </p>
          {linkToDonate ? (
            <Link
              href="/donate"
              className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink"
            >
              {t("giveNow")}
            </Link>
          ) : null}
        </div>
      </div>

      {!featuredOnly
        ? groups.map((group) => (
            <section key={group.id}>
              <h3 className="text-xl font-bold tracking-tight text-ink">
                {group.title}
              </h3>
              <div className="mt-3">
                <GroupList
                  groupId={group.id}
                  linkToDonate={linkToDonate}
                  sewas={sewas}
                />
              </div>
            </section>
          ))
        : null}
    </div>
  );
}
