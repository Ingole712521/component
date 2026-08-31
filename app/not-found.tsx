import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-dvh flex items-center justify-center px-6"
    >
      <div className="max-w-md text-center">
        <p className="text-sm text-(--muted) mb-3 tabular-nums">404</p>
        <h1 className="display-lg mb-4">Page not found</h1>
        <p className="body-lg mx-auto mb-8">This route does not exist.</p>
        <Link href="/" className="btn-primary">
          Home
        </Link>
      </div>
    </main>
  );
}
