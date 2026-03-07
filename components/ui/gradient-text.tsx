"use client";

import React from "react";
import { motion } from "framer-motion";

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
    colors?: string[];
}

export function GradientText({ 
    children, 
    className = "",
    animate = true,
    colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#3b82f6"]
}: GradientTextProps) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: animate ? "300% 100%" : "100% 100%",
    };

    return (
        <motion.span
            className={`bg-clip-text text-transparent inline-block ${className}`}
            style={gradientStyle}
            animate={animate ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            } : undefined}
            transition={animate ? {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
            } : undefined}
        >
            {children}
        </motion.span>
    );
}

// Shimmer effect text
export function ShimmerText({ 
    children, 
    className = "" 
}: { 
    children: React.ReactNode; 
    className?: string;
}) {
    return (
        <span className={`relative inline-block ${className}`}>
            <span className="bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                {children}
            </span>
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
            `}</style>
        </span>
    );
}
