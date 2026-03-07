"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { X } from "lucide-react";

interface GSAPModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

export function GSAPModal({
    isOpen,
    onClose,
    children,
    title,
    className = "",
    size = "md",
}: GSAPModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const overlay = overlayRef.current;
        const modal = modalRef.current;
        if (!overlay || !modal) return;

        if (isOpen) {
            // Prevent body scroll
            document.body.style.overflow = "hidden";

            // Entry animations
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
            });

            gsap.fromTo(
                modal,
                { opacity: 0, scale: 0.8, y: 50 },
                { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" }
            );

            // Stagger content animation
            if (contentRef.current) {
                const children = contentRef.current.children;
                gsap.fromTo(
                    children,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.2 }
                );
            }
        } else {
            // Exit animations
            gsap.to(modal, {
                opacity: 0,
                scale: 0.9,
                y: 30,
                duration: 0.2,
                ease: "power2.in",
            });

            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
                delay: 0.1,
                ease: "power2.in",
                onComplete: () => {
                    document.body.style.overflow = "";
                },
            });
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    const sizeClasses = {
        sm: "max-w-md",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
    };

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm opacity-0"
        >
            <div
                ref={modalRef}
                className={`
                    relative w-full ${sizeClasses[size]}
                    bg-zinc-900 border border-zinc-800 rounded-2xl
                    shadow-2xl shadow-black/50
                    ${className}
                `}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                {title && (
                    <div className="px-6 py-4 border-b border-zinc-800">
                        <h2 className="text-xl font-bold text-white">{title}</h2>
                    </div>
                )}

                {/* Content */}
                <div ref={contentRef} className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
