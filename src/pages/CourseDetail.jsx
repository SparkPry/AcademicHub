import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Clock,
  BookOpen,
  PlayCircle,
  Star,
  ArrowLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import coursesDataPage from "../data/coursesDataPage";

export default function CourseDetail() {
  const { id } = useParams();
  const course = coursesDataPage.find((c) => c.id === parseInt(id));

  // 💾 load saved progress from localStorage (if exists)
  const savedProgress = JSON.parse(localStorage.getItem(`course_${id}_progress`)) || {
    isLearning: false,
    currentLesson: 0,
    completed: false,
  };

  const [isLearning, setIsLearning] = useState(savedProgress.isLearning);
  const [currentLesson, setCurrentLesson] = useState(savedProgress.currentLesson);
  const [completed, setCompleted] = useState(savedProgress.completed);

  const lessons = [
    { id: 1, title: "Introduction & Overview", duration: "10 min", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 2, title: "Core Concepts Explained", duration: "25 min", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
    { id: 3, title: "Practical Project Walkthrough", duration: "30 min", video: "https://www.youtube.com/embed/E7wJTI-1dvQ" },
    { id: 4, title: "Quiz & Summary", duration: "15 min", video: "https://www.youtube.com/embed/fzQ6gRAEoy0" },
  ];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">
        <h2 className="text-2xl">Course not found ❌</h2>
      </div>
    );
  }

  const progress = ((currentLesson + 1) / lessons.length) * 100;

  // 💾 save progress automatically when state changes
  useEffect(() => {
    localStorage.setItem(
      `course_${id}_progress`,
      JSON.stringify({ isLearning, currentLesson, completed })
    );
  }, [isLearning, currentLesson, completed, id]);

  // 💾 reset progress if user completes course
  const handleComplete = () => {
    setCompleted(true);
    setIsLearning(false);
    setCurrentLesson(0);
    localStorage.setItem(
      `course_${id}_progress`,
      JSON.stringify({ isLearning: false, currentLesson: 0, completed: true })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/courses"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
        </Link>

        {/* Course Completed */}
        {completed && (
          <div className="mb-6 p-4 bg-emerald-600/20 border border-emerald-400/40 rounded-xl text-emerald-300 flex items-center gap-3">
            <CheckCircle className="w-5 h-5" />
            <span>You have completed this course. 🎉</span>
          </div>
        )}

        {/* Learning Mode */}
        {isLearning ? (
          <>
            {/* Video Player */}
            <div className="bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-4 mb-8">
              <iframe
                className="w-full h-[450px] rounded-xl"
                src={lessons[currentLesson].video}
                title={lessons[currentLesson].title}
                frameBorder="0"
                allowFullScreen
              ></iframe>

              <div className="mt-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-cyan-300">
                  {lessons[currentLesson].title}
                </h2>
                <span className="text-slate-400">
                  {lessons[currentLesson].duration}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 rounded-full h-3 mt-4 overflow-hidden">
                <div
                  className="h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setCurrentLesson((prev) => Math.max(prev - 1, 0))}
                  disabled={currentLesson === 0}
                  className="px-5 py-2 bg-slate-800 text-cyan-300 rounded-lg disabled:opacity-40 hover:bg-slate-700 transition"
                >
                  ← Previous
                </button>

                {currentLesson < lessons.length - 1 ? (
                  <button
                    onClick={() => setCurrentLesson((prev) => prev + 1)}
                    className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 rounded-lg font-semibold hover:scale-105 transition-transform"
                  >
                    Next Lesson →
                  </button>
                ) : (
                  <button
                    onClick={handleComplete}
                    className="px-5 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" /> Complete Course
                  </button>
                )}
              </div>
            </div>

            {/* Lesson List */}
            <div className="bg-slate-800/40 border border-cyan-400/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-cyan-300 mb-4">
                Lesson List
              </h2>
              <div className="space-y-3">
                {lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    onClick={() => setCurrentLesson(index)}
                    className={`flex justify-between items-center border border-cyan-400/20 rounded-xl p-4 cursor-pointer transition-colors ${
                      index === currentLesson
                        ? "bg-cyan-400/20 border-cyan-400"
                        : "bg-slate-900/40 hover:bg-slate-900/70"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <PlayCircle className="w-6 h-6 text-cyan-400" />
                      <span className="text-lg">{lesson.title}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Course Overview */}
            <div className="bg-slate-800/50 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-md mb-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="w-full lg:w-1/2">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-xl shadow-xl border border-cyan-400/30"
                  />
                </div>

                <div className="w-full lg:w-1/2 space-y-4">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    {course.title}
                  </h1>
                  <p className="text-slate-300 text-lg">{course.description}</p>

                  <div className="flex items-center gap-5 text-slate-400">
                    <Clock className="w-5 h-5 text-cyan-400" /> {course.duration}
                    <Star className="w-5 h-5 text-yellow-400" /> {course.rating}
                    <BookOpen className="w-5 h-5 text-emerald-400" />{" "}
                    {lessons.length} Lessons
                  </div>

                  {/* 💾 Resume or Start button */}
                  <button
                    onClick={() => setIsLearning(true)}
                    className="mt-4 py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold hover:scale-105 transition-transform"
                  >
                    {completed
                      ? "Review Course"
                      : savedProgress.isLearning
                      ? "Continue Learning"
                      : "Start Learning"}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
