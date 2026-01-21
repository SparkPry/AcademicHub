import { useParams, Link } from "react-router-dom";
import courseData from "../data/courseData";
import LessonSidebar from "../components/LessonSidebar";
import { markLessonComplete, isLessonCompleted } from "../utils/progress";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { saveLastLesson } from "../utils/progress";
import { useEffect } from "react";


const LessonPage = () => {
  const { courseSlug, lessonSlug } = useParams();
  

  const course = courseData.find((c) => c.slug === courseSlug);

  if (!course) {
    return <div className="p-10">Course not found</div>;
  }

  const allLessons = course.curriculum.flatMap((section) => section.lessons);

  const lessonIndex = allLessons.findIndex((l) => l.slug === lessonSlug);

  const lesson = allLessons[lessonIndex];

  if (!lesson) {
    return <div className="p-10">Lesson not found</div>;
  }

  const prevLesson = allLessons[lessonIndex - 1];
  const nextLesson = allLessons[lessonIndex + 1];
  const completed = isLessonCompleted(course.slug, lesson.slug);

  useEffect(() => {
    saveLastLesson(course.slug, lesson.slug);
  }, [course.slug, lesson.slug]);


  return (
    <div className="max-w-full mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 pt-24 h-screen dark:bg-gradient-to-b from-slate-900 dark:text-gray-50 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <LessonSidebar course={course} />

      {/* Lesson Content */}
      <main className="flex-1 ">
        <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {lesson.content}
          </ReactMarkdown>
        </div>

        {/* Next / Previous */}
        <div className="flex justify-between mt-12">
          {prevLesson ? (
            <Link
              to={`/course/${course.slug}/lesson/${prevLesson.slug}`}
              className="px-5 py-2 bg-gray-200 dark:bg-gray-700 rounded"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          {nextLesson && (
            <Link
              to={`/course/${course.slug}/lesson/${nextLesson.slug}`}
              className="px-5 py-2 bg-blue-600 text-white rounded"
            >
              Next →
            </Link>
          )}
        </div>

        <button
          onClick={() => markLessonComplete(course.slug, lesson.slug)}
          className={`mt-6 px-6 py-2 rounded ${
            completed ? "bg-green-600 text-white" : "bg-blue-600 text-white"
          }`}
        >
          {completed ? "✓ Completed" : "Mark as Complete"}
        </button>
        
      </main>
    </div>
  );
};

export default LessonPage;
