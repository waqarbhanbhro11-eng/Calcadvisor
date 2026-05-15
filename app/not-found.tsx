import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested CalcAdvisor page could not be found.",
robots: {
  index: false,
  follow: false,
},

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Page not found</h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          The calculator or category you are looking for does not exist.
        </p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
          Return home
        </Link>
      </div>
    </main>
  );
}
