"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-28 px-6 bg-[#080A0F]">
      <div className="max-w-7xl mx-auto [perspective:1600px]">
        <motion.div
          initial={{ opacity: 0, rotateX: 8, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[3rem] bg-gradient-to-b from-[#151B2C] to-[#0A0D15] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.9)] overflow-hidden p-12 md:p-24 text-center"
        >
          {/* Top border glow line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

          {/* Animated Background Gradients */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-green/25 blur-[120px] rounded-full"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-emerald-500/20 blur-[120px] rounded-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-semibold mb-8 border border-emerald-500/25">
              <Sparkles className="w-4 h-4" />
              Available now on iOS and Android
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
              Ready to simplify <br />
              <span className="gradient-text-emerald">shared expenses?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl mx-auto">
              Join 10,000+ users who split expenses the smart way. Download Splitry today and start tracking for free.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href={process.env.NEXT_PUBLIC_IOS_STORE_URL || "https://apps.apple.com/us/app/splitry-split-expenses/id6803580203"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] rounded-[14px] active:scale-95"
                aria-label="Download on the App Store"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="190"
                  height="64"
                  viewBox="0 0 190 64"
                  aria-hidden="true"
                >
                  <rect width="190" height="64" rx="12" fill="#0B0E14" />
                  <rect x="0.75" y="0.75" width="188.5" height="62.5" rx="11.25" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />

                  {/* Apple logo */}
                  <path
                    d="M41.5 32.2c-.04-3.95 3.23-5.87 3.38-5.96-1.84-2.7-4.71-3.07-5.73-3.1-2.43-.25-4.74 1.44-5.97 1.44-1.23 0-3.14-1.41-5.16-1.37-2.64.04-5.08 1.55-6.43 3.9-2.76 4.78-.7 11.85 1.97 15.73 1.31 1.89 2.87 4.02 4.91 3.94 1.97-.08 2.72-1.27 5.1-1.27 2.39 0 3.08 1.27 5.17 1.24 2.13-.04 3.48-1.93 4.77-3.83 1.51-2.19 2.13-4.31 2.16-4.42-.05-.02-4.13-1.58-4.17-6.3z"
                    fill="white"
                  />
                  <path
                    d="M37.47 20.47c1.09-1.32 1.82-3.15 1.62-4.98-1.57.06-3.46 1.05-4.58 2.36-1.01 1.16-1.89 3-1.65 4.77 1.75.13 3.53-.88 4.61-2.15z"
                    fill="white"
                  />

                  {/* Download on the */}
                  <text x="58" y="26" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="12" fill="#94A3B8" letterSpacing="0.3">Download on the</text>

                  {/* App Store */}
                  <text x="56" y="48" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="26" fontWeight="600" fill="white" letterSpacing="-0.5">App Store</text>
                </svg>
              </a>

              <a
                href={process.env.NEXT_PUBLIC_ANDROID_STORE_URL || "https://play.google.com/store/apps/details?id=com.splitry.app.splitry"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(3,166,113,0.35)] rounded-[14px] active:scale-95"
                aria-label="Get it on Google Play"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="190"
                  height="64"
                  viewBox="0 0 190 64"
                  aria-hidden="true"
                >
                  <rect width="190" height="64" rx="12" fill="#0B0E14" />
                  <rect x="0.75" y="0.75" width="188.5" height="62.5" rx="11.25" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />

                  {/* Official 4-color Google Play logo */}
                  <g transform="translate(18, 14) scale(1.02)">
                    <path fill="#00D2FF" d="M1.3,1.4 C1.1,1.7 1,2.1 1,2.6 L1,31.4 C1,31.9 1.1,32.3 1.3,32.6 L1.4,32.7 L16.8,17.3 L16.8,16.8 L1.4,1.4 L1.3,1.4 Z" />
                    <path fill="#FFC207" d="M21.9,22.4 L16.8,17.3 L16.8,16.8 L21.9,11.7 L22,11.8 L28.1,15.3 C29.8,16.3 29.8,17.8 28.1,18.8 L22,22.3 L21.9,22.4 Z" />
                    <path fill="#FF3A44" d="M16.9,17.1 L1.4,32.6 C1.9,33.1 2.7,33.2 3.6,32.7 L21.9,22.3 L16.9,17.1 Z" />
                    <path fill="#00F076" d="M16.9,17 L21.9,11.8 L3.6,1.4 C2.7,0.9 1.9,1 1.4,1.5 L16.9,17 Z" />
                  </g>

                  {/* GET IT ON */}
                  <text x="56" y="26" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="11" fill="#94A3B8" letterSpacing="0.5">GET IT ON</text>

                  {/* Google Play */}
                  <text x="55" y="48" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="23" fontWeight="600" fill="white" letterSpacing="-0.3">Google Play</text>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
