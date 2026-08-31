"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Open source",
    price: "Free",
    period: "forever",
    description: "Every component, the CLI, and the docs.",
    features: ["All 40+ components", "CLI install workflow", "MIT license", "Community support"],
    cta: "See the library",
    href: "/docs/components/button",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Support and early access for production teams.",
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
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="scroll-mt-28">
      <div className="page-container-wide py-24 md:py-32">
        <div className="max-w-xl mb-14">
          <h2 className="display-lg mb-4">Start free</h2>
          <p className="body-lg">
            The library is open source. Pro adds support when the team needs a faster path.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={plan.highlighted ? "shell h-full" : "surface-panel h-full p-8 flex flex-col"}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: reduce ? 0 : i * 0.06, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className={plan.highlighted ? "shell-inner p-8 h-full flex flex-col" : "h-full flex flex-col"}>
                <p className="text-sm font-medium text-[var(--color-accent-muted)] mb-1">{plan.name}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-semibold tabular-nums">{plan.price}</span>
                  <span className="text-sm text-[var(--muted)]">{plan.period}</span>
                </div>
                <p className="body-sm mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-[var(--color-accent-muted)] shrink-0 mt-0.5" strokeWidth={1.75} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`${plan.highlighted ? "btn-primary" : "btn-secondary"} w-full mt-auto justify-center`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
