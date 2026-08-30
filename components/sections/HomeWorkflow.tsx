"use client";

import { motion } from "framer-motion";
import { Download, Package, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Initialize",
    description: "Run the CLI init command in your Next.js project to scaffold config and paths.",
    icon: Download,
    code: "npx @nehal712521/inprogress init",
  },
  {
    step: "02",
    title: "Add components",
    description: "Pull individual components into your codebase. Each file is yours to edit.",
    icon: Package,
    code: "npx @nehal712521/inprogress add card",
  },
  {
    step: "03",
    title: "Ship",
    description: "Import from your local components folder and deploy with zero vendor lock-in.",
    icon: Rocket,
    code: 'import { Card } from "@/components/ui/card"',
  },
];

export default function HomeWorkflow() {
  return (
    <section className="border-b border-white/8">
      <div className="page-container-wide py-20 md:py-28">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="display-lg mb-4">From install to production in three steps</h2>
            <p className="body-lg">
              No design system migration. No wrapper library. Just files you can read, change, and commit.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((item, i) => (
              <motion.article
                key={item.step}
                className="surface-panel p-6 md:p-7"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-blue-400" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-[var(--muted)] mb-1">{item.step}</p>
                    <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                    <p className="body-sm mb-4">{item.description}</p>
                    <code className="block rounded-lg bg-zinc-950 border border-white/8 px-3 py-2 text-xs font-mono text-blue-300/90 overflow-x-auto">
                      {item.code}
                    </code>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
