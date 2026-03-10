"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            tl.fromTo(
                "h2",
                { opacity: 0, y: 40, filter: "blur(10px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }
            ).fromTo(
                "p",
                { opacity: 0, y: 30, filter: "blur(8px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
                "-=0.4"
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="about"
            className="relative bg-black overflow-hidden py-32 scroll-mt-32"
        >
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full scale-150 -z-10" />

            <div className="page-container">
                <div
                    ref={textRef}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="section-heading lg:text-7xl mb-8 leading-none">
                        The developer's secret weapon.
                    </h2>
                    <p className="section-subtitle max-w-3xl mx-auto font-medium">
                    Animioui UI isn't just another component library. It's a comprehensive design system focused on high-end animations and seamless user experiences. We take care of the complex math and physics so you can focus on building your product.
                    </p>
                </div>
            </div>
        </section>
    );
}
