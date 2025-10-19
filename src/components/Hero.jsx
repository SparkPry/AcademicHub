import React, { useState, useEffect } from "react";

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
      {/* <div className="absolute inset-0 bg-slate-900 overflow-hidden z-0  ">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800 animate-float"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>   */}

      {/* Futuristic Cityscape */}
      <div
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        className="absolute bottom-0 left-0 right-0 h-2/3 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
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
            className="absolute bottom-0 bg-gradient-to-t from-slate-800/60 to-emerald-900/40 border border-cyan-500/30 backdrop-blur-sm animate-building-glow"
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
          { emoji: "🌿", top: "25%", left: "8%", delay: 0 },
          { emoji: "🌳", top: "35%", left: "28%", delay: 1 },
          { emoji: "🍃", top: "28%", right: "25%", delay: 2 },
          { emoji: "🌱", top: "40%", right: "10%", delay: 1.5 },
        ].map((nature, i) => (
          <div
            key={i}
            className="absolute text-5xl opacity-60 animate-sway"
            style={{
              top: nature.top,
              left: nature.left,
              right: nature.right,
              animationDelay: `${nature.delay}s`,
            }}
          >
            {nature.emoji}
          </div>
        ))}
      </div>

      {/* Holographic Students */}
      {[
        { top: "20%", left: "10%", delay: 0 },
        { top: "30%", right: "15%", delay: 1 },
      ].map((holo, i) => (
        <div
          key={i}
          className="absolute z-20 w-48 h-64 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-2 border-cyan-400/40 rounded-3xl backdrop-blur-md animate-holo-float"
          style={{
            top: holo.top,
            left: holo.left,
            right: holo.right,
            animationDelay: `${holo.delay}s`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-7xl animate-spin-slow">
            🎓
          </div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-30 text-center max-w-5xl animate-fade-in-up">
        <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-holo-float drop-shadow-2xl">
          Learn Beyond Boundaries
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 mb-12 animate-fade-in-delayed">
          Where Innovation Meets Sustainability
        </p>
        <button className="group relative px-12 py-5 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 rounded-full text-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105">
          <span className="relative z-10">Start Your Journey</span>
          <div className="absolute inset-0 bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
        </button>
      </div>
    </section>
  );
}
