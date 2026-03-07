"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

type GSAPAlertVariant = "success" | "error" | "warning" | "info";

interface GSAPAlertProps {
    children: React.ReactNode;
    variant?: GSAPAlertVariant;
    title?: string;
    onClose?: () => void;
    className?: string;
    autoClose?: number;
}

export function GSAPAlert({
    children,
    variant = "info",
    title,
    onClose,
    className = "",
    autoClose,
}: GSAPAlertProps) {
    const alertRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const alert = alertRef.current;
        if (!alert) return;

        // Entry animation - slide in from right with bounce
        gsap.fromTo(
            alert,
            { opacity: 0, x: 100, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "back.out(1.2)" }
        );

        // Auto close animation
        if (autoClose && onClose) {
            const tl = gsap.timeline();
            
            if (progressRef.current) {
                tl.to(progressRef.current, {
                    width: "0%",
                    duration: autoClose / 1000,
                    ease: "linear",
                });
            }
            
            tl.to(alert, {
                opacity: 0,
                x: 100,
                scale: 0.9,
                duration: 0.3,
                ease: "power2.in",
                onComplete: onClose,
            });
        }
    }, [autoClose, onClose]);

    const handleClose = () => {
        const alert = alertRef.current;
        if (!alert) return;

        gsap.to(alert, {
            opacity: 0,
            x: 100,
            scale: 0.9,
            duration: 0.3,
            ease: "power2.in",
            onComplete: onClose,
        });
    };

    const variantConfig: Record<GSAPAlertVariant, { icon: React.ReactNode; colors: string }> = {
        success: {
            icon: <CheckCircle className="w-5 h-5" />,
            colors: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
        },
        error: {
            icon: <AlertCircle className="w-5 h-5" />,
            colors: "bg-red-500/10 border-red-500/30 text-red-400",
        },
        warning: {
            icon: <AlertTriangle className="w-5 h-5" />,
            colors: "bg-amber-500/10 border-amber-500/30 text-amber-400",
        },
        info: {
            icon: <Info className="w-5 h-5" />,
            colors: "bg-sky-500/10 border-sky-500/30 text-sky-400",
        },
    };

    const { icon, colors } = variantConfig[variant];

    return (
        <div
            ref={alertRef}
            className={`
                relative overflow-hidden rounded-xl border p-4
                ${colors}
                ${className}
            `}
        >
            {/* Progress bar for auto-close */}
            {autoClose && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div
                        ref={progressRef}
                        className="h-full bg-current"
                        style={{ width: "100%" }}
                    />
                </div>
            )}

            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">{icon}</div>
                <div className="flex-1">
                    {title && (
                        <h4 className="font-semibold mb-1">{title}</h4>
                    )}
                    <div className="text-sm opacity-90">{children}</div>
                </div>
                {onClose && (
                    <button
                        onClick={handleClose}
                        className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
