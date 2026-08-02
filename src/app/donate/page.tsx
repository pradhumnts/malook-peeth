"use client";

import { PageHeader } from "@/components/page-header";
import { SewaList } from "@/components/sewa-list";
import { useLanguage } from "@/components/language-provider";

export default function DonatePage() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader title={t("donateTitle")} subtitle={t("donateSubtitle")} />

      {/* Hero quote */}
      <div className="mx-4 overflow-hidden rounded-3xl bg-primary px-5 py-7 text-white">
        <p className="font-serif text-2xl leading-snug italic text-white/95">
          &ldquo;Whoever feeds the cow with grass and water every day derives
          the benefit of Ashwamedha yajna.&rdquo;
        </p>
        <p className="mt-3 text-xs text-white/50">
          Brhat Paraasara Smriti 5.26–27
        </p>
      </div>

      <div className="mt-8 px-4 pb-6">
        <h2 className="text-xl font-bold tracking-tight text-ink">
          {t("chooseSeva")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("chooseSevaSub")}
        </p>
        <div className="mt-5">
          <SewaList />
        </div>

        <div className="mt-8 space-y-2 text-center text-[11px] leading-relaxed text-muted-foreground">
          <p>{t("donateTaxNote")}</p>
          <p>
            {t("donateMinNote")}{" "}
            <a
              href="https://jadkhor.org/donationList"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline-offset-2 hover:underline"
            >
              {t("donateOnJadkhor")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
