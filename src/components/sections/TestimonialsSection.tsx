"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Digital Nomad",
    image: "https://i.pravatar.cc/150?u=alex",
    quote: "Splitry has completely changed how I travel with friends. No more messy spreadsheets or awkward money talks.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?u=priya",
    quote: "The AI receipt scanner is like magic. I just snap a photo and everything is perfectly split in seconds.",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?u=marcus",
    quote: "The UI is incredibly smooth. It feels like a premium app should. The UPI integration makes settling up instant.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Loved by <span className="text-primary-green">thousands of groups.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full md:w-[380px] p-8 rounded-[2rem] bg-background-soft border border-border-stroke relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-green/10 group-hover:text-primary-green/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-primary-dark">{t.name}</h4>
                  <p className="text-sm text-secondary-gray">{t.role}</p>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>

              <p className="text-primary-dark leading-relaxed italic text-lg">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
