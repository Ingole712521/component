import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Animated UI",
    description: "Framer Motion and GSAP patterns, ready to paste.",
    href: "/docs/components/animated-button",
  },
  {
    title: "TypeScript",
    description: "Strict props and variants on every component.",
    href: "/docs/components/button",
  },
  {
    title: "Performance",
    description: "Server components and lean client bundles.",
    href: "/docs",
  },
  {
    title: "CLI workflow",
    description: "Add components with a single command.",
    href: "/docs#installation",
  },
];

export default function BentoGrid() {
  return (
    <section id="features" className="border-b border-white/8 scroll-mt-24">
      <div className="page-container py-20 md:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-3">Features</p>
            <h2 className="section-heading">What you get</h2>
          </div>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-white transition-colors"
          >
            All components
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-[var(--background)] p-8 hover:bg-white/[0.02] transition-colors group"
            >
              <h3 className="text-base font-medium text-white mb-2 group-hover:underline underline-offset-4">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
