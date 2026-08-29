"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    title: "Own your components",
    desc: "Copy source into your repo — no version lock-in or opaque API surface.",
  },
  {
    title: "Responsive by default",
    desc: "Mobile-first layouts tested across breakpoints, not bolted on later.",
  },
  {
    title: "Animation-ready",
    desc: "GSAP and Framer Motion patterns that respect reduced-motion preferences.",
  },
  {
    title: "CLI workflow",
    desc: "Add components with one command, same flow as shadcn/ui.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow mb-4">Why Animioui</p>
            <h2 className="section-heading mb-10">Designed for real product teams</h2>
            <div className="space-y-7">
              {reasons.map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-accent/12 flex items-center justify-center mt-0.5 group-hover:bg-accent/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-accent-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1.5 text-white">{item.title}</h4>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] glass-panel rounded-3xl overflow-hidden border-white/8 flex flex-col"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-black/30">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-[11px] font-mono text-[var(--muted)]">terminal</span>
            </div>
            <div className="flex-1 p-6 font-mono text-sm space-y-3">
              <p>
                <span className="text-accent-secondary">$</span>{" "}
                <span className="text-white">npx @nehal712521/inprogress init</span>
              </p>
              <p className="text-[var(--muted)]">✓ Created components/ui</p>
              <p className="text-[var(--muted)]">✓ Added lib/utils.ts</p>
              <p className="pt-2">
                <span className="text-accent-secondary">$</span>{" "}
                <span className="text-white">npx @nehal712521/inprogress add gsap-button</span>
              </p>
              <p className="text-emerald-400/90">Done. Import from @/components/ui/gsap-button</p>
            </div>
            <div className="px-6 pb-6">
              <Link href="/docs" className="btn-secondary w-full !py-3 !text-sm !rounded-xl">
                <Terminal className="w-4 h-4" />
                Read installation guide
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
