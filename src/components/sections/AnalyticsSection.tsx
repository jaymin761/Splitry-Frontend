"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PieChart, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const data = [
  { name: "Jan", amount: 4000 },
  { name: "Feb", amount: 3000 },
  { name: "Mar", amount: 2000 },
  { name: "Apr", amount: 2780 },
  { name: "May", amount: 1890 },
  { name: "Jun", amount: 3400 },
];

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

            <div className="mt-6 h-[220px] w-full sm:h-[260px]" role="img" aria-label="Area chart of monthly group spending from January to June">
              <ResponsiveContainer width="100%" height="100%" initialDimension={{ width: 520, height: 260 }}>
                <AreaChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#03A671" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#03A671" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E8EA" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#98979F", fontSize: 12 }} />
                  <YAxis hide />
                  <Tooltip
                    formatter={(value) => [`$${Number(value).toLocaleString()}`, "Spend"]}
                    contentStyle={{ borderRadius: "14px", border: "1px solid #E6E8EA", boxShadow: "0 10px 30px rgba(40,40,44,0.10)", backgroundColor: "#FFFFFF", fontSize: 13 }}
                  />
                  <Area type="monotone" dataKey="amount" stroke="#03A671" strokeWidth={2.5} fillOpacity={1} fill="url(#colorAmount)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <figcaption className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border-stroke bg-background-soft p-4">
                <p className="text-xs font-medium text-muted">Total Shared</p>
                <p className="mt-1 text-xl font-bold text-primary-dark sm:text-2xl">$42,390</p>
              </div>
              <div className="rounded-2xl border border-border-stroke bg-background-soft p-4">
                <p className="text-xs font-medium text-muted">Avg. per Group</p>
                <p className="mt-1 text-xl font-bold text-primary-green sm:text-2xl">$1,240</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
};

export default AnalyticsSection;
