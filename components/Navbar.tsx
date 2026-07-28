"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/courses", label: "Cours" },
  { href: "/dashboard", label: "Étudiant" },
  { href: "/admin", label: "Admin" },
  { href: "/certificate", label: "Certificat" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface-card/80 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                 style={{ background: "linear-gradient(135deg, #FCA61F, #8976FD)" }}>
              U
            </div>
            <span className="text-lg font-bold text-brand-purple">UXLoop Academy</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-brand-purple-light transition-all duration-200">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-surface-muted transition-colors">
              <Search className="w-5 h-5 text-text-secondary" />
            </button>
            <Link href="/dashboard" className="btn-ghost">
              <User className="w-4 h-4" /> Connexion
            </Link>
            <Link href="/courses" className="btn-primary text-sm">Commencer</Link>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-surface-muted"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-surface-border bg-surface-card">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:bg-brand-purple-light hover:text-brand-purple transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
