"use client";

import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";

const courses = [
  { id: 1, title: "UX/UI Design Bootcamp", badge: "Populaire", badgeColor: "bg-brand-purple", videos: 48, weeks: 8, progress: 0, price: "49 000 FCFA", gradient: "from-brand-purple-light to-brand-yellow-light" },
  { id: 2, title: "Figma Avancé", badge: "Nouveau", badgeColor: "bg-brand-blue", videos: 24, weeks: 4, progress: 0, price: "29 000 FCFA", gradient: "from-brand-blue-light to-brand-turquoise-light" },
  { id: 3, title: "Design System Mastery", badge: "Disponible", badgeColor: "bg-state-success", videos: 32, weeks: 6, progress: 0, price: "39 000 FCFA", gradient: "from-brand-yellow-light to-brand-purple-light" },
];

export default function CoursesPage() {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-purple" /> Catalogue des cours
        </h1>
        <div className="flex gap-3">
          <input type="text" placeholder="Rechercher..."
            className="px-4 py-2 rounded-full border border-surface-border text-sm outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple-light w-48" />
          <button className="btn-ghost text-sm">Filtrer</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-surface-card border border-surface-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            <div className={`h-28 bg-gradient-to-br ${course.gradient} flex items-center justify-center relative`}>
              <span className={`absolute top-3 left-3 ${course.badgeColor} text-white text-[10px] font-semibold px-2.5 py-1 rounded-full`}>{course.badge}</span>
              <Play className="w-8 h-8 text-brand-purple/40" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-text-primary mb-2">{course.title}</h3>
              <div className="flex gap-4 text-xs text-text-secondary mb-4">
                <span className="flex items-center gap-1"><Play className="w-3 h-3" /> {course.videos} vidéos</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.weeks} semaines</span>
              </div>
              <ProgressBar progress={course.progress} />
              <div className="flex justify-between items-center mt-3 text-sm">
                <span className="text-text-secondary">{course.progress}% complété</span>
                <span className="font-semibold text-brand-purple">{course.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
