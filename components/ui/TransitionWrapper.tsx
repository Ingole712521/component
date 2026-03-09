"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { TransitionRouter } from "next-transition-router";
import gsap from "gsap";
// @ts-ignore
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

type Props = {
  children: ReactNode;
};

export default function TransitionWrapper({ children }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (pathRef.current) {
      gsap.set(pathRef.current, {
        drawSVG: "0%",
        strokeWidth: 2,
      });
    }
  }, []);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        const tl = gsap.timeline({ onComplete: next });

        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.5,
        }).to(
          pathRef.current,
          {
            drawSVG: "100%",
            strokeWidth: 300,
            duration: 1.5,
          },
          0
        );

        return () => tl.kill();
      }}
      enter={(next) => {
        const tl = gsap.timeline({ onComplete: next });

        tl.to(pathRef.current, {
          drawSVG: "100% 100%",
          strokeWidth: 2,
          duration: 1.5,
        })
          .to(
            overlayRef.current,
            {
              opacity: 0,
              duration: 0.5,
            },
            1
          )
          .set(pathRef.current, {
            drawSVG: "0%",
            strokeWidth: 2,
          });

        return () => tl.kill();
      }}
    >
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1316 664" fill="none">
          <path
            ref={pathRef}
            d="M13.4746 291.27C13.4746 291.27 100.646 -18.6724 255.617 16.8418C410.588 52.356 61.0296 431.197 233.017 546.326C431.659 679.299 444.494 21.0125 652.73 100.784C860.967 180.556 468.663 430.709 617.216 546.326C765.769 661.944 819.097 48.2722 988.501 120.156C1174.21 198.957 809.424 543.841 988.501 636.726C1189.37 740.915 1301.67 149.213 1301.67 149.213"
            stroke="#82A0FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {children}
    </TransitionRouter>
  );
}

