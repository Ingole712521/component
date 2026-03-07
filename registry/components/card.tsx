"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <motion.div 
            className={`relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ scale: 1.02, borderColor: "rgba(14, 165, 233, 0.3)" }}
        >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-purple-500/5 animate-pulse" />
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                        background: [
                            "radial-gradient(400px circle at 0% 0%, rgba(14, 165, 233, 0.1), transparent 60%)",
                            "radial-gradient(400px circle at 100% 100%, rgba(14, 165, 233, 0.1), transparent 60%)",
                            "radial-gradient(400px circle at 0% 0%, rgba(14, 165, 233, 0.1), transparent 60%)",
                        ],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
            </div>
            {children}
        </motion.div>
    );
}

export function CardHeader({ children, className = "" }: CardProps) {
    return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: CardProps) {
    return <h3 className={`text-lg font-semibold text-white ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }: CardProps) {
    return <p className={`text-sm text-zinc-400 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }: CardProps) {
    return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardProps) {
    return <div className={`mt-4 flex items-center gap-2 ${className}`}>{children}</div>;
}
