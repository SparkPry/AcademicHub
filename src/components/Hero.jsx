import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sprout, Trees, Leaf, Wind } from "lucide-react";
export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Star Background */}

      {/* Futuristic Cityscape */}
      <div
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        className="absolute bottom-0 left-0 right-0 h-2/3 z-10"
      >
        <div className="absolute inset-0 dark:bg-gradient-to-t from-slate-500 to-transparent" />
        {[
          { left: "5%", width: "120px", height: "400px", delay: 0 },
          { left: "20%", width: "100px", height: "350px", delay: 0.5 },
          { left: "35%", width: "140px", height: "450px", delay: 1 },
          { right: "35%", width: "110px", height: "380px", delay: 1.5 },
          { right: "20%", width: "130px", height: "420px", delay: 2 },
          { right: "5%", width: "100px", height: "360px", delay: 2.5 },
        ].map((building, i) => (
          <div
            key={i}
            className="absolute bottom-0 bg-gradient-to-t from-slate-800/60 to-emerald-500/40 border border-cyan-500/30 backdrop-blur-sm"
            style={{
              ...building,
              animationDelay: `${building.delay}s`,
            }}
          >
            <div className="absolute inset-4 opacity-30">
              {Array.from({ length: 10 }).map((_, j) => (
                <div
                  key={j}
                  className="h-8 border-t border-cyan-500/20"
                  style={{ marginTop: "30px" }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Nature Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[
          { Icon: Sprout, top: "25%", left: "8%", delay: 0 },
          { Icon: Trees, top: "35%", left: "28%", delay: 1 },
          { Icon: Leaf, top: "28%", right: "25%", delay: 2 },
          { Icon: Wind, top: "40%", right: "10%", delay: 1.5 },
        ].map((nature, i) => {
          const { Icon, ...props } = nature;
          return (
            <div
              key={i}
              className="absolute opacity-60 text-cyan-400"
              style={{
                top: props.top,
                left: props.left,
                right: props.right,
                animationDelay: `${props.delay}s`,
              }}
            >
              <Icon className="w-16 h-16" strokeWidth={1.5} />
            </div>
          );
        })}
      </div>
      {/* Hero Content */}
      <div className="relative z-30 text-center max-w-5xl animate-fade-in-up px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-holo-float drop-shadow-2xl">
          Learn Beyond Boundaries
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-900 dark:text-slate-300 mb-8 sm:mb-12 animate-fade-in-delayed">
          Where Innovation Meets Sustainability
        </p>
        <Link
          className="group relative inline-block px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-100 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105"
          to="/courses"
        >
          <span className="relative z-10">Start Your Journey</span>
          <div className="absolute inset-0 bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
        </Link>
      </div>
    </section>
  );
}
