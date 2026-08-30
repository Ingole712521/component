"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-white/8">
      <div className="page-container py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="section-label mb-6">Component library for Next.js</p>
          <h1 className="section-heading mb-6">
            Minimal components.
            <br />
            Maximum clarity.
          </h1>
          <p className="section-subtitle mb-10">
            Copy-paste React UI with thoughtful motion. Own the source, ship faster,
            stay in control.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Link href="/docs" className="btn-primary">
              Browse docs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#features" className="btn-secondary">
              View features
            </Link>
          </div>
          <p className="font-mono text-[13px] text-[var(--muted)] border-l border-white/15 pl-4">
            npx @nehal712521/inprogress add button
          </p>
        </div>
      </div>
    </section>
  );
}
