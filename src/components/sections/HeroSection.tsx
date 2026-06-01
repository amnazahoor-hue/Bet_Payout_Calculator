"use client";

import { motion } from "framer-motion";
import HorseAnimation from "@/components/ui/HorseAnimation";
import HeroMiniCard from "@/components/sections/HeroMiniCard";

const h1Lines = [
  { text: "Six-Fold Bet", accent: false },
  { text: "Your Payout", accent: true },
  { text: "Calculated", accent: false },
];

const checklist = [
  "Free to use",
  "Instant results — no waiting",
  "TJK-compatible calculation",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function HeroSection() {
  const scrollToTool = () => {
    document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLearnMore = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero" aria-label="Home hero">
      <div className="hero-glow hero-glow--tr" aria-hidden="true" />
      <div className="hero-glow hero-glow--bl" aria-hidden="true" />

      <div className="hero-outer">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-left-media">
              <HorseAnimation />
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-right-content">
              <motion.p className="hero-eyebrow" {...fadeUp(0)}>
                <span className="hero-eyebrow-line" aria-hidden="true" />
                <span className="hero-eyebrow-text">Six-Fold Bet Calculator</span>
                <span className="hero-eyebrow-line" aria-hidden="true" />
              </motion.p>

              <h1 className="hero-h1">
                {h1Lines.map((line, i) => (
                  <motion.span
                    key={line.text}
                    className={`hero-h1-line${line.accent ? " hero-h1-line--accent" : ""}`}
                    {...fadeUp(0.1 + i * 0.1)}
                  >
                    {line.text}
                  </motion.span>
                ))}
              </h1>

              <motion.p className="hero-sub" {...fadeUp(0.4)}>
                Enter the total pool and number of winners — see your estimated payout per ticket
                instantly.
              </motion.p>

              <motion.div
                className="hero-cta-row"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.5 }}
              >
                <button type="button" className="hero-cta" onClick={scrollToTool}>
                  Calculate Now →
                </button>
                <button type="button" className="hero-cta-secondary" onClick={scrollToLearnMore}>
                  Learn More
                </button>
              </motion.div>

              <ul className="hero-checklist">
                {checklist.map((item, i) => (
                  <motion.li key={item} {...fadeUp(0.6 + i * 0.05)}>
                    <span className="hero-check-mark" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <HeroMiniCard />
          </div>
        </div>
      </div>
    </section>
  );
}
