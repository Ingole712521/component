"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { GSAP3DButton } from "@/components/3d-buttons";

const sidebarItems = [
    { title: "Getting Started", items: [{ name: "Introduction", href: "/docs" }, { name: "Installation", href: "/docs#installation" }] },
    { title: "Components", items: [{ name: "Button", href: "/docs/components/button" }, { name: "Ripple Button", href: "/docs/components/ripple-button" }, { name: "Card", href: "/docs/components/card" }, { name: "Input", href: "/docs/components/input" }, { name: "Badge", href: "/docs/components/badge" }, { name: "Timeline", href: "/docs/components/timeline" }] },
    { title: "Animations", items: [{ name: "Floating Dock", href: "/docs/components/floating-dock" }, { name: "Text Reveal", href: "/docs/components/text-reveal" }, { name: "Flip Card", href: "/docs/components/flip-card" }, { name: "Gradient Text", href: "/docs/components/gradient-text" }, { name: "Spotlight Card", href: "/docs/components/spotlight-card" }] },
    { title: "GSAP", items: [{ name: "GSAP Button", href: "/docs/components/gsap-button" }, { name: "GSAP Card", href: "/docs/components/gsap-card" }, { name: "GSAP Input", href: "/docs/components/gsap-input" }, { name: "GSAP Badge", href: "/docs/components/gsap-badge" }, { name: "GSAP Alert", href: "/docs/components/gsap-alert" }, { name: "GSAP Modal", href: "/docs/components/gsap-modal" }, { name: "Auth Card", href: "/docs/components/auth-card" }] },
    { title: "3D Buttons", items: [{ name: "Overview", href: "/docs/components/3d-buttons" }, { name: "Lift 3D Button", href: "/docs/components/3d-buttons/lift" }, { name: "Cube 3D Button", href: "/docs/components/3d-buttons/cube", active: true }, { name: "Spring 3D Button", href: "/docs/components/3d-buttons/spring" }, { name: "Showcase", href: "/docs/components/3d-buttons/showcase" }] },
    { title: "Navigation", items: [{ name: "Floating Navbar", href: "/docs/components/navbar-floating" }, { name: "Glass Navbar", href: "/docs/components/navbar-glass" }, { name: "Mega Navbar", href: "/docs/components/navbar-mega" }] },
];

function CopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);
    const copy = async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
    return (<button onClick={copy} className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all z-20">{copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}</button>);
}

export default function Cube3DButtonPage() {
    const installCode = `npx @nehal712521/inprogress add cube-3d-button`;
    const usageCode = `import { GSAP3DButton } from "@/components/3d-buttons";

<GSAP3DButton variant="cube" color="blue">
  Hover Me
</GSAP3DButton>`;

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
                                    <Link href="/docs/components/3d-buttons" className="hover:text-white">3D Buttons</Link>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-white">Cube 3D Button</span>
                                </div>
                                <h1 className="text-4xl font-bold text-white tracking-tight">Cube 3D Button</h1>
                                <p className="text-zinc-400 text-lg">GSAP-powered 3D button with cube rotation effect. Advanced animations for eye-catching interactions.</p>
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
                                    <p className="text-zinc-500 text-sm absolute top-4">Hover to see the 3D cube effect</p>
                                    <div className="flex gap-4 flex-wrap justify-center">
                                        <GSAP3DButton variant="cube" color="blue" size="md">Cube Blue</GSAP3DButton>
                                        <GSAP3DButton variant="cube" color="purple" size="md">Cube Purple</GSAP3DButton>
                                        <GSAP3DButton variant="cube" color="green" size="md">Cube Green</GSAP3DButton>
                                        <GSAP3DButton variant="cube" color="orange" size="md">Cube Orange</GSAP3DButton>
                                        <GSAP3DButton variant="cube" color="red" size="md">Cube Red</GSAP3DButton>
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
                                            <tr><td className="px-4 py-3 text-accent">variant</td><td className="px-4 py-3 text-zinc-400">&quot;cube&quot; | &quot;neon&quot; | &quot;isometric&quot; | &quot;extruded&quot;</td><td className="px-4 py-3 text-zinc-500">&quot;cube&quot;</td><td className="px-4 py-3 text-zinc-400">Animation variant</td></tr>
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
