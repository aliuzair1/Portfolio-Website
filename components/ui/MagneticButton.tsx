"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  download?: boolean;
  variant?: "primary" | "secondary" | "ghost";
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  download,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const styles = {
    primary: {
      base: "bg-[#FF003C] text-white border-2 border-[#FF003C]",
      hover: "hover:bg-transparent hover:text-[#FF003C]",
      shadow: "0 0 24px rgba(255,0,60,0.2)",
    },
    secondary: {
      base: "bg-transparent text-[#CCCCCC] border-2 border-[rgba(255,255,255,0.12)]",
      hover: "hover:border-[rgba(255,0,60,0.5)] hover:text-[#FF003C]",
      shadow: "none",
    },
    ghost: {
      base: "bg-transparent text-[#FF003C] border border-[rgba(255,0,60,0.25)]",
      hover: "hover:border-[rgba(255,0,60,0.6)] hover:bg-[rgba(255,0,60,0.04)]",
      shadow: "none",
    },
  };

  const s = styles[variant];

  const content = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={`
        relative inline-flex items-center justify-center gap-3
        px-9 py-4 font-mono text-[14px] font-semibold
        tracking-[0.18em] uppercase transition-all duration-250
        rounded-full
        ${s.base} ${s.hover} ${className}
      `}
      style={{ boxShadow: s.shadow }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} download={download}>
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="inline-block">
      {content}
    </div>
  );
}
