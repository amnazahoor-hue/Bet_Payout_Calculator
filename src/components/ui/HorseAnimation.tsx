"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ResponsiveVideo from "@/components/ui/ResponsiveVideo";
import { heroVideoSrc, heroVideoSrcMobile } from "@/lib/site";
import { useIsMobileViewport } from "@/lib/use-mobile-media";

function HorseSpriteFallback() {
  return (
    <div className="horse-sprite-wrap" aria-hidden="true">
      <div className="horse-motion-trail" />
      <div className="horse-sprite-sheet" role="img" aria-label="Running horse animation" />
    </div>
  );
}

export default function HorseAnimation() {
  const [videoError, setVideoError] = useState(false);
  const isMobile = useIsMobileViewport();

  const scrollToTool = () => {
    document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" });
  };

  const cardMotion = isMobile
    ? { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1 } }
    : {
        initial: { opacity: 0, scale: 0.97 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className="hero-media-stack">
      <div className="hero-video-glow" aria-hidden="true" />

      <motion.div className="hero-video-card" {...cardMotion}>
        {!isMobile ? (
          <motion.div
            className="floating-badge floating-badge--inset"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span aria-hidden="true">🏇</span>
            Official TJK Betting Tool
          </motion.div>
        ) : (
          <div className="floating-badge floating-badge--inset">
            <span aria-hidden="true">🏇</span>
            Official TJK Betting Tool
          </div>
        )}

        {!videoError ? (
          <>
            <ResponsiveVideo
              desktopSrc={heroVideoSrc}
              mobileSrc={heroVideoSrcMobile}
              videoClassName="hero-video-element"
              ariaLabel="Running horse video"
              onError={() => setVideoError(true)}
            />
            <div className="hero-video-overlay" aria-hidden="true" />
          </>
        ) : (
          <div className="hero-video-fallback">
            <HorseSpriteFallback />
          </div>
        )}
      </motion.div>

      {isMobile ? (
        <div className="stat-chip">27,100 monthly searches</div>
      ) : (
        <motion.div
          className="stat-chip"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          27,100 monthly searches
        </motion.div>
      )}

      <button
        type="button"
        className="hero-arrow-label"
        onClick={scrollToTool}
        aria-label="Go to calculator"
      >
        <span className="hero-arrow-icon" aria-hidden="true">
          →
        </span>
        <span>Calculate</span>
      </button>
    </div>
  );
}
