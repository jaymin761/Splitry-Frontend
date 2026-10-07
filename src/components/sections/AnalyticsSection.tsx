import { PieChart, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CountUp } from "@/components/motion/CountUp";
import { LazyAnalyticsChart } from "@/components/sections/LazyAnalyticsChart";

const highlights = [
  { icon: TrendingUp, title: "98.4% Accurate", description: "AI receipt itemization & tax extraction." },
  { icon: PieChart, title: "Group Splits", description: "Categorized automatically by event or trip." },
];

const AnalyticsSection = () => {
  return (
    <section id="analytics" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Advanced Analytics"
            title={
              <>
                Visualize your <span className="text-primary-green">spending habits.</span>
              </>
            }
            description="Get a bird's-eye view of where your money goes. Our beautiful analytics help you and your friends stay on top of budgets and group spending effortlessly."
          />

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-border-stroke bg-white p-5 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary-green/20 bg-primary-green/10 text-primary-green">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-lg font-bold text-primary-dark">{title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-body">{description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <figure className="rounded-[2rem] border border-border-stroke bg-white p-5 shadow-lift sm:p-7">
            {/* Summary card mirrors the app's "Total balance" card */}
            <div className="balance-card rounded-3xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-bold sm:text-2xl">Monthly Group Spend</p>
                  <p className="mt-1 text-sm text-white/80">Real-time ledger aggregation</p>
                </div>
                <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold">Live Sync</span>
              </div>
            </div>

            <LazyAnalyticsChart />

            <figcaption className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border-stroke bg-background-soft p-4">
                <p className="text-xs font-medium text-muted">Total Shared</p>
                <p className="mt-1 text-xl font-bold text-primary-dark sm:text-2xl"><CountUp value={42390} prefix="$" /></p>
              </div>
              <div className="rounded-2xl border border-border-stroke bg-background-soft p-4">
                <p className="text-xs font-medium text-muted">Avg. per Group</p>
                <p className="mt-1 text-xl font-bold text-primary-green sm:text-2xl"><CountUp value={1240} prefix="$" /></p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
};

export default AnalyticsSection;
