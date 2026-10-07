"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", amount: 4000 },
  { name: "Feb", amount: 3000 },
  { name: "Mar", amount: 2000 },
  { name: "Apr", amount: 2780 },
  { name: "May", amount: 1890 },
  { name: "Jun", amount: 3400 },
];

/** Recharts area chart. Loaded on demand by LazyAnalyticsChart, so it draws in when it mounts. */
export default function AnalyticsChart({ animate }: { animate: boolean }) {
  return (
    <ResponsiveContainer width="100%" height="100%" initialDimension={{ width: 520, height: 260 }}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
        <defs>
          <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#03A671" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#03A671" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E8EA" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#98979F", fontSize: 12 }} />
        <YAxis hide />
        <Tooltip
          formatter={(value) => [`$${Number(value).toLocaleString()}`, "Spend"]}
          contentStyle={{ borderRadius: "14px", border: "1px solid #E6E8EA", boxShadow: "0 10px 30px rgba(40,40,44,0.10)", backgroundColor: "#FFFFFF", fontSize: 13 }}
        />
        <Area
          isAnimationActive={animate}
          animationDuration={1400}
          animationEasing="ease-out"
          type="monotone"
          dataKey="amount"
          stroke="#03A671"
          strokeWidth={2.5}
          fillOpacity={1}
          fill="url(#colorAmount)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
