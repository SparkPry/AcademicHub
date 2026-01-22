
import { ArrowLeft, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AuthRole() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Navigate to /signup and pass role in state
    navigate("/signupx", { state: { role } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Back to Home */}
      <div className="absolute top-8 left-8">
        <button
          onClick={() => navigate("/")} // go back to home
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium text-gray-700">
            Back to Home
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-16">LOGIN AS</h1>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
          {/* Student Card */}
          <RoleCard
            role="student"
            title="Student"
            bgColor="bg-cyan-500"
            textColor="text-white"
            onClick={() => handleLogin("student")}
          />

          {/* Instructor Card */}
          <RoleCard
            role="instructor"
            title="Instructor"
            bgColor="bg-cyan-300"
            textColor="text-gray-700"
            onClick={() => handleLogin("instructor")}
          />

          {/* Admin Card */}
          <RoleCard
            role="admin"
            title="Admin"
            bgColor="bg-cyan-300"
            textColor="text-gray-700"
            onClick={() => handleLogin("admin")}
          />
        </div>
      </div>
    </div>
  );
}

// Component for Role Cards
function RoleCard({ title, onClick, bgColor, textColor }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-8 w-64 border border-gray-200 transform transition-transform hover:scale-105`}
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        <User className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>

      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-end justify-center overflow-hidden">
            {/* Student with books illustration */}
            <div className="w-20 h-28 bg-gray-200 rounded-t-full relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-12 h-12 bg-white rounded-full"></div>
              <div className="absolute top-12 left-2 w-6 h-12 bg-yellow-500 rounded"></div>
              <div className="absolute top-12 right-2 w-6 h-12 bg-red-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onClick}
        className={`${bgColor} ${textColor} w-full py-3 font-semibold rounded-lg hover:opacity-90 transition`}
      >
        LOG IN
      </button>
    </div>
  );
}
