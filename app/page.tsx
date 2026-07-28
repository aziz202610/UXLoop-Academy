"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, BookOpen, Award, Users, Zap, CreditCard, Brain } from "lucide-react";

const stats = [
  { num: "15k+", label: "Étudiants actifs" },
  { num: "30k", label: "Téléchargements" },
  { num: "10k", label: "Certificats délivrés" },
];

const features = [
  { icon: BookOpen, title: "Parcours structuré", desc: "8 semaines de formation intensive avec modules vidéo, quiz et projets pratiques.", color: "purple" },
  { icon: Award, title: "Certificat reconnu", desc: "Certificat vérifiable avec QR code reconnu par 200+ entreprises partenaires.", color: "yellow" },
  { icon: Users, title: "Communauté active", desc: "Forum, chat et groupes privés pour échanger avec d'autres apprenants.", color: "blue" },
  { icon: Zap, title: "Gamification", desc: "Gagnez des XP, des badges et grimpez dans le classement.", color: "turquoise" },
  { icon: Brain, title: "IA intégrée", desc: "Assistant IA, génération de quiz, résumés de leçons et recommandations.", color: "purple" },
  { icon: CreditCard, title: "Paiement flexible", desc: "Orange Money, MTN, Wave, carte bancaire, PayPal et Stripe.", color: "yellow" },
];

const testimonials = [
  { name: "Aminata K.", role: "UX Designer @Orange", text: "La formation UXLoop a complètement transformé ma carrière. En 8 semaines, j'ai appris plus qu'en 2 ans d'autodidacte.", initials: "AK", gradient: "from-brand-purple to-brand-blue" },
  { name: "Jean D.", role: "Product Designer @Wave", text: "Les projets pratiques et le feedback des mentors m'ont permis de construire un portfolio solide. J'ai décroché 3 offres d'emploi !", initials: "JD", gradient: "from-brand-yellow to-brand-turquoise" },
];

const faqs = [
  { q: "Quelle est la durée de la formation ?", a: "La formation dure 8 semaines avec un rythme de 10 à 15 heures par semaine. Vous pouvez avancer à votre propre rythme." },
  { q: "Le certificat est-il reconnu ?", a: "Oui, notre certificat est vérifiable en ligne via un QR code et est reconnu par plus de 200 entreprises partenaires." },
  { q: "Puis-je payer en plusieurs fois ?", a: "Absolument ! Nous proposons un paiement en 3 ou 6 fois sans frais via Wave, Orange Money ou carte bancaire." },
];

export default function LandingPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0 gradient-hero opacity-60" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-text mb-6">
            Maîtrisez le UX/UI Design<br />de A à Z
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            Formation complète en UX/UI Design. Apprenez les fondamentaux, maîtrisez Figma, construisez votre portfolio et décrochez votre premier emploi.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/courses" className="btn-primary">Explorer les cours <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/dashboard" className="btn-ghost"><Play className="w-4 h-4" /> Espace étudiant</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto bg-surface-card rounded-2xl shadow-md p-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-purple">{s.num}</div>
                <div className="text-xs text-text-secondary mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="text-2xl font-bold mb-10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-yellow" /> Pourquoi UXLoop ?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="card hover:-translate-y-1">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                f.color === "purple" ? "bg-brand-purple-light text-brand-purple" :
                f.color === "yellow" ? "bg-brand-yellow-light text-brand-yellow" :
                f.color === "blue" ? "bg-brand-blue-light text-brand-blue" :
                "bg-brand-turquoise-light text-brand-turquoise"
              }`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-purple" /> Témoignages
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              <div className="text-brand-yellow text-lg mb-4">★★★★★</div>
              <p className="text-text-primary leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-semibold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-text-secondary">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-blue" /> Questions fréquentes
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group card cursor-pointer">
              <summary className="flex justify-between items-center font-medium text-text-primary list-none">
                {faq.q}
                <span className="text-text-secondary transition-transform group-open:rotate-180">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto rounded-2xl p-10 md:p-14 text-center text-white"
             style={{ background: "linear-gradient(135deg, #8976FD, #6B5CE7)" }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Prêt à devenir UX Designer ?</h3>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">Rejoignez 15 000+ étudiants et commencez votre transformation dès aujourd'hui.</p>
          <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold bg-white text-brand-purple hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
            Démarrer maintenant <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
