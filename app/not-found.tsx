import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="page-container min-h-[70dvh] flex items-center">
      <div className="max-w-lg py-20">
        <p className="text-sm text-[var(--muted)] mb-3 tabular-nums">404</p>
        <h1 className="display-lg mb-4">This page is not in the library</h1>
        <p className="body-lg mb-8">The route does not exist. Head back to the docs or start from the homepage.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/docs" className="btn-primary">
            Get started
            <span className="btn-primary-icon">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link href="/" className="btn-secondary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
