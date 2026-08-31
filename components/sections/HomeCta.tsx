"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeCta() {
  return (
    <section>
      <div className="page-container-wide py-24 md:py-32">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="display-lg mb-4">Open the docs and add your first component</h2>
          <p className="body-lg mb-8">
            Install via CLI, copy the source into your project, and ship interfaces with real motion already in place.
          </p>
          <Link href="/docs" className="btn-primary">
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
