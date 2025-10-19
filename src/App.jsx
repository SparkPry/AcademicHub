import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import CoursesPage from "./pages/CoursesPage";
import CourseDetail from "./pages/CourseDetail";
// import Dashboard from "./pages/Dashboard";
import InstructorPanel from "./pages/InstructorPanel";
import AdminPanel from "./pages/AdminPanel";
import MyCourses from "./dashboard/MyCourses";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/instructor" element={<InstructorPanel />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
