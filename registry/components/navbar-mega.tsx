"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

interface NavItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

interface MegaMenuItem {
    title: string;
    description: string;
    items: { label: string; href: string; icon?: React.ReactNode }[];
}

interface MegaNavbarProps {
    items?: NavItem[];
    megaMenu?: MegaMenuItem[];
    logo?: React.ReactNode;
    ctaButton?: {
        label: string;
        href: string;
    };
    className?: string;
}

const defaultItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Resources", href: "/resources" },
    { label: "Pricing", href: "/pricing" },
];

const defaultMegaMenu: MegaMenuItem[] = [
    {
        title: "Products",
        description: "Explore our suite of tools",
        items: [
            { label: "Analytics", href: "/products/analytics" },
            { label: "Dashboard", href: "/products/dashboard" },
            { label: "Integrations", href: "/products/integrations" },
            { label: "API", href: "/products/api" },
        ],
    },
];

export function MegaNavbar({
    items = defaultItems,
    megaMenu = defaultMegaMenu,
    logo,
    ctaButton,
    className = "",
}: MegaNavbarProps) {
    const navRef = useRef<HTMLElement>(null);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const megaMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(0); // Track selected/clicked item

    useEffect(() => {
        // Entry animation
        const tl = gsap.timeline();
        
        tl.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );

        // Animate nav items
        tl.fromTo(
            navRef.current?.querySelectorAll(".nav-item") || [],
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
            "-=0.3"
        );
    }, []);

    // Underline animation - shows on hover OR selected item
    useEffect(() => {
        if (lineRef.current) {
            // Priority: hover index > selected index
            const targetIndex = activeIndex !== null ? activeIndex : selectedIndex;
            const items = navRef.current?.querySelectorAll(".nav-item");
            if (items && items[targetIndex]) {
                const item = items[targetIndex] as HTMLElement;
                gsap.to(lineRef.current, {
                    width: item.offsetWidth,
                    x: item.offsetLeft,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        }
    }, [activeIndex, selectedIndex]);

    // Mega menu animation
    useEffect(() => {
        if (megaMenuRef.current) {
            if (isMegaMenuOpen) {
                gsap.fromTo(
                    megaMenuRef.current,
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
                );
                gsap.fromTo(
                    megaMenuRef.current.querySelectorAll(".mega-item"),
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.1 }
                );
            } else {
                gsap.to(megaMenuRef.current, { opacity: 0, y: -10, duration: 0.2 });
            }
        }
    }, [isMegaMenuOpen]);

    // Mobile menu animation
    useEffect(() => {
        if (mobileMenuRef.current) {
            if (isMobileMenuOpen) {
                gsap.fromTo(
                    mobileMenuRef.current,
                    { opacity: 0, x: "100%" },
                    { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }
                );
                gsap.fromTo(
                    mobileMenuRef.current.querySelectorAll("a"),
                    { x: 20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, delay: 0.2 }
                );
            } else {
                gsap.to(mobileMenuRef.current, { opacity: 0, x: "100%", duration: 0.3 });
            }
        }
    }, [isMobileMenuOpen]);

    return (
        <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
            {/* Gradient border line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 relative">
                        {/* Animated underline */}
                        <div
                            ref={lineRef}
                            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        />

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            {logo || (
                                <>
                                    <Sparkles className="w-6 h-6 text-blue-500" />
                                    <span className="text-white font-bold text-xl">Brand</span>
                                </>
                            )}
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1 relative">
                            {items.map((item, index) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`nav-item flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                        selectedIndex === index ? "text-white" : "text-white/70 hover:text-white"
                                    }`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                    onClick={(e) => {
                                        setSelectedIndex(index);
                                        if (item.label === "Products") {
                                            e.preventDefault();
                                            setIsMegaMenuOpen(!isMegaMenuOpen);
                                        }
                                    }}
                                >
                                    {item.icon}
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center gap-3">
                            {ctaButton && (
                                <a
                                    href={ctaButton.href}
                                    className="group flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                                >
                                    {ctaButton.label}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            {isMegaMenuOpen && (
                <div
                    ref={megaMenuRef}
                    className="hidden md:block absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10"
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-4 gap-6">
                            {megaMenu.map((section) => (
                                <div key={section.title} className="mega-item">
                                    <h3 className="text-white font-semibold mb-1">{section.title}</h3>
                                    <p className="text-white/50 text-sm mb-4">{section.description}</p>
                                    <div className="space-y-2">
                                        {section.items.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                            >
                                                {item.icon}
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="md:hidden fixed inset-y-0 right-0 w-80 max-w-full bg-black/95 backdrop-blur-xl border-l border-white/10 opacity-0"
                style={{ transform: "translateX(100%)" }}
            >
                <div className="p-6 pt-20">
                    <div className="space-y-1">
                        {items.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </div>
                    {ctaButton && (
                        <a
                            href={ctaButton.href}
                            className="flex items-center justify-center gap-2 mt-6 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {ctaButton.label}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
}
