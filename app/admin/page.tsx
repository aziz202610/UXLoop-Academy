"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, Award, Plus } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";

const adminStats = [
  { label: "Étudiants inscrits", value: "15 247", change: "+12% ce mois", icon: Users, color: "bg-brand-purple-light text-brand-purple" },
  { label: "Revenus (FCFA)", value: "4.2M", change: "+23% ce mois", icon: DollarSign, color: "bg-brand-yellow-light text-brand-yellow" },
  { label: "Certificats délivrés", value: "10 432", change: "+8% ce mois", icon: Award, color: "bg-brand-turquoise-light text-brand-turquoise" },
];

const students = [
  { name: "Fatou B.", initials: "FB", gradient: "from-brand-purple to-brand-blue", course: "UX/UI Bootcamp", progress: 85, status: "Actif", statusColor: "bg-state-success/10 text-state-success", lastActive: "Il y a 2h" },
  { name: "Amadou D.", initials: "AD", gradient: "from-brand-yellow to-brand-turquoise", course: "UX/UI + Figma", progress: 65, status: "Actif", statusColor: "bg-state-success/10 text-state-success", lastActive: "Il y a 5h" },
  { name: "Koffi M.", initials: "KM", gradient: "from-brand-blue to-brand-easter", course: "Design System", progress: 45, status: "En pause", statusColor: "bg-state-warning/10 text-state-warning", lastActive: "Il y a 3j" },
  { name: "Sarah L.", initials: "SL", gradient: "from-brand-turquoise to-state-success", course: "UX/UI Bootcamp", progress: 92, status: "Finalisation", statusColor: "bg-state-info/10 text-state-info", lastActive: "Il y a 1j" },
];

const payments = [
  { student: "Amadou D.", course: "UX/UI Bootcamp", amount: "49 000 FCFA", status: "success" },
  { student: "Fatou B.", course: "Figma Avancé", amount: "29 000 FCFA", status: "success" },
  { student: "Koffi M.", course: "Design System", amount: "39 000 FCFA", status: "pending" },
];

export default function AdminPage() {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-state-error" /> Tableau de bord administrateur
        </h1>
        <button className="btn-primary text-sm"><Plus className="w-4 h-4" /> Nouveau cours</button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {adminStats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="card">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
              <stat.icon className="w-[18px] h-[18px]" />
            </div>
            <div className="text-[11px] text-text-secondary uppercase tracking-wider font-semibold mb-1">{stat.label}</div>
            <div className="text-xl font-bold text-text-primary">{stat.value}</div>
            <div className="text-xs text-state-success mt-1">{stat.change}</div>
          </motion.div>
        ))}
      </div>

      <div className="card mb-6 overflow-x-auto">
        <h3 className="font-semibold mb-5">Gestion des étudiants</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border">
              <th className="text-left py-3 px-3 text-[11px] uppercase text-text-secondary font-semibold tracking-wider">Nom</th>
              <th className="text-left py-3 px-3 text-[11px] uppercase text-text-secondary font-semibold tracking-wider">Cours</th>
              <th className="text-left py-3 px-3 text-[11px] uppercase text-text-secondary font-semibold tracking-wider">Progression</th>
              <th className="text-left py-3 px-3 text-[11px] uppercase text-text-secondary font-semibold tracking-wider">Statut</th>
              <th className="text-left py-3 px-3 text-[11px] uppercase text-text-secondary font-semibold tracking-wider">Activité</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.name} className="border-b border-surface-border hover:bg-brand-purple-light/30 transition-colors">
                <td className="py-3 px-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white text-[11px] font-bold`}>{s.initials}</div>
                    <span className="font-medium">{s.name}</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-text-secondary">{s.course}</td>
                <td className="py-3 px-3"><div className="w-32"><ProgressBar progress={s.progress} /></div></td>
                <td className="py-3 px-3">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${s.statusColor}`}>{s.status}</span>
                </td>
                <td className="py-3 px-3 text-text-secondary text-xs">{s.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold mb-5">Paiements récents</h3>
          <div className="space-y-4">
            {payments.map((p) => (
              <div key={p.student} className="flex items-center gap-3 py-2 border-b border-surface-border last:border-0">
                <div className={`w-2 h-2 rounded-full ${p.status === "success" ? "bg-state-success" : "bg-state-warning"}`} />
                <div className="flex-1">
                  <div className="font-medium text-sm">{p.student}</div>
                  <div className="text-xs text-text-secondary">{p.course}</div>
                </div>
                <div className={`text-sm font-semibold ${p.status === "pending" ? "text-state-warning" : ""}`}>
                  {p.status === "pending" ? "En attente" : p.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-5">Actions rapides</h3>
          <div className="grid grid-cols-2 gap-3">
            {["Ajouter un cours", "Ajouter une vidéo", "Créer un quiz", "Générer certificats"].map((action) => (
              <button key={action}
                className="p-4 rounded-xl border border-surface-border text-sm font-medium text-text-secondary hover:bg-brand-purple-light hover:text-brand-purple hover:border-brand-purple-light transition-all duration-200 text-center">
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
