"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import DocsSidebar from "../../_components/docs-sidebar";
import {
  SvgPathPageTransition,
  SVG_PATH_PAGE_TRANSITION_INSPIRATION,
} from "@/components/ui/svg-path-page-transition";

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
      className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all z-20"
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4 text-zinc-400" />
      )}
    </button>
  );
}

const usageCode = `import { SvgPathPageTransition } from "@/components/ui/svg-path-page-transition";

export default function Page() {
  return (
    <SvgPathPageTransition
      title="My App"
      openLabel="Open"
      backLabel="Back"
    />
  );
}`;

export default function SvgPathPageTransitionPage() {
  return (
    <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex gap-12 h-full pt-24">
          <DocsSidebar />

          <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
            <div className="pb-24 space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <span>Animations</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">SVG Path Page Transition</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  SVG Path Page Transition
                </h1>
                <p className="text-zinc-400 max-w-xl">
                  A vertical page transition powered by GSAP and an animated SVG path.
                  Click Open to sweep into the second view, then Back to return.
                </p>
                <p className="text-sm text-zinc-500 max-w-xl">
                  Inspired by{" "}
                  <a
                    href={SVG_PATH_PAGE_TRANSITION_INSPIRATION.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {SVG_PATH_PAGE_TRANSITION_INSPIRATION.name}
                  </a>{" "}
                  from the{" "}
                  <a
                    href="https://github.com/codrops/codrops-sketches"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white hover:underline"
                  >
                    Codrops Sketches
                  </a>{" "}
                  collection.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Credits</h2>
                <div className="rounded-2xl border border-white/8 bg-zinc-950/80 p-6 space-y-3 text-sm text-zinc-400">
                  <p>
                    This component is a TypeScript/React port of the original demo,
                    adapted for use in this library while keeping the same GSAP path
                    animation and two-view interaction.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-zinc-500">
                    <li>
                      <span className="text-zinc-300">Original sketch:</span>{" "}
                      <a
                        href={SVG_PATH_PAGE_TRANSITION_INSPIRATION.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        021-svg-path-page-transition-vertical
                      </a>
                    </li>
                    <li>
                      <span className="text-zinc-300">Repository:</span>{" "}
                      <a
                        href="https://github.com/codrops/codrops-sketches"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        codrops/codrops-sketches
                      </a>
                    </li>
                    <li>
                      <span className="text-zinc-300">Archive:</span>{" "}
                      <a
                        href={SVG_PATH_PAGE_TRANSITION_INSPIRATION.archiveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Codrops Sketches
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Installation</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code="npm install gsap" />
                  <div className="p-4 font-mono text-sm">
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white">npm install gsap</span>
                  </div>
                </div>
                
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Preview</h2>
                <div className="rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden h-[min(70vh,560px)]">
                  <SvgPathPageTransition />
                </div>
              </div>

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
