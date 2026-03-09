"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ThreeDImageRingProps {
  images: string[];
  width?: number;
  containerClassName?: string;
  imageClassName?: string;
  backgroundColor?: string;
  /** Duration (seconds) for one full orbit */
  orbitDuration?: number;
}

export function ThreeDImageRing({
  images,
  width = 260,
  containerClassName,
  imageClassName,
  backgroundColor,
  orbitDuration = 18,
}: ThreeDImageRingProps) {
  const angle = useMemo(() => 360 / images.length, [images.length]);
  const radius = width / 2;
  const avatarSize = 72;

  return (
    <div
      className={cn(
        "absolute w-full h-full select-none flex items-center  justify-center",
        containerClassName
      )}
      style={{
        backgroundColor,
        transformOrigin: "center center",
      }}
    >
      <motion.div
        className="relative"
        style={{
          width,
          height: width,
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: orbitDuration, ease: "linear" }}
      >
        {images.map((imageUrl, index) => {
          const theta = index * angle;
          return (
            <div
              key={index}
              className={cn(
                "absolute rounded-full overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.35)]",
                imageClassName
              )}
              style={{
                width: avatarSize,
                height: avatarSize,
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${theta}deg) translate(${radius}px, 0) rotate(${-theta}deg)`,
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default ThreeDImageRing;

