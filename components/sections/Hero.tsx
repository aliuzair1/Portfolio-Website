"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CaretDown, DownloadSimple, FolderOpen, Terminal } from "@phosphor-icons/react";
import MagneticButton from "@/components/ui/MagneticButton";

const NetworkScene = dynamic(() => import("@/components/three/NetworkScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#050505]" />,
});

const titles = [
  "Security Engineer",
  "SOC Analyst",
  "Penetration Tester",
  "Cloud Security Engineer",
  "AI Security Researcher",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = titles[titleIndex];
    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    } else {
      const speed = isDeleting ? 38 : 72;
      timeoutRef.current = setTimeout(() => {
        setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
      }, speed);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0"><NetworkScene /></div>
      <div className="absolute inset-0 z-[1] grid-bg opacity-25" />
      <div className="absolute inset-0 z-[2]"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,0,60,0.04) 0%, transparent 55%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-64 z-[2]"
        style={{ background: "linear-gradient(to top, #050505 0%, transparent 100%)" }} />
      <div className="absolute top-0 left-0 right-0 h-40 z-[2]"
        style={{ background: "linear-gradient(to bottom, #050505 0%, transparent 100%)" }} />

      <div className="relative z-10 w-full max-w-5xl px-8 py-20">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2.5 mb-10"
          >
            <Terminal size={12} weight="bold" className="text-[#FF003C]" />
            <span className="font-mono text-xs text-[#444] tracking-widest">
              <span className="text-[#FF003C]">kali@kali</span>:~$ whoami
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-black uppercase leading-[0.92] mb-10"
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(4.5rem, 11vw, 8.5rem)" }}
          >
            <span className="text-[#F5F5F5]">Ali </span>
            <span
              className="text-[#FF003C]"
              style={{ textShadow: "0 0 60px rgba(255,0,60,0.45), 0 0 120px rgba(255,0,60,0.18)" }}
            >
              Uzair
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-10 mb-10"
          >
            <p className="font-mono text-xl text-[#777]">
              <span className="text-[#FF003C] mr-2 select-none">/</span>
              <span className="text-[#DDDDDD]">{displayed}</span>
              <span className="text-[#FF003C] animate-pulse select-none">_</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="font-mono text-sm text-[#555] leading-[2.2] max-w-[680px] mb-16"
          >
            Building{" "}
            <span className="text-[#CCCCCC]">intelligent security systems</span>,{" "}
            <span className="text-[#CCCCCC]">threat detection pipelines</span>,{" "}
            cloud-native security solutions, and next-generation cybersecurity products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <MagneticButton href="/resume.pdf" target="_blank" download variant="primary">
              <DownloadSimple size={15} weight="bold" />
              Download Resume
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <FolderOpen size={15} weight="bold" />
              View Projects
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[9px] text-[#2a2a2a] tracking-[0.5em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <CaretDown size={14} weight="bold" className="text-[#FF003C]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
