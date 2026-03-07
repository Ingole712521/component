"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { FloatingNavbar } from "@/components/ui/navbar-floating";

const sidebarItems = [
    { title: "Getting Started", items: [{ name: "Introduction", href: "/docs" }, { name: "Installation", href: "/docs#installation" }] },
    { title: "Components", items: [{ name: "Button", href: "/docs/components/button" }, { name: "Card", href: "/docs/components/card" }, { name: "Input", href: "/docs/components/input" }, { name: "Badge", href: "/docs/components/badge" }, { name: "Timeline", href: "/docs/components/timeline" }] },
    { title: "Animations", items: [{ name: "Floating Dock", href: "/docs/components/floating-dock" }, { name: "Text Reveal", href: "/docs/components/text-reveal" }, { name: "Flip Card", href: "/docs/components/flip-card" }, { name: "Gradient Text", href: "/docs/components/gradient-text" }, { name: "Spotlight Card", href: "/docs/components/spotlight-card" }] },
    { title: "GSAP", items: [{ name: "GSAP Button", href: "/docs/components/gsap-button" }, { name: "GSAP Card", href: "/docs/components/gsap-card" }, { name: "GSAP Input", href: "/docs/components/gsap-input" }, { name: "GSAP Badge", href: "/docs/components/gsap-badge" }, { name: "GSAP Alert", href: "/docs/components/gsap-alert" }, { name: "GSAP Modal", href: "/docs/components/gsap-modal" }, { name: "Auth Card", href: "/docs/components/auth-card" }] },
    { title: "Navigation", items: [{ name: "Floating Navbar", href: "/docs/components/navbar-floating", active: true }, { name: "Glass Navbar", href: "/docs/components/navbar-glass" }, { name: "Mega Navbar", href: "/docs/components/navbar-mega" }] },
];

function CopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);
    const copy = async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
    return (<button onClick={copy} className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">{copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}</button>);
}

export default function FloatingNavbarPage() {
    const installCode = "npx @nehal712521/inprogress add navbar-floating";
    const usageCode = `import { FloatingNavbar } from "@/components/ui/navbar-floating";

export default function Page() {
    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <FloatingNavbar
            items={navItems}
            ctaButton={{ label: "Get Started", href: "/signup" }}
        />
    );
}`;

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
                                    <span>Navigation</span>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-white">Floating Navbar</span>
                                </div>
                                <h1 className="text-4xl font-bold text-white tracking-tight">Floating Navbar</h1>
                                <p className="text-zinc-400 text-lg">Modern floating navbar with scroll-aware styling, staggered animations, and mobile-responsive design using GSAP.</p>
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
                                <div className="relative bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden min-h-[300px]">
                                    <div className="p-4 pt-20">
                                        <p className="text-zinc-500 text-sm text-center">Scroll to see the navbar effect</p>
                                    </div>
                                    <FloatingNavbar />
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
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-zinc-800">
                                            <tr><td className="px-4 py-3 text-accent">items</td><td className="px-4 py-3 text-zinc-400">NavItem[]</td><td className="px-4 py-3 text-zinc-500">Default items</td></tr>
                                            <tr><td className="px-4 py-3 text-accent">logo</td><td className="px-4 py-3 text-zinc-400">ReactNode</td><td className="px-4 py-3 text-zinc-500">&quot;Logo&quot; text</td></tr>
                                            <tr><td className="px-4 py-3 text-accent">ctaButton</td><td className="px-4 py-3 text-zinc-400">{`{ label, href }`}</td><td className="px-4 py-3 text-zinc-500">undefined</td></tr>
                                            <tr><td className="px-4 py-3 text-accent">className</td><td className="px-4 py-3 text-zinc-400">string</td><td className="px-4 py-3 text-zinc-500">&quot;&quot;</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Features</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                        <h3 className="text-white font-medium mb-1">Scroll-aware</h3>
                                        <p className="text-zinc-500 text-sm">Changes style based on scroll position</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                        <h3 className="text-white font-medium mb-1">GSAP Animations</h3>
                                        <p className="text-zinc-500 text-sm">Smooth entry and stagger animations</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                        <h3 className="text-white font-medium mb-1">Mobile Responsive</h3>
                                        <p className="text-zinc-500 text-sm">Collapsible mobile menu with animations</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                        <h3 className="text-white font-medium mb-1">Hover Effects</h3>
                                        <p className="text-zinc-500 text-sm">Scale and color transitions on hover</p>
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
