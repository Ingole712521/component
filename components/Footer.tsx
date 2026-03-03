import Link from "next/link";
import { Linkedin, Github, Globe, Mail } from "lucide-react";

const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nehal-ingole/", icon: Linkedin },
    { name: "Portfolio", href: "https://nehal-ingole.vercel.app/", icon: Globe },
    { name: "Email", href: "mailto:nehalingole2001@gmail.com", icon: Mail },
];

export default function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold gradient-text tracking-tighter mb-4 block">
                            STARTUP.
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                            Building the future of digital experiences with precision and passion.
                            Join us on our journey to innovate and excel.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-zinc-500 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-zinc-500 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-zinc-500 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Connect</h3>
                        <div className="flex space-x-5">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-accent hover:bg-zinc-800 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-xs">
                        © {new Date().getFullYear()} STARTUP. Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
