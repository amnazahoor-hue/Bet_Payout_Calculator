interface LogoProps {
  variant?: "dark" | "light" | "header";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isHeader = variant === "header";
  const textColor =
    variant === "light" ? "var(--color-text-light)" : "var(--color-primary)";
  const accentColor = "var(--color-secondary)";
  const iconSize = isHeader ? 36 : 42;

  return (
    <a
      href="/"
      className={`header-logo-link inline-flex items-center gap-2.5 ${className}`}
      aria-label="AltılıBahis home"
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="21"
          cy="21"
          r="20"
          stroke={accentColor}
          strokeWidth="1.5"
          fill={variant === "light" ? "transparent" : "var(--color-card-warm)"}
        />
        <path
          d="M8 28C11 22 15 18 21 16C28 14 32 10 34 6C32 12 28 18 22 22C16 26 12 28 8 28Z"
          fill={accentColor}
        />
        <circle cx="32" cy="11" r="2.5" fill={accentColor} className="logo-gold-dot" />
        <path
          d="M12 30C14 25 18 21 24 19"
          stroke={textColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`header-wordmark font-display font-bold tracking-tight ${
          isHeader ? "" : "text-xl md:text-2xl"
        }`}
        style={{ color: textColor, fontFamily: "var(--font-playfair)" }}
      >
        Altılı<span style={{ color: accentColor }}>Bahis</span>
      </span>
    </a>
  );
}
