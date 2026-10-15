"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}