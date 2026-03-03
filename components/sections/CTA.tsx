"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative py-32 px-4 border-t border-white/5 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full opacity-30 -z-10" />

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative glass-panel p-12 md:p-24 rounded-[40px] text-center border-accent/20 overflow-hidden"
                >
                    {/* Subtle noise/texture overlay placeholder */}
                    <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter gradient-heading relative z-10 leading-[1.1]">
                        Ready to Build Something Incredible?
                    </h2>

                    <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
                        Join 2,000+ developers building high-performance SaaS applications with UI_LIB.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <Link
                            href="/contact"
                            className="group px-10 py-5 bg-accent text-white font-black rounded-2xl hover:scale-105 transition-all text-xl shadow-[0_20px_40px_rgba(14,165,233,0.3)] flex items-center gap-3"
                        >
                            Start Building Now
                            <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
