"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  href?: string;
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  href,
  className,
}: SectionHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className={cn("mb-3 flex items-end justify-between gap-3 px-4", className)}>
      <div className="min-w-0">
        <h2 className="text-[22px] font-bold tracking-tight text-ink">{title}</h2>
        {subtitle ? (
          <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {href ? (
        <Link
          href={href}
          className="flex shrink-0 items-center gap-0.5 text-sm font-semibold text-gold"
        >
          {t("seeAll")}
          <ChevronRight className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}
