"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, revealTransition, scrollViewport, tapPress } from "@/lib/motion";
import type { PayoutResult } from "@/lib/calculator";
import {
  buildShareMessage,
  downloadPayoutPdf,
  getEmailShareUrl,
  getWhatsAppShareUrl,
  type ExportPayload,
} from "@/lib/calculator-export";

type CalculatorExportPanelProps = {
  prizePoolDisplay: string;
  winnersDisplay: string;
  result: PayoutResult | null;
};

function IconPdf() {
  return (
    <svg className="calculator-export-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M14 2v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg className="calculator-export-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#25D366"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg className="calculator-export-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function CalculatorExportPanel({
  prizePoolDisplay,
  winnersDisplay,
  result,
}: CalculatorExportPanelProps) {
  const [pdfLoading, setPdfLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const canExport = Boolean(result);

  const getPayload = (): ExportPayload | null => {
    if (!result) return null;
    return { prizePoolDisplay, winnersDisplay, result };
  };

  const handlePdf = async () => {
    const payload = getPayload();
    if (!payload) return;
    setPdfLoading(true);
    try {
      await downloadPayoutPdf(payload);
    } finally {
      setPdfLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const payload = getPayload();
    if (!payload) return;
    const url = getWhatsAppShareUrl(buildShareMessage(payload));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    const payload = getPayload();
    if (!payload) return;
    window.location.href = getEmailShareUrl(buildShareMessage(payload));
  };

  const handleCopy = async () => {
    const payload = getPayload();
    if (!payload) return;
    try {
      await navigator.clipboard.writeText(buildShareMessage(payload));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      className="calculator-export-panel"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      transition={revealTransition(0.15)}
    >
      <p className="calculator-export-heading">Export &amp; Share</p>
      <p className="calculator-export-hint">
        {canExport
          ? "Download a branded PDF or share your estimate instantly."
          : "Calculate first to unlock PDF export, WhatsApp, and email sharing."}
      </p>

      <div className="calculator-export-grid">
        <motion.button
          type="button"
          className="calculator-export-btn"
          onClick={handlePdf}
          disabled={!canExport || pdfLoading}
          whileHover={canExport && !pdfLoading ? { y: -3, scale: 1.02 } : undefined}
          whileTap={canExport && !pdfLoading ? tapPress : undefined}
        >
          <IconPdf />
          <span>{pdfLoading ? "Preparing…" : "Export as PDF"}</span>
        </motion.button>

        <motion.button
          type="button"
          className="calculator-export-btn calculator-export-btn--whatsapp"
          onClick={handleWhatsApp}
          disabled={!canExport}
          whileHover={canExport ? { y: -3, scale: 1.02 } : undefined}
          whileTap={canExport ? tapPress : undefined}
        >
          <IconWhatsApp />
          <span>Share on WhatsApp</span>
        </motion.button>

        <motion.button
          type="button"
          className="calculator-export-btn"
          onClick={handleEmail}
          disabled={!canExport}
          whileHover={canExport ? { y: -3, scale: 1.02 } : undefined}
          whileTap={canExport ? tapPress : undefined}
        >
          <IconEmail />
          <span>Share via Email</span>
        </motion.button>

        <motion.button
          type="button"
          className="calculator-export-btn calculator-export-btn--ghost"
          onClick={handleCopy}
          disabled={!canExport}
          whileHover={canExport ? { y: -3, scale: 1.02 } : undefined}
          whileTap={canExport ? tapPress : undefined}
        >
          <span className="calculator-export-copy-icon" aria-hidden="true">
            ⧉
          </span>
          <span>{copied ? "Copied ✓" : "Copy Summary"}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
