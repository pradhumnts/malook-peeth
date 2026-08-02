import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

type SewaRowProps = {
  name: string;
  detail: string;
  amount: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export function SewaRow({
  name,
  detail,
  amount,
  href,
  onClick,
  className,
}: SewaRowProps) {
  const content = (
    <>
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
        <HeartHandshake className="size-4 text-ink" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{name}</p>
        <p className="text-xs text-muted-foreground">{detail}</p>
      </div>
      <p className="shrink-0 text-sm font-semibold tabular-nums text-gold">
        {amount}
      </p>
    </>
  );

  const classes = cn(
    "flex w-full items-center gap-3 px-4 py-3.5 text-left transition-opacity active:opacity-70",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
