"use client";

import React from "react";
import { Motion3DButtonProps } from "./types";
import styles from "./styles.module.css";

export const Motion3DButton: React.FC<Motion3DButtonProps> = ({
  children,
  variant = "lift",
  color = "blue",
  size = "md",
  onClick,
  className = "",
  disabled = false,
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const colorVariants = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-red-500",
    red: "from-red-600 to-rose-600",
  };

  const variantStyles = {
    lift: styles.lift3d,
    press: styles.press3d,
    slide: styles.slide3d,
    flip: styles.flip3d,
    glow: styles.glow3d,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${styles.button3d}
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
