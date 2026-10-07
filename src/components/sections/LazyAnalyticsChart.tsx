"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Recharts is the heaviest dependency on the page; fetch it only when the chart is near view.
const AnalyticsChart = dynamic(() => import("./AnalyticsChart"), { ssr: false });

export function LazyAnalyticsChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Only read on the client: the chart never renders on the server.
  const [animate] = useState(
    () => typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-6 h-[220px] w-full sm:h-[260px]"
      role="img"
      aria-label="Area chart of monthly group spending from January to June"
    >
      {visible && <AnalyticsChart animate={animate} />}
    </div>
  );
}
