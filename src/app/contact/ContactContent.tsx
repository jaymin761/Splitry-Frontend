"use client";

import React from 'react';
import { Mail, MessageSquare, ArrowRight, HelpCircle, ShieldAlert } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from 'next/link';

export default function ContactContent() {
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

  return (
    <div className="flex-grow relative z-10 flex items-center justify-center px-6 py-24 md:py-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary-green/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00C6FF]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto mt-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green font-semibold text-sm w-fit mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
              We&apos;re online and ready to help
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold text-primary-dark mb-6 leading-[1.1]">
              Let&apos;s get in <span className="gradient-text">Touch</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-secondary-gray leading-relaxed mb-10 max-w-md">
              Whether you have a question about our features, need support, or just want to share feedback, we&apos;d love to hear from you.
            </motion.p>

            <motion.div variants={itemVariants} className="p-6 bg-white rounded-3xl border border-border-stroke shadow-sm relative overflow-hidden group hover:border-alert-red/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-alert-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-12 h-12 bg-alert-red/10 text-alert-red rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2">Account Deletion</h3>
                  <p className="text-secondary-gray text-sm mb-4 leading-relaxed">
                    Need to permanently delete your account and data? Send us an email and we will process it within 60 days.
                  </p>
                  <a href="mailto:hello@splitry.com?subject=Account%20Deletion%20Request" className="text-sm font-semibold text-alert-red flex items-center gap-1 hover:gap-2 transition-all">
                    Request Deletion <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Main Email Card */}
            <a
              href="mailto:hello@splitry.com"
              className="sm:col-span-2 block bg-[#F0FBF8] rounded-[2rem] p-8 md:p-10 border border-[#E0F2EC] hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="w-16 h-16 bg-[#168C72] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Mail className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-dark mb-3">Email Us</h3>
                  <p className="text-[#4F5E71] mb-8 text-lg max-w-md">
                    Drop us an email and we&apos;ll get back to you within 24 hours. We&apos;re always happy to chat!
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#168C72] font-bold text-xl group-hover:gap-4 transition-all">
                    hello@splitry.com <ArrowRight className="w-6 h-6" />
                  </span>
                </div>
                {/* Optional decorative element on the right */}
                <div className="hidden sm:block w-32 h-32 bg-primary-green/5 rounded-full border border-primary-green/10" />
              </div>
            </a>

            {/* Support / FAQ Card */}
            <Link href="/faq" className="bg-white rounded-[2rem] p-8 border border-border-stroke hover:border-primary-green/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-background-soft border border-border-stroke rounded-2xl flex items-center justify-center text-primary-dark mb-6 group-hover:bg-primary-green/10 group-hover:text-primary-green group-hover:border-primary-green/20 transition-all">
                <HelpCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Help Center</h3>
              <p className="text-secondary-gray text-sm mb-6 leading-relaxed">
                Find quick answers in our detailed FAQ section.
              </p>
              <span className="text-sm font-semibold text-primary-dark group-hover:text-primary-green flex items-center gap-1 transition-colors">
                Visit FAQ <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Social / Community Card */}
            <div className="bg-white rounded-[2rem] p-8 border border-border-stroke hover:border-primary-green/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-background-soft border border-border-stroke rounded-2xl flex items-center justify-center text-primary-dark mb-6 group-hover:bg-primary-green/10 group-hover:text-primary-green group-hover:border-primary-green/20 transition-all">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Community</h3>
              <p className="text-secondary-gray text-sm mb-6 leading-relaxed">
                Follow us on social media for updates and news.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/profile.php?id=61590603446388" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background-soft border border-border-stroke flex items-center justify-center text-primary-dark hover:bg-primary-green hover:border-primary-green hover:text-white transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/splitryapp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background-soft border border-border-stroke flex items-center justify-center text-primary-dark hover:bg-primary-green hover:border-primary-green hover:text-white transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
