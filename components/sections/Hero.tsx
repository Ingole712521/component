"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const springConfig = { damping: 25, stiffness: 150 };

const SHOOTING_STARS = [
    { top: "12%", left: "8%", animationDelay: "0ms", rotation: 45 },
    { top: "34%", left: "72%", animationDelay: "1200ms", rotation: 120 },
    { top: "58%", left: "22%", animationDelay: "2400ms", rotation: 200 },
    { top: "18%", left: "88%", animationDelay: "800ms", rotation: 310 },
    { top: "76%", left: "55%", animationDelay: "3600ms", rotation: 15 },
    { top: "42%", left: "40%", animationDelay: "4800ms", rotation: 265 },
] as const;

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    const background = useMotionTemplate`radial-gradient(600px circle at ${dx}px ${dy}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center border-b border-white/5 group">
            {/* Background Decor */}
            <div className="absolute inset-0 grid-pattern opacity-[0.3] -z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none -z-10" />

            {/* Dynamic Mouse Glow */}
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
                style={{ background }}
            />

            {/* Shooting Stars Background */}
            <div className="absolute inset-0 pointer-events-none">
                {SHOOTING_STARS.map((star, i) => (
                    <div
                        key={i}
                        className="shooting-star"
                        style={{
                            top: star.top,
                            left: star.left,
                            animationDelay: star.animationDelay,
                            transform: `rotate(${star.rotation}deg)`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Glows */}
            <div className="absolute left-1/2 -translate-x-1/2 w-full h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none opacity-40" />

            <div className="page-container text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-8">
                        <Sparkles className="w-3 h-3" />
                        <span>Premium UI Components for Next.js</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1] mb-8 gradient-heading py-2">
                        Build Beautiful <br className="hidden lg:block" />
                        Interfaces.
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Ship faster than ever with a library designed for speed, performance, and cutting-edge aesthetics.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/docs"
                            className="group px-8 py-4 bg-accent text-white font-black rounded-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all flex items-center gap-2"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#features"
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            View Components
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
