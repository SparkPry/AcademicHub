import React from "react";
import { Globe, GraduationCap, Leaf, Award } from "lucide-react";

export default function Footer() {
  const icons = [<Globe />, <GraduationCap />, <Leaf />, <Award />];

  return (
    <footer className="relative z-30 py-12 px-6 text-center bg-slate-900/90 border-t border-cyan-400/20">
      <p className="text-slate-300 mb-2 text-lg">
        EduVerse 2050 • Building Tomorrow's Minds Today
      </p>
      <p className="text-slate-400 mb-6">
        Powered by Renewable Energy & Advanced AI • Carbon Neutral Platform
      </p>
      <div className="flex justify-center gap-6">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="text-cyan-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-360"
          >
            {React.cloneElement(icon, { className: "w-6 h-6" })}
          </div>
        ))}
      </div>
    </footer>
  );
}
