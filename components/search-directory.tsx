"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Category, Calculator, getPopularCalculators } from "@/data/calculators";
import { CategoryCard } from "./category-card";
import { ToolCard } from "./tool-card";

type Props = {
  categories: Category[];
  calculators: Calculator[];
  initialQuery?: string;
};

const STATS = [
  { value: "200+", label: "Free calculators", icon: Zap },
  { value: "12",   label: "Categories",       icon: TrendingUp },
  { value: "0",    label: "Sign-ups needed",  icon: Shield },
];

export function SearchDirectory({ categories, calculators, initialQuery = "" }: Props) {
  const [query, setQuery] = useState(initialQuery);

  // Flat filtered list — seedha calculators, no grouping
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return calculators.filter((tool) =>
      [tool.title, tool.topic, tool.categoryName, tool.longTailKeyword, tool.summary]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [calculators, query]);

  const popular = getPopularCalculators();

  return (
    <div className="space-y-14">

      {/* Search Hero — NO NotifyForm here */}
      <section id="search" className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C%2Fg%3E%3C/svg%3E\")" }}
        />

        <div className="relative p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Free · No sign-up · Instant
          </div>

          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl leading-[1.1]">
            The calculator directory<br className="hidden sm:block" /> that just works.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
            200+ free calculators for finance, loans, mortgage, savings, tax, health, math, and more.
          </p>

          <div className="mt-7 flex flex-wrap gap-5">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-lg font-extrabold leading-none text-slate-950">{value}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Search box */}
          <div className="mt-7 flex max-w-lg items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search — try "mortgage", "BMI", "compound interest"…'
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              aria-label="Search calculators"
              autoFocus={!!initialQuery}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-xs font-medium text-slate-400 hover:text-slate-700 transition"
              >
                Clear
              </button>
            )}
          </div>

          {query && (
            <p className="mt-2 text-xs text-slate-500">
              <span className="font-semibold">{filtered.length}</span>{" "}
              result{filtered.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </section>

      {/* ✅ SEARCH RESULTS — flat list, seedha calculators */}
      {query && (
        <section>
          {filtered.length > 0 ? (
            <>
              <div className="mb-5">
                <h2 className="text-xl font-extrabold tracking-tight text-slate-950">
                  Results for &ldquo;{query}&rdquo;
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filtered.map(tool => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <p className="text-slate-600 font-medium">
                No calculators matched &ldquo;{query}&rdquo;
              </p>
              <button
                onClick={() => setQuery("")}
                className="mt-4 text-sm text-blue-600 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </section>
      )}

      {/* Show categories + popular only when NOT searching */}
      {!query && (
        <>
          {/* Categories */}
          <section id="categories">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
                  Browse by category
                </h2>
                <p className="mt-1.5 text-sm text-slate-500">
                  12 topic areas · 200+ tools total
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard
                  key={category.slug}
                  category={category}
                  count={calculators.filter((t) => t.categorySlug === category.slug).length}
                />
              ))}
            </div>
          </section>

          {/* Featured */}
          <section id="popular">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
                  Featured calculators
                </h2>
                <p className="mt-1.5 text-sm text-slate-500">
                  Most used tools across all categories
                </p>
              </div>
              <Link
                href="/categories/financial"
                className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 sm:inline-flex"
              >
                View all financial <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {popular.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>

          {/* All tools grouped by category */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
                All calculators
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">
                Full directory, grouped by category
              </p>
            </div>
            <div className="space-y-10">
              {categories.map((category) => {
                const tools = calculators.filter(t => t.categorySlug === category.slug);
                if (!tools.length) return null;
                return (
                  <div key={category.slug}>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold text-slate-900">
                        {category.name}
                      </h3>
                      <Link
                        href={`/categories/${category.slug}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                      >
                        All {tools.length} tools →
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {tools.slice(0, 6).map(tool => (
                        <ToolCard key={tool.slug} tool={tool} />
                      ))}
                    </div>
                    {tools.length > 6 && (
                      <Link
                        href={`/categories/${category.slug}`}
                        className="mt-4 flex w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 py-3 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:bg-white"
                      >
                        +{tools.length - 6} more {category.name} calculators
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}
    </div>
  );
      }
