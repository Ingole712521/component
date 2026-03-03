"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Code2, MousePointer2, Layers } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const bentoItems = [
    {
        title: "Animated UI Components",
        description: "Production-ready components with built-in Framer Motion animations.",
        icon: Sparkles,
        className: "col-span-12 lg:col-span-8",
    },
    {
        title: "Performance First",
        description: "Zero-config optimization.",
        icon: Zap,
        className: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
        title: "TypeScript",
        description: "First-class types for everything.",
        icon: Code2,
        className: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
        title: "Scroll Effects",
        description: "Stunning scroll transitions.",
        icon: MousePointer2,
        className: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
        title: "Customizable",
        description: "Tailwind-first architecture.",
        icon: Layers,
        className: "col-span-12 md:col-span-6 lg:col-span-4",
    },
];

export default function BentoGrid() {
    return (
        <section id="features" className="relative py-32 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight gradient-heading">What We Provide</h2>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Everything you need to build a world-class SaaS website with zero friction.</p>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {bentoItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={cn(
                                "glass-panel p-8 rounded-3xl flex flex-col justify-between group transition-all hover:border-accent/40 relative overflow-hidden min-h-[250px]",
                                item.className
                            )}
                        >
                            {/* Subtle backglow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-auto group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6" />
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
