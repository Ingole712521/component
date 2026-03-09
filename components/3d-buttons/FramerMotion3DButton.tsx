"use client";

import React, { useState } from "react";
import { FramerMotion3DButtonProps } from "./types";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

export const FramerMotion3DButton: React.FC<FramerMotion3DButtonProps> = ({
  children,
  variant = "spring",
  color = "blue",
  size = "md",
  onClick,
  className = "",
  disabled = false,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const colorVariants = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-red-500",
    red: "from-red-600 to-rose-600",
  };

  const springVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -8 },
    press: { scale: 0.95, y: -4 },
  };

  const depthVariants = {
    initial: { translateZ: 0 },
    hover: { translateZ: 20 },
    press: { translateZ: 10 },
  };

  const rotateVariants = {
    initial: { rotateX: 0, rotateY: 0 },
    hover: { rotateX: -15, rotateY: 10 },
    press: { rotateX: -5, rotateY: 5 },
  };

  const getVariants = () => {
    switch (variant) {
      case "spring":
        return springVariants;
      case "depth":
        return depthVariants;
      case "rotate":
        return rotateVariants;
      default:
        return springVariants;
    }
  };

  const variants = getVariants();

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      initial="initial"
      animate={isPressed ? "press" : isHovered ? "hover" : "initial"}
      variants={variants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
      disabled={disabled}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
        mass: 0.5,
      }}
      className={`
        ${styles.motionButton3d}
        bg-gradient-to-br
        ${colorVariants[color]}
        ${sizeClasses[size]}
        ${className}
        ${disabled ? styles.disabled : ""}
      `}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <span className={styles.buttonContent}>{children}</span>
      <span className={styles.button3dLayer}></span>
    </motion.button>
  );
};
