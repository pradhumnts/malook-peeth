import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ExploreTileProps = {
  href: string;
  title: string;
  subtitle: string;
  image: string;
  className?: string;
};

export function ExploreTile({
  href,
  title,
  subtitle,
  image,
  className,
}: ExploreTileProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative w-[calc((100vw-2.5rem)/2.25)] max-w-52 shrink-0 snap-start overflow-hidden rounded-2xl bg-secondary",
        className,
      )}
    >
      <div className="relative aspect-[3/4]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 45vw, 208px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5">
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-tight text-white">{title}</p>
            <p className="text-[11px] text-white/70">{subtitle}</p>
          </div>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
            <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
