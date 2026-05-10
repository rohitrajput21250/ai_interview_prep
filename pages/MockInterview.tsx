import { Mic, Video, Monitor, PhoneOff, Settings2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function MockInterview() {
  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 bg-[#111] border border-white/10 rounded-2xl relative overflow-hidden flex flex-col justify-between p-6">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-[#111] pointer-events-none"></div>
          
          <div className="flex justify-between items-start z-10">
            <div className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-xs font-medium">Recording</span>
            </div>
            <div className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium">
              45:00 Remaining
            </div>
          </div>

          <div className="flex flex-col items-center justify-center z-10 h-full">
            <div className="w-32 h-32 rounded-full bg-indigo-500/10 border-4 border-indigo-500/30 flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 rounded-full border border-indigo-400 animate-ping opacity-20"></div>
              <Sparkles className="w-12 h-12 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Aria (AI Interviewer)</h2>
            <p className="text-white/60 text-sm max-w-md text-center">
              "Could you explain the difference between client-side rendering and server-side rendering, and when you would choose one over the other?"
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 z-10 mt-auto">
            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Mic className="w-5 h-5 text-white" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Video className="w-5 h-5 text-white" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Monitor className="w-5 h-5 text-white" />
            </button>
            <button className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors ml-4">
              <PhoneOff className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* User Camera Preview */}
        <div className="h-48 bg-[#111] border border-white/10 rounded-2xl relative overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 bg-[#0a0a0a] z-0"></div>
          {/* Simulated webcam feed */}
          <div className="z-10 text-center">
            <Video className="w-8 h-8 text-white/20 mx-auto mb-2" />
            <span className="text-xs text-white/40">Camera Preview</span>
          </div>
          <div className="absolute bottom-3 left-3 z-20 bg-black/50 px-2 py-1 rounded text-xs">You</div>
        </div>
      </div>

      {/* Sidebar Area */}
      <div className="w-80 flex flex-col gap-4">
        {/* Real-time Feedback */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-5 flex-1 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-sm">Real-time Analysis</h3>
            <Settings2 className="w-4 h-4 text-white/40" />
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-white/60">Speaking Pace</span>
                <span className="text-emerald-400">Optimal</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-emerald-500 rounded-full mx-auto"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-white/60">Confidence Score</span>
                <span className="text-indigo-400">82%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[82%] h-full bg-indigo-500 rounded-full"></div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-medium text-white/50 mb-3 uppercase tracking-wider">Live Transcript</p>
              <div className="space-y-3 text-sm">
                <p className="text-white/80 leading-relaxed"><span className="text-indigo-400 font-medium">Aria:</span> Tell me about a time you had to optimize a slow-performing application.</p>
                <p className="text-white/60 leading-relaxed">...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-5">
          <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 transition-colors rounded-xl text-sm font-medium mb-3">
            Request Hint
          </button>
          <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-xl text-sm font-medium">
            End & Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}
