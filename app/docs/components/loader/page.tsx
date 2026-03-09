"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Loader from "@/components/ui/Loader";
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

export default function LoaderPage() {
  return (
    <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex gap-12 h-full pt-24">
          <DocsSidebar />

          <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
            <div className="pb-24 space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <span>Components</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Loader</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  Loader
                </h1>
                <p className="text-zinc-400 max-w-xl">
                  A minimalist equalizer-style loader with animated bars, built
                  using CSS-only animations.
                </p>
              </div>

              {/* Installation */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Installation</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code="npx @nehal712521/inprogress add loader" />
                  <div className="p-4 font-mono text-sm">
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white">npx </span>
                    <span className="text-accent">@nehal712521/inprogress</span>
                    <span className="text-white"> add </span>
                    <span className="text-yellow-300">loader</span>
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Preview</h2>
                <div className="rounded-2xl border border-white/8 bg-[#111827] p-8 flex items-center justify-center">
                  <Loader />
                </div>
              </div>

              {/* Usage */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Usage</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton
                    code={`import Loader from "@/components/ui/Loader";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827]">
      <Loader />
    </div>
  );
}`}
                  />
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{`import Loader from "@/components/ui/Loader";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827]">
      <Loader />
    </div>
  );
}`}</code>
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

