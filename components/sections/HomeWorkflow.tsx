"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    title: "Initialize",
    body: "Scaffold config and paths in your Next.js project.",
    code: "npx @nehal712521/inprogress init",
  },
  {
    title: "Add a component",
    body: "The source file lands locally. Open it and edit.",
    code: "npx @nehal712521/inprogress add card",
  },
  {
    title: "Ship",
    body: "Import from your own folder. No vendor lock-in on the way out.",
    code: 'import { Card } from "@/components/ui/card"',
  },
];

export default function HomeWorkflow() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[var(--color-surface)]">
      <div className="page-container-wide py-24 md:py-32">
        <h2 className="display-lg mb-4">Three commands</h2>
        <p className="body-lg mb-14">Init, add, import. That is the whole workflow.</p>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.06, ease: [0.32, 0.72, 0, 1] }}
              className="grid md:grid-cols-[8rem_1fr_minmax(0,28rem)] gap-4 md:gap-8 py-8 border-t border-[var(--color-border)] items-baseline"
            >
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="body-sm md:max-w-[40ch]">{step.body}</p>
              <code className="block rounded-xl bg-[#0c0d10] border border-[var(--color-border)] px-3 py-2.5 text-xs font-mono text-[var(--color-accent-muted)] overflow-x-auto">
                {step.code}
              </code>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
