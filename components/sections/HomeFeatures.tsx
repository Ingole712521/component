"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Box, Code2, Layers, Terminal, Zap } from "lucide-react";

const features = [
  {
    title: "Copy-paste ownership",
    description: "Components land in your repo. No hidden npm dependency to fight at upgrade time.",
    icon: Code2,
    href: "/docs",
    className: "lg:col-span-2 lg:row-span-2",
    tint: "from-blue-500/10 to-transparent",
  },
  {
    title: "GSAP primitives",
    description: "Buttons, modals, and inputs with production-grade motion curves.",
    icon: Zap,
    href: "/docs/components/gsap-button",
    className: "lg:col-span-1",
    tint: "from-zinc-500/10 to-transparent",
  },
  {
    title: "Framer Motion",
    description: "Scroll reveals, page transitions, and layout animations included.",
    icon: Layers,
    href: "/docs/components/scroll-reveal",
    className: "lg:col-span-1",
    tint: "from-sky-500/10 to-transparent",
  },
  {
    title: "CLI workflow",
    description: "Init once, add components on demand with a single command.",
    icon: Terminal,
    href: "/docs",
    className: "lg:col-span-1",
    tint: "from-emerald-500/10 to-transparent",
  },
  {
    title: "Typed & accessible",
    description: "TypeScript-first components with keyboard and reduced-motion support.",
    icon: Box,
    href: "/docs/components/button",
    className: "lg:col-span-2",
    tint: "from-indigo-500/10 to-transparent",
  },
];

export default function HomeFeatures() {
  return (
    <section id="features" className="border-b border-white/8 scroll-mt-24">
      <div className="page-container-wide py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <h2 className="display-lg mb-4">
            Everything you need to ship polished interfaces
          </h2>
          <p className="body-lg">
            Forty-plus components across buttons, navigation, cards, and page transitions. Pick what you need, skip what you do not.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={feature.className}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={feature.href}
                className={`group block h-full surface-panel-hover p-6 md:p-8 relative overflow-hidden ${feature.className.includes("row-span-2") ? "md:min-h-[280px]" : ""}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.tint} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <feature.icon className="w-5 h-5 text-blue-400 mb-4 relative" strokeWidth={1.75} />
                <h3 className="text-lg font-semibold text-white mb-2 relative">{feature.title}</h3>
                <p className="body-sm relative">{feature.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
