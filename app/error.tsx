'use client';

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto max-w-2xl px-4 py-20 text-center">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-950">Something went wrong</h1>
        <p className="mt-3 text-slate-600">Please try again. If the problem continues, refresh the page.</p>
        <button onClick={reset} className="mt-6 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white">
          Try again
        </button>
      </div>
    </main>
  );
}
