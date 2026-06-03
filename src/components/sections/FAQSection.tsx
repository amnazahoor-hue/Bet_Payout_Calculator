"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import ResponsiveVideo from "@/components/ui/ResponsiveVideo";
import { fadeUp, revealTransition, scrollViewport } from "@/lib/motion";
import { faqVideoSrc, faqVideoSrcMobile } from "@/lib/site";
import { useIsMobileViewport } from "@/lib/use-mobile-media";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isMobile = useIsMobileViewport();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-section-outer">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          transition={revealTransition(0)}
          className="faq-section-title"
        >
          Frequently Asked Questions
        </motion.h2>

        <Reveal variant={isMobile ? "fadeIn" : "scale"}>
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
                    <motion.div
                      key={item.question}
                      variants={isMobile ? undefined : fadeUp}
                      initial={isMobile ? false : "hidden"}
                      whileInView={isMobile ? undefined : "visible"}
                      viewport={scrollViewport}
                      transition={isMobile ? undefined : revealTransition(index * 0.06)}
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
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
