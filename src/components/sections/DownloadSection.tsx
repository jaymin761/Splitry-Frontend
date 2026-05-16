"use client";

import React from "react";
import { motion } from "framer-motion";
import { Apple, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const DownloadSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] bg-primary-dark overflow-hidden p-12 md:p-24 text-center">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-green/20 blur-[100px] rounded-full"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-primary-green/20 blur-[100px] rounded-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/20 text-primary-green text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              Available now on iOS and Android
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to simplify <br />
              <span className="text-primary-green">shared expenses?</span>
            </h2>
            <p className="text-xl text-secondary-gray mb-12 max-w-xl mx-auto">
              Join 10,000+ users who split expenses the smart way. Download Splitry today and start tracking for free.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button size="lg" className="h-16 px-10 rounded-2xl group text-lg">
                <Apple className="mr-3 w-6 h-6 fill-current" />
                App Store
              </Button>
              <Button size="lg" variant="glass" className="h-16 px-10 rounded-2xl group text-lg bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Play className="mr-3 w-6 h-6 fill-current" />
                Google Play
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
