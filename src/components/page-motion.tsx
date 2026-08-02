"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Soft page-open fade used when navigating between routes. */
export function PageTransition({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/** Single block fade-up — use for a couple of sections, not every widget. */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 14,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
