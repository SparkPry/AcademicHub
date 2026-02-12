import React, { useEffect, useState } from "react";
import { Sun, Wind, Globe, Moon } from "lucide-react";
import { energyIcons } from "../data/energyIconsData";


export default function EnergyIcons() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="fixed right-3 sm:right-6 bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-40 flex gap-3 sm:flex-col sm:gap-4 items-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-11 h-11 sm:w-14 sm:h-14 dark:bg-slate-800/60 backdrop-blur-md border-2 border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 cursor-pointer transition-all duration-300 hover:scale-110 sm:hover:scale-125 hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-400/50 animate-energy-pulse flex-shrink-0"
        title="Toggle Dark Mode"
      >
        {darkMode ? <Sun className="w-5 h-5 sm:w-6 sm:h-6" /> : <Moon className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>
    </div>
  );
}