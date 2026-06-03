"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResponsiveVideo from "@/components/ui/ResponsiveVideo";
import { faqVideoSrc, faqVideoSrcMobile } from "@/lib/site";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-section-outer">
        <h2 className="faq-section-title">Frequently Asked Questions</h2>

        <div className="faq-stage">
          <div className="faq-stage-bg" aria-hidden="true">
            <ResponsiveVideo
              desktopSrc={faqVideoSrc}
              mobileSrc={faqVideoSrcMobile}
              className="faq-stage-bg-video"
            />
            <div className="faq-stage-gradient" />
          </div>

          <div className="faq-stage-content">
            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.question}
                    className={`faq-card ${isOpen ? "faq-card-open" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-sans text-base font-semibold text-text-primary md:text-lg">
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-section-alt text-primary"
                        aria-hidden="true"
                      >
                        ▼
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-text-secondary md:text-base">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
