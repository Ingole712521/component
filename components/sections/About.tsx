"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
        .fromTo(
          "[data-about-title]",
          { opacity: 0, y: 40, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }
        )
        .fromTo(
          "[data-about-body]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.35"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative py-28 md:py-36 scroll-mt-32 border-y border-white/5">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center">
          <p data-about-title className="section-eyebrow mb-6">About the library</p>
          <h2 data-about-title className="section-heading lg:text-7xl mb-8 leading-[1.05]">
            Built for developers who care about craft.
          </h2>
          <p data-about-body className="section-subtitle max-w-2xl mx-auto">
            Animioui UI is a copy-paste component system — not a black-box npm package. You own
            the code, customize every animation, and ship without fighting your design system.
          </p>
        </div>
      </div>
    </section>
  );
}
