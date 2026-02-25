import { NavLink, Outlet } from "react-router-dom";
import { Menu, BookOpen, Settings, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../services/studentApi";
const StudentLayout = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getProfile().then((res) => setUser(res.data));
  }, []);
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <div
        className={`fixed z-50 flex h-full w-72 flex-col bg-white border-r border-gray-200 transition-transform lg:static lg:translate-x-0 lg:w-64 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-gray-200 font-bold text-2xl">
          <Link
            className="text-black hover:text-cyan-400 dark:text-slate-300 dark:hover:text-cyan-400 truncate"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Academic Hub
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="/student"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-medium
              ${isActive ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:bg-gray-50"}`
            }
            onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
          >
            <Settings size={20} />
            Settings
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto lg:ml-0">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {/* <h1 className="text-2xl font-bold text-gray-800">Hello, Sopheak</h1> */}
              <div className="flex items-center gap-3">
                <button
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-50 lg:hidden"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
                <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
                Hello, {user?.name}
              </h1>
              </div>

              <p className="text-sm text-gray-500">
                Let's learn something new today!
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="w-full sm:w-auto px-4 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50">
                Join Class
              </button>
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                S
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
