"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-20 border-y border-border-stroke bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          {/* Social Proof */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-primary-green flex items-center justify-center text-white text-xs font-bold">
                10k+
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-semibold text-primary-dark">4.9/5 Rating</span>
              <span className="text-sm text-secondary-gray">by 10,000+ happy users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
