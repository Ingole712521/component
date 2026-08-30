"use client";

import Link from "next/link";
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
    <div className="page-container py-20 md:py-28">
      <div className="max-w-2xl mb-16">
        <p className="section-label mb-4">Contact</p>
        <h1 className="section-heading mb-4">Get in touch</h1>
        <p className="section-subtitle">
          Reach out by email or explore my portfolio. No forms — just direct links.
        </p>
      </div>

      <ul className="divide-y divide-white/8 border-t border-b border-white/8 max-w-xl">
        {contactMethods.map((method) => (
          <li key={method.title}>
            <Link
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-5 group hover:bg-white/[0.02] -mx-2 px-2 rounded-md transition-colors"
            >
              <method.icon className="w-5 h-5 text-[var(--muted)] group-hover:text-white transition-colors" />
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-wider">{method.title}</p>
                <p className="text-sm text-white">{method.value}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
