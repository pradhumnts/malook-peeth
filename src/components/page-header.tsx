"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { easeOut } from "@/components/page-motion";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backHref?: string;
  action?: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function PageHeader({
  title,
  subtitle,
  backHref = "/",
  action,
  className,
  light,
}: PageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: easeOut }}
      className={cn(
        "sticky top-0 z-30 flex items-center gap-3 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]",
        light
          ? "bg-transparent"
          : "bg-background/80 backdrop-blur-xl",
        className,
      )}
    >
      <Link
        href={backHref}
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full transition-colors",
          light
            ? "bg-black/25 text-white backdrop-blur-md"
            : "bg-secondary text-ink",
        )}
        aria-label="Back"
      >
        <ChevronLeft className="size-5" strokeWidth={2} />
      </Link>
      <div className="min-w-0 flex-1">
        <h1
          className={cn(
            "truncate text-lg font-bold tracking-tight",
            light ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              "truncate text-xs",
              light ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      {action}
    </motion.header>
  );
}
