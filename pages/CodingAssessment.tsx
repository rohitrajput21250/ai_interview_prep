import { Editor } from "@monaco-editor/react";
import { Play, Check, AlertCircle, Lightbulb, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function CodingAssessment() {
  const [code, setCode] = useState(`function twoSum(nums, target) {
  // Write your optimized solution here
  
}`);

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      {/* Problem Description Panel */}
      <div className="w-1/3 bg-[#111] border border-white/10 rounded-2xl flex flex-col overflow-hidden">
        <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded">Easy</span>
            <span className="text-sm font-medium">1. Two Sum</span>
          </div>
          <button className="text-white/50 hover:text-white transition-colors">
            <Lightbulb className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
          <p className="text-sm text-white/80 leading-relaxed mb-6">
            Given an array of integers <code className="bg-white/10 px-1.5 py-0.5 rounded text-indigo-300">nums</code> and an integer <code className="bg-white/10 px-1.5 py-0.5 rounded text-indigo-300">target</code>, return indices of the two numbers such that they add up to target.
            <br /><br />
            You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice. You can return the answer in any order.
          </p>

          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
              <p className="text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Example 1</p>
              <div className="font-mono text-sm text-white/80 space-y-1">
                <p><span className="text-indigo-400">Input:</span> nums = [2,7,11,15], target = 9</p>
                <p><span className="text-emerald-400">Output:</span> [0,1]</p>
                <p className="text-xs text-white/40 mt-2">Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Panel */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 bg-[#111] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
          <div className="h-12 border-b border-white/10 bg-white/5 flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <select className="bg-transparent text-sm text-white/80 outline-none cursor-pointer">
                <option value="javascript">JavaScript (Node.js)</option>
                <option value="python">Python 3</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5">
                <Play className="w-4 h-4" /> Run Code
              </button>
              <button className="flex items-center gap-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white transition-colors px-4 py-1.5 rounded-lg font-medium">
                <Check className="w-4 h-4" /> Submit
              </button>
            </div>
          </div>

          <div className="flex-1">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                padding: { top: 16 },
                scrollBeyondLastLine: false,
                fontFamily: "JetBrains Mono, monospace"
              }}
            />
          </div>
        </div>

        {/* Test Cases Panel */}
        <div className="h-48 bg-[#111] border border-white/10 rounded-2xl p-4 flex flex-col">
          <div className="flex items-center gap-6 border-b border-white/10 pb-2 mb-4">
            <button className="text-sm font-medium text-indigo-400 border-b-2 border-indigo-400 pb-2 -mb-2.25">Testcases</button>
            <button className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors pb-2 -mb-2.25">Test Results</button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="flex gap-2 mb-4">
              <button className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white">Case 1</button>
              <button className="px-3 py-1 text-sm text-white/50 hover:text-white transition-colors">Case 2</button>
              <button className="px-3 py-1 text-sm text-white/50 hover:text-white transition-colors">Case 3</button>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-white/40 mb-1">nums =</p>
                <div className="bg-[#050505] p-2 rounded border border-white/10 font-mono text-sm">[2,7,11,15]</div>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-1">target =</p>
                <div className="bg-[#050505] p-2 rounded border border-white/10 font-mono text-sm">9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
