"use client";

import { motion } from "framer-motion";
import { Crosshair, Bug, Brain, Cloud, Code, Binoculars } from "@phosphor-icons/react";
import SectionHeader from "@/components/ui/SectionHeader";
import { certifications } from "@/lib/data";

const focusAreas = [
  { icon: Crosshair, label: "Detection Engineering", desc: "Building SIEM rules & threat detection pipelines" },
  { icon: Bug, label: "Offensive Security", desc: "Penetration testing & vulnerability assessment" },
  { icon: Brain, label: "AI Security", desc: "ML-powered threat detection & AI attack research" },
  { icon: Cloud, label: "Cloud Security", desc: "AWS security hardening & cloud-native defenses" },
  { icon: Code, label: "Secure Development", desc: "Security-first full-stack engineering" },
  { icon: Binoculars, label: "Threat Hunting", desc: "Proactive adversary hunting in enterprise environments" },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-[0.02]"
        style={{ background: "radial-gradient(circle, #FF003C 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <SectionHeader number="01." title="About Me" subtitle="Security engineer, builder, and researcher." />

        <div className="grid lg:grid-cols-2 gap-28 items-stretch">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <p className="font-mono text-xs text-[#3a3a3a] tracking-[0.35em] uppercase mb-10">
              // Background
            </p>
            {/* Bio */}
            <div className="space-y-10">
              <p className="font-mono text-base text-[#666] leading-relaxed">
                I&apos;m a <span className="text-[#E0E0E0]">cybersecurity engineer</span> with hands-on
                experience in web application security, cloud security, and detection engineering.
                Currently deepening my focus in <span className="text-[#E0E0E0]">AI-driven threat detection</span> and
                security automation.
              </p>
              <p className="font-mono text-base text-[#666] leading-relaxed">
                My approach combines an offensive security mindset with defensive engineering —
                think like an attacker, build like a defender. I&apos;ve shipped{" "}
                <span className="text-[#E0E0E0]">enterprise-grade security tools</span> and conducted
                real-world penetration tests through my internship at Pinease Technologies.
              </p>
              <p className="font-mono text-base text-[#666] leading-relaxed">
                I&apos;m drawn to the intersection of{" "}
                <span className="text-[#FF003C]">AI and cybersecurity</span> — building intelligent
                systems that detect threats faster than any human analyst can.
              </p>
            </div>

            {/* Cert badge */}
            <div className="mt-auto pt-12 space-y-5">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-5 px-6 py-5 border border-[rgba(255,0,60,0.1)] w-fit"
                  style={{ background: "rgba(255,0,60,0.02)" }}
                >
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <p className="font-mono text-base text-[#E0E0E0] font-semibold mb-1.5">{cert.name}</p>
                    <p className="font-mono text-sm text-[#444]">{cert.issuer} · {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — focus area cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs text-[#3a3a3a] tracking-[0.35em] uppercase mb-10">
              // Focus Areas
            </p>
            <div className="grid grid-cols-2 gap-6 items-stretch">
              {focusAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    whileHover={{ borderColor: "rgba(255,0,60,0.3)", y: -2 }}
                    className="p-8 border border-[rgba(255,255,255,0.04)] transition-all duration-300 group flex flex-col"
                    style={{ background: "rgba(255,255,255,0.015)" }}
                  >
                    <div className="w-12 h-12 border border-[rgba(255,0,60,0.12)] flex items-center justify-center mb-6 group-hover:border-[rgba(255,0,60,0.35)] transition-colors shrink-0"
                      style={{ background: "rgba(255,0,60,0.03)" }}>
                      <Icon size={22} weight="duotone" className="text-[#FF003C]" />
                    </div>
                    <p className="font-mono text-base text-[#E0E0E0] font-semibold mb-3 leading-snug">{area.label}</p>
                    <p className="font-mono text-sm text-[#555] leading-relaxed flex-1">{area.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
