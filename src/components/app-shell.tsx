"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BottomNav } from "@/components/bottom-nav";
import { MiniPlayer } from "@/components/mini-player";
import { LanguageProvider } from "@/components/language-provider";
import { PageTransition } from "@/components/page-motion";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { StatusBarTheme } from "@/components/status-bar-theme";
import { isOnboardingDone } from "@/lib/onboarding";

/** Flip to true when the audio/video player is wired up. */
const SHOW_MINI_PLAYER = false;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [gateReady, setGateReady] = useState(false);
  const [allowed, setAllowed] = useState(false);

  const isPlayer = pathname.includes("/play");
  const isOnboarding = pathname === "/onboarding";
  const hideChrome = isPlayer || isOnboarding;
  /** Home already has its own staggered section motion. */
  const usePageMotion = pathname !== "/" && !hideChrome;

  useEffect(() => {
    const done = isOnboardingDone();

    if (!done && !isOnboarding) {
      router.replace("/onboarding");
      setAllowed(false);
      setGateReady(true);
      return;
    }

    if (done && isOnboarding) {
      router.replace("/");
      setAllowed(false);
      setGateReady(true);
      return;
    }

    setAllowed(true);
    setGateReady(true);
  }, [isOnboarding, pathname, router]);

  return (
    <LanguageProvider>
      <ServiceWorkerRegister />
      <StatusBarTheme />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-lg flex-col bg-background md:max-w-2xl lg:max-w-5xl lg:shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
        <main
          className={
            hideChrome
              ? "flex-1"
              : SHOW_MINI_PLAYER
                ? "flex-1 pb-44"
                : "flex-1 pb-28"
          }
        >
          {!gateReady || !allowed ? null : usePageMotion ? (
            <PageTransition key={pathname}>{children}</PageTransition>
          ) : (
            children
          )}
        </main>

        {!hideChrome ? (
          <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto flex w-full max-w-lg flex-col items-center gap-4 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:max-w-2xl lg:max-w-5xl">
            {SHOW_MINI_PLAYER ? <MiniPlayer /> : null}
            <BottomNav />
          </div>
        ) : null}
      </div>
    </LanguageProvider>
  );
}
