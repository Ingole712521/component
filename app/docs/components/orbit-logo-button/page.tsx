"use client";

import { CopyButton } from "../../_components/copy-button";

import { useState, useEffect } from "react";
import { ChevronRight, Users } from "lucide-react";
import Link from "next/link";
import { OrbitLogoButton } from "@/components/ui/OrbitLogoButton";

const tocItems = [
  { name: "Orbit Logo Button", href: "#orbit-logo-button" },
  { name: "Installation", href: "#installation" },
  { name: "Usage", href: "#usage" },
];

const usageCode = `import { OrbitLogoButton } from "@/components/ui/OrbitLogoButton";

export default function Example() {
  return (
    <div className="flex gap-4 flex-wrap">
      <OrbitLogoButton>Pull me in</OrbitLogoButton>
      <OrbitLogoButton size="lg">Join the waitlist</OrbitLogoButton>
    </div>
  );
}`;

const usageCustomItemsCode = `import Image from "next/image";
import { OrbitLogoButton } from "@/components/ui/OrbitLogoButton";

const avatars = [
  "/avatars/user-1.png",
  "/avatars/user-2.png",
  "/avatars/user-3.png",
  "/avatars/user-4.png",
];

export default function Example() {
  return (
    <OrbitLogoButton
      items={avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={20}
          height={20}
          className="w-full h-full object-cover"
        />
      ))}
      bubbleClassName="bg-transparent"
    >
      Join the community
    </OrbitLogoButton>
  );
}`;

const installCodeCli = "npx @nehal712521/inprogress add orbit-logo-button";
const installCodePnpm = "pnpm dlx @nehal712521/inprogress add orbit-logo-button";
const installCodeBun = "bunx @nehal712521/inprogress add orbit-logo-button";

export default function OrbitLogoButtonDocs() {
  const [activeSection, setActiveSection] = useState("orbit-logo-button");
  const [installTab, setInstallTab] = useState<"cli" | "manual">("cli");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    tocItems.forEach(({ href }) => {
      const el = document.getElementById(href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex gap-12">
      <div className="flex-1 min-w-0 doc-stack pb-8">
              {/* Header */}
              <section id="orbit-logo-button" className="space-y-4">
                <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium">
                  <span>Components</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Orbit Logo Button</span>
                </div>

                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Orbit Logo Button</h1>
                    <p className="text-zinc-400 max-w-xl leading-relaxed">
                      A CTA button surrounded by bubbles that{" "}
                      <span className="text-white font-medium">fly into the button on hover</span> — perfect for showing
                      avatars, brand logos, or social proof.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center">
                      <Users className="w-4 h-4 text-accent-secondary" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Framer Motion
                    </span>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />
              </section>

              {/* Installation */}
              <section id="installation" className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-white tracking-tight">Installation</h2>
                  <p className="text-zinc-500 text-sm">
                    Use the CLI for the fastest setup, or copy the file manually.
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/5 w-fit">
                  {(["cli", "manual"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setInstallTab(t)}
                      className={`px-4 py-1.5 rounded-lg text-sm font-medium uppercase tracking-wide transition-all ${
                        installTab === t ? "bg-accent text-white shadow-lg shadow-accent/20" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {t === "cli" ? "CLI" : "Manual"}
                    </button>
                  ))}
                </div>

                {/* CLI tab */}
                {installTab === "cli" && (
                  <div className="space-y-5">
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Run this command in your project root. The CLI will create{" "}
                      <code className="text-accent-secondary font-mono text-xs bg-accent/10 px-1.5 py-0.5 rounded">
                        components/ui/OrbitLogoButton.tsx
                      </code>{" "}
                      and write the file automatically.
                    </p>

                    <div className="rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                        <span className="w-3 h-3 rounded-full bg-red-500/70" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                        <span className="ml-3 text-xs text-zinc-500 font-mono">Terminal</span>
                      </div>
                      <div className="relative p-4 font-mono text-sm">
                        <CopyButton code={installCodeCli} />
                        <p className="pr-10">
                          <span className="text-emerald-400 select-none">$ </span>
                          <span className="text-white">npx </span>
                          <span className="text-accent-secondary">@nehal712521/inprogress</span>
                          <span className="text-white"> add </span>
                          <span className="text-yellow-300">orbit-logo-button</span>
                        </p>
                        <p className="text-zinc-600 text-xs mt-3 pl-2">✔ Fetching from registry…</p>
                        <p className="text-zinc-600 text-xs pl-2">
                          ✔ Created{" "}
                          <span className="text-emerald-500">components/ui/OrbitLogoButton.tsx</span>
                        </p>
                        <p className="text-zinc-600 text-xs pl-2">✔ Done!</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3">
                      {[
                        { label: "pnpm", cmd: installCodePnpm },
                        { label: "npm", cmd: installCodeCli },
                        { label: "bun", cmd: installCodeBun },
                      ].map(({ label, cmd }) => (
                        <div
                          key={label}
                          className="relative rounded-xl bg-white/[0.02] border border-white/5 px-4 py-3 font-mono"
                        >
                          <span className="text-zinc-600 text-[10px] uppercase tracking-widest block mb-1.5">
                            {label}
                          </span>
                          <CopyButton code={cmd} />
                          <span className="text-zinc-400 text-xs pr-8 block truncate">{cmd}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Manual tab */}
                {installTab === "manual" && (
                  <div className="space-y-4">
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      <span className="text-white font-semibold">Step 1.</span>{" "}
                      Copy{" "}
                      <code className="text-accent-secondary font-mono text-xs bg-accent/10 px-1.5 py-0.5 rounded">
                        OrbitLogoButton.tsx
                      </code>{" "}
                      into your project inside{" "}
                      <code className="text-accent-secondary font-mono text-xs bg-accent/10 px-1.5 py-0.5 rounded">
                        components/ui/
                      </code>
                      .
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      <span className="text-white font-semibold">Step 2.</span> Make sure{" "}
                      <code className="text-accent-secondary font-mono text-xs bg-accent/10 px-1.5 py-0.5 rounded">
                        framer-motion
                      </code>{" "}
                      is installed.
                    </p>
                    <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                      <CopyButton code="npm install framer-motion" />
                      <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                        <code>npm install framer-motion</code>
                      </pre>
                    </div>
                  </div>
                )}
              </section>

              {/* Preview */}
              <section id="usage" className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-white tracking-tight">Preview</h2>
                  <p className="text-zinc-500 text-sm">
                    Hover the button to pull all the bubbles into the center.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex flex-wrap items-center justify-center gap-6 min-h-[220px]">
                  <OrbitLogoButton>Pull me in</OrbitLogoButton>
                  <OrbitLogoButton size="lg">Join the waitlist</OrbitLogoButton>
                </div>
              </section>

              {/* Usage code */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">Usage</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={usageCode} />
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{usageCode}</code>
                  </pre>
                </div>
              </section>

              {/* Custom avatars / logos */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">Custom avatars or logos</h2>
                <p className="text-zinc-500 text-sm">
                  Pass React nodes to the <code className="text-accent-secondary font-mono text-xs bg-accent/10 px-1.5 py-0.5 rounded">items</code> prop
                  to render your own avatars, logos, or icons inside each bubble.
                </p>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={usageCustomItemsCode} />
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{usageCustomItemsCode}</code>
                  </pre>
                </div>
              </section>
      </div>

      <aside className="hidden xl:block w-44 shrink-0 sticky top-24 self-start">
        <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider mb-3">
          On this page
        </p>
        <ul className="space-y-2 border-l border-white/8">
          {tocItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li
                key={item.name}
                className={`pl-3 border-l -ml-px ${isActive ? "border-white" : "border-transparent"}`}
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

