"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Sparkles, Receipt, Users2, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#080A0F] text-white">
      {/* Radial Top Glow Accent (Darkrise signature aura) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] -z-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(3, 166, 113, 0.35), rgba(0, 245, 160, 0.08) 45%, transparent 75%)",
        }}
      />

      {/* Modern High-Tech Grid Pattern */}
      <div
        className="absolute inset-0 -z-15 opacity-40 pointer-events-none bg-dark-grid"
        style={{
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 95%)",
        }}
      />

      {/* Ambient Blurred Colored Glow Spheres */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary-green/15 blur-[140px] rounded-full" />
        <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-emerald-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Content Header */}
        <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md text-emerald-400 text-xs sm:text-sm font-semibold border border-emerald-500/30 shadow-[0_0_15px_rgba(3,166,113,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Next-Gen Shared Expense Engine</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Split shared expenses <br />
            <span className="gradient-text-emerald">the smart way.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Track, split, settle, and manage shared bills with friends and groups effortlessly. Splitry scans receipts, itemizes shares with exact tax and tip, and simplifies group debts in real-time.
          </motion.p>

          {/* App Store / Play Store Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a
              href={process.env.NEXT_PUBLIC_IOS_STORE_URL || "https://apps.apple.com/us/app/splitry-split-expenses/id6803580203"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] rounded-[12px] active:scale-95"
              aria-label="Download on the App Store"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="54"
                viewBox="0 0 160 54"
                aria-hidden="true"
              >
                <rect width="160" height="54" rx="10" fill="#111522" />
                <rect x="0.75" y="0.75" width="158.5" height="52.5" rx="9.25" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
                <path
                  d="M34.42 27.17c-.03-3.32 2.72-4.94 2.84-5.01-1.55-2.27-3.97-2.58-4.82-2.61-2.04-.21-3.99 1.21-5.03 1.21-1.04 0-2.64-1.19-4.34-1.15-2.22.03-4.27 1.3-5.41 3.28-2.32 4.02-.59 9.97 1.66 13.23 1.1 1.59 2.41 3.38 4.13 3.31 1.66-.07 2.29-1.07 4.29-1.07 2.01 0 2.59 1.07 4.35 1.04 1.79-.03 2.92-1.62 4.01-3.22 1.27-1.84 1.79-3.63 1.82-3.72-.04-.02-3.47-1.33-3.5-5.29z"
                  fill="white"
                />
                <path
                  d="M31.15 17.56c.92-1.11 1.53-2.65 1.36-4.19-1.32.05-2.91.88-3.85 1.99-.85.97-1.59 2.52-1.39 4.01 1.47.11 2.97-.74 3.88-1.81z"
                  fill="white"
                />
                <text x="48" y="21" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="10" fill="#94A3B8" letterSpacing="0.3">Download on the</text>
                <text x="47" y="39" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="21" fontWeight="600" fill="white" letterSpacing="-0.3">App Store</text>
              </svg>
            </a>

            <a
              href={process.env.NEXT_PUBLIC_ANDROID_STORE_URL || "https://play.google.com/store/apps/details?id=com.splitry.app.splitry"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(3,166,113,0.35)] rounded-[12px] active:scale-95"
              aria-label="Get it on Google Play"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="54"
                viewBox="0 0 160 54"
                aria-hidden="true"
              >
                <rect width="160" height="54" rx="10" fill="#111522" />
                <rect x="0.75" y="0.75" width="158.5" height="52.5" rx="9.25" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
                
                {/* Official 4-color Google Play logo */}
                <g transform="translate(16, 12) scale(0.85)">
                  <path fill="#00D2FF" d="M1.3,1.4 C1.1,1.7 1,2.1 1,2.6 L1,31.4 C1,31.9 1.1,32.3 1.3,32.6 L1.4,32.7 L16.8,17.3 L16.8,16.8 L1.4,1.4 L1.3,1.4 Z" />
                  <path fill="#FFC207" d="M21.9,22.4 L16.8,17.3 L16.8,16.8 L21.9,11.7 L22,11.8 L28.1,15.3 C29.8,16.3 29.8,17.8 28.1,18.8 L22,22.3 L21.9,22.4 Z" />
                  <path fill="#FF3A44" d="M16.9,17.1 L1.4,32.6 C1.9,33.1 2.7,33.2 3.6,32.7 L21.9,22.3 L16.9,17.1 Z" />
                  <path fill="#00F076" d="M16.9,17 L21.9,11.8 L3.6,1.4 C2.7,0.9 1.9,1 1.4,1.5 L16.9,17 Z" />
                </g>

                {/* GET IT ON */}
                <text x="48" y="21" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="9" fill="#94A3B8" letterSpacing="0.5">GET IT ON</text>
                {/* Google Play */}
                <text x="47" y="39" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="19" fontWeight="600" fill="white" letterSpacing="-0.3">Google Play</text>
              </svg>
            </a>
          </motion.div>

          {/* Key Feature Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6 pt-2 text-xs sm:text-sm font-medium text-slate-400"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Funds Held</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Real-Time Sync</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Free Forever</span>
            </div>
          </motion.div>
        </div>

        {/* Darkrise-Style High-Tech App Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto rounded-[2.5rem] bg-gradient-to-b from-[#151B2C] to-[#0D111A] p-2 md:p-3 border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.8)]"
        >
          {/* Top border glow line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

          <div className="rounded-[2.2rem] bg-[#0B0E17]/90 p-6 md:p-10 border border-white/[0.06] overflow-hidden">
            {/* Mockup Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="h-4 w-px bg-white/10" />
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Users2 className="w-4 h-4 text-emerald-400" />
                  <span>Summer Road Trip 2026 • 5 Friends</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Simplified Debt Active
                </span>
              </div>
            </div>

            {/* Mockup Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {/* Card 1: Total Spent */}
              <div className="p-6 rounded-2xl bg-[#121726]/80 border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-3">
                  <span>Group Ledger Total</span>
                  <Receipt className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-3xl font-extrabold text-white tracking-tight">$1,482.50</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.06] pt-3">
                  <span>14 expenses logged</span>
                  <span className="text-emerald-400 font-semibold flex items-center">
                    All settled <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card 2: Your Share */}
              <div className="p-6 rounded-2xl bg-[#121726]/80 border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-3">
                  <span>Your Balance</span>
                  <span className="text-emerald-400 font-bold text-xs bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    You are owed
                  </span>
                </div>
                <p className="text-3xl font-extrabold text-emerald-400 tracking-tight">+$245.00</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.06] pt-3">
                  <span>From Alex & Maya</span>
                  <span className="text-slate-300 font-medium">1-Tap Settle</span>
                </div>
              </div>

              {/* Card 3: Debt Minimizer Flow */}
              <div className="p-6 rounded-2xl bg-[#121726]/80 border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-3">
                  <span>Smart Settle Route</span>
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs bg-white/5 p-2 rounded-xl">
                    <span className="text-slate-300">Alex → You</span>
                    <span className="font-bold text-white">$145.00</span>
                  </div>
                  <div className="flex items-center justify-between text-xs bg-white/5 p-2 rounded-xl">
                    <span className="text-slate-300">Maya → You</span>
                    <span className="font-bold text-white">$100.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
