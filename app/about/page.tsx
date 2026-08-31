import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="page-container py-20 md:py-28">
      <header className="max-w-3xl mb-16">
        <h1 className="display-xl mb-5">About Animioui</h1>
        <p className="body-lg">
          A copy-paste component library for developers who want motion they can edit, not a black-box dependency.
        </p>
      </header>

      <div className="shell max-w-3xl mb-14">
        <dl className="shell-inner grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
          <div className="p-6">
            <dt className="text-xs text-[var(--muted)] mb-1">Founded</dt>
            <dd className="text-lg font-semibold tabular-nums">2024</dd>
          </div>
          <div className="p-6">
            <dt className="text-xs text-[var(--muted)] mb-1">Components</dt>
            <dd className="text-lg font-semibold tabular-nums">40+</dd>
          </div>
          <div className="p-6">
            <dt className="text-xs text-[var(--muted)] mb-1">License</dt>
            <dd className="text-lg font-semibold">MIT</dd>
          </div>
        </dl>
      </div>

      <div className="max-w-2xl space-y-6">
        <p className="text-[var(--muted)] leading-relaxed">
          Created by{" "}
          <Link
            href="https://nehalingole.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)] underline underline-offset-4 decoration-[var(--color-border)] hover:decoration-[var(--foreground)]"
          >
            Nehal Ingole
          </Link>
          . Install a component, change the motion, commit it with the rest of your app.
        </p>
        <Link href="/docs" className="btn-primary inline-flex">
          Get started
          <span className="btn-primary-icon">
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
