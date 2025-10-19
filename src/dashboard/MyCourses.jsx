import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, CheckCircle, PlayCircle } from "lucide-react";
import coursesDataPage from "../data/coursesDataPage";

export default function MyCourses() {
  const [progressData, setProgressData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [particles, setParticles] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: null, y: null });

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const savedProgress = coursesDataPage.map((course) => {
      const data =
        JSON.parse(localStorage.getItem(`course_${course.id}_progress`)) || {};
      const currentLesson = data.currentLesson || 0;
      const totalLessons = 4;
      const progress = ((currentLesson + 1) / totalLessons) * 100;
      const completed = data.completed || false;
      return { ...course, progress, completed, currentLesson };
    });
    setProgressData(savedProgress);
  }, []);

  const filteredCourses = progressData.filter((course) => {
    if (filter === "in-progress")
      return !course.completed && course.progress > 0;
    if (filter === "completed") return course.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white py-20 px-6 overflow-hidden relative">
      {/* Floating Neon Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => {
          if (!hoveredCard || mousePos.x === null)
            return (
              <div
                key={p.id}
                className="absolute rounded-full bg-cyan-400/50 animate-particle"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.duration}s`,
                }}
              />
            );

          // Calculate distance to mouse
          const dx = (p.left * window.innerWidth) / 100 - mousePos.x;
          const dy = (p.top * window.innerHeight) / 100 - mousePos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const influence = Math.max(0, 1 - dist / 150);

          return (
            <div
              key={p.id}
              className="absolute rounded-full bg-emerald-400/80 animate-particle-fast transition-all duration-200"
              style={{
                left: `${p.left + influence * 2}%`,
                top: `${p.top + influence * 2}%`,
                width: `${p.size + influence * 2}px`,
                height: `${p.size + influence * 2}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration / (1 + influence)}s`,
                opacity: 0.3 + influence * 0.7,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-neon-glow">
          My Learning Dashboard
        </h1>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            { label: "All Courses", value: "all" },
            { label: "In Progress", value: "in-progress" },
            { label: "Completed", value: "completed" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 border border-cyan-400/30 backdrop-blur-sm ${
                filter === tab.value
                  ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 shadow-lg shadow-cyan-400/50 animate-neon-glow"
                  : "bg-slate-800/40 text-slate-300 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-cyan-400/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <p className="text-center text-slate-300">
            No courses found for this filter.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group relative bg-slate-800/30 border border-cyan-400/20 rounded-3xl p-5 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50"
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setMousePos({ x: null, y: null });
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-xl mb-4 border border-cyan-400/20 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all"
                />
                <h2 className="text-xl font-bold mb-2 text-cyan-400 group-hover:text-emerald-400 transition-colors">
                  {course.title}
                </h2>
                <p className="text-slate-300 text-sm mb-4">
                  {course.description}
                </p>

                {/* Neon Progress Bar */}
                <div className="w-full bg-slate-900 rounded-full h-3 mb-3 overflow-hidden">
                  <div
                    className={`h-3 ${
                      course.completed
                        ? "bg-emerald-400"
                        : "bg-gradient-to-r from-cyan-400 to-emerald-400"
                    } transition-all duration-500 animate-glow-bar`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-slate-400 text-sm mb-3">
                  <span>{course.progress.toFixed(0)}% Complete</span>
                  {course.completed ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Completed
                    </span>
                  ) : (
                    <span className="text-cyan-400 flex items-center gap-1">
                      <BookOpen className="w-4 h-4" /> In Progress
                    </span>
                  )}
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className={`block text-center py-3 rounded-lg font-semibold transition-transform hover:scale-105 ${
                    course.completed
                      ? "bg-emerald-400 text-slate-900 shadow-md shadow-emerald-400/50 animate-neon-glow"
                      : "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 shadow-md shadow-cyan-400/50 animate-neon-glow"
                  }`}
                >
                  {course.completed ? (
                    <div className="flex justify-center items-center gap-2">
                      <CheckCircle className="w-5 h-5" /> Review Course
                    </div>
                  ) : (
                    <div className="flex justify-center items-center gap-2">
                      <PlayCircle className="w-5 h-5" /> Continue Learning
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Neon Glow Animations */}
      <style jsx>{`
        @keyframes particle {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) scale(0.5);
          }
        }

        @keyframes particle-fast {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.7);
          }
          50% {
            opacity: 1;
            transform: translateY(-30px) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translateY(-60px) scale(0.7);
          }
        }

        .animate-particle {
          animation: particle infinite ease-in-out;
        }
        .animate-particle-fast {
          animation: particle-fast infinite ease-in-out;
        }

        @keyframes neon-glow {
          0%,
          100% {
            text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff;
          }
          50% {
            text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;
          }
        }

        @keyframes glow-bar {
          0%,
          100% {
            box-shadow: 0 0 5px #0ff;
          }
          50% {
            box-shadow: 0 0 15px #0ff;
          }
        }

        .animate-neon-glow {
          animation: neon-glow 1.5s ease-in-out infinite alternate;
        }
        .animate-glow-bar {
          animation: glow-bar 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
