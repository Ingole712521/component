"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import DocsSidebar from "../../DocsSidebar";
import gsap from "gsap";
// @ts-ignore
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

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

gsap.registerPlugin(DrawSVGPlugin);

function TransitionPreview() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    if (!overlayRef.current || !pathRef.current) return;

    const tl = gsap.timeline({
      onStart: () => setPlaying(true),
      onComplete: () => setPlaying(false),
    });

    tl.set(pathRef.current, { drawSVG: "0%", strokeWidth: 2 })
      .to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
      })
      .to(
        pathRef.current,
        {
          drawSVG: "100%",
          strokeWidth: 260,
          duration: 1.2,
          ease: "power2.out",
        },
        0
      )
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      })
      .set(pathRef.current, { drawSVG: "0%", strokeWidth: 2 });
  };

  useEffect(() => {
    if (pathRef.current) {
      gsap.set(pathRef.current, {
        drawSVG: "0%",
        strokeWidth: 2,
      });
    }
    play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full max-w-2xl">
      <div className="relative rounded-3xl border border-white/10 bg-zinc-950/80 overflow-hidden h-72 flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase">
            Route Transition
          </span>
          <p className="text-lg md:text-xl font-semibold text-white">
            Smooth SVG sweep between pages.
          </p>
          <p className="text-xs text-zinc-500 max-w-sm">
            In your app this runs automatically on route changes. Here you can replay the effect
            inside this preview card.
          </p>
        </div>

        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0"
        >
          <svg width="100%" height="100%" viewBox="0 0 1316 664" fill="none">
            <path
              ref={pathRef}
              d="M13.4746 291.27C13.4746 291.27 100.646 -18.6724 255.617 16.8418C410.588 52.356 61.0296 431.197 233.017 546.326C431.659 679.299 444.494 21.0125 652.73 100.784C860.967 180.556 468.663 430.709 617.216 546.326C765.769 661.944 819.097 48.2722 988.501 120.156C1174.21 198.957 809.424 543.841 988.501 636.726C1189.37 740.915 1301.67 149.213 1301.67 149.213"
              stroke="#82A0FF"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={play}
          disabled={playing}
          className="text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-300 transition-colors"
        >
          {playing ? "Playing..." : "Replay animation"}
        </button>
      </div>
    </div>
  );
}

export default function PageTransitionPage() {
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
                  <span>Animations</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Page Transition</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  Page Transition
                </h1>
                <p className="text-zinc-400 max-w-xl">
                  A GSAP-powered SVG sweep animation that runs between route changes using{" "}
                  <span className="font-mono text-zinc-200">next-transition-router</span>.
                </p>
              </div>

              {/* Installation */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Installation</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code="npx @nehal712521/inprogress add page-transition" />
                  <div className="p-4 font-mono text-sm">
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white">npx </span>
                    <span className="text-accent">@nehal712521/inprogress</span>
                    <span className="text-white"> add </span>
                    <span className="text-yellow-300">page-transition</span>
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Preview</h2>
                <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex items-center justify-center">
                  <TransitionPreview />
                </div>
              </div>

              {/* Usage */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Usage</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton
                    code={`// app/layout.tsx
import type { ReactNode } from "react";
import TransitionWrapper from "@/components/ui/TransitionWrapper";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TransitionWrapper>{children}</TransitionWrapper>
      </body>
    </html>
  );
}

// Make sure you have these dependencies installed:
// npm install gsap next-transition-router
`}
                  />
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{`// app/layout.tsx
import type { ReactNode } from "react";
import TransitionWrapper from "@/components/ui/TransitionWrapper";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TransitionWrapper>{children}</TransitionWrapper>
      </body>
    </html>
  );
}

// Make sure you have these dependencies installed:
// npm install gsap next-transition-router
`}</code>
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

