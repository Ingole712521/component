 "use client";

import React, { MouseEvent, CSSProperties, useState } from "react";
import { motion } from "framer-motion";

type ButtonSize = "sm" | "md" | "lg";

interface WaterFillButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const sizeMap: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function WaterFillButton({
  children,
  size = "md",
  disabled = false,
  onClick,
  className = "",
  style,
  type = "button",
  fullWidth = false,
}: WaterFillButtonProps) {
  const [hovered, setHovered] = useState(false);

  const base =
    "relative inline-flex items-center justify-center font-semibold tracking-tight overflow-hidden rounded-xl cursor-pointer select-none disabled:opacity-40 disabled:pointer-events-none border border-sky-500/60 bg-slate-900/70 text-sky-50 shadow-[0_0_0_1px_rgba(56,189,248,0.35)] transition-colors duration-200";

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={style}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`${base} ${sizeMap[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {/* Water fill layer */}
      <motion.span
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ originY: 1 }}
        initial={false}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 26,
          mass: 0.8,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/90 via-sky-400/70 to-sky-300/40" />
        <div className="absolute -inset-x-4 -bottom-8 h-10 bg-sky-300/70 blur-2xl opacity-80" />
      </motion.span>

      {/* Button content above the water */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

