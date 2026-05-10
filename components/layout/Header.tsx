import { Bell, Search, LogOut } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4 bg-[#141414] border border-white/10 rounded-full px-4 py-1.5 w-96 transition-all focus-within:border-white/30 focus-within:bg-[#1a1a1a]">
        <Search className="w-4 h-4 text-white/40" />
        <input 
          type="text" 
          placeholder="Search courses, assessments, or topics..." 
          className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/40 w-full"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
          <span className="text-xs font-medium text-indigo-300">Readiness Score: 85/100</span>
        </div>
        
        <button className="relative text-white/60 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0a0a0a]"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-white/10 cursor-pointer group">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150" 
            alt="User profile" 
            className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/50 transition-colors object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white group-hover:text-white transition-colors">{user?.name || "User"}</span>
            <span className="text-xs text-white/50">{user?.targetRole || "Student"}</span>
          </div>
        </div>
        
        <button onClick={logout} className="text-white/40 hover:text-red-400 transition-colors ml-2" title="Logout">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
