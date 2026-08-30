import Link from "next/link";

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
        <div className="max-w-xl mb-12">
          <p className="section-label mb-3">Pricing</p>
          <h2 className="section-heading mb-4">Simple and transparent</h2>
          <p className="section-subtitle">
            Start free with copy-paste components. Upgrade when you need more support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-[var(--background)] p-8 ${plan.highlighted ? "ring-1 ring-inset ring-white/20" : ""}`}
            >
              <p className="text-sm font-medium text-white mb-1">{plan.name}</p>
              <p className="text-3xl font-medium text-white mb-3">{plan.price}</p>
              <p className="text-sm text-[var(--muted)] mb-6">{plan.description}</p>
              <ul className="space-y-2 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-[var(--muted)]">
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/docs" className={plan.highlighted ? "btn-primary w-full" : "btn-secondary w-full"}>
                Get started
              </Link>
            </div>
          ))}
        </div>

        <p className="text-xs text-[var(--muted)] mt-6">
          Live preview:{" "}
          <Link
            href="https://pricing-component-one-ivory.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            pricing demo →
          </Link>
        </p>
      </div>
    </section>
  );
}
