'use client';

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-950">Category page failed</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">Please try again. If it keeps failing, there may be a broken category route.</p>
      <button onClick={reset} className="mt-6 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white">Try again</button>
    </div>
  );
}
