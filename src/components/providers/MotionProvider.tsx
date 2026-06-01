"use client";

import { MotionConfig } from "framer-motion";
import { easeSmooth } from "@/lib/motion";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: easeSmooth }}>
      {children}
    </MotionConfig>
  );
}
