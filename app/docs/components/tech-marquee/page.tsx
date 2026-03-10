"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import DocsSidebar from "../../DocsSidebar";
import { TechMarquee } from "@/components/ui/tech-marquee";

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
      {copied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4 text-zinc-400" />
      )}
    </button>
  );
}

const installCode = "npx @nehal712521/inprogress add tech-marquee";

const usageCode = `import { TechMarquee, type TechMarqueeItem } from "@/components/ui/tech-marquee";

const customItems: TechMarqueeItem[] = [
  { name: "React", icon: <span>⚛️</span>, color: "text-sky-400", glow: "group-hover:shadow-sky-500/25" },
  // ...more items
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <TechMarquee 
        items={customItems}
        title="Our Tech Stack"
        subtitle="Fully customizable items, speed, and rows"
        topDuration={20}
        bottomDuration={28}
        rows={2}
      />
    </main>
  );
}`;

export default function TechMarqueeDocsPage() {
  return (
    <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex gap-12 h-full pt-24">
          {/* Sidebar */}
          <DocsSidebar />

          {/* Main Content */}
          <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
            <div className="pb-24 space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <span>Components</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Tech Marquee</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  Tech Marquee
                </h1>
                <p className="text-zinc-400 max-w-xl">
                  A looping marquee of tech cards that glide horizontally with a
                  soft skew and hover glow, perfect for showcasing stacks or
                  tools you work with.
                </p>
              </div>

              {/* Installation */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Installation</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={installCode} />
                  <div className="p-4 font-mono text-sm">
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white">npx </span>
                    <span className="text-accent">
                      @nehal712521/inprogress
                    </span>
                    <span className="text-white"> add </span>
                    <span className="text-yellow-300">tech-marquee</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500">
                  Requires:{" "}
                  <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                    react-icons
                  </code>
                </p>
              </section>

              {/* Preview */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Preview</h2>
                <p className="text-sm text-zinc-400">
                  The marquee loops infinitely in two directions, with glowing
                  hover states and skewed rows for a subtle parallax feel.
                </p>

                <div className="rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <TechMarquee 
                    className="py-12"
                    title="We Work On"
                    subtitle="Customize items, speed, and layout"
                    topDuration={26}
                    bottomDuration={34}
                    rows={2}
                  />
                </div>
              </section>

              {/* Usage */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Usage</h2>
                <p className="text-sm text-zinc-400">
                  Drop the component into any section. You can also pass a
                  custom <code>items</code> array if you want to change the tech
                  cards.
                </p>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={usageCode} />
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{usageCode}</code>
                  </pre>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

