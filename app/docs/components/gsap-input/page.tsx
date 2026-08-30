"use client";

import { CopyButton } from "../../_components/copy-button";


import { useState } from "react";
import { ChevronRight, Copy, Check, Mail } from "lucide-react";
import Link from "next/link";
import { GSAPInput } from "@/components/ui/gsap-input";

export default function GSAPInputPage() {
    const [value, setValue] = useState("");
    return (
      <div className="doc-stack">
      <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium"><span>GSAP</span><ChevronRight className="w-4 h-4" /><span className="text-white">GSAP Input</span></div>
                                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">GSAP Input</h1>
                                      <p className="text-zinc-400 max-w-xl">Animated input with gradient border reveal on focus and smooth entry animations using GSAP.</p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code="npx @nehal712521/inprogress add gsap-input" />
                                          <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent-secondary">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">gsap-input</span></div>
                                      </div>
                                      <p className="text-sm text-zinc-500">Requires: <code className="text-accent-secondary bg-accent/10 px-1.5 py-0.5 rounded">gsap</code></p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex flex-col items-center justify-center gap-6">
                                          <GSAPInput label="Email" placeholder="Enter your email" value={value} onChange={setValue} icon={<Mail className="w-5 h-5" />} className="w-full max-w-sm" />
                                          <GSAPInput label="Password" type="password" placeholder="Enter your password" className="w-full max-w-sm" />
                                      </div>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Usage</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code={`import { GSAPInput } from "@/components/ui/gsap-input";
      import { Mail } from "lucide-react";

      <GSAPInput 
        label="Email"
        placeholder="Enter your email"
        icon={<Mail className="w-5 h-5" />}
        value={value}
        onChange={setValue}
      />`} />
                                          <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto"><code>{`import { GSAPInput } from "@/components/ui/gsap-input";
      import { Mail } from "lucide-react";

      <GSAPInput 
        label="Email"
        placeholder="Enter your email"
        icon={<Mail className="w-5 h-5" />}
        value={value}
        onChange={setValue}
      />`}</code></pre>
                                      </div>
                                  </div>
      </div>
    );
  }
