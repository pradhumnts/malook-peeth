# Malook Peeth

A modern, iOS-inspired companion app for **Pujya Shri Rajendra Das Ji Maharaj** — covering Katha, Events, Gau Sewa, Gurukul, Books, Donations, Seva causes, and Ashrams.

Built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**. UI-first; players and payments are visual prototypes for now.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Sections

| Route | Content |
|-------|---------|
| `/` | Home browse (Apple Music–style) |
| `/events` | Upcoming Katha, Satsang, Festivals |
| `/katha` | Audio & video series |
| `/katha/[id]` | Full-screen player UI |
| `/about` | About Maharaj Ji |
| `/peeth` | Malook Peeth & Raiwasa Dham |
| `/gau-seva` | Goshalas & cow protection |
| `/gurukul` | Education programs |
| `/books` | Granths & e-books |
| `/donate` | Donation options UI |
| `/seva` | Annakshetra, Sant Seva, and more |
| `/locations` | Ashrams & projects |

## Notes

- Placeholder images are from Unsplash — replace with real photos later.
- Content in `src/lib/data.ts` can be updated anytime.
- Design: clean white surfaces, Outfit + Instrument Serif, glass floating nav & mini-player.
