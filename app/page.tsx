import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/calculators";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Online Calculator Directory — 200+ Tools | CalcAdvisor",
  alternates: {
    canonical: "https://www.calcadvisor.com",  
  },
  openGraph: {
    url: "https://www.calcadvisor.com",        
  },
};
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Calculator Directory | CalcAdvisor",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculator Directory | CalcAdvisor",
    description: siteConfig.description,
    images: ["/og-default.png"],
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <section className="text-center space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Calculator directory
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Practical calculators for fast, confident decisions.
        </h1>
        <p className="mx-auto max-w-2xl text-slate-600">
          200+ free tools across finance, loans, mortgage, savings,
          investment, tax, health, math, conversion, business, and more.
          No sign-up required.
        </p>

        <form action="/calculators" method="GET" className="mx-auto max-w-2xl">
          <input
            type="text"
            name="q"
            placeholder="Search calculators..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
          />
        </form>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Popular categories</h2>
          <p className="text-slate-600">
            Browse the directory by topic.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/calculators?q=${encodeURIComponent(category.name)}`}
              className="rounded-2xl border border-slate-200 p-4 transition hover:shadow-sm"
            >
              <div className="font-medium">{category.name}</div>
              <div className="mt-1 text-sm text-slate-500">
                Explore calculators in this category
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
        <h2 className="text-2xl font-semibold">Want the full list?</h2>
        <p className="mt-2 text-slate-600">
          Open the complete calculator directory with search and filters.
        </p>
        <Link
          href="/calculators"
          className="mt-5 inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-medium"
        >
          Browse all calculators
        </Link>
      </section>
    </main>
  );
        }
