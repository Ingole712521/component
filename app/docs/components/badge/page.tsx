"use client";

import { CopyButton } from "../../_components/copy-button";


import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
    return (
      <div className="doc-stack">
      <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium"><span>Components</span><ChevronRight className="w-4 h-4" /><span className="text-white">Badge</span></div>
                                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Badge</h1>
                                      <p className="text-zinc-400 max-w-xl">A badge component with multiple variants.</p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code="npx @nehal712521/inprogress add badge" />
                                          <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent-secondary">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">badge</span></div>
                                      </div>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex flex-wrap items-center justify-center gap-4">
                                          <Badge>Default</Badge>
                                          <Badge variant="secondary">Secondary</Badge>
                                          <Badge variant="outline">Outline</Badge>
                                          <Badge variant="destructive">Destructive</Badge>
                                      </div>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Usage</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code={`import { Badge } from "@/components/ui/badge";

      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>`} />
                                          <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto"><code>{`import { Badge } from "@/components/ui/badge";

      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>`}</code></pre>
                                      </div>
                                  </div>
      </div>
    );
  }
