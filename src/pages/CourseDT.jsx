import React, { useState } from "react";
import { useParams } from "react-router-dom";
import coursesDataPage from "../data/courseData";
import EnergyIcons from "../components/EnergyIcons";
import AssistantButton from "../components/AssistantButton";
import { Link } from "react-router-dom";
import { getLastLesson } from "../utils/progress";

const CoursePage = () => {
  const { slug } = useParams();

  const course = coursesDataPage.find((item) => item.slug === slug);

  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState({});
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  if (!course) {
    return (
      <div className="text-center py-24 text-3xl font-bold">
        Course Not Found
      </div>
    );
  }

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // const openVideoModal = (url) => {
  //   setVideoUrl(url);
  //   setVideoModalOpen(true);
  // };

  // const closeVideoModal = () => {
  //   setVideoModalOpen(false);
  //   setVideoUrl("");
  // };

  // const firstSectionIndex = 0;
  // const firstLessonIndex = 0;

  const lastLesson = getLastLesson(course.slug);

  const startLessonSlug = lastLesson || course.curriculum[0].lessons[0].slug;

  return (
    <main className="dark:bg-gradient-to-b from-slate-900 dark:text-gray-50 via-slate-800 to-slate-900">
      {/* ================= COURSE HEADER ================= */}
      {/* dark:bg-slate-800/30 border-2 border-cyan-400/20 rounded-3xl p-5 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 */}
      <section className="relative dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 mt-16 transition-all duration-500  ">
        <div className="container mx-auto p-8dark:bg-slate-800/30 border-2 border-cyan-400/20 rounded-3xl p-5 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 ">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Info */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                {course.title}
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {course.description}
              </p>

              {/* <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-lg text-white text-lg">
                Join Class
              </button> */}
              {/* <Link
                to={`/course/${course.slug}/lesson/${course.curriculum[0].lessons[0].slug}`}
                className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-lg text-white text-lg"
              >
                View Details
              </Link> */}
              <Link
                to={`/course/${course.slug}/lesson/${startLessonSlug}`}
                className="px-8 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-white"
              >
                {lastLesson ? "Continue Learning" : "Start Learning"}
              </Link>
            </div>

            {/* Image */}
            <div className="max-w-sm w-full">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-xl w-full"
                />
                <button className="absolute inset-0 flex items-center justify-center text-white text-4xl bg-black/30 rounded-xl">
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <div className="sticky top-16 bg-white dark:bg-gray-800 border-b z-10">
        <div className="container  mx-auto px-4">
          <nav className="flex gap-8 py-4">
            {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                    : "text-gray-500 dark:text-gray-50 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container  mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2">
          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <>
              <section className="mb-10 ">
                <h2 className="text-3xl font-bold mb-4 dark:text-gray-50">
                  About This Course
                </h2>
                {course.overview.about.map((text, i) => (
                  <p key={i} className="text-gray-700 dark:text-gray-300 mb-3">
                    {text}
                  </p>
                ))}
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.overview.learn.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-green-500">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {course.overview.requirements.map((req, i) => (
                    <li key={i}>• {req}</li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {/* CURRICULUM */}
          {activeTab === "curriculum" && (
            <>
              <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
              {course.curriculum.map((section, idx) => (
                <div key={idx} className="border rounded-md mb-4">
                  <button
                    onClick={() => toggleSection(idx)}
                    className="w-full flex justify-between p-4 font-semibold"
                  >
                    <span>{section.title}</span>
                    <span>{section.lessons.length} lessons</span>
                  </button>

                  {expandedSections[idx] && (
                    <div className="px-6 pb-4 space-y-2">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <Link
                          key={lesson.id}
                          to={`/course/${course.slug}/lesson/${course.curriculum[0].lessons[0].slug}`}
                          className="block hover:text-blue-600"
                        >
                          {lesson.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* INSTRUCTOR */}
          {activeTab === "instructor" && (
            <div>
              <div className="flex gap-6 items-center">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    {course.instructor.name}
                  </h3>
                  <p className="text-gray-500">{course.instructor.title}</p>
                </div>
              </div>

              <p className="mt-6 text-gray-700 dark:text-gray-300">
                {course.instructor.bio}
              </p>
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <p className="text-gray-600">Reviews feature coming soon 🚀</p>
          )}
        </div>

        {/* RIGHT */}
        <aside className="sticky top-24 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4">Course Includes</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✔ Lifetime access</li>
            <li>✔ Certificate</li>
            <li>✔ Downloadable resources</li>
            <li>✔ Mobile & TV access</li>
          </ul>
        </aside>
      </div>

      {/* VIDEO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-4xl">
            <div className="flex justify-between p-4 border-b">
              <h3 className="font-semibold">Lesson Video</h3>
              <button onClick={closeVideoModal}>✕</button>
            </div>
            <div className="aspect-video">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allowFullScreen
                title="Video"
              />
            </div>
          </div>
        </div>
      )}

      <EnergyIcons />
      <AssistantButton />
    </main>
  );
};

export default CoursePage;
