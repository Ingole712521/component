"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative py-24 px-4 bg-zinc-950/20">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight gradient-heading">
                        The developer's secret weapon.
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        UI_LIB isn't just another component library. It's a comprehensive design system focused on high-end animations and seamless user experiences. We take care of the complex math and physics so you can focus on building your product.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
