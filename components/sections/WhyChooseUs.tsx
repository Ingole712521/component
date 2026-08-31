"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const reasons = [
  { title: "Own your code", desc: "No black-box npm package. Edit everything directly." },
  { title: "Responsive", desc: "Mobile-first layouts across all components." },
  { title: "Accessible motion", desc: "Respects reduced-motion preferences." },
  { title: "Fast setup", desc: "Init once, add components as you need them." },
];

export default function WhyChooseUs() {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="page-container py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="section-heading mb-8">Professional tools, zero lock-in</h2>
            <ul className="space-y-5">
              {reasons.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <Check className="w-5 h-5 text-[var(--color-accent-muted)] shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-panel p-6 font-mono text-[13px] text-[var(--muted)] space-y-2">
            <p>
              <span className="text-[var(--color-accent-muted)]">$</span> npx @nehal712521/inprogress init
            </p>
            <p>components/ui</p>
            <p className="pt-2">
              <span className="text-[var(--color-accent-muted)]">$</span> npx @nehal712521/inprogress add gsap-button
            </p>
            <p>ready to import</p>
            <Link href="/docs" className="inline-flex items-center pt-4 text-sm text-[var(--foreground)] hover:text-[var(--color-accent-muted)] transition-colors">
              Read the guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
