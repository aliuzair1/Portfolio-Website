"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, Briefcase, CalendarBlank } from "@phosphor-icons/react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experience } from "@/lib/data";

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-12" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.02]"
        style={{ background: "radial-gradient(circle, #FF003C 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-8 md:pl-20 lg:pl-32 w-full relative z-10">
        <SectionHeader
          number="02."
          title="Experience"
          subtitle="Professional security engineering background."
        />

        <div className="relative">
          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <div
                    className="border border-[rgba(255,255,255,0.06)] relative overflow-hidden transition-all duration-300 hover:border-[rgba(255,0,60,0.22)]"
                    style={{
                      background: "rgba(14,14,14,0.6)",
                      boxShadow: expanded === i ? "0 0 60px rgba(255,0,60,0.05)" : "none",
                    }}
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#FF003C] via-[rgba(255,0,60,0.4)] to-transparent" />

                    {/* Header button */}
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="w-full px-8 py-8 text-left flex items-start justify-between gap-6"
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-11 h-11 border border-[rgba(255,0,60,0.15)] flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "rgba(255,0,60,0.04)" }}>
                          <Briefcase size={16} weight="bold" className="text-[#FF003C]" />
                        </div>
                        <div>
                          <h3
                            className="text-2xl font-black tracking-wider text-[#F0F0F0] uppercase mb-2 leading-tight"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                          >
                            {exp.role}
                          </h3>
                          <p className="font-mono text-base text-[#FF003C] font-semibold mb-3">{exp.company}</p>
                          <div className="flex items-center gap-4 font-mono text-sm text-[#444]">
                            <CalendarBlank size={11} weight="bold" />
                            <span>{exp.period}</span>
                            <span className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
                            <span>{exp.type}</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expanded === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 mt-1"
                      >
                        <CaretDown size={16} weight="bold" className="text-[#444]" />
                      </motion.div>
                    </button>

                    {/* Tech tags */}
                    <div className="px-8 pb-7 flex flex-wrap gap-2.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-4 py-2 font-mono text-xs tracking-widest text-[#555] border border-[rgba(255,255,255,0.05)] uppercase"
                          style={{ background: "rgba(255,255,255,0.02)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Expandable achievements */}
                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pt-6 pb-8 border-t border-[rgba(255,255,255,0.05)]">
                            <p className="font-mono text-xs text-[#3a3a3a] tracking-[0.35em] uppercase mb-8">
                              // Key Achievements
                            </p>
                            <ul className="space-y-5">
                              {exp.achievements.map((item, j) => (
                                <motion.li
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.06 }}
                                  className="flex gap-5 font-mono text-base text-[#666] leading-relaxed"
                                >
                                  <span className="text-[#FF003C] shrink-0 mt-0.5 text-base leading-none">▹</span>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
