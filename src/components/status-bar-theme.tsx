"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function isImmersivePath(pathname: string) {
  if (pathname === "/onboarding") return true;
  if (pathname.includes("/play")) return true;
  if (/^\/katha\/[^/]+\/?$/.test(pathname)) return true;
  return false;
}

function isDarkImmersive(pathname: string) {
  return pathname.includes("/play");
}

function ensureAppleStatusBarMeta() {
  let apple = document.querySelector(
    'meta[name="apple-mobile-web-app-status-bar-style"]',
  );
  if (!apple) {
    apple = document.createElement("meta");
    apple.setAttribute("name", "apple-mobile-web-app-status-bar-style");
    document.head.appendChild(apple);
  }
  apple.setAttribute("content", "black-translucent");
}

function setThemeColor(content: string | null) {
  const existing = document.querySelectorAll('meta[name="theme-color"]');
  existing.forEach((node) => node.remove());
  if (content == null) return;
  const meta = document.createElement("meta");
  meta.setAttribute("name", "theme-color");
  meta.setAttribute("content", content);
  document.head.appendChild(meta);
}

/**
 * Immersive routes need a true transparent status bar so the poster
 * wash can paint edge-to-edge. A solid theme-color becomes an opaque
 * slab sitting above the blur.
 */
export function StatusBarTheme() {
  const pathname = usePathname();

  useEffect(() => {
    const immersive = isImmersivePath(pathname);
    const dark = isDarkImmersive(pathname);

    ensureAppleStatusBarMeta();

    const root = document.documentElement;
    const body = document.body;

    if (immersive) {
      // Remove theme-color entirely — iOS won't paint a slab over the wash.
      setThemeColor(null);

      if (dark) {
        root.style.backgroundColor = "#1a1512";
        body.style.backgroundColor = "#1a1512";
        root.dataset.chrome = "immersive-dark";
      } else {
        root.style.backgroundColor = "transparent";
        body.style.backgroundColor = "transparent";
        root.dataset.chrome = "immersive";
      }
    } else {
      setThemeColor("#ffffff");
      root.style.backgroundColor = "";
      body.style.backgroundColor = "";
      delete root.dataset.chrome;
    }

    return () => {
      root.style.backgroundColor = "";
      body.style.backgroundColor = "";
      delete root.dataset.chrome;
    };
  }, [pathname]);

  return null;
}
