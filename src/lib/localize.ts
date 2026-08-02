import type { AppLanguage } from "@/components/language-provider";
import {
  aboutMaharaj,
  books,
  brand,
  dikshaPage,
  ekadashiCalendar,
  ekadashiGuide,
  events,
  exploreLinks,
  featuredMedia,
  gauSevaPage,
  getKatha,
  goshalas,
  gurukulInfo,
  jadkhorSewaGroups,
  jadkhorSewas,
  kathas,
  locations,
  peethInfo,
  sevaCauses,
  type Book,
  type EkadashiEvent,
  type Episode,
  type EventItem,
  type Goshala,
  type Katha,
  type Location,
  type SevaCause,
} from "@/lib/data";
import { hiContent as hi } from "@/lib/hi-content";

export function localizedBrand(lang: AppLanguage) {
  if (lang === "en") return brand;
  return { ...brand, ...hi.brand };
}

export function localizedFeaturedMedia(lang: AppLanguage) {
  if (lang === "en") return featuredMedia;
  return featuredMedia.map((item) => ({
    ...item,
    caption:
      hi.featuredCaptions[item.id as keyof typeof hi.featuredCaptions] ??
      item.caption,
  }));
}

export function localizedEvents(lang: AppLanguage): EventItem[] {
  if (lang === "en") return events;
  return events.map((e) => {
    const h = hi.events[e.id as keyof typeof hi.events];
    if (!h) return e;
    return {
      ...e,
      title: h.title,
      type: h.type as EventItem["type"],
      location: h.location,
      dates: h.dates,
      description: h.description,
      venue: h.venue ?? e.venue,
      notes: h.notes ? [...h.notes] : e.notes,
    };
  });
}

export function localizedEvent(
  lang: AppLanguage,
  id: string,
): EventItem | undefined {
  return localizedEvents(lang).find((e) => e.id === id);
}

export function localizedKathas(lang: AppLanguage): Katha[] {
  if (lang === "en") return kathas;
  return kathas.map((k) => {
    const h = hi.kathas[k.id as keyof typeof hi.kathas];
    if (!h) return k;
    return { ...k, ...h };
  });
}

export function localizedKatha(
  lang: AppLanguage,
  id: string,
): Katha | undefined {
  return localizedKathas(lang).find((k) => k.id === id) ?? getKatha(id);
}

export function localizedEpisodes(lang: AppLanguage, katha: Katha): Episode[] {
  const titlesEn = (
    {
      "bhagwat-vrindavan": [
        "Mangalacharan & Katha Mahatmya",
        "Shukadev & Parikshit Samvad",
        "Varaha & Kapila Avatar",
        "Dhruva Charitra",
        "Prahlad Katha",
        "Gajendra Moksha",
        "Amrita Manthan",
        "Vamana & Bali",
        "Matsya Avatar",
        "Krishna Janma",
        "Bal Lila of Braj",
        "Raas Panchadhyayi Intro",
      ],
      ramcharitmanas: [
        "Bal Kand · Invocation",
        "Janakpur & Sita Swayamvar",
        "Van Gaman",
        "Panchvati",
        "Golden Deer & Abduction",
        "Hanuman Meets Sita",
        "Lanka Dahan",
        "Yuddha Kand Begins",
        "Vibhishan Sharan",
        "Ram-Ravan Yuddha",
      ],
      bhaktmaal: [
        "Nabhaji & the Bhakta Tradition",
        "Prahlad — Ideal Devotee",
        "Dhruva — Steadfast Faith",
        "Ambarish — Vishnu Bhakti",
        "Mirabai — Prem Bhakti",
        "Kabir — Nirgun Path",
        "Tulsidas — Ram Ras",
        "Surdas — Blind Seer of Braj",
      ],
      "vinay-patrika": [
        "Vinay — The Spirit of Humility",
        "Prayer to Hanuman",
        "Shri Ram Stuti",
        "Confession of the Jiva",
        "Grace of the Guru",
        "Path of Surrender",
      ],
      mahabharat: [
        "Invocation & Adi Parva",
        "Kuru Dynasty Begins",
        "Pandavas & Kauravas",
        "Draupadi Swayamvar",
        "Dyuta & Vanvas",
        "Bhagavad Gita",
        "Kurukshetra Yuddha",
        "Bhishma & Karna",
        "Ashwatthama & Aftermath",
        "Rajya & Wisdom",
      ],
    } as Record<string, string[]>
  )[katha.id];

  const titles =
    lang === "hi"
      ? (hi.episodeTitles[katha.id as keyof typeof hi.episodeTitles] ??
        titlesEn ??
        [])
      : (titlesEn ?? []);

  const ago =
    lang === "hi"
      ? hi.agoLabels
      : ["3d ago", "1w ago", "2w ago", "3w ago", "1mo ago", "2mo ago"];

  const count = Math.min(katha.episodes, Math.max(titles.length, 8));

  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    const title =
      titles[i] ??
      (lang === "hi"
        ? `${katha.scripture} · भाग ${n}`
        : `${katha.scripture} · Part ${n}`);
    return {
      id: `${katha.id}-e${n}`,
      number: n,
      title,
      description:
        lang === "hi"
          ? `${katha.title} — प्रकरण ${n}`
          : `${katha.title} — Episode ${n}`,
      duration: `${20 + ((n * 3) % 25)} min`,
      type: katha.type,
      image: katha.image,
      publishedAgo: ago[i % ago.length],
    };
  });
}

export function localizedBooks(lang: AppLanguage): Book[] {
  if (lang === "en") return books;
  return books.map((b) => {
    const h = hi.books[b.id as keyof typeof hi.books];
    if (!h) return b;
    return { ...b, ...h };
  });
}

export function localizedGoshalas(lang: AppLanguage): Goshala[] {
  if (lang === "en") return goshalas;
  return goshalas.map((g) => {
    const h = hi.goshalas[g.id as keyof typeof hi.goshalas];
    if (!h) return g;
    return { ...g, ...h };
  });
}

export function localizedGauSeva(lang: AppLanguage) {
  if (lang === "en") return gauSevaPage;
  const h = hi.gauSeva;
  return {
    ...gauSevaPage,
    quotes: h.quotes,
    stats: h.stats,
    about: { ...gauSevaPage.about, ...h.about },
    mission: h.mission,
    impact: gauSevaPage.impact.map((item, i) => ({
      ...item,
      title: h.impact[i]?.title ?? item.title,
      body: h.impact[i]?.body ?? item.body,
    })),
    products: gauSevaPage.products.map((p, i) => ({
      ...p,
      title: h.products[i]?.title ?? p.title,
      subtitle: h.products[i]?.subtitle ?? p.subtitle,
    })),
  };
}

export function localizedSevaCauses(lang: AppLanguage): SevaCause[] {
  if (lang === "en") return sevaCauses;
  return sevaCauses.map((s) => {
    const h = hi.sevaCauses[s.id as keyof typeof hi.sevaCauses];
    if (!h) return s;
    return { ...s, ...h };
  });
}

export function localizedLocations(lang: AppLanguage): Location[] {
  if (lang === "en") return locations;
  return locations.map((l) => {
    const h = hi.locations[l.id as keyof typeof hi.locations];
    if (!h) return l;
    return {
      ...l,
      name: h.name,
      place: h.place,
      description: h.description,
      highlights: [...h.highlights],
    };
  });
}

export function localizedAbout(lang: AppLanguage) {
  if (lang === "en") return aboutMaharaj;
  const h = hi.aboutMaharaj;
  return {
    ...aboutMaharaj,
    title: h.title,
    name: h.name,
    shortName: h.shortName,
    birth: h.birth,
    birthplace: h.birthplace,
    father: h.father,
    mother: h.mother,
    guru: h.guru,
    languages: h.languages,
    traits: h.traits.map((t) => ({ ...t })),
    sections: aboutMaharaj.sections.map((section, i) => {
      const hs = h.sections[i];
      if (!hs) return section;
      const captions =
        "captions" in hs && Array.isArray(hs.captions)
          ? (hs.captions as readonly string[])
          : undefined;
      return {
        ...section,
        title: hs.title,
        body: [...hs.body],
        images: section.images?.map((img, j) => ({
          ...img,
          caption: captions?.[j] ?? img.caption,
        })),
      };
    }),
  };
}

export function localizedPeeth(lang: AppLanguage) {
  if (lang === "en") return peethInfo;
  const h = hi.peethInfo;
  return {
    ...peethInfo,
    title: h.title,
    images: peethInfo.images.map((img, i) => ({
      ...img,
      caption: h.images[i]?.caption ?? img.caption,
    })),
    sections: peethInfo.sections.map((s, i) => ({
      ...s,
      title: h.sections[i]?.title ?? s.title,
      body: h.sections[i]?.body ?? s.body,
    })),
  };
}

export function localizedGurukul(lang: AppLanguage) {
  if (lang === "en") return gurukulInfo;
  const h = hi.gurukulInfo;
  return {
    ...gurukulInfo,
    title: h.title,
    subtitle: h.subtitle,
    description: h.description,
    programs: gurukulInfo.programs.map((p, i) => ({
      ...p,
      title: h.programs[i]?.title ?? p.title,
      subtitle: h.programs[i]?.subtitle ?? p.subtitle,
    })),
  };
}

export function localizedSewas(lang: AppLanguage) {
  if (lang === "en") {
    return {
      sewas: jadkhorSewas,
      groups: jadkhorSewaGroups,
      any: jadkhorSewas.find((s) => s.group === "any")!,
    };
  }
  const sewas = jadkhorSewas.map((s) => ({
    ...s,
    name: hi.sewaNames[s.id as keyof typeof hi.sewaNames] ?? s.name,
    detail: hi.sewaDetails[s.id as keyof typeof hi.sewaDetails] ?? s.detail,
    title: hi.sewaNames[s.id as keyof typeof hi.sewaNames] ?? s.title,
  }));
  const groups = jadkhorSewaGroups.map((g) => ({
    ...g,
    title: hi.sewaGroups[g.id as keyof typeof hi.sewaGroups] ?? g.title,
  }));
  return {
    sewas,
    groups,
    any: sewas.find((s) => s.group === "any")!,
  };
}

export function localizedExploreLinks(lang: AppLanguage) {
  if (lang === "en") return exploreLinks;
  return exploreLinks.map((link) => {
    const h = hi.exploreLinks[link.href as keyof typeof hi.exploreLinks];
    if (!h) return link;
    return { ...link, ...h };
  });
}

export function localizedEkadashiCalendar(lang: AppLanguage): EkadashiEvent[] {
  if (lang === "en") return ekadashiCalendar;
  return ekadashiCalendar.map((e) => {
    const h = hi.ekadashi.calendar[e.id as keyof typeof hi.ekadashi.calendar];
    if (!h) return e;
    return { ...e, ...h };
  });
}

export function localizedEkadashiGuide(lang: AppLanguage) {
  if (lang === "en") return ekadashiGuide;
  return hi.ekadashi.guide;
}

export function localizedDiksha(lang: AppLanguage) {
  if (lang === "en") {
    return {
      ...dikshaPage,
      underGuidance: (name: string) => `Under the guidance of ${name}`,
    };
  }
  const h = hi.diksha;
  return {
    eyebrow: h.eyebrow,
    title: h.title,
    underGuidance: (name: string) =>
      h.underGuidance.includes("{name}")
        ? h.underGuidance.replace("{name}", name)
        : `${name} के मार्गदर्शन में`,
    practices: dikshaPage.practices.map((p) => ({
      ...p,
      title: h.practices[p.id as keyof typeof h.practices]?.title ?? p.title,
      subtitle:
        h.practices[p.id as keyof typeof h.practices]?.subtitle ?? p.subtitle,
    })),
    codeOfConduct: h.codeOfConduct,
  };
}
