"use client";

import DocsSidebar from "../../../_components/docs-sidebar";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import Button3DShowcase from "@/components/3d-buttons/Showcase";

export default function ThreeDButtonsShowcasePage() {
    return (
        <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex gap-12 h-full pt-24">
                    
                    <DocsSidebar />
{/* Sidebar */}
                                        {/* Main Content */}
                    <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
                        <div className="pb-24 space-y-10">
                            {/* Header */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                                    <Link href="/docs/components/3d-buttons" className="hover:text-white">3D Buttons</Link>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-white">Showcase</span>
                                </div>
                                <h1 className="text-4xl font-bold text-white tracking-tight">3D Button Showcase</h1>
                                <p className="text-zinc-400 text-lg">Interactive showcase displaying all 3D button variants, colors, and sizes.</p>
                            </div>

                            {/* Full Showcase */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Live Demo</h2>
                                <div className="relative bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden">
                                    <div className="p-8">
                                        <Button3DShowcase />
                                    </div>
                                </div>
                            </div>

                            {/* Quick Reference */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Quick Reference</h2>
                                <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-zinc-800/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-white font-medium">Component</th>
                                                <th className="px-4 py-3 text-left text-white font-medium">Variants</th>
                                                <th className="px-4 py-3 text-left text-white font-medium">Colors</th>
                                                <th className="px-4 py-3 text-left text-white font-medium">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-zinc-800">
                                            <tr><td className="px-4 py-3 text-accent">Lift 3D Button</td><td className="px-4 py-3 text-zinc-400">5 variants</td><td className="px-4 py-3 text-zinc-400">5 colors</td><td className="px-4 py-3 text-zinc-400">Lightweight, no dependencies</td></tr>
                                            <tr><td className="px-4 py-3 text-accent">Cube 3D Button</td><td className="px-4 py-3 text-zinc-400">4 variants</td><td className="px-4 py-3 text-zinc-400">5 colors</td><td className="px-4 py-3 text-zinc-400">Advanced 3D animations</td></tr>
                                            <tr><td className="px-4 py-3 text-accent">Spring 3D Button</td><td className="px-4 py-3 text-zinc-400">3 variants</td><td className="px-4 py-3 text-zinc-400">5 colors</td><td className="px-4 py-3 text-zinc-400">Playful spring animations</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
