"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, ArrowSquareOut, X, Stack, CheckCircle } from "@phosphor-icons/react";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects } from "@/lib/data";

function ProjectCard({ project, onOpen }: { project: typeof projects[0]; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.22 } }}
      className="group relative border border-[rgba(255,255,255,0.05)] overflow-hidden cursor-pointer flex flex-col"
      style={{ background: "rgba(14,14,14,0.7)" }}
      onClick={onOpen}
    >
      {/* Top accent — visible on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />
      {/* Subtle corner hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${project.color}06 0%, transparent 60%)` }} />

      <div className="p-10 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-6 mb-6">
          <div className="flex-1">
            <p className="font-mono text-xs text-[#FF003C] tracking-[0.3em] uppercase font-semibold mb-4">
              {project.category}
            </p>
            <h3
              className="text-2xl font-black tracking-wider text-[#F0F0F0] uppercase leading-tight"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {project.name}
            </h3>
          </div>
          <div
            className="w-14 h-14 border border-[rgba(255,0,60,0.12)] flex items-center justify-center text-2xl shrink-0"
            style={{ background: "rgba(255,0,60,0.03)" }}
          >
            {project.icon}
          </div>
        </div>

        {/* Description */}
        <p className="font-mono text-base text-[#5a5a5a] leading-relaxed mb-8 line-clamp-3 flex-1">
          {project.shortDesc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-4 py-2 font-mono text-xs text-[#444] border border-[rgba(255,255,255,0.05)] tracking-wider uppercase"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-4 py-2 font-mono text-xs text-[#FF003C] border border-[rgba(255,0,60,0.15)] tracking-wider">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.04)]">
          <span className="font-mono text-xs text-[#FF003C] tracking-wider uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-200">
            View Details <span>→</span>
          </span>
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#3a3a3a] hover:text-[#FF003C] transition-colors"
                aria-label="Source code"
              >
                <GithubLogo size={16} weight="bold" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#3a3a3a] hover:text-[#FF003C] transition-colors"
                aria-label="Live demo"
              >
                <ArrowSquareOut size={16} weight="bold" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/88 backdrop-blur-2xl" />

      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 16 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-2xl w-full max-h-[88vh] overflow-y-auto border border-[rgba(255,0,60,0.15)]"
        style={{ background: "#0c0c0c", boxShadow: "0 0 100px rgba(255,0,60,0.1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-px bg-gradient-to-r from-[#FF003C] via-[rgba(255,0,60,0.4)] to-transparent" />
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#FF003C]" />
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#444] hover:text-[#FF003C] transition-colors z-10"
          aria-label="Close"
        >
          <X size={16} weight="bold" />
        </button>

        <div className="p-12">
          <p className="font-mono text-xs text-[#FF003C] tracking-[0.35em] uppercase mb-5 font-semibold">
            {project.category}
          </p>
          <h2
            className="text-3xl font-black tracking-wider text-[#F0F0F0] uppercase mb-10 leading-tight"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {project.name}
          </h2>
          <p className="font-mono text-base text-[#666] leading-relaxed mb-12">
            {project.fullDesc}
          </p>

          {/* Key Features */}
          <div className="mb-12">
            <p className="font-mono text-xs text-[#3a3a3a] tracking-[0.35em] uppercase mb-8 flex items-center gap-3">
              <Stack size={14} weight="bold" className="text-[#FF003C]" /> Key Features
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {project.features.map((f) => (
                <div key={f} className="flex gap-4 items-start font-mono text-base text-[#666] leading-relaxed">
                  <CheckCircle size={14} weight="fill" className="text-[#FF003C] mt-1 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <p className="font-mono text-xs text-[#3a3a3a] tracking-[0.35em] uppercase mb-6">
              // Technology Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-5 py-2.5 font-mono text-sm text-[#CCCCCC] border border-[rgba(255,0,60,0.15)] tracking-wider uppercase"
                  style={{ background: "rgba(255,0,60,0.04)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-8 border-t border-[rgba(255,255,255,0.05)]">
            {project.github && (
              <MagneticButton href={project.github} target="_blank" variant="primary">
                <GithubLogo size={15} weight="bold" />
                View on GitHub
              </MagneticButton>
            )}
            {project.demo && (
              <MagneticButton href={project.demo} target="_blank" variant="secondary">
                <ArrowSquareOut size={15} weight="bold" />
                Live Demo
              </MagneticButton>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] opacity-[0.018]"
        style={{ background: "radial-gradient(circle, #FF003C 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <SectionHeader
          number="03."
          title="Security Projects"
          subtitle="Real-world security engineering — click any card for details."
        />

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <MagneticButton href="https://github.com/aliuzair1" target="_blank" variant="ghost">
            <GithubLogo size={15} weight="bold" />
            View All on GitHub
          </MagneticButton>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
