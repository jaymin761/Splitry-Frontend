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
        className="group relative p-8 rounded-3xl bg-white border border-border-stroke hover:border-primary-green/40 transition-all duration-300 shadow-sm hover:shadow-[0_15px_35px_-5px_rgba(3,166,113,0.12)] h-full flex flex-col justify-between"
      >
        <div>
          <div className={`w-13 h-13 rounded-2xl border ${feature.bgClass} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 [transform:translateZ(20px)]`}>
            <Icon className={`w-6 h-6 ${feature.iconClass}`} />
          </div>
          <h3 className="text-xl font-bold text-primary-dark mb-3 [transform:translateZ(15px)] group-hover:text-primary-green transition-colors">
            {feature.title}
          </h3>
          <p className="text-secondary-gray text-sm leading-relaxed">{feature.description}</p>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 rounded-full bg-primary-green animate-ping" />
        </div>
      </TiltCard>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold mb-6 border border-primary-green/20">
            <Sparkles className="w-4 h-4" />
            Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">
            Everything you need to <br />
            <span className="text-primary-green">manage shared finances.</span>
          </h2>
          <p className="text-lg text-secondary-gray leading-relaxed">
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
