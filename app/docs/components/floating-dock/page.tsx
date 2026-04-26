"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check, Home, User, Settings, Mail } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { motion } from "framer-motion";
import DocsSidebar from "../../DocsSidebar";

const dockItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home" },
    { icon: <User className="w-5 h-5" />, label: "Profile" },
    { icon: <Mail className="w-5 h-5" />, label: "Messages" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings" },
];

const loopItems = [
    "Jam",
    "Stripe",
    "Betterstack",
    "Intercom",
    "GitHub",
    "Notion",
    "Granola",
    "Glean",
    "Attio",
    "Incident.io",
    "PostHog",
    "Sentry",
    "Amplitude",
];

function CopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);
    const copy = async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
    return (<button onClick={copy} className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">{copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}</button>);
}

export default function FloatingDockPage() {
    return (
        <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex gap-12 h-full pt-24">
                    <DocsSidebar />
                    <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
                        <div className="pb-24 space-y-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-accent text-sm font-medium"><span>Animations</span><ChevronRight className="w-4 h-4" /><span className="text-white">Floating Dock</span></div>
                                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Floating Dock</h1>
                                <p className="text-zinc-400 max-w-xl">A macOS-style floating dock with hover animations and tooltips.</p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white">Installation</h2>
                                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                    <CopyButton code="npx @nehal712521/inprogress add floating-dock" />
                                    <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">floating-dock</span></div>
                                </div>
                                <p className="text-sm text-zinc-500">Requires: <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded">framer-motion</code></p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white">Preview</h2>
                                <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 h-64 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_55%)]" />
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-20 w-40 bg-linear-to-r from-zinc-950/95 via-zinc-950/70 to-transparent backdrop-blur-md z-20" />
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-20 w-40 bg-linear-to-l from-zinc-950/95 via-zinc-950/70 to-transparent backdrop-blur-md z-20" />
                                    <div className="relative z-20 h-full flex items-center justify-center overflow-hidden">
                                        <motion.div
                                            className="flex w-max gap-3"
                                            animate={{ x: ["0%", "-50%"] }}
                                            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                                        >
                                            {[...loopItems, ...loopItems].map((item, index) => (
                                                <div
                                                    key={`${item}-${index}`}
                                                    className="shrink-0 w-44 rounded-xl border border-white/10 bg-zinc-800/40 backdrop-blur-sm px-3 py-2 text-center text-zinc-200 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white">Original Dock Variant</h2>
                                <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 h-64 relative overflow-hidden">
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                                        <FloatingDock items={dockItems} />
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
