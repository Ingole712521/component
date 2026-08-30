"use client";

import { CopyButton } from "../../_components/copy-button";


import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const installCode = "npx @nehal712521/inprogress add scroll-reveal";

const usageCode = `import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-3xl mx-auto py-24 space-y-24">
        <ScrollReveal
          lines={[
            "Build beautiful sections that reveal as you scroll.",
            "Each line animates in with a soft upward motion.",
            "Powered by GSAP and IntersectionObserver.",
          ]}
          className="space-y-6"
          lineClassName="text-2xl md:text-3xl font-semibold text-zinc-50"
        />
      </section>
    </main>
  );
}`;

export default function ScrollRevealDocsPage() {
  const [previewActive, setPreviewActive] = useState(false);

  return (
    <div className="doc-stack">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium">
                  <span>Animations</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Scroll Reveal</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  Scroll Reveal
                </h1>
                <p className="text-zinc-400 max-w-xl">
                  Reveal copy blocks progressively as the user scrolls down the
                  page, using GSAP for smooth motion and IntersectionObserver
                  for efficient triggering.
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
                    <span className="text-accent-secondary">
                      @nehal712521/inprogress
                    </span>
                    <span className="text-white"> add </span>
                    <span className="text-yellow-300">scroll-reveal</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500">
                  Requires:{" "}
                  <code className="text-accent-secondary bg-accent/10 px-1.5 py-0.5 rounded">
                    gsap
                  </code>
                </p>
              </section>

              {/* Preview */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Preview</h2>
                <p className="text-sm text-zinc-400">
                  Scroll inside this panel; the lines of text will fade and lift
                  into place as they enter the viewport.
                </p>

                <div
                  className="rounded-2xl border border-white/8 bg-zinc-950 h-64 overflow-y-scroll custom-scrollbar relative"
                  id="preview-scroll-container"
                >
                  <div className="p-8 pb-48 space-y-32">
                    <ScrollReveal
                      lines={[""]}
                      className="space-y-6"
                      lineClassName="text-xl md:text-2xl font-semibold text-zinc-50"
                      active={true}
                      scrub={0.5}
                      stagger={0.15}
                    />

                    <div className="h-12" />

                    <ScrollReveal
                      lines={[
                        "You can stack multiple blocks to create narrative flows.",
                        "Perfect for marketing pages, feature breakdowns, and case studies.",
                        "Bring attention to key ideas right when they appear on screen.",
                      ]}
                      className="space-y-4"
                      lineClassName="text-sm md:text-base text-zinc-300"
                      yOffset={40}
                      duration={0.8}
                      active={true}
                      scrub={0.3}
                      stagger={0.1}
                    />
                  </div>
                </div>
              </section>

              {/* Usage */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Usage</h2>
                <p className="text-sm text-zinc-400">
                  Wrap your copy in <code>ScrollReveal</code> and pass an array
                  of lines. Each line is animated independently when it crosses
                  the viewport threshold.
                </p>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={usageCode} />
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{usageCode}</code>
                  </pre>
                </div>
              </section>
                </div>
  );
}

