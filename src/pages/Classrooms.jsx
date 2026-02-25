// import api from "../services/api"; // your axios instance
// import { useEffect, useState } from "react";
// const Classrooms = () => {

//   return (
//             <div className="bg-white rounded-xl p-6 border">
//         <h3 className="font-semibold mb-4">Your Courses</h3>

//         {courses.map(course => (
//           <div key={course.courseId} className="border rounded-lg p-4 mb-3">
//             <h4 className="font-semibold">{course.title}</h4>
//             <p className="text-sm text-gray-500">
//               Progress: {course.progress}%
//             </p>

//             <div className="w-full bg-gray-200 h-2 rounded mt-2">
//               <div
//                 className="h-2 bg-teal-500 rounded"
//                 style={{ width: `${course.progress}%` }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//   );
// };

// export default Classrooms;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api"; // your axios instance

const Classrooms = () => {
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

  const { courses } = dashboard;

  return (
<div className="w-full mx-auto p-4 sm:p-6 bg-white rounded-xl">
  {/* COURSES */}
  <div className="space-y-4">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Your Courses</h3>
    {courses.map(course => (
      <div 
        key={course.courseId} 
        className="bg-white rounded-xl p-4 sm:p-6 border border-teal-50 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
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
        <div className="flex items-start justify-between gap-3 mb-3">
          <h4 className="font-semibold text-gray-800 flex-1 min-w-0">
            {course.title}
          </h4>
          <span className="text-sm font-medium text-teal-600 whitespace-nowrap">
            {course.progress}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="h-2 bg-teal-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${course.progress}%` }}
          />
        </div>

        {/* Status */}
        <p className="text-xs text-gray-500 mt-3">
          {course.progress === 100
            ? "Completed"
            : course.progress > 0
              ? "In Progress"
              : "Not Started"}
        </p>

        {/* Optional: Continue Learning Button */}
        {course.progress > 0 && course.progress < 100 && (
          <button
            className="w-full mt-4 bg-teal-100 hover:bg-teal-300 hover:scale-102 cursor-pointer text-teal-700 font-medium py-2 px-4 rounded-lg text-sm transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/student/courses/${course.courseId}/lessons`);
            }}
          >
            Continue Learning
          </button>
        )}
      </div>
    ))}

    {/* Empty State */}
    {courses.length === 0 && (
      <div className="bg-white rounded-xl p-6 sm:p-8 border text-center">
        <p className="text-gray-400 text-sm">No courses enrolled yet</p>
      </div>
    )}
  </div>
</div>
  );
};

export default Classrooms;




