"use client";

import React, { useRef, useState, MouseEvent } from "react";

interface Ripple {
    x: number;
    y: number;
    id: number;
}

export interface RippleButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    /**
     * The background color of the button.
     */
    buttonColor?: string;
    /**
     * The text color of the button.
     */
    textColor?: string;
    /**
     * The color of the ripple effect rings.
     */
    rippleColor?: string;
    className?: string;
}

export function RippleButton({
    children,
    buttonColor = "#18181b", // zinc-900
    textColor = "#ffffff",
    rippleColor = "rgba(255, 255, 255, 0.3)",
    className = "",
    onClick,
    style,
    ...props
}: RippleButtonProps) {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Add a new ripple to the state
        const newRipple: Ripple = { x, y, id: Date.now() };
        setRipples((prev) => [...prev, newRipple]);

        if (onClick) {
            onClick(e);
        }
    };

    const handleAnimationEnd = (id: number) => {
        // Remove the ripple once its animation finishes
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    };

    return (
        <>
            <style>{`
        .ripple-button-wrapper {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.15s ease-out;
        }

        .ripple-button-wrapper:active {
          transform: scale(0.96);
        }

        .ripple-ring {
          position: absolute;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          pointer-events: none;
        }

        /* 3 concentric rings layered */
        .ripple-ring-1 {
          animation: ripple-spread 0.8s ease-out forwards;
        }
        .ripple-ring-2 {
          animation: ripple-spread 0.8s ease-out 0.15s forwards;
        }
        .ripple-ring-3 {
          animation: ripple-spread 0.8s ease-out 0.3s forwards;
        }

        @keyframes ripple-spread {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
            border-width: 8px;
          }
          100% {
            transform: translate(-50%, -50%) scale(25);
            opacity: 0;
            border-width: 0px;
          }
        }
      `}</style>
            <button
                ref={buttonRef}
                onClick={handleClick}
                className={`ripple-button-wrapper px-8 py-4 font-semibold rounded-2xl ${className}`}
                style={{
                    ...style,
                    backgroundColor: buttonColor,
                    color: textColor,
                }}
                {...props}
            >
                <div className="relative z-10">{children}</div>

                {/* Render active ripples */}
                {ripples.map((ripple) => (
                    <React.Fragment key={ripple.id}>
                        {/* The 3 rings of the waveform */}
                        <span
                            className="ripple-ring ripple-ring-1"
                            style={{
                                left: ripple.x,
                                top: ripple.y,
                                width: 20,
                                height: 20,
                                borderStyle: "solid",
                                borderColor: rippleColor,
                            }}
                            onAnimationEnd={() => handleAnimationEnd(ripple.id)}
                        />
                        <span
                            className="ripple-ring ripple-ring-2"
                            style={{
                                left: ripple.x,
                                top: ripple.y,
                                width: 20,
                                height: 20,
                                borderStyle: "solid",
                                borderColor: rippleColor,
                            }}
                        />
                        <span
                            className="ripple-ring ripple-ring-3"
                            style={{
                                left: ripple.x,
                                top: ripple.y,
                                width: 20,
                                height: 20,
                                borderStyle: "solid",
                                borderColor: rippleColor,
                            }}
                        />
                    </React.Fragment>
                ))}
            </button>
        </>
    );
}
