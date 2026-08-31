"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DockItem {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

interface FloatingDockProps {
  items: DockItem[];
  className?: string;
  placement?: "fixed" | "inline";
}

export function FloatingDock({
  items,
  className = "",
  placement = "fixed",
}: FloatingDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        placement === "fixed"
          ? "fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          : "relative z-10",
        className
      )}
    >
      <motion.div
        className="flex items-end gap-2 px-4 py-3 bg-zinc-900/90 rounded-2xl border border-zinc-800 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.55)]"
        initial={{ y: placement === "fixed" ? 24 : 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isNeighbor = hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;
          const isFar = hoveredIndex !== null && Math.abs(hoveredIndex - index) === 2;

          const scale = isHovered ? 1.5 : isNeighbor ? 1.2 : isFar ? 1.05 : 1;
          const y = isHovered ? -20 : isNeighbor ? -10 : 0;

          const content = (
            <motion.button
              type="button"
              onClick={item.onClick}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ scale, y }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors group"
              aria-label={item.label}
            >
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                {item.icon}
              </span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? -40 : -30,
                }}
                className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md whitespace-nowrap pointer-events-none"
              >
                {item.label}
              </motion.span>
            </motion.button>
          );

          if (item.href) {
            return (
              <a key={`${item.label}-${index}`} href={item.href}>
                {content}
              </a>
            );
          }

          return <div key={`${item.label}-${index}`}>{content}</div>;
        })}
      </motion.div>
    </div>
  );
}
