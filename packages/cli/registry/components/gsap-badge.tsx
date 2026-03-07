"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

type GSAPBadgeVariant = "default" | "success" | "warning" | "error" | "gradient" | "shimmer";

interface GSAPBadgeProps {
    children: React.ReactNode;
    variant?: GSAPBadgeVariant;
    className?: string;
    pulse?: boolean;
}

export function GSAPBadge({
    children,
    variant = "default",
    className = "",
    pulse = false,
}: GSAPBadgeProps) {
    const badgeRef = useRef<HTMLSpanElement>(null);
    const shimmerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const badge = badgeRef.current;
        const shimmer = shimmerRef.current;
        if (!badge) return;

        // Entry animation
        gsap.fromTo(
            badge,
            { opacity: 0, scale: 0.5, rotation: -10 },
            { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" }
        );

        // Pulse animation
        if (pulse) {
            gsap.to(badge, {
                boxShadow: "0 0 20px currentColor",
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }

        // Shimmer animation for gradient variant
        if (variant === "shimmer" && shimmer) {
            gsap.to(shimmer, {
                x: "200%",
                duration: 2,
                repeat: -1,
                ease: "power2.inOut",
            });
        }
    }, [variant, pulse]);

    const handleMouseEnter = () => {
        const badge = badgeRef.current;
        if (!badge) return;
        gsap.to(badge, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        const badge = badgeRef.current;
        if (!badge) return;
        gsap.to(badge, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const variantStyles: Record<GSAPBadgeVariant, string> = {
        default: "bg-zinc-800 text-zinc-200 border-zinc-700",
        success: "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
        warning: "bg-amber-500/20 text-amber-400 border-amber-500/50",
        error: "bg-red-500/20 text-red-400 border-red-500/50",
        gradient: "bg-gradient-to-r from-sky-500 to-purple-500 text-white border-transparent",
        shimmer: "bg-zinc-800 text-white border-zinc-700 overflow-hidden relative",
    };

    return (
        <span
            ref={badgeRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`
                inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                border transition-colors duration-300
                ${variantStyles[variant]}
                ${className}
            `}
        >
            {variant === "shimmer" && (
                <div
                    ref={shimmerRef}
                    className="absolute inset-0 -translate-x-full"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    }}
                />
            )}
            <span className="relative z-10">{children}</span>
        </span>
    );
}
