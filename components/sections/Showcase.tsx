"use client";

import { motion } from "framer-motion";
import { Layers, Play, Box, Palette } from "lucide-react";

const items = [
    { title: "Dynamic Hero", icon: Box, category: "Layout" },
    { title: "Smooth Scroller", icon: Play, category: "Animation" },
    { title: "Theme Manager", icon: Palette, category: "Utility" },
];

export default function Showcase() {
    return (
        <section id="showcase" className="relative py-32 px-4 bg-zinc-950/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 px-4">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight gradient-heading">Interactive Showcase</h2>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Experience the fluidity and power of our components in real-time.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -12 }}
                            className="group relative h-[400px] glass-panel rounded-[32px] border-white/5 overflow-hidden transition-all hover:border-accent/50 shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10" />

                            <div className="absolute top-8 left-8 p-4 rounded-2xl bg-accent/10 text-accent group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                                <item.icon className="w-7 h-7" />
                            </div>

                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-md bg-accent/10 text-accent mb-3 inline-block">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Built with motion and high-performance rendering in mind.
                                </p>
                            </div>

                            {/* Animated Visual Background */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity duration-500 -z-10">
                                <div className="w-48 h-48 rounded-full border border-dashed border-accent animate-[spin_10s_linear_infinite]" />
                                <div className="absolute w-32 h-32 rounded-full border border-accent/20 animate-[pulse_4s_ease-in-out_infinite]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
