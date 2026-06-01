"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { fadeUp, hoverLift, revealTransition, scrollViewport, tapPress } from "@/lib/motion";

const HOW_IT_WORKS_IMAGE =
  "https://images.unsplash.com/photo-1593179449458-e0d43d512551?w=800&h=1000&auto=format&fit=crop&q=75";

const steps = [
  {
    number: "01",
    title: "Enter the Pool",
    description:
      "Enter the total prize pool amount. Large values are formatted automatically as you type.",
    tag: "Auto-formatting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Enter Winners",
    description:
      "Enter how many tickets correctly picked all six legs. The pool is split equally across those tickets.",
    tag: "Equal split",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Your Result",
    description:
      "Click Calculate to see the estimated payout per ticket instantly. Export or copy your estimate in one click.",
    tag: "Instant estimate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

function scrollToTool() {
  document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" });
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-it-works-section" aria-labelledby="how-it-works-title">
      <div className="how-it-works-bg" aria-hidden="true">
        <div className="how-it-works-bg-glow" />
        <div className="how-it-works-bg-lines" />
      </div>

      <div className="how-it-works-outer">
        <Reveal variant="scale">
          <div className="how-it-works-stage">
          <div className="how-it-works-stage-visual" aria-hidden="true">
            <Image
              src={HOW_IT_WORKS_IMAGE}
              alt="Racehorse on a track illustrating six-fold bet calculations"
              width={800}
              height={1000}
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 40vw, 480px"
              quality={75}
              loading="lazy"
              className="how-it-works-stage-img"
            />
            <div className="how-it-works-stage-visual-overlay" />
          </div>

          <div className="how-it-works-stage-body">
            <motion.header
              className="how-it-works-header"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              transition={revealTransition(0)}
            >
              <span className="how-it-works-eyebrow">TJK-compatible workflow</span>
              <h2 id="how-it-works-title" className="how-it-works-title">
                How It Works
              </h2>
              <p className="how-it-works-lead">
                Three guided steps from raw pool data to a clear per-ticket payout estimate — built
                for six-fold (altılı) bet calculations.
              </p>
              <div className="how-it-works-formula" role="note">
                <span className="how-it-works-formula-label">Core formula</span>
                <code>Pool ÷ Winners = Payout per ticket</code>
              </div>
            </motion.header>

            <div className="how-it-works-track-wrap">
              <div className="how-it-works-timeline" aria-hidden="true">
                <span className="how-it-works-timeline-line" />
              </div>

              <ol className="how-it-works-track">
                {steps.map((step, index) => (
              <motion.li
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={scrollViewport}
                transition={revealTransition(index * 0.1)}
                className="how-it-works-item"
              >
                <motion.article
                  className="how-it-works-card"
                  whileHover={hoverLift}
                  whileTap={tapPress}
                >
                      <div className="how-it-works-card-pin">
                        <span>{step.number}</span>
                      </div>

                      <span className="how-it-works-card-ghost" aria-hidden="true">
                        {step.number}
                      </span>

                      <div className="how-it-works-card-icon">{step.icon}</div>

                      <h3 className="how-it-works-card-title">{step.title}</h3>
                      <p className="how-it-works-card-desc">{step.description}</p>

                  <span className="how-it-works-card-tag">{step.tag}</span>
                </motion.article>
              </motion.li>
                ))}
              </ol>
            </div>

            <motion.div
              className="how-it-works-footer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              transition={revealTransition(0.35)}
            >
              <motion.button
                type="button"
                className="how-it-works-cta"
                onClick={scrollToTool}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={tapPress}
              >
                Start Calculating
                <span aria-hidden="true">→</span>
              </motion.button>
            </motion.div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
