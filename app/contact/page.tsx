"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Globe } from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        title: "Email",
        value: "nehalingole2001@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&to=nehalingole2001@gmail.com",
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        value: "nehal-ingole",
        href: "https://www.linkedin.com/in/nehal-ingole/",
    },
    {
        icon: Globe,
        title: "Portfolio",
        value: "nehalingole.in",
        href: "https://nehalingole.in",
    },
];

export default function Contact() {
    return (
        <div className="bg-black text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 gradient-text">Get in Touch</h1>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        You can reach me directly by email or explore my work on my portfolio. No forms, just quick links.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={method.title}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-accent/40 group transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                <method.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{method.title}</h3>
                                <p className="text-lg font-medium text-white">{method.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
