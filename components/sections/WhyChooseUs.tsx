"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const reasons = [
  { title: "Own your code", desc: "No black-box npm package. Edit everything directly." },
  { title: "Responsive", desc: "Mobile-first layouts across all components." },
  { title: "Accessible motion", desc: "Respects reduced-motion preferences." },
  { title: "Fast setup", desc: "Init once, add components as you need them." },
];

export default function WhyChooseUs() {
  return (
    <section className="border-b border-white/8">
      <div className="page-container py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="section-label mb-3">Why Animioui</p>
            <h2 className="section-heading mb-10">
              Professional tools,{" "}
              <span className="gradient-text">zero lock-in</span>
            </h2>
            <ul className="space-y-5">
              {reasons.map((item, i) => (
                <motion.li
                  key={item.title}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              className="card-glass-accent p-6 font-mono text-[13px] text-[var(--muted)] space-y-2"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <p>
                <span className="text-cyan-400">$</span> npx @nehal712521/inprogress init
              </p>
              <p className="text-violet-300/60">→ components/ui</p>
              <p className="pt-2">
                <span className="text-cyan-400">$</span> npx @nehal712521/inprogress add gsap-button
              </p>
              <p className="text-violet-300/60">→ ready to import</p>
              <Link
                href="/docs"
                className="inline-flex items-center gap-1 pt-4 text-violet-300 text-sm hover:text-white transition-colors"
              >
                Read the guide →
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
