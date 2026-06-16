"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/lib/data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filtered = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.012]"
        style={{ background: "radial-gradient(circle, #FF003C 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <SectionHeader
          number="04."
          title="Technical Arsenal"
          subtitle="Skills intelligence dashboard — hover for context."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2.5 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-200 border ${
              activeCategory === null
                ? "border-[#FF003C] text-[#FF003C] bg-[rgba(255,0,60,0.05)]"
                : "border-[rgba(255,255,255,0.05)] text-[#555] hover:border-[rgba(255,0,60,0.3)] hover:text-[#A0A0A0]"
            }`}
          >
            All
          </button>
          {skills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
              className={`px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-200 border flex items-center gap-3 ${
                activeCategory === cat.category
                  ? "border-[#FF003C] text-[#FF003C] bg-[rgba(255,0,60,0.05)]"
                  : "border-[rgba(255,255,255,0.05)] text-[#555] hover:border-[rgba(255,0,60,0.3)] hover:text-[#A0A0A0]"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory ?? "all"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch"
          >
            {filtered.map((category, catIdx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.06, duration: 0.5 }}
                className="border border-[rgba(255,0,60,0.1)] relative overflow-hidden group hover:border-[rgba(255,0,60,0.25)] transition-colors duration-300 flex flex-col"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                {/* Left accent */}
                <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-[#FF003C] to-transparent opacity-60" />

                <div className="p-8 flex flex-col flex-1">
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-11 h-11 border border-[rgba(255,0,60,0.15)] flex items-center justify-center text-lg shrink-0"
                      style={{ background: "rgba(255,0,60,0.03)" }}>
                      {category.icon}
                    </div>
                    <h3 className="font-mono text-sm font-bold text-[#F5F5F5] tracking-[0.25em] uppercase">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-8 flex-1">
                    {category.items.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (catIdx * 0.06) + (skillIdx * 0.04), duration: 0.4 }}
                        onMouseEnter={() => setHoveredSkill(`${category.category}-${skill.name}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="relative"
                      >
                        <div className="flex justify-between items-baseline mb-3">
                          <span className="font-mono text-base text-[#A0A0A0] group-hover:text-[#F5F5F5] transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="h-px bg-[#1a1a1a] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (catIdx * 0.06) + (skillIdx * 0.08) + 0.2, ease: "easeOut" }}
                            className="h-full"
                            style={{
                              background: `linear-gradient(90deg, #FF003C, #FF1744)`,
                              boxShadow: "0 0 6px rgba(255,0,60,0.4)",
                            }}
                          />
                        </div>

                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredSkill === `${category.category}-${skill.name}` && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.15 }}
                              className="absolute bottom-full left-0 mb-2 z-20 pointer-events-none"
                            >
                              <div
                                className="border border-[rgba(255,0,60,0.2)] p-3 min-w-[160px]"
                                style={{ background: "#0a0a0a", boxShadow: "0 0 20px rgba(255,0,60,0.1)" }}
                              >
                                <p className="font-mono text-[10px] text-[#555] mb-2 uppercase tracking-widest">
                                  Applied in:
                                </p>
                                <p className="font-mono text-xs text-[#FF003C]">{skill.project}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skill legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex items-center gap-6 font-mono text-xs text-[#555]"
        >
          <span className="flex items-center gap-2">
            <span className="w-8 h-px bg-gradient-to-r from-[#FF003C] to-[#FF1744]" />
            Proficiency
          </span>
          <span>Hover skill for project context</span>
        </motion.div>
      </div>
    </section>
  );
}
