import type { Transition, Variants } from "framer-motion";

export const easeSmooth = [0.22, 1, 0.36, 1] as const;

export const scrollViewport = {
  once: true,
  margin: "-72px" as const,
  amount: 0.18,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export const defaultRevealTransition: Transition = {
  duration: 0.55,
  ease: easeSmooth,
};

export function revealTransition(delay = 0): Transition {
  return { ...defaultRevealTransition, delay };
}

export const hoverLift = {
  y: -6,
  transition: { duration: 0.22, ease: easeSmooth },
};

export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.22, ease: easeSmooth },
};

export const tapPress = {
  scale: 0.98,
};
