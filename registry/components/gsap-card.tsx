"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface GSAPCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export function GSAPCard({ children, className = "", glowColor = "#0ea5e9" }: GSAPCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const glow = glowRef.current;
        if (!card || !glow) return;

        // Entry animation
        gsap.fromTo(
            card,
            { opacity: 0, y: 30, rotateX: -10 },
            { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: "power3.out" }
        );

        // Continuous glow animation
        gsap.to(glow, {
            opacity: 0.5,
            scale: 1.2,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Mouse move parallax effect
        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out",
            });

            // Move glow with mouse
            gsap.to(glow, {
                x: x - rect.width / 2,
                y: y - rect.height / 2,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`relative rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 overflow-hidden ${className}`}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
            {/* Animated glow effect */}
            <div
                ref={glowRef}
                className="absolute w-64 h-64 rounded-full blur-3xl opacity-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle, ${glowColor}40 0%, transparent 70%)`,
                    transform: "translate(-50%, -50%)",
                }}
            />
            
            {/* Border gradient animation */}
            <div className="absolute inset-0 rounded-2xl opacity-50">
                <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${glowColor}30, transparent)`,
                        animation: "shimmer 3s infinite",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}

export function GSAPCardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function GSAPCardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <h3 className={`text-xl font-bold text-white ${className}`}>{children}</h3>;
}

export function GSAPCardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={className}>{children}</div>;
}

export function GSAPCardFooter({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`mt-4 pt-4 border-t border-zinc-800 ${className}`}>{children}</div>;
}
