"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

interface NavItem {
    label: string;
    href: string;
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
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
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
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${className}`}
        >
            <div
                className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-all duration-300 ${
                    isScrolled
                        ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
                        : "bg-black/40 backdrop-blur-md border-white/5"
                }`}
            >
                {/* Logo */}
                <div className="flex items-center mr-4">
                    {logo || (
                        <span className="text-white font-bold text-xl">Logo</span>
                    )}
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {items.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            ref={(el) => { itemRefs.current[index] = el; }}
                            className="px-4 py-2 text-white/80 text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
                            onMouseEnter={() => handleItemHover(index, true)}
                            onMouseLeave={() => handleItemHover(index, false)}
                        >
                            {item.label}
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
                            className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
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
