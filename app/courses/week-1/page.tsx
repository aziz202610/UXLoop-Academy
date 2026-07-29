"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, Loader2 } from "lucide-react";
import CourseSidebar from "@/components/course/CourseSidebar";
import ModuleContent from "@/components/course/ModuleContent";
import QuizComponent from "@/components/course/QuizComponent";
import AssignmentCard from "@/components/course/AssignmentCard";
import type { Course } from "@/lib/course-data";

export default function Week1Page() {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeModule, setActiveModule] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDeliverable, setShowDeliverable] = useState(false);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch("/api/course-week/1");
        if (!res.ok) throw new Error("Impossible de charger le contenu de la semaine");
        const data = await res.json();
        setCourse(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-red-500">{error || "Contenu introuvable"}</p>
      </div>
    );
  }

  const currentModule = course.modules[activeModule];
  const progress = ((activeModule + 1) / course.modules.length) * 100;

  const handleSelectModule = (index: number) => {
    setActiveModule(index);
    setShowQuiz(false);
    setShowDeliverable(false);
  };

  const handleShowQuiz = () => {
    setShowQuiz(true);
    setShowDeliverable(false);
  };

  const handleShowDeliverable = () => {
    setShowDeliverable(true);
    setShowQuiz(false);
  };

  const handleNext = () => {
    if (activeModule < course.modules.length - 1) setActiveModule(activeModule + 1);
  };

  const handlePrevious = () => {
    if (activeModule > 0) setActiveModule(activeModule - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Week {course.week}</span>
                <span className="text-slate-300">|</span>
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">{course.title}</h1>
              <p className="text-slate-500">{course.subtitle}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-500 mb-1">Progress</div>
              <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-indigo-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="text-xs text-slate-400 mt-1">{Math.round(progress)}% complete</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-8">
        <CourseSidebar
          course={course}
          activeModule={activeModule}
          showQuiz={showQuiz}
          showDeliverable={showDeliverable}
          onSelectModule={handleSelectModule}
          onShowQuiz={handleShowQuiz}
          onShowDeliverable={handleShowDeliverable}
        />

        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {showQuiz ? (
              <QuizComponent key="quiz" quiz={course.quiz} />
            ) : showDeliverable ? (
              <AssignmentCard key="deliverable" deliverable={course.deliverable} />
            ) : (
              <ModuleContent
                key={currentModule.id}
                module={currentModule}
                onNext={handleNext}
                onPrevious={handlePrevious}
                hasNext={activeModule < course.modules.length - 1}
                hasPrevious={activeModule > 0}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
