"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Envelope, GithubLogo, LinkedinLogo, PaperPlaneRight, Terminal, CheckCircle } from "@phosphor-icons/react";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  {
    icon: GithubLogo,
    label: "GitHub",
    value: "github.com/aliuzair1",
    href: personalInfo.github,
    desc: "Security projects & open source",
  },
  {
    icon: LinkedinLogo,
    label: "LinkedIn",
    value: "linkedin.com/in/aliuzair",
    href: personalInfo.linkedin,
    desc: "Professional network",
  },
  {
    icon: Envelope,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    desc: "Direct contact — fastest response",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #FF003C 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-8 w-full relative z-10">
        <SectionHeader
          number="05."
          title="Get In Touch"
          subtitle="Open to internships, security research collaborations & full-time roles."
        />

        {/* Intro + availability */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-base text-[#666] leading-relaxed mb-8">
            I&apos;m actively looking for opportunities in{" "}
            <span className="text-[#CCCCCC]">Security engineering</span>,{" "}
            <span className="text-[#CCCCCC]">SOC operations</span>, and{" "}
            <span className="text-[#CCCCCC]">Offensive Security</span>.
          </p>

          <div className="inline-flex items-center gap-4 px-6 py-4 border border-[rgba(255,0,60,0.15)]"
            style={{ background: "rgba(255,0,60,0.025)" }}>
            <div className="relative w-2 h-7">
              <div className="w-2 h-2 rounded-full bg-[#FF003C]" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#FF003C] animate-ping opacity-50" />
            </div>
            <span className="font-mono text-sm text-[#E0E0E0] tracking-wider">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Contact Links — horizontal row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {socialLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="flex flex-col gap-6 p-8 border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,0,60,0.25)] transition-all duration-300 group"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="w-12 h-12 border border-[rgba(255,0,60,0.15)] group-hover:border-[rgba(255,0,60,0.4)] flex items-center justify-center transition-colors duration-300"
                  style={{ background: "rgba(255,0,60,0.03)" }}>
                  <Icon size={22} weight="bold" className="text-[#FF003C]" />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#444] tracking-[0.25em] uppercase mb-2">{link.label}</p>
                  <p className="font-mono text-base text-[#CCCCCC] font-medium truncate mb-2">{link.value}</p>
                  <p className="font-mono text-sm text-[#444] leading-relaxed">{link.desc}</p>
                </div>
                <span className="font-mono text-xs text-[#FF003C] opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
                  Open →
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-14">
          <div className="h-px flex-1 bg-[rgba(255,255,255,0.05)]" />
          <div className="flex items-center gap-2">
            <Terminal size={14} weight="bold" className="text-[#FF003C]" />
            <span className="font-mono text-xs text-[#444] tracking-[0.3em] uppercase">Send a Message</span>
          </div>
          <div className="h-px flex-1 bg-[rgba(255,255,255,0.05)]" />
        </div>

        {/* Contact Form — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div
            className="border border-[rgba(255,255,255,0.06)] relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.015)" }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#FF003C]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#FF003C]" />

            <div className="p-10 md:p-12">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-5"
                >
                  <CheckCircle
                    size={44}
                    weight="fill"
                    className="text-[#FF003C]"
                    style={{ filter: "drop-shadow(0 0 16px rgba(255,0,60,0.45))" }}
                  />
                  <p className="font-mono text-xl text-[#E0E0E0] font-semibold">Message Transmitted</p>
                  <p className="font-mono text-sm text-[#555]">I&apos;ll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs text-[#444] tracking-[0.25em] uppercase mb-3">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        className="w-full bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] px-5 py-4 font-mono text-base text-[#E0E0E0] focus:outline-none focus:border-[rgba(255,0,60,0.5)] transition-colors placeholder:text-[#2a2a2a]"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-[#444] tracking-[0.25em] uppercase mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        className="w-full bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] px-5 py-4 font-mono text-base text-[#E0E0E0] focus:outline-none focus:border-[rgba(255,0,60,0.5)] transition-colors placeholder:text-[#2a2a2a]"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#444] tracking-[0.25em] uppercase mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                      className="w-full bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] px-5 py-4 font-mono text-base text-[#E0E0E0] focus:outline-none focus:border-[rgba(255,0,60,0.5)] transition-colors placeholder:text-[#2a2a2a]"
                      placeholder="Internship Opportunity / Collaboration / Research"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#444] tracking-[0.25em] uppercase mb-3">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] px-5 py-4 font-mono text-base text-[#E0E0E0] focus:outline-none focus:border-[rgba(255,0,60,0.5)] transition-colors resize-none placeholder:text-[#2a2a2a] leading-relaxed"
                      placeholder="Tell me about your opportunity or what you'd like to discuss..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-[#FF003C] text-white font-mono text-sm tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-3 disabled:opacity-50 transition-colors hover:bg-[#e0002f]"
                    style={{ boxShadow: "0 0 24px rgba(255,0,60,0.2)" }}
                  >
                    {sending ? (
                      <>
                        <span className="w-3.5 h-3.5 border border-white/50 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <PaperPlaneRight size={14} weight="bold" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
