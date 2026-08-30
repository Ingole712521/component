"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AnimatedButton = dynamic(() => import("@/components/ui/AnimatedButton"), {
  ssr: false,
  loading: () => (
    <div className="h-10 w-32 rounded-lg bg-zinc-800 animate-pulse" aria-hidden />
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center border-b border-white/8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,var(--background)_100%)] pointer-events-none" />

      <div className="page-container-wide w-full pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-5">Open source component kit</p>
            <h1 className="display-xl mb-6">
              Copy motion-ready UI into your stack
            </h1>
            <p className="body-lg mb-8">
              React components with GSAP and Framer Motion built in. Install via CLI and own every line of code.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/docs" className="btn-primary">
                Browse docs
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com/Ingole712521/component"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View on GitHub
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="surface-panel p-6 md:p-8 relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-[var(--muted)]">preview.tsx</span>
                </div>
                <Badge variant="animated">Live</Badge>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <AnimatedButton variant="shimmer" size="md">
                    Get started
                  </AnimatedButton>
                  <AnimatedButton variant="glow" size="md">
                    View demo
                  </AnimatedButton>
                </div>

                <div className="rounded-xl border border-white/8 bg-zinc-950/80 p-4 font-mono text-[13px]">
                  <p className="text-[var(--muted)]">
                    <span className="text-blue-400">$</span> npx @nehal712521/inprogress add button
                  </p>
                  <p className="text-emerald-400/90 mt-2">✓ Added components/ui/AnimatedButton.tsx</p>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 ambient-glow opacity-70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
