"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface MouseTrackerProps {
  children?: React.ReactNode;
  className?: string;
  /** Diameter of the tracking ball in pixels */
  size?: number;
  /** Fill color of the ball (any valid CSS color) */
  color?: string;
  /** Optional border color around the ball */
  borderColor?: string;
  /** Border width in pixels */
  borderWidth?: number;
  /** Blur radius for the glow effect in pixels */
  blur?: number;
  /** GSAP easing name, e.g. "power3.out" */
  ease?: string;
  /** Animation duration in seconds */
  duration?: number;
  /** CSS mix-blend-mode value */
  mixBlendMode?: React.CSSProperties["mixBlendMode"];
  /** Enable trail effect */
  trail?: boolean;
  /** Number of trail elements */
  trailCount?: number;
  /** Enable scale effect on hover */
  scaleOnHover?: boolean;
  /** Scale multiplier on hover */
  hoverScale?: number;
}

export function MouseTracker({
  children,
  className = "",
  size = 24,
  color = "rgba(255, 215, 150, 0.9)",
  borderColor = "rgba(255, 255, 255, 0.95)",
  borderWidth = 1.5,
  blur = 32,
  ease = "power4.out",
  duration = 0.35,
  mixBlendMode = "screen",
  trail = true,
  trailCount = 5,
  scaleOnHover = true,
  hoverScale = 2.5,
}: MouseTrackerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const dot = dotRef.current;
    if (!container || !dot) return;

    let isInside = false;
    let currentScale = 1;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const isOver =
        x >= -50 && y >= -50 && x <= rect.width + 50 && y <= rect.height + 50;

      if (!isOver) {
        if (isInside) {
          isInside = false;
          gsap.to([dot, ...trailRefs.current.filter(Boolean)], {
            opacity: 0,
            scale: 0,
            duration: 0.4,
            ease: "power3.inOut",
            stagger: 0.02,
          });
        }
        return;
      }

      mousePosition.current = { x, y };

      if (!isInside) {
        isInside = true;
        gsap.set([dot, ...trailRefs.current.filter(Boolean)], { opacity: 1 });
        gsap.fromTo(
          [dot, ...trailRefs.current.filter(Boolean)],
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.05,
          }
        );
      }

      // Smooth animation using requestAnimationFrame
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const { x, y } = mousePosition.current;

        const clampedX = Math.min(
          rect.width - size / 2,
          Math.max(size / 2, x)
        );
        const clampedY = Math.min(
          rect.height - size / 2,
          Math.max(size / 2, y)
        );

        const targetX = clampedX - size / 2;
        const targetY = clampedY - size / 2;

        // Animate main dot
        gsap.to(dot, {
          x: targetX,
          y: targetY,
          scale: scaleOnHover && isHovering ? hoverScale : 1,
          duration,
          ease,
        });

        // Animate trail elements
        if (trail) {
          trailRefs.current.forEach((trailDot, index) => {
            if (!trailDot) return;

            const delay = (index + 1) * 0.03;
            const trailX = targetX - (targetX - mousePosition.current.x) * (index + 1) * 0.15;
            const trailY = targetY - (targetY - mousePosition.current.y) * (index + 1) * 0.15;

            gsap.to(trailDot, {
              x: trailX,
              y: trailY,
              scale: scaleOnHover && isHovering ? hoverScale * (1 - index * 0.15) : 1 - index * 0.15,
              opacity: 1 - index * 0.15,
              duration: duration + index * 0.05,
              ease,
            });
          });
        }
      });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Add hover listeners to interactive elements
    const interactiveElements = container.querySelectorAll('button, a, input, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [size, duration, ease, scaleOnHover, hoverScale, trail, trailCount]);

  // Create gradient colors for trail
  const getTrailColor = (index: number) => {
    const opacity = 1 - index * 0.15;
    return color.replace(/[^,]+(?=\))/, opacity.toString());
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-none ${className}`}
    >
      {/* Trail elements */}
      {trail &&
        Array.from({ length: trailCount }).map((_, index) => (
          <div
            key={`trail-${index}`}
            ref={(el) => {
              trailRefs.current[index] = el;
            }}
            className="pointer-events-none rounded-full"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: size * (1 - index * 0.1),
              height: size * (1 - index * 0.1),
              background: getTrailColor(index),
              border: `${borderWidth * 0.5}px solid ${borderColor}`,
              boxShadow: blur
                ? `0 0 ${blur * (1 - index * 0.2)}px ${blur / 3
                }px ${color}`
                : undefined,
              opacity: 0,
              transform: "translate3d(0, 0, 0)",
              mixBlendMode,
              filter: `blur(${index * 1}px)`,
              transition: "background 0.3s ease",
            }}
          />
        ))}

      {/* Main dot */}
      <div
        ref={dotRef}
        className="pointer-events-none rounded-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: size,
          height: size,
          background: `radial-gradient(circle at 30% 30%, ${color}, ${color}dd)`,
          border: `${borderWidth}px solid ${borderColor}`,
          boxShadow: blur
            ? `0 0 ${blur}px ${blur / 3}px ${color}, 0 0 ${blur * 2}px ${blur / 4
            }px rgba(255, 255, 255, 0.3)`
            : undefined,
          opacity: 0,
          transform: "translate3d(0, 0, 0)",
          mixBlendMode,
          backdropFilter: "blur(2px)",
          transition: "background 0.3s ease",
        }}
      />

      {/* Content with custom cursor hidden */}
      <div className="relative z-10 h-full w-full [&_button]:cursor-none [&_a]:cursor-none [&_input]:cursor-none">
        {children}
      </div>
    </div>
  );
}