"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOut } from "@/components/page-motion";
import {
  markOnboardingDone,
  onboardingSteps,
} from "@/lib/onboarding";
import { cn } from "@/lib/utils";

export function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const current = onboardingSteps[step];
  const isLast = step === onboardingSteps.length - 1;

  function finish() {
    markOnboardingDone();
    router.replace("/");
  }

  function continueStep() {
    if (isLast) {
      finish();
      return;
    }
    setStep((s) => s + 1);
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Full-bleed photo — edge to edge under status bar */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <Image
              src={current.image}
              alt={current.imageAlt}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top scrim — keeps status-bar icons readable */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[28%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden
      />

      {/*
        Soft white shade: long fade from mid-screen into solid white.
        Photo stays continuous underneath — no hard crop line.
      */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[55%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 28%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0.96) 78%, #ffffff 100%)",
        }}
        aria-hidden
      />

      {/* Copy + controls sit on the faded white area */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current.id}-copy`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: easeOut }}
            className="text-center"
          >
            <h1 className="font-sans text-[1.65rem] font-medium leading-snug tracking-tight text-ink sm:text-3xl">
              {current.before}
              <span className="font-bold">{current.emphasis}</span>
              {current.after ?? ""}
            </h1>
            <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              {current.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-2">
          {onboardingSteps.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to step ${i + 1}`}
              onClick={() => setStep(i)}
              className={cn(
                "rounded-full transition-all duration-300",
                i === step
                  ? "size-2.5 bg-primary"
                  : "size-1.5 bg-muted-foreground/35",
              )}
            />
          ))}
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={continueStep}
          className="mt-6 w-full rounded-full bg-primary py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_28px_rgba(28,25,23,0.18)] transition-colors active:bg-primary/90"
        >
          {isLast ? "Get started" : "Continue"}
        </motion.button>
      </div>
    </div>
  );
}
