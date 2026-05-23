"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { TrendingUp, PieChart, Activity } from "lucide-react";

const data = [
  { name: "Jan", amount: 4000 },
  { name: "Feb", amount: 3000 },
  { name: "Mar", amount: 2000 },
  { name: "Apr", amount: 2780 },
  { name: "May", amount: 1890 },
  { name: "Jun", amount: 2390 },
];

const groupData = [
  { name: "Trip to Goa", value: 45 },
  { name: "Flatmates", value: 30 },
  { name: "Office Lunch", value: 15 },
  { name: "Gym", value: 10 },
];

const AnalyticsSection = () => {
  return (
    <section id="analytics" className="py-24 bg-background-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold mb-6">
              <Activity className="w-4 h-4" />
              Advanced Analytics
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Visualize your <br />
              <span className="text-primary-green">spending habits.</span>
            </h2>
            <p className="text-lg text-secondary-gray mb-10 leading-relaxed">
              Get a bird's-eye view of where your money goes. Our beautiful analytics help you and your friends stay on top of budgets and group spending.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-border-stroke shadow-sm">
                <TrendingUp className="w-8 h-8 text-primary-green mb-4" />
                <h4 className="text-xl font-bold mb-1">92% Accurate</h4>
                <p className="text-sm text-secondary-gray">Spending predictions for next month.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-border-stroke shadow-sm">
                <PieChart className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="text-xl font-bold mb-1">Group Splits</h4>
                <p className="text-sm text-secondary-gray">Automatically categorized by group.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-white border border-border-stroke shadow-premium"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              Monthly Spending Trend
              <span className="text-xs font-normal text-secondary-gray ml-auto">Last 6 months</span>
            </h3>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#03A671" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#03A671" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E8EA" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#98979F', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#03A671" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorAmount)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-background-soft border border-border-stroke">
                <p className="text-xs text-secondary-gray font-medium uppercase tracking-wider">Total Shared</p>
                <p className="text-2xl font-bold text-primary-dark">$42,390</p>
              </div>
              <div className="p-4 rounded-xl bg-background-soft border border-border-stroke">
                <p className="text-xs text-secondary-gray font-medium uppercase tracking-wider">Avg. per Group</p>
                <p className="text-2xl font-bold text-primary-green">$1,240</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
