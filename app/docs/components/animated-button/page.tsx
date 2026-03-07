"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, Copy, Check, Terminal, BookOpen, Layers, Zap, Code2 } from "lucide-react";
import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";

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
            { name: "Introduction", href: "/docs", active: false },
            { name: "Installation", href: "/docs#installation" },
        ],
    },
    {
        title: "Components",
        items: [
            { name: "Button", href: "/docs/components/button", active: true },
            { name: "Card", href: "/docs/components/card" },
            { name: "Input", href: "/docs/components/input" },
            { name: "Badge", href: "/docs/components/badge" },
            { name: "Timeline", href: "/docs/components/timeline" },
        ],
    },
    {
        title: "Animations",
        items: [
            { name: "Floating Dock", href: "/docs/components/floating-dock" },
            { name: "Text Reveal", href: "/docs/components/text-reveal" },
            { name: "Flip Card", href: "/docs/components/flip-card" },
            { name: "Gradient Text", href: "/docs/components/gradient-text" },
            { name: "Spotlight Card", href: "/docs/components/spotlight-card" },
        ],
    },
    {
        title: "GSAP",
        items: [
            { name: "GSAP Button", href: "/docs/components/gsap-button" },
            { name: "GSAP Card", href: "/docs/components/gsap-card" },
            { name: "GSAP Input", href: "/docs/components/gsap-input" },
            { name: "GSAP Badge", href: "/docs/components/gsap-badge" },
            { name: "GSAP Alert", href: "/docs/components/gsap-alert" },
            { name: "GSAP Modal", href: "/docs/components/gsap-modal" },
            { name: "Auth Card", href: "/docs/components/auth-card" },
        ],
    },
    {
        title: "Navigation",
        items: [
            { name: "Floating Navbar", href: "/docs/components/navbar-floating" },
            { name: "Glass Navbar", href: "/docs/components/navbar-glass" },
            // { name: "", href: "/docs/components/" },
        ],
    },
];

const tocItems = [
    { name: "Animated Button", href: "#animated-button" },
    { name: "Installation", href: "#installation" },
    { name: "Usage", href: "#usage" },
    { name: "Variants", href: "#variants" },
    { name: "API Reference", href: "#api-reference" },
];

const componentSource = `"use client";
import React, { useRef } from "react";

type Variant = "shimmer" | "glow" | "pulse" | "ripple";
type Size    = "sm" | "md" | "lg";

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const sizeMap: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function AnimatedButton({
  children,
  variant = "shimmer",
  size = "md",
  disabled = false,
  onClick,
  className = "",
  type = "button",
  fullWidth = false,
}: AnimatedButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "ripple" && btnRef.current && rippleRef.current) {
      const btn = btnRef.current;
      const ripple = rippleRef.current;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.style.width  = \`\${size}px\`;
      ripple.style.height = \`\${size}px\`;
      ripple.style.left   = \`\${e.clientX - rect.left - size / 2}px\`;
      ripple.style.top    = \`\${e.clientY - rect.top  - size / 2}px\`;
      ripple.classList.remove("animate-ripple");
      void ripple.offsetWidth;
      ripple.classList.add("animate-ripple");
    }
    onClick?.(e);
  };

  return (
    <>
      <style>{\`/* ... paste the CSS from the source file ... \`}</style>
      <button
        ref={btnRef}
        type={type}
        disabled={disabled}
        onClick={handleClick}
        className={\`animated-btn \${sizeMap[size]} btn-\${variant} \${fullWidth ? "w-full" : ""} \${className}\`}
      >
        {variant === "ripple" && <span ref={rippleRef} className="ripple-dot" />}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    </>
  );
}`;

const usageCode = `import AnimatedButton from "@/components/ui/AnimatedButton";

export default function Example() {
  return (
    <div className="flex gap-4 flex-wrap">
      <AnimatedButton variant="shimmer">Shimmer</AnimatedButton>
      <AnimatedButton variant="glow">Glow</AnimatedButton>
      <AnimatedButton variant="pulse">Pulse</AnimatedButton>
      <AnimatedButton variant="ripple">Ripple</AnimatedButton>
    </div>
  );
}`;

const manualInstallCode = `# 1. Copy the component file into your project
components/
  ui/
    AnimatedButton.tsx   ← paste the file here

# 2. No additional dependencies needed — pure React + CSS`;

const apiRows = [
    { prop: "variant", type: `"shimmer" | "glow" | "pulse" | "ripple"`, default: `"shimmer"`, desc: "Controls the animation style." },
    { prop: "size", type: `"sm" | "md" | "lg"`, default: `"md"`, desc: "Controls padding and font size." },
    { prop: "disabled", type: "boolean", default: "false", desc: "Disables the button and fades it out." },
    { prop: "fullWidth", type: "boolean", default: "false", desc: "Makes the button stretch to full container width." },
    { prop: "onClick", type: "(e: MouseEvent) => void", default: "—", desc: "Click handler forwarded to the native button." },
    { prop: "className", type: "string", default: `""`, desc: "Extra Tailwind / CSS classes merged in." },
    { prop: "type", type: `"button" | "submit" | "reset"`, default: `"button"`, desc: "Native button type attribute." },
];

function CopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button
            onClick={copy}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
        >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
        </button>
    );
}

function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
    return (
        <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden text-sm">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
                <span className="text-xs text-zinc-500 font-mono">{language}</span>
                <CopyButton code={code} />
            </div>
            <pre className="overflow-x-auto p-4 text-zinc-300 font-mono text-xs leading-relaxed">
                <code>{code}</code>
            </pre>
        </div>
    );
}

export default function AnimatedButtonDocs() {
    const [activeSection, setActiveSection] = useState("animated-button");
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
    const [installTab, setInstallTab] = useState<"cli" | "manual">("cli");
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
                            <div id="animated-button" className="space-y-4">
                                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                                    <span>Components</span>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-white">Animated Button</span>
                                </div>

                                <div className="flex items-start justify-between gap-4 flex-wrap">
                                    <div className="space-y-2">
                                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                            Animated Button
                                        </h1>
                                        <p className="text-zinc-400 max-w-xl leading-relaxed">
                                            A highly customisable animated button with{" "}
                                            <span className="text-white font-medium">shimmer</span>,{" "}
                                            <span className="text-white font-medium">glow</span>,{" "}
                                            <span className="text-white font-medium">pulse</span>, and{" "}
                                            <span className="text-white font-medium">ripple</span> effects — built with
                                            pure CSS, zero dependencies.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 flex-wrap">
                                        {(["shimmer", "glow", "pulse", "ripple"] as const).map((v) => (
                                            <span
                                                key={v}
                                                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-mono"
                                            >
                                                {v}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />
                            </div>

                            {/* ── INSTALLATION ── */}
                            <div id="installation" className="space-y-6">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold text-white tracking-tight">Installation</h2>
                                    <p className="text-zinc-500 text-sm">Use the CLI for the fastest setup, or copy the file manually.</p>
                                </div>

                                {/* Tabs */}
                                <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/5 w-fit">
                                    {(["cli", "manual"] as const).map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setInstallTab(t as "cli" | "manual")}
                                            className={`px-4 py-1.5 rounded-lg text-sm font-medium uppercase tracking-wide transition-all ${installTab === t
                                                ? "bg-accent text-white shadow-lg shadow-accent/20"
                                                : "text-zinc-400 hover:text-white"
                                                }`}
                                        >
                                            {t === "cli" ? "CLI" : "Manual"}
                                        </button>
                                    ))}
                                </div>

                                {/* ── CLI TAB ── */}
                                {installTab === "cli" && (
                                    <div className="space-y-5">
                                        <p className="text-sm text-zinc-400 leading-relaxed">
                                            Run this command in your project root. The CLI will create{" "}
                                            <code className="text-accent font-mono text-xs bg-accent/10 px-1.5 py-0.5 rounded">components/ui/</code>
                                            {" "}and write the file automatically.
                                        </p>

                                        {/* Terminal window */}
                                        <div className="rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                                                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                                                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                                                <span className="ml-3 text-xs text-zinc-500 font-mono">Terminal</span>
                                            </div>
                                            <div className="relative p-4 font-mono text-sm">
                                                <CopyButton code="npx @nehal712521/inprogress add button" />
                                                <p className="pr-10">
                                                    <span className="text-emerald-400 select-none">$ </span>
                                                    <span className="text-white">npx </span>
                                                    <span className="text-accent">@nehal712521/inprogress</span>
                                                    <span className="text-white"> add </span>
                                                    <span className="text-yellow-300">button</span>
                                                </p>
                                                <p className="text-zinc-600 text-xs mt-3 pl-2">✔ Fetching from registry…</p>
                                                <p className="text-zinc-600 text-xs pl-2">✔ Created <span className="text-emerald-500">components/ui/AnimatedButton.tsx</span></p>
                                                <p className="text-zinc-600 text-xs pl-2">✔ Done!</p>
                                            </div>
                                        </div>

                                        {/* Package manager variants */}
                                        <div className="grid sm:grid-cols-3 gap-3">
                                            {[
                                                { label: "pnpm", cmd: "pnpm dlx @nehal712521/inprogress add button" },
                                                { label: "npm", cmd: "npx @nehal712521/inprogress add button" },
                                                { label: "bun", cmd: "bunx @nehal712521/inprogress add button" },
                                            ].map(({ label, cmd }) => (
                                                <div key={label} className="relative rounded-xl bg-white/[0.02] border border-white/5 px-4 py-3 font-mono">
                                                    <span className="text-zinc-600 text-[10px] uppercase tracking-widest block mb-1.5">{label}</span>
                                                    <CopyButton code={cmd} />
                                                    <span className="text-zinc-400 text-xs pr-8 block truncate">{cmd}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-xs text-zinc-500">
                                            See all available components →{" "}
                                            <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded font-mono">npx @nehal712521/inprogress list</code>
                                        </p>
                                    </div>
                                )}

                                {/* ── MANUAL TAB ── */}
                                {installTab === "manual" && (
                                    <div className="space-y-4">
                                        <p className="text-sm text-zinc-400 leading-relaxed">
                                            <span className="text-white font-semibold">Step 1.</span>{" "}
                                            Copy <code className="text-accent font-mono text-xs bg-accent/10 px-1.5 py-0.5 rounded">AnimatedButton.tsx</code> into your project:
                                        </p>
                                        <CodeBlock code={manualInstallCode} language="bash" />

                                        <p className="text-sm text-zinc-400 leading-relaxed">
                                            <span className="text-white font-semibold">Step 2.</span>{" "}
                                            Paste the full source from the <span className="text-accent">Component Source</span> section below.
                                        </p>

                                        <p className="text-sm text-zinc-400 leading-relaxed">
                                            <span className="text-white font-semibold">Step 3.</span>{" "}
                                            Import and use it anywhere in your app — that's it!
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* ── USAGE ── */}
                            <div id="usage" className="space-y-6">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold text-white tracking-tight">Usage</h2>
                                    <p className="text-zinc-500 text-sm">Import the component and pick a variant.</p>
                                </div>

                                {/* Preview / Code tabs */}
                                <div>
                                    <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/5 w-fit mb-4">
                                        {(["preview", "code"] as const).map((t) => (
                                            <button
                                                key={t}
                                                onClick={() => setActiveTab(t)}
                                                className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all ${activeTab === t
                                                    ? "bg-white/10 text-white"
                                                    : "text-zinc-500 hover:text-white"
                                                    }`}
                                            >
                                                {t === "preview" ? "Preview" : "Code"}
                                            </button>
                                        ))}
                                    </div>

                                    {activeTab === "preview" ? (
                                        <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex flex-wrap items-center justify-center gap-4 min-h-[180px]">
                                            <AnimatedButton variant="shimmer">Shimmer</AnimatedButton>
                                            <AnimatedButton variant="glow">Glow</AnimatedButton>
                                            <AnimatedButton variant="pulse">Pulse</AnimatedButton>
                                            <AnimatedButton variant="ripple">Ripple</AnimatedButton>
                                        </div>
                                    ) : (
                                        <CodeBlock code={usageCode} language="tsx" />
                                    )}
                                </div>
                            </div>

                            {/* ── VARIANTS ── */}
                            <div id="variants" className="space-y-8">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold text-white tracking-tight">Variants</h2>
                                    <p className="text-zinc-500 text-sm">Four animation styles, each a pure CSS effect.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {[
                                        {
                                            variant: "shimmer" as const,
                                            icon: Zap,
                                            title: "Shimmer",
                                            desc: "A light-streak sweeps across the button on a loop — great for primary CTAs.",
                                            code: `<AnimatedButton variant="shimmer">Get Started</AnimatedButton>`,
                                        },
                                        {
                                            variant: "glow" as const,
                                            icon: Layers,
                                            title: "Glow",
                                            desc: "A soft ambient glow pulses around the border. Hover reveals an intense halo.",
                                            code: `<AnimatedButton variant="glow">Learn More</AnimatedButton>`,
                                        },
                                        {
                                            variant: "pulse" as const,
                                            icon: BookOpen,
                                            title: "Pulse",
                                            desc: "A ring expands outward from the button in a heartbeat rhythm — draws the eye.",
                                            code: `<AnimatedButton variant="pulse">Subscribe</AnimatedButton>`,
                                        },
                                        {
                                            variant: "ripple" as const,
                                            icon: Terminal,
                                            title: "Ripple",
                                            desc: "Click anywhere on the button to spawn a ripple wave from your cursor position.",
                                            code: `<AnimatedButton variant="ripple">Click Me</AnimatedButton>`,
                                        },
                                    ].map(({ variant, icon: Icon, title, desc, code }) => (
                                        <div
                                            key={variant}
                                            className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] space-y-4 hover:bg-white/[0.04] transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                                                    <Icon className="w-4 h-4 text-accent" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-semibold text-sm">{title}</p>
                                                    <p className="text-zinc-500 text-xs">{desc}</p>
                                                </div>
                                            </div>

                                            <div className="flex justify-center py-4 bg-black/40 rounded-xl border border-white/5">
                                                <AnimatedButton variant={variant}>{title}</AnimatedButton>
                                            </div>

                                            <div className="relative rounded-xl border border-white/5 bg-zinc-950 overflow-hidden">
                                                <CopyButton code={code} />
                                                <pre className="p-3 text-xs font-mono text-zinc-400 overflow-x-auto leading-relaxed pr-10">
                                                    <code>{code}</code>
                                                </pre>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Size variants */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-white">Sizes</h3>
                                    <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex flex-wrap items-center justify-center gap-4">
                                        <AnimatedButton variant="shimmer" size="sm">Small</AnimatedButton>
                                        <AnimatedButton variant="shimmer" size="md">Medium</AnimatedButton>
                                        <AnimatedButton variant="shimmer" size="lg">Large</AnimatedButton>
                                    </div>
                                    <CodeBlock
                                        code={`<AnimatedButton size="sm">Small</AnimatedButton>
<AnimatedButton size="md">Medium</AnimatedButton>
<AnimatedButton size="lg">Large</AnimatedButton>`}
                                        language="tsx"
                                    />
                                </div>

                                {/* Disabled state */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-white">Disabled State</h3>
                                    <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex flex-wrap items-center justify-center gap-4">
                                        <AnimatedButton variant="shimmer" disabled>Disabled</AnimatedButton>
                                        <AnimatedButton variant="glow" disabled>Disabled</AnimatedButton>
                                    </div>
                                    <CodeBlock
                                        code={`<AnimatedButton variant="shimmer" disabled>Disabled</AnimatedButton>`}
                                        language="tsx"
                                    />
                                </div>
                            </div>

                            {/* ── COMPONENT SOURCE ── */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Code2 className="w-5 h-5 text-accent" />
                                    <h2 className="text-lg font-bold text-white">Component Source</h2>
                                </div>
                                <p className="text-sm text-zinc-500">
                                    Copy this into{" "}
                                    <code className="text-accent font-mono text-xs bg-accent/10 px-1.5 py-0.5 rounded">
                                        components/ui/AnimatedButton.tsx
                                    </code>
                                </p>
                                <CodeBlock code={componentSource} language="tsx" />
                            </div>

                            {/* ── API REFERENCE ── */}
                            <div id="api-reference" className="space-y-6">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold text-white tracking-tight">API Reference</h2>
                                    <p className="text-zinc-500 text-sm">All props accepted by AnimatedButton.</p>
                                </div>

                                <div className="rounded-2xl border border-white/8 overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/5 bg-white/[0.02]">
                                                {["Prop", "Type", "Default", "Description"].map((h) => (
                                                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                                                        {h}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {apiRows.map((row, i) => (
                                                <tr key={row.prop} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"} hover:bg-white/[0.03] transition-colors`}>
                                                    <td className="px-4 py-3 font-mono text-accent text-xs">{row.prop}</td>
                                                    <td className="px-4 py-3 font-mono text-zinc-400 text-xs">{row.type}</td>
                                                    <td className="px-4 py-3 font-mono text-emerald-400 text-xs">{row.default}</td>
                                                    <td className="px-4 py-3 text-zinc-500 text-xs leading-relaxed">{row.desc}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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

                            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 blur-2xl rounded-full" />
                                <p className="text-xs font-medium text-white mb-1.5 relative z-10">Question? Give us feedback</p>
                                <Link href="#" className="text-xs text-zinc-500 hover:text-accent transition-colors relative z-10 flex items-center gap-1 group">
                                    Edit this page <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

        </div>
    );
}
