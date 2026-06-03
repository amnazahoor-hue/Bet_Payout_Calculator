"use client";

import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import {
  calculatePayout,
  formatEnglishNumber,
  getConfettiColors,
  isValidEnglishNumericInput,
  parseEnglishNumber,
  type PayoutResult,
} from "@/lib/calculator";
import { calculatorImageSrc } from "@/lib/site";

const CalculatorExportPanel = dynamic(
  () => import("@/components/sections/CalculatorExportPanel"),
  { ssr: false }
);

const CALCULATOR_IMAGE = calculatorImageSrc;

type FieldErrors = {
  prizePool?: string;
  winners?: string;
};

export default function ToolSection() {
  const [prizePoolInput, setPrizePoolInput] = useState("");
  const [winnersInput, setWinnersInput] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PayoutResult | null>(null);
  const [lastPoolDisplay, setLastPoolDisplay] = useState("");
  const [lastWinnersDisplay, setLastWinnersDisplay] = useState("");

  const formatOnBlur = (value: string, setter: (v: string) => void) => {
    if (!value.trim() || !isValidEnglishNumericInput(value)) return;
    const num = parseEnglishNumber(value);
    if (num > 0) setter(formatEnglishNumber(num));
  };

  const validate = useCallback((): FieldErrors => {
    const newErrors: FieldErrors = {};

    if (!prizePoolInput.trim()) {
      newErrors.prizePool = "This field is required";
    } else if (!isValidEnglishNumericInput(prizePoolInput)) {
      newErrors.prizePool = "Please enter a valid number";
    } else if (parseEnglishNumber(prizePoolInput) <= 0) {
      newErrors.prizePool = "Please enter a positive value";
    }

    if (!winnersInput.trim()) {
      newErrors.winners = "This field is required";
    } else if (!isValidEnglishNumericInput(winnersInput)) {
      newErrors.winners = "Please enter a valid number";
    } else if (parseEnglishNumber(winnersInput) <= 0) {
      newErrors.winners = "Number of winners must be greater than 0";
    }

    return newErrors;
  }, [prizePoolInput, winnersInput]);

  const fireConfetti = async () => {
    const { default: confetti } = await import("canvas-confetti");
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.55 },
      colors: getConfettiColors(),
    });
  };

  const handleCalculate = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    setResult(null);

    if (Object.keys(validationErrors).length > 0) return;

    setIsLoading(true);

    const pool = parseEnglishNumber(prizePoolInput);
    const winners = Math.floor(parseEnglishNumber(winnersInput));

    try {
      const payoutResult = calculatePayout(pool, winners, "en");
      setLastPoolDisplay(formatEnglishNumber(pool));
      setLastWinnersDisplay(String(winners));
      setResult(payoutResult);
      void fireConfetti();
    } catch {
      setErrors({ winners: "Invalid input values" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="tool" className="tool-section">
      <div className="tool-section-outer">
        <div className="tool-section-grid">
          <Reveal variant="slideLeft" className="tool-section-calculator">
            <div className="calculator-card">
              <div className="calculator-card-accent" aria-hidden="true" />

              <div className="relative z-10">
                <p className="calculator-label-gold mb-1">Six-Fold Bet Payout Calculator</p>
                <p className="calculator-subtitle mb-8">TJK prize pool payout estimator</p>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="prizePool" className="mb-2 block text-sm font-medium text-text-light">
                      Total Prize Pool (₺)
                    </label>
                    <input
                      id="prizePool"
                      type="text"
                      inputMode="decimal"
                      placeholder="e.g. 5,000,000"
                      value={prizePoolInput}
                      onChange={(e) => {
                        setPrizePoolInput(e.target.value);
                        setErrors((p) => ({ ...p, prizePool: undefined }));
                      }}
                      onBlur={() => formatOnBlur(prizePoolInput, setPrizePoolInput)}
                      className={`calculator-input ${errors.prizePool ? "calculator-input-error" : ""}`}
                      aria-invalid={!!errors.prizePool}
                    />
                    {errors.prizePool && (
                      <p className="mt-1 text-sm text-error" role="alert">
                        {errors.prizePool}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="winners" className="mb-2 block text-sm font-medium text-text-light">
                      Number of Winning Tickets
                    </label>
                    <input
                      id="winners"
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 3"
                      value={winnersInput}
                      onChange={(e) => {
                        setWinnersInput(e.target.value);
                        setErrors((p) => ({ ...p, winners: undefined }));
                      }}
                      onBlur={() => formatOnBlur(winnersInput, setWinnersInput)}
                      className={`calculator-input ${errors.winners ? "calculator-input-error" : ""}`}
                      aria-invalid={!!errors.winners}
                    />
                    {errors.winners && (
                      <p className="mt-1 text-sm text-error" role="alert">
                        {errors.winners}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    className="calculator-submit flex items-center justify-center gap-2"
                    onClick={handleCalculate}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner" aria-hidden="true" />
                        Calculating...
                      </>
                    ) : (
                      "Calculate"
                    )}
                  </button>
                </div>

                <AnimatePresence>
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className="mt-10 border-t pt-8 text-center"
                      style={{ borderColor: "var(--color-border-dark)" }}
                    >
                      <p className="calculator-result-label mb-2">Estimated Payout Per Ticket</p>
                      <AnimatedNumber
                        value={result.payout}
                        duration={1400}
                        locale="en"
                        className="calculator-result-value block"
                      />
                      <p className="calculator-breakdown mt-4">{result.breakdown}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <CalculatorExportPanel
                  prizePoolDisplay={lastPoolDisplay || prizePoolInput}
                  winnersDisplay={lastWinnersDisplay || winnersInput}
                  result={result}
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="slideRight" className="tool-section-visual" aria-hidden={true}>
            <div className="tool-section-image-wrap">
              <Image
                src={CALCULATOR_IMAGE}
                alt="Horse racing scene beside the payout calculator"
                width={800}
                height={1000}
                sizes="(max-width: 1024px) 50vw, 560px"
                quality={80}
                priority
                className="tool-section-image"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
