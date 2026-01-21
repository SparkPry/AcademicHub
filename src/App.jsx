import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
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
import CourseDetails from "./pages/CourseDetails";
import CoursesDT from "./pages/CourseDT";
import LessonPage from "./pages/LessonPage";
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
            <Route path="/course/:slug" element={<CoursesDT />} />
            {/* <Route path="/course/:id" element={<CourseDetail />} /> */}
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/instructor" element={<InstructorPanel />} />
            <Route path="/admin" element={<AdminPanel />} />
            {/* <Route path="/course/:courseSlug/lesson/:lessonId" element={<CourseDetails/>} /> */}
            <Route
              path="/course/:courseSlug/lesson/:lessonSlug"
              element={<LessonPage />}
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
