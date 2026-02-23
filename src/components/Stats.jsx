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
    <section className="relative z-30 py-12 sm:py-16 md:py-20 px-4 sm:px-6 dark:bg-slate-900/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group text-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 border border-cyan-400/20 rounded-xl sm:rounded-2xl transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/30 hover:ring-1 hover:ring-cyan-400/40"
          >
            <div className="flex justify-center mb-3 sm:mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300 text-lg sm:text-xl">
              {iconMap[stat.icon]}
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2 md:mb-3">
              {stat.number}
            </div>
            <div className="text-slate-400 text-sm sm:text-base md:text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
