import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Calendar, BarChart3, Flame } from "lucide-react";
import api from "../services/api"; // your axios instance

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/student/dashboard");
        setDashboard(res.data);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <p className="text-gray-500">Loading dashboard...</p>;

  const { stats, courses } = dashboard;

  return (
    <div>
      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:mb-8">
        <Stat title="Ongoing Courses" value={stats.ongoingCourses} icon={<BookOpen size={16} />} />
        <Stat title="Cards Today" value={stats.cardsToday} icon={<Calendar size={16} />} />
        <Stat title="Streak" value={stats.streak} icon={<Flame size={16} />} />
        <Stat title="Completion Rate" value={`${stats.completionRate}%`} icon={<BarChart3 size={16} />} />
      </div>

      {/* COURSES */}
      <div className="bg-white rounded-xl p-4 border sm:p-6">
        <h3 className="font-semibold mb-4">Your Courses</h3>

        {courses.map(course => (
          <div
            key={course.courseId}
            className="border rounded-lg p-4 mb-3 cursor-pointer hover:border-teal-200 hover:shadow-sm transition"
            onClick={() =>
              navigate(`/student/courses/${course.courseId}/lessons`)
            }
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/student/courses/${course.courseId}/lessons`);
              }
            }}
          >
            <h4 className="font-semibold text-gray-800">{course.title}</h4>
            <p className="text-sm text-gray-500">
              Progress: {course.progress}%
            </p>

            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div
                className="h-2 bg-teal-500 rounded"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Stat = ({ title, value, icon }) => (
  <div className="bg-white rounded-xl p-4 border sm:p-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm text-gray-600">{title}</span>
      <span className="text-gray-400">{icon}</span>
    </div>
    <div className="text-2xl font-bold sm:text-3xl">{value}</div>
  </div>
);

export default Dashboard;

