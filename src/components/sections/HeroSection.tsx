import React from "react";
import { ShieldCheck, Zap, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-gradient-to-b from-[#03A671] via-[#028F61] to-[#027751] text-white">
      {/* Radial Top Glow Accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] -z-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.05) 60%, transparent 100%)",
        }}
      />

      {/* Modern Grid Pattern (Translucent White) */}
      <div
        className="absolute inset-0 -z-15 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* Ambient Radial Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-emerald-300/15 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Content */}
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6 border border-white/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-200" />
              Smart Expense Splitting
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Split expenses <br />
              <span className="text-emerald-100  decoration-emerald-300/40 decoration-wavy underline-offset-8">the smart way</span>
            </h1>

            <p className="mt-6 text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed font-normal">
              Track, split, settle, and manage shared expenses with friends and groups effortlessly. Splitry automatically scans receipts, categorizes items, and calculates exact shares including tax and tip. Record settlements in a tap — no money ever moves through Splitry.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-block transition-transform hover:scale-105 active:scale-95"
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
                <path
                  d="M34.42 27.17c-.03-3.32 2.72-4.94 2.84-5.01-1.55-2.27-3.97-2.58-4.82-2.61-2.04-.21-3.99 1.21-5.03 1.21-1.04 0-2.64-1.19-4.34-1.15-2.22.03-4.27 1.3-5.41 3.28-2.32 4.02-.59 9.97 1.66 13.23 1.1 1.59 2.41 3.38 4.13 3.31 1.66-.07 2.29-1.07 4.29-1.07 2.01 0 2.59 1.07 4.35 1.04 1.79-.03 2.92-1.62 4.01-3.22 1.27-1.84 1.79-3.63 1.82-3.72-.04-.02-3.47-1.33-3.5-5.29z"
                  fill="white"
                />
                <path
                  d="M31.15 17.56c.92-1.11 1.53-2.65 1.36-4.19-1.32.05-2.91.88-3.85 1.99-.85.97-1.59 2.52-1.39 4.01 1.47.11 2.97-.74 3.88-1.81z"
                  fill="white"
                />
                <text x="48" y="21" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="10" fill="white" letterSpacing="0.3">Download on the</text>
                <text x="47" y="39" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="21" fontWeight="600" fill="white" letterSpacing="-0.3">App Store</text>
              </svg>
            </a>

            <a
              href={process.env.NEXT_PUBLIC_ANDROID_STORE_URL || "https://play.google.com/store/apps/details?id=com.splitry.app.splitry"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block transition-transform hover:scale-105 active:scale-95"
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
                
                {/* Official 4-color Google Play logo */}
                <g transform="translate(16, 12) scale(0.85)">
                  <path fill="#00D2FF" d="M1.3,1.4 C1.1,1.7 1,2.1 1,2.6 L1,31.4 C1,31.9 1.1,32.3 1.3,32.6 L1.4,32.7 L16.8,17.3 L16.8,16.8 L1.4,1.4 L1.3,1.4 Z" />
                  <path fill="#FFC207" d="M21.9,22.4 L16.8,17.3 L16.8,16.8 L21.9,11.7 L22,11.8 L28.1,15.3 C29.8,16.3 29.8,17.8 28.1,18.8 L22,22.3 L21.9,22.4 Z" />
                  <path fill="#FF3A44" d="M16.9,17.1 L1.4,32.6 C1.9,33.1 2.7,33.2 3.6,32.7 L21.9,22.3 L16.9,17.1 Z" />
                  <path fill="#00F076" d="M16.9,17 L21.9,11.8 L3.6,1.4 C2.7,0.9 1.9,1 1.4,1.5 L16.9,17 Z" />
                </g>

                {/* GET IT ON */}
                <text x="48" y="21" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="9" fill="white" letterSpacing="0.5">GET IT ON</text>
                {/* Google Play */}
                <text x="47" y="39" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" fontSize="19" fontWeight="600" fill="white" letterSpacing="-0.3">Google Play</text>
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-100">
              <ShieldCheck className="w-5 h-5 text-white" />
              No Funds Held
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-100">
              <Zap className="w-5 h-5 text-white" />
              Real-time Sync
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
