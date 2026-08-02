export type MediaType = "audio" | "video";

export type Katha = {
  id: string;
  title: string;
  scripture: string;
  subtitle: string;
  type: MediaType;
  duration: string;
  episodes: number;
  image: string;
  description: string;
};

export type Episode = {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  type: MediaType;
  image: string;
  publishedAgo: string;
};

export type EventItem = {
  id: string;
  title: string;
  type: "Katha" | "Satsang" | "Festival" | "Yatra";
  location: string;
  dates: string;
  image: string;
  description: string;
  venue?: string;
  notes?: string[];
};

export type SevaCause = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
};

export type Location = {
  id: string;
  name: string;
  place: string;
  description: string;
  image: string;
  highlights: string[];
};

export type Book = {
  id: string;
  title: string;
  subtitle: string;
  pages?: string;
  image: string;
};

export type Goshala = {
  id: string;
  name: string;
  place: string;
  cows: string;
  description: string;
  image: string;
};

const img = {
  // Maharaj Ji
  maharaj1: "/images/maharaj-ji-1.webp",
  maharaj2: "/images/maharaj-ji-2.webp",
  maharaj3: "/images/maharaj-ji-3.webp",
  maharaj4: "/images/maharaj-ji-4.webp",
  maharaj5: "/images/maharaj-ji-5.webp",
  maharaj6: "/images/maharaj-ji-6.webp",
  maharaj7: "/images/maharaj-ji-7.webp",
  about1: "/images/maharaj-ji-about-1.webp",
  about2: "/images/maharaj-ji-about-2.webp",
  about3: "/images/maharaj-ji-about-3.webp",
  // Katha posters (library)
  posterBhagwat: "/images/library/bhagwat-katha.webp",
  posterRamcharitmanas: "/images/library/sampoorn-ramcharitmanas-path.webp",
  posterBhaktmaal: "/images/library/bhaktmaal.webp",
  posterVinayPatrika: "/images/library/vinay-patrika.webp",
  posterMahabharat: "/images/library/mahabharat-katha.webp",
  // Katha / darshan photos
  katha: "/images/maharaj-ji-katha.webp",
  katha1: "/images/maharaj-ji-katha-1.webp",
  katha2: "/images/maharaj-ji-katha-2.webp",
  katha3: "/images/maharaj-ji-katha-3.webp",
  katha4: "/images/maharaj-ji-katha-4.webp",
  katha5: "/images/maharaj-ji-katha-5.webp",
  katha6: "/images/maharaj-ji-katha-6.webp",
  // Events
  event1: "/images/event-1.webp",
  event2: "/images/event-2.webp",
  event3: "/images/maharaj-ji-event.webp",
  event4: "/images/maharaj-ji-event-3.webp",
  // Places & seva
  peeth: "/images/malook-peeth.webp",
  agrapeeth: "/images/agrapeeth-raiwasa.webp",
  gaushala: "/images/gau-6.webp",
  gurukul: "/images/gurukul.webp",
  // Gau Sewa / gaushala photos
  gau1: "/images/gau-1.webp",
  gau2: "/images/gau-2.webp",
  gau3: "/images/gau-3.webp",
  gau4: "/images/gau-4.webp",
  gau5: "/images/gau-5.webp",
  gau6: "/images/gau-6.webp",
  gau7: "/images/gau-7.webp",
  gau8: "/images/gau-8.webp",
  gau9: "/images/gau-9.webp",
  gau10: "/images/gau-10.webp",
  // Aliases used across the app
  temple: "/images/malook-peeth.webp",
  templeNight: "/images/maharaj-ji-katha.webp",
  cow: "/images/gau-9.webp",
  cows: "/images/gau-6.webp",
  goshala: "/images/gau-6.webp",
  sage: "/images/maharaj-ji-about-1.webp",
  meditation: "/images/maharaj-ji-3.webp",
  scripture: "/images/maharaj-ji-katha-2.webp",
  books: "/images/books/upasana-darpan.webp",
  bookUpasanaDarpan: "/images/books/upasana-darpan.webp",
  bookChitrakoot: "/images/books/chitrakoot-chandrika.webp",
  bookDandvati: "/images/books/dandvati-baba-biography.webp",
  bookMalookPravachan: "/images/books/malook-pravachan-sudha.webp",
  bookNehnidhi: "/images/books/shree-nehnidhi-peeyusham.webp",
  bookRamanandiya: "/images/books/shree-ramanandiya-nitya-upasana.webp",
  education: "/images/gurukul.webp",
  food: "/images/event-2.webp",
  medical: "/images/maharaj-ji-6.webp",
  festival: "/images/maharaj-ji-event.webp",
  landscape: "/images/agrapeeth-raiwasa.webp",
  river: "/images/event-1.webp",
  flower: "/images/maharaj-ji-4.webp",
  lamp: "/images/maharaj-ji-2.webp",
  lotus: "/images/maharaj-ji-5.webp",
  hands: "/images/maharaj-ji-7.webp",
  kids: "/images/gurukul.webp",
  music: "/images/maharaj-ji-katha-5.webp",
  sunset: "/images/event-1.webp",
};

export const brand = {
  name: "Malook Peeth",
  maharaj: "Pujya Shri Rajendra Das Ji Maharaj",
  shortMaharaj: "Maharaj Ji",
  tagline: "Sanatan Dharma · Katha · Seva · Gau Raksha",
  description:
    "Sri Malook Peeth is a living stream of devotion led by Malook Peethadheeshwar Jagadguru Devaracharya Swami Shri Rajendra Das Ji Maharaj — devoted to Bhagwan Seva, Sant Seva, Gau Seva, and the teaching of sacred scriptures.",
  logo: "/images/profile.jpg",
};

export const featuredMedia: {
  id: string;
  type: "image" | "video";
  src: string;
  caption: string;
}[] = [
  {
    id: "darshan-1",
    type: "image",
    src: img.about1,
    caption: "Shri Maharaj Ji · Malook Peeth",
  },
  {
    id: "gau-seva-video",
    type: "video",
    src: "/images/gau-seva-video.mp4",
    caption: "Gau Sewa · Living seva at the gaushala",
  },
  {
    id: "katha-darshan",
    type: "image",
    src: img.katha,
    caption: "Katha & satsang with Maharaj Ji",
  },
  {
    id: "gau-seva",
    type: "image",
    src: img.gau8,
    caption: "Gau Mata under loving care",
  },
  {
    id: "peeth",
    type: "image",
    src: img.peeth,
    caption: "Shri Malook Peeth · Vrindavan",
  },
  {
    id: "utsav",
    type: "image",
    src: img.event3,
    caption: "Utsav & celebrations at the peeth",
  },
  {
    id: "darshan-2",
    type: "image",
    src: img.maharaj5,
    caption: "Divine blessings of Maharaj Ji",
  },
  {
    id: "darshan-3",
    type: "image",
    src: img.maharaj7,
    caption: "In the service of Sanatan Dharma",
  },
  {
    id: "katha-series",
    type: "image",
    src: img.katha6,
    caption: "Sacred katha · Living tradition",
  },
];

export const events: EventItem[] = [
  {
    id: "bhagwat-mathura",
    title: "Shrimad Bhagwat Katha",
    type: "Katha",
    location: "Mathura · Shri Krishna Janmabhoomi",
    dates: "12 – 19 Sep 2026",
    image: img.event1,
    description:
      "A seven-day Shrimad Bhagwat Katha by Maharaj Ji, illuminating the path of devotion through the sacred Purana.",
    venue: "Shri Krishna Janmabhoomi Mandir campus · Mathura",
    notes: [
      "Arrive 30 minutes early for seating.",
      "Mobile phones on silent during Katha.",
      "Volunteer seva opportunities available on site.",
    ],
  },
  {
    id: "ram-katha-jaipur",
    title: "Shri Ram Katha",
    type: "Katha",
    location: "Jaipur · Rajasthan",
    dates: "3 – 11 Oct 2026",
    image: img.event2,
    description:
      "Ramcharitmanas Katha narrated in Maharaj Ji's simple, heart-touching style that fills listeners with love for Shri Ram.",
    venue: "Jaipur · Venue details announced closer to dates",
    notes: [
      "Open to all devotees — no registration fee.",
      "Seating preference for elders and families with children.",
      "Support Annakshetra seva if you wish to contribute.",
    ],
  },
  {
    id: "raiwasa-utsav",
    title: "Raiwasa Dham Utsav",
    type: "Festival",
    location: "Agrapeeth · Raiwasa, Rajasthan",
    dates: "28 Oct – 2 Nov 2026",
    image: img.agrapeeth,
    description:
      "Celebrations at the historic Agrapeeth — home of the ancient Janaki Nath temple and sacred Tulsi tradition.",
    venue: "Shri Agrapeeth · Raiwasa Dham, Rajasthan",
    notes: [
      "Plan travel early — Raiwasa sees large gatherings during utsav.",
      "Simple lodging guidance available via peeth volunteers.",
      "Dress modestly for temple premises.",
    ],
  },
  {
    id: "gau-seva-yatra",
    title: "Gau Seva Sammelan",
    type: "Satsang",
    location: "Jadkhor Gaudham · Bharatpur",
    dates: "15 Nov 2026",
    image: img.gau3,
    description:
      "A gathering of devotees for Gau Mata seva, satsang, and darshan at the sacred grazing lands of Braj.",
    venue: "Shri Jadkhor Gaudham · Deeg, Bharatpur, Rajasthan",
    notes: [
      "Wear comfortable footwear for walking the grounds.",
      "Donations for fodder and medicine seva are welcome.",
      "Children must remain with guardians near the cattle areas.",
    ],
  },
];

export function getEvent(id: string): EventItem | undefined {
  return events.find((e) => e.id === id);
}

export const kathas: Katha[] = [
  {
    id: "bhagwat-vrindavan",
    title: "Shrimad Bhagwat",
    scripture: "Bhagwat",
    subtitle: "Vrindavan · Complete Series",
    type: "video",
    duration: "42h",
    episodes: 48,
    image: img.posterBhagwat,
    description:
      "Maharaj Ji's profound exposition of Shrimad Bhagwat Purana — awakening devotion through the lilas of Bhagwan Shri Krishna.",
  },
  {
    id: "ramcharitmanas",
    title: "Sampoorn Ramcharitmanas Path",
    scripture: "Ramcharitmanas",
    subtitle: "Goswami Tulsidas",
    type: "audio",
    duration: "36h",
    episodes: 40,
    image: img.posterRamcharitmanas,
    description:
      "The divine story of Shri Ram narrated with simplicity and depth, filling hearts with love and joy.",
  },
  {
    id: "bhaktmaal",
    title: "Bhaktmaal",
    scripture: "Bhaktmaal",
    subtitle: "Lives of Great Devotees",
    type: "video",
    duration: "28h",
    episodes: 32,
    image: img.posterBhaktmaal,
    description:
      "Stories of legendary saints and devotees that inspire a life of pure bhakti and surrender.",
  },
  {
    id: "vinay-patrika",
    title: "Vinay Patrika",
    scripture: "Vinay Patrika",
    subtitle: "Tulsidas · Devotional Hymns",
    type: "audio",
    duration: "12h",
    episodes: 18,
    image: img.posterVinayPatrika,
    description:
      "Heartfelt discourses on Vinay Patrika — prayers of humility that melt the heart toward the Divine.",
  },
  {
    id: "mahabharat",
    title: "Mahabharat",
    scripture: "Mahabharat",
    subtitle: "Dharma · Courage · Devotion",
    type: "video",
    duration: "50h",
    episodes: 56,
    image: img.posterMahabharat,
    description:
      "Maharaj Ji's discourses on the Mahabharat — revealing dharma, devotion, and the eternal wisdom of the epic.",
  },
];

const episodeTitles: Record<string, string[]> = {
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
};

const agoLabels = ["3d ago", "1w ago", "2w ago", "3w ago", "1mo ago", "2mo ago"];

export function getKatha(id: string): Katha | undefined {
  return kathas.find((k) => k.id === id);
}

export function getEpisodes(katha: Katha): Episode[] {
  const titles = episodeTitles[katha.id] ?? [];
  const count = Math.min(katha.episodes, Math.max(titles.length, 8));

  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    const title =
      titles[i] ?? `${katha.scripture} · Part ${n}`;
    return {
      id: `${katha.id}-e${n}`,
      number: n,
      title: `E${n} — ${title}`,
      description: `${katha.description} Part ${n} of this sacred series by Maharaj Ji.`,
      duration: katha.type === "video" ? `${55 + (i % 20)}m` : `${1 + (i % 2)}h ${10 + (i % 40)}m`,
      type: katha.type,
      image: katha.image,
      publishedAgo: agoLabels[i % agoLabels.length],
    };
  });
}

export function getEpisode(kathaId: string, episodeId: string): Episode | undefined {
  const katha = getKatha(kathaId);
  if (!katha) return undefined;
  return getEpisodes(katha).find((e) => e.id === episodeId);
}

export const books: Book[] = [
  {
    id: "upasana-darpan",
    title: "Upasana Darpan",
    subtitle: "A mirror of daily worship & devotion",
    pages: "366 pages",
    image: img.bookUpasanaDarpan,
  },
  {
    id: "chitrakoot-chandrika",
    title: "Chitrakoot Chandrika",
    subtitle: "Light of Chitrakoot · Sacred narratives",
    image: img.bookChitrakoot,
  },
  {
    id: "dandvati-baba",
    title: "Dandvati Baba Biography",
    subtitle: "Life of the revered saint",
    image: img.bookDandvati,
  },
  {
    id: "malook-pravachan-sudha",
    title: "Malook Pravachan Sudha",
    subtitle: "Nectar of Maharaj Ji's discourses",
    image: img.bookMalookPravachan,
  },
  {
    id: "shree-nehnidhi-peeyusham",
    title: "Shree Nehnidhi Peeyusham",
    subtitle: "Sacred nectar of divine love",
    image: img.bookNehnidhi,
  },
  {
    id: "shree-ramanandiya-nitya-upasana",
    title: "Shree Ramanandiya Nitya Upasana",
    subtitle: "Daily worship of the Ramanandiya tradition",
    image: img.bookRamanandiya,
  },
];

export const goshalas: Goshala[] = [
  {
    id: "kaamdhenu",
    name: "Shri Kaamdhenu Gaushala",
    place: "Jadkhor Gaudham · Deeg, Bharatpur",
    cows: "~1,100",
    description:
      "Home to about 1,100 Vedalakshana Indian cows. Specializes in breeding, A2 milk dairy, Panchgavya Ayurvedic products, and a Gobar Gas plant. Also houses the Vedic Gurukul, Shri Kamdhenu Kutir (Maharaj Ji's residence), Vaishnav Rasoi, Akhand Naam Sankirtan, and a 10,000 sq ft Satsang Hall.",
    image: img.gau9,
  },
  {
    id: "surabhi",
    name: "Shri Surabhi Gaushala",
    place: "Largest shed · Jadkhor Gaudham",
    cows: "~4,100",
    description:
      "The biggest of the five sheds, serving around 4,100 Vedalakshana Govansh. Includes milking and protection enclosures, a Dhanvantari department for injured and sick cows, Gonyal (cow urine) and PROM fertilizer plants, Bhusa Godown, central store, and RO water facilities.",
    image: img.gau6,
  },
  {
    id: "yashodadham",
    name: "Shri Yashodadham Gaushala",
    place: "Kama Tehsil · Deeg Road, near Ghata",
    cows: "~300",
    description:
      "About 8 km from Kaamdhenu Goshtha. Currently serves around 300 cows with straw storage for feed. Additional cow sheds and store houses are needed on available land so more Gau Mata can be cared for here.",
    image: img.gau5,
  },
  {
    id: "murar",
    name: "Shri Murar Gaushala",
    place: "~11 km from Kaamdhenu Goshtha",
    cows: "~1,400",
    description:
      "Serves about 1,400 cows. Includes an RCC cowshed of about 16,000 sq ft and a straw storage house of about 20,000 sq ft. Further shelters and stores are needed on remaining land to expand seva.",
    image: img.gau4,
  },
  {
    id: "nandanvan",
    name: "Shri Nandanvan Gaushala",
    place: "~12 km from Kaamdhenu Goshtha",
    cows: "~1,600",
    description:
      "Serves about 1,600 cows. Jersey and hybrid cattle rescued from smugglers are kept in separate enclosures. Overhead (2,00,000 L) and underground (1,00,000 L) water tanks are under construction. Additional shelters and stores are still needed.",
    image: img.gau8,
  },
];

export const gauSevaPage = {
  heroImage: img.gau1,
  aboutImage: img.gau3,
  missionImage: img.gau2,
  shelterImage: img.gau4,
  fodderImage: img.gau7,
  medicalImage: img.gau10,
  gallery: [
    img.gau1,
    img.gau2,
    img.gau3,
    img.gau4,
    img.gau5,
    img.gau6,
    img.gau7,
    img.gau8,
    img.gau9,
    img.gau10,
  ],
  quotes: [
    {
      sa: "सर्वे देवा हि गावः। सर्वे तीर्थाः हि गावः। सर्वे वेदाः हि गावः।",
      en: "All gods reside in the cow. All tirthas reside in the cow. All Vedas reside in the cow.",
    },
    {
      sa: "गावो विश्वस्य मातरः। गावः पवित्राः। गावः सर्वमङ्गलप्रदाः।",
      en: "Cows are the mothers of the universe. Cows are pure. Cows grant all auspiciousness.",
    },
    {
      sa: "त्वं माता सर्व देवानां त्वं च यज्ञस्य कारणम् । त्वं तीर्थ सर्वतीर्थानां नमस्तेस्तु सदानधे ।",
      en: "You are the mother of all gods, the cause of yajna, and the tirtha of all tirthas — we bow to you, O sinless one.",
    },
  ],
  stats: [
    { n: "~8,500", l: "Gauvansh" },
    { n: "5", l: "Gaushalas" },
    { n: "400+", l: "Gausevaks" },
    { n: "100+", l: "Products" },
  ],
  about: {
    legal:
      "Shree Jadkhor Gaudham (Shree Vraj Kamad Surbhi Van Avam Shodh Sansthan) — registered under Section 80G & 12AA, FCRA and CSR. One of the largest gaudhams in the nation, with five gaushalas within a 12 km range.",
    location:
      "Situated in the heart of the villages, surrounded by Aravalli hills, on Lord Shri Krishna-Balram's daily cow-grazing land — about 50 km from Bharatpur and 15 km from Deeg Tehsil, Rajasthan.",
    address: "P.O. Gohana, Tehsil Deeg, District Bharatpur, Rajasthan – 321203",
    phone: "+91 9548711477 · +91 8824500377",
    email: "donation@jadkhor.org",
    establishment:
      "Before Jadkhor Gaudham was established in 2010, cow slaughter and smuggling were common in the surrounding areas. This sacred land — once the gocharan of Shri Krishna and Balram, the penance place of Shri Ghanshyam Baba, near his Samadhi, the Hanuman temple, and the Saugandhini rock — had become a site of cruelty unacceptable to the saintly community.",
    vision:
      "Shri Jadkhor Gaudham is the concrete form of the selfless resolve taken by Param Pujya Shri Maharaj Ji to honour the feelings of respected saints and protect Gau Mata.",
  },
  mission:
    "To rescue cows from slaughterhouses and rehabilitate them. We care for stray, abandoned cows, bulls, retired oxen, and orphaned calves — providing hay, flour, fresh grass, clean water, medical treatment, and peaceful shelter. Cow protection is Hinduism's gift to the planet; as spiritual science teaches, Dharma, Artha, Kāma, and Moksha can all be acquired by serving the cow.",
  impact: [
    {
      title: "Daily food for cows",
      body: "In Bharatiya culture, the cow is not merely an animal but a Goddess — eternal philosophy of the Vedas. Govansh is the backbone of an agricultural Bharat. Every day, Jadkhor provides fodder, grass, and water so Gau Mata may live with dignity.",
      image: img.gau7,
    },
    {
      title: "Shelters for cows",
      body: "सर्वे देवा: स्थिता देहे सर्वदेवमयी हि गौ: — All the Gods reside in the body of the cow. Safe, clean shelters across our gaushalas give rescued and elderly cows a place to recover and live peacefully.",
      image: img.gau6,
    },
    {
      title: "Medical treatment",
      body: "Injured, diseased, and elderly cows receive dedicated medical care. Plans continue for a full cow hospital so every Gauvansh can be treated with compassion and skill.",
      image: img.gau10,
    },
    {
      title: "Yagya, Pooja & Gurukulam",
      body: "Alongside Gau Seva, Jadkhor upholds yagya, pooja, and Gurukulam education — weaving cow protection into a living culture of dharma, learning, and devotion.",
      image: img.gau3,
    },
  ],
  products: [
    {
      title: "Bilona A2 Cow Ghee",
      subtitle: "1 Litre · Traditional & nutrient-rich",
      image: img.gau2,
    },
    {
      title: "Amrit Ark",
      subtitle: "500 ml · 24 herbs · Immunity",
      image: img.lotus,
    },
    {
      title: "Herbal Shampoo",
      subtitle: "200 ml · 100% natural",
      image: img.flower,
    },
  ],
};

export const sevaCauses: SevaCause[] = [
  {
    id: "annakshetra",
    title: "Annakshetra",
    subtitle: "Sacred food for all",
    description:
      "Daily prasadam for saints, devotees, students, and those in need — nourishing body and spirit as an offering to the Divine.",
    image: img.food,
    accent: "#2F5D50",
  },
  {
    id: "sant-seva",
    title: "Sant Seva",
    subtitle: "Serving the saints",
    description:
      "Care, shelter, and respect for sadhus — continuing the Malook Das Ji Akhara tradition of serving nearly 2500 saints.",
    image: img.sage,
    accent: "#3D4F7A",
  },
  {
    id: "sanskrit",
    title: "Sanskrit Education",
    subtitle: "Language of the scriptures",
    description:
      "Teaching Sanskrit so the next generation can access shastras directly — a core mission of the Gurukul.",
    image: img.education,
    accent: "#5C4A2F",
  },
  {
    id: "medical",
    title: "Medical Seva",
    subtitle: "Healing with compassion",
    description:
      "Medical treatment for the poor, devotees, and saints — extending care as an act of dharma.",
    image: img.medical,
    accent: "#4A6B6B",
  },
  {
    id: "temple",
    title: "Temple Restoration",
    subtitle: "Preserving sacred spaces",
    description:
      "Restoring and maintaining temples and ashrams so devotion continues unbroken for generations.",
    image: img.temple,
    accent: "#6B3A3A",
  },
  {
    id: "general",
    title: "General Seva",
    subtitle: "Wherever need arises",
    description:
      "Flexible support for ashram needs, pilgrim facilities, and emergent seva across all peeths.",
    image: img.hands,
    accent: "#4A5568",
  },
  {
    id: "festival",
    title: "Special Festival Seva",
    subtitle: "Utsavs & celebrations",
    description:
      "Support for major festivals, katha pandals, and seasonal celebrations at Malook Peeth and Raiwasa.",
    image: img.festival,
    accent: "#7A5C2E",
  },
];

export const locations: Location[] = [
  {
    id: "malook-peeth",
    name: "Shri Malook Peeth",
    place: "Vansivat Mohalla · Yamuna Pulien, Vrindavan",
    description:
      "Formerly Sri Malook Das Ji Akhara — a historic seat of devotion where saints lived in Thakur Seva, Sant Seva, and bhajan. Today headed by Jagadguru Devaracharya Swami Shri Rajendra Das Ji Maharaj.",
    image: img.temple,
    highlights: ["Thakur Seva", "Gurukul", "Bhajan & Music", "Gaushala"],
  },
  {
    id: "raiwasa",
    name: "Shri Agrapeeth Raiwasa",
    place: "Raiwasa Dham · Rajasthan",
    description:
      "One of India's most revered peeths. Home to the ancient Janaki Nath temple (est. 1517). Founded by Agra Devacharya. Goswami Tulsidas composed here. Maharaj Ji is the 18th Peethadheeshwar.",
    image: img.landscape,
    highlights: ["Janaki Nath Mandir", "Tulsi Tradition", "Ved Ashram"],
  },
  {
    id: "jadkhor-loc",
    name: "Shri Jadkhor Gaudham",
    place: "~50 km from Bharatpur · ~15 km from Deeg",
    description:
      "Sacred sanctuary on Krishna-Balram's gocharan land, near Saugandhini rock and Ghanshyam Baba's samadhi. Established 2010. Registered under 80G, 12AA, FCRA & CSR.",
    image: img.gau6,
    highlights: ["5 Gaushalas · ~8,500 Gauvansh", "Within 12 km", "Ayurvedic Products"],
  },
  {
    id: "other-projects",
    name: "Authorised Projects",
    place: "Braj · Rajasthan · Beyond",
    description:
      "Additional authorised gaushalas and seva projects under Maharaj Ji's blessings — extending Gau Raksha and Sanatan Dharma across regions.",
    image: img.gau5,
    highlights: ["Gau Seva", "Education", "Community Seva"],
  },
];

export const aboutMaharaj = {
  title: "About Maharaj Ji",
  name: "Anant Shri Vibhushit Shri Malook Peethadhishwar Jagadguru Devaracharya Swami Shri Rajendra Das Ji Maharaj",
  shortName: "Shri Rajendra Das Ji Maharaj",
  birth: "Rishi Panchami · Bhaadra Shukla Panchami",
  birthplace: "Acharra (Acharya gram) · Tikamgarh, Bundelkhand, Madhya Pradesh",
  father: "Pt. Shri Ramswaroop Ji Pandey",
  mother: "Smt. Brijlata Devi",
  guru: "Anant Shri Vibhushit Shri Ganesh Das Ji ‘Bhaktamali’ Maharaj",
  languages: "Hindi · Sanskrit",
  image: img.about1,
  traits: [
    { label: "Birth", value: "Rishi Panchami · Bundelkhand" },
    { label: "Guru", value: "Shri Bhaktamali Ji Maharaj" },
    { label: "Peeths", value: "Malook Peeth · Agrapeeth Raiwasa" },
    { label: "Honour", value: "D.Lit · Vidya Vachaspati" },
  ],
  gallery: [
    img.about1,
    img.about2,
    img.about3,
    img.maharaj1,
    img.maharaj2,
    img.maharaj3,
  ],
  sections: [
    {
      title: "Birth & ancestry",
      image: img.about2,
      body: [
        "Madhya Pradesh — at the heart of India — holds the proud village of Acharra, or Acharya gram, in the Tikamgarh district of Bundelkhand. For ages, Acharra has been home to Acharyas and virtuous Vedic brahmins; the name itself evolved from ‘Acharya’. Shri Maharaj Ji’s ancestors belong to this sacred place.",
        "The holy month of Bhaadrapad is purified by the appearance day of Shri Krishna. On Bhaadra Shukla Panchami — also known as Rishi Panchami — our beloved Shri Maharaj Ji appeared in this world to gladden hearts and bless lives.",
        "His father, Pt. Shri Ramswaroop Ji Pandey, was a virtuous, erudite saintly devotee who taught Sanskrit and gave satsang on Shri Ram–Krishna Katha and Shri Bhaktamal. His mother is Smt. Brijlata Devi. Both parents received Vaishnava initiation from the venerable Bhagavat of Shri Vrindavan, Anant Shri Vibhushit Shri Ganesh Das Ji ‘Bhaktamali’ Maharaj — while Smt. Brijlata Devi was still pregnant with her second son. That fortunate son is our dear master — Anant Shri Vibhushit Shri Malook Peethadhishwar Maharaj.",
      ],
    },
    {
      title: "Journey to Vrindavan",
      image: img.about3,
      body: [
        "Just as Param Sadgurudev Shri Bhaktamali Ji had, in childhood, walked from Kursi in the Naimish region all the way to Varanasi for Sanskrit learning, young Shri Rajendra Das Ji adamantly left his local school after a specific incident, telling his father he would not return there.",
        "The family’s worry ended by the grace of Shri Hari when Sadgurudev Shri Bhaktamali Ji arrived from Vrindavan and resolved it at once: “Let me take him to Vrindavan for further study.” This ushering of the young Maharaj Ji to Vrindavan by a Ramanandi saint was the implicit mercy of Shri Ram-Krishna through Shri Sadgurudev.",
        "Prior to leaving, during his stay in the village, Shri Maharaj Ji was blessed with nearly a year of purifying association with Pujyapad Shri Swami Sharananand Ji Maharaj — a disciple of Shankaracharya Jyotishpeethadhishwar Shri Bramhananda Saraswati Ji Maharaj and junior God-brother to Shri Swami Karpatri Ji Maharaj — firmly fixed in Sanyasa-dharma and venerated by the saints of the age.",
      ],
    },
    {
      title: "Diksha & studies",
      image: img.maharaj2,
      body: [
        "In those days, Sadgurudev Shri Bhaktamali Ji Maharaj lived at Sudama Kuti in Vrindavan, writing his great commentary on Shri Bhaktamal. There he initiated his newly surrendered disciple into the Vaishnava tradition and began his formal Sanskrit-shastra education. The newly initiated disciple was named Rajendra Das.",
        "In time, Shri Bhaktamali Ji Maharaj arranged his initiation into the renounced order at nearby Khak Chowk from the great siddha saint Yogiraj Shri Deva Das Ji Maharaj — also known as Shri Pahadi Baba.",
        "The cultured Vaishnava student Shri Rajendra Das Ji went on to obtain Master’s degrees in Sanskrit Grammar, Vishishtadvaita Vedanta, and Literature — the visible fruit of his Guru-nishtha.",
      ],
    },
    {
      title: "Honours & peeths",
      image: img.peeth,
      images: [
        { src: img.peeth, caption: "Shri Malook Peeth · Vrindavan" },
        { src: img.agrapeeth, caption: "Agrapeeth · Raiwasa Dham" },
      ],
      body: [
        "On 8th January 2018 — Jagadguru Ramanandacharya Jayanti — Shri Tulasipithadhish Divyang University chancellor Pujyapad Jagadguru Shri Rambhadracharya Ji Maharaj offered the honorary degree of D.Lit (Vidya Vachaspati) to Shri Maharaj Ji at the hands of the Hon. President of India.",
        "Today he serves as Malook Peethadheeshwar of Shri Malook Peeth, Vrindavan, and as Peethadheeshwar of the historic Agrapeeth at Raiwasa Dham. A powerful yet humble orator, he narrates Ram Katha and Shrimad Bhagwat in language so simple and beautiful that love for Bhagwan awakens naturally in the listener’s heart.",
        "Deeply devoted to Lord Ram, Hanuman, and the great saints of Bharat, Maharaj Ji is also a true Gau Sewak. Under his leadership, Malook Peeth propagates Sanatan Dharma through scripture seva, saint seva, cow protection, Gurukul education, Annakshetra, and medical care for the needy.",
      ],
    },
  ],
  contact: {
    phone: "+91 7900380003",
    email: "info@malookpeeth.com",
    address:
      "Malook Peeth Ashram, Bansiwat opp. Gopeshwar Mandir, Parikrama Marg, Vrindavan, Uttar Pradesh – 281121",
    website: "https://malookpeeth.com",
  },
  socials: [
    {
      id: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/@rajendradasjimaharaj",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/rajendradasjimaharaj/",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/rajendradasjiMaharaj",
    },
    {
      id: "twitter",
      label: "X",
      href: "https://x.com/rajendradasji",
    },
  ],
};

export const peethInfo = {
  title: "Malook Peeth & Raiwasa Dham",
  image: img.temple,
  images: [
    { src: img.peeth, caption: "Shri Malook Peeth · Vrindavan" },
    { src: img.agrapeeth, caption: "Agrapeeth · Raiwasa Dham" },
  ],
  sections: [
    {
      title: "Sri Malook Peeth",
      image: img.peeth,
      body: "Situated in Vansivat Mohalla, Yamuna Pulien, Vrindavan — formerly known as Sri Malook Das Ji Akhara. Here Sri Malook Das Ji lived with approximately 2500 saints dedicated to Thakur Seva, Sant Seva, and divine music. Under Maharaj Ji, the peeth continues Bhagwan Seva, Gurukul learning, Annakshetra, medical care, and classical music training (Harmonium, Tabla, Bhajan).",
    },
    {
      title: "Agrapeeth · Raiwasa Dham",
      image: img.agrapeeth,
      body: "Among India's most prestigious peeths. The Janaki Nath temple here dates to 1517. Founder Agra Devacharya was blessed with darshan of Mata Sita. Goswami Tulsidas composed the immortal pad 'Janaki Nath Sahay Kare...' at this sacred place. In 2023, Maharaj Ji became the 18th Peethadheeshwar, succeeding Raghavaacharya Ji.",
    },
  ],
};

export const gurukulInfo = {
  title: "Gurukul & Education",
  subtitle: "Vedic life · Sanskrit · Classical music",
  image: img.kids,
  description:
    "For many years, the Gurukul at Malook Peeth has taught students Vedic living, Sanskrit language, and classical music — Harmonium, Tabla, and bhajan. Education here is seva: shaping character alongside scholarship so Sanatan wisdom lives on in young hearts.",
  programs: [
    {
      title: "Sanskrit & Shastra",
      subtitle: "Direct access to sacred texts",
      image: img.scripture,
    },
    {
      title: "Classical Music",
      subtitle: "Harmonium · Tabla · Bhajan",
      image: img.music,
    },
    {
      title: "Vedic Lifestyle",
      subtitle: "Discipline · Seva · Sadhana",
      image: img.meditation,
    },
    {
      title: "Value Education",
      subtitle: "Character with knowledge",
      image: img.education,
    },
  ],
};

export type JadkhorSewa = {
  id: string;
  /** Official name from jadkhor.org/donationList */
  title: string;
  /** Short label for UI */
  name: string;
  /** Secondary line e.g. Monthly · 1 Gauvansh */
  detail: string;
  amount: string;
  group: "any" | "do-roti" | "goaashrit" | "special";
};

/** Sewa options from https://jadkhor.org/donationList */
export const jadkhorSewas: JadkhorSewa[] = [
  {
    id: "any-amount",
    title: "Donate Any Amount For Gau Sewa, Food & Medicine",
    name: "Any amount",
    detail: "Gau Sewa · Food & Medicine",
    amount: "Min ₹100",
    group: "any",
  },
  {
    id: "do-roti-1-monthly",
    title: "DO ROTI YOJANA for 1 GAUVANSH-(MONTHLY SEWA)",
    name: "Do Roti · 1 Gauvansh",
    detail: "Monthly sewa",
    amount: "₹500",
    group: "do-roti",
  },
  {
    id: "do-roti-1-yearly",
    title: "DO ROTI YOJNA for 1 GAUVANSH-(YEARLY SEWA)",
    name: "Do Roti · 1 Gauvansh",
    detail: "Yearly sewa",
    amount: "₹6,000",
    group: "do-roti",
  },
  {
    id: "do-roti-onetime",
    title: "DO ROTI YOJNA-(ONE TIME SEWA)",
    name: "Do Roti Yojna",
    detail: "One-time sewa",
    amount: "₹1,11,111",
    group: "do-roti",
  },
  {
    id: "do-roti-10-monthly",
    title: "DO ROTI YOJANA for 10 GAUVANSH-(MONTHLY SEWA)",
    name: "Do Roti · 10 Gauvansh",
    detail: "Monthly sewa",
    amount: "₹5,000",
    group: "do-roti",
  },
  {
    id: "do-roti-21-monthly",
    title: "DO ROTI YOJANA for 21 GAUVANSH-(MONTHLY SEWA)",
    name: "Do Roti · 21 Gauvansh",
    detail: "Monthly sewa",
    amount: "₹10,500",
    group: "do-roti",
  },
  {
    id: "do-roti-5-yearly",
    title: "DO ROTI YOJNA for 5 GAUVANSH-(YEARLY SEWA)",
    name: "Do Roti · 5 Gauvansh",
    detail: "Yearly sewa",
    amount: "₹30,000",
    group: "do-roti",
  },
  {
    id: "do-roti-10-yearly",
    title: "DO ROTI YOJNA for 10 GAUVANSH-(YEARLY SEWA)",
    name: "Do Roti · 10 Gauvansh",
    detail: "Yearly sewa",
    amount: "₹60,000",
    group: "do-roti",
  },
  {
    id: "goaashrit-1-monthly",
    title: "GO-AASHRIT PARIVAR YOJNA for 1 GAUVANSH-(MONTHLY)",
    name: "Go-Aashrit · 1 Gauvansh",
    detail: "Monthly sewa",
    amount: "₹2,100",
    group: "goaashrit",
  },
  {
    id: "goaashrit-1-yearly",
    title: "GO-AASHRIT PARIVAR YOJNA for 1 GAUVANSH-(YEARLY SEWA)",
    name: "Go-Aashrit · 1 Gauvansh",
    detail: "Yearly sewa",
    amount: "₹25,200",
    group: "goaashrit",
  },
  {
    id: "goaashrit-11-monthly",
    title: "GO-AASHRIT PARIVAR YOJNA for 11 GAUVANSH-(MONTHLY)",
    name: "Go-Aashrit · 11 Gauvansh",
    detail: "Monthly sewa",
    amount: "₹23,100",
    group: "goaashrit",
  },
  {
    id: "goaashrit-51-monthly",
    title: "GO-AASHRIT PARIVAR YOJNA for 51 GAUVANSH-(MONTHLY)",
    name: "Go-Aashrit · 51 Gauvansh",
    detail: "Monthly sewa",
    amount: "₹1,07,100",
    group: "goaashrit",
  },
  {
    id: "goaashrit-100-monthly",
    title: "GO-AASHRIT PARIVAR YOJNA for 100 GAUVANSH-(MONTHLY)",
    name: "Go-Aashrit · 100 Gauvansh",
    detail: "Monthly sewa",
    amount: "₹2,10,000",
    group: "goaashrit",
  },
  {
    id: "goaashrit-5-yearly",
    title: "GO-AASHRIT PARIVAR YOJNA for 5 GAUVANSH-(YEARLY SEWA)",
    name: "Go-Aashrit · 5 Gauvansh",
    detail: "Yearly sewa",
    amount: "₹1,26,000",
    group: "goaashrit",
  },
  {
    id: "goaashrit-11-yearly",
    title: "GO-AASHRIT PARIVAR YOJNA for 11 GAUVANSH-(YEARLY SEWA)",
    name: "Go-Aashrit · 11 Gauvansh",
    detail: "Yearly sewa",
    amount: "₹2,77,200",
    group: "goaashrit",
  },
  {
    id: "goaashrit-21-yearly",
    title: "GO-AASHRIT PARIVAR YOJNA for 21 GAUVANSH-(YEARLY SEWA)",
    name: "Go-Aashrit · 21 Gauvansh",
    detail: "Yearly sewa",
    amount: "₹5,29,200",
    group: "goaashrit",
  },
  {
    id: "akshay-gausewa",
    title: "AKSHAY GAUSEWA YOJNA-(ONE TIME SEWA)",
    name: "Akshay Gausewa Yojna",
    detail: "One-time sewa",
    amount: "₹2,00,000",
    group: "special",
  },
  {
    id: "anyapurna-monthly",
    title: "ANYAPURNA BHANDHARA - (MONTHLY)",
    name: "Anyapurna Bhandhara",
    detail: "Monthly",
    amount: "₹5,000",
    group: "special",
  },
  {
    id: "annapurna-yearly",
    title: "ANNAPURNA BHANDHARA - (YEARLY)",
    name: "Annapurna Bhandhara",
    detail: "Yearly",
    amount: "₹60,000",
    group: "special",
  },
  {
    id: "serve-29-monthly",
    title: "SERVE 29 GAU MATA-(MONTHLY SEWA)",
    name: "Serve 29 Gau Mata",
    detail: "Monthly sewa",
    amount: "₹51,000",
    group: "special",
  },
  {
    id: "serve-58-monthly",
    title: "SERVE 58 GAU MATA-(MONTHLY SEWA)",
    name: "Serve 58 Gau Mata",
    detail: "Monthly sewa",
    amount: "₹1,21,000",
    group: "special",
  },
  {
    id: "gau-daan",
    title: "GAU DAAN SEWA",
    name: "Gau Daan Sewa",
    detail: "One-time sewa",
    amount: "₹51,000",
    group: "special",
  },
  {
    id: "nandi-daan",
    title: "NANDI DAAN SEWA",
    name: "Nandi Daan Sewa",
    detail: "One-time sewa",
    amount: "₹1,00,000",
    group: "special",
  },
  {
    id: "kirtanarth-day",
    title: "Kirtanarth Seva(One Day)",
    name: "Kirtanarth Seva",
    detail: "One day",
    amount: "₹1,100",
    group: "special",
  },
  {
    id: "kirtanarth-monthly",
    title: "Kirtanarth Seva(Monthly)",
    name: "Kirtanarth Seva",
    detail: "Monthly",
    amount: "₹31,000",
    group: "special",
  },
];

export const jadkhorSewaGroups: {
  id: JadkhorSewa["group"];
  title: string;
}[] = [
  { id: "do-roti", title: "Do Roti Yojana" },
  { id: "goaashrit", title: "Go-Aashrit Parivar" },
  { id: "special", title: "Special sewas" },
];

export const donateAnySewa = jadkhorSewas.find((s) => s.group === "any")!;

/** @deprecated use jadkhorSewas */
export const donateOptions = jadkhorSewas.map((s) => ({
  id: s.id,
  title: s.title,
  amount: s.amount,
  image: img.gau6,
}));

export const navItems = [
  { href: "/", label: "Home", icon: "home" as const },
  { href: "/katha", label: "Library", icon: "library" as const },
  { href: "/donate", label: "Donate", icon: "donate" as const },
  { href: "/about", label: "About", icon: "about" as const },
];

export const exploreLinks = [
  { href: "/diksha", title: "Diksha", subtitle: "Daily practice", image: img.about1 },
  { href: "/ekadashi", title: "Ekadashi", subtitle: "Next vrat · Guidelines", image: img.lamp },
  { href: "/gurukul", title: "Gurukul", subtitle: "Education Programs", image: img.kids },
  { href: "/books", title: "Books", subtitle: "E-books & Granths", image: img.books },
  { href: "/locations", title: "Ashrams", subtitle: "Peeths & Places", image: img.landscape },
  { href: "/seva", title: "Seva Causes", subtitle: "Ways to serve", image: img.hands },
];

export type EkadashiEvent = {
  id: string;
  name: string;
  paksha: string;
  month: string;
  /** Observance / fasting day (local calendar date) */
  date: string;
  day: string;
  tithiBegins: string;
  tithiEnds: string;
  paranaDate: string;
  paranaTime: string;
  note?: string;
};

/** Upcoming Smarta Ekadashi dates (India · indicative; verify with local panchang). */
export const ekadashiCalendar: EkadashiEvent[] = [
  {
    id: "kamika-2026",
    name: "Kamika Ekadashi",
    paksha: "Krishna Paksha",
    month: "Shravana",
    date: "2026-08-09",
    day: "Sunday",
    tithiBegins: "8 Aug 2026 · 1:59 PM",
    tithiEnds: "9 Aug 2026 · 11:04 AM",
    paranaDate: "10 Aug 2026",
    paranaTime: "5:47 AM – 8:00 AM",
    note: "Dedicated to Lord Vishnu · Shravan Krishna Ekadashi",
  },
  {
    id: "putrada-2026",
    name: "Shravana Putrada Ekadashi",
    paksha: "Shukla Paksha",
    month: "Shravana",
    date: "2026-08-23",
    day: "Sunday",
    tithiBegins: "23 Aug 2026 · 2:00 AM",
    tithiEnds: "24 Aug 2026 · 4:18 AM",
    paranaDate: "24 Aug 2026",
    paranaTime: "1:41 PM – 4:16 PM",
    note: "Known for blessings of progeny and family well-being",
  },
  {
    id: "aja-2026",
    name: "Aja Ekadashi",
    paksha: "Krishna Paksha",
    month: "Bhadrapada",
    date: "2026-09-07",
    day: "Monday",
    tithiBegins: "6 Sep 2026 · 7:29 PM",
    tithiEnds: "7 Sep 2026 · 5:03 PM",
    paranaDate: "8 Sep 2026",
    paranaTime: "6:15 AM – 8:42 AM",
    note: "The story of King Harishchandra is often recited",
  },
  {
    id: "parsva-2026",
    name: "Parsva / Padma Ekadashi",
    paksha: "Shukla Paksha",
    month: "Bhadrapada",
    date: "2026-09-22",
    day: "Tuesday",
    tithiBegins: "21 Sep 2026 · 8:00 PM",
    tithiEnds: "22 Sep 2026 · 9:43 PM",
    paranaDate: "23 Sep 2026",
    paranaTime: "After sunrise · before Dwadashi ends",
    note: "Also associated with Vishnushrinkhala Yoga in some panchangs",
  },
];

export function getNextEkadashi(from: Date = new Date()): EkadashiEvent {
  const startOfToday = new Date(from);
  startOfToday.setHours(0, 0, 0, 0);

  const upcoming = ekadashiCalendar.find((e) => {
    const d = new Date(`${e.date}T00:00:00`);
    return d >= startOfToday;
  });

  return upcoming ?? ekadashiCalendar[ekadashiCalendar.length - 1];
}

export function daysUntilEkadashi(
  ekadashi: EkadashiEvent,
  from: Date = new Date(),
): number {
  const startOfToday = new Date(from);
  startOfToday.setHours(0, 0, 0, 0);
  const target = new Date(`${ekadashi.date}T00:00:00`);
  const diff = Math.round(
    (target.getTime() - startOfToday.getTime()) / (1000 * 60 * 60 * 24),
  );
  return Math.max(0, diff);
}

export const ekadashiGuide = {
  about: {
    title: "About Ekadashi",
    paragraphs: [
      "Ekadashi is the eleventh lunar day (tithi) of each fortnight in the Hindu calendar — once in Shukla Paksha (waxing moon) and once in Krishna Paksha (waning moon). Devotees of Lord Vishnu observe this day with fasting, prayer, and remembrance of Bhagwan.",
      "The vrat traditionally spans three days in spirit: a light meal on Dashami afternoon, a full fast on Ekadashi, and Parana (breaking the fast) on Dwadashi after sunrise. Eating grains and cereals is prohibited during the Ekadashi fast.",
      "At Malook Peeth, Ekadashi is honoured as a sacred rhythm of devotion — a chance to purify the body, steady the mind, and deepen bhakti through Katha, naam, and seva.",
    ],
  },
  significance: {
    title: "Significance",
    points: [
      {
        title: "Grace of Lord Vishnu",
        body: "Ekadashi is especially dear to Bhagwan Vishnu. Observing the vrat with faith is believed to destroy sins, bring peace, and draw divine protection.",
      },
      {
        title: "Purification of body & mind",
        body: "Fasting rests the digestive fire and sharpens awareness for japa, path, and satsang — turning the day into living sadhana.",
      },
      {
        title: "Path to devotion",
        body: "Scriptures praise Ekadashi as a doorway to bhakti. Even a simple, sincere fast offered to Hari carries immense spiritual merit.",
      },
      {
        title: "Family & prosperity",
        body: "Certain Ekadashis — such as Putrada — are especially observed for family well-being, progeny, and household harmony.",
      },
    ],
  },
  guidelines: {
    title: "Fasting guidelines & rules",
    types: [
      {
        title: "Nirjala",
        body: "The strictest form — no food and no water for the day. Chosen according to health and capacity.",
      },
      {
        title: "Phalahar",
        body: "Fruits, milk, nuts, and Ekadashi-permitted foods such as sabudana, sweet potato, and raw banana.",
      },
      {
        title: "Eka-bhukta",
        body: "A single satvik meal during the day for those unable to keep a full fast — decided before beginning.",
      },
    ],
    avoid: [
      "All grains, cereals, rice, wheat, and lentils",
      "Onion, garlic, and tamasic foods",
      "Non-vegetarian food and intoxicants",
      "Eating twice on the fasting day",
      "Breaking the fast during Hari Vasara (first quarter of Dwadashi)",
      "Daytime sleep and idle talk when possible",
    ],
    do: [
      "Take a light meal on Dashami afternoon so the stomach is clear for Ekadashi",
      "Worship Lord Vishnu / Krishna, chant mantras, and listen to Katha",
      "Offer water and Tulsi with devotion",
      "Break the fast (Parana) on Dwadashi after sunrise, within the prescribed window",
      "Begin Parana with water or Tulsi tirtha, then a light satvik meal",
      "Always verify exact timings with your local panchang — they vary by place",
    ],
  },
};

export type DikshaPractice = {
  id: string;
  title: string;
  subtitle: string;
};

export const dikshaPage = {
  eyebrow: "Diksha · दीक्षा",
  title: "Initiated Vaishnav Practice",
  practices: [
    {
      id: "morning",
      title: "Morning bath + tilak + 1 round",
      subtitle: "Twelve tilaks, face east/north, Mahamantra",
    },
    {
      id: "vandana",
      title: "Guru & Vaishnava Vandana",
      subtitle: "Prayers to Sri Gurudeva and all Vaishnavas",
    },
    {
      id: "tulsi",
      title: "Tulsi Devi seva",
      subtitle: "Offer water and perform parikrama",
    },
    {
      id: "prasadam",
      title: "Food offered as prasadam",
      subtitle: "Offered to Sri Radha-Krishna before eating",
    },
    {
      id: "bhajan",
      title: "Daily bhajan maintained",
      subtitle: "Uninterrupted devotional practice",
    },
    {
      id: "parikrama",
      title: "Four parikramas of Priyalal Ji",
      subtitle: "Four circumambulations",
    },
    {
      id: "towel",
      title: "Clean towel today",
      subtitle: "Fresh towel — not reused from yesterday",
    },
    {
      id: "respect",
      title: "Offered respect to all",
      subtitle: "Guru, Sadhu, Shastra",
    },
  ] satisfies DikshaPractice[],
  codeOfConduct: [
    "Offer the same respect and reverence to Sri Vigraha (the Deity), the scriptures, Sri Gurudeva, and all Vaishnavas.",
    "Every morning, after taking a bath, wear clean clothes, apply the twelve tilak marks on the twelve parts of the body, then sit facing east or north and chant one round of the Hare Krishna Mahamantra.",
    "Offer Guru Vandana (prayers to the spiritual master) and Vaishnava Vandana (prayers to the Vaishnavas).",
    "Offer respects to Sri Tulsi Devi, offer her water, and perform parikrama (circumambulation).",
    "Offer your food to Sri Radha-Krishna before eating and honor it as prasadam. Do not consume food or items that have not been offered to the Lord.",
    "Do not allow your daily bhajan (devotional practice) to be interrupted. Make every effort to maintain it consistently.",
    "Observe the Vaishnava fasts such as Ekadashi, Janmashtami, and other sacred vows with sincerity.",
    "Keep body, clothes, and place of worship clean. Use a fresh towel each day and maintain purity in all seva.",
  ],
};
