import { NavLink, Outlet } from "react-router-dom";
import { Menu, BookOpen, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { getProfile } from "../services/studentApi";
const StudentLayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile().then((res) => setUser(res.data));
  }, []);
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200 font-bold text-2xl">
          Academic Hub
        </div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="/student"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-medium
              ${isActive ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:bg-gray-50"}`
            }
          >
            <Menu size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/student/classes"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg
              ${isActive ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:bg-gray-50"}`
            }
          >
            <BookOpen size={20} />
            Classrooms
          </NavLink>

          <NavLink
            to="/student/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg
              ${isActive ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:bg-gray-50"}`
            }
          >
            <Settings size={20} />
            Settings
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto ">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 ">
          <div className="flex items-center justify-between">
            <div>
              {/* <h1 className="text-2xl font-bold text-gray-800">Hello, Sopheak</h1> */}
              <h1 className="text-2xl font-bold text-gray-800">
                Hello, {user?.name}
              </h1>

              <p className="text-sm text-gray-500">
                Let's learn something new today!
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50">
                Join Class
              </button>
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                S
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
