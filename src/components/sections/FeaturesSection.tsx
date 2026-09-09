"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  MessageSquare,
  BarChart3,
  Bell,
  Scale,
  BrainCircuit,
  PiggyBank,
  BellRing,
  Sparkles
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const features = [
  {
    title: "Smart Expense Splitting",
    description: "Intelligent algorithms to split bills by percentage, shares, or exact amounts with tax and tip.",
    icon: Zap,
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
    iconClass: "text-emerald-600",
  },
  {
    title: "Real-time Group Chat",
    description: "Discuss expenses and coordinate settlements with your friends seamlessly without leaving Splitry.",
    icon: MessageSquare,
    bgClass: "bg-purple-500/10 border-purple-500/20",
    iconClass: "text-purple-600",
  },
  {
    title: "Budget Analytics",
    description: "Deep dive into your group spending habits with beautiful interactive visual charts.",
    icon: BarChart3,
    bgClass: "bg-blue-500/10 border-blue-500/20",
    iconClass: "text-blue-600",
  },
  {
    title: "Spending Insights",
    description: "Get predictive insights into future group expenses based on historical spending patterns.",
    icon: BrainCircuit,
    bgClass: "bg-amber-500/10 border-amber-500/20",
    iconClass: "text-amber-600",
  },
  {
    title: "Auto Nudge Reminders",
    description: "Never forget a debt. Smart automated reminders send polite nudges to keep balances square.",
    icon: Bell,
    bgClass: "bg-rose-500/10 border-rose-500/20",
    iconClass: "text-rose-600",
  },
  {
    title: "Debt Simplification",
    description: "Minimize total transaction count between friends using our advanced settlement matrix.",
    icon: Scale,
    bgClass: "bg-teal-500/10 border-teal-500/20",
    iconClass: "text-teal-600",
  },
  {
    title: "Budget Planner",
    description: "Set custom group budgets and track category limits in real time to stay in control.",
    icon: PiggyBank,
    bgClass: "bg-indigo-500/10 border-indigo-500/20",
    iconClass: "text-indigo-600",
  },
  {
    title: "Recurring Bill Alerts",
    description: "Stay ahead of rent, WiFi, and subscription renewals with timely recurring expense alerts.",
    icon: BellRing,
    bgClass: "bg-cyan-500/10 border-cyan-500/20",
    iconClass: "text-cyan-600",
  },
];

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bgClass: string;
  iconClass: string;
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <TiltCard
        maxTilt={6}
        scale={1.02}
        className="group relative p-8 rounded-3xl bg-[#111522]/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(3,166,113,0.15)] h-full flex flex-col justify-between overflow-hidden"
      >
        {/* Subtle hover gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="relative z-10">
          <div className={`w-13 h-13 rounded-2xl border ${feature.bgClass} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 [transform:translateZ(20px)]`}>
            <Icon className={`w-6 h-6 ${feature.iconClass}`} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 [transform:translateZ(15px)] group-hover:text-emerald-400 transition-colors">
            {feature.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>
      </TiltCard>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 bg-[#080A0F] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-green/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 border border-emerald-500/25">
            <Sparkles className="w-4 h-4" />
            Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Everything you need to <br />
            <span className="gradient-text-emerald">manage shared finances.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Powerful tools designed for speed, clarity, and total automation. Stop worrying about who owes what.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
