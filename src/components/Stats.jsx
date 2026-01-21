import React from "react";
import { stats } from "../data/statsData";
import { Users, Leaf, BookOpen, Sparkles } from "lucide-react";

const iconMap = {
  users: <Users className="w-8 h-8" />,
  leaf: <Leaf className="w-8 h-8" />,
  bookopen: <BookOpen className="w-8 h-8" />,
  sparkles: <Sparkles className="w-8 h-8" />,
};

export default function Stats() {
  return (
    <section className="relative z-30 py-20 px-6 dark:bg-slate-900/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group text-center p-8 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 border border-cyan-400/20 rounded-2xl transition-all duration-300 hover:-translate-y-4 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-400/20"
          >
            <div className="flex justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              {iconMap[stat.icon]}
            </div>
            <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-3">
              {stat.number}
            </div>
            <div className="text-slate-400 text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
