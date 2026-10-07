"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/** Subtle vertical parallax (max ±24px) tied to the element's scroll position. */
export function Parallax({ children, className, distance = 24 }: { children: ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

/**
 * Progress line that fills as the user scrolls through the wrapped content (e.g. step 1 → 3).
 * Horizontal on large screens, vertical on the left edge below that.
 */
export function ScrollProgress({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.6"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div aria-hidden="true" className="absolute inset-x-[16%] -top-8 hidden h-1 overflow-hidden rounded-full bg-border-stroke lg:block">
        <motion.div
          className="h-full origin-left rounded-full bg-primary-green"
          style={{ scaleX: reduce ? 1 : progress }}
        />
      </div>
      {children}
    </div>
  );
}
