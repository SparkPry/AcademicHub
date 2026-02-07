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
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 items-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-14 h-14 dark:bg-slate-800/60 backdrop-blur-md border-2 border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-400/50 animate-energy-pulse"
        title="Toggle Dark Mode"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  );
}