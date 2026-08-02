"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Keeps status-bar overlay mode on, without painting an opaque black
 * chrome bar (which made immersive screens look cropped).
 *
 * Photos / heroes paint edge-to-edge; a soft CSS scrim on those screens
 * keeps the clock & battery readable.
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
    // Never use a solid dark theme-color — iOS turns that into an opaque
    // status-bar slab. White keeps dark glyphs on light pages; immersive
    // screens rely on image + scrim underneath black-translucent.
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
  }, [pathname]);

  return null;
}
