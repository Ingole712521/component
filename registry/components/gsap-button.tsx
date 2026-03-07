"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface GSAPButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "magnetic";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export function GSAPButton({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    disabled = false,
}: GSAPButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const rippleRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const text = textRef.current;
        if (!button || !text) return;

        // Entry animation
        gsap.fromTo(
            button,
            { opacity: 0, y: 20, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
        );

        // Hover animations
        const handleMouseEnter = () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(text, {
                y: -2,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(text, {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseDown = () => {
            gsap.to(button, {
                scale: 0.95,
                duration: 0.1,
                ease: "power2.out",
            });
        };

        const handleMouseUp = () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "elastic.out(1, 0.5)",
            });
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);
        button.addEventListener("mousedown", handleMouseDown);
        button.addEventListener("mouseup", handleMouseUp);

        return () => {
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
            button.removeEventListener("mousedown", handleMouseDown);
            button.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    const variantStyles = {
        primary: "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25",
        secondary: "bg-zinc-800 text-white border border-zinc-700",
        outline: "bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500/10",
        ghost: "bg-transparent text-zinc-300 hover:bg-zinc-800/50",
        magnetic: "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25",
    };

    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            ref={buttonRef}
            onClick={onClick}
            disabled={disabled}
            className={`
                relative overflow-hidden rounded-xl font-semibold
                transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
                ${variantStyles[variant]}
                ${sizeStyles[size]}
                ${className}
            `}
        >
            <span ref={textRef} className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
    );
}
