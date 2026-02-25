import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();

  // Pages where Navbar + Footer should be hidden
  const hideNavAndFooter = ["/login", "/signup","/auth-role","/loginx","/signupx","/instructor","/admin","/student","/student/settings","/student/classes"].includes(location.pathname) || location.pathname.startsWith("/student/courses/");

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}
