"use client";

import { motion } from "framer-motion";
import { Box, Play, Palette, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "GSAP interactions",
    icon: Box,
    category: "Motion",
    href: "/docs/components/gsap-button",
    gradient: "from-accent/20 to-transparent",
  },
  {
    title: "Page transitions",
    icon: Play,
    category: "Navigation",
    href: "/docs/components/page-transition",
    gradient: "from-accent-secondary/20 to-transparent",
  },
  {
    title: "Glass navbars",
    icon: Palette,
    category: "Layout",
    href: "/docs/components/navbar-glass",
    gradient: "from-accent-warm/15 to-transparent",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-28 md:py-36 scroll-mt-32 border-t border-white/5">
      <div className="page-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="section-eyebrow mb-4">Showcase</p>
            <h2 className="section-heading mb-4">See it in motion</h2>
            <p className="section-subtitle max-w-xl">
              Live examples from the docs — open any component and copy the source.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <Link
                href={item.href}
                className="group glow-card glass-panel relative flex flex-col h-[360px] rounded-3xl border-white/6 overflow-hidden hover:border-accent/35 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-60`} />
                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center text-accent-secondary group-hover:scale-105 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="mt-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-secondary mb-3 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--muted)] group-hover:text-white transition-colors">
                      Open docs
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
