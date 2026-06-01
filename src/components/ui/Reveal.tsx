"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  defaultRevealTransition,
  fadeIn,
  fadeUp,
  revealTransition,
  scaleIn,
  scrollViewport,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

const variantMap = {
  fadeUp,
  fadeIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
  scale: scaleIn,
} as const;

type RevealVariant = keyof typeof variantMap;

type RevealProps = HTMLMotionProps<"div"> & {
  variant?: RevealVariant;
  delay?: number;
};

export default function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  transition,
  viewport = scrollViewport,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variantMap[variant]}
      transition={transition ?? revealTransition(delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
