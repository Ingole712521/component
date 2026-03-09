"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Motion3DButton, GSAP3DButton, FramerMotion3DButton } from "@/components/3d-buttons";

const sidebarItems = [
    { title: "Getting Started", items: [{ name: "Introduction", href: "/docs" }, { name: "Installation", href: "/docs#installation" }] },
    { title: "Components", items: [{ name: "Button", href: "/docs/components/button" }, { name: "Ripple Button", href: "/docs/components/ripple-button" }, { name: "Card", href: "/docs/components/card" }, { name: "Input", href: "/docs/components/input" }, { name: "Badge", href: "/docs/components/badge" }, { name: "Timeline", href: "/docs/components/timeline" }] },
    { title: "Animations", items: [{ name: "Floating Dock", href: "/docs/components/floating-dock" }, { name: "Text Reveal", href: "/docs/components/text-reveal" }, { name: "Flip Card", href: "/docs/components/flip-card" }, { name: "Gradient Text", href: "/docs/components/gradient-text" }, { name: "Spotlight Card", href: "/docs/components/spotlight-card" }] },
    { title: "GSAP", items: [{ name: "GSAP Button", href: "/docs/components/gsap-button" }, { name: "GSAP Card", href: "/docs/components/gsap-card" }, { name: "GSAP Input", href: "/docs/components/gsap-input" }, { name: "GSAP Badge", href: "/docs/components/gsap-badge" }, { name: "GSAP Alert", href: "/docs/components/gsap-alert" }, { name: "GSAP Modal", href: "/docs/components/gsap-modal" }, { name: "Auth Card", href: "/docs/components/auth-card" }] },
    { title: "3D Buttons", items: [{ name: "Overview", href: "/docs/components/3d-buttons", active: true }, { name: "Lift 3D Button", href: "/docs/components/3d-buttons/lift" }, { name: "Cube 3D Button", href: "/docs/components/3d-buttons/cube" }, { name: "Spring 3D Button", href: "/docs/components/3d-buttons/spring" }, { name: "Showcase", href: "/docs/components/3d-buttons/showcase" }] },
    { title: "Navigation", items: [{ name: "Floating Navbar", href: "/docs/components/navbar-floating" }, { name: "Glass Navbar", href: "/docs/components/navbar-glass" }, { name: "Mega Navbar", href: "/docs/components/navbar-mega" }] },
];

function CopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);
    const copy = async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
    return (<button onClick={copy} className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all z-20">{copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}</button>);
}

export default function ThreeDButtonsOverview() {
    const installCode = `npx @nehal712521/inprogress add 3d-buttons`;
    const importCode = `import { Motion3DButton, GSAP3DButton, FramerMotion3DButton } from "@/components/3d-buttons";`;

    return (
        <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex gap-12 h-full pt-24">
                    {/* Sidebar */}
                    <aside className="hidden lg:block w-64 shrink-0 h-full overflow-y-auto pr-4 border-r border-white/5">
                        <div className="space-y-8 pb-16">
                            {sidebarItems.map((section) => (
                                <div key={section.title}>
                                    <h3 className="text-[10px] font-semibold text-white mb-4 tracking-widest uppercase opacity-50">{section.title}</h3>
                                    <ul className="space-y-1.5">
                                        {section.items.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href} className={`group flex items-center justify-between px-3 py-1.5 rounded-lg text-sm transition-all ${item.active ? "bg-accent/10 text-accent font-medium border border-accent/20 shadow-[0_0_16px_rgba(14,165,233,0.1)]" : "hover:text-white hover:bg-white/5 border border-transparent"}`}>
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
                        <div className="pb-24 space-y-10">
                            {/* Header */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                                    <span>Components</span>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-white">3D Buttons</span>
                                </div>
                                <h1 className="text-4xl font-bold text-white tracking-tight">3D Buttons</h1>
                                <p className="text-zinc-400 text-lg">A collection of stunning 3D animated buttons with multiple animation libraries. Choose from CSS-based, GSAP-powered, or Framer Motion animations.</p>
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
                                <div className="relative bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden min-h-[400px] p-8">
                                    <div className="space-y-8">
                                        {/* Motion3D */}
                                        <div>
                                            <h3 className="text-white font-semibold mb-4">Lift 3D Button (CSS-based)</h3>
                                            <div className="flex gap-4 flex-wrap">
                                                <Motion3DButton variant="lift" color="blue" size="md">Lift Blue</Motion3DButton>
                                                <Motion3DButton variant="lift" color="purple" size="md">Lift Purple</Motion3DButton>
                                                <Motion3DButton variant="lift" color="green" size="md">Lift Green</Motion3DButton>
                                            </div>
                                        </div>

                                        {/* GSAP3D */}
                                        <div>
                                            <h3 className="text-white font-semibold mb-4">Cube 3D Button (GSAP)</h3>
                                            <div className="flex gap-4 flex-wrap">
                                                <GSAP3DButton variant="cube" color="blue" size="md">Cube Blue</GSAP3DButton>
                                                <GSAP3DButton variant="cube" color="purple" size="md">Cube Purple</GSAP3DButton>
                                                <GSAP3DButton variant="cube" color="green" size="md">Cube Green</GSAP3DButton>
                                            </div>
                                        </div>

                                        {/* FramerMotion3D */}
                                        <div>
                                            <h3 className="text-white font-semibold mb-4">Spring 3D Button (Framer Motion)</h3>
                                            <div className="flex gap-4 flex-wrap">
                                                <FramerMotion3DButton variant="spring" color="blue" size="md">Spring Blue</FramerMotion3DButton>
                                                <FramerMotion3DButton variant="spring" color="purple" size="md">Spring Purple</FramerMotion3DButton>
                                                <FramerMotion3DButton variant="spring" color="green" size="md">Spring Green</FramerMotion3DButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Usage */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Usage</h2>
                                <div className="relative bg-zinc-900 rounded-lg border border-zinc-800 p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
                                    <CopyButton code={importCode} />
                                    <pre className="text-sm">{importCode}</pre>
                                </div>
                            </div>

                            {/* Types */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-white">Available Types</h2>
                                <div className="grid gap-4">
                                    <div className="p-6 rounded-2xl border border-white/8 bg-zinc-950">
                                        <h3 className="text-white font-semibold mb-2">Lift 3D Button</h3>
                                        <p className="text-zinc-400 text-sm mb-4">CSS-based 3D animations - lightweight and fast with no dependencies.</p>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400">5 variants</span>
                                            <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400">5 colors</span>
                                            <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400">3 sizes</span>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-2xl border border-purple-500/8 bg-purple-950/50">
                                        <h3 className="text-white font-semibold mb-2">Cube 3D Button</h3>
                                        <p className="text-zinc-400 text-sm mb-4">Powered by GSAP for advanced 3D transformations and smooth animations.</p>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">4 variants</span>
                                            <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">5 colors</span>
                                            <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">3 sizes</span>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-2xl border border-green-500/8 bg-green-950/50">
                                        <h3 className="text-white font-semibold mb-2">Spring 3D Button</h3>
                                        <p className="text-zinc-400 text-sm mb-4">Spring physics and smooth animations with Framer Motion.</p>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-400">3 variants</span>
                                            <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-400">5 colors</span>
                                            <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-400">3 sizes</span>
                                        </div>
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
