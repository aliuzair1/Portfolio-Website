"use client";

import { motion } from "framer-motion";
import { GithubLogo, LinkedinLogo, Envelope, ArrowUp } from "@phosphor-icons/react";
import { personalInfo } from "@/lib/data";

const links = [
  { icon: GithubLogo, href: personalInfo.github, label: "GitHub" },
  { icon: LinkedinLogo, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Envelope, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.05)] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className="font-black text-sm tracking-[0.2em] text-[#F5F5F5] uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Ali <span className="text-[#FF003C]">Uzair</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="order-last md:order-none text-center">
            <p className="font-mono text-[10px] text-[#484848] tracking-[0.25em] uppercase mb-1">
              © 2026 Ali Uzair
            </p>
            <p className="font-mono text-[9px] text-[#2e2e2e] tracking-[0.2em]">
              Cybersecurity Engineer · All rights reserved
            </p>
          </div>

          {/* Social Links + Back to Top */}
          <div className="flex items-center gap-6">
            {links.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-[#444] hover:text-[#FF003C] transition-colors duration-200"
              >
                <Icon size={16} weight="bold" />
              </a>
            ))}

            <div className="w-px h-4 bg-[rgba(255,255,255,0.08)]" />

            <motion.button
              onClick={scrollTop}
              aria-label="Back to top"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.92 }}
              className="w-8 h-8 rounded-full border border-[rgba(255,0,60,0.2)] hover:border-[rgba(255,0,60,0.5)] hover:bg-[rgba(255,0,60,0.05)] flex items-center justify-center text-[#FF003C] transition-all duration-200"
            >
              <ArrowUp size={13} weight="bold" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
