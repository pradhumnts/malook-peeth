"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronRight,
  Flame,
  Menu,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { localizedBrand } from "@/lib/localize";
import { cn } from "@/lib/utils";

function MenuRow({
  href,
  icon,
  title,
  subtitle,
  onNavigate,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="flex w-full items-center gap-3.5 px-4 py-3.5 text-left transition-colors active:bg-secondary/80"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-ink">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold tracking-tight text-ink">
          {title}
        </span>
        {subtitle ? (
          <span className="mt-0.5 block text-xs text-muted-foreground">
            {subtitle}
          </span>
        ) : null}
      </span>
      <ChevronRight className="size-4 shrink-0 text-muted-foreground/70" />
    </Link>
  );
}

function ThemeToggleRow() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      onClick={toggleTheme}
      className="flex w-full items-center gap-3.5 px-4 py-3.5 text-left transition-colors active:bg-secondary/80"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-ink">
        {dark ? (
          <Moon className="size-5" strokeWidth={1.75} />
        ) : (
          <Sun className="size-5" strokeWidth={1.75} />
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold tracking-tight text-ink">
          {t("drawerDarkMode")}
        </span>
        <span className="mt-0.5 block text-xs text-muted-foreground">
          {t("drawerDarkModeSub")}
        </span>
      </span>
      <span
        className={cn(
          "relative h-7 w-12 shrink-0 rounded-full transition-colors",
          dark ? "bg-primary" : "bg-border",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 size-6 rounded-full bg-white shadow-sm transition-transform",
            dark && "translate-x-5",
          )}
        />
      </span>
    </button>
  );
}

export function AppDrawer() {
  const [open, setOpen] = useState(false);
  const { t, language } = useLanguage();
  const brand = useMemo(() => localizedBrand(language), [language]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-ink transition-transform active:scale-95"
        aria-label={t("openMenu")}
      >
        <Menu className="size-5" strokeWidth={1.75} />
      </button>

      <SheetContent
        side="left"
        className="w-[min(100%,20.5rem)] gap-0 p-0 sm:max-w-sm"
      >
        <SheetHeader className="border-b border-border px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
          <div className="flex items-center gap-3 pr-8">
            <div className="relative size-11 overflow-hidden rounded-full bg-primary ring-2 ring-primary/40">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <div className="min-w-0 text-left">
              <SheetTitle className="font-serif text-xl font-normal tracking-tight text-ink">
                {brand.name}
              </SheetTitle>
              <SheetDescription className="text-xs">
                {brand.shortMaharaj}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-2">
          <nav className="px-1">
            <MenuRow
              href="/ekadashi"
              icon={<CalendarDays className="size-5" strokeWidth={1.75} />}
              title={t("drawerEkadashi")}
              subtitle={t("drawerEkadashiSub")}
              onNavigate={() => setOpen(false)}
            />
            <MenuRow
              href="/diksha"
              icon={<Flame className="size-5" strokeWidth={1.75} />}
              title={t("drawerDiksha")}
              subtitle={t("drawerDikshaSub")}
              onNavigate={() => setOpen(false)}
            />
            <ThemeToggleRow />
            <MenuRow
              href="/settings"
              icon={<Settings className="size-5" strokeWidth={1.75} />}
              title={t("drawerSettings")}
              subtitle={t("drawerSettingsSub")}
              onNavigate={() => setOpen(false)}
            />
          </nav>
        </div>

        <div className="mt-auto border-t border-border px-5 py-4">
          <p className="text-[11px] text-muted-foreground">
            {t("drawerFooter")}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
