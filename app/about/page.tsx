import Link from "next/link";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "Components", value: "40+" },
  { label: "Open source", value: "Yes" },
  { label: "Built with", value: "Next.js" },
];

export default function About() {
  return (
    <div className="page-container py-20 md:py-28">
      <div className="max-w-2xl mb-16">
        <p className="section-label mb-4">About</p>
        <h1 className="section-heading mb-4">Animioui UI</h1>
        <p className="section-subtitle">
          A copy-paste component library for developers who want beautiful motion and full
          control over their codebase.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10 max-w-2xl mb-16">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[var(--background)] p-6">
            <p className="text-2xl font-medium text-white mb-1">{stat.value}</p>
            <p className="text-xs text-[var(--muted)] uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl space-y-4 text-sm text-[var(--muted)]">
        <p>
          Created by{" "}
          <Link href="https://nehalingole.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Nehal Ingole
          </Link>
          . The goal is simple: ship polished UI without fighting opaque dependencies.
        </p>
        <Link href="/docs" className="inline-flex btn-secondary">
          Read the docs
        </Link>
      </div>
    </div>
  );
}
