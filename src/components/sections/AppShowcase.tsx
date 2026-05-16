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

      <div className="flex gap-8 px-6 animate-scroll whitespace-nowrap">
        {[...screens, ...screens].map((screen, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="inline-block flex-shrink-0 w-[280px] md:w-[350px] aspect-[9/19] relative rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl"
          >
            <Image
              src={screen.img}
              alt={screen.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <span className="text-white text-xl font-bold">{screen.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AppShowcase;
