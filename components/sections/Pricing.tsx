"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Open source",
    price: "Free",
    period: "forever",
    description: "Full access to every component, CLI, and docs.",
    features: [
      "All 40+ components",
      "CLI install workflow",
      "MIT license",
      "Community support",
    ],
    cta: "Get started",
    href: "/docs",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For teams that need faster answers and early releases.",
    features: [
      "Everything in Open source",
      "Priority support",
      "Early component access",
      "Custom component requests",
    ],
    cta: "Contact sales",
    href: "/contact",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/8 scroll-mt-24">
      <div className="page-container-wide py-20 md:py-28">
        <div className="max-w-xl mb-12">
          <h2 className="display-lg mb-4">Start free, upgrade when you need more</h2>
          <p className="body-lg">
            The entire library is open source. Pro adds support and early access for production teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`h-full p-8 rounded-2xl flex flex-col ${
                plan.highlighted
                  ? "border border-blue-500/30 bg-blue-500/[0.06]"
                  : "surface-panel"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-sm font-medium text-blue-300 mb-1">{plan.name}</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-semibold text-white">{plan.price}</span>
                <span className="text-sm text-[var(--muted)]">{plan.period}</span>
              </div>
              <p className="body-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" strokeWidth={2} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`${plan.highlighted ? "btn-primary" : "btn-secondary"} w-full mt-auto`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
