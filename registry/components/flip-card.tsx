"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
    front: React.ReactNode;
    back: React.ReactNode;
    className?: string;
    width?: string;
    height?: string;
}

export function FlipCard({ 
    front, 
    back, 
    className = "",
    width = "300px",
    height = "400px"
}: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`relative cursor-pointer group ${className}`}
            style={{ width, height, perspective: "1000px" }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {front}
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden"
                    style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    }}
                >
                    {back}
                </div>
            </motion.div>

            {/* Flip hint */}
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-zinc-500 bg-zinc-900/80 px-2 py-1 rounded">
                    Click to flip
                </span>
            </div>
        </div>
    );
}

// Pre-styled card faces
export function FlipCardFront({ 
    title, 
    subtitle, 
    image,
    className = "" 
}: { 
    title: string; 
    subtitle?: string; 
    image?: string;
    className?: string;
}) {
    return (
        <div className={`w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 flex flex-col justify-end relative overflow-hidden ${className}`}>
            {image && (
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url(${image})` }}
                />
            )}
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
                {subtitle && <p className="text-zinc-400 text-sm">{subtitle}</p>}
            </div>
        </div>
    );
}

export function FlipCardBack({ 
    title, 
    description, 
    action,
    className = "" 
}: { 
    title: string; 
    description: string; 
    action?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 flex flex-col justify-center border border-zinc-800 ${className}`}>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>
            {action && <div className="mt-auto">{action}</div>}
        </div>
    );
}
