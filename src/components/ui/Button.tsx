"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "gold" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "gold",
  fullWidth = false,
  isLoading = false,
  loadingText = "Loading...",
  className = "",
  disabled,
  onClick,
  type = "button",
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-primary text-text-light hover:bg-button-hover"
      : variant === "outline"
        ? "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-text-light"
        : "bg-accent-bright text-text-primary hover:brightness-105";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
      className={`
        inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
        text-base font-semibold transition-all duration-200
        disabled:cursor-not-allowed disabled:opacity-60
        ${variantClass}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <>
          <span className="spinner" aria-hidden="true" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
