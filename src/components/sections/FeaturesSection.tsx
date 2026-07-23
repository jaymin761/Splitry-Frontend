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
  BellRing
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TiltCard } from "@/components/ui/TiltCard";

const features = [
  {
    title: "Smart Expense Splitting",
    description: "Intelligent algorithms to split bills by percentage, shares, or exact amounts.",
    icon: Zap,
    color: "bg-blue-500",
  },
  // {
  //   title: "Group Management",
  //   description: "Organize trips, roommates, or events with dedicated expense groups.",
  //   icon: Users,
  //   color: "bg-indigo-500",
  // },
  {
    title: "Real-time Chat",
    description: "Discuss expenses and coordinate with your group without leaving the app.",
    icon: MessageSquare,
    color: "bg-pink-500",
  },
  {
    title: "Budget Analytics",
    description: "Deep dive into your spending habits with beautiful interactive charts.",
    icon: BarChart3,
    color: "bg-cyan-500",
  },
  {
    title: "Spending Insights",
    description: "Get insights into future expenses based on your past spending patterns.",
    icon: BrainCircuit,
    color: "bg-yellow-600",
  },
  {
    title: "Auto Reminders",
    description: "Never forget a debt. Smart reminders send nudges to keep things square.",
    icon: Bell,
    color: "bg-red-500",
  },
  {
    title: "Debt Simplification",
    description: "Minimize the number of transactions with our advanced settlement logic.",
    icon: Scale,
    color: "bg-teal-500",
  },
  {
    title: "Budget Planner",
    description: "Set monthly budgets and track your spending to stay in control.",
    icon: PiggyBank,
    color: "bg-lime-600",
  },
  {
    title: "Bill Reminders",
    description: "Never miss a payment with timely reminders for bills and recurring expenses.",
    icon: BellRing,
    color: "bg-indigo-500",
  },
];

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <TiltCard
      maxTilt={7}
      scale={1.02}
      className="group relative p-8 rounded-3xl bg-white border border-border-stroke hover:border-primary-green/30 transition-colors shadow-sm hover:shadow-premium"
    >
      <div className={cn(
        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 [transform:translateZ(20px)]",
        feature.color,
        "bg-opacity-10"
      )}>
        <feature.icon className={cn("w-6 h-6", feature.color.replace("bg-", "text-"))} />
      </div>
      <h3 className="text-xl font-bold text-primary-dark mb-3 [transform:translateZ(15px)]">{feature.title}</h3>
      <p className="text-secondary-gray leading-relaxed">{feature.description}</p>

      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 rounded-full bg-primary-green animate-ping" />
      </div>
    </TiltCard>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">
            Everything you need to <br />
            <span className="text-primary-green">manage shared finances.</span>
          </h2>
          <p className="text-lg text-secondary-gray">
            Powerful tools designed for speed, clarity, and automation. Stop worrying about who owes what.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
