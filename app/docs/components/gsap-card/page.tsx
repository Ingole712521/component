"use client";

import { CopyButton } from "../../_components/copy-button";


import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { GSAPCard, GSAPCardHeader, GSAPCardTitle, GSAPCardContent } from "@/components/ui/gsap-card";

export default function GSAPCardPage() {
    return (
      <div className="doc-stack">
      <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium"><span>GSAP</span><ChevronRight className="w-4 h-4" /><span className="text-white">GSAP Card</span></div>
                                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">GSAP Card</h1>
                                      <p className="text-zinc-400 max-w-xl">3D tilt card with mouse-following glow effect and shimmer border animations using GSAP.</p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code="npx @nehal712521/inprogress add gsap-card" />
                                          <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent-secondary">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">gsap-card</span></div>
                                      </div>
                                      <p className="text-sm text-zinc-500">Requires: <code className="text-accent-secondary bg-accent/10 px-1.5 py-0.5 rounded">gsap</code></p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex items-center justify-center">
                                          <GSAPCard className="w-full max-w-md">
                                              <GSAPCardHeader>
                                                  <GSAPCardTitle>3D Tilt Card</GSAPCardTitle>
                                              </GSAPCardHeader>
                                              <GSAPCardContent>
                                                  <p className="text-zinc-400">Move your mouse over this card to see the 3D tilt effect and following glow!</p>
                                              </GSAPCardContent>
                                          </GSAPCard>
                                      </div>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Usage</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code={`import { GSAPCard, GSAPCardHeader, GSAPCardTitle, GSAPCardContent } from "@/components/ui/gsap-card";

      <GSAPCard glowColor="#0ea5e9">
        <GSAPCardHeader>
          <GSAPCardTitle>Card Title</GSAPCardTitle>
        </GSAPCardHeader>
        <GSAPCardContent>Content here</GSAPCardContent>
      </GSAPCard>`} />
                                          <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto"><code>{`import { GSAPCard, GSAPCardHeader, GSAPCardTitle, GSAPCardContent } from "@/components/ui/gsap-card";

      <GSAPCard glowColor="#0ea5e9">
        <GSAPCardHeader>
          <GSAPCardTitle>Card Title</GSAPCardTitle>
        </GSAPCardHeader>
        <GSAPCardContent>Content here</GSAPCardContent>
      </GSAPCard>`}</code></pre>
                                      </div>
                                  </div>
      </div>
    );
  }
