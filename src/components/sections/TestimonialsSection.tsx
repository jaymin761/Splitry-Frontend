"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { TiltCard } from "@/components/ui/TiltCard";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Digital Nomad",
    image: "https://i.pravatar.cc/150?u=alex",
    quote: "Splitry has completely changed how I travel with friends. No more messy spreadsheets or awkward money talks after vacations.",
    rating: 5,
    tag: "Trip Leader",
  },
  {
    name: "Priya Sharma",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?u=priya",
    quote: "The AI receipt scanner is pure magic. I just snap a photo at dinner and everything is itemized with tax & tip in seconds.",
    rating: 5,
    tag: "Early Adopter",
  },
  {
    name: "Marcus Chen",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?u=marcus",
    quote: "The UI is incredibly smooth and fast. No money is ever held in the app, which makes instant 1-tap settlements effortless.",
    rating: 5,
    tag: "Power User",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-[#080A0F] overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 border border-emerald-500/25">
            <Star className="w-4 h-4 fill-emerald-400" />
            Loved by 10,000+ Groups
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Loved by <span className="gradient-text-emerald">thousands of groups.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            See how Splitry helps friends stay square across trips, apartments, and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <TiltCard maxTilt={6} scale={1.02} className="p-8 rounded-[2.5rem] bg-[#111522]/90 border border-white/10 hover:border-emerald-500/40 relative group shadow-lg hover:shadow-[0_0_30px_rgba(3,166,113,0.15)] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-md">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-white">{t.name}</h4>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 mb-5 bg-amber-500/10 px-3 py-1 rounded-full w-fit border border-amber-500/20">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-amber-400 ml-1.5">5.0</span>
                  </div>

                  <p className="text-slate-300 leading-relaxed italic text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-emerald-400">Verified Splitry User</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 font-semibold text-slate-300 border border-white/10">{t.tag}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
