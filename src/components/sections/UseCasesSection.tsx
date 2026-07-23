"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, MapPinned } from "lucide-react";
import { cn } from "@/lib/utils";
import { TiltCard } from "@/components/ui/TiltCard";

const useCases = [
  {
    emoji: "🏖️",
    title: "Weekend Trip",
    items: ["Shared hotel", "Shared food", "Fuel", "Settled in one tap"],
    color: "bg-orange-500",
  },
  {
    emoji: "🏠",
    title: "Roommates",
    items: ["Rent", "WiFi", "Grocery", "Electricity"],
    color: "bg-blue-500",
  },
  {
    emoji: "❤️",
    title: "Couples",
    items: ["Dinner", "Shopping", "Vacation"],
    color: "bg-pink-500",
  },
  {
    emoji: "🎉",
    title: "Events",
    items: ["Birthday", "Office Party", "Wedding"],
    color: "bg-purple-500",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

const UseCaseCard = ({
  useCase,
  index,
}: {
  useCase: (typeof useCases)[number];
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <TiltCard
      maxTilt={8}
      scale={1.03}
      className="group relative h-full p-8 rounded-3xl bg-white border border-border-stroke hover:border-primary-green/30 transition-colors shadow-sm hover:shadow-premium overflow-hidden"
    >
      <div
        className={cn(
          "absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20",
          useCase.color
        )}
      />

      <div className="relative w-16 h-16 rounded-2xl bg-background-soft border border-border-stroke flex items-center justify-center text-3xl mb-6 [transform:translateZ(20px)]">
        {useCase.emoji}
      </div>

      <h3 className="relative text-xl font-bold text-primary-dark mb-5 [transform:translateZ(15px)]">
        {useCase.title}
      </h3>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col gap-3"
      >
        {useCase.items.map((item) => (
          <motion.li
            key={item}
            variants={itemVariants}
            className="flex items-center gap-2.5 text-secondary-gray"
          >
            <CheckCircle2 className="w-4 h-4 text-primary-green flex-shrink-0" />
            <span className="text-[15px]">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </TiltCard>
  </motion.div>
);

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-background-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold mb-6">
            <MapPinned className="w-4 h-4" />
            Real-Life Use Cases
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">
            Built for the moments <br />
            <span className="text-primary-green">that matter.</span>
          </h2>
          <p className="text-lg text-secondary-gray">
            Not just features — real scenarios where Splitry keeps everyone square.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, i) => (
            <UseCaseCard key={useCase.title} useCase={useCase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
