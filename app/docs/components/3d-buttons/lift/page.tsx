"use client";

import DocsSidebar from "../../../_components/docs-sidebar";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Motion3DButton } from "@/components/3d-buttons";

function CopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);
    const copy = async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
    return (<button onClick={copy} className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all z-20">{copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}</button>);
}

export default function Lift3DButtonPage() {
    const installCode = `npx @nehal712521/inprogress add lift-3d-button`;
    const usageCode = `import { Motion3DButton } from "@/components/3d-buttons";

<Motion3DButton variant="lift" color="blue">
  Click Me
</Motion3DButton>`;

    return (
        <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex gap-12 h-full pt-24">
                    
                    <DocsSidebar />
{/* Sidebar */}
                                        {/* Main Content */}
                    <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
                        <div className="pb-24 space-y-10">
                            {/* Header */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                                    <Link href="/docs/components/3d-buttons" className="hover:text-white">3D Buttons</Link>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-white">Lift 3D Button</span>
                                </div>
                                <h1 className="text-4xl font-bold text-white tracking-tight">Lift 3D Button</h1>
                                <p className="text-zinc-400 text-lg">CSS-based 3D button that lifts up on hover. Lightweight, fast, and requires no external dependencies.</p>
                            </div>

                            {/* Installation */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Installation</h2>
                                <div className="relative bg-zinc-900 rounded-lg border border-zinc-800 p-4 font-mono text-sm text-zinc-300">
                                    <CopyButton code={installCode} />
                                    <span className="text-zinc-500">$</span> {installCode}
                                </div>
                            </div>

                            {/* Preview */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Preview</h2>
                                <div className="relative bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden min-h-[300px] flex items-center justify-center flex-col gap-6">
                                    <p className="text-zinc-500 text-sm absolute top-4">Hover to see the lift effect</p>
                                    <div className="flex gap-4 flex-wrap justify-center">
                                        <Motion3DButton variant="lift" color="blue" size="md">Lift Blue</Motion3DButton>
                                        <Motion3DButton variant="lift" color="purple" size="md">Lift Purple</Motion3DButton>
                                        <Motion3DButton variant="lift" color="green" size="md">Lift Green</Motion3DButton>
                                        <Motion3DButton variant="lift" color="orange" size="md">Lift Orange</Motion3DButton>
                                        <Motion3DButton variant="lift" color="red" size="md">Lift Red</Motion3DButton>
                                    </div>
                                </div>
                            </div>

                            {/* Usage */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Usage</h2>
                                <div className="relative bg-zinc-900 rounded-lg border border-zinc-800 p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
                                    <CopyButton code={usageCode} />
                                    <pre className="text-sm">{usageCode}</pre>
                                </div>
                            </div>

                            {/* Props */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Props</h2>
                                <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-zinc-800/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-white font-medium">Prop</th>
                                                <th className="px-4 py-3 text-left text-white font-medium">Type</th>
                                                <th className="px-4 py-3 text-left text-white font-medium">Default</th>
                                                <th className="px-4 py-3 text-left text-white font-medium">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-zinc-800">
                                            <tr><td className="px-4 py-3 text-accent">variant</td><td className="px-4 py-3 text-zinc-400">&quot;lift&quot; | &quot;press&quot; | &quot;slide&quot; | &quot;flip&quot; | &quot;glow&quot;</td><td className="px-4 py-3 text-zinc-500">&quot;lift&quot;</td><td className="px-4 py-3 text-zinc-400">Animation variant</td></tr>
                                            <tr><td className="px-4 py-3 text-accent">color</td><td className="px-4 py-3 text-zinc-400">&quot;blue&quot; | &quot;purple&quot; | &quot;green&quot; | &quot;orange&quot; | &quot;red&quot;</td><td className="px-4 py-3 text-zinc-500">&quot;blue&quot;</td><td className="px-4 py-3 text-zinc-400">Button color scheme</td></tr>
                                            <tr><td className="px-4 py-3 text-accent">size</td><td className="px-4 py-3 text-zinc-400">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</td><td className="px-4 py-3 text-zinc-500">&quot;md&quot;</td><td className="px-4 py-3 text-zinc-400">Button size</td></tr>
                                            <tr><td className="px-4 py-3 text-zinc-500">onClick</td><td className="px-4 py-3 text-zinc-400">() ={'>'} void</td><td className="px-4 py-3 text-zinc-500">-</td><td className="px-4 py-3 text-zinc-400">Click handler</td></tr>
                                            <tr><td className="px-4 py-3 text-zinc-500">disabled</td><td className="px-4 py-3 text-zinc-400">boolean</td><td className="px-4 py-3 text-zinc-500">false</td><td className="px-4 py-3 text-zinc-400">Disable button</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
