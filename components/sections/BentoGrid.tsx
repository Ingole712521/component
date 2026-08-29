"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Code2, MousePointer2, Layers, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const bentoItems = [
  {
    title: "Animated components",
    description: "Framer Motion and GSAP baked in — hover states, scroll reveals, and micro-interactions out of the box.",
    icon: Sparkles,
    className: "col-span-12 lg:col-span-8",
    href: "/docs/components/animated-button",
  },
  {
    title: "Performance first",
    description: "Server components, dynamic imports, and lean bundles by default.",
    icon: Zap,
    className: "col-span-12 md:col-span-6 lg:col-span-4",
    href: "/docs",
  },
  {
    title: "TypeScript native",
    description: "Strict types on every prop and variant.",
    icon: Code2,
    className: "col-span-12 md:col-span-6 lg:col-span-4",
    href: "/docs/components/button",
  },
  {
    title: "Scroll effects",
    description: "ScrollTrigger-powered sections that feel alive.",
    icon: MousePointer2,
    className: "col-span-12 md:col-span-6 lg:col-span-4",
    href: "/docs/components/scroll-reveal",
  },
  {
    title: "Tailwind-first",
    description: "Utility classes you can reshape without ejecting.",
    icon: Layers,
    className: "col-span-12 md:col-span-6 lg:col-span-4",
    href: "/docs/components/card",
  },
];

export default function BentoGrid() {
  return (
    <section id="features" className="relative py-28 md:py-36 scroll-mt-32">
      <div className="page-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="section-eyebrow mb-4">What you get</p>
            <h2 className="section-heading mb-4">Everything to ship faster</h2>
            <p className="section-subtitle max-w-xl">
              From buttons to navbars — pick a component, paste the code, make it yours.
            </p>
          </div>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-secondary hover:text-white transition-colors shrink-0"
          >
            View all components
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={cn("group", item.className)}
            >
              <Link
                href={item.href}
                className="glow-card glass-panel flex flex-col justify-between h-full min-h-[240px] p-8 rounded-3xl border-white/6 hover:border-accent/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center text-accent-secondary group-hover:scale-105 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="mt-auto pt-8">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
