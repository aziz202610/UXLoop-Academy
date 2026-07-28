"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutDashboard, BookOpen, Award, MessageSquare, Settings, Play, FileText, CheckCircle, Star, Trophy } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", active: true },
  { icon: BookOpen, label: "Mes cours", active: false },
  { icon: Award, label: "Certificats", active: false },
  { icon: MessageSquare, label: "Communauté", active: false },
  { icon: Settings, label: "Paramètres", active: false },
];

const stats = [
  { label: "Cours suivis", value: "3", change: "+1 ce mois", icon: Play, color: "bg-brand-purple-light text-brand-purple" },
  { label: "Modules complétés", value: "12/24", change: "50% terminé", icon: FileText, color: "bg-brand-yellow-light text-brand-yellow" },
  { label: "Quiz réussis", value: "8/10", change: "80% de réussite", icon: CheckCircle, color: "bg-brand-turquoise-light text-brand-turquoise" },
  { label: "XP total", value: "2 450", change: "+320 cette semaine", icon: Star, color: "bg-brand-easter/10 text-brand-easter" },
];

const activeCourses = [
  { title: "UX/UI Design Bootcamp", progress: 65, color: "from-brand-yellow to-brand-purple" },
  { title: "Figma Avancé", progress: 30, color: "from-brand-blue to-brand-soft" },
  { title: "Design System Mastery", progress: 10, color: "from-brand-turquoise to-state-success" },
];

const badges = [
  { emoji: "🎯", title: "Premier pas", earned: true },
  { emoji: "🏆", title: "Quiz master", earned: true },
  { emoji: "🔥", title: "Série 7 jours", earned: true },
  { emoji: "💼", title: "Portfolio", earned: true },
  { emoji: "👨‍🏫", title: "Mentor", earned: false },
  { emoji: "🎨", title: "Expert Figma", earned: false },
];

const leaderboard = [
  { rank: 1, name: "Fatou B.", xp: "3 120", you: false, medal: "gold" },
  { rank: 2, name: "Amadou D.", xp: "2 450", you: true, medal: "silver" },
  { rank: 3, name: "Koffi M.", xp: "2 180", you: false, medal: "bronze" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
      <aside className="hidden lg:block w-64 bg-surface-card border-r border-surface-border p-6">
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-surface-border">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white font-semibold">AD</div>
          <div>
            <div className="font-semibold text-sm">Amadou D.</div>
            <div className="text-xs text-text-secondary">Étudiant Premium</div>
          </div>
        </div>
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <button key={item.label}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                item.active ? "bg-brand-purple-light text-brand-purple font-medium" : "text-text-secondary hover:bg-brand-purple-light hover:text-brand-purple"
              }`}>
              <item.icon className="w-[18px] h-[18px]" /> {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6 max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-xl font-bold">Bonjour, Amadou !</h1>
            <p className="text-sm text-text-secondary mt-1">Vous avez 2 cours en cours et 1 quiz à passer cette semaine.</p>
          </div>
          <Link href="/certificate" className="btn-purple text-sm">Voir mon certificat</Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
                <stat.icon className="w-[18px] h-[18px]" />
              </div>
              <div className="text-[11px] text-text-secondary uppercase tracking-wider font-semibold mb-1">{stat.label}</div>
              <div className="text-xl font-bold text-text-primary">{stat.value}</div>
              <div className="text-xs text-state-success mt-1">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold mb-5">Progression active</h3>
            <div className="space-y-5">
              {activeCourses.map((course) => (
                <div key={course.title}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{course.title}</span><span className="font-semibold">{course.progress}%</span>
                  </div>
                  <ProgressBar progress={course.progress} gradient={course.color} />
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-5">Badges & Gamification</h3>
            <div className="mb-5">
              <div className="text-sm font-semibold mb-2">Niveau 5 — Designer Confirmé</div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-surface-border rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-yellow to-brand-purple" style={{ width: "72%" }} />
                </div>
                <span className="text-sm font-semibold text-brand-purple">2 450 / 3 400 XP</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <div key={badge.title} title={badge.title}
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-xl border-2 transition-all ${
                    badge.earned ? "border-brand-yellow bg-brand-yellow-light" : "border-surface-border bg-surface-card"
                  }`}>
                  {badge.emoji}
                </div>
              ))}
            </div>
            <div className="text-xs text-text-secondary mt-3">4/6 badges débloqués</div>
          </div>
        </div>

        <div className="card mt-6">
          <h3 className="font-semibold mb-5">Classement hebdomadaire</h3>
          <div className="space-y-3">
            {leaderboard.map((entry) => (
              <div key={entry.name}
                className={`flex items-center gap-3 p-3 rounded-xl border ${
                  entry.you ? "border-brand-purple-light bg-brand-purple-light/30" : "border-surface-border"
                }`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white ${
                  entry.medal === "gold" ? "bg-gradient-to-br from-yellow-400 to-orange-400" :
                  entry.medal === "silver" ? "bg-gradient-to-br from-gray-300 to-gray-400" :
                  "bg-gradient-to-br from-amber-600 to-amber-700"
                }`}>{entry.rank}</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{entry.name}</div>
                  <div className="text-xs text-text-secondary">{entry.xp} XP</div>
                </div>
                {entry.you && <span className="text-xs text-text-secondary">Vous</span>}
                {entry.rank === 1 && <Trophy className="w-4 h-4 text-brand-yellow" />}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
