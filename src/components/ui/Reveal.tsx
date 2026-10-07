import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds, for staggering siblings. */
  delay?: number;
  as?: "div" | "li";
}

/**
 * Subtle fade-up on scroll. Server-rendered: content is always in the HTML and visible
 * without JS; RevealObserver (mounted in SiteShell) triggers the transition in view.
 */
export function Reveal({ children, className, delay = 0, as: Component = "div" }: RevealProps) {
  return (
    <Component
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Component>
  );
}
