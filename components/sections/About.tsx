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
                    start: "top center",
                    end: "center center",
                    scrub: 2, // Even slower for maximum "cinematic" feel
                },
            });

            tl.fromTo(
                "h2",
                { opacity: 0, y: 40, filter: "blur(10px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }
            ).fromTo(
                "p",
                { opacity: 0, y: 30, filter: "blur(8px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
                "-=0.5"
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="about" className="relative h-[120vh] bg-black overflow-hidden">
            <div className="sticky top-0 h-screen flex items-center justify-center px-4 overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full scale-150 -z-10" />

                <div ref={textRef} className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tighter gradient-heading leading-[1]">
                        The developer's secret weapon.
                    </h2>
                    <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
                     Progress isn't just another component library. It's a comprehensive design system focused on high-end animations and seamless user experiences. We take care of the complex math and physics so you can focus on building your product.
                    </p>
                </div>
            </div>
        </section>
    );
}
