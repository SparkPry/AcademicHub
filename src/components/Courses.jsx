import React, { useState } from "react";
import { Code, Smartphone, Database, ShieldCheck } from "lucide-react";
import { courses } from "../data/coursesData";

const iconMap = {
  code: <Code className="w-16 h-16" />,
  smartphone: <Smartphone className="w-16 h-16" />,
  database: <Database className="w-16 h-16" />,
  shield: <ShieldCheck className="w-16 h-16" />,
};


export default function Courses() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative z-30 py-24 px-6 dark:bg-gradient-to-b from-transparent to-slate-900/50">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-slate-900/90  dark:bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent p-4">
        Future-Ready Learning Paths
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, i) => (
          <div
            key={i}
            // group relative  dark:bg-gradient-to-br from-slate-800/40 to-emerald-900/30 border border-cyan-400/30 rounded-3xl p-8 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40 hover:border-cyan-400/60 animate-card-float overflow-hidden
            className="group relative bg-white dark:bg-slate-900   border-2 border-cyan-400/30 rounded-3xl p-8 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40 hover:border-cyan-400/60 animate-card-float overflow-hidden"
            style={{ animationDelay: `${i * 0.5}s` }}
            onMouseEnter={() => setActiveCard(i)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className={`text-cyan-400 mb-6 transition-transform duration-500 ${activeCard === i ? "animate-spin-slow" : ""}`}>
              {iconMap[course.icon]}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
              {course.title}
            </h3>

            <p className="text-slate-500 mb-6 leading-relaxed">{course.desc}</p>

            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-4 py-2 dark:bg-cyan-400/10 border border-cyan-400/30 rounded-full text-xs text-cyan-400 group-hover:bg-cyan-400/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
