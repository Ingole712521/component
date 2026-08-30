"use client";

import { CopyButton } from "../../_components/copy-button";


import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { GSAPBadge } from "@/components/ui/gsap-badge";

export default function GSAPBadgePage() {
    return (
      <div className="doc-stack">
      <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium"><span>GSAP</span><ChevronRight className="w-4 h-4" /><span className="text-white">GSAP Badge</span></div>
                                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">GSAP Badge</h1>
                                      <p className="text-zinc-400 max-w-xl">Animated badge with shimmer, pulse glow, hover scale, and bounce entry animations using GSAP.</p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code="npx @nehal712521/inprogress add gsap-badge" />
                                          <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent-secondary">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">gsap-badge</span></div>
                                      </div>
                                      <p className="text-sm text-zinc-500">Requires: <code className="text-accent-secondary bg-accent/10 px-1.5 py-0.5 rounded">gsap</code></p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex flex-wrap items-center justify-center gap-4">
                                          <GSAPBadge variant="default">Default</GSAPBadge>
                                          <GSAPBadge variant="success" pulse>Success</GSAPBadge>
                                          <GSAPBadge variant="warning">Warning</GSAPBadge>
                                          <GSAPBadge variant="error" pulse>Error</GSAPBadge>
                                          <GSAPBadge variant="gradient">Gradient</GSAPBadge>
                                          <GSAPBadge variant="shimmer">Shimmer</GSAPBadge>
                                      </div>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Usage</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code={`import { GSAPBadge } from "@/components/ui/gsap-badge";

      <GSAPBadge variant="success" pulse>Success</GSAPBadge>
      <GSAPBadge variant="shimmer">New</GSAPBadge>`} />
                                          <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto"><code>{`import { GSAPBadge } from "@/components/ui/gsap-badge";

      <GSAPBadge variant="success" pulse>Success</GSAPBadge>
      <GSAPBadge variant="shimmer">New</GSAPBadge>`}</code></pre>
                                      </div>
                                  </div>
      </div>
    );
  }
