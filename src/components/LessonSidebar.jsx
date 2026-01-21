import { Link, useParams } from "react-router-dom";
import { isLessonCompleted } from "../utils/progress";

const LessonSidebar = ({ course }) => {
  const { lessonSlug } = useParams();

  return (
    <aside className="w-full lg:w-1/4 border-r border-gray-200 dark:border-gray-700 p-4">
      <h2 className="font-bold text-lg mb-4">{course.title}</h2>

      <div className="space-y-4">
        {course.curriculum.map((section, sIdx) => (
          <div key={sIdx}>
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              {section.section} — {section.title}
            </h3>

            <ul className="space-y-1">
              {section.lessons.map((lesson) => {
                const isActive = lesson.slug === lessonSlug;
                const completed = isLessonCompleted(course.slug, lesson.slug);
                return (
                  <li key={lesson.slug}>
                    <Link
                      to={`/course/${course.slug}/lesson/${lesson.slug}`}
                      className={`block px-3 py-2 rounded text-sm transition
                        ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                    >
                      <span className="flex items-center justify-between">
                        {lesson.title}
                        {completed && (
                          <span className="text-green-400 text-xs">✔</span>
                        )}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LessonSidebar;
