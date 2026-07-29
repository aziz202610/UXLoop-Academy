"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle, PlayCircle, ArrowRight } from "lucide-react";
import { Module } from "@/lib/course-data";

interface ModuleContentProps {
  module: Module;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

function renderBody(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("**") && line.endsWith("**") && !line.includes(":**")) {
      return (
        <h4 key={i} className="text-lg font-semibold text-slate-800 mt-4 mb-2">
          {line.replace(/\*\*/g, "")}
        </h4>
      );
    }
    if (line.startsWith("**") && line.includes(":**")) {
      const parts = line.split(":**");
      return (
        <p key={i} className="text-slate-700 mb-2">
          <strong>{parts[0].replace(/\*\*/g, "")}:</strong>
          {parts[1]}
        </p>
      );
    }
    if (line.startsWith("- **")) {
      const match = line.match(/- \*\*(.*?)\*\*/);
      return (
        <li key={i} className="ml-4 text-slate-700 mb-1 list-disc">
          <strong>{match?.[1]}:</strong>
          {line.replace(/- \*(.*?)\*:/, "").replace(/^\s*/, "")}
        </li>
      );
    }
    if (line.startsWith("- ")) {
      return (
        <li key={i} className="ml-4 text-slate-700 mb-1 list-disc">
          {line.replace("- ", "")}
        </li>
      );
    }
    if (line.startsWith("```")) return null;
    if (line.trim() === "") return <div key={i} className="h-2" />;
    if (line.startsWith("— ")) {
      return (
        <p key={i} className="text-slate-500 italic text-sm mt-2 mb-2">
          {line}
        </p>
      );
    }
    return (
      <p key={i} className="text-slate-700 mb-2 leading-relaxed">
        {line}
      </p>
    );
  });
}

export default function ModuleContent({
  module,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: ModuleContentProps) {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  return (
    <motion.div
      key={module.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Module Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 rounded-full text-sm">
            Day {module.day}
          </span>
          <span className="text-slate-400 text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {module.duration}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          {module.title}
        </h2>
        <p className="text-slate-600 text-lg">{module.description}</p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
            <PlayCircle className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">Introduction</h3>
            <p className="text-slate-600 leading-relaxed">
              {module.introduction}
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {module.sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden"
          >
            <button
              onClick={() =>
                setExpandedSection(expandedSection === idx ? null : idx)
              }
              className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold text-slate-600">
                  {idx + 1}
                </span>
                <h3 className="font-semibold text-slate-800 text-left">
                  {section.heading}
                </h3>
              </div>
              {expandedSection === idx ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            <AnimatePresence>
              {expandedSection === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                    <div className="prose prose-slate max-w-none ml-12">
                      {renderBody(section.body)}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Key Takeaways */}
      <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-8">
        <h3 className="font-semibold text-indigo-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          Key Takeaways
        </h3>
        <ul className="space-y-3">
          {module.keyTakeaways.map((takeaway, i) => (
            <li key={i} className="flex items-start gap-3 text-indigo-800">
              <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              {takeaway}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="px-6 py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous Module
        </button>
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          Next Module
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
