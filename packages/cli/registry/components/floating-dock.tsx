"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface DockItem {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    href?: string;
}

interface FloatingDockProps {
    items: DockItem[];
    className?: string;
}

export function FloatingDock({ items, className = "" }: FloatingDockProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 ${className}`}>
            <motion.div
                className="flex items-end gap-2 px-4 py-3 bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800/50 shadow-2xl"
                initial={{ y: 100, opacity: 0 }}
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
                            onClick={item.onClick}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            animate={{ scale, y }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors group"
                        >
                            <span className="text-zinc-300 group-hover:text-white transition-colors">
                                {item.icon}
                            </span>
                            
                            {/* Tooltip */}
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ 
                                    opacity: isHovered ? 1 : 0, 
                                    y: isHovered ? -40 : -30 
                                }}
                                className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md whitespace-nowrap pointer-events-none"
                            >
                                {item.label}
                            </motion.span>
                        </motion.button>
                    );

                    if (item.href) {
                        return (
                            <a key={index} href={item.href}>
                                {content}
                            </a>
                        );
                    }

                    return <div key={index}>{content}</div>;
                })}
            </motion.div>
        </div>
    );
}
