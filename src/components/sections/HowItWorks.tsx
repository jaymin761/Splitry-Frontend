"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Receipt, CreditCard, ChevronRight, Workflow } from "lucide-react";

const steps = [
  {
    title: "1. Create Group",
    description: "Start a group for a trip, household, or event and invite your friends in seconds with a simple invite link or QR code.",
    icon: Users,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "2. Split Expenses",
    description: "Splitry automatically categorizes items, calculates tax, and assigns exact shares.",
    icon: Receipt,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "3. Settle Instantly",
    description: "Record settlements in one tap. Splitry minimizes required transactions so everyone gets squared up with zero hassle.",
    icon: CreditCard,
    gradient: "from-amber-500 to-orange-600",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary-green/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold mb-6 border border-primary-green/20">
            <Workflow className="w-4 h-4" />
            Simple 3-Step Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">
            Split bills in <span className="text-primary-green">3 easy steps.</span>
          </h2>
          <p className="text-lg text-secondary-gray max-w-2xl mx-auto leading-relaxed">
            Zero complex setups. Clear ledgers from day one.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connecting Bar */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-1 bg-stone-200 -translate-y-1/2 z-0 rounded-full" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-primary-green to-orange-500 -translate-y-1/2 z-0 rounded-full"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex flex-col items-center text-center p-8 rounded-3xl bg-background-soft border border-border-stroke hover:border-primary-green/30 hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06)] transition-all duration-300 group"
                >
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-tr ${step.gradient} flex items-center justify-center text-white mb-8 shadow-xl shadow-stone-300/50 relative transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                    <Icon className="w-10 h-10" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-dark border-2 border-white text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary-green transition-colors">{step.title}</h3>
                  <p className="text-secondary-gray leading-relaxed text-sm max-w-xs">
                    {step.description}
                  </p>

                  {i < steps.length - 1 && (
                    <div className="mt-8 lg:hidden text-primary-green animate-bounce">
                      <ChevronRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
