"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import DocsSidebar from "./DocsSidebar";

const tocItems = [
    { name: "Introduction", href: "#introduction" },
    { name: "Installation", href: "#installation" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" },
];

// Copy to clipboard function
function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={copy}
            className="absolute right-3 top-3 text-xs text-zinc-500 hover:text-white transition-colors"
        >
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}

function CodeBlock({ children, code }: { children: React.ReactNode; code: string }) {
    return (
        <div className="relative">
            <CopyButton text={code} />
            {children}
        </div>
    );
}

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
                    <DocsSidebar />

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
                                        Welcome to <span className="text-white font-semibold">Animioui UI</span>.
                                        Beautifully designed components that you can copy and paste into your apps.
                                        Accessible. Customizable. Open Source.
                                    </p>
                                    <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                                        This is <span className="text-white">NOT</span> a component library. It's a collection of re-usable components that you can copy and paste into your apps.
                                    </p>
                                </div>
                                <div className="h-px bg-gradient-to-r from-white/10 to-transparent my-10" />
                            </div>

                            {/* ── INSTALLATION ── */}
                            <div id="installation" className="space-y-6">
                                <h2 className="text-2xl font-bold text-white tracking-tight">Installation</h2>
                                <p className="text-zinc-400">
                                    Use the CLI to add components to your project. Run the init command to set up your project:
                                </p>
                                <CodeBlock code="npx @nehal712521/progress-ui init">
                                    <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
                                        <span className="text-zinc-500">$</span> npx @nehal712521/progress-ui init
                                    </div>
                                </CodeBlock>

                                <p className="text-zinc-400 mt-6">
                                    Then add components using the add command:
                                </p>
                                <CodeBlock code="npx @nehal712521/progress-ui add button">
                                    <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
                                        <span className="text-zinc-500">$</span> npx @nehal712521/progress-ui add button
                                    </div>
                                </CodeBlock>

                                <p className="text-zinc-400 mt-6">
                                    Available components:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {["button", "card", "input", "badge", "loading-screen", "smart-wrap-text", "floating-dock", "text-reveal", "flip-card", "gradient-text", "spotlight-card", "timeline"].map((comp) => (
                                        <CodeBlock key={comp} code={`npx @nehal712521/progress-ui add ${comp}`}>
                                            <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-3 font-mono text-sm text-zinc-300 flex items-center justify-between group hover:border-zinc-700 transition-colors">
                                                <span>npx @nehal712521/progress-ui add {comp}</span>
                                            </div>
                                        </CodeBlock>
                                    ))}
                                </div>
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
