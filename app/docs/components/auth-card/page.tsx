"use client";

import { CopyButton } from "../../_components/copy-button";


import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { AuthCard } from "@/components/ui/auth-card";

export default function AuthCardPage() {
    return (
      <div className="doc-stack">
      <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium"><span>GSAP</span><ChevronRight className="w-4 h-4" /><span className="text-white">Auth Card</span></div>
                                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Auth Card</h1>
                                      <p className="text-zinc-400 max-w-xl">Complete sign-in/sign-up card with social login (Google, GitHub, Twitter), 3D effects, rotating border, and GSAP animations.</p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code="npx @nehal712521/inprogress add auth-card" />
                                          <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent-secondary">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">auth-card</span></div>
                                      </div>
                                      <p className="text-sm text-zinc-500">Requires: <code className="text-accent-secondary bg-accent/10 px-1.5 py-0.5 rounded">gsap</code>, <code className="text-accent-secondary bg-accent/10 px-1.5 py-0.5 rounded">lucide-react</code></p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex items-center justify-center">
                                          <AuthCard
                                              onSignIn={(data) => console.log("Sign in:", data)}
                                              onSignUp={(data) => console.log("Sign up:", data)}
                                              onSocialLogin={(provider) => console.log("Social login:", provider)}
                                          />
                                      </div>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Usage</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code={`import { AuthCard } from "@/components/ui/auth-card";

      <AuthCard 
        onSignIn={(data) => console.log("Sign in:", data)}
        onSignUp={(data) => console.log("Sign up:", data)}
        onSocialLogin={(provider) => console.log("Social:", provider)}
      />`} />
                                          <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto"><code>{`import { AuthCard } from "@/components/ui/auth-card";

      <AuthCard 
        onSignIn={(data) => console.log("Sign in:", data)}
        onSignUp={(data) => console.log("Sign up:", data)}
        onSocialLogin={(provider) => console.log("Social:", provider)}
      />`}</code></pre>
                                      </div>
                                  </div>
      </div>
    );
  }
