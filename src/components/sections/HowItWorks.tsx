"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Receipt, CreditCard, ChevronRight } from "lucide-react";

const steps = [
  {
    title: "Create Group",
    description: "Start a group for a trip, household, or event and invite your friends in seconds.",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Add Expenses",
    description: "Snap a receipt or type an amount. Splitry automatically identifies and splits it for you.",
    icon: Receipt,
    color: "bg-emerald-500",
  },
  {
    title: "Settle Instantly",
    description: "Pay your friend however you like, then mark it settled in one tap. Splitry optimizes payments to minimize transfers.",
    icon: CreditCard,
    color: "bg-orange-500",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Split bills in <span className="text-primary-green">3 easy steps.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-1 bg-border-stroke -translate-y-1/2 z-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-1 bg-gradient-to-r from-primary-green via-primary-green to-emerald-400 -translate-y-1/2 z-0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white lg:bg-transparent"
              >
                <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center text-white mb-8 shadow-xl relative`}>
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-dark text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">{step.title}</h3>
                <p className="text-secondary-gray leading-relaxed max-w-xs">
                  {step.description}
                </p>
                
                {i < steps.length - 1 && (
                  <div className="mt-8 lg:hidden text-primary-green">
                    <ChevronRight className="w-8 h-8 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
