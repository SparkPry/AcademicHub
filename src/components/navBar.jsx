import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import p1 from "../assets/imgs/p1.jpg";
import ProfileSidebar from "./ProfileSidebar"; // import sidebar

export default function Navbar() {
  // const { currentUser } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const currentUser = { email: "example@gmail.com" }; // Placeholder for currentUser
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      {/* fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-xl border-b border-cyan-500/20 transition-all duration-300 hover:bg-slate-900/90 */}
      <nav className="fixed top-0 w-full z-50 bg-white dark:bg-slate-900/70 backdrop-blur-xl border-b dark:border-cyan-500/20 transition-all duration-300 dark:hover:bg-slate-900/90 ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
            <Link
              className="text-black hover:text-cyan-400 dark:text-slate-300 dark:hover:text-cyan-400"
              to="/"
            >
              {" "}
              𝐀𝐧𝐠𝐤𝐨𝐫𝐄𝐝𝐮{" "}
            </Link>
          </div>

          <div className="flex gap-8 items-center">
            <Link
              className="dark:text-slate-300 hover:text-cyan-400"
              to="/courses"
            >
              Courses
            </Link>
            <Link className="dark:text-slate-300 hover:text-cyan-400" to="#">
              Instructor
            </Link>
            <Link className="dark:text-slate-300 hover:text-cyan-400" to="#">
              Community
            </Link>
          </div>

          <div className="space-x-4">
            {/* If not logged in, show login and sign up buttons */}
            {!token ? (
              <>
                <Link
                  to="/loginx"
                  className="group relative px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 text-slate-900 border border-gray-400 rounded-lg text-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/signupx"
                  className="group relative px-4 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 rounded-lg text-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              // Logged in: show profile picture and sidebar toggle
              <div className="flex gap-4 items-center">
                {/*  
                <link to={role === "student" ? "/student" : role === "instructor" ? "/instructor" : "/admin"}>
                  <button
                    className="group relative px-4 py-2 bg-gradient-to-r from-cyan-400 to-emerald-600 text-slate-100 rounded-full  overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105"
                  >
                    Dashboard
                  </button>
                </link> */}
                <Link
                  to={
                    role === "student"
                      ? "/student"
                      : role === "instructor"
                        ? "/instructor"
                        : "/admin"
                  }
                  className="group relative px-4 py-2 bg-gradient-to-r from-cyan-400 to-emerald-600 text-slate-100 rounded-full  overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105"

                >
                  Dashboard
                </Link>

              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
