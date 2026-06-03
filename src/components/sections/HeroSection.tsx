"use client";

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
            <div className="hero-right-content hero-fade-in">
              <p className="hero-eyebrow">
                <span className="hero-eyebrow-line" aria-hidden="true" />
                <span className="hero-eyebrow-text">Six-Fold Bet Calculator</span>
                <span className="hero-eyebrow-line" aria-hidden="true" />
              </p>

              <h1 className="hero-h1">
                {h1Lines.map((line) => (
                  <span
                    key={line.text}
                    className={`hero-h1-line${line.accent ? " hero-h1-line--accent" : ""}`}
                  >
                    {line.text}
                  </span>
                ))}
              </h1>

              <p className="hero-sub">
                Enter the total pool and number of winners — see your estimated payout per ticket
                instantly.
              </p>

              <div className="hero-cta-row">
                <button type="button" className="hero-cta" onClick={scrollToTool}>
                  Calculate Now →
                </button>
                <button type="button" className="hero-cta-secondary" onClick={scrollToLearnMore}>
                  Learn More
                </button>
              </div>

              <ul className="hero-checklist">
                {checklist.map((item) => (
                  <li key={item}>
                    <span className="hero-check-mark" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
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
