"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function isImmersive(pathname: string) {
  if (pathname === "/onboarding") return true;
  if (pathname.includes("/play")) return true;
  // Katha series detail: /katha/[id] but not /katha itself
  if (pathname.startsWith("/katha/") && !pathname.includes("/play")) {
    return true;
  }
  return false;
}

/**
 * Keeps iOS/Android status-bar chrome in sync with the screen:
 * - Immersive (photo) screens → dark theme-color + light icons
 * - Light screens → white theme-color + dark icons
 * Requires apple-mobile-web-app-status-bar-style=black-translucent
 * so content can paint edge-to-edge under the status bar.
 */
export function StatusBarTheme() {
  const pathname = usePathname();

  useEffect(() => {
    const immersive = isImmersive(pathname);
    const color = immersive ? "#0c0a09" : "#ffffff";

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

    document.documentElement.style.backgroundColor = color;
    document.body.style.backgroundColor = immersive ? "#0c0a09" : "";
  }, [pathname]);

  return null;
}
