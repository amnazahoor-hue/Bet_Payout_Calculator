"use client";

import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { fadeUp, revealTransition, scrollViewport } from "@/lib/motion";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#tool", label: "Calculator" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms of Use" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/contact", label: "Contact" },
];

const FOOTER_DISCLAIMER =
  "Estimates only — not an official TJK payout certificate.";

const footerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

type SocialVariant = "facebook" | "x" | "instagram" | "youtube";

const socialLinks: {
  id: string;
  href: string;
  label: string;
  variant: SocialVariant;
}[] = [
  {
    id: "facebook",
    href: "https://www.facebook.com/",
    label: "Follow us on Facebook",
    variant: "facebook",
  },
  {
    id: "x",
    href: "https://x.com/",
    label: "Follow us on X",
    variant: "x",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/",
    label: "Follow us on Instagram",
    variant: "instagram",
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/",
    label: "Subscribe on YouTube",
    variant: "youtube",
  },
];

function SocialIcon({ variant }: { variant: SocialVariant }) {
  if (variant === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }

  if (variant === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }

  if (variant === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.059-1.277-.261-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-accent" aria-hidden="true" />
      <div className="site-footer-pattern" aria-hidden="true" />

      <div className="site-footer-outer">
        <motion.div
          className="site-footer-grid"
          variants={footerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.div className="site-footer-brand" variants={fadeUp} transition={revealTransition(0)}>
            <Logo variant="light" className="site-footer-logo" />
            <p className="site-footer-desc">
              Calculate TJK six-fold bet payouts quickly and for free. Enter the pool and winner
              count to see the estimated payment per ticket.
            </p>

            <p className="site-footer-social-label">Follow us</p>
            <div className="site-footer-social">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`site-footer-social-btn site-footer-social-btn--${social.variant}`}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcon variant={social.variant} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="site-footer-col" variants={fadeUp} transition={revealTransition(0.08)}>
            <h3 className="site-footer-heading">Quick Links</h3>
            <ul className="site-footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="site-footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="site-footer-col" variants={fadeUp} transition={revealTransition(0.16)}>
            <h3 className="site-footer-heading">Legal</h3>
            <ul className="site-footer-links">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="site-footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.aside
          className="site-footer-disclaimer-box"
          role="note"
          aria-label="Disclaimer"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          transition={revealTransition(0.2)}
          whileHover={{ scale: 1.005 }}
        >
          <span className="site-footer-disclaimer-label">Disclaimer</span>
          <p className="site-footer-disclaimer-text">{FOOTER_DISCLAIMER}</p>
          <a href="/disclaimer" className="site-footer-disclaimer-link">
            Read full disclaimer
          </a>
        </motion.aside>

        <div className="site-footer-bottom">
          <p className="site-footer-copy">
            © {year} AltılıBahis.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
