"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CopyButton } from "./_components/copy-button";

const tocItems = [
  { name: "Introduction", href: "#introduction" },
  { name: "Installation", href: "#installation" },
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faq" },
];

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative doc-code">
      <CopyButton code={code} />
      <span className="text-[var(--color-accent-muted)]">$</span> {code}
    </div>
  );
}

export default function DocsIntroduction() {
  const [activeSection, setActiveSection] = useState("introduction");
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    tocItems.forEach(({ href }) => {
      const el = document.getElementById(href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="flex gap-12">
      <div className="flex-1 min-w-0 doc-stack pb-8">
        <header id="introduction" className="space-y-4 pb-6 border-b border-[var(--color-border)]">
          <h1 className="text-3xl md:text-[2.15rem] font-semibold tracking-tight">Introduction</h1>
          <p className="text-[var(--muted)] max-w-[62ch] leading-relaxed">
            Animioui is a copy-paste React component kit for Next.js. You install a component with the CLI, and the source lands in your repo.
          </p>
          <p className="text-[var(--muted)] max-w-[62ch] leading-relaxed">
            This is not a packaged design system. You own every line, including the motion.
          </p>
        </header>

        <section id="installation" className="space-y-4">
          <h2 className="doc-h2">Installation</h2>
          <p className="text-sm text-[var(--muted)]">
            Initialize your project, then add components with the CLI.
          </p>
          <CodeBlock code="npx @nehal712521/inprogress init" />
          <CodeBlock code="npx @nehal712521/inprogress add button" />

          <p className="text-sm text-[var(--muted)] pt-2">A few starting points:</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {["button", "card", "input", "badge", "floating-dock", "gsap-button"].map((comp) => (
              <CodeBlock key={comp} code={`npx @nehal712521/inprogress add ${comp}`} />
            ))}
          </div>
        </section>

        <section id="features" className="space-y-4">
          <h2 className="doc-h2">What you get</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-border)] rounded-[var(--radius-panel)] overflow-hidden border border-[var(--color-border)]">
            <div className="bg-[var(--background)] p-5">
              <h3 className="text-sm font-medium mb-1">Motion included</h3>
              <p className="text-sm text-[var(--muted)]">GSAP and Framer Motion variants with reduced-motion fallbacks.</p>
            </div>
            <div className="bg-[var(--background)] p-5">
              <h3 className="text-sm font-medium mb-1">Source you keep</h3>
              <p className="text-sm text-[var(--muted)]">No opaque package to fight when you need to change a curve.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-3">
          <h2 className="doc-h2">FAQ</h2>
          <div>
            <h3 className="text-sm font-medium mb-1">Why copy and paste instead of a package?</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              You keep full control over styling, behavior, and upgrades on your timeline.
            </p>
          </div>
        </section>
      </div>

      <aside className="hidden xl:block w-44 shrink-0 sticky top-24 self-start">
        <p className="text-xs font-medium text-[var(--muted)] mb-3">On this page</p>
        <ul className="space-y-2 border-l border-[var(--color-border)]">
          {tocItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li
                key={item.name}
                className={`pl-3 border-l -ml-px transition-colors ${
                  isActive ? "border-[var(--foreground)]" : "border-transparent"
                }`}
              >
                <Link
                  href={item.href}
                  className={`text-xs ${isActive ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}
