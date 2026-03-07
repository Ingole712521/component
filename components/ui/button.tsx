"use client";

import React, { useRef, MouseEvent, CSSProperties } from "react";

type ButtonVariant = "shimmer" | "glow" | "pulse" | "ripple";
type ButtonSize = "sm" | "md" | "lg";

interface AnimatedButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: CSSProperties;
    type?: "button" | "submit" | "reset";
    fullWidth?: boolean;
}

const sizeMap: Record<ButtonSize, string> = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
};

export default function AnimatedButton({
    children,
    variant = "shimmer",
    size = "md",
    disabled = false,
    onClick,
    className = "",
    style,
    type = "button",
    fullWidth = false,
}: AnimatedButtonProps) {
    const btnRef = useRef<HTMLButtonElement>(null);
    const rippleRef = useRef<HTMLSpanElement>(null);

    const handleRipple = (e: MouseEvent<HTMLButtonElement>) => {
        if (variant !== "ripple" || !btnRef.current || !rippleRef.current) return;

        const btn = btnRef.current;
        const ripple = rippleRef.current;
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        ripple.classList.remove("animate-ripple");
        void ripple.offsetWidth;
        ripple.classList.add("animate-ripple");
    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        handleRipple(e);
        onClick?.(e);
    };

    const base = `animated-btn relative inline-flex items-center justify-center font-semibold tracking-tight overflow-hidden rounded-xl cursor-pointer select-none transition-transform duration-150 active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none ${fullWidth ? "w-full" : ""} ${sizeMap[size]} ${className}`;

    return (
        <>
            <style>{`
        .animated-btn { outline: none; border: none; }

        /* SHIMMER */
        .btn-shimmer {
          background: #0ea5e9;
          color: #fff;
          box-shadow: 0 0 20px rgba(14,165,233,0.35), 0 2px 8px rgba(0,0,0,0.4);
        }
        .btn-shimmer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(255,255,255,0.55) 50%,
            transparent 70%
          );
          transform: translateX(-100%);
          animation: shimmer-slide 2.4s ease-in-out infinite;
        }
        .btn-shimmer:hover {
          box-shadow: 0 0 30px rgba(14,165,233,0.6), 0 4px 16px rgba(0,0,0,0.5);
        }
        @keyframes shimmer-slide {
          0%   { transform: translateX(-120%); }
          60%  { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }

        /* GLOW */
        .btn-glow {
          background: transparent;
          color: #0ea5e9;
          border: 1.5px solid rgba(14,165,233,0.5);
          box-shadow: 0 0 10px rgba(14,165,233,0.2) inset;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .btn-glow:hover {
          background: rgba(14,165,233,0.12);
          border-color: #0ea5e9;
          box-shadow: 0 0 24px rgba(14,165,233,0.55), 0 0 8px rgba(14,165,233,0.3) inset;
          animation: none;
          color: #fff;
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 8px rgba(14,165,233,0.2) inset, 0 0 6px rgba(14,165,233,0.15); }
          50%       { box-shadow: 0 0 18px rgba(14,165,233,0.45) inset, 0 0 18px rgba(14,165,233,0.4); }
        }

        /* PULSE */
        .btn-pulse {
          background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%);
          color: #fff;
          box-shadow: 0 0 0 0 rgba(14,165,233,0.7);
          animation: pulse-ring 2s ease-out infinite;
        }
        .btn-pulse:hover { animation: none; box-shadow: 0 0 0 6px rgba(14,165,233,0); }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(14,165,233,0.65); }
          70%  { box-shadow: 0 0 0 10px rgba(14,165,233,0); }
          100% { box-shadow: 0 0 0 0 rgba(14,165,233,0); }
        }

        /* RIPPLE */
        .btn-ripple {
          background: #18181b;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.08);
        }
        .btn-ripple:hover { background: #27272a; }
        .ripple-dot {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          pointer-events: none;
          transform: scale(0);
          opacity: 1;
        }
        .animate-ripple {
          animation: ripple-expand 0.55s linear forwards;
        }
        @keyframes ripple-expand {
          to { transform: scale(1); opacity: 0; }
        }
      `}</style>

            <button
                ref={btnRef}
                type={type}
                disabled={disabled}
                onClick={handleClick}
                style={style}
                className={`${base} btn-${variant}`}
            >
                {variant === "ripple" && (
                    <span ref={rippleRef} className="ripple-dot" />
                )}
                <span className="relative z-10 flex items-center gap-2">{children}</span>
            </button>
        </>
    );
}
