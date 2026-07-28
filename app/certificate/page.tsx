"use client";

import { motion } from "framer-motion";
import QRCode from "react-qr-code";

export default function CertificatePage() {
  return (
    <div className="py-12 px-4 flex justify-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-2xl rounded-3xl p-10 md:p-14 text-center text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none"
             style={{ background: "radial-gradient(circle, rgba(137,118,253,0.12) 0%, transparent 60%)" }} />

        <div className="relative z-10">
          <div className="text-sm font-bold text-brand-yellow tracking-widest uppercase mb-6">UXLoop Academy</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Certificat de réussite</h1>
          <p className="text-white/60 text-sm mb-8">Ce certificat atteste que l'étudiant a complété avec succès la formation</p>

          <div className="mb-2">
            <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent"
                 style={{ backgroundImage: "linear-gradient(90deg, #FCA61F, #8976FD)" }}>
              Amadou Diallo
            </div>
          </div>
          <div className="text-base text-white/90 mb-10">UX/UI Design Bootcamp — 8 semaines</div>

          <div className="flex justify-between items-end pt-8 border-t border-white/10">
            <div className="text-left">
              <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Date d'obtention</div>
              <div className="text-sm">27 juillet 2026</div>
            </div>
            <div className="bg-white p-2 rounded-lg">
              <QRCode value="https://uxloop.academy/verify/amadou-diallo-uxui-2026" size={48} />
            </div>
            <div className="text-right">
              <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">ID vérification</div>
              <div className="text-sm font-mono">UXL-2026-78432</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
