"use client";

import { motion } from "framer-motion";
import { Code2, CheckCircle2 } from "lucide-react";

const reasons = [
    { title: "Fast Development", desc: "Pre-built components mean you spend less time on CSS and more time on logic." },
    { title: "Responsive", desc: "Every component is mobile-first and tested across all screen sizes." },
    { title: "Dark Mode Support", desc: "Automatic dark mode integration with Tailwind 4.0." },
    { title: "Modular Architecture", desc: "Only import what you need. Keep your bundles lean and fast." },
];

export default function WhyChooseUs() {
    return (
        <section className="relative py-32 px-4 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter gradient-heading">Why Choose In Progress?</h2>
                        <div className="space-y-8">
                            {reasons.map((item, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mt-1 group-hover:bg-accent/20 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
                                        <p className="text-zinc-500 text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video glass-panel rounded-[32px] overflow-hidden border-white/5 flex items-center justify-center bg-zinc-950/50 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center text-accent animate-pulse shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                                <Code2 className="w-10 h-10" />
                            </div>
                            <span className="text-zinc-400 font-mono text-sm tracking-widest uppercase">Optimized Codebase</span>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-8 left-8 w-12 h-[1px] bg-white/10" />
                        <div className="absolute top-8 left-8 w-[1px] h-12 bg-white/10" />
                        <div className="absolute bottom-8 right-8 w-12 h-[1px] bg-white/10" />
                        <div className="absolute bottom-8 right-8 w-[1px] h-12 bg-white/10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
