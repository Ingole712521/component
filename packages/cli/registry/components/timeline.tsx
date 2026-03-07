"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
    title: string;
    description?: string;
    date?: string;
    icon?: React.ReactNode;
}

interface TimelineProps {
    items: TimelineItem[];
    className?: string;
}

export function Timeline({ items, className = "" }: TimelineProps) {
    return (
        <div className={`relative ${className}`}>
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent" />
            
            <div className="space-y-8">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative flex gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        {/* Dot */}
                        <div className="relative z-10 flex-shrink-0">
                            <motion.div
                                className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center"
                                whileHover={{ scale: 1.1, borderColor: "#3b82f6" }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            >
                                {item.icon ? (
                                    <span className="text-zinc-400 text-sm">{item.icon}</span>
                                ) : (
                                    <div className="w-2 h-2 rounded-full bg-zinc-500" />
                                )}
                            </motion.div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 pt-1">
                            <div className="flex items-center gap-3 mb-1">
                                <h3 className="text-white font-semibold">{item.title}</h3>
                                {item.date && (
                                    <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">
                                        {item.date}
                                    </span>
                                )}
                            </div>
                            {item.description && (
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Alternative horizontal timeline
export function TimelineHorizontal({ items, className = "" }: TimelineProps) {
    return (
        <div className={`relative ${className}`}>
            <div className="flex items-start justify-between">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative flex-1 flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                    >
                        {/* Connector line */}
                        {index < items.length - 1 && (
                            <div className="absolute top-4 left-1/2 w-full h-px bg-zinc-800" />
                        )}
                        
                        {/* Dot */}
                        <motion.div
                            className="relative z-10 w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center mb-3"
                            whileHover={{ scale: 1.1, borderColor: "#3b82f6" }}
                        >
                            <div className="w-2 h-2 rounded-full bg-zinc-500" />
                        </motion.div>
                        
                        {/* Content */}
                        <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                        {item.date && (
                            <span className="text-xs text-zinc-500 mb-1">{item.date}</span>
                        )}
                        {item.description && (
                            <p className="text-zinc-400 text-xs max-w-[150px]">
                                {item.description}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
