import React, { useContext } from "react";
import { X, LogOut, User, Settings, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import defaultAvatar from "../assets/imgs/p1.jpg";

export default function ProfileSidebar({ onClose }) {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    logout();   // AuthContext already redirects
    onClose();  // close sidebar
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="w-80 bg-slate-900 h-full p-6 border-l border-cyan-400/20 flex flex-col sidebar-slide">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-cyan-400">Profile</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-cyan-400">
            <X size={22} />
          </button>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={currentUser?.avatar || defaultAvatar}
            alt="User"
            className="w-20 h-20 rounded-full border-2 border-cyan-400 shadow-lg"
          />
          <h3 className="text-lg font-semibold text-white mt-3">
            {currentUser?.name || "User"}
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            {currentUser?.email}
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col space-y-3">
          <button className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition">
            <User size={18} /> Edit Profile
          </button>

          <button
            onClick={() => handleNavigate("/mycourses")}
            className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
          >
            <BookOpen size={18} /> My Courses
          </button>

          <button className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition">
            <Settings size={18} /> Settings
          </button>
        </div>

        {/* Logout */}
        <div className="mt-auto pt-6 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-400 hover:text-red-500 transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
