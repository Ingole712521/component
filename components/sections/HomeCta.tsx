"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />

      <div className="page-container-wide py-24 md:py-32 relative">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="display-lg mb-4">Ready to build something that moves?</h2>
          <p className="body-lg mx-auto mb-8">
            Open the docs, install your first component, and start shipping interfaces with real motion built in.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/docs" className="btn-primary">
              Open documentation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
