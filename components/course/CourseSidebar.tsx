"use client";

import { BookOpen, Clock, CheckCircle, Circle, Lock, Award, FileText, Lightbulb } from "lucide-react";
import { Module, Course } from "@/lib/course-data";

interface CourseSidebarProps {
  course: Course;
  activeModule: number;
  showQuiz: boolean;
  showDeliverable: boolean;
  onSelectModule: (index: number) => void;
  onShowQuiz: () => void;
  onShowDeliverable: () => void;
}

export default function CourseSidebar({
  course,
  activeModule,
  showQuiz,
  showDeliverable,
  onSelectModule,
  onShowQuiz,
  onShowDeliverable,
}: CourseSidebarProps) {
  return (
    <div className="w-80 shrink-0">
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden sticky top-24">
        <div className="p-4 border-b border-slate-100">
          <h3 className="font-semibold text-slate-800">Course Modules</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {course.modules.map((module, index) => (
            <button
              key={module.id}
              onClick={() => {
                if (module.status !== "locked") {
                  onSelectModule(index);
                }
              }}
              className={`w-full text-left p-4 transition-colors ${
                activeModule === index && !showQuiz && !showDeliverable
                  ? "bg-indigo-50 border-l-4 border-indigo-600"
                  : "hover:bg-slate-50 border-l-4 border-transparent"
              } ${module.status === "locked" ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {module.status === "completed" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : module.status === "locked" ? (
                    <Lock className="w-5 h-5 text-slate-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-indigo-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-slate-500 mb-0.5">
                    Day {module.day}
                  </div>
                  <div className="font-medium text-slate-800 text-sm">
                    {module.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {module.duration}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100 space-y-2">
          <button
            onClick={onShowQuiz}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              showQuiz
                ? "bg-indigo-50 text-indigo-700"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Award className="w-5 h-5" />
            <span className="font-medium text-sm">Take Quiz</span>
          </button>
          <button
            onClick={onShowDeliverable}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              showDeliverable
                ? "bg-indigo-50 text-indigo-700"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="font-medium text-sm">Assignment</span>
          </button>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl border border-slate-200 p-4">
        <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          Learning Outcomes
        </h3>
        <ul className="space-y-2">
          {course.outcomes.map((outcome, i) => (
            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
