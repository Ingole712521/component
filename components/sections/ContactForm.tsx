"use client";

import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";

export default function ContactForm() {
    return (
        <section id="contact" className="relative py-32 bg-zinc-950/30 border-t border-white/5 scroll-mt-32">
            <div className="page-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-heading mb-8">Get in Touch</h2>
                        <p className="section-subtitle mb-12 max-w-md">
                            Have questions or need custom solutions? Reach out directly via email or explore my work through my portfolio.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-zinc-500 uppercase tracking-widest">Email</h4>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&to=nehalingole2001@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-bold text-white hover:text-accent transition-colors"
                                    >
                                        nehalingole2001@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-zinc-500 uppercase tracking-widest">Portfolio</h4>
                                    <a
                                        href="https://nehalingole.in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-bold text-white hover:text-accent transition-colors"
                                    >
                                        nehalingole.in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side preview card (no form) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:block p-6 md:p-8 glass-panel rounded-[40px] border-white/5 shadow-2xl bg-zinc-950/60"
                    >
                        <div className="flex flex-col h-full space-y-4">
                            <div className="flex items-baseline justify-between gap-4">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500 mb-2">
                                        Portfolio Preview
                                    </p>
                                    <p className="text-sm text-zinc-500">
                                        A live peek of{" "}
                                        <span className="text-zinc-200 font-medium">nehalingole.in</span>.
                                    </p>
                                </div>
                                <a
                                    href="https://nehalingole.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-medium text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
                                >
                                    Open site
                                </a>
                            </div>

                            <div className="mt-3 rounded-3xl border border-white/10 overflow-hidden bg-black/60 h-[360px] flex items-start justify-center">
                                <div className="relative origin-top scale-[0.45] w-[1440px] h-[900px] pointer-events-none">
                                    <iframe
                                        src="https://nehalingole.in"
                                        title="Nehal Ingole Portfolio Preview"
                                        className="w-full h-full border-0 rounded-[32px] shadow-2xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
