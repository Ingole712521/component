"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const floatingCards = [
  { label: "GSAP Button", color: "from-violet-500/20 to-indigo-500/10" },
  { label: "Page Transition", color: "from-cyan-500/20 to-blue-500/10" },
  { label: "Glass Navbar", color: "from-fuchsia-500/20 to-violet-500/10" },
];

export default function Hero() {
  return (
    <section className="relative border-b border-white/8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.15),transparent)] pointer-events-none" />

      <div className="page-container py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <span className="tag-pill mb-6">
                <Sparkles className="w-3.5 h-3.5 text-violet-300" />
                Component library for Next.js
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="section-heading mb-6">
                Build interfaces with{" "}
                <span className="gradient-text">motion & clarity</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="section-subtitle mb-10">
                Copy-paste React UI with GSAP and Framer Motion built in. Own the source,
                ship faster, stay in control.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center gap-3 mb-12">
                <Link href="/docs" className="btn-primary">
                  Browse docs
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#features" className="btn-secondary">
                  View features
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="card-glass px-4 py-3 font-mono text-[13px] text-[var(--muted)] inline-flex items-center gap-2">
                <span className="text-cyan-400">$</span>
                <span>npx @nehal712521/inprogress add button</span>
              </div>
            </Reveal>
          </div>

          <div className="relative hidden lg:block h-[380px]">
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                className={`absolute card-glass px-5 py-4 bg-gradient-to-br ${card.color}`}
                style={{
                  top: `${12 + i * 28}%`,
                  left: `${8 + i * 18}%`,
                  zIndex: 3 - i,
                }}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs text-violet-300/80 mb-1">Component</p>
                  <p className="text-sm font-medium text-white">{card.label}</p>
                </motion.div>
              </motion.div>
            ))}

            <motion.div
              className="absolute bottom-8 right-4 w-48 h-48 rounded-full border border-violet-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute bottom-16 right-12 w-32 h-32 rounded-full bg-violet-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
