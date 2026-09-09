"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { Users, Target, ShieldCheck, Zap, Sparkles, ArrowRight, Star } from "lucide-react";
import Link from 'next/link';
import { TiltCard } from '@/components/ui/TiltCard';

export default function AboutContent() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const values = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Smart Simplicity",
      description: "We leverage cutting-edge technology to eliminate manual math, scanning receipts instantly with pinpoint accuracy."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Friendship First",
      description: "Money shouldn't ruin friendships. We make settling up fair, transparent, and completely stress-free."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Uncompromising Privacy",
      description: "Your financial data is yours. We use bank-level encryption and never sell your personal information."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Blazing Fast",
      description: "No more spending hours calculating who owes what. Snap a photo and let Splitry do the heavy lifting in seconds."
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "4.9", label: "Average Rating", icon: <Star className="w-4 h-4 fill-current text-yellow-400" /> },
    { value: "8,450+", label: "Reviews" },
    { value: "$0", label: "Funds Ever Held" },
  ];

  const storySteps = [
    "It started at a group dinner. The check arrived, and what was supposed to be a fun night turned into a frustrating 20-minute math exercise involving tax, tip, and who had the extra appetizer.",
    "We realized existing apps either required manual entry of every single item, or were too complex for everyday use. We knew there had to be a better, smarter way.",
    "Today, Splitry is a dedicated team on a mission to eliminate financial friction between friends, utilizing advanced receipt scanning and smart algorithms to make splitting expenses feel like magic.",
  ];

  return (
    <div className="flex-grow relative z-10 py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-[#00C6FF]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green font-semibold text-sm w-fit mx-auto">
              <Target className="w-4 h-4" />
              Our Mission
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-primary-dark leading-[1.1]">
              Reinventing how friends <span className="gradient-text">split expenses.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-secondary-gray leading-relaxed pt-4">
              We built Splitry because we believe that sharing moments with friends shouldn&apos;t be overshadowed by the awkwardness of figuring out the bill.
            </motion.p>
          </div>

          {/* The Story Section */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-border-stroke shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-green/5 to-transparent rounded-bl-full pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-10 text-center">The Story Behind Splitry</h2>
              <div className="flex flex-col">
                {storySteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex gap-5"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary-green/10 text-primary-green font-bold flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </div>
                      {idx < storySteps.length - 1 && (
                        <div className="w-px flex-1 bg-border-stroke my-2" />
                      )}
                    </div>
                    <p className="text-secondary-gray leading-relaxed text-lg pb-8">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Strip */}
          {/* <motion.div
            variants={itemVariants}
            className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-border-stroke shadow-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <p className="flex items-center justify-center gap-1 text-4xl md:text-5xl font-extrabold text-primary-dark">
                    {stat.icon}
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-secondary-gray uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Values Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Our Core Values</h2>
              <p className="text-secondary-gray text-lg">The principles that guide every feature we build and every decision we make.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <TiltCard
                    maxTilt={7}
                    scale={1.015}
                    className="group relative p-8 rounded-[2rem] bg-white border border-border-stroke hover:border-primary-green/30 transition-colors shadow-sm hover:shadow-premium"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-background-soft border border-border-stroke flex items-center justify-center text-primary-dark mb-6 group-hover:bg-primary-green/10 group-hover:text-primary-green group-hover:border-primary-green/20 transition-all [transform:translateZ(20px)]">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-3 [transform:translateZ(15px)]">{value.title}</h3>
                    <p className="text-secondary-gray leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, rotateX: 8, y: 30 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="[perspective:1600px]"
          >
            <div className="bg-primary-dark rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-green/20 blur-[100px] rounded-full"
                />
                <motion.div
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-primary-green/20 blur-[100px] rounded-full"
                />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Ready to stop doing math?</h2>
                <p className="text-[#98979F] text-lg">
                  Join thousands of friends who have already switched to Splitry for stress-free expense splitting.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 bg-primary-green text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#128C63] hover:scale-105 transition-all shadow-glow">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
