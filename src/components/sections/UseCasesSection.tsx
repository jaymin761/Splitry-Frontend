"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, MapPinned } from "lucide-react";
import { cn } from "@/lib/utils";
import { TiltCard } from "@/components/ui/TiltCard";

const useCases = [
  {
    emoji: "🏖️",
    title: "Weekend Trips",
    subtitle: "Vacations & Road Trips",
    items: ["Airbnb & Hotels", "Group Dinners", "Gas & Tolls", "Instant 1-Tap Settle"],
    glowColor: "from-amber-400/20 to-orange-500/10",
    badgeBg: "bg-amber-500/10 border-amber-500/20 text-amber-700",
  },
  {
    emoji: "🏠",
    title: "Roommates",
    subtitle: "Apartments & Living",
    items: ["Monthly Rent", "High-Speed WiFi", "Groceries", "Utilities & Bills"],
    glowColor: "from-blue-400/20 to-indigo-500/10",
    badgeBg: "bg-blue-500/10 border-blue-500/20 text-blue-700",
  },
  {
    emoji: "❤️",
    title: "Couples",
    subtitle: "Dates & Shared Living",
    items: ["Romantic Dinners", "Shopping Trips", "Holidays", "Shared Subscriptions"],
    glowColor: "from-rose-400/20 to-pink-500/10",
    badgeBg: "bg-rose-500/10 border-rose-500/20 text-rose-700",
  },
  {
    emoji: "🎉",
    title: "Events & Parties",
    subtitle: "Celebrations & Outings",
    items: ["Birthday Parties", "Office Outings", "Weddings", "Concerts & Tickets"],
    glowColor: "from-purple-400/20 to-violet-500/10",
    badgeBg: "bg-purple-500/10 border-purple-500/20 text-purple-700",
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      className="group relative h-full p-8 rounded-3xl bg-white border border-border-stroke hover:border-primary-green/40 transition-all duration-300 shadow-sm hover:shadow-[0_15px_35px_-5px_rgba(3,166,113,0.12)] overflow-hidden flex flex-col justify-between"
    >
      <div
        className={cn(
          "absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br opacity-80 blur-2xl transition-opacity group-hover:opacity-100",
          useCase.glowColor
        )}
      />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-16 h-16 rounded-2xl bg-background-soft border border-border-stroke flex items-center justify-center text-3xl shadow-inner [transform:translateZ(20px)] group-hover:scale-110 transition-transform">
            {useCase.emoji}
          </div>
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${useCase.badgeBg}`}>
            {useCase.subtitle}
          </span>
        </div>

        <h3 className="text-xl font-bold text-primary-dark mb-5 [transform:translateZ(15px)] group-hover:text-primary-green transition-colors">
          {useCase.title}
        </h3>

        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-3"
        >
          {useCase.items.map((item) => (
            <motion.li
              key={item}
              variants={itemVariants}
              className="flex items-center gap-2.5 text-secondary-gray"
            >
              <CheckCircle2 className="w-4 h-4 text-primary-green flex-shrink-0" />
              <span className="text-sm font-medium text-stone-700">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </TiltCard>
  </motion.div>
);

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-background-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold mb-6 border border-primary-green/20">
            <MapPinned className="w-4 h-4" />
            Real-Life Use Cases
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">
            Built for the moments <br />
            <span className="text-primary-green">that matter.</span>
          </h2>
          <p className="text-lg text-secondary-gray leading-relaxed">
            Not just features — real everyday scenarios where Splitry keeps everyone square effortlessly.
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
