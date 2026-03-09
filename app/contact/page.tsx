"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Globe, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactMethods = [
    {
        icon: Mail,
        title: "Email",
        value: "nehalingole2001@gmail.com",
        href: "mailto:nehalingole2001@gmail.com",
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
        value: "nehal-ingole.vercel.app",
        href: "https://nehal-ingole.vercel.app/",
    },
];

const EMAILJS_SERVICE_ID = "service_wjmp58y";
const EMAILJS_TEMPLATE_ID = "template_ag3pbpm";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as
    | string
    | undefined;

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setErrorMessage("Please fill in your name, email, and message.");
            setStatus("error");
            return;
        }

        if (!EMAILJS_PUBLIC_KEY) {
            setErrorMessage("Email service is not configured correctly. Please try again later.");
            setStatus("error");
            return;
        }

        setStatus("sending");
        setErrorMessage("");

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    email,
                    subject,
                    message,
                    to_email: "nehalingole2001@gmail.com",
                },
                EMAILJS_PUBLIC_KEY,
            );

            setStatus("success");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (err) {
            console.error("EmailJS error", err);
            setStatus("error");
            setErrorMessage("Something went wrong while sending. Please try again.");
        }
    };

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
                        Ready to take your startup to the next level? Reach out to us and let's build something extraordinary together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.title}
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
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

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-2 p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                                        placeholder="john@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                                    placeholder="How can we help?"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Message</label>
                                <textarea
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 h-40 focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Your message here..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full bg-white text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                                <Send className="h-5 w-5" />
                            </button>
                            {status === "success" && (
                                <p className="text-sm text-emerald-400 mt-2">
                                    Thank you! Your message has been sent. Please check your email for confirmation.
                                </p>
                            )}
                            {status === "error" && errorMessage && (
                                <p className="text-sm text-red-400 mt-2">{errorMessage}</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
