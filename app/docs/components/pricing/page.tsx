"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check, ExternalLink } from "lucide-react";
import Link from "next/link";
import Pricing from "@/components/sections/Pricing";
import DocsSidebar from "../../DocsSidebar";

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

const installCode = "npx @nehal712521/inprogress add pricing";

const usageCode = `import Pricing from "@/components/sections/Pricing";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Pricing />
    </main>
  );
}`;

export default function PricingDocsPage() {
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
                  <span className="text-white">Pricing</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  Pricing
                </h1>
                <p className="text-zinc-400 max-w-xl">
                  A beautiful pricing section with three plans, gradients, and a
                  built-in live preview powered by your deployed component.
                </p>
              </div>

              {/* Installation */}
              {/* <section className="space-y-4">
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
                    <span className="text-yellow-300">pricing</span>
                  </div>
                </div>
              </section> */}

              {/* Live preview (external + embedded) */}
              <section className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-white">
                    Live Preview
                  </h2>
                  <Link
                    href="https://pricing-component-one-ivory.vercel.app/"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-accent hover:bg-accent/20 hover:border-accent transition-colors"
                  >
                    Open live preview
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <p className="text-sm text-zinc-400">
                  This page includes an embedded iframe of your deployed
                  component at{" "}
                  <code className="px-1.5 py-0.5 rounded bg-zinc-900 text-[11px] border border-zinc-800">
                    pricing-component-one-ivory.vercel.app
                  </code>{" "}
                  so you can see the real thing in context.
                </p>

                <div className="rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl overflow-hidden">
                  <div className="border-b border-white/5 px-4 sm:px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-zinc-500 truncate">
                      https://pricing-component-one-ivory.vercel.app/
                    </p>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      Live Preview
                    </span>
                  </div>
                  <div className="aspect-[16/9] bg-black">
                    <iframe
                      src="https://pricing-component-one-ivory.vercel.app/"
                      title="Pricing component live preview"
                      className="h-full w-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              </section>

              {/* Preview in project */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Preview in your project
                </h2>
                <p className="text-sm text-zinc-400">
                  The component below is rendered directly from{" "}
                  <code className="px-1.5 py-0.5 rounded bg-zinc-900 text-[11px] border border-zinc-800">
                    components/sections/Pricing.tsx
                  </code>{" "}
                  so you can see what it looks like inside your design system.
                </p>

                <div className="rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <div className="max-h-[520px] overflow-auto">
                    <Pricing />
                  </div>
                </div>
              </section>

              {/* Usage */}
              {/* <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Usage</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={usageCode} />
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{usageCode}</code>
                  </pre>
                </div>
              </section> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

