import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import EnergyIcons from "../components/EnergyIcons";
// import AssistantButton from "../components/AssistantButton";

import api from "../services/api";
import { getMyEnrollments } from "../services/studentApi";

const CourseDT = () => {
  const { slug } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [enrolled, setEnrolled] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/slug/${slug}`);
        setCourse(res.data);
        setEnrolled(res.data?.isEnrolled || false);
      } catch (err) {
        console.error("Error fetching course:", err);
        setError(err.message || "Failed to load course");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  // After course is loaded, verify enrollment via /enrollments/my
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!course || !token) return;

    const checkEnrollment = async () => {
      try {
        const res = await getMyEnrollments();
        const enrollments = res.data || [];

        const matched =
          Array.isArray(enrollments) &&
          enrollments.some((e) => {
            // support several possible shapes
            const courseObj = e.course || e.course_data || null;
            return (
              (courseObj &&
                (courseObj.id === course.id ||
                  courseObj.slug === course.slug)) ||
              e.courseId === course.id ||
              e.course_id === course.id
            );
          });

        setEnrolled(Boolean(matched));
      } catch (err) {
        console.error("Error checking enrollments:", err);
      }
    };

    checkEnrollment();
  }, [course]);

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

  // Error state
  if (error || !course) {
    return (
      <div className="flex items-center justify-center min-h-screen dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-300 mb-4">
            Course Not Found
          </h2>
          <p className="text-gray-400 mb-6">
            {error || "Unable to load course"}
          </p>
          <Link
            to="/courses"
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white transition"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const token = localStorage.getItem("token");
  const isEnrolled = enrolled || (token && course.isEnrolled);
  // const canAccessContent = isEnrolled; // You can add more logic here if needed
  // Using async directly on handleEnroll
  async function handleEnroll(courseId, token) {
    if (!token) {
      setError("You must be logged in to enroll.");
      return;
    }

    try {
      const res = await api.post(
        `/enrollments/${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setOverlayVisible(true);

      console.log("Enrollment successful:", res.data);
      setEnrolled(true);
    } catch (err) {
      console.error("Error enrolling course:", err);
      setError(err.message || "Enrollment failed");
    }
  }



  return (
    <main className="dark:bg-gradient-to-b from-slate-900 dark:text-gray-50 via-slate-800 to-slate-900">
      {/* ================= COURSE HEADER ================= */}
      {/* dark:bg-slate-800/30 border-2 border-cyan-400/20 rounded-3xl p-5 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 */}
      <section className="relative dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 mt-16 transition-all duration-500  ">
        <div className="container mx-auto p-8 dark:bg-slate-800/30 border-2 border-cyan-400/20 rounded-3xl p-5 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 ">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Info */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                {course.title}
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {course.description}
              </p>

              <button
                onClick={() => handleEnroll(course.id, token)}
                className="px-8 py-3 bg-green-600 hover:bg-green-500 hover:scale-105 rounded-lg text-white cursor-pointer disabled:opacity-50"
                disabled={isEnrolled}
              >
                {isEnrolled ? "Enrolled" : "Enroll Course"}
              </button>
            </div>

            {/* Image */}
            <div className="max-w-sm w-full">
              <div className="relative">
                <img
                  src={course.thumbnail}
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
              <h2 className="text-3xl font-bold mb-6">About This Course</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {course.long_description}
              </p>

              {course.learningOutcomes &&
                course.learningOutcomes.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">
                      What You'll Learn
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {course.learningOutcomes.map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-green-500">✔</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {course.prerequisites && course.prerequisites.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Prerequisites</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {course.prerequisites.map((prereq, i) => (
                      <li key={i}>{prereq}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* CURRICULUM */}
          {activeTab === "curriculum" && (
            <>
              <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
              <p className="text-gray-600">coming soon</p>
              {/* {course.curriculum.map((section, idx) => (
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
              ))} */}
            </>
          )}

          {/* INSTRUCTOR */}
          {activeTab === "instructor" && (
            <p className="text-gray-600">coming soon</p>
            // <div>
            //   <div className="flex gap-6 items-center">
            //     <img
            //       src={course.instructor.avatar}
            //       alt={course.instructor.name}
            //       className="w-20 h-20 rounded-full"
            //     />
            //     <div>
            //       <h3 className="text-xl font-bold">
            //         {course.instructor.name}
            //       </h3>
            //       <p className="text-gray-500">{course.instructor.title}</p>
            //     </div>
            //   </div>

            //   <p className="mt-6 text-gray-700 dark:text-gray-300">
            //     {course.instructor.bio}
            //   </p>
            // </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <p className="text-gray-600">Reviews feature coming soon</p>
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
      {/* OverlayVisible form */}
      {overlayVisible && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOverlayVisible(false)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-4xl">🎉</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Enrollment Successful!
              </h2>
            </div>

            {/* Course Details */}
            <div className="mb-6 text-center">
              <p className="text-gray-600 mb-2">
                You have successfully enrolled in
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-3">
                {course.title}
              </p>
              <p className="text-2xl font-bold text-green-600">
                ${course.price}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  // Navigate to course or learning page
                  // navigate(`/course/${course.id}/learn`);
                  setOverlayVisible(false);
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Start Learning
              </button>
              <button
                onClick={() => setOverlayVisible(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <EnergyIcons />
      {/* <AssistantButton /> */}
    </main>
  );
};

export default CourseDT;
