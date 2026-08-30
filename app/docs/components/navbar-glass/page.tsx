"use client";

import { CopyButton } from "../../_components/copy-button";


import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { GlassmorphismNavbar } from "@/components/ui/navbar-glass";

export default function GlassNavbarPage() {
    const installCode = "npx @nehal712521/inprogress add navbar-glass";
    const usageCode = `import { GlassmorphismNavbar } from "@/components/ui/navbar-glass";

export default function Page() {
    const navItems = [
        { label: "Home", href: "/" },
        {
            label: "Products",
            href: "#",
            children: [
                { label: "Software", href: "/products/software", description: "Our software solutions" },
                { label: "Hardware", href: "/products/hardware", description: "Hardware products" },
            ]
        },
        { label: "About", href: "/about" },
    ];

    return (
        <GlassmorphismNavbar
            items={navItems}
            ctaButton={{ label: "Get Started", href: "/signup" }}
        />
    );
}`;

    return (
      <div className="doc-stack">
      {/* Header */}
                                  <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium">
                                          <span>Navigation</span>
                                          <ChevronRight className="w-4 h-4" />
                                          <span className="text-white">Glassmorphism Navbar</span>
                                      </div>
                                      <h1 className="text-4xl font-bold text-white tracking-tight">Glassmorphism Navbar</h1>
                                      <p className="text-zinc-400 text-lg">Elegant glassmorphism navbar with mouse-following glow, dropdown menus, and smooth GSAP animations.</p>
                                  </div>

                                  {/* Installation */}
                                  <div className="space-y-4">
                                      <h2 className="text-xl font-semibold text-white">Installation</h2>
                                      <div className="relative bg-zinc-900 rounded-lg border border-zinc-800 p-4 font-mono text-sm text-zinc-300">
                                          <CopyButton code={installCode} />
                                          <span className="text-zinc-500">$</span> {installCode}
                                      </div>
                                  </div>

                                  {/* Preview */}
                                  <div className="space-y-4">
                                      <h2 className="text-xl font-semibold text-white">Preview</h2>
                                      <div className="relative bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden min-h-[300px]">
                                          <div className="p-4 pt-20">
                                              <p className="text-zinc-500 text-sm text-center">Hover over Products to see dropdown</p>
                                          </div>
                                          <GlassmorphismNavbar />
                                      </div>
                                  </div>

                                  {/* Usage */}
                                  <div className="space-y-4">
                                      <h2 className="text-xl font-semibold text-white">Usage</h2>
                                      <div className="relative bg-zinc-900 rounded-lg border border-zinc-800 p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
                                          <CopyButton code={usageCode} />
                                          <pre className="text-sm">{usageCode}</pre>
                                      </div>
                                  </div>

                                  {/* Props */}
                                  <div className="space-y-4">
                                      <h2 className="text-xl font-semibold text-white">Props</h2>
                                      <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden">
                                          <table className="w-full text-sm">
                                              <thead className="bg-zinc-800/50">
                                                  <tr>
                                                      <th className="px-4 py-3 text-left text-white font-medium">Prop</th>
                                                      <th className="px-4 py-3 text-left text-white font-medium">Type</th>
                                                      <th className="px-4 py-3 text-left text-white font-medium">Default</th>
                                                  </tr>
                                              </thead>
                                              <tbody className="divide-y divide-zinc-800">
                                                  <tr><td className="px-4 py-3 text-accent-secondary">items</td><td className="px-4 py-3 text-zinc-400">NavItem[]</td><td className="px-4 py-3 text-zinc-500">Default items</td></tr>
                                                  <tr><td className="px-4 py-3 text-accent-secondary">logo</td><td className="px-4 py-3 text-zinc-400">ReactNode</td><td className="px-4 py-3 text-zinc-500">&quot;Brand&quot; text</td></tr>
                                                  <tr><td className="px-4 py-3 text-accent-secondary">ctaButton</td><td className="px-4 py-3 text-zinc-400">{`{ label, href }`}</td><td className="px-4 py-3 text-zinc-500">undefined</td></tr>
                                                  <tr><td className="px-4 py-3 text-accent-secondary">className</td><td className="px-4 py-3 text-zinc-400">string</td><td className="px-4 py-3 text-zinc-500">&quot;&quot;</td></tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>

                                  {/* Features */}
                                  <div className="space-y-4">
                                      <h2 className="text-xl font-semibold text-white">Features</h2>
                                      <div className="grid sm:grid-cols-2 gap-4">
                                          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                              <h3 className="text-white font-medium mb-1">Glassmorphism</h3>
                                              <p className="text-zinc-500 text-sm">Frosted glass effect with backdrop blur</p>
                                          </div>
                                          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                              <h3 className="text-white font-medium mb-1">Mouse Glow</h3>
                                              <p className="text-zinc-500 text-sm">Glow effect follows mouse cursor</p>
                                          </div>
                                          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                              <h3 className="text-white font-medium mb-1">Dropdown Menus</h3>
                                              <p className="text-zinc-500 text-sm">Animated dropdown with descriptions</p>
                                          </div>
                                          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                              <h3 className="text-white font-medium mb-1">Mobile Responsive</h3>
                                              <p className="text-zinc-500 text-sm">Collapsible menu for mobile devices</p>
                                          </div>
                                      </div>
                                  </div>
      </div>
    );
  }
