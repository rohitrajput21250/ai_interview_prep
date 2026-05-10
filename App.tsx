import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import DemoOne from "./demo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import LearningRoadmap from "./pages/LearningRoadmap";
import CodingAssessment from "./pages/CodingAssessment";
import MockInterview from "./pages/MockInterview";
import AIQuizManager from "./pages/AIQuizManager";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DemoOne />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="resume" element={<ResumeAnalyzer />} />
              <Route path="roadmap" element={<LearningRoadmap />} />
              <Route path="coding" element={<CodingAssessment />} />
              <Route path="interview" element={<MockInterview />} />
              <Route path="quiz" element={<AIQuizManager />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
