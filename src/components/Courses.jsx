import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <section className="relative z-30 py-16 sm:py-20 md:py-24 px-4 sm:px-6 dark:bg-gradient-to-b from-transparent to-slate-900/50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-cyan-500 dark:bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent p-2 sm:p-4">
        Future-Ready Learning Paths
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {courses.map((course, i) => (
          <Link key={i} to="/courses">
            <div
              className="group relative h-full flex flex-col bg-white dark:bg-slate-900 shadow dark:border-2 dark:border-cyan-400/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40 hover:border-cyan-400/60 animate-card-float overflow-hidden"
              style={{ animationDelay: `${i * 0.5}s` }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className={`text-cyan-400 mb-4 sm:mb-6 transition-transform duration-500 flex-shrink-0 ${activeCard === i ? "animate-spin-slow" : ""}`}>
                {iconMap[course.icon]}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-cyan-400 dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                {course.title}
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-slate-500 mb-4 sm:mb-6 leading-relaxed line-clamp-3">{course.desc}</p>

              <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                {course.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 dark:bg-cyan-400/10 border text-gray-900 dark:border-cyan-400/30 rounded-full text-xs dark:text-cyan-400 group-hover:bg-cyan-400/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
