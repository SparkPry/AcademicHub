import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import InstructorPanel from "./pages/InstructorPanel";
import AdminPanel from "./pages/AdminPanel";
import MyCourses from "./dashboard/MyCourses";
import CoursesDT from "./pages/CourseDT";
import LessonPage from "./pages/LessonPage";
import AuthRole from "./pages/Auth_role";
import LoginX from "./pages/LoginX";
import SignUpX from "./pages/SignUpX";
import ProtectedRoute from "./context/ProtectedRoute";
import DashboardX from "./pages/DashboardX";
import Classrooms from "./pages/Classrooms";
import Settings from "./pages/Settings";
import StudentLayout from "./layouts/StudentLayout";
function App() {
  return (
    <Layout>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/auth-role" element={<AuthRole />} />
        <Route path="/loginx" element={<LoginX />} />
        <Route path="/signupx" element={<SignUpX />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:slug" element={<CoursesDT />} />
         <Route path="/admin" element={<AdminPanel />} />
        <Route path="/instructor" element={<InstructorPanel />} />
        <Route path="/mycourses" element={<MyCourses />} />
        {/* <Route path="/student" element={<DashboardX />} /> */}
      <Route path="/student" element={

          <StudentLayout />


        }>
          <Route index element={<DashboardX />} />
          <Route path="classes" element={<Classrooms />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* Protected Routes */}
        {/* <Route path="/student" element={<ProtectedRoute>
          <StudentLayout />
        </ProtectedRoute>}>
          <Route index element={<DashboardX />} />
          <Route path="classes" element={<Classrooms />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route
          path="/course/:courseSlug/lesson/:lessonSlug"
          element={<LessonPage />}
        />

        <Route
          path="/instructor"
          element={<ProtectedRoute><InstructorPanel /></ProtectedRoute>}
        />
        <Route
          path="/admin"
          element={<ProtectedRoute><AdminPanel /></ProtectedRoute>}
        /> */}

      </Routes>
    </Layout>
  );
}

export default App;