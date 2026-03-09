"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Globe } from "lucide-react";

export default function ContactForm() {
    return (
        <section id="contact" className="relative py-32 bg-zinc-950/30 border-t border-white/5 scroll-mt-32">
            <div className="page-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-heading mb-8">Get in Touch</h2>
                        <p className="section-subtitle mb-12 max-w-md">
                            Have questions or need custom solutions? Our core team is ready to help you integrate In Progress into your workflow.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-zinc-500 uppercase tracking-widest">Email</h4>
                                    <p className="text-lg font-bold text-white">nehalingole2001@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-zinc-500 uppercase tracking-widest">Office</h4>
                                    <p className="text-lg font-bold text-white">Pune</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 glass-panel rounded-[40px] border-white/5 shadow-2xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-zinc-500 uppercase tracking-widest ml-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all text-white placeholder-zinc-700"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all text-white placeholder-zinc-700"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 h-40 focus:outline-none focus:border-accent transition-all text-white resize-none placeholder-zinc-700"
                                    placeholder="Tell us about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-white text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all text-lg shadow-xl shadow-white/5"
                            >
                                Send Message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
