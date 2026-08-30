import Link from "next/link";

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
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="section-label mb-3">Why Animioui</p>
            <h2 className="section-heading mb-10">Designed with restraint</h2>
            <ul className="space-y-6">
              {reasons.map((item) => (
                <li key={item.title} className="border-l border-white/15 pl-4">
                  <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="doc-panel p-6 font-mono text-[13px] text-[var(--muted)] space-y-2">
            <p>
              <span className="text-white">$</span> npx @nehal712521/inprogress init
            </p>
            <p className="text-white/40">→ components/ui</p>
            <p className="pt-2">
              <span className="text-white">$</span> npx @nehal712521/inprogress add gsap-button
            </p>
            <p className="text-white/40">→ ready to import</p>
            <Link href="/docs" className="inline-block pt-4 text-white text-sm hover:underline">
              Read the guide →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
