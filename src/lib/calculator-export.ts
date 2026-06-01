import type { jsPDF as JsPDFInstance } from "jspdf";
import type { PayoutResult } from "@/lib/calculator";
import { siteConfig } from "@/lib/site";

const BRAND = {
  heroBg: [28, 15, 5] as [number, number, number],
  cream: [253, 246, 236] as [number, number, number],
  gold: [212, 160, 23] as [number, number, number],
  goldBright: [240, 180, 41] as [number, number, number],
  brown: [78, 44, 14] as [number, number, number],
  muted: [124, 99, 85] as [number, number, number],
};

const PDF_BRAND_NAME = "AltiliBahis";

export function toPdfSafeText(input: string): string {
  return input
    .replace(/₺/g, "TL ")
    .replace(/÷/g, "/")
    .replace(/—/g, "-")
    .replace(/•/g, "-")
    .replace(/ı/g, "i")
    .replace(/İ/g, "I")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "S")
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "G")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "U")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "O")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "C");
}

function formatPdfCurrency(value: string): string {
  const trimmed = value.trim();
  if (/^TL\s/i.test(trimmed)) return toPdfSafeText(trimmed);
  return `TL ${toPdfSafeText(trimmed)}`;
}

export type ExportPayload = {
  prizePoolDisplay: string;
  winnersDisplay: string;
  result: PayoutResult;
};

export function buildShareMessage(payload: ExportPayload): string {
  const { prizePoolDisplay, winnersDisplay, result } = payload;
  return [
    "Six-Fold Bet Payout Estimate — AltılıBahis",
    "",
    `Prize Pool: ₺${prizePoolDisplay}`,
    `Winning Tickets: ${winnersDisplay}`,
    `Estimated Payout Per Ticket: ₺${result.formatted}`,
    "",
    result.breakdown,
    "",
    siteConfig.url,
  ].join("\n");
}

export function getWhatsAppShareUrl(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export function getEmailShareUrl(message: string): string {
  const subject = encodeURIComponent("AltılıBahis — Six-Fold Bet Payout Estimate");
  const body = encodeURIComponent(message);
  return `mailto:?subject=${subject}&body=${body}`;
}

async function loadLogoPngDataUrl(): Promise<string | null> {
  if (typeof window === "undefined") return null;

  try {
    const response = await fetch("/favicon.svg");
    const svgText = await response.text();
    const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);

    const image = new Image();
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("Logo failed to load"));
      image.src = objectUrl;
    });

    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.drawImage(image, 0, 0, 128, 128);
    URL.revokeObjectURL(objectUrl);
    return canvas.toDataURL("image/png");
  } catch {
    return null;
  }
}

function pdfText(
  doc: JsPDFInstance,
  text: string,
  x: number,
  y: number,
  options?: { align?: "left" | "center" | "right"; maxWidth?: number }
) {
  const safe = toPdfSafeText(text);
  if (options?.maxWidth) {
    const lines = doc.splitTextToSize(safe, options.maxWidth);
    doc.text(lines, x, y, options.align ? { align: options.align } : undefined);
    return;
  }
  doc.text(safe, x, y, options?.align ? { align: options.align } : undefined);
}

export async function downloadPayoutPdf(payload: ExportPayload): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const { prizePoolDisplay, winnersDisplay, result } = payload;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const contentW = pageW - 36;
  const margin = 18;
  let y = 0;

  const poolLabel = formatPdfCurrency(prizePoolDisplay);
  const payoutLabel = formatPdfCurrency(result.formatted);
  const breakdownLabel = toPdfSafeText(result.breakdown);

  doc.setFillColor(...BRAND.heroBg);
  doc.rect(0, 0, pageW, 42, "F");
  doc.setFillColor(...BRAND.gold);
  doc.rect(0, 42, pageW, 2.5, "F");

  const logo = await loadLogoPngDataUrl();
  if (logo) {
    doc.addImage(logo, "PNG", margin, 9, 18, 18);
  }

  const headerTextX = margin + (logo ? 22 : 0);

  doc.setTextColor(...BRAND.cream);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  pdfText(doc, PDF_BRAND_NAME, headerTextX, 22);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...BRAND.goldBright);
  pdfText(doc, "Official Payout Estimate Document", headerTextX, 30);

  y = 54;
  doc.setFillColor(...BRAND.cream);
  doc.roundedRect(margin, y, contentW, 18, 3, 3, "F");
  doc.setTextColor(...BRAND.brown);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  pdfText(doc, "Six-Fold Bet Payout Calculator", margin + 6, y + 11);

  y += 28;
  doc.setFontSize(9);
  doc.setTextColor(...BRAND.muted);
  doc.setFont("helvetica", "normal");
  pdfText(doc, `Generated: ${toPdfSafeText(new Date().toLocaleString("en-GB"))}`, margin, y);
  y += 10;

  const drawSection = (title: string, startY: number) => {
    doc.setFillColor(...BRAND.heroBg);
    doc.roundedRect(margin, startY, contentW, 10, 2, 2, "F");
    doc.setTextColor(...BRAND.goldBright);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    pdfText(doc, title.toUpperCase(), margin + 5, startY + 7);
    return startY + 14;
  };

  y = drawSection("Your Inputs", y);
  doc.setDrawColor(...BRAND.gold);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, y, contentW, 28, 2, 2, "S");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...BRAND.muted);
  pdfText(doc, "Total Prize Pool", margin + 6, y + 9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BRAND.heroBg);
  doc.setFontSize(12);
  pdfText(doc, poolLabel, margin + 6, y + 17);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...BRAND.muted);
  pdfText(doc, "Winning Tickets", pageW / 2 + 4, y + 9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BRAND.heroBg);
  doc.setFontSize(12);
  pdfText(doc, toPdfSafeText(winnersDisplay), pageW / 2 + 4, y + 17);

  y += 36;
  y = drawSection("Estimated Result", y);

  doc.setFillColor(255, 248, 238);
  doc.roundedRect(margin, y, contentW, 42, 3, 3, "F");
  doc.setDrawColor(...BRAND.gold);
  doc.roundedRect(margin, y, contentW, 42, 3, 3, "S");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...BRAND.muted);
  pdfText(doc, "Estimated Payout Per Ticket", margin + 6, y + 10);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...BRAND.brown);
  pdfText(doc, payoutLabel, margin + 6, y + 22);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...BRAND.heroBg);
  pdfText(doc, breakdownLabel, margin + 6, y + 32, { maxWidth: contentW - 12 });

  y += 52;

  doc.setFillColor(...BRAND.gold);
  doc.rect(0, doc.internal.pageSize.getHeight() - 8, pageW, 8, "F");
  doc.setFontSize(8);
  doc.setTextColor(...BRAND.heroBg);
  pdfText(doc, "altilibahis.com - TJK-Compatible Estimate", pageW / 2, doc.internal.pageSize.getHeight() - 3, {
    align: "center",
  });

  const dateSlug = new Date().toISOString().slice(0, 10);
  doc.save(`altilibahis-payout-estimate-${dateSlug}.pdf`);
}
