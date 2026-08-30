"use client";

import Link from "next/link";
import { Mail, Linkedin, Globe } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "nehalingole2001@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=nehalingole2001@gmail.com",
    accent: "text-violet-400",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "nehal-ingole",
    href: "https://www.linkedin.com/in/nehal-ingole/",
    accent: "text-cyan-400",
  },
  {
    icon: Globe,
    title: "Portfolio",
    value: "nehalingole.in",
    href: "https://nehalingole.in",
    accent: "text-indigo-400",
  },
];

export default function Contact() {
  return (
    <div className="page-container py-20 md:py-28">
      <Reveal className="max-w-2xl mb-16">
        <p className="section-label mb-4">Contact</p>
        <h1 className="section-heading mb-4">
          Get in <span className="gradient-text">touch</span>
        </h1>
        <p className="section-subtitle">
          Reach out by email or explore my portfolio. No forms — just direct links.
        </p>
      </Reveal>

      <ul className="grid sm:grid-cols-3 gap-4 max-w-3xl">
        {contactMethods.map((method, i) => (
          <Reveal key={method.title} delay={i * 0.08}>
            <li>
              <Link
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass block p-6 h-full group hover:border-violet-500/30 transition-all"
              >
                <method.icon className={`w-5 h-5 mb-4 ${method.accent}`} />
                <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">
                  {method.title}
                </p>
                <p className="text-sm text-white group-hover:text-violet-200 transition-colors">
                  {method.value}
                </p>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
