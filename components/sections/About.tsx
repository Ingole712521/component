"use client";

import { Reveal } from "@/components/motion/Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-white/8 scroll-mt-24">
      <div className="page-container py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="section-label mb-4">About</p>
          <h2 className="section-heading mb-5">
            Built for developers who{" "}
            <span className="gradient-text">ship with confidence</span>
          </h2>
          <p className="section-subtitle">
            Animioui UI is not a dependency you fight with. It is a set of components you
            copy into your project — typed, animated, and easy to adapt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
