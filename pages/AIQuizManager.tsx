import { motion } from "framer-motion";
import { Brain, Zap, Trophy, Clock, Target, ArrowRight } from "lucide-react";

export default function AIQuizManager() {

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      </div>

      {/* AI Quiz Manager Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 p-0.5">
              <div className="w-full h-full bg-[#111] rounded-[10px] flex items-center justify-center">
                <Brain className="w-8 h-8 text-indigo-400" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-1 group-hover:text-indigo-300 transition-colors">AI Quiz Manager</h3>
              <p className="text-sm text-white/60">Comprehensive assessment platform</p>
            </div>
          </div>
        </div>

        <p className="text-base text-white/70 mb-8 leading-relaxed">
          AI Quiz Manager is a powerful platform designed to help you master your skills through AI-powered assessments. Take multiple quizzes covering General Knowledge, Technical Skills, Aptitude & Reasoning, and English & Communication. Get instant feedback, detailed explanations, and track your progress with intelligent analytics.
        </p>

        <motion.button
          onClick={() => window.open("https://aiquizmanager.netlify.app/", "_blank")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full md:w-auto py-3 px-8 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          Visit AI Quiz Manager
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

    </div>
  );
}