"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

interface GSAPInputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export function GSAPInput({
    type = "text",
    placeholder,
    value,
    onChange,
    label,
    error,
    icon,
    className = "",
    disabled = false,
}: GSAPInputProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const borderRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const border = borderRef.current;
        if (!container || !border) return;

        // Entry animation
        gsap.fromTo(
            container,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );
    }, []);

    useEffect(() => {
        const border = borderRef.current;
        if (!border) return;

        if (isFocused) {
            gsap.to(border, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        } else {
            gsap.to(border, {
                opacity: 0,
                scale: 0.95,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    }, [isFocused]);

    const handleFocus = () => {
        setIsFocused(true);
        const input = inputRef.current;
        if (input) {
            gsap.to(input, {
                backgroundColor: "rgba(39, 39, 42, 0.8)",
                duration: 0.3,
            });
        }
    };

    const handleBlur = () => {
        setIsFocused(false);
        const input = inputRef.current;
        if (input) {
            gsap.to(input, {
                backgroundColor: "rgba(39, 39, 42, 0.5)",
                duration: 0.3,
            });
        }
    };

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                        {icon}
                    </div>
                )}
                <input
                    ref={inputRef}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    className={`
                        w-full px-4 py-3 rounded-xl
                        bg-zinc-800/50 border border-zinc-700
                        text-white placeholder-zinc-500
                        focus:outline-none focus:border-transparent
                        transition-all duration-300
                        disabled:opacity-50 disabled:cursor-not-allowed
                        ${icon ? "pl-10" : ""}
                    `}
                />
                {/* Animated border */}
                <div
                    ref={borderRef}
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-0"
                    style={{
                        background: "linear-gradient(90deg, #0ea5e9, #8b5cf6, #0ea5e9)",
                        padding: "2px",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        WebkitMaskComposite: "xor",
                    }}
                />
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-500 animate-pulse">{error}</p>
            )}
        </div>
    );
}
