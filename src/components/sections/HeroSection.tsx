"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Zap, Sparkles, Star } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 16, mass: 0.5 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 16, mass: 0.5 });

  const blobX = useTransform(springX, [-1, 1], [-24, 24]);
  const blobY = useTransform(springY, [-1, 1], [-24, 24]);

  const handlePointerMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-visible"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <motion.div style={{ x: blobX, y: blobY }} className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-green/5 blur-[120px] rounded-full" />
        <motion.div style={{ x: useTransform(blobX, (v) => -v), y: useTransform(blobY, (v) => -v) }} className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-green/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Content */}
        <div className="flex flex-col items-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Smart Expense Splitting
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-primary-dark leading-[1.1]">
              Split expenses <br />
              <span className="text-primary-green">the smart way.</span>
            </h1>
            <p className="mt-6 text-xl text-secondary-gray max-w-2xl mx-auto leading-relaxed">
              Track, split, settle, and manage shared expenses with friends and groups effortlessly. Splitry automatically scans receipts, categorizes items, and calculates exact shares including tax and tip. Record settlements in a tap — no money ever moves through Splitry. No more awkward math, just seamless group finances.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#"
              className="inline-block transition-opacity hover:opacity-80 active:opacity-60"
              aria-label="Download on the App Store"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="54"
                viewBox="0 0 160 54"
                aria-hidden="true"
              >
                <rect width="160" height="54" rx="10" fill="black" />
                <rect x="0.75" y="0.75" width="158.5" height="52.5" rx="9.25" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" fill="none" />

                {/* Apple logo */}
                <path
                  d="M34.42 27.17c-.03-3.32 2.72-4.94 2.84-5.01-1.55-2.27-3.97-2.58-4.82-2.61-2.04-.21-3.99 1.21-5.03 1.21-1.04 0-2.64-1.19-4.34-1.15-2.22.03-4.27 1.3-5.41 3.28-2.32 4.02-.59 9.97 1.66 13.23 1.1 1.59 2.41 3.38 4.13 3.31 1.66-.07 2.29-1.07 4.29-1.07 2.01 0 2.59 1.07 4.35 1.04 1.79-.03 2.92-1.62 4.01-3.22 1.27-1.84 1.79-3.63 1.82-3.72-.04-.02-3.47-1.33-3.5-5.29z"
                  fill="white"
                />
                <path
                  d="M31.15 17.56c.92-1.11 1.53-2.65 1.36-4.19-1.32.05-2.91.88-3.85 1.99-.85.97-1.59 2.52-1.39 4.01 1.47.11 2.97-.74 3.88-1.81z"
                  fill="white"
                />

                {/* Download on the */}
                <text x="48" y="21" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="10" fill="white" letterSpacing="0.3">Download on the</text>

                {/* App Store */}
                <text x="47" y="39" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="21" fontWeight="600" fill="white" letterSpacing="-0.3">App Store</text>
              </svg>
            </a>

            <a
              href="#"
              className="relative inline-block transition-opacity hover:opacity-80 active:opacity-60"
              aria-label="Get it on Google Play"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="54"
                viewBox="0 0 160 54"
                aria-hidden="true"
              >
                <rect width="160" height="54" rx="10" fill="black" />
                <rect x="0.75" y="0.75" width="158.5" height="52.5" rx="9.25" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" fill="none" />

                {/* Play triangle */}
                <path d="M20 15.5 L20 38.5 L35 27 Z" fill="white" />

                {/* GET IT ON */}
                <text x="48" y="21" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="9" fill="white" letterSpacing="0.5">GET IT ON</text>

                {/* Google Play */}
                <text x="47" y="39" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="19" fontWeight="600" fill="white" letterSpacing="-0.3">Play Store</text>
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center gap-8 pt-4"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-secondary-gray">
              <ShieldCheck className="w-5 h-5 text-primary-green" />
              No Funds Held
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-secondary-gray">
              <Zap className="w-5 h-5 text-primary-green" />
              Real-time Sync
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
