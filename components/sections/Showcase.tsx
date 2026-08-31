"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const items = [
  { title: "GSAP Button", href: "/docs/components/gsap-button", tag: "Motion" },
  { title: "Page Transition", href: "/docs/components/page-transition", tag: "Navigation" },
  { title: "Glass Navbar", href: "/docs/components/navbar-glass", tag: "Layout" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="border-b border-[var(--color-border)] scroll-mt-24">
      <div className="page-container py-20 md:py-28">
        <h2 className="section-heading mb-10">Popular components</h2>
        <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {items.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center justify-between px-1 py-4 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[var(--muted)] w-20">{item.tag}</span>
                  <p className="text-base font-medium group-hover:text-[var(--color-accent-muted)] transition-colors">
                    {item.title}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
