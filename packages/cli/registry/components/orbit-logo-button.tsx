"use client";

import React, { CSSProperties, MouseEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";

type ButtonSize = "sm" | "md" | "lg";

export interface OrbitLogoButtonProps {
  children: React.ReactNode;
  /**
   * Optional custom items rendered inside the orbiting bubbles.
   * For example: avatar images, logos, or icons.
   * If not provided, simple colored circles are rendered.
   */
  items?: React.ReactNode[];
  /**
   * How many bubbles to render when `items` is not provided.
   * Defaults to 14.
   */
  itemCount?: number;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  /** Extra classes for each bubble (for custom colors, borders, etc.) */
  bubbleClassName?: string;
}

const sizeMap: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

// Predefined positions for the bubbles around the button center
const OFFSETS = [
  { x: -130, y: -40 },
  { x: -90, y: -70 },
  { x: -40, y: -85 },
  { x: 0, y: -90 },
  { x: 45, y: -80 },
  { x: 95, y: -60 },
  { x: 135, y: -35 },
  { x: 140, y: 10 },
  { x: 120, y: 55 },
  { x: 80, y: 80 },
  { x: 25, y: 95 },
  { x: -30, y: 90 },
  { x: -85, y: 70 },
  { x: -130, y: 35 },
];

export function OrbitLogoButton({
  children,
  items,
  itemCount = 14,
  size = "md",
  disabled = false,
  onClick,
  className = "",
  style,
  type = "button",
  fullWidth = false,
  bubbleClassName = "",
}: OrbitLogoButtonProps) {
  const [pulledIn, setPulledIn] = useState(false);

  const bubbles = useMemo(() => {
    if (items && items.length > 0) {
      return items;
    }
    const count = Math.min(itemCount, OFFSETS.length);
    return Array.from({ length: count }, () => null as React.ReactNode);
  }, [items, itemCount]);

  const base =
    "relative inline-flex items-center justify-center font-semibold tracking-tight rounded-xl cursor-pointer select-none border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

  return (
    <motion.button
      type={type}
      disabled={disabled}
      style={style}
      onClick={(e) => {
        setPulledIn(true);
        onClick?.(e);
      }}
      className={`${base} ${sizeMap[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {/* Orbiting bubbles layer */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((node, index) => {
          const offset = OFFSETS[index % OFFSETS.length];
          return (
            <motion.div
              key={index}
              className={`absolute w-6 h-6 rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.18)] flex items-center justify-center ${bubbleClassName}`}
              style={{ left: "50%", top: "50%" }}
              initial={false}
              animate={{
                x: pulledIn ? 0 : offset.x,
                y: pulledIn ? 0 : offset.y,
                opacity: pulledIn ? 0.9 : 0.45,
                scale: pulledIn ? 0.8 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 18,
                mass: 1,
                delay: pulledIn ? index * 0.035 : 0,
              }}
            >
              {node}
            </motion.div>
          );
        })}
      </div>

      {/* Button label */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}

