"use client";

import Link from "next/link";
import { ArrowUpRight, Zap, Code2, Gauge, Terminal } from "lucide-react";

const items = [
  {
    title: "Animated UI",
    description: "Framer Motion and GSAP patterns, ready to paste.",
    href: "/docs/components/animated-button",
    icon: Zap,
  },
  {
    title: "TypeScript",
    description: "Strict props and variants on every component.",
    href: "/docs/components/button",
    icon: Code2,
  },
  {
    title: "Performance",
    description: "Server components and lean client bundles.",
    href: "/docs",
    icon: Gauge,
  },
  {
    title: "CLI workflow",
    description: "Add components with a single command.",
    href: "/docs#installation",
    icon: Terminal,
  },
];

export default function BentoGrid() {
  return (
    <section id="features" className="border-b border-[var(--color-border)] scroll-mt-24">
      <div className="page-container py-20 md:py-28">
        <div className="mb-12">
          <h2 className="section-heading mb-4">What you get</h2>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            All components
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <Link key={item.title} href={item.href} className="block h-full">
              <div className="surface-panel-hover p-8 h-full">
                <item.icon className="w-5 h-5 mb-4 text-[var(--color-accent-muted)]" strokeWidth={1.75} />
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
