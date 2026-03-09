"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { GSAP3DButtonProps } from "./types";
import styles from "./styles.module.css";

export const GSAP3DButton: React.FC<GSAP3DButtonProps> = ({
  children,
  variant = "cube",
  color = "blue",
  size = "md",
  onClick,
  className = "",
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // GSAP 3D animations on hover
    const handleMouseEnter = () => {
      gsap.to(button, {
        rotateX: -10,
        rotateY: 5,
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
      });
    };

    const handleMouseUp = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)",
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

  const colorVariants = {
    blue: "from-blue-500 to-cyan-600",
    purple: "from-purple-600 to-indigo-600",
    green: "from-green-500 to-teal-600",
    orange: "from-orange-500 to-amber-600",
    red: "from-red-600 to-rose-700",
  };

  const variantStyles = {
    cube: styles.cube3d,
    neon: styles.neon3d,
    isometric: styles.isometric3d,
    extruded: styles.extruded3d,
  };

  const sizeClasses = {
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
        ${styles.gsapButton3d}
        ${variantStyles[variant]}
        ${colorVariants[color]}
        ${sizeClasses[size]}
        ${className}
        ${disabled ? styles.disabled : ""}
      `}
    >
      <span className={styles.buttonContent}>{children}</span>
      <span className={styles.button3dLayer}></span>
    </button>
  );
};
