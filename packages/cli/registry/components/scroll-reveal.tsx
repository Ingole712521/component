"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  yOffset?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  active?: boolean;
  scrub?: boolean | number;
}

export function ScrollReveal({
  lines,
  className = "",
  lineClassName = "",
  yOffset = 32,
  duration = 0.7,
  ease = "power3.out",
  stagger = 0.12,
  active = true,
  scrub = true,
}: ScrollRevealProps) {
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const elements = itemsRef.current.filter(Boolean);
    if (!elements.length) return;

    const wordSpans: HTMLElement[] = [];
    elements.forEach((lineEl) => {
      const spans = lineEl.querySelectorAll<HTMLElement>(".scroll-reveal-word");
      spans.forEach((span) => wordSpans.push(span));
    });

    if (!wordSpans.length) return;

    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === containerRef.current) {
        trigger.kill();
      }
    });

    gsap.set(wordSpans, {
      opacity: 0,
      filter: "blur(10px)",
      y: yOffset,
    });

    if (!active) return;

    const ctx = gsap.context(() => {
      const scrollerEl = containerRef.current?.closest(
        ".overflow-y-scroll"
      ) as HTMLElement | null;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scrollerEl || window,
          start: "top 85%",
          end: "top 25%",
          scrub: scrub,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        wordSpans,
        {
          opacity: 0,
          filter: "blur(10px)",
          y: yOffset,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: duration ?? 1,
          ease: ease,
          stagger: stagger,
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [duration, ease, yOffset, stagger, active, scrub, lines]);

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <div
          key={`${line}-${index}`}
          ref={(el) => {
            if (el) {
              itemsRef.current[index] = el;
            }
          }}
          className={`will-change-transform ${lineClassName}`}
        >
          {line.split(" ").map((word, i) => (
            <span
              key={`${index}-${i}-${word}`}
              className="scroll-reveal-word inline-block mr-[0.25em]"
            >
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

