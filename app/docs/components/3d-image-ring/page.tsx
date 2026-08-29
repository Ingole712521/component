"use client";

import DocsSidebar from "../../_components/docs-sidebar";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { ThreeDImageRing } from "@/components/ui/ThreeDImageRing";

type LocalSidebarItem = {
  name: string;
  href: string;
  badge?: string;
  active?: boolean;
};

type LocalSidebarSection = {
  title: string;
  items: LocalSidebarItem[];
};

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
          
                    <DocsSidebar />
{/* Sidebar */}
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

              {/* Installation */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Installation</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code="npx @nehal712521/inprogress add 3d-image-ring" />
                  <div className="p-4 font-mono text-sm">
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white">npx </span>
                    <span className="text-accent">@nehal712521/inprogress</span>
                    <span className="text-white"> add </span>
                    <span className="text-yellow-300">3d-image-ring</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500">
                  Requires:{" "}
                  <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                    framer-motion
                  </code>
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

