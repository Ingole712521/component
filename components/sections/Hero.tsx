"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroStage from "@/components/sections/HeroStage";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center">
      <div className="page-container-wide w-full pt-6 pb-16 lg:pt-8 lg:pb-20">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <h1 className="display-xl mb-5">Copy motion-ready UI into your stack</h1>
            <p className="body-lg mb-8">
              React components with GSAP and Framer Motion built in. Install via CLI and own every line.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/docs" className="btn-primary">
                Get started
                <span className="btn-primary-icon">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="https://github.com/Ingole712521/component"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reduce ? 0 : 0.08, ease: [0.32, 0.72, 0, 1] }}
          >
            <HeroStage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
