"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Tool", href: "/#tool", id: "tool" },
  { label: "How It Works", href: "/#how-it-works", id: "how-it-works" },
  { label: "FAQ", href: "/#faq", id: "faq" },
  { label: "About", href: "/about", id: "about" },
  { label: "Contact", href: "/contact", id: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = navLinks
        .filter((l) => l.href.startsWith("/#"))
        .map((l) => document.getElementById(l.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPos = window.scrollY + 120;
      let current = "hero";

      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      root.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "";
      root.style.overflowX = "";
    }
    return () => {
      document.body.style.overflow = "";
      root.style.overflowX = "";
    };
  }, [menuOpen]);

  const isActive = (link: (typeof navLinks)[0]) => {
    if (!link.href.startsWith("/#")) {
      return pathname === link.href;
    }
    if (pathname !== "/") return false;
    return activeSection === link.id;
  };

  const scrollToTool = () => {
    setMenuOpen(false);
    if (pathname === "/") {
      document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#tool";
    }
  };

  const mobileMenu = (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.button
            type="button"
            className="header-mobile-backdrop"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setMenuOpen(false)}
          />
          <motion.nav
            className="header-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`header-mobile-link ${isActive(link) ? "header-mobile-link--active" : ""}`}
              >
                {link.label}
              </a>
            ))}
            <button type="button" className="header-cta-btn header-cta-btn--mobile" onClick={scrollToTool}>
              Start Calculating
            </button>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <header className={`header-outer${menuOpen ? " header-outer--menu-open" : ""}`}>
      <div className="header-inner-box">
        <div className="header-logo-section">
          <Logo variant="header" />
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`header-nav-link ${isActive(link) ? "header-nav-link--active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <button type="button" className="header-cta-btn" onClick={scrollToTool}>
            Start Calculating
          </button>
        </div>

        <button
          type="button"
          className="header-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mounted ? createPortal(mobileMenu, document.body) : null}
    </header>
  );
}
