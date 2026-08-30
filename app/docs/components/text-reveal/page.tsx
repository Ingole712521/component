"use client";

import { CopyButton } from "../../_components/copy-button";


import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { TextReveal, TextRevealByChar } from "@/components/ui/text-reveal";

export default function TextRevealPage() {
    return (
      <div className="doc-stack">
      <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium"><span>Animations</span><ChevronRight className="w-4 h-4" /><span className="text-white">Text Reveal</span></div>
                                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Text Reveal</h1>
                                      <p className="text-zinc-400 max-w-xl">Animated text reveal with word-by-word or character-by-character animation.</p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code="npx @nehal712521/inprogress add text-reveal" />
                                          <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent-secondary">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">text-reveal</span></div>
                                      </div>
                                      <p className="text-sm text-zinc-500">Requires: <code className="text-accent-secondary bg-accent/10 px-1.5 py-0.5 rounded">framer-motion</code></p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 space-y-8">
                                          <div>
                                              <p className="text-sm text-zinc-500 mb-2">Word by word:</p>
                                              <TextReveal text="Hello World This is Amazing" className="text-2xl font-bold text-white" />
                                          </div>
                                          <div>
                                              <p className="text-sm text-zinc-500 mb-2">Character by character:</p>
                                              <TextRevealByChar text="Hello World" className="text-2xl font-bold text-white" />
                                          </div>
                                      </div>
                                  </div>
      </div>
    );
  }
