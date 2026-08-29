"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Documentation", href: "/docs" },
    { label: "Components", href: "/docs#installation" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "GitHub", href: "https://github.com/Ingole712521/component", external: true },
    { label: "About", href: "/about" },
    { label: "CLI Reference", href: "/docs#installation" },
  ],
  Legal: [
    { label: "MIT License", href: "https://github.com/Ingole712521/component/blob/main/LICENSE", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 border-t border-white/6 overflow-hidden">
      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-9 h-9 overflow-hidden rounded-lg border border-white/10">
                <Image src="/Profile_with_background.png" alt="Animioui UI" fill className="object-cover" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">Animioui UI</span>
            </Link>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-sm mb-6">
              Copy-paste React components for Next.js — animated, typed, and yours to customize.
            </p>
            <Link
              href="https://github.com/Ingole712521/component"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Star on GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--muted)] hover:text-accent-secondary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--muted)] hover:text-accent-secondary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/6 text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Animioui UI. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://nehalingole.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-secondary transition-colors"
            >
              Nehal Ingole
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
