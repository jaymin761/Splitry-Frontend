"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Sparkles } from "lucide-react";

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
            <p className="mt-6 text-xl text-secondary-gray max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Track, split, settle, and manage shared expenses with friends and groups effortlessly. Our AI automatically scans receipts, categorizes items, and calculates exact shares including tax and tip. Settle up instantly using secure UPI integration. No more awkward math, just seamless group finances.
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
        <div className="relative mt-12 lg:mt-0 flex justify-center items-center h-[400px] lg:h-[500px] w-full">
          {/* The container for abstract visualization */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] scale-75 md:scale-100">
            {/* SVG for connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* Lines from center (200,200) to nodes */}
              {[
                { x: 320, y: 80, delay: 0 },
                { x: 340, y: 280, delay: 0.2 },
                { x: 90, y: 310, delay: 0.4 },
                { x: 70, y: 130, delay: 0.6 },
              ].map((pos, i) => (
                <motion.line
                  key={i}
                  x1="200"
                  y1="200"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="url(#line-gradient)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 + pos.delay, ease: "easeOut" }}
                />
              ))}
            </svg>

            {/* Center Node (Main Expense) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="relative flex items-center justify-center w-28 h-28 bg-white rounded-full shadow-premium border border-border-stroke">
                {/* Pulsing ring */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full border-2 border-primary-green"
                />
                <div className="text-center z-10">
                  <p className="text-sm text-secondary-gray font-medium">Total</p>
                  <p className="text-xl font-bold text-primary-dark">$115</p>
                </div>
              </div>
            </motion.div>

            {/* Surrounding Nodes (Friends/Splits) */}
            {[
              { id: 1, x: 320, y: 80, label: "Alex", amount: "$25", color: "text-blue-600 border-blue-200", delay: 0.5 },
              { id: 2, x: 340, y: 280, label: "Sam", amount: "$40", color: "text-purple-600 border-purple-200", delay: 0.7 },
              { id: 3, x: 90, y: 310, label: "You", amount: "$15", color: "text-green-600 border-green-200", delay: 0.9 },
              { id: 4, x: 70, y: 130, label: "Mia", amount: "$35", color: "text-pink-600 border-pink-200", delay: 1.1 },
            ].map((node) => (
              <motion.div
                key={node.id}
                initial={{ scale: 0, opacity: 0, x: 200, y: 200 }}
                animate={{ scale: 1, opacity: 1, x: node.x, y: node.y }}
                transition={{ duration: 0.8, delay: node.delay, type: "spring", bounce: 0.4 }}
                className="absolute top-0 left-0 -ml-[36px] -mt-[36px] z-20 flex flex-col items-center"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + node.id * 0.5, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shadow-md border-2 bg-white ${node.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-current opacity-10"></div>
                    {node.label[0]}
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full shadow-sm border border-border-stroke text-sm font-bold text-primary-dark">
                    {node.amount}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Particles moving along lines */}
            {[
              { x1: 200, y1: 200, x2: 320, y2: 80, delay: 1 },
              { x1: 200, y1: 200, x2: 340, y2: 280, delay: 1.5 },
              { x1: 200, y1: 200, x2: 90, y2: 310, delay: 2 },
              { x1: 200, y1: 200, x2: 70, y2: 130, delay: 2.5 },
            ].map((particle, i) => (
              <motion.div
                key={`p-${i}`}
                initial={{ x: particle.x1, y: particle.y1, opacity: 0, scale: 0 }}
                animate={{
                  x: [particle.x1, particle.x2],
                  y: [particle.y1, particle.y2],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-0 -ml-2 -mt-2 w-4 h-4 bg-primary-green rounded-full blur-[2px] z-30"
              />
            ))}
          </div>

          {/* Glow effect */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full max-h-[500px] bg-primary-green/10 blur-[120px] rounded-full -z-10 pointer-events-none" /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
