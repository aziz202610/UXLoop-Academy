"use client";

import { motion } from "framer-motion";
import { FileText, Clock, CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import { Deliverable } from "@/lib/course-data";

interface AssignmentCardProps {
  deliverable: Deliverable;
}

export default function AssignmentCard({ deliverable }: AssignmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl border border-slate-200 p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
          <FileText className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {deliverable.title}
          </h2>
          <p className="text-slate-500">{deliverable.description}</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-2">
          <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-amber-800">
              Deadline: {deliverable.deadline}
            </div>
            <div className="text-sm text-amber-700">
              Format: {deliverable.format}
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 mb-6">{deliverable.instructions}</p>

        {deliverable.requirements.map((req, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              {req.heading}
            </h3>
            <ul className="space-y-2">
              {req.points.map((point, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-slate-700"
                >
                  <ArrowRight className="w-4 h-4 text-indigo-500 shrink-0 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-50 rounded-lg p-6">
        <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-500" />
          Evaluation Criteria
        </h3>
        <ul className="space-y-2">
          {deliverable.evaluationCriteria.map((criterion, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-slate-700 text-sm"
            >
              <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              {criterion}
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
        Submit Assignment
      </button>
    </motion.div>
  );
}
