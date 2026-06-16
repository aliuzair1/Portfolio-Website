"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
          ? "bg-[rgba(5,5,5,0.92)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.05)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <motion.button
          onClick={() => handleNav("#home")}
          className="flex items-center group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <span
            className="font-black text-sm tracking-[0.2em] text-[#F5F5F5] uppercase"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Ali <span className="text-[#FF003C]">Uzair</span>
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 pb-px ${isActive ? "text-[#FF003C]" : "text-[#888] hover:text-[#DDDDDD]"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#FF003C]"
                      style={{ boxShadow: "0 0 6px rgba(255,0,60,0.7)" }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Availability dot */}
        <div className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF003C] animate-pulse" />
          <span className="font-mono text-[10px] text-[#666] tracking-widest uppercase">Available</span>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[rgba(5,5,5,0.98)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.05)] overflow-hidden"
          >
            <div className="px-8 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 font-mono text-sm tracking-widest uppercase text-[#666] hover:text-[#F5F5F5] transition-colors border-b border-[rgba(255,255,255,0.04)] last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
