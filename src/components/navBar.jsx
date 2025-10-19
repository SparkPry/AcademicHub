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
      <nav className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-xl border-b border-cyan-500/20 transition-all duration-300 hover:bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
           
            <Link className="text-slate-300 hover:text-cyan-400" to="/"> EduVerse 2050</Link>
          </div>

          <div className="flex gap-8 items-center">
            <Link className="text-slate-300 hover:text-cyan-400" to="/courses">Courses</Link>
            <Link className="text-slate-300 hover:text-cyan-400" to="#">Instructor</Link>
            <Link className="text-slate-300 hover:text-cyan-400" to="#">Community</Link>
          </div>

          <div className="space-x-4">
            {!currentUser ? (
              <>
                <Link to="/login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Login</Link>
                <Link to="/signup" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">Sign Up</Link>
              </>
            ) : (
              <div className="flex gap-4 items-center">
                <button className="cursor-pointer" onClick={() => setShowSidebar(true)}>
                  <img className="w-[40px] rounded-full" src={p1} alt="Profile" />
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