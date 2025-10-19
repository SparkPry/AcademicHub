// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function PrivateRoute({ element, user, role }) {
//   if (!user) return <Navigate to="/login" replace />;
//   if (role && user.role !== role) return <Navigate to="/" replace />;
//   return element;
// }


import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ element, user, role }) {
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/instructor/*" replace />;
  return element;
}
