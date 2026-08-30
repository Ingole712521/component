"use client";

import { CopyButton } from "../../_components/copy-button";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import LoadingScreen from "@/components/ui/LoadingScreen";

const usageCode = `import LoadingScreen from "@/components/ui/LoadingScreen";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <LoadingScreen
          isOpen={open}
          onFinish={() => setOpen(false)}
          backdropColor="rgba(0,0,0,0.85)"
          fillColor="#22c55e"
          expandColor="#111827"
        />
      )}
    </>
  );
}`;

export default function LoadingScreenPage() {
    const [open, setOpen] = useState(false);

    return (
      <div className="doc-stack">
      {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium">
                        <span>Components</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Loading Screen</span>
                      </div>
                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Loading Screen</h1>
                      <p className="text-zinc-400 max-w-xl">
                        A highly customizable loading transition with progress bar, split/rotate/close animation, and a final expand screen overlay.
                      </p>
                    </div>

                    {/* Installation */}
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                        <CopyButton code="npx @nehal712521/inprogress add loading-screen" />
                        <div className="p-4 font-mono text-sm">
                          <span className="text-emerald-400">$ </span>
                          <span className="text-white">npx </span>
                          <span className="text-accent-secondary">@nehal712521/inprogress</span>
                          <span className="text-white"> add </span>
                          <span className="text-yellow-300">loading-screen</span>
                        </div>
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => setOpen(true)}
                            className="px-6 py-2 rounded-xl border border-white/10 hover:bg-white/5 transition-colors"
                          >
                            Run Loading Screen
                          </button>
                        </div>

                        {open && (
                          <LoadingScreen
                            isOpen={open}
                            onFinish={() => setOpen(false)}
                            backdropColor="rgba(0,0,0,0.85)"
                            panelColor="#111827"
                            fillColor="#22c55e"
                            expandColor="#111827"
                            progressIntervalMs={20}
                            progressStep={1}
                          />
                        )}
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
    );
  }

