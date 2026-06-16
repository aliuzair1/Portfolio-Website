"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-20"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-[11px] text-[#FF003C] font-semibold tracking-[0.35em] uppercase">
          {number}
        </span>
        <div className="h-px w-12 bg-[#FF003C] opacity-50" />
      </div>

      <h2
        className="text-4xl md:text-5xl font-black tracking-wider uppercase text-[#F5F5F5] leading-tight"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 font-mono text-sm text-[#555] leading-relaxed max-w-md">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
