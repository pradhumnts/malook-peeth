import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type EventCardProps = {
  href: string;
  image: string;
  title: string;
  type: string;
  location: string;
  dates: string;
  className?: string;
};

export function EventCard({
  href,
  image,
  title,
  type,
  location,
  dates,
  className,
}: EventCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block w-72 shrink-0 snap-start overflow-hidden rounded-3xl",
        className,
      )}
    >
      <div className="relative aspect-[3/4]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="288px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <span className="mb-2 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {type}
          </span>
          <h3 className="text-xl font-bold leading-tight tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-1 text-xs text-white/70">{location}</p>
          <p className="mt-0.5 text-xs font-medium text-white/90">{dates}</p>
        </div>
      </div>
    </Link>
  );
}
