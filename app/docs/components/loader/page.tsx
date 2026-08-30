"use client";

import { CopyButton } from "../../_components/copy-button";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Loader from "@/components/ui/Loader";

export default function LoaderPage() {
    return (
      <div className="doc-stack">
      {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium">
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
                          <span className="text-accent-secondary">@nehal712521/inprogress</span>
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
    );
  }

