import type { CSSProperties } from "react";
import { CheckCircle2, Receipt, ShieldCheck, Zap } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { StoreBadges } from "@/components/ui/StoreBadges";

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_80%_20%,rgba(3,166,113,0.12),transparent_70%)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28 lg:pt-20">
        {/* Copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Eyebrow className="animate-rise">Smart Expense Splitting</Eyebrow>

          <h1 style={{ "--rise-delay": "70ms" } as CSSProperties} className="animate-rise mt-6 text-[2.6rem] font-bold leading-[1.05] tracking-tight text-primary-dark text-balance sm:text-6xl xl:text-7xl">
            Split expenses <span className="text-primary-green">the smart way</span>
          </h1>

          <p style={{ "--rise-delay": "140ms" } as CSSProperties} className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg text-pretty">
            Track, split, settle, and manage shared expenses with friends and groups effortlessly. Splitry automatically scans receipts, categorizes items, and calculates exact shares including tax and tip. Record settlements in a tap — no money ever moves through Splitry.
          </p>

          <div style={{ "--rise-delay": "210ms" } as CSSProperties} className="animate-rise">
            <StoreBadges className="mt-8 justify-center lg:justify-start" />
          </div>

          <ul style={{ "--rise-delay": "280ms" } as CSSProperties} className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-primary-dark/75 lg:justify-start">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-[18px] w-[18px] text-primary-green" aria-hidden="true" />
              No Funds Held
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-[18px] w-[18px] text-primary-green" aria-hidden="true" />
              Real-time Sync
            </li>
          </ul>
        </div>

        {/* Visual */}
        <div style={{ "--rise-delay": "120ms" } as CSSProperties} className="animate-rise-scale relative mx-auto w-full max-w-[460px] lg:max-w-none">
          <div className="balance-card absolute inset-x-2 bottom-6 top-16 rounded-[2.5rem] sm:inset-x-6 lg:inset-x-4" aria-hidden="true" />

          <PhoneFrame
            src="/hero-mockup.jpeg"
            alt="Splitry home screen showing total balance, quick actions, and recent groups"
            width={720}
            height={1600}
            preload
            sizes="(min-width: 1024px) 300px, 260px"
            className="relative mx-auto w-[248px] sm:w-[280px] lg:w-[300px]"
          />

          {/* Floating app-style cards */}
          <div className="animate-float absolute -left-1 top-[30%] hidden w-[264px] rounded-2xl border border-border-stroke bg-white p-3.5 shadow-lift sm:flex sm:items-center sm:gap-3 lg:-left-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-green/20 bg-primary-green/10 text-primary-green">
              <Receipt className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-primary-dark">Group dinner</span>
              <span className="block whitespace-nowrap text-xs text-muted">You paid · 4 people</span>
            </span>
            <span className="text-right">
              <span className="block text-sm font-bold text-primary-green">$48.20</span>
              <span className="block text-[11px] text-muted">you lent</span>
            </span>
          </div>

          <div style={{ "--float-delay": "-2.5s" } as CSSProperties} className="animate-float absolute -right-1 bottom-[18%] hidden items-center gap-2.5 rounded-2xl border border-border-stroke bg-white px-4 py-3 shadow-lift sm:flex lg:-right-2">
            <CheckCircle2 className="h-5 w-5 text-primary-green" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary-dark">You are all settled up!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
