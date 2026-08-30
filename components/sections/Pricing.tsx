"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Copy components into your project at no cost.",
    features: ["All components", "CLI install", "MIT license"],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For teams shipping production apps.",
    features: ["Priority support", "Early access", "Custom requests"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with specific needs.",
    features: ["Dedicated support", "Custom components", "SLA"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/8 scroll-mt-24">
      <div className="page-container py-20 md:py-28">
        <Reveal className="max-w-xl mb-12">
          <p className="section-label mb-3">Pricing</p>
          <h2 className="section-heading mb-4">
            Simple and <span className="gradient-text">transparent</span>
          </h2>
          <p className="section-subtitle">
            Start free with copy-paste components. Upgrade when you need more support.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`h-full p-8 rounded-xl transition-all duration-300 ${
                  plan.highlighted
                    ? "card-glass-accent scale-[1.02]"
                    : "card-glass hover:border-violet-500/20"
                }`}
              >
                <p className="text-sm font-medium text-violet-300 mb-1">{plan.name}</p>
                <p className="text-3xl font-semibold text-white mb-3">{plan.price}</p>
                <p className="text-sm text-[var(--muted)] mb-6">{plan.description}</p>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-[var(--muted)] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-violet-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/docs"
                  className={`${plan.highlighted ? "btn-primary" : "btn-secondary"} w-full`}
                >
                  Get started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="text-xs text-[var(--muted)] mt-8">
            Live preview:{" "}
            <Link
              href="https://pricing-component-one-ivory.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-white transition-colors"
            >
              pricing demo →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
