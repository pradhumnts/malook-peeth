import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MediaTileProps = {
  href: string;
  image: string;
  title: string;
  subtitle?: string;
  badge?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "w-36",
  md: "w-44",
  lg: "w-56",
};

export function MediaTile({
  href,
  image,
  title,
  subtitle,
  badge,
  size = "md",
  className,
}: MediaTileProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group shrink-0 snap-start",
        sizes[size],
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 44vw, 220px"
        />
        {badge ? (
          <span className="absolute left-2 top-2 rounded-md bg-black/50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-2 line-clamp-2 text-sm font-semibold leading-snug tracking-tight text-ink">
        {title}
      </p>
      {subtitle ? (
        <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Link>
  );
}
