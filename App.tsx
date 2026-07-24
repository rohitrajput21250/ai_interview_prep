import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import DemoOne from "./demo";
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
          <Route path="/login" element={<Navigate to="/dashboard" replace />} />
          <Route path="/signup" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="resume" element={<ResumeAnalyzer />} />
            <Route path="roadmap" element={<LearningRoadmap />} />
            <Route path="coding" element={<CodingAssessment />} />
            <Route path="interview" element={<MockInterview />} />
            <Route path="quiz" element={<AIQuizManager />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
