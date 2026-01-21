import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { AuthContext } from "../context/AuthContext";
import p1 from "../assets/imgs/p1.jpg";
import ProfileSidebar from "./ProfileSidebar"; // import sidebar

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
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
           
            <Link className="text-black hover:text-cyan-400 dark:text-slate-300 dark:hover:text-cyan-400" to="/"> 𝐀𝐧𝐠𝐤𝐨𝐫𝐄𝐝𝐮 </Link>
          </div>

          <div className="flex gap-8 items-center">
            <Link className="dark:text-slate-300 hover:text-cyan-400" to="/courses">Courses</Link>
            <Link className="dark:text-slate-300 hover:text-cyan-400" to="#">Instructor</Link>
            <Link className="dark:text-slate-300 hover:text-cyan-400" to="#">Community</Link>
          </div>

          <div className="space-x-4">
            {!currentUser ? (
              <>
                <Link to="/login" className="group relative px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 text-slate-900 border-1 border-gray-400 rounded-lg text-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105">Login</Link>
                <Link to="/signup" className="group relative px-4 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 rounded-lg text-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105">Sign Up</Link>
              </>
            ) : (
              <div className="flex gap-4 items-center">
                <button className="cursor-pointer" onClick={() => setShowSidebar(true)}>
                  <img className="w-[40px] rounded-full border-2 border-cyan-400 shadow-2xl" src={p1} alt="Profile" />
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {showSidebar && (
        <ProfileSidebar
          currentUser={currentUser}
          handleLogout={handleLogout}
          onClose={() => setShowSidebar(false)}
        />
      )}
    </>
  );
}