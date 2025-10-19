import React from "react";
import { X, LogOut, User, Settings, BookOpen } from "lucide-react";
import p1 from "../assets/imgs/p1.jpg";
import { useNavigate } from "react-router-dom";
export default function ProfileSidebar({ currentUser, handleLogout, onClose }) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    onClose(); // Close the sidebar after navigation
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      {/* Sidebar Panel */}
      <div className="w-80 bg-slate-900 h-full p-6 border-l border-cyan-400/20 flex flex-col sidebar-slide">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-cyan-400">Profile</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-cyan-400"
          >
            <X size={22} />
          </button>
        </div>

        {/* User Info */}
        <div className="cursor-pointer flex flex-col items-center text-center mb-6">
          <img
            src={currentUser?.photoURL || "/default-avatar.png"}
            alt="User"
            className="cursor-pointer w-20 h-20 rounded-full border-2 border-cyan-400 shadow-lg"
          />
          <h3 className="text-lg font-semibold text-white mt-3">
            {currentUser?.displayName || "User"}
          </h3>
          <p className="text-slate-400 text-sm mt-1">{currentUser?.email}</p>
        </div>

        {/* Menu */}
        <div className="flex flex-col space-y-3">
          <button className="cursor-pointer flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition">
            <User size={18} /> Edit Profile
          </button>
          <button
            onClick={() => handleNavigate("/mycourses")}
            className="cursor-pointer flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
          >
            <BookOpen size={18} /> My Courses
          </button>
          <button className="cursor-pointer flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition">
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

// import { useNavigate } from "react-router-dom";

// export default function ProfileSidebar({ onClose }) {
//   const navigate = useNavigate();

//   const handleNavigate = (path) => {
//     navigate(path);
//     onClose(); // Close the sidebar after navigation
//   };

//   return (
//     <aside className="fixed top-0 right-0 h-full w-64 bg-slate-800 text-white shadow-lg z-50">
//       <div className="p-4 flex justify-between items-center border-b border-cyan-500/30">
//         <h2 className="text-lg font-semibold">Profile</h2>
//         <button onClick={onClose} className="text-cyan-400 hover:text-red-400">✕</button>
//       </div>
//       <div className="p-4 space-y-4">
//         <button
//           onClick={() => handleNavigate("/mycourses")}
//           className="bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600 w-full text-left"
//         >
//           📘 My Course
//         </button>
//         {/* Add more buttons here if needed */}
//       </div>
//     </aside>
//   );
// }
