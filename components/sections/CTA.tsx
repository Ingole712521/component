import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-b border-white/8">
      <div className="page-container py-20 md:py-28">
        <div className="max-w-xl">
          <h2 className="section-heading mb-4">Start building today</h2>
          <p className="section-subtitle mb-8">
            Open the docs, pick a component, and paste it into your Next.js project.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/docs" className="btn-primary">
              Open documentation
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
