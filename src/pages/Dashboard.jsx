import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import MyCourses from "../dashboard/MyCourses";
import Profile from "../dashboard/Profile";
export default function Dashboard() {
  return (
    <div className="mt-[100px]">
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
      <nav className="flex gap-4 mb-6">
        <Link className="hover:text-cyan-400" to="my-courses">My Courses</Link>
        <Link className="hover:text-cyan-400" to="profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<p>Select an option from above.</p>} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="profile" element={<Profile />} />
      </Routes>

      <Outlet />
    </div>
  );
}


// import React from "react";
// import { Routes, Route, Link, Outlet } from "react-router-dom";
// import MyCourses from "./dashboard/MyCourses";
// import Profile from "./dashboard/Profile";

// export default function Dashboard() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
//       <nav className="flex gap-4 mb-6">
//         <Link className="hover:text-cyan-400" to="my-courses">My Courses</Link>
//         <Link className="hover:text-cyan-400" to="profile">Profile</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<p>Select an option from above.</p>} />
//         <Route path="my-courses" element={<MyCourses />} />
//         <Route path="profile" element={<Profile />} />
//       </Routes>

//       <Outlet />
//     </div>
//   );
// }
