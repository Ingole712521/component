"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface SidebarItem {
    name: string;
    href: string;
    active?: boolean;
    version?: string;
    badge?: string;
}

interface SidebarSection {
    title: string;
    items: SidebarItem[];
}

const sidebarItems: SidebarSection[] = [
    {
        title: "Getting Started",
        items: [
            { name: "Introduction", href: "/docs", active: true },
            { name: "Installation", href: "#" },
            { name: "CLI", href: "#", version: "3.0" },
        ],
    },
    {
        title: "Components",
        items: [
            { name: "Accordion", href: "#" },
            { name: "Alert Dialog", href: "#" },
            { name: "Animated Button", href: "/docs/components/animated-button" },
            { name: "Animated Tabs", href: "#" },
        ],
    },
    {
        title: "Blocks",
        items: [
            { name: "CTA Sections", href: "#", badge: "New" },
            { name: "Hero Sections", href: "#" },
        ],
    },
];

const tocItems = [
    { name: "Introduction", href: "#introduction" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" },
];

export default function DocsIntroduction() {
    const [activeSection, setActiveSection] = useState("introduction");
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const scrollContainer = mainRef.current;
        if (!scrollContainer) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
            },
            { root: scrollContainer, rootMargin: "-20% 0px -70% 0px", threshold: 0 }
        );

        tocItems.forEach(({ href }) => {
            const el = document.getElementById(href.replace("#", ""));
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex gap-12 h-full pt-24">

                    {/* ── LEFT SIDEBAR ── */}
                    <aside className="hidden lg:block w-64 shrink-0 h-full overflow-y-auto pr-4 border-r border-white/5 custom-scrollbar">
                        <div className="space-y-8 pb-16">
                            {sidebarItems.map((section) => (
                                <div key={section.title}>
                                    <h3 className="text-[10px] font-semibold text-white mb-4 tracking-widest uppercase opacity-50">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-1.5">
                                        {section.items.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className={`group flex items-center justify-between px-3 py-1.5 rounded-lg text-sm transition-all ${item.active
                                                        ? "bg-accent/10 text-accent font-medium border border-accent/20 shadow-[0_0_16px_rgba(14,165,233,0.1)]"
                                                        : "hover:text-white hover:bg-white/5 border border-transparent"
                                                        }`}
                                                >
                                                    <span>{item.name}</span>
                                                    {item.version && (
                                                        <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded border border-white/10 text-zinc-500">
                                                            {item.version}
                                                        </span>
                                                    )}
                                                    {item.badge && (
                                                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20 font-bold">
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* ── MAIN CONTENT ── */}
                    <main ref={mainRef} className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2 custom-scrollbar">
                        <div className="pb-24 space-y-20">

                            {/* ── HEADER ── */}
                            <div id="introduction" className="space-y-4">
                                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                                    <span>Getting Started</span>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-white">Introduction</span>
                                </div>

                                <div className="space-y-6">
                                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                        Introduction
                                    </h1>
                                    <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                                        Welcome to <span className="text-white font-semibold">Progress UI</span>.
                                        Beautifully designed components that you can copy and paste into your apps.
                                        Accessible. Customizable. Open Source.
                                    </p>
                                    <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                                        This is <span className="text-white">NOT</span> a component library. It's a collection of re-usable components that you can copy and paste into your apps.
                                    </p>
                                </div>
                                <div className="h-px bg-gradient-to-r from-white/10 to-transparent my-10" />
                            </div>

                            {/* ── FEATURES ── */}
                            <div id="features" className="space-y-6">
                                <h2 className="text-2xl font-bold text-white tracking-tight">Features</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                                        <h3 className="text-white font-medium mb-2">Beautiful by default</h3>
                                        <p className="text-zinc-500 text-sm">Carefully crafted with attention to every pixel and animation.</p>
                                    </div>
                                    <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                                        <h3 className="text-white font-medium mb-2">Copy and paste</h3>
                                        <p className="text-zinc-500 text-sm">No npm install required. Just copy the code and you are good to go.</p>
                                    </div>
                                </div>
                            </div>

                            {/* ── FAQ ── */}
                            <div id="faq" className="space-y-6">
                                <h2 className="text-2xl font-bold text-white tracking-tight">FAQ</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-white font-medium mb-2">Why copy/paste and not packaged as a dependency?</h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed">
                                            The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>

                    {/* ── RIGHT TOC ── */}
                    <aside className="hidden xl:block w-56 shrink-0 h-full overflow-y-auto pl-2 custom-scrollbar">
                        <div className="space-y-6 pb-16">
                            <div>
                                <h3 className="text-xs font-semibold text-white mb-3 uppercase tracking-wider opacity-50">
                                    On This Page
                                </h3>
                                <ul className="space-y-2 border-l border-white/5">
                                    {tocItems.map((item) => {
                                        const isActive = activeSection === item.href.replace("#", "");
                                        return (
                                            <li
                                                key={item.name}
                                                className={`pl-4 border-l transition-colors duration-200 ${isActive ? "border-accent" : "border-transparent"}`}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className={`text-xs transition-colors duration-200 ${isActive ? "text-accent font-semibold" : "text-zinc-500 hover:text-white"}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

        </div>
    );
}
