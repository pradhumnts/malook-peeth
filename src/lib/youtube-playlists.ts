import vinayPatrikaItems from "@/lib/vinay-patrika-playlist.json";
import mahabharatItems from "@/lib/mahabharat-playlist.json";
import bhaktmaalItems from "@/lib/bhaktmaal-playlist.json";
import bhagwatItems from "@/lib/bhagwat-playlist.json";

export type YoutubePlaylistItem = {
  id: string;
  title: string;
  duration: string;
  /** ISO publish / upload datetime from YouTube. */
  publishedAt?: string;
  /** Optional bilingual titles (e.g. Vinay Patrika pad names). */
  titleHi?: string;
  titleEn?: string;
  padNumbers?: number[];
};

/** Resolve display title for the active app language. */
export function youtubeItemTitle(
  item: YoutubePlaylistItem,
  lang: "en" | "hi" = "en",
): string {
  if (lang === "hi") {
    return item.titleHi || item.title;
  }
  return item.titleEn || item.title;
}

/** Relative publish label from a YouTube ISO datetime. */
export function formatPublishedAgo(
  publishedAt: string | undefined,
  lang: "en" | "hi" = "en",
): string {
  if (!publishedAt) return lang === "hi" ? "—" : "—";
  const then = Date.parse(publishedAt);
  if (Number.isNaN(then)) return lang === "hi" ? "—" : "—";

  const seconds = Math.max(0, Math.floor((Date.now() - then) / 1000));
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (lang === "hi") {
    if (years >= 1) return years === 1 ? "1 वर्ष पहले" : `${years} वर्ष पहले`;
    if (months >= 1) return months === 1 ? "1 माह पहले" : `${months} माह पहले`;
    if (weeks >= 1)
      return weeks === 1 ? "1 सप्ताह पहले" : `${weeks} सप्ताह पहले`;
    if (days >= 1) return days === 1 ? "1 दिन पहले" : `${days} दिन पहले`;
    if (hours >= 1) return hours === 1 ? "1 घंटे पहले" : `${hours} घंटे पहले`;
    if (minutes >= 1)
      return minutes === 1 ? "1 मिनट पहले" : `${minutes} मिनट पहले`;
    return "अभी";
  }

  if (years >= 1) return years === 1 ? "1y ago" : `${years}y ago`;
  if (months >= 1) return months === 1 ? "1mo ago" : `${months}mo ago`;
  if (weeks >= 1) return weeks === 1 ? "1w ago" : `${weeks}w ago`;
  if (days >= 1) return days === 1 ? "1d ago" : `${days}d ago`;
  if (hours >= 1) return hours === 1 ? "1h ago" : `${hours}h ago`;
  if (minutes >= 1) return minutes === 1 ? "1m ago" : `${minutes}m ago`;
  return "just now";
}

export const kathaYoutubePlaylists: Record<
  string,
  { playlistId: string; playlistUrl: string; items: YoutubePlaylistItem[] }
> = {
  "bhagwat-vrindavan": {
    playlistId: "PL1nG3c-FqOQe6wmVdgGf1aDdPvvNzadxP",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PL1nG3c-FqOQe6wmVdgGf1aDdPvvNzadxP",
    items: bhagwatItems as YoutubePlaylistItem[],
  },
  "vinay-patrika": {
    playlistId: "PL1nG3c-FqOQfHk1z7EhIfU0jlFlm1DYH-",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PL1nG3c-FqOQfHk1z7EhIfU0jlFlm1DYH-",
    items: vinayPatrikaItems as YoutubePlaylistItem[],
  },
  mahabharat: {
    playlistId: "PLzRbcbIdYvQG6aW7AL3YIzkgxakGBwDbA",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PLzRbcbIdYvQG6aW7AL3YIzkgxakGBwDbA",
    items: mahabharatItems as YoutubePlaylistItem[],
  },
  bhaktmaal: {
    playlistId: "PL1nG3c-FqOQcNJP_kQE0y28tUxqux2mw-",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PL1nG3c-FqOQcNJP_kQE0y28tUxqux2mw-",
    items: bhaktmaalItems as YoutubePlaylistItem[],
  },
};

/** Convert "2:44:34" / "1:41:06" into a short label. */
export function formatYoutubeDuration(raw: string): string {
  const parts = raw.split(":").map((p) => Number(p));
  if (parts.some((n) => Number.isNaN(n))) return raw;
  if (parts.length === 3) {
    const [h, m] = parts;
    if (h > 0) return m > 0 ? `${h}h ${m}m` : `${h}h`;
    return `${m}m`;
  }
  if (parts.length === 2) {
    const [m, s] = parts;
    return m > 0 ? `${m}m` : `${s}s`;
  }
  return raw;
}
