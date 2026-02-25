import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

const Lessons = () => {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(true);
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) {
        const id = parsed.pathname.replace("/", "");
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      if (parsed.hostname.includes("youtube.com")) {
        const id = parsed.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      return url;
    } catch {
      return url;
    }
  };

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await api.get(`/courses/${courseId}/lessons`);
        const data = res.data;
        const items = Array.isArray(data) ? data : data?.lessons || [];
        setLessons(items);
        setActiveLesson(items[0] || null);
      } catch (err) {
        console.error("Lessons fetch error:", err);
        setError("Failed to load lessons.");
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [courseId]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Lessons
        </h2>
        <Link
          to="/student/classes"
          className="text-sm text-teal-600 hover:text-teal-700"
        >
          Back to Classrooms
        </Link>
      </div>

      {loading && <p className="text-gray-500">Loading lessons...</p>}
      {!loading && error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="bg-white rounded-xl border p-4 sm:p-6">
            {activeLesson ? (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {activeLesson.title || activeLesson.name || "Untitled Lesson"}
                </h3>
                {activeLesson.video_url ? (
                  <div className="aspect-video w-full overflow-hidden rounded-lg border bg-black">
                    <iframe
                      className="h-full w-full"
                      src={getEmbedUrl(activeLesson.video_url)}
                      title={activeLesson.title || "Lesson video"}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">
                    Video not available for this lesson.
                  </p>
                )}
                {activeLesson.description && (
                  <p className="text-sm text-gray-600">
                    {activeLesson.description}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No lessons found.</p>
            )}
          </div>

          <div className="bg-white rounded-xl border p-4 sm:p-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Lessons
            </h4>
            {lessons.length === 0 ? (
              <p className="text-sm text-gray-500">No lessons found.</p>
            ) : (
              <div className="space-y-2">
                {lessons.map((lesson, index) => {
                  const isActive =
                    (lesson.id || lesson.lessonId) ===
                    (activeLesson?.id || activeLesson?.lessonId);
                  return (
                    <button
                      key={lesson.lessonId || lesson.id || index}
                      type="button"
                      className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                        isActive
                          ? "border-teal-200 bg-teal-50 text-teal-800"
                          : "hover:border-gray-200 hover:bg-gray-50"
                      }`}
                      onClick={() => setActiveLesson(lesson)}
                    >
                      {lesson.title || lesson.name || "Untitled Lesson"}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lessons;
