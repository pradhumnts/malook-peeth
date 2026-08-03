"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function isImmersivePath(pathname: string) {
  if (pathname === "/onboarding") return true;
  if (pathname.includes("/play")) return true;
  // Katha series detail: /katha/[id] (not the library index)
  if (/^\/katha\/[^/]+\/?$/.test(pathname)) return true;
  return false;
}

function isDarkImmersive(pathname: string) {
  return pathname.includes("/play");
}

/**
 * Keeps `black-translucent` so media can paint under the status bar,
 * without an opaque theme-color slab. Immersive routes tint html/body
 * to match the screen so any OS gap reads as part of the composition.
 */
export function StatusBarTheme() {
  const pathname = usePathname();

  useEffect(() => {
    const immersive = isImmersivePath(pathname);
    const dark = isDarkImmersive(pathname);

    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    // Never use a solid dark theme-color — iOS paints that as an opaque
    // status-bar slab. Media under black-translucent is what you see.
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

    const root = document.documentElement;
    const body = document.body;

    if (dark) {
      // Warm near-black matches the player blur if the OS flashes a gap.
      root.style.backgroundColor = "#1a1512";
      body.style.backgroundColor = "#1a1512";
      root.dataset.chrome = "immersive-dark";
    } else if (immersive) {
      // Onboarding / katha: no white strip behind the photo.
      root.style.backgroundColor = "transparent";
      body.style.backgroundColor = "transparent";
      root.dataset.chrome = "immersive";
    } else {
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
