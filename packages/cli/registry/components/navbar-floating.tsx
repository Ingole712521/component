"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

interface NavItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

interface FloatingNavbarProps {
    items?: NavItem[];
    logo?: React.ReactNode;
    ctaButton?: {
        label: string;
        href: string;
    };
    className?: string;
}

const defaultItems: NavItem[] = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "About", href: "/about", icon: "👤" },
    { label: "Services", href: "/services", icon: "⚙️" },
    { label: "Contact", href: "/contact", icon: "✉️" },
];

export function FloatingNavbar({
    items = defaultItems,
    logo,
    ctaButton,
    className = "",
}: FloatingNavbarProps) {
    const navRef = useRef<HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Entry animation
        gsap.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

        // Stagger animation for nav items
        gsap.fromTo(
            itemRefs.current.filter(Boolean),
            { y: -20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.3,
            }
        );

        // Scroll listener
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mobile menu animation
    useEffect(() => {
        if (mobileMenuRef.current) {
            if (isMobileMenuOpen) {
                gsap.fromTo(
                    mobileMenuRef.current,
                    { height: 0, opacity: 0 },
                    { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
                );
                gsap.fromTo(
                    mobileMenuRef.current.querySelectorAll("a"),
                    { x: -20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, delay: 0.1 }
                );
            } else {
                gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.3 });
            }
        }
    }, [isMobileMenuOpen]);

    const handleItemHover = (index: number, isEntering: boolean) => {
        gsap.to(itemRefs.current[index], {
            scale: isEntering ? 1.05 : 1,
            color: isEntering ? "#3b82f6" : "#ffffff",
            duration: 0.2,
        });
    };

    return (
        <nav
            ref={navRef}
            className={`fixed top-5 left-1/3 -translate-x-1/2 z-50 transition-all duration-300 ${className}`}
        >
            <div
                className={`flex items-center justify-between gap-4 w-[calc(100vw-2rem)] md:w-max px-6 md:px-8 py-3 rounded-[32px] border transition-all duration-500 ${isScrolled
                    ? "bg-black/70 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                    : "bg-black/40 backdrop-blur-md border-white/5 shadow-lg"
                    }`}
            >
                {/* Logo */}
                <div className="flex items-center mr-4">
                    {logo || (
                        <span className="text-white font-bold text-xl">Logo</span>
                    )}
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2">
                    {items.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            ref={(el) => { itemRefs.current[index] = el; }}
                            className="group relative flex items-center justify-center px-4 py-2 text-white/70 text-sm font-medium rounded-full hover:text-white transition-all duration-300"
                            onMouseEnter={() => handleItemHover(index, true)}
                            onMouseLeave={() => handleItemHover(index, false)}
                        >
                            <span className="relative z-10 flex items-center gap-1.5">
                                <span>{item.label}</span>
                                {item.icon && (
                                    <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center">
                                        {item.icon}
                                    </span>
                                )}
                            </span>
                            {/* Hover background */}
                            <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                {ctaButton && (
                    <a
                        href={ctaButton.href}
                        className="hidden md:block ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                    >
                        {ctaButton.label}
                    </a>
                )}

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-white ml-2"
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="md:hidden overflow-hidden opacity-0"
                style={{ height: 0 }}
            >
                <div className="mt-2 px-4 py-4 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10">
                    {items.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors gap-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span>{item.label}</span>
                            {item.icon && <span className="text-xl">{item.icon}</span>}
                        </a>
                    ))}
                    {ctaButton && (
                        <a
                            href={ctaButton.href}
                            className="block mt-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center font-medium rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {ctaButton.label}
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
}
