"use client";

import { CopyButton } from "../../_components/copy-button";


import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export default function SpotlightCardPage() {
    return (
      <div className="doc-stack">
      <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium"><span>Animations</span><ChevronRight className="w-4 h-4" /><span className="text-white">Spotlight Card</span></div>
                                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Spotlight Card</h1>
                                      <p className="text-zinc-400 max-w-xl">A card with a spotlight effect that follows the mouse cursor.</p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code="npx @nehal712521/inprogress add spotlight-card" />
                                          <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent-secondary">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">spotlight-card</span></div>
                                      </div>
                                      <p className="text-sm text-zinc-500">Requires: <code className="text-accent-secondary bg-accent/10 px-1.5 py-0.5 rounded">framer-motion</code></p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex items-center justify-center">
                                          <SpotlightCard className="w-full max-w-md">
                                              <h3 className="text-xl font-bold text-white mb-2">Spotlight Card</h3>
                                              <p className="text-zinc-400">Move your mouse over this card to see the spotlight effect follow your cursor.</p>
                                          </SpotlightCard>
                                      </div>
                                  </div>
      </div>
    );
  }
