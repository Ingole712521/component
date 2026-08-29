"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Terminal, Layers, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const springConfig = { damping: 28, stiffness: 120 };

const SHOOTING_STARS = [
  { top: "12%", left: "8%", animationDelay: "0ms", rotation: 45 },
  { top: "34%", left: "72%", animationDelay: "1400ms", rotation: 120 },
  { top: "58%", left: "22%", animationDelay: "2800ms", rotation: 200 },
  { top: "18%", left: "88%", animationDelay: "900ms", rotation: 310 },
  { top: "76%", left: "55%", animationDelay: "3600ms", rotation: 15 },
] as const;

const stats = [
  { value: "40+", label: "Components", icon: Layers },
  { value: "CLI", label: "Copy & paste", icon: Terminal },
  { value: "0ms", label: "Config needed", icon: Zap },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);
  const background = useMotionTemplate`radial-gradient(520px circle at ${dx}px ${dy}px, rgba(124, 107, 240, 0.12), transparent 75%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center border-b border-white/6 overflow-hidden group">
      <div className="absolute inset-0 grid-pattern opacity-50 -z-10" />
      <div className="absolute inset-0 bg-linear-to-b from-[var(--background)] via-transparent to-[var(--background)] pointer-events-none -z-10" />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-0"
        style={{ background }}
      />

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

      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[min(900px,90vw)] h-[420px] bg-accent/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="page-container relative z-10 pt-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="section-eyebrow mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary animate-pulse" />
            Next.js component system
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8">
            <span className="gradient-heading">Ship interfaces</span>
            <br />
            <span className="gradient-heading-accent">worth remembering.</span>
          </h1>

          <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Copy-paste animated React components built for performance. GSAP, Framer Motion,
            and Tailwind — ready for production.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link href="/docs" className="btn-primary w-full sm:w-auto">
              Explore components
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#features" className="btn-secondary w-full sm:w-auto">
              See what&apos;s included
            </Link>
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-12 px-4 py-3 rounded-2xl border border-white/8 bg-surface/80 backdrop-blur-md font-mono text-sm text-[var(--muted)]">
            <span className="text-accent-secondary">$</span>
            <span>npx @nehal712521/inprogress add button</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel glow-card rounded-2xl px-5 py-4 text-left border-white/6"
              >
                <stat.icon className="w-4 h-4 text-accent-secondary mb-2" />
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-wider text-[var(--muted)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
