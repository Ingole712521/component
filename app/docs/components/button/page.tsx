"use client";

import { CopyButton } from "../../_components/copy-button";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function ButtonPage() {
    return (
      <div className="doc-stack">
      {/* Header */}
                                  <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium">
                                          <span>Components</span>
                                          <ChevronRight className="w-4 h-4" />
                                          <span className="text-white">Button</span>
                                      </div>
                                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Button</h1>
                                      <p className="text-zinc-400 max-w-xl">An animated button component with shimmer, glow, pulse, and ripple effects.</p>
                                  </div>

                                  {/* Installation */}
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code="npx @nehal712521/inprogress add button" />
                                          <div className="p-4 font-mono text-sm">
                                              <span className="text-emerald-400">$ </span>
                                              <span className="text-white">npx </span>
                                              <span className="text-accent-secondary">@nehal712521/inprogress</span>
                                              <span className="text-white"> add </span>
                                              <span className="text-yellow-300">button</span>
                                          </div>
                                      </div>
                                  </div>

                                  {/* Preview */}
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex flex-wrap items-center justify-center gap-4">
                                          <AnimatedButton variant="shimmer">Shimmer</AnimatedButton>
                                          <AnimatedButton variant="glow">Glow</AnimatedButton>
                                          <AnimatedButton variant="pulse">Pulse</AnimatedButton>
                                          <AnimatedButton variant="ripple">Ripple</AnimatedButton>
                                      </div>
                                  </div>

                                  {/* Usage */}
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Usage</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code={`import AnimatedButton from "@/components/ui/AnimatedButton";

      <AnimatedButton variant="shimmer">Click me</AnimatedButton>`} />
                                          <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                                              <code>{`import AnimatedButton from "@/components/ui/AnimatedButton";

      <AnimatedButton variant="shimmer">Click me</AnimatedButton>`}</code>
                                          </pre>
                                      </div>
                                  </div>
      </div>
    );
  }
