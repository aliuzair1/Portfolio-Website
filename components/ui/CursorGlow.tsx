"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springX = useSpring(trailX, { damping: 20, stiffness: 200 });
  const springY = useSpring(trailY, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-3 h-3 rounded-full bg-white" />
      </motion.div>

      {/* Trailing glow ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className="w-10 h-10 rounded-full border border-[#FF003C] opacity-60"
          style={{ boxShadow: "0 0 15px rgba(255,0,60,0.4), inset 0 0 10px rgba(255,0,60,0.1)" }}
        />
      </motion.div>

      {/* Background glow */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className="w-48 h-48 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #FF003C 0%, transparent 70%)" }}
        />
      </motion.div>
    </>
  );
}
