"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
      <span className="text-white/40">$</span> {code}
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
        <header id="introduction" className="space-y-4 pb-6 border-b border-white/8">
          <p className="section-label">Getting started</p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Introduction</h1>
          <p className="text-[var(--muted)] max-w-2xl">
            Welcome to Animioui UI — copy-paste React components for Next.js. Accessible,
            customizable, and fully yours.
          </p>
          <p className="text-[var(--muted)] max-w-2xl">
            This is not a traditional component library. You copy the source into your project and
            own every line.
          </p>
        </header>

        <section id="installation" className="space-y-4">
          <h2 className="doc-h2">Installation</h2>
          <p className="text-sm text-[var(--muted)]">
            Initialize your project, then add components with the CLI.
          </p>
          <CodeBlock code="npx @nehal712521/inprogress init" />
          <CodeBlock code="npx @nehal712521/inprogress add button" />

          <p className="text-sm text-[var(--muted)] pt-2">Available components:</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              "button",
              "card",
              "input",
              "badge",
              "loading-screen",
              "smart-wrap-text",
              "floating-dock",
              "text-reveal",
              "flip-card",
              "gradient-text",
              "spotlight-card",
              "timeline",
            ].map((comp) => (
              <CodeBlock key={comp} code={`npx @nehal712521/inprogress add ${comp}`} />
            ))}
          </div>
        </section>

        <section id="features" className="space-y-4">
          <h2 className="doc-h2">Features</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10">
            <div className="bg-[var(--background)] p-5">
              <h3 className="text-sm font-medium text-white mb-1">Beautiful by default</h3>
              <p className="text-xs text-[var(--muted)]">Thoughtful motion and clean defaults.</p>
            </div>
            <div className="bg-[var(--background)] p-5">
              <h3 className="text-sm font-medium text-white mb-1">Copy and paste</h3>
              <p className="text-xs text-[var(--muted)]">No opaque npm dependency to fight with.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-3">
          <h2 className="doc-h2">FAQ</h2>
          <div>
            <h3 className="text-sm font-medium text-white mb-1">
              Why copy/paste instead of a package?
            </h3>
            <p className="text-sm text-[var(--muted)]">
              You keep full control over styling, behavior, and upgrades on your timeline.
            </p>
          </div>
        </section>
      </div>

      <aside className="hidden xl:block w-44 shrink-0 sticky top-24 self-start">
        <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider mb-3">
          On this page
        </p>
        <ul className="space-y-2 border-l border-white/8">
          {tocItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li
                key={item.name}
                className={`pl-3 border-l -ml-px transition-colors ${
                  isActive ? "border-white text-white" : "border-transparent"
                }`}
              >
                <Link
                  href={item.href}
                  className={`text-xs ${isActive ? "text-white" : "text-[var(--muted)] hover:text-white"}`}
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
