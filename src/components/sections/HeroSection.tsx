"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Sparkles } from "lucide-react";

const FloatingCard = ({ 
  children, 
  className, 
  delay = 0,
  initialX = 0
}: { 
  children: React.ReactNode, 
  className?: string, 
  delay?: number,
  initialX?: number
}) => (
  <motion.div
    initial={{ x: initialX, y: 20, opacity: 0 }}
    animate={{
      x: 0,
      y: [0, -10, 0],
      opacity: 1
    }}
    transition={{
      x: { duration: 0.45, ease: "easeOut", delay },
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + 0.45
      },
      opacity: { duration: 0.45, delay }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-visible">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-green/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
        {/* Content */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Expense Splitting
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-primary-dark leading-[1.1]">
              Split expenses <br />
              <span className="text-primary-green">smarter with AI.</span>
            </h1>
            <p className="mt-6 text-xl text-secondary-gray max-w-xl mx-auto lg:mx-0">
              Track, split, settle, and manage shared expenses with friends and groups effortlessly using smart automation and UPI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-8 pt-4"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-secondary-gray">
              <ShieldCheck className="w-5 h-5 text-primary-green" />
              Secure UPI Settle
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-secondary-gray">
              <Zap className="w-5 h-5 text-primary-green" />
              Real-time Sync
            </div>
          </motion.div>
        </div>

        {/* Visuals */}
        <div className="relative mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 mx-auto w-[280px] md:w-[320px] lg:w-[300px] xl:w-[380px]"
          >
            <div 
              className="relative aspect-[9/19] overflow-hidden shadow-2xl border-[8px] border-primary-dark ring-4 ring-white/50"
              style={{ borderRadius: '3rem' }}
            >
              <Image
                src="/home-screen.png"
                alt="Splitry App Mockup"
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Cards */}
            <FloatingCard className="absolute -top-10 -right-4 md:-right-12 xl:-right-16 z-20 glass p-4 rounded-2xl shadow-premium border-white/40" delay={0.15} initialX={60}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">$</div>
                <div>
                  <p className="text-xs text-secondary-gray font-medium">Balance</p>
                  <p className="text-sm font-bold text-red-500">You owe $240</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute top-1/2 -left-8 md:-left-20 xl:-left-24 z-20 glass p-4 rounded-2xl shadow-premium border-white/40" delay={0.45} initialX={-60}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                <div>
                  <p className="text-xs text-secondary-gray font-medium">Activity</p>
                  <p className="text-sm font-bold text-primary-dark">Rahul paid $1200</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute bottom-10 -right-4 md:-right-8 xl:-right-12 z-20 glass p-4 rounded-2xl shadow-premium border-white/40" delay={0.3} initialX={60}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">AI</div>
                <div>
                  <p className="text-xs text-secondary-gray font-medium">Smart Detection</p>
                  <p className="text-sm font-bold text-primary-dark">Receipt detected</p>
                </div>
              </div>
            </FloatingCard>
          </motion.div>

          {/* Glow effect behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-green/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
