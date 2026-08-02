"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { kathas } from "@/lib/data";

export function MiniPlayer() {
  const [playing, setPlaying] = useState(false);
  const track = kathas[0];

  return (
    <Link
      href={`/katha/${track.id}/play`}
      className="pointer-events-auto glass flex items-center gap-3 rounded-2xl px-3 py-2.5 shadow-[0_6px_30px_rgba(28,25,23,0.1)] transition-transform active:scale-[0.99]"
    >
      <div className="relative size-11 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={track.image}
          alt={track.title}
          fill
          className="object-cover"
          sizes="44px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold tracking-tight text-ink">
          {track.title}
        </p>
        <p className="truncate text-xs text-muted-foreground">{track.subtitle}</p>
      </div>
      <button
        type="button"
        aria-label={playing ? "Pause" : "Play"}
        onClick={(e) => {
          e.preventDefault();
          setPlaying((p) => !p);
        }}
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform active:scale-90"
      >
        {playing ? (
          <Pause className="size-4 fill-current" />
        ) : (
          <Play className="size-4 fill-current pl-0.5" />
        )}
      </button>
    </Link>
  );
}
