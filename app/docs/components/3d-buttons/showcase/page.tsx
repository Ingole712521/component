"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import Button3DShowcase from "@/components/3d-buttons/Showcase";

const sidebarItems = [
    { title: "Getting Started", items: [{ name: "Introduction", href: "/docs" }, { name: "Installation", href: "/docs#installation" }] },
    { title: "Components", items: [{ name: "Button", href: "/docs/components/button" }, { name: "Ripple Button", href: "/docs/components/ripple-button" }, { name: "Card", href: "/docs/components/card" }, { name: "Input", href: "/docs/components/input" }, { name: "Badge", href: "/docs/components/badge" }, { name: "Timeline", href: "/docs/components/timeline" }] },
    { title: "Animations", items: [{ name: "Floating Dock", href: "/docs/components/floating-dock" }, { name: "Text Reveal", href: "/docs/components/text-reveal" }, { name: "Flip Card", href: "/docs/components/flip-card" }, { name: "Gradient Text", href: "/docs/components/gradient-text" }, { name: "Spotlight Card", href: "/docs/components/spotlight-card" }] },
    { title: "GSAP", items: [{ name: "GSAP Button", href: "/docs/components/gsap-button" }, { name: "GSAP Card", href: "/docs/components/gsap-card" }, { name: "GSAP Input", href: "/docs/components/gsap-input" }, { name: "GSAP Badge", href: "/docs/components/gsap-badge" }, { name: "GSAP Alert", href: "/docs/components/gsap-alert" }, { name: "GSAP Modal", href: "/docs/components/gsap-modal" }, { name: "Auth Card", href: "/docs/components/auth-card" }] },
    { title: "3D Buttons", items: [{ name: "Overview", href: "/docs/components/3d-buttons" }, { name: "Lift 3D Button", href: "/docs/components/3d-buttons/lift" }, { name: "Cube 3D Button", href: "/docs/components/3d-buttons/cube" }, { name: "Spring 3D Button", href: "/docs/components/3d-buttons/spring" }, { name: "Showcase", href: "/docs/components/3d-buttons/showcase", active: true }] },
    { title: "Navigation", items: [{ name: "Floating Navbar", href: "/docs/components/navbar-floating" }, { name: "Glass Navbar", href: "/docs/components/navbar-glass" }, { name: "Mega Navbar", href: "/docs/components/navbar-mega" }] },
];

export default function ThreeDButtonsShowcasePage() {
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
                                    <span className="text-white">Showcase</span>
                                </div>
                                <h1 className="text-4xl font-bold text-white tracking-tight">3D Button Showcase</h1>
                                <p className="text-zinc-400 text-lg">Interactive showcase displaying all 3D button variants, colors, and sizes.</p>
                            </div>

                            {/* Full Showcase */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Live Demo</h2>
                                <div className="relative bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden">
                                    <div className="p-8">
                                        <Button3DShowcase />
                                    </div>
                                </div>
                            </div>

                            {/* Quick Reference */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Quick Reference</h2>
                                <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-zinc-800/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-white font-medium">Component</th>
                                                <th className="px-4 py-3 text-left text-white font-medium">Variants</th>
                                                <th className="px-4 py-3 text-left text-white font-medium">Colors</th>
                                                <th className="px-4 py-3 text-left text-white font-medium">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-zinc-800">
                                            <tr><td className="px-4 py-3 text-accent">Lift 3D Button</td><td className="px-4 py-3 text-zinc-400">5 variants</td><td className="px-4 py-3 text-zinc-400">5 colors</td><td className="px-4 py-3 text-zinc-400">Lightweight, no dependencies</td></tr>
                                            <tr><td className="px-4 py-3 text-accent">Cube 3D Button</td><td className="px-4 py-3 text-zinc-400">4 variants</td><td className="px-4 py-3 text-zinc-400">5 colors</td><td className="px-4 py-3 text-zinc-400">Advanced 3D animations</td></tr>
                                            <tr><td className="px-4 py-3 text-accent">Spring 3D Button</td><td className="px-4 py-3 text-zinc-400">3 variants</td><td className="px-4 py-3 text-zinc-400">5 colors</td><td className="px-4 py-3 text-zinc-400">Playful spring animations</td></tr>
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
