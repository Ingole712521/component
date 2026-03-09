"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { ThreeDImageRing } from "@/components/ui/ThreeDImageRing";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/docs" },
      { name: "Installation", href: "/docs#installation" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Button", href: "/docs/components/button" },
      { name: "Ripple Button", href: "/docs/components/ripple-button" },
      { name: "Water Fill Button", href: "/docs/components/water-fill-button", badge: "NEW" },
      { name: "Orbit Logo Button", href: "/docs/components/orbit-logo-button", badge: "NEW" },
      { name: "Card", href: "/docs/components/card" },
      { name: "Input", href: "/docs/components/input" },
      { name: "Badge", href: "/docs/components/badge" },
      { name: "Timeline", href: "/docs/components/timeline" },
    ],
  },
  {
    title: "Animations",
    items: [
      { name: "Floating Dock", href: "/docs/components/floating-dock" },
      { name: "Text Reveal", href: "/docs/components/text-reveal" },
      { name: "Flip Card", href: "/docs/components/flip-card" },
      { name: "Gradient Text", href: "/docs/components/gradient-text" },
      { name: "Spotlight Card", href: "/docs/components/spotlight-card" },
      { name: "3D Image Ring", href: "/docs/components/3d-image-ring", active: true, badge: "NEW" },
    ],
  },
  {
    title: "GSAP",
    items: [
      { name: "GSAP Button", href: "/docs/components/gsap-button" },
      { name: "GSAP Card", href: "/docs/components/gsap-card" },
      { name: "GSAP Input", href: "/docs/components/gsap-input" },
      { name: "GSAP Badge", href: "/docs/components/gsap-badge" },
      { name: "GSAP Alert", href: "/docs/components/gsap-alert" },
      { name: "GSAP Modal", href: "/docs/components/gsap-modal" },
      { name: "Auth Card", href: "/docs/components/auth-card" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { name: "Floating Navbar", href: "/docs/components/navbar-floating" },
      { name: "Glass Navbar", href: "/docs/components/navbar-glass" },
    ],
  },
];

const logos = [
  "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb0b90c07c1?auto=format&fit=crop&w=400&q=80",
];

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
    >
      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
    </button>
  );
}

export default function ThreeDImageRingPage() {
  const usageCode = `import { ThreeDImageRing } from "@/components/ui/ThreeDImageRing";

const logos = [
  "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
];

export default function Example() {
  return (
    <div className="relative h-64 bg-black">
      <ThreeDImageRing images={logos} backgroundColor="transparent" />
    </div>
  );
}`;

  return (
    <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex gap-12 h-full pt-24">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 h-full overflow-y-auto pr-4 border-r border-white/5">
            <div className="space-y-8 pb-16">
              {sidebarItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-[10px] font-semibold text-white mb-4 tracking-widest uppercase opacity-50">
                    {section.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`group flex items-center justify-between px-3 py-1.5 rounded-lg text-sm transition-all ${
                            item.active
                              ? "bg-accent/10 text-accent font-medium border border-accent/20 shadow-[0_0_16px_rgba(14,165,233,0.1)]"
                              : "hover:text-white hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20 font-bold">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
            <div className="pb-24 space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <span>Animations</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">3D Image Ring</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">3D Image Ring</h1>
                <p className="text-zinc-400 max-w-xl">
                  A rotating ring of images that you can drag to spin, perfect for logos, avatars, or featured items.
                </p>
              </div>

              {/* Preview */}
              <div className="space-y-10">
                <h2 className="text-2xl font-bold text-white">Preview</h2>
                <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 h-72 relative overflow-hidden flex items-center justify-center">
                  <ThreeDImageRing images={logos} backgroundColor="transparent" />
                </div>
              </div>

              {/* Usage */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Usage</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={usageCode} />
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{usageCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

