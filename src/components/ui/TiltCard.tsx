"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends HTMLMotionProps<"div"> {
  maxTilt?: number;
  glare?: boolean;
  scale?: number;
}

const TiltCard = React.forwardRef<HTMLDivElement, TiltCardProps>(
  ({ children, className, maxTilt = 8, glare = true, scale = 1.02, ...props }, forwardedRef) => {
    const localRef = React.useRef<HTMLDivElement>(null);
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
    const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), springConfig);
    const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), springConfig);
    const cardScale = useSpring(1, springConfig);

    const glareBackground = useTransform([x, y], (latest) => {
      const [lx, ly] = latest as number[];
      return `radial-gradient(circle at ${lx * 100}% ${ly * 100}%, rgba(255,255,255,0.35), transparent 55%)`;
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = localRef.current?.getBoundingClientRect();
      if (!rect) return;
      x.set((e.clientX - rect.left) / rect.width);
      y.set((e.clientY - rect.top) / rect.height);
    };

    const handleEnter = () => cardScale.set(scale);
    const handleLeave = () => {
      x.set(0.5);
      y.set(0.5);
      cardScale.set(1);
    };

    return (
      <motion.div
        ref={(node) => {
          localRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, scale: cardScale, transformPerspective: 1000 }}
        className={cn("relative [transform-style:preserve-3d]", className)}
        {...props}
      >
        {children as React.ReactNode}
        {glare && (
          <motion.div
            aria-hidden
            style={{ background: glareBackground }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
          />
        )}
      </motion.div>
    );
  }
);
TiltCard.displayName = "TiltCard";

export { TiltCard };
