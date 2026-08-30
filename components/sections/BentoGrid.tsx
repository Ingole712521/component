"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Code2, Gauge, Terminal } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const items = [
  {
    title: "Animated UI",
    description: "Framer Motion and GSAP patterns, ready to paste.",
    href: "/docs/components/animated-button",
    icon: Zap,
    accent: "text-violet-400",
  },
  {
    title: "TypeScript",
    description: "Strict props and variants on every component.",
    href: "/docs/components/button",
    icon: Code2,
    accent: "text-cyan-400",
  },
  {
    title: "Performance",
    description: "Server components and lean client bundles.",
    href: "/docs",
    icon: Gauge,
    accent: "text-indigo-400",
  },
  {
    title: "CLI workflow",
    description: "Add components with a single command.",
    href: "/docs#installation",
    icon: Terminal,
    accent: "text-fuchsia-400",
  },
];

export default function BentoGrid() {
  return (
    <section id="features" className="border-b border-white/8 scroll-mt-24">
      <div className="page-container py-20 md:py-28">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-3">Features</p>
            <h2 className="section-heading">What you get</h2>
          </div>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-violet-300 transition-colors group"
          >
            All components
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Link href={item.href} className="block h-full">
                <motion.div
                  className="card-glass p-8 h-full group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <item.icon className={`w-5 h-5 mb-4 ${item.accent}`} />
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
