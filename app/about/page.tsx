"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "Components", value: "40+" },
  { label: "Open source", value: "Yes" },
  { label: "Built with", value: "Next.js" },
];

export default function About() {
  return (
    <div className="page-container py-20 md:py-28">
      <Reveal className="max-w-2xl mb-16">
        <p className="section-label mb-4">About</p>
        <h1 className="section-heading mb-4">
          Animioui <span className="gradient-text">UI</span>
        </h1>
        <p className="section-subtitle">
          A copy-paste component library for developers who want beautiful motion and full
          control over their codebase.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="card-glass p-6 text-center">
              <p className="text-2xl font-semibold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-[var(--muted)] uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.18} className="max-w-2xl space-y-4">
        <p className="text-sm text-[var(--muted)]">
          Created by{" "}
          <Link
            href="https://nehalingole.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 hover:text-white transition-colors"
          >
            Nehal Ingole
          </Link>
          . The goal is simple: ship polished UI without fighting opaque dependencies.
        </p>
        <Link href="/docs" className="btn-primary inline-flex">
          Read the docs
        </Link>
      </Reveal>
    </div>
  );
}
