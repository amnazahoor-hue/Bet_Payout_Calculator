"use client";

import { motion } from "framer-motion";
import { fadeUp, hoverLift, revealTransition, scrollViewport, tapPress } from "@/lib/motion";

const cards = [
  {
    number: "01",
    title: "What Is a Six-Fold Bet?",
    description:
      "A six-fold bet (altılı) is a Turkish Jockey Club horse racing game where you must correctly predict six separate races. Every ticket that gets all six legs right shares the prize pool equally.",
    tag: "6 race legs",
    highlight: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3l2.5 7.5H22l-6 4.5 2.5 7.5L12 18l-6.5 4.5 2.5-7.5-6-4.5h7.5L12 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 20c2-2 4-3 8-3s6 1 8 3"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "How Is the Payout Calculated?",
    description:
      "The total prize pool is divided by the number of winning tickets. A larger pool or fewer winners means a higher amount per ticket.",
    tag: "Equal division",
    highlight: "Pool ÷ Winners = Payout per ticket",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m0 0a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "TJK Payout Structure",
    description:
      "TJK allocates a set percentage of the betting pool as prize money. Final amounts are announced officially; this tool provides an estimate based on your inputs.",
    tag: "Official pool %",
    highlight: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"
        />
      </svg>
    ),
  },
];

function scrollToTool() {
  document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" });
}

export default function ToolDetailSection() {
  return (
    <section id="about-bets" className="about-bets-section" aria-labelledby="about-bets-title">
      <div className="about-bets-bg" aria-hidden="true">
        <div className="about-bets-bg-glow" />
        <div className="about-bets-bg-lines" />
      </div>

      <div className="about-bets-outer">
        <motion.header
          className="about-bets-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          transition={revealTransition(0)}
        >
          <span className="about-bets-eyebrow">Know the game</span>
          <h2 id="about-bets-title" className="about-bets-title">
            About Six-Fold Bets
          </h2>
          <p className="about-bets-lead">
            Everything you need to understand altılı betting, pool splits, and how this calculator
            estimates your per-ticket payout before official TJK results.
          </p>
        </motion.header>

        <div className="about-bets-grid">
          {cards.map((card, index) => (
            <motion.article
              key={card.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              transition={revealTransition(index * 0.1)}
              whileHover={hoverLift}
              whileTap={tapPress}
              className={`about-bets-card${card.highlight ? " about-bets-card--featured" : ""}`}
            >
              <span className="about-bets-card-ghost" aria-hidden="true">
                {card.number}
              </span>

              <div className="about-bets-card-top">
                <div className="about-bets-card-icon">{card.icon}</div>
                <span className="about-bets-card-num">{card.number}</span>
              </div>

              <h3 className="about-bets-card-title">{card.title}</h3>

              {card.highlight ? (
                <p className="about-bets-card-formula">{card.highlight}</p>
              ) : null}

              <p className="about-bets-card-desc">{card.description}</p>

              <span className="about-bets-card-tag">{card.tag}</span>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="about-bets-banner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          transition={revealTransition(0.25)}
          whileHover={{ scale: 1.01 }}
        >
          <div className="about-bets-banner-text">
            <p className="about-bets-banner-label">Built for TJK players</p>
            <p className="about-bets-banner-copy">
              Use real pool and winner counts from race day — get a clear per-ticket estimate in
              seconds.
            </p>
          </div>
          <motion.button
            type="button"
            className="about-bets-banner-cta"
            onClick={scrollToTool}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={tapPress}
          >
            Open Calculator
            <span aria-hidden="true">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
