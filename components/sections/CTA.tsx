"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,90vw)] h-[400px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="page-container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel glow-card p-12 md:p-16 rounded-[2rem] text-center border-accent/20"
        >
          <p className="section-eyebrow mb-6 mx-auto w-fit">Get started</p>
          <h2 className="section-heading mb-6 leading-[1.08]">
            Start building in minutes
          </h2>
          <p className="section-subtitle mb-10 max-w-lg mx-auto">
            Browse the docs, run the CLI, and paste components into your Next.js app today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/docs" className="btn-primary w-full sm:w-auto">
              Open documentation
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">
              Get in touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
