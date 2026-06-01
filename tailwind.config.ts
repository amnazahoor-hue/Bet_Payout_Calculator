import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        button: "var(--color-button)",
        "button-hover": "var(--color-button-hover)",
        accent: "var(--color-accent)",
        "accent-bright": "var(--color-accent-bright)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-light": "var(--color-text-light)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        "border-dark": "var(--color-border-dark)",
        success: "var(--color-success)",
        error: "var(--color-error)",
        background: "var(--color-background)",
        "hero-bg": "var(--color-hero-bg)",
        "card-bg": "var(--color-card-bg)",
        "card-warm": "var(--color-card-warm)",
        "section-alt": "var(--color-section-alt)",
        "footer-bg": "var(--color-footer-bg)",
        "input-bg": "var(--color-input-bg)",
        "input-border": "var(--color-input-border)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        prose: "680px",
      },
    },
  },
  plugins: [],
};

export default config;
