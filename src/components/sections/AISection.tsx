"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Wand2, Lightbulb, Bot } from "lucide-react";

const AISection = () => {
  return (
    <section id="ai" className="py-24 relative bg-primary-dark overflow-hidden text-white">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-green/20 via-transparent to-transparent" />
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/20 text-primary-green text-sm font-semibold mb-6">
                <Brain className="w-4 h-4" />
                Intelligent Automation
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Powered by intelligent <br />
                <span className="text-primary-green text-glow">expense automation.</span>
              </h2>
              <p className="mt-8 text-xl text-secondary-gray leading-relaxed max-w-xl">
                Our advanced AI engine handles the tedious parts of expense tracking. From scanning complex restaurant bills to predicting your monthly travel budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Wand2, title: "Smart Suggestions", desc: "Predicts categories and groups for your new expenses." },
                { icon: Sparkles, title: "Bill Parsing", desc: "Extracts individual items from group dinner receipts." },
                { icon: Lightbulb, title: "Saving Insights", desc: "Identifies patterns to help your group save more." },
                { icon: Bot, title: "AI Reminders", desc: "Gentle automated nudges to settle pending debts." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-green/20 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary-green" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-secondary-gray leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Visualization */}
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center w-full mt-12 lg:mt-0">
            <div className="absolute w-[120%] h-[120%] bg-primary-green/10 blur-[120px] rounded-full pointer-events-none" />
            
            {/* Concentric Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border border-primary-green/20 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full border border-primary-green/30 opacity-50"
              style={{ borderStyle: 'dotted' }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border-2 border-primary-green/10"
            />

            {/* Pulsing AI Core */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center z-20"
            >
              <div className="absolute inset-0 bg-primary-green/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute inset-0 bg-primary-green/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
              
              {/* Brain Container with Laser */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 bg-primary-dark border border-primary-green/50 rounded-[2rem] shadow-[0_0_40px_rgba(3,166,113,0.4)] flex items-center justify-center overflow-hidden group">
                <Brain className="w-12 h-12 md:w-16 md:h-16 text-primary-green relative z-10" />
                
                {/* Scanning Laser */}
                <motion.div
                  animate={{ top: ['-20%', '120%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-12 bg-gradient-to-b from-transparent via-primary-green/30 to-transparent z-20 border-b-2 border-primary-green shadow-[0_5px_15px_rgba(3,166,113,0.5)]"
                />
              </div>
            </motion.div>
            
            {/* Flowing Data Particles */}
            {[...Array(8)].map((_, i) => {
              // Generate random starting positions along the outer ring
              const angle = (i / 8) * Math.PI * 2;
              const radius = 240; // md:480px / 2
              const startX = Math.cos(angle) * radius;
              const startY = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={`particle-${i}`}
                  initial={{ opacity: 0, scale: 0, x: startX, y: startY }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0.5, 1, 0.5],
                    x: 0, 
                    y: 0 
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: i * 0.3,
                    ease: "easeInOut" 
                  }}
                  className="absolute w-2 h-2 bg-primary-green rounded-full shadow-[0_0_10px_#03A671] z-10"
                />
              );
            })}
            
            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 md:-right-10 glass p-4 rounded-2xl text-white text-xs md:text-sm font-bold border-primary-green/30 shadow-[0_10px_30px_rgba(3,166,113,0.2)] bg-primary-dark/80 backdrop-blur-xl flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 rounded-full bg-primary-green/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-green" />
              </div>
              <div>
                <p className="text-[10px] text-secondary-gray font-normal uppercase tracking-wider mb-1">Status</p>
                <p className="text-primary-green">Scanning Receipt... 87%</p>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 md:-left-10 glass p-4 rounded-2xl text-white text-xs md:text-sm font-bold border-blue-500/30 shadow-[0_10px_30px_rgba(59,130,246,0.2)] bg-primary-dark/80 backdrop-blur-xl flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] text-secondary-gray font-normal uppercase tracking-wider mb-1">AI Prediction</p>
                <p className="text-blue-400">Food & Dining: ₹4,200</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 20px rgba(3, 166, 113, 0.5);
        }
      `}</style>
    </section>
  );
};

export default AISection;
