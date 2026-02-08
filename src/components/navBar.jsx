import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/imgs/Academic hub.png";
export default function Navbar() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setShowSidebar(false);
    navigate("/loginx");
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white dark:bg-slate-900/70 backdrop-blur-xl border-b dark:border-cyan-500/20 transition-all duration-300 dark:hover:bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className=" flex gap-2 text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
            <img src={Logo} alt="Academic Hub Logo" className="w-10 h-10" />
            <Link
              className="text-black hover:text-cyan-400 dark:text-slate-300 dark:hover:text-cyan-400"
              to="/"
            >
              Academic Hub
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              className="text-gray-800 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
              to="/courses"
            >
              Courses
            </Link>
            <Link className="text-gray-800 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors" to="/about">
              About Us
            </Link>
            <Link className="text-gray-800 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors" to="/contact">
              Contacts
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            {!token ? (
              <>
                <Link
                  to="/loginx"
                  className="group relative px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 text-slate-900 border border-gray-400 rounded-lg font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/signupx"
                  className="group relative px-4 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 rounded-lg font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                to={
                  role === "student"
                    ? "/student"
                    : role === "instructor"
                      ? "/instructor"
                      : "/admin"
                }
                className="group relative px-4 py-2 bg-gradient-to-r from-cyan-400 to-emerald-600 text-slate-100 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105"
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex items-center text-gray-800 dark:text-slate-300 hover:text-cyan-400"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="md:hidden bg-white dark:bg-slate-800 border-t dark:border-cyan-500/20 p-4 space-y-4">
            <Link
              className="block text-gray-800 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors py-2"
              to="/courses"
              onClick={() => setShowSidebar(false)}
            >
              Courses
            </Link>
            <Link
              className="block text-gray-800 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors py-2"
              to="/about"
              onClick={() => setShowSidebar(false)}
            >
              About Us
            </Link>
            <Link
              className="block text-gray-800 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors py-2"
              to="/contact"
              onClick={() => setShowSidebar(false)}
            >
              Contacts
            </Link>

            <div className="pt-4 border-t dark:border-cyan-500/20 space-y-3">
              {!token ? (
                <>
                  <Link
                    to="/loginx"
                    className="block text-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 text-slate-900 border border-gray-400 rounded-lg font-bold transition-all hover:shadow-lg"
                    onClick={() => setShowSidebar(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signupx"
                    className="block text-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 rounded-lg font-bold transition-all hover:shadow-lg"
                    onClick={() => setShowSidebar(false)}
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={
                      role === "student"
                        ? "/student"
                        : role === "instructor"
                          ? "/instructor"
                          : "/admin"
                    }
                    className="block text-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-emerald-600 text-slate-100 rounded-full font-bold transition-all hover:shadow-lg"
                    onClick={() => setShowSidebar(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold transition-all"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
