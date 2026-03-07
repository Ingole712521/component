"use client";

import React from "react";
import { motion } from "framer-motion";

type BadgeVariant = "default" | "secondary" | "outline" | "destructive" | "animated";

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
    outline: "border border-zinc-700 text-zinc-100 hover:bg-zinc-800",
    destructive: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
    animated: "bg-black text-white",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
    if (variant === "animated") {
        return (
            <motion.span
                className={`relative inline-flex items-center rounded-full px-3 py-1 text-xs font-medium overflow-hidden ${className}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                {/* Rotating Border Light */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: "conic-gradient(from 0deg, transparent, #0ea5e9, transparent, #8b5cf6, transparent)",
                        padding: "1px",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute inset-[1px] rounded-full bg-black" />
                </motion.div>
                {/* Inner glow */}
                <motion.div
                    className="absolute inset-0 rounded-full opacity-50"
                    animate={{
                        boxShadow: [
                            "inset 0 0 10px rgba(14, 165, 233, 0.3)",
                            "inset 0 0 20px rgba(139, 92, 246, 0.3)",
                            "inset 0 0 10px rgba(14, 165, 233, 0.3)",
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="relative z-10">{children}</span>
            </motion.span>
        );
    }

    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${variantStyles[variant]} ${className}`}
        >
            {children}
        </span>
    );
}
