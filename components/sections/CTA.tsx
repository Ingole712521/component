"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export default function CTA() {
  return (
    <section className="border-b border-white/8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_70%)] pointer-events-none" />

      <div className="page-container py-20 md:py-28 relative">
        <Reveal className="max-w-xl mx-auto text-center">
          <h2 className="section-heading mb-4">
            Start building <span className="gradient-text">today</span>
          </h2>
          <p className="section-subtitle mb-8 mx-auto">
            Open the docs, pick a component, and paste it into your Next.js project.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/docs" className="btn-primary">
              Open documentation
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
