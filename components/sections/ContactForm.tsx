"use client";

import Link from "next/link";
import { Mail, Globe } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="border-b border-[var(--color-border)] scroll-mt-24">
      <div className="page-container py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="section-heading mb-4">Contact</h2>
            <p className="section-subtitle mb-8">
              Questions about a component or need something custom? Reach out directly.
            </p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://mail.google.com/mail/?view=cm&to=nehalingole2001@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  nehalingole2001@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://nehalingole.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  nehalingole.in
                </Link>
              </li>
            </ul>
          </div>

          <div className="surface-panel p-8">
            <p className="text-sm text-[var(--muted)] mb-4">
              No contact form. Use the links, it is faster for everyone.
            </p>
            <Link href="/contact" className="btn-secondary">
              View contact page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
