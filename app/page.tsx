import type { Metadata } from "next";
import Link from "next/link";
import { categories, calculators } from "@/data/calculators";
import { siteConfig } from "@/lib/site";
import { CategoryCard } from "@/components/category-card";
import { ToolCard } from "@/components/tool-card";
import { getPopularCalculators } from "@/data/calculators";

export const metadata: Metadata = {
  title: "Calculator Directory",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: { canonical: "/" },
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
  const popular = getPopularCalculators();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">

      {/* Hero */}
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 sm:p-12 text-center shadow-sm">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Free · No sign-up · Instant results
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl max-w-3xl mx-auto leading-tight">
          Practical calculators for fast, confident decisions.
        </h1>
        <p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-7">
          200+ free tools across finance, loans, mortgage, savings, investment,
          tax, health, math, and more.
        </p>

        {/* Search bar → goes to /calculators */}
        <form
          action="/calculators"
          method="GET"
          className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
        >
          <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            name="q"
            placeholder='Try "mortgage", "BMI", "compound interest"…'
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition"
          >
            Search
          </button>
        </form>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: "200+", label: "Free Calculators" },
            { value: "12", label: "Categories" },
            { value: "0", label: "Sign-ups Needed" },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-2xl font-extrabold text-slate-950">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
            Browse by category
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            12 topic areas · 200+ tools total
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
              count={calculators.filter(t => t.categorySlug === category.slug).length}
            />
          ))}
        </div>
      </section>

      {/* Popular calculators */}
      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
              Popular calculators
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Most used tools across all categories
            </p>
          </div>
          <Link
            href="/calculators"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {popular.slice(0, 6).map(tool => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/calculators"
            className="inline-flex rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
          >
            Browse all 200+ calculators →
          </Link>
        </div>
      </section>

    </main>
  );
        }
