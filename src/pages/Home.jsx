import React, { useState, useEffect } from "react";
import Navbar from "../components/navBar";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import EnergyIcons from "../components/EnergyIcons";
import AssistantButton from "../components/AssistantButton";
import Particles from "../components/Particles";


export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-200 overflow-x-hidden">  
        {/* Floating Particles */}
        <Particles />
        {/* Hero Section */}
        <Hero scrollY={scrollY} />
      {/* Floating Energy Icons */}
      <EnergyIcons />

      {/* Courses Section */}
      <Courses />

      {/* Stats Section */}
      <Stats />

      {/* AI Assistant Button */}
      <AssistantButton />

      {/* You can keep all your CSS keyframes in global CSS */}
    </div>
  );
}
