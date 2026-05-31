"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-secondary text-background hover:shadow-[0_0_24px_rgba(0,229,255,0.35)]",
  secondary:
    "bg-secondary/20 text-secondary border border-secondary/40 hover:bg-secondary/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]",
  outline:
    "border border-primary/30 bg-transparent text-primary hover:border-primary/60 hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]",
  ghost: "text-muted hover:text-foreground hover:bg-white/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-label={ariaLabel}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
