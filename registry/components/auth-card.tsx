"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Mail, Lock, User, Eye, EyeOff, Github, Chrome, Twitter } from "lucide-react";

interface AuthCardProps {
    onSignIn?: (data: { email: string; password: string }) => void;
    onSignUp?: (data: { name: string; email: string; password: string }) => void;
    onSocialLogin?: (provider: "google" | "github" | "twitter") => void;
    className?: string;
}

export function AuthCard({
    onSignIn,
    onSignUp,
    onSocialLogin,
    className = "",
}: AuthCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        const card = cardRef.current;
        const glow = glowRef.current;
        if (!card || !glow) return;

        // Entry animation
        gsap.fromTo(
            card,
            { opacity: 0, y: 50, rotateX: -15 },
            { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: "power3.out" }
        );

        // Continuous glow pulse
        gsap.to(glow, {
            opacity: 0.6,
            scale: 1.5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    // Toggle animation between sign in and sign up
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        gsap.to(card, {
            rotateY: isSignUp ? 5 : -5,
            duration: 0.3,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
        });
    }, [isSignUp]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        const glow = glowRef.current;
        if (!card || !glow) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(glow, {
            x: x - rect.width / 2,
            y: y - rect.height / 2,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isSignUp) {
            onSignUp?.(formData);
        } else {
            onSignIn?.({ email: formData.email, password: formData.password });
        }
    };

    const inputClasses = `
        w-full px-4 py-3 rounded-xl
        bg-zinc-800/50 border border-zinc-700
        text-white placeholder-zinc-500
        focus:outline-none focus:border-sky-500/50
        transition-all duration-300
        focus:shadow-[0_0_20px_rgba(14,165,233,0.2)]
    `;

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`
                relative w-full max-w-md p-8 rounded-2xl
                bg-zinc-900/90 border border-zinc-800
                overflow-hidden
                ${className}
            `}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
            {/* Animated glow */}
            <div
                ref={glowRef}
                className="absolute w-96 h-96 rounded-full blur-3xl opacity-0 pointer-events-none -z-10"
                style={{
                    background: "radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)",
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Rotating border */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-[-100%] animate-[spin_4s_linear_infinite]"
                    style={{
                        background: "conic-gradient(from 0deg, transparent, rgba(14, 165, 233, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent)",
                    }}
                />
                <div className="absolute inset-[1px] rounded-2xl bg-zinc-900/90" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        {isSignUp ? "Create Account" : "Welcome Back"}
                    </h2>
                    <p className="text-zinc-400">
                        {isSignUp
                            ? "Sign up to get started with our platform"
                            : "Sign in to continue to your account"}
                    </p>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    <button
                        type="button"
                        onClick={() => onSocialLogin?.("google")}
                        className="flex items-center justify-center p-3 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 group"
                    >
                        <Chrome className="w-5 h-5 text-zinc-400 group-hover:text-red-400 transition-colors" />
                    </button>
                    <button
                        type="button"
                        onClick={() => onSocialLogin?.("github")}
                        className="flex items-center justify-center p-3 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-white/50 hover:bg-white/10 transition-all duration-300 group"
                    >
                        <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    </button>
                    <button
                        type="button"
                        onClick={() => onSocialLogin?.("twitter")}
                        className="flex items-center justify-center p-3 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-300 group"
                    >
                        <Twitter className="w-5 h-5 text-zinc-400 group-hover:text-sky-400 transition-colors" />
                    </button>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-zinc-800" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 bg-zinc-900/90 text-zinc-500 text-sm">
                            Or continue with
                        </span>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {isSignUp && (
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className={`${inputClasses} pl-12`}
                                required
                            />
                        </div>
                    )}

                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className={`${inputClasses} pl-12`}
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                            className={`${inputClasses} pl-12 pr-12`}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {!isSignUp && (
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="text-sm text-sky-400 hover:text-sky-300 transition-colors"
                            >
                                Forgot password?
                            </button>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                        {isSignUp ? "Create Account" : "Sign In"}
                    </button>
                </form>

                {/* Toggle */}
                <p className="mt-6 text-center text-zinc-400">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button
                        type="button"
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                    >
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </p>
            </div>
        </div>
    );
}
