import React, { useState } from "react";
import { BookOpen, Clock, Star, PlayCircle, X } from "lucide-react";
import courseData from "../data/courseData";
import { Link } from "react-router-dom";
import EnergyIcons from "../components/EnergyIcons";
import AssistantButton from "../components/AssistantButton";
import { useParams } from "react-router-dom";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: null, y: null });


   const categories = [
    "All",
    ...new Set(courseData.map((course) => course.category)),
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courseData
      : courseData.filter((c) => c.category === selectedCategory);


  return (
    <div className="relative min-h-screen dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-200 py-24 px-auto">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Explore Courses
        </h1>
        <p className="text-slate-400 dark:slate-300 mt-4 text-lg">
          Learn cutting-edge topics designed for the Education 2050 Era 
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border-2 border-cyan-400/40 transition-all duration-300 
              ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold"
                  : "text-cyan-300 hover:bg-cyan-400/20"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <Link key={course.id} to={`/course/${course.slug}`}>
            <div
              className="group relative dark:bg-slate-800/30 border-2 border-cyan-400/20 rounded-3xl p-5 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50"
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
              <p className="text-slate-400 dark:text-slate-300 text-sm mb-4">
                {course.description}
              </p>

              <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  {course.rating}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 text-lg font-bold text-cyan-400">
                <div className="flex gap-4">
                  <img
                    className="w-10 rounded-full"
                    src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"
                    alt=""
                  />
                  <p>LearnKH</p>
                </div>
                <span>$40</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ===== Enroll Modal ===== */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-slate-900/90 border border-cyan-400/30 rounded-2xl shadow-2xl w-96 max-w-full p-6 text-white relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-red-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Enroll in {selectedCourse.title}
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold hover:scale-105 transition-transform"
              >
                Confirm Enrollment
              </button>
            </form>
          </div>
        </div>
      )}

      <EnergyIcons />
      <AssistantButton />
    </div>
  );
}
{
  /* <button
              onClick={() => handleEnrollClick(course)}
              className="mt-5 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold hover:scale-105 transition-transform"
            >
              Enroll Now
            </button> */
}

// ================================================================
{
  /* <div>
              <Link
                to={`/course/${course.id}`}
                className="mt-4 block text-center py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold hover:scale-105 transition-transform"
              >
                View Details
              </Link>
            </div> */
}
