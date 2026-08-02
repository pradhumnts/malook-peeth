"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HeartHandshake,
  Home,
  Library,
  UserRound,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import type { MessageKey } from "@/lib/messages";
import { cn } from "@/lib/utils";

const items: {
  href: string;
  labelKey: MessageKey;
  icon: typeof Home;
}[] = [
  { href: "/", labelKey: "navHome", icon: Home },
  { href: "/katha", labelKey: "navLibrary", icon: Library },
  { href: "/donate", labelKey: "navDonate", icon: HeartHandshake },
  { href: "/about", labelKey: "navAbout", icon: UserRound },
];

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="pointer-events-auto mx-auto w-fit">
      <div className="glass flex items-center gap-2 rounded-full px-2.5 py-2 shadow-[0_8px_40px_rgba(28,25,23,0.12)]">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-w-14 flex-col items-center gap-0.5 rounded-full px-3.5 py-1.5 transition-colors"
            >
              <Icon
                className={cn(
                  "size-5 transition-colors",
                  active ? "text-ink" : "text-muted-foreground",
                )}
                strokeWidth={active ? 2.25 : 1.75}
              />
              <span
                className={cn(
                  "text-[10px] font-medium",
                  active ? "text-ink" : "text-muted-foreground",
                )}
              >
                {t(item.labelKey)}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
