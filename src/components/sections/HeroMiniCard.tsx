"use client";

import { formatEnglishCurrency, formatEnglishNumber } from "@/lib/calculator";

const examplePool = 5_000_000;
const exampleWinners = 3;
const examplePayout = examplePool / exampleWinners;

export default function HeroMiniCard() {
  const scrollToTool = () => {
    document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-mini-card">
      <div className="hero-mini-card-inner">
        <div className="hero-mini-card-left">
          <h2 className="hero-mini-card-title">Quick Calculation</h2>
          <div className="hero-mini-card-fields">
            <div className="hero-mini-card-field">
              <span className="hero-mini-card-label">Prize Pool</span>
              <div className="hero-mini-card-input">₺{formatEnglishNumber(examplePool)}</div>
            </div>
            <div className="hero-mini-card-field">
              <span className="hero-mini-card-label">Winning Tickets</span>
              <div className="hero-mini-card-input">{exampleWinners}</div>
            </div>
          </div>
          <button type="button" className="hero-mini-card-btn" onClick={scrollToTool}>
            Calculate
          </button>
        </div>

        <div className="hero-mini-card-right">
          <span className="hero-mini-card-result-label">Estimated Payout</span>
          <div className="hero-mini-donut" aria-hidden="true">
            <span className="hero-mini-donut-pct">33%</span>
          </div>
          <span className="hero-mini-card-result-value">
            ₺{formatEnglishCurrency(examplePayout)}
          </span>
        </div>
      </div>
    </div>
  );
}
