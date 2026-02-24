import React, { useEffect, useState } from "react";
import { BookOpen, Clock, Star, PlayCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import EnergyIcons from "../components/EnergyIcons";
// import AssistantButton from "../components/AssistantButton";
import api from "../services/api";
import Logo from "../assets/imgs/Acad.png";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: null, y: null });

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourse = async () => {
      try{
        const res = await api.get("/courses");
        setCourses(res.data);
      }catch (err) {
        console.error("Error fetching course:",err);
      }finally{
        setLoading(false);
      }
    };
    fetchCourse();
  },[]);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Loading course...</p>
        </div>
      </div>
    );
  }

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-cyan-50 to-slate-100 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 sm:mt-10">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent px-2">
          Explore Courses
        </h1>
        <p className="text-slate-400 dark:slate-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg px-2">
          Learn cutting-edge topics designed for the Education 2050 Era
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border dark:border text-xs sm:text-sm dark:border-cyan-300 transition-all duration-300 whitespace-nowrap
              ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold"
                  : " text-gray-800 dark:text-cyan-500 hover:bg-cyan-400/20"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {filteredCourses.map((course) => (
          <Link key={course.id} to={`/course/${course.slug}`}>
            <div
              className="group relative h-full flex flex-col dark:bg-slate-800/30 shadow dark:border-2 dark:border-cyan-400/20 rounded-3xl p-5 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50"
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
                src={course.thumbnail}
                alt={course.title}
                className="rounded-xl mb-4 border border-cyan-400/20 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all"
              />
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-cyan-400 transition-colors">
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

              <div className="flex justify-between items-center mt-auto text-lg font-bold text-gray-900 dark:text-cyan-400">
                <div className="flex gap-4">
                  <img
                    className="w-10 rounded-full"
                    src={Logo}
                    alt=""
                  />
                  <p>Academic Hub</p>
                </div>
                <span className="text-emerald-400 dark:text-cyan-400">${course.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <EnergyIcons />
      {/* <AssistantButton /> */}
    </div>
  );
}
