import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featured = [
  { name: "Floating Dock", href: "/docs/components/floating-dock" },
  { name: "Flip Card", href: "/docs/components/flip-card" },
  { name: "Text Reveal", href: "/docs/components/text-reveal" },
  { name: "Page Transition", href: "/docs/components/page-transition" },
  { name: "Spotlight Card", href: "/docs/components/spotlight-card" },
  { name: "3D Buttons", href: "/docs/components/3d-buttons" },
  { name: "GSAP Modal", href: "/docs/components/gsap-modal" },
  { name: "Glass Navbar", href: "/docs/components/navbar-glass" },
];

const catalog = [
  "Button",
  "Ripple Button",
  "Water Fill",
  "Orbit Logo",
  "Card",
  "Input",
  "Badge",
  "Loader",
  "Timeline",
  "Carousel",
  "Auth Card",
  "Mega Navbar",
  "Scroll Reveal",
  "Gradient Text",
  "Mouse Tracker",
  "Pricing",
];

export default function HomeShowcase() {
  const marquee = [...catalog, ...catalog];

  return (
    <section>
      <div className="page-container-wide pt-24 md:pt-32 pb-10">
        <div className="mb-10 max-w-xl">
          <h2 className="display-lg mb-4">Open a component</h2>
          <p className="body-lg mb-6">Interactive docs for every piece. Copy the file, change the motion.</p>
          <Link href="/docs/components/button" className="btn-secondary">
            All components
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] rounded-[var(--radius-panel)] overflow-hidden border border-[var(--color-border)]">
          {featured.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-end justify-between gap-3 bg-[var(--background)] min-h-[7.5rem] p-5 hover:bg-[var(--color-surface)] transition-colors duration-300"
            >
              <span className="text-sm font-semibold group-hover:text-[var(--color-accent-muted)] transition-colors">
                {item.name}
              </span>
              <ArrowUpRight className="w-4 h-4 text-[var(--muted)] shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      <div className="border-y border-[var(--color-border)] py-5 overflow-hidden">
        <div className="name-marquee text-sm text-[var(--muted)]">
          {marquee.map((name, i) => (
            <span key={`${name}-${i}`} className="shrink-0">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
