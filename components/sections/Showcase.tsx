import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const items = [
  { title: "GSAP Button", href: "/docs/components/gsap-button", tag: "Motion" },
  { title: "Page Transition", href: "/docs/components/page-transition", tag: "Navigation" },
  { title: "Glass Navbar", href: "/docs/components/navbar-glass", tag: "Layout" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="border-b border-white/8 scroll-mt-24">
      <div className="page-container py-20 md:py-28">
        <p className="section-label mb-3">Showcase</p>
        <h2 className="section-heading mb-10">Popular components</h2>
        <ul className="divide-y divide-white/8 border-t border-b border-white/8">
          {items.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center justify-between py-5 group hover:bg-white/[0.02] -mx-2 px-2 rounded-md transition-colors"
              >
                <div>
                  <p className="text-base font-medium text-white">{item.title}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">{item.tag}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-white transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
