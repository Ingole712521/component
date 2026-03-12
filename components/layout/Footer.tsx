"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-black pt-32 pb-20 overflow-hidden border-t border-white/5">
            <div className="page-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
                    {/* Logo & Copyright */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 relative overflow-hidden rounded-lg">
                                <Image
                                    src="/Profile_with_background.png"
                                    alt="In Progresso Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">Animioui UI</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px]">
                            © copyright In Animioui UI {new Date().getFullYear()}. All rights reserved. <br />
                            <span className="text-zinc-500 text-sm leading-relaxed font-bold">
                                Created by <Link href="https://nehalingole.in/" target="_blank" className="hover:text-white transition-colors">Nehal Ingole</Link>
                            </span>
                        </p>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Pages</h4>
                        <ul className="space-y-4 text-zinc-400 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Studio</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Clients</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Socials</h4>
                        <ul className="space-y-4 text-zinc-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/nehal-ingole/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-zinc-400 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    {/* Register */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Register</h4>
                        <ul className="space-y-4 text-zinc-400 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Sign Up</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Login</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Forgot Password</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Massive Backdrop Branding */}
                <div className=" bottom-0 left-0 right-0 flex justify-center pointer-events-none select-none -z-10 translate-y-1/2 md:translate-y-1/3">
                    <h2 className="text-[15vw] font-black text-[#111111] leading-none tracking-tighter uppercase whitespace-nowrap">
                        Animioui UI
                    </h2>
                </div>
            </div>
        </footer>
    );
}
 