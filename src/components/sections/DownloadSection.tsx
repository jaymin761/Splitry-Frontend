"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] bg-primary-dark overflow-hidden p-12 md:p-24 text-center">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-green/20 blur-[100px] rounded-full"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-primary-green/20 blur-[100px] rounded-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/20 text-primary-green text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              Available now on iOS and Android
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to simplify <br />
              <span className="text-primary-green">shared expenses?</span>
            </h2>
            <p className="text-xl text-secondary-gray mb-12 max-w-xl mx-auto">
              Join 10,000+ users who split expenses the smart way. Download Splitry today and start tracking for free.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="#"
                className="inline-block transition-opacity hover:opacity-80 active:opacity-60"
                aria-label="Download on the App Store"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="190"
                  height="64"
                  viewBox="0 0 190 64"
                  aria-hidden="true"
                >
                  <rect width="190" height="64" rx="12" fill="black" />
                  <rect x="0.75" y="0.75" width="188.5" height="62.5" rx="11.25" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />

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
                  <text x="58" y="26" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="12" fill="white" letterSpacing="0.3">Download on the</text>

                  {/* App Store */}
                  <text x="56" y="48" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="26" fontWeight="600" fill="white" letterSpacing="-0.5">App Store</text>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
