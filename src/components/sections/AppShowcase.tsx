"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const screens = [
  { title: "Dashboard", img: "/home-screen.png" },
  { title: "Add Contacts", img: "/add-contacts.png" },
  { title: "Groups", img: "/Group.png" },
  { title: "Create Group", img: "/create-group.png" },
];

const AppShowcase = () => {
  return (
    <section id="showcase" className="py-24 bg-primary-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Designed for the <span className="text-primary-green">best experience.</span>
        </h2>
      </div>

      {/* Slider Container with Premium Side Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Side Shadow Fade */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-primary-dark to-transparent z-20 pointer-events-none" />
        
        {/* Right Side Shadow Fade */}
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-primary-dark to-transparent z-20 pointer-events-none" />

        {/* Endless Marquee Loop */}
        <div className="animate-marquee gap-8 px-6">
          {[...screens, ...screens].map((screen, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-block flex-shrink-0 w-[260px] md:w-[320px] aspect-[9/19] relative rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl cursor-pointer"
            >
              <Image
                src={screen.img}
                alt={screen.title}
                fill
                unoptimized
                className="object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent flex items-end p-8">
                <span className="text-white text-lg md:text-xl font-bold tracking-tight">{screen.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
