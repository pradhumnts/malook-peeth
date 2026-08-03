"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Stable status-bar setup for the whole app:
 * - black-translucent so media can sit under the clock
 * - white theme-color (never remove it, never use dark — both create slabs)
 * - don't tint html/body; each screen paints its own edge-to-edge media
 */
export function StatusBarTheme() {
  const pathname = usePathname();

  useEffect(() => {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "#ffffff");

    let apple = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]',
    );
    if (!apple) {
      apple = document.createElement("meta");
      apple.setAttribute("name", "apple-mobile-web-app-status-bar-style");
      document.head.appendChild(apple);
    }
    apple.setAttribute("content", "black-translucent");

    document.documentElement.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    delete document.documentElement.dataset.chrome;
  }, [pathname]);

  return null;
}
