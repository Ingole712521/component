"use client";

import { motion } from "framer-motion";
import { Users, Target, Eye, Award } from "lucide-react";

const stats = [
    { label: "Founded", value: "2024" },
    { label: "Team Members", value: "10+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Global Clients", value: "20+" },
];

export default function About() {
    return (
        <div className="bg-black text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 gradient-text">Our Story</h1>
                    <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        We are a team of visionaries, engineers, and designers dedicated to pushing the boundaries of what's possible in the digital realm.
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800"
                    >
                        <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                            <Target className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-zinc-500 leading-relaxed">
                            To empower startups with the technological foundations they need to scale rapidly and sustainably in a competitive global market.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800"
                    >
                        <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                            <Eye className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-zinc-500 leading-relaxed">
                            To be the world's most trusted partner for digital innovation, recognized for our commitment to excellence and transformative impact.
                        </p>
                    </motion.div>
                </div>

                {/* Founder Section */}
                <div className="relative rounded-[40px] overflow-hidden bg-zinc-900/30 border border-zinc-800 p-8 md:p-16 mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-square rounded-3xl bg-gradient-to-br from-zinc-800 to-black border border-zinc-700 flex items-center justify-center text-zinc-500 italic"
                        >
                            [Founder Image Nehal Ingole]
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Meet the Founder</h2>
                            <h3 className="text-xl text-accent font-semibold mb-4">Nehal Ingole</h3>
                            <p className="text-zinc-400 leading-relaxed mb-8">
                                With a passion for building seamless digital experiences, Nehal founded STARTUP. to bridge the gap between complex engineering and elegant design. His vision drives our commitment to delivering only the best for our clients.
                            </p>
                            <div className="flex items-center gap-4 py-4 border-t border-zinc-800">
                                <Award className="h-6 w-6 text-accent" />
                                <span className="text-zinc-300 font-medium">10+ Years of Industry Excellence</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-8 rounded-2xl bg-zinc-950 border border-zinc-900"
                        >
                            <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
