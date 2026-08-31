"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const points = [
  {
    title: "The file is yours",
    body: "Components land in your repo. Change the spring, the copy, the radius.",
    href: "/docs",
  },
  {
    title: "GSAP where it counts",
    body: "Buttons, modals, and inputs with curves you can read in the source.",
    href: "/docs/components/gsap-button",
  },
  {
    title: "Framer Motion included",
    body: "Scroll reveals, layout animations, and page transitions already wired.",
    href: "/docs/components/scroll-reveal",
  },
  {
    title: "One CLI command",
    body: "Init once. Add what you need. Skip the rest.",
    href: "/docs#installation",
  },
];

export default function HomeFeatures() {
  const reduce = useReducedMotion();

  return (
    <section id="features" className="scroll-mt-28">
      <div className="page-container-wide py-24 md:py-32">
        <div className="max-w-2xl mb-14">
          <h2 className="display-lg mb-4">A kit, not a wrapper</h2>
          <p className="body-lg">
            Forty-plus components. You pick the ones that earn a place in the product.
          </p>
        </div>

        <ol className="grid md:grid-cols-2 gap-x-12">
          {points.map((point, i) => (
            <motion.li
              key={point.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: reduce ? 0 : i * 0.05, ease: [0.32, 0.72, 0, 1] }}
              className="border-t border-[var(--color-border)] py-8"
            >
              <Link href={point.href} className="group block">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-accent-muted)] transition-colors">
                  {point.title}
                </h3>
                <p className="body-sm max-w-[42ch]">{point.body}</p>
              </Link>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
