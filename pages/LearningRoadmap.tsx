import { motion } from "framer-motion";
import { Lock, CheckCircle2, Circle } from "lucide-react";

export default function LearningRoadmap() {
  const roadmapNodes = [
    { title: "HTML & CSS Mastery", status: "completed", desc: "Semantic HTML, Flexbox, Grid, Responsive Design" },
    { title: "JavaScript Fundamentals", status: "completed", desc: "Closures, Promises, Async/Await, ES6+" },
    { title: "React Core", status: "in-progress", desc: "Hooks, Context API, Component Lifecycle, Routing" },
    { title: "State Management", status: "locked", desc: "Redux Toolkit, Zustand, Server State with React Query" },
    { title: "Next.js & SSR", status: "locked", desc: "App Router, Server Actions, Static Site Generation" },
    { title: "System Design basics", status: "locked", desc: "Caching, Load Balancing, Microservices vs Monolith" }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-semibold mb-3">Your Personalized Path</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          This roadmap is dynamically generated based on your goal of becoming a 
          <span className="text-indigo-400 font-medium ml-1">Senior Frontend Engineer</span>. 
          It adapts as you complete assessments.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-white/10"></div>
        
        <div className="space-y-12">
          {roadmapNodes.map((node, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center gap-8 ${node.status === "locked" ? "opacity-50" : ""}`}
            >
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#050505] flex items-center justify-center border-4 border-[#050505]">
                {node.status === "completed" ? (
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                ) : node.status === "in-progress" ? (
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
                    <Circle className="w-3 h-3 text-indigo-500 fill-indigo-500" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-white/40" />
                  </div>
                )}
              </div>
              
              <div className={`flex-1 bg-[#111] border ${node.status === 'in-progress' ? 'border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.1)]' : 'border-white/5'} p-6 rounded-2xl`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{node.title}</h3>
                  {node.status === 'in-progress' && (
                    <span className="text-xs font-medium px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-md">Current Module</span>
                  )}
                </div>
                <p className="text-sm text-white/60 mb-4">{node.desc}</p>
                {node.status !== 'locked' && (
                  <button className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                    node.status === 'completed' 
                      ? 'bg-white/5 hover:bg-white/10 text-white' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}>
                    {node.status === 'completed' ? 'Review Material' : 'Continue Learning'}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
