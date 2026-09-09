"use client";

import React from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, PieChart, Activity } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const data = [
  { name: "Jan", amount: 4000 },
  { name: "Feb", amount: 3000 },
  { name: "Mar", amount: 2000 },
  { name: "Apr", amount: 2780 },
  { name: "May", amount: 1890 },
  { name: "Jun", amount: 3400 },
];

const AnalyticsSection = () => {
  return (
    <section id="analytics" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold mb-6 border border-primary-green/20">
              <Activity className="w-4 h-4" />
              Advanced Analytics
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">
              Visualize your <br />
              <span className="text-primary-green">spending habits.</span>
            </h2>
            <p className="text-lg text-secondary-gray mb-10 leading-relaxed">
              Get a bird's-eye view of where your money goes. Our beautiful analytics help you and your friends stay on top of budgets and group spending effortlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-background-soft border border-border-stroke hover:border-primary-green/30 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 text-primary-green">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-1">98.4% Accurate</h4>
                <p className="text-xs text-secondary-gray leading-relaxed">AI receipt itemization & tax extraction.</p>
              </div>

              <div className="p-6 rounded-2xl bg-background-soft border border-border-stroke hover:border-blue-500/30 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-600">
                  <PieChart className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-1">Group Splits</h4>
                <p className="text-xs text-secondary-gray leading-relaxed">Categorized automatically by event or trip.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard maxTilt={4} scale={1.01} className="p-8 rounded-[2.5rem] bg-white border border-border-stroke shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-primary-dark">Monthly Group Spend</h3>
                  <p className="text-xs text-secondary-gray mt-0.5">Real-time ledger aggregation</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-green/10 text-primary-green border border-primary-green/20">
                  Live Sync ⚡
                </span>
              </div>

              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#03A671" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#03A671" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E8EA" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#98979F', fontSize: 12}} />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{ borderRadius: '14px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.12)', backgroundColor: '#FFFFFF' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="amount"
                      stroke="#03A671"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorAmount)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-background-soft border border-border-stroke">
                  <p className="text-xs text-secondary-gray font-medium uppercase tracking-wider">Total Shared</p>
                  <p className="text-2xl font-bold text-primary-dark mt-1">$42,390</p>
                </div>
                <div className="p-4 rounded-2xl bg-background-soft border border-border-stroke">
                  <p className="text-xs text-secondary-gray font-medium uppercase tracking-wider">Avg. per Group</p>
                  <p className="text-2xl font-bold text-primary-green mt-1">$1,240</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
