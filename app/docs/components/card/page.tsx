"use client";

import { CopyButton } from "../../_components/copy-button";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function CardPage() {
    return (
      <div className="doc-stack">
      <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium"><span>Components</span><ChevronRight className="w-4 h-4" /><span className="text-white">Card</span></div>
                                      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Card</h1>
                                      <p className="text-zinc-400 max-w-xl">A card component with header, title, description, content, and footer sections.</p>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Installation</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code="npx @nehal712521/inprogress add card" />
                                          <div className="p-4 font-mono text-sm"><span className="text-emerald-400">$ </span><span className="text-white">npx </span><span className="text-accent-secondary">@nehal712521/inprogress</span><span className="text-white"> add </span><span className="text-yellow-300">card</span></div>
                                      </div>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Preview</h2>
                                      <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 flex items-center justify-center">
                                          <Card className="w-full max-w-md">
                                              <CardHeader><CardTitle>Card Title</CardTitle><CardDescription>This is a description of the card.</CardDescription></CardHeader>
                                              <CardContent><p className="text-zinc-400">Card content goes here.</p></CardContent>
                                              <CardFooter><button className="text-accent-secondary text-sm">Learn more</button></CardFooter>
                                          </Card>
                                      </div>
                                  </div>
                                  <div className="space-y-4">
                                      <h2 className="text-2xl font-bold text-white">Usage</h2>
                                      <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                                          <CopyButton code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>`} />
                                          <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto"><code>{`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>`}</code></pre>
                                      </div>
                                  </div>
      </div>
    );
  }
