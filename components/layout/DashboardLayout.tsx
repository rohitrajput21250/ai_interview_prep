import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#050505] overflow-hidden text-white font-sans selection:bg-indigo-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505] pointer-events-none"></div>

      <div className="z-10 h-full">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
