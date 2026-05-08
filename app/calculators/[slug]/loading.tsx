export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" aria-busy="true" aria-live="polite">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-56 rounded-2xl bg-slate-200" />
        <div className="h-64 rounded-3xl bg-slate-100" />
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="h-48 rounded-3xl bg-slate-100" />
          <div className="h-48 rounded-3xl bg-slate-100" />
        </div>
      </div>
    </main>
  );
}
