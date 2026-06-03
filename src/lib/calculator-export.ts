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

const PDF_TOOL_DETAILS = {
  name: "Six-Fold Bet Payout Calculator",
  tagline: "TJK-Compatible Payout Estimator",
  summary:
    "Free online tool for Turkish Jockey Club (TJK) altılı bets. Enter the total prize pool and number of winning tickets to receive an instant per-ticket payout estimate.",
  formula: "Prize Pool / Winning Tickets = Payout per ticket",
  points: [
    "Covers six-fold (altılı) horse racing bets with equal pool division",
    "Results are estimates for planning — not official TJK announcements",
    "Generated at altilibahis.com — no account or payment required",
  ],
  disclaimer:
    "Unofficial estimate only. This PDF is not a TJK certificate, legal document, or guarantee of payout. Confirm final amounts with official TJK sources.",
} as const;

function createDocumentReference(): string {
  const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `AB-${stamp}-${suffix}`;
}

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

function drawOfficialFooter(doc: JsPDFInstance, pageW: number, pageH: number, margin: number) {
  const footerH = 58;
  const footerY = pageH - footerH;
  const contentW = pageW - margin * 2;
  const rightColW = 52;

  doc.setFillColor(...BRAND.heroBg);
  doc.rect(0, footerY, pageW, footerH, "F");
  doc.setFillColor(...BRAND.gold);
  doc.rect(0, footerY, pageW, 1.5, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...BRAND.goldBright);
  pdfText(doc, `${PDF_BRAND_NAME} — ${PDF_TOOL_DETAILS.name}`, margin, footerY + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(...BRAND.cream);
  const summaryLines = doc.splitTextToSize(toPdfSafeText(PDF_TOOL_DETAILS.summary), contentW - rightColW);
  doc.text(summaryLines, margin, footerY + 13);

  let leftY = footerY + 13 + summaryLines.length * 3.5 + 2;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(...BRAND.goldBright);
  pdfText(doc, `Formula: ${PDF_TOOL_DETAILS.formula}`, margin, leftY);
  leftY += 5;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...BRAND.cream);
  for (const point of PDF_TOOL_DETAILS.points) {
    const lines = doc.splitTextToSize(toPdfSafeText(`- ${point}`), contentW - rightColW);
    doc.text(lines, margin, leftY);
    leftY += lines.length * 3.5 + 1;
  }

  doc.setFontSize(6.5);
  doc.setTextColor(...BRAND.goldBright);
  const disclaimerLines = doc.splitTextToSize(toPdfSafeText(PDF_TOOL_DETAILS.disclaimer), contentW - 4);
  doc.text(disclaimerLines, margin, Math.min(leftY + 1, footerY + footerH - 6));

  const siteLabel = toPdfSafeText(siteConfig.url.replace(/^https?:\/\//, ""));
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(...BRAND.cream);
  pdfText(doc, siteLabel, pageW - margin, footerY + 8, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(6.5);
  pdfText(doc, PDF_TOOL_DETAILS.tagline, pageW - margin, footerY + 13, { align: "right" });
  pdfText(
    doc,
    `(c) ${new Date().getFullYear()} ${PDF_BRAND_NAME}. All rights reserved.`,
    pageW - margin,
    footerY + 18,
    { align: "right" }
  );
  pdfText(doc, "OFFICIAL ESTIMATE DOCUMENT", pageW - margin, footerY + 24, { align: "right" });
}

export async function downloadPayoutPdf(payload: ExportPayload): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const { prizePoolDisplay, winnersDisplay, result } = payload;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const contentW = pageW - 36;
  const margin = 18;
  const footerReserve = 64;
  const documentRef = createDocumentReference();
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

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(...BRAND.cream);
  pdfText(doc, "DOCUMENT NO.", pageW - margin, 14, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...BRAND.goldBright);
  pdfText(doc, documentRef, pageW - margin, 20, { align: "right" });
  doc.setFontSize(7);
  doc.setTextColor(...BRAND.cream);
  pdfText(doc, "STATUS: OFFICIAL ESTIMATE", pageW - margin, 26, { align: "right" });

  doc.setDrawColor(...BRAND.gold);
  doc.setLineWidth(0.35);
  doc.roundedRect(margin - 2, 46, contentW + 4, pageH - footerReserve - 48, 2, 2, "S");
  doc.setLineWidth(0.15);
  doc.roundedRect(margin - 3.5, 44.5, contentW + 7, pageH - footerReserve - 45, 2, 2, "S");

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

  if (y < pageH - footerReserve - 14) {
    doc.setDrawColor(...BRAND.gold);
    doc.setLineWidth(0.25);
    doc.line(margin, y + 2, margin + contentW, y + 2);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(...BRAND.muted);
    pdfText(
      doc,
      "This official estimate document was generated electronically and is valid for reference purposes only.",
      margin,
      y + 8,
      { maxWidth: contentW }
    );
  }

  drawOfficialFooter(doc, pageW, pageH, margin);

  doc.save(`altilibahis-official-payout-${documentRef.toLowerCase()}.pdf`);
}
