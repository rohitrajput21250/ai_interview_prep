import { motion } from "framer-motion";
import { BrainCircuit, Target, Zap, Clock, Code, TrendingUp } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold mb-2"
          >
            Welcome back, {user?.name?.split(' ')[0] || "User"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60"
          >
            Your AI career mentor has prepared your daily learning plan.
          </motion.p>
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white text-black px-5 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors"
        >
          <BrainCircuit className="w-4 h-4" />
          Start Daily Practice
        </motion.button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Interview Readiness", value: "85%", icon: Target, color: "text-indigo-400", bg: "bg-indigo-500/10" },
          { title: "Problems Solved", value: "142", icon: Code, color: "text-emerald-400", bg: "bg-emerald-500/10" },
          { title: "Current Streak", value: "14 Days", icon: Zap, color: "text-amber-400", bg: "bg-amber-500/10" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            className="bg-[#111] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-colors"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-linear-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>
            <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <h3 className="text-white/60 text-sm font-medium mb-1">{stat.title}</h3>
            <div className="text-3xl font-semibold">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recommended Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:col-span-2 bg-[#111] border border-white/5 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">AI Recommendations</h2>
            <button className="text-xs text-indigo-400 hover:text-indigo-300">View All</button>
          </div>

          <div className="space-y-4">
            {[
              { title: "Review Graph Algorithms", desc: "You struggled with Dijkstra's algorithm in your last mock interview.", time: "45 mins", type: "Study" },
              { title: "Complete Daily Coding Challenge", desc: "Topic: Dynamic Programming (Medium).", time: "30 mins", type: "Practice" },
              { title: "Behavioral Mock Interview", desc: "Focus area: Leadership principles and conflict resolution.", time: "1 hour", type: "Mock" }
            ].map((rec, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500"></div>
                  <div>
                    <h4 className="font-medium text-sm group-hover:text-indigo-300 transition-colors">{rec.title}</h4>
                    <p className="text-xs text-white/50 mt-1">{rec.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Clock className="w-3 h-3" />
                  {rec.time}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Weak Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#111] border border-white/5 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Topic Mastery</h2>
          </div>

          <div className="space-y-5">
            {[
              { name: "React / Frontend", progress: 92, color: "bg-blue-500" },
              { name: "System Design", progress: 65, color: "bg-purple-500" },
              { name: "Dynamic Programming", progress: 45, color: "bg-red-500" },
              { name: "Graphs & Trees", progress: 78, color: "bg-emerald-500" }
            ].map((topic, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-medium text-white/80">{topic.name}</span>
                  <span className="text-white/50">{topic.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${topic.progress}%` }}
                    transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                    className={`h-full ${topic.color} rounded-full`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 py-2 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" />
            View Detailed Analysis
          </button>
        </motion.div>
      </div>
    </div>
  );
}
