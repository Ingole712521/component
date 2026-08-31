"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      id="main-content"
      className="min-h-dvh flex items-center justify-center px-6"
    >
      <div className="max-w-md text-center">
        <h1 className="display-lg mb-4">Something went wrong</h1>
        <p className="body-lg mx-auto mb-8">
          The page failed to load. You can try again.
        </p>
        <button type="button" className="btn-primary" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
