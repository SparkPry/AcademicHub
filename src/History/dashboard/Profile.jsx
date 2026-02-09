import React from "react";
import { BookOpen, GraduationCap, User } from "lucide-react";

export default function Profile() {
  const enrolledCourses = [
    { id: 1, title: "AI & Machine Learning", progress: 70 },
    { id: 2, title: "Quantum Computing Basics", progress: 45 },
    { id: 3, title: "Green Tech Innovations", progress: 100 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <GraduationCap className="w-8 h-8 text-cyan-400" /> Student Dashboard
      </h1>

      {/* Profile Summary */}
      <div className="p-4 bg-slate-800 border border-cyan-500 rounded-lg mb-6">
        <div className="flex items-center gap-4">
          <User className="w-12 h-12 text-cyan-400" />
          <div>
            <h2 className="text-xl font-semibold">Alice Doe</h2>
            <p className="text-slate-400">Student | Future Innovator 🚀</p>
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
      <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-cyan-400" /> Enrolled Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="bg-slate-800 border border-cyan-500 rounded-lg p-4"
          >
            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
            <div className="w-full bg-slate-700 rounded-full h-3 mb-2">
              <div
                className="bg-cyan-400 h-3 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="text-sm text-slate-400">
              Progress: {course.progress}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
