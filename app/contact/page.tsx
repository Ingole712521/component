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
      <header className="max-w-2xl mb-12">
        <h1 className="display-xl mb-5">Contact</h1>
        <p className="body-lg">Reach out by email or through the links below. No forms.</p>
      </header>

      <div className="shell max-w-3xl">
        <ul className="shell-inner divide-y divide-[var(--color-border)]">
          {contactMethods.map((method) => (
            <li key={method.title}>
              <Link
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 sm:p-6 hover:bg-[var(--color-surface)] transition-colors duration-300"
              >
                <method.icon className="w-5 h-5 text-[var(--color-accent-muted)] shrink-0" strokeWidth={1.75} />
                <div className="min-w-0">
                  <p className="text-xs text-[var(--muted)] mb-0.5">{method.title}</p>
                  <p className="text-sm font-medium truncate">{method.value}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
