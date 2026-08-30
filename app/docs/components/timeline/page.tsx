"use client";

import { CopyButton } from "../../_components/copy-button";


import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";

const timelineItems = [
    { title: "Project Started", description: "Initial planning and setup", date: "Jan 2024" },
    { title: "Design Phase", description: "UI/UX design completed", date: "Feb 2024" },
    { title: "Development", description: "Building the application", date: "Mar 2024" },
    { title: "Launch", description: "Product released to public", date: "Apr 2024" },
];

export default function TimelinePage() {
    return (
      <div className="doc-stack">
      <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium"><span>Components</span><ChevronRight className="w-4 h-4" /><span className="text-white">Timeline</span></div>
                                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Timeline</h1>
                                      <p className="text-zinc-400 max-w-xl">A vertical timeline component with animations.</p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code="npx @nehal712521/inprogress add timeline" />
                                          <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent-secondary">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">timeline</span></div>
                                      </div>
                                      <p className="text-sm text-zinc-500">Requires: <code className="text-accent-secondary bg-accent/10 px-1.5 py-0.5 rounded">framer-motion</code></p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8">
                                          <Timeline items={timelineItems} />
                                      </div>
                                  </div>
      </div>
    );
  }
