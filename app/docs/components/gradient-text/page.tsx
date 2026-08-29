"use client";

import DocsSidebar from "../../_components/docs-sidebar";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { GradientText, ShimmerText } from "@/components/ui/gradient-text";

function CopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);
    const copy = async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
    return (<button onClick={copy} className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">{copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}</button>);
}

export default function GradientTextPage() {
    return (
        <div className="h-screen overflow-hidden bg-[var(--background)] text-[var(--muted)] font-sans">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex gap-12 h-full pt-24">
                    
                    <DocsSidebar />
<main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
                        <div className="pb-24 space-y-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium"><span>Animations</span><ChevronRight className="w-4 h-4" /><span className="text-white">Gradient Text</span></div>
                                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Gradient Text</h1>
                                <p className="text-zinc-400 max-w-xl">Animated gradient text with shimmer effects.</p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white">Installation</h2>
                                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                    <CopyButton code="npx @nehal712521/inprogress add gradient-text" />
                                    <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent-secondary">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">gradient-text</span></div>
                                </div>
                                <p className="text-sm text-zinc-500">Requires: <code className="text-accent-secondary bg-accent/10 px-1.5 py-0.5 rounded">framer-motion</code></p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white">Preview</h2>
                                <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 space-y-8">
                                    <div>
                                        <p className="text-sm text-zinc-500 mb-2">Animated Gradient:</p>
                                        <GradientText className="text-4xl font-bold">Gradient Text</GradientText>
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 mb-2">Shimmer Effect:</p>
                                        <ShimmerText className="text-4xl font-bold">Shimmer Text</ShimmerText>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
