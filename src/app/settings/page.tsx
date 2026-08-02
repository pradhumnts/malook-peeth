"use client";

import { Check, Languages } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import {
  type AppLanguage,
  useLanguage,
} from "@/components/language-provider";
import { cn } from "@/lib/utils";

const languages: { id: AppLanguage; labelKey: "english" | "hindi"; native: string }[] = [
  { id: "en", labelKey: "english", native: "English" },
  { id: "hi", labelKey: "hindi", native: "हिन्दी" },
];

export default function SettingsPage() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <PageHeader title={t("settingsTitle")} subtitle={t("settingsSubtitle")} />

      <section className="px-4 pt-2">
        <div className="mb-3 flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-ink">
            <Languages className="size-4" strokeWidth={1.75} />
          </span>
          <div>
            <h2 className="text-[15px] font-semibold tracking-tight text-ink">
              {t("language")}
            </h2>
            <p className="text-xs text-muted-foreground">
              {t("languageHint")}
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-secondary">
          {languages.map((lang, i) => {
            const active = language === lang.id;
            return (
              <button
                key={lang.id}
                type="button"
                onClick={() => setLanguage(lang.id)}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors",
                  i > 0 && "border-t border-border/60",
                  active ? "bg-white" : "active:bg-white/60",
                )}
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-semibold text-ink">
                    {lang.native}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t(lang.labelKey)}
                  </span>
                </span>
                {active ? (
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="size-3.5" strokeWidth={2.75} />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
