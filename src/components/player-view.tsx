"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ListMusic,
  MoreHorizontal,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  Volume1,
  Share2,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/components/language-provider";
import {
  localizedBrand,
  localizedEpisodes,
  localizedKatha,
} from "@/lib/localize";

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement | string,
        opts: {
          videoId: string;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: (e: { target: { playVideo: () => void } }) => void;
          };
        },
      ) => { destroy: () => void; playVideo: () => void };
      PlayerState?: Record<string, number>;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<void> | null = null;

function loadYoutubeApi() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT?.Player) return Promise.resolve();
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve) => {
    const prior = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prior?.();
      resolve();
    };
    if (!document.querySelector("script[data-yt-api]")) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.dataset.ytApi = "1";
      document.body.appendChild(script);
    }
  });

  return youtubeApiPromise;
}

function YoutubeEmbed({
  videoId,
  title,
  remountKey,
}: {
  videoId: string;
  title: string;
  remountKey: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let player: { destroy: () => void; playVideo: () => void } | null = null;
    let cancelled = false;

    loadYoutubeApi().then(() => {
      if (cancelled || !hostRef.current || !window.YT?.Player) return;

      // Clear previous mount node contents before creating a new player.
      hostRef.current.replaceChildren();
      const mount = document.createElement("div");
      mount.className = "absolute inset-0 h-full w-full";
      hostRef.current.appendChild(mount);

      player = new window.YT.Player(mount, {
        videoId,
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (e) => {
            e.target.playVideo();
          },
        },
      });
    });

    return () => {
      cancelled = true;
      try {
        player?.destroy();
      } catch {
        // Player may already be torn down
      }
    };
  }, [videoId, remountKey]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-black/40 shadow-[0_28px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
      <div
        ref={hostRef}
        className="relative aspect-video w-full [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full"
        title={title}
        aria-label={title}
      />
    </div>
  );
}

export function PlayerView({
  kathaId,
  episodeId,
}: {
  kathaId: string;
  episodeId?: string;
}) {
  const { t, language } = useLanguage();
  const brand = useMemo(() => localizedBrand(language), [language]);
  const katha = useMemo(
    () =>
      localizedKatha(language, kathaId) ??
      localizedKatha(language, "bhagwat-vrindavan")!,
    [language, kathaId],
  );
  const episodes = useMemo(
    () => localizedEpisodes(language, katha),
    [language, katha],
  );
  const episodeIndex = useMemo(() => {
    if (!episodeId) return 0;
    const idx = episodes.findIndex((e) => e.id === episodeId);
    return idx >= 0 ? idx : 0;
  }, [episodeId, episodes]);
  const episode = episodes[episodeIndex] ?? episodes[0];
  const prevEpisode = episodeIndex > 0 ? episodes[episodeIndex - 1] : null;
  const nextEpisode =
    episodeIndex < episodes.length - 1 ? episodes[episodeIndex + 1] : null;

  const isYoutube =
    katha.source === "youtube" || Boolean(episode?.youtubeVideoId);
  const youtubeId =
    episode?.youtubeVideoId ?? katha.youtubeVideoId ?? "ONW0xl3BPVw";

  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState([28]);
  const [volume, setVolume] = useState([70]);

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden bg-[#1a1512]">
      {/* Expanded color wash — fills under status bar like Apple Music */}
      <div className="absolute inset-0">
        <Image
          src={episode.image}
          alt=""
          fill
          priority
          className="scale-[1.65] object-cover blur-[72px] brightness-[0.85] saturate-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/70" />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 28%, rgba(255,255,255,0.18), transparent 70%)",
          }}
          aria-hidden
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex h-full max-w-lg flex-col px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] md:max-w-xl"
      >
        <div className="flex items-center justify-between">
          <Link
            href={`/katha/${katha.id}`}
            className="flex size-10 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-xl"
            aria-label="Close player"
          >
            <ChevronDown className="size-5" />
          </Link>
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Now Playing
            </p>
            <p className="font-serif text-sm italic text-white/85">
              {katha.scripture}
            </p>
          </div>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-xl"
            aria-label="Share"
          >
            <Share2 className="size-4" />
          </button>
        </div>

        {isYoutube ? (
          <>
            <div className="flex flex-1 flex-col justify-center gap-6 py-6">
              <YoutubeEmbed
                videoId={youtubeId}
                title={episode.title}
                remountKey={episode.id}
              />

              <div className="flex items-start justify-between gap-3 px-0.5">
                <div className="min-w-0">
                  <h1 className="truncate text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {episode.title}
                  </h1>
                  <p className="mt-1 truncate text-sm text-white/60 sm:text-base">
                    {brand.shortMaharaj} · {katha.title}
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-md"
                  aria-label={t("more")}
                >
                  <MoreHorizontal className="size-4" />
                </button>
              </div>
            </div>

            <div className="space-y-5 pb-1">
              <div className="flex items-center justify-center gap-14">
                {prevEpisode ? (
                  <Link
                    href={`/katha/${katha.id}/play/${prevEpisode.id}`}
                    className="text-white transition-transform active:scale-90"
                    aria-label="Previous"
                  >
                    <SkipBack className="size-8 fill-white" />
                  </Link>
                ) : (
                  <span className="text-white/25" aria-hidden>
                    <SkipBack className="size-8 fill-current" />
                  </span>
                )}
                {nextEpisode ? (
                  <Link
                    href={`/katha/${katha.id}/play/${nextEpisode.id}`}
                    className="text-white transition-transform active:scale-90"
                    aria-label="Next"
                  >
                    <SkipForward className="size-8 fill-white" />
                  </Link>
                ) : (
                  <span className="text-white/25" aria-hidden>
                    <SkipForward className="size-8 fill-current" />
                  </span>
                )}
              </div>

              <div className="flex items-center justify-center gap-16 pb-2 pt-1">
                <Link
                  href={`/katha/${katha.id}`}
                  className="text-xs font-medium text-white/65 transition-colors hover:text-white"
                >
                  {t("episodes")}
                </Link>
                <span className="rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white/75">
                  YouTube
                </span>
                <span className="text-xs font-medium text-white/65">
                  {episode.number}/{episodes.length}
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-1 items-center justify-center py-5">
              <motion.div
                animate={{ scale: playing ? 1 : 0.96 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative aspect-square w-full max-w-[19.5rem] overflow-hidden rounded-[1.75rem] shadow-[0_28px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
              >
                <Image
                  src={episode.image}
                  alt={episode.title}
                  fill
                  className="object-cover"
                  sizes="400px"
                  priority
                />
              </motion.div>
            </div>

            <div className="space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h1 className="truncate text-2xl font-bold tracking-tight text-white">
                    {episode.title}
                  </h1>
                  <p className="mt-1 truncate text-base text-white/60">
                    {brand.shortMaharaj} · {katha.title}
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-md"
                  aria-label={t("more")}
                >
                  <MoreHorizontal className="size-4" />
                </button>
              </div>

              <div>
                <Slider
                  value={progress}
                  onValueChange={(v) =>
                    setProgress(Array.isArray(v) ? [...v] : [v])
                  }
                  max={100}
                  step={1}
                  className="[&_[data-slot=slider-track]]:h-1 [&_[data-slot=slider-track]]:bg-white/20 [&_[data-slot=slider-range]]:bg-white [&_[data-slot=slider-thumb]]:size-3.5 [&_[data-slot=slider-thumb]]:border-0 [&_[data-slot=slider-thumb]]:bg-white"
                />
                <div className="mt-2 flex items-center justify-between text-[11px] tabular-nums text-white/50">
                  <span>12:48</span>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/75">
                    {episode.type === "video" ? t("video") : t("audio")}
                  </span>
                  <span>-{episode.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-10">
                <button
                  type="button"
                  className="text-white transition-transform active:scale-90"
                  aria-label="Previous"
                >
                  <SkipBack className="size-8 fill-white" />
                </button>
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  className="flex size-16 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition-transform active:scale-90"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? (
                    <Pause className="size-7 fill-current" />
                  ) : (
                    <Play className="size-7 fill-current pl-0.5" />
                  )}
                </button>
                <button
                  type="button"
                  className="text-white transition-transform active:scale-90"
                  aria-label="Next"
                >
                  <SkipForward className="size-8 fill-white" />
                </button>
              </div>

              <div className="flex items-center gap-3 px-1">
                <Volume1 className="size-4 text-white/45" />
                <Slider
                  value={volume}
                  onValueChange={(v) =>
                    setVolume(Array.isArray(v) ? [...v] : [v])
                  }
                  max={100}
                  step={1}
                  className="[&_[data-slot=slider-track]]:h-1.5 [&_[data-slot=slider-track]]:bg-white/20 [&_[data-slot=slider-range]]:bg-white/80 [&_[data-slot=slider-thumb]]:size-3 [&_[data-slot=slider-thumb]]:border-0 [&_[data-slot=slider-thumb]]:bg-white"
                />
                <Volume2 className="size-4 text-white/45" />
              </div>

              <div className="flex items-center justify-center gap-16 pb-2 pt-1">
                <Link
                  href={`/katha/${katha.id}`}
                  className="text-xs font-medium text-white/65 transition-colors hover:text-white"
                >
                  {t("episodes")}
                </Link>
                <button type="button" className="text-white/65" aria-label="Queue">
                  <ListMusic className="size-5" />
                </button>
                <span className="text-xs font-medium text-white/65">
                  {episode.number}/{episodes.length}
                </span>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
