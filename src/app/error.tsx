"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-semibold text-white">Something went wrong</h1>
      <p className="mt-4 text-white/70">
        We hit a problem loading this page. Please try again, or contact us
        directly.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
        >
          Try again
        </button>
        <Link
          href="/reach-us"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Reach us
        </Link>
      </div>
    </section>
  );
}