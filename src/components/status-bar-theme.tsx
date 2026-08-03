"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";

const LIGHT_THEME_COLOR = "#ffffff";
const DARK_THEME_COLOR = "#2a241f";

/**
 * Keeps theme-color / status-bar chrome in sync with light & dark mode.
 */
export function StatusBarTheme() {
  const pathname = usePathname();
  const { theme, ready } = useTheme();

  useEffect(() => {
    if (!ready) return;

    const color = theme === "dark" ? DARK_THEME_COLOR : LIGHT_THEME_COLOR;

    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", color);

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
  }, [pathname, theme, ready]);

  return null;
}
