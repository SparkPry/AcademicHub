import React, { useState, useEffect } from 'react';
import { BookOpen, Cpu, Leaf, Rocket, Dna, Sun, Wind, Globe, Sparkles, GraduationCap, Users, Award } from 'lucide-react';

export default function Education2050() {
  const [particles, setParticles] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: Math.random() * 10 + 15,
    }));
    setParticles(newParticles);

    // Handle scroll
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    {
      icon: <Cpu className="w-16 h-16" />,
      title: "AI & Quantum Computing",
      desc: "Master next-gen artificial intelligence and quantum algorithms in immersive VR environments.",
      tags: ["AI", "Holographic", "Advanced"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Leaf className="w-16 h-16" />,
      title: "Sustainable Tech Design",
      desc: "Create eco-friendly innovations that harmonize technology with nature's principles.",
      tags: ["Eco-Tech", "Design", "Impact"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Dna className="w-16 h-16" />,
      title: "BioTech & Genomics",
      desc: "Explore genetic engineering and biotechnology with AR lab simulations.",
      tags: ["Biology", "Research", "VR Labs"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-16 h-16" />,
      title: "Space Architecture",
      desc: "Design sustainable habitats for Mars colonies and orbital stations.",
      tags: ["Space", "Engineering", "Future"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "10M+", label: "Global Learners", icon: <Users className="w-8 h-8" /> },
    { number: "100%", label: "Carbon Neutral", icon: <Leaf className="w-8 h-8" /> },
    { number: "500+", label: "Holographic Courses", icon: <BookOpen className="w-8 h-8" /> },
    { number: "24/7", label: "AI Tutoring", icon: <Sparkles className="w-8 h-8" /> }
  ];

  const energyIcons = [
    { icon: <Sun className="w-6 h-6" />, label: "Solar Powered" },
    { icon: <Wind className="w-6 h-6" />, label: "Wind Energy" },
    { icon: <Globe className="w-6 h-6" />, label: "Carbon Neutral" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white overflow-hidden relative">
      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 animate-float"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-xl border-b border-cyan-500/20 transition-all duration-300 hover:bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
            EduVerse 2050
          </div>
          <div className="flex gap-8 items-center">
            {['Home', 'Courses', 'VR Labs', 'Community', 'Portal'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative group text-slate-300 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-70 group-hover:opacity-100 animate-pulse" />
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Futuristic Cityscape */}
        <div style={{ transform: `translateY(${scrollY * 0.1}px)` }} className="absolute bottom-0 left-0 right-0 h-2/3 z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          {[
            { left: '5%', width: '120px', height: '400px', delay: 0 },
            { left: '20%', width: '100px', height: '350px', delay: 0.5 },
            { left: '35%', width: '140px', height: '450px', delay: 1 },
            { right: '35%', width: '110px', height: '380px', delay: 1.5 },
            { right: '20%', width: '130px', height: '420px', delay: 2 },
            { right: '5%', width: '100px', height: '360px', delay: 2.5 }
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
                  <div key={j} className="h-8 border-t border-cyan-500/20" style={{ marginTop: '30px' }} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nature Elements */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {[
            { emoji: '🌿', top: '25%', left: '8%', delay: 0 },
            { emoji: '🌳', top: '35%', left: '28%', delay: 1 },
            { emoji: '🍃', top: '28%', right: '25%', delay: 2 },
            { emoji: '🌱', top: '40%', right: '10%', delay: 1.5 }
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
          { top: '20%', left: '10%', delay: 0 },
          { top: '30%', right: '15%', delay: 1 }
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
          <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-float drop-shadow-2xl">
            Learn Beyond Boundaries
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-12 animate-fade-in-delayed">
            Education 2050 • Where Innovation Meets Sustainability
          </p>
          <button className="group relative px-12 py-5 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 rounded-full text-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105">
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
          </button>
        </div>
      </section>

      {/* Energy Icons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
        {energyIcons.map((energy, i) => (
          <div
            key={i}
            className="w-14 h-14 bg-slate-800/60 backdrop-blur-md border-2 border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-400/50 animate-energy-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
            title={energy.label}
          >
            {energy.icon}
          </div>
        ))}
      </div>

      {/* Courses Section */}
      <section className="relative z-30 py-24 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Future-Ready Learning Paths
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-slate-800/40 to-emerald-900/30 border border-cyan-400/30 rounded-3xl p-8 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40 hover:border-cyan-400/60 animate-card-float overflow-hidden"
              style={{ animationDelay: `${i * 0.5}s` }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className={`text-cyan-400 mb-6 transition-transform duration-500 ${activeCard === i ? 'animate-spin-slow' : ''}`}>
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {course.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {course.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-xs text-cyan-400 group-hover:bg-cyan-400/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-30 py-20 px-6 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group text-center p-8 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 border border-cyan-400/20 rounded-2xl transition-all duration-300 hover:-translate-y-4 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-400/20"
            >
              <div className="flex justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <div className="text-slate-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant */}
      <button className="fixed bottom-10 right-10 z-50 w-20 h-20 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center text-4xl shadow-2xl shadow-cyan-400/50 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-360 animate-assistant-pulse">
        <Sparkles className="w-10 h-10 text-slate-900" />
      </button>

      {/* Footer */}
      <footer className="relative z-30 py-12 px-6 text-center bg-slate-900/90 border-t border-cyan-400/20">
        <p className="text-slate-300 mb-2 text-lg">
          EduVerse 2050 • Building Tomorrow's Minds Today
        </p>
        <p className="text-slate-400 mb-6">
          Powered by Renewable Energy & Advanced AI • Carbon Neutral Platform
        </p>
        <div className="flex justify-center gap-6">
          {[<Globe />, <GraduationCap />, <Leaf />, <Award />].map((icon, i) => (
            <div
              key={i}
              className="text-cyan-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-360"
            >
              {React.cloneElement(icon, { className: "w-6 h-6" })}
            </div>
          ))}
        </div>
      </footer>

      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { opacity: 0; transform: translateY(0); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-100vh); }
        }
        
        @keyframes building-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.1); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.3); }
        }
        
        @keyframes sway {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(10px) rotate(5deg); }
        }
        
        @keyframes holo-float {
          0%, 100% { transform: translateY(0) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateY(10deg); }
        }
        
        @keyframes card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes energy-pulse {
          0%, 100% { box-shadow: 0 0 10px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 30px rgba(34, 211, 238, 0.6); }
        }
        
        @keyframes assistant-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 40px rgba(34, 211, 238, 0.5); }
          50% { transform: scale(1.1); box-shadow: 0 15px 60px rgba(34, 211, 238, 0.7); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(20px); }
          50% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        
        .animate-float { animation: float 20s infinite; }
        .animate-building-glow { animation: building-glow 4s ease-in-out infinite; }
        .animate-sway { animation: sway 4s ease-in-out infinite; }
        .animate-holo-float { animation: holo-float 4s ease-in-out infinite; }
        .animate-card-float { animation: card-float 5s ease-in-out infinite; }
        .animate-energy-pulse { animation: energy-pulse 3s ease-in-out infinite; }
        .animate-assistant-pulse { animation: assistant-pulse 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 2s ease-out; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .hover\\:rotate-360:hover { transform: rotate(360deg); }
      `}</style>
    </div>
  );
}