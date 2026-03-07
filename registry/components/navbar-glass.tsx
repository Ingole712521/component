"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
    label: string;
    href: string;
    children?: { label: string; href: string; description?: string }[];
}

interface GlassmorphismNavbarProps {
    items?: NavItem[];
    logo?: React.ReactNode;
    ctaButton?: {
        label: string;
        href: string;
    };
    className?: string;
}

const defaultItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
        label: "Products",
        href: "#",
        children: [
            { label: "Software", href: "/products/software", description: "Our software solutions" },
            { label: "Hardware", href: "/products/hardware", description: "Hardware products" },
            { label: "Services", href: "/products/services", description: "Professional services" },
        ],
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export function GlassmorphismNavbar({
    items = defaultItems,
    logo,
    ctaButton,
    className = "",
}: GlassmorphismNavbarProps) {
    const navRef = useRef<HTMLElement>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Entry animation with slide down
        gsap.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );

        // Mouse move glow effect
        const handleMouseMove = (e: MouseEvent) => {
            if (navRef.current && glowRef.current) {
                const rect = navRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                gsap.to(glowRef.current, {
                    x: x - 100,
                    y: y - 100,
                    duration: 0.3,
                });
            }
        };

        navRef.current?.addEventListener("mousemove", handleMouseMove);
        return () => navRef.current?.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Dropdown animation
    useEffect(() => {
        if (dropdownRef.current) {
            if (activeDropdown) {
                gsap.fromTo(
                    dropdownRef.current,
                    { opacity: 0, y: 10, scale: 0.95 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" }
                );
            }
        }
    }, [activeDropdown]);

    // Mobile menu animation
    useEffect(() => {
        if (mobileMenuRef.current) {
            if (isMobileMenuOpen) {
                gsap.fromTo(
                    mobileMenuRef.current,
                    { opacity: 0, height: 0 },
                    { opacity: 1, height: "auto", duration: 0.4, ease: "power2.out" }
                );
            } else {
                gsap.to(mobileMenuRef.current, { opacity: 0, height: 0, duration: 0.3 });
            }
        }
    }, [isMobileMenuOpen]);

    const handleDropdownEnter = (label: string) => {
        setActiveDropdown(label);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 ${className}`}
        >
            <div className="relative overflow-hidden">
                {/* Animated glow */}
                <div
                    ref={glowRef}
                    className="absolute w-52 h-52 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"
                    style={{ opacity: 0.5 }}
                />

                <div className="relative backdrop-blur-xl bg-white/5 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex items-center">
                                {logo || (
                                    <span className="text-white font-bold text-xl tracking-tight">
                                        Brand
                                    </span>
                                )}
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center gap-1">
                                {items.map((item) => (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        <a
                                            href={item.href}
                                            className="flex items-center gap-1 px-4 py-2 text-white/70 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all"
                                        >
                                            {item.label}
                                            {item.children && (
                                                <ChevronDown className="w-4 h-4 transition-transform" />
                                            )}
                                        </a>

                                        {/* Dropdown */}
                                        {item.children && activeDropdown === item.label && (
                                            <div
                                                ref={dropdownRef}
                                                className="absolute top-full left-0 mt-2 w-64 py-2 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl"
                                            >
                                                {item.children.map((child) => (
                                                    <a
                                                        key={child.label}
                                                        href={child.href}
                                                        className="block px-4 py-3 hover:bg-white/5 transition-colors"
                                                    >
                                                        <div className="text-white font-medium">
                                                            {child.label}
                                                        </div>
                                                        {child.description && (
                                                            <div className="text-white/50 text-sm mt-0.5">
                                                                {child.description}
                                                            </div>
                                                        )}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            {ctaButton && (
                                <a
                                    href={ctaButton.href}
                                    className="hidden md:flex items-center px-5 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
                                >
                                    {ctaButton.label}
                                </a>
                            )}

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
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="md:hidden overflow-hidden opacity-0"
                style={{ height: 0 }}
            >
                <div className="bg-black/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-4 py-4 space-y-1">
                        {items.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        {ctaButton && (
                            <a
                                href={ctaButton.href}
                                className="block mt-2 px-4 py-3 bg-white text-black text-center font-medium rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {ctaButton.label}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
