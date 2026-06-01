"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { heroVideoSrc } from "@/lib/site";

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

  const scrollToTool = () => {
    document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-media-stack">
      <div className="hero-video-glow" aria-hidden="true" />

      <motion.div
        className="hero-video-card"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="floating-badge floating-badge--inset"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span aria-hidden="true">🏇</span>
          Official TJK Betting Tool
        </motion.div>

        {!videoError ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              preload="auto"
              aria-label="Running horse video"
              onError={() => setVideoError(true)}
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
            <div className="hero-video-overlay" aria-hidden="true" />
          </>
        ) : (
          <div className="hero-video-fallback">
            <HorseSpriteFallback />
          </div>
        )}
      </motion.div>

      <motion.div
        className="stat-chip"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
      >
        27,100 monthly searches
      </motion.div>

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
