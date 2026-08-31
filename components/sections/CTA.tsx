import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="page-container py-20 md:py-28">
        <div className="max-w-xl">
          <h2 className="section-heading mb-4">Start building today</h2>
          <p className="section-subtitle mb-8">
            Open the docs, pick a component, and paste it into your Next.js project.
          </p>
          <Link href="/docs" className="btn-primary">
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}
