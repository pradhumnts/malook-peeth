"use client";

import Image from "next/image";
import { useMemo } from "react";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useLanguage } from "@/components/language-provider";
import { localizedBooks } from "@/lib/localize";

export default function BooksPage() {
  const { t, language } = useLanguage();
  const books = useMemo(() => localizedBooks(language), [language]);

  return (
    <div>
      <PageHeader title={t("booksTitle")} subtitle={t("booksSubtitle")} />

      <div className="grid grid-cols-2 gap-3 px-4 pb-6 sm:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <article key={book.id} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary shadow-sm">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 200px"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
              <button
                type="button"
                className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-white text-ink shadow-md transition-transform active:scale-90"
                aria-label={`Download ${book.title}`}
              >
                <Download className="size-4" />
              </button>
            </div>
            <h3 className="mt-2.5 text-sm font-bold leading-snug tracking-tight text-ink">
              {book.title}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {book.subtitle}
            </p>
            {book.pages ? (
              <p className="mt-0.5 text-[10px] text-muted-foreground/80">
                {book.pages}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
