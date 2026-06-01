"use client";

import { useEffect, useState } from "react";
import { formatEnglishCurrency, formatTurkishCurrency } from "@/lib/calculator";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  className?: string;
  locale?: "en" | "tr";
}

export default function AnimatedNumber({
  value,
  duration = 1400,
  prefix = "₺",
  className = "",
  locale = "tr",
}: AnimatedNumberProps) {
  const formatCurrency = locale === "en" ? formatEnglishCurrency : formatTurkishCurrency;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span className={`font-mono ${className}`} aria-live="polite">
      {prefix}
      {formatCurrency(displayValue)}
    </span>
  );
}
