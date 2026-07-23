"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { Users, Target, ShieldCheck, Zap, Sparkles, ArrowRight } from "lucide-react";
import Link from 'next/link';

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">The Story Behind Splitry</h2>
                <div className="space-y-4 text-secondary-gray leading-relaxed text-lg">
                  <p>
                    It started at a group dinner. The check arrived, and what was supposed to be a fun night turned into a frustrating 20-minute math exercise involving tax, tip, and who had the extra appetizer.
                  </p>
                  <p>
                    We realized existing apps either required manual entry of every single item, or were too complex for everyday use. We knew there had to be a better, smarter way.
                  </p>
                  <p>
                    Today, Splitry is a dedicated team on a mission to eliminate financial friction between friends, utilizing advanced receipt scanning and smart algorithms to make splitting expenses feel like magic.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[350px] rounded-[2rem] overflow-hidden bg-[#F0FBF8] border border-[#E0F2EC] flex items-center justify-center p-8 group">
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-green/20 via-transparent to-transparent group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-glow flex items-center justify-center text-primary-green">
                  <Sparkles className="w-16 h-16 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Our Core Values</h2>
              <p className="text-secondary-gray text-lg">The principles that guide every feature we build and every decision we make.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-border-stroke hover:border-primary-green/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-background-soft border border-border-stroke flex items-center justify-center text-primary-dark mb-6 group-hover:bg-primary-green/10 group-hover:text-primary-green group-hover:border-primary-green/20 transition-all">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">{value.title}</h3>
                  <p className="text-secondary-gray leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="bg-primary-dark rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-green via-transparent to-transparent" />
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
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
