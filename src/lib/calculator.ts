export interface PayoutResult {
  payout: number;
  formatted: string;
  breakdown: string;
}

export function calculatePayout(
  prizePool: number,
  winners: number,
  locale: "en" | "tr" = "tr"
): PayoutResult {
  if (winners <= 0) {
    throw new Error("Winners must be greater than 0");
  }
  if (prizePool <= 0) {
    throw new Error("Prize pool must be greater than 0");
  }

  const numberLocale = locale === "en" ? "en-US" : "tr-TR";
  const payout = prizePool / winners;
  const formatted = payout.toLocaleString(numberLocale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const poolFormatted = prizePool.toLocaleString(numberLocale, {
    maximumFractionDigits: 0,
  });
  const breakdown = `₺${poolFormatted} ÷ ${winners} = ₺${formatted}`;

  return { payout, formatted, breakdown };
}

export function formatTurkishCurrency(value: number): string {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatEnglishCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatTurkishNumber(value: number): string {
  return value.toLocaleString("tr-TR", {
    maximumFractionDigits: 0,
  });
}

export function parseTurkishNumber(input: string): number {
  const cleaned = input.replace(/\./g, "").replace(/,/g, ".").trim();
  return parseFloat(cleaned);
}

export function parseEnglishNumber(input: string): number {
  const cleaned = input.replace(/,/g, "").trim();
  return parseFloat(cleaned);
}

export function formatEnglishNumber(value: number): string {
  return value.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });
}

export function isValidNumericInput(input: string): boolean {
  if (!input.trim()) return false;
  const parsed = parseTurkishNumber(input);
  return !Number.isNaN(parsed) && Number.isFinite(parsed);
}

export function isValidEnglishNumericInput(input: string): boolean {
  if (!input.trim()) return false;
  const parsed = parseEnglishNumber(input);
  return !Number.isNaN(parsed) && Number.isFinite(parsed);
}

export function getConfettiColors(): string[] {
  if (typeof window === "undefined") return [];
  const style = getComputedStyle(document.documentElement);
  return [
    style.getPropertyValue("--color-accent-bright").trim(),
    style.getPropertyValue("--color-accent").trim(),
    style.getPropertyValue("--color-primary").trim(),
    style.getPropertyValue("--color-background").trim(),
  ].filter(Boolean);
}
