"use client";

import { useMemo } from "react";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { localizedAbout } from "@/lib/localize";

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.3 3.5-6.3 3.5Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm6.3-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21.9 7.3a5.5 5.5 0 0 0-1.5-3.9 5.5 5.5 0 0 0-3.9-1.5c-1.5-.1-6-.1-7.5 0a5.5 5.5 0 0 0-3.9 1.5 5.5 5.5 0 0 0-1.5 3.9c-.1 1.5-.1 6 0 7.5a5.5 5.5 0 0 0 1.5 3.9 5.5 5.5 0 0 0 3.9 1.5c1.5.1 6 .1 7.5 0a5.5 5.5 0 0 0 3.9-1.5 5.5 5.5 0 0 0 1.5-3.9c.1-1.5.1-6 0-7.5Zm-2.2 9.1a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.4.4-5.8.4s-4.5.1-5.8-.4a3.3 3.3 0 0 1-1.9-1.9c-.5-1.3-.4-4.4-.4-5.8s-.1-4.5.4-5.8a3.3 3.3 0 0 1 1.9-1.9c1.3-.5 4.4-.4 5.8-.4s4.5-.1 5.8.4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.4.4 5.8s.1 4.5-.4 5.8Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.2 3H21l-6.5 7.4L22 21h-6.2l-4.9-6.4L5.3 21H2.5l7-8L2 3h6.3l4.4 5.8L18.2 3Zm-1.1 16.2h1.7L7 4.7H5.2l11.9 14.5Z" />
    </svg>
  );
}

const socialIcons: Record<
  string,
  (props: { className?: string }) => React.ReactNode
> = {
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: XIcon,
};

export function ConnectCard({ className }: { className?: string }) {
  const { t, language } = useLanguage();
  const a = useMemo(() => localizedAbout(language), [language]);

  return (
    <section
      className={
        className ??
        "overflow-hidden rounded-3xl border border-border bg-background p-5"
      }
    >
      <h2 className="text-xl font-bold tracking-tight text-ink">
        Sri Malook Peeth
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">Vrindavan Ashram</p>
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0 text-ink" />
          {a.contact.address}
        </li>
        <li className="flex gap-3 text-sm text-muted-foreground">
          <Phone className="mt-0.5 size-4 shrink-0 text-ink" />
          <a href={`tel:${a.contact.phone.replace(/\s/g, "")}`}>
            {a.contact.phone}
          </a>
        </li>
        <li className="flex gap-3 text-sm text-muted-foreground">
          <Mail className="mt-0.5 size-4 shrink-0 text-ink" />
          <a href={`mailto:${a.contact.email}`}>{a.contact.email}</a>
        </li>
        <li className="flex gap-3 text-sm text-muted-foreground">
          <Globe className="mt-0.5 size-4 shrink-0 text-ink" />
          <a
            href={a.contact.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            malookpeeth.com
          </a>
        </li>
      </ul>

      <div className="mt-6 border-t border-border pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {t("followMaharajJi")}
        </p>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {a.socials.map((s) => {
            const Icon = socialIcons[s.id];
            return (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-ink transition-colors hover:bg-primary hover:text-white"
              >
                {Icon ? <Icon className="size-5" /> : null}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
