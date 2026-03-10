"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import DocsSidebar from "../../DocsSidebar";
import { MouseTracker } from "@/components/ui/mouse-tracker";

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

const installCode = "npx @nehal712521/inprogress add mouse-tracker";

const usageCode = `import { MouseTracker } from "@/components/ui/mouse-tracker";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MouseTracker
        size={22}
        color="rgba(56, 189, 248, 1)"
        blur={36}
        duration={0.3}
        ease="power3.out"
        className="h-screen"
      >
        <div className="flex h-full items-center justify-center">
          <h1 className="text-3xl font-semibold text-zinc-100">
            Follow the cursor
          </h1>
        </div>
      </MouseTracker>
    </main>
  );
}`;

export default function MouseTrackerDocsPage() {
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
                  <span>GSAP</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Mouse Tracker</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  Mouse Tracker
                </h1>
                <p className="text-zinc-400 max-w-xl">
                  A smooth GSAP-powered cursor follower that renders a glowing
                  ball tracking your mouse, fully customizable via props.
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
                    <span className="text-yellow-300">mouse-tracker</span>
                  </div>
                </div>
              </section>

              {/* Preview */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Preview</h2>
                <p className="text-sm text-zinc-400">
                  Move your cursor anywhere inside the preview card to see the
                  tracker follow with a smooth GSAP animation.
                </p>
                <MouseTracker
                  size={18}
                  color="rgb(255, 255, 255)"
                  blur={0}
                  duration={0.3}
                  ease="power3.out"
                  mixBlendMode="normal"
                  className="block rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8"
                >
                  <div className="relative h-72 rounded-2xl bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-fuchsia-500/10 border border-white/10 overflow-hidden">
                    <div className="flex h-full w-full items-center justify-center pointer-events-none">
                      <div className="text-center space-y-2">
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-400/80">
                          Mouse Tracker
                        </p>
                        <p className="text-lg md:text-xl font-medium text-zinc-50">
                          Hover here and follow the glow
                        </p>
                        <p className="text-xs text-zinc-400">
                          Fully customizable size, color, blur, and easing.
                        </p>
                      </div>
                    </div>
                  </div>
                </MouseTracker>
              </section>

              {/* Usage */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Usage</h2>
                <p className="text-sm text-zinc-400">
                  The tracker is rendered above your content and listens to{" "}
                  <code className="px-1.5 py-0.5 rounded bg-zinc-900 text-[11px] border border-zinc-800">
                    window.addEventListener("mousemove")
                  </code>{" "}
                  under the hood. You can control size, color, blur, easing and
                  more with props.
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

