"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** One shared IntersectionObserver that reveals every [data-reveal] element once. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Observer is live: disable the CSS no-JS failsafe so below-the-fold reveals still animate
    document.documentElement.setAttribute("data-reveal-ready", "");
    const pending = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])");
    if (!("IntersectionObserver" in window)) {
      pending.forEach((el) => el.setAttribute("data-revealed", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    pending.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
