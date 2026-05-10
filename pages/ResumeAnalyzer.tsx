import { UploadCloud, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeAnalyzer() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">AI Resume Analyzer</h1>
        <p className="text-white/60">Upload your resume and get instant feedback, ATS scoring, and targeted improvements.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="border-2 border-dashed border-white/20 rounded-2xl p-12 flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">Upload your resume</h3>
            <p className="text-white/50 text-sm mb-6 text-center max-w-sm">
              Drag and drop your PDF or DOCX file here, or click to browse. Max file size 5MB.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
              Browse Files
            </button>
          </div>

          {/* Placeholder for Analysis Results */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#111] border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                Latest Analysis Results
              </h3>
              <span className="text-xs text-white/50">Analyzed 2 days ago</span>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-emerald-300 mb-1">Strong Action Verbs</h4>
                  <p className="text-sm text-white/70">Your experience bullet points start with strong action verbs. This is great for ATS parsing.</p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-300 mb-1">Missing Keywords</h4>
                  <p className="text-sm text-white/70">For a "Frontend Developer" role, consider adding more mentions of "State Management" and "Testing" (e.g., Jest, Cypress).</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6 text-center">ATS Score</h3>
            <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/10" />
                <motion.circle 
                  cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" 
                  strokeDasharray="502" strokeDashoffset="150" strokeLinecap="round"
                  className="text-indigo-500"
                  initial={{ strokeDashoffset: 502 }}
                  animate={{ strokeDashoffset: 150 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">72</span>
                <span className="text-xs text-white/50 uppercase tracking-widest mt-1">/ 100</span>
              </div>
            </div>
            <p className="text-center text-sm text-white/60 mt-6">
              Good, but there's room for improvement to pass strict corporate filters.
            </p>
            <button className="w-full mt-6 bg-white/10 hover:bg-white/20 transition-colors py-2.5 rounded-xl font-medium text-sm">
              Generate AI Rewrite Suggestions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
