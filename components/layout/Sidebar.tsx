import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Map, Code2, Video, BarChart, Settings, User } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { name: "Resume Analyzer", href: "/dashboard/resume", icon: "FileText" },
  { name: "Learning Roadmap", href: "/dashboard/roadmap", icon: "Map" },
  { name: "Coding Assessment", href: "/dashboard/coding", icon: "Code2" },
  { name: "Mock Interviews", href: "/dashboard/interview", icon: "Video" },
  { name: "AI Quiz Manager", href: "/dashboard/quiz", icon: "Brain" },
];

const bottomNavItems: NavItem[] = [
  { name: "Analytics", href: "/dashboard/analytics", icon: "BarChart" },
  { name: "Settings", href: "/dashboard/settings", icon: "Settings" },
  { name: "Profile", href: "/dashboard/profile", icon: "User" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 h-full bg-[#0d0d0d]/80 backdrop-blur-xl border-r border-white/10 flex flex-col pt-6 pb-4">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <LucideIcons.BrainCircuit className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-semibold text-lg tracking-wide">NexTech AI</span>
      </div>

      <div className="flex-1 px-4 space-y-2 overflow-y-auto">
        <div className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4 px-2">Learning Hub</div>
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = LucideIcons[item.icon as keyof typeof LucideIcons] as LucideIcon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 relative group ${isActive ? "text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-white/10 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 z-10" />
              <span className="font-medium text-sm z-10">{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="px-4 mt-auto pt-4 border-t border-white/10 space-y-1">
        {bottomNavItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = LucideIcons[item.icon as keyof typeof LucideIcons] as LucideIcon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 ${isActive ? "text-white bg-white/10" : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
