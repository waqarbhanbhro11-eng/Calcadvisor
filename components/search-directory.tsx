"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, X, Zap, TrendingUp, Shield, ArrowRight } from "lucide-react";
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

// ─── Smart search: word-boundary scoring ───────────────────────────────────
function searchCalculators(calculators: Calculator[], query: string): Calculator[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const wordBound = new RegExp(`\\b${escaped}`, "i");

  return calculators
    .map((tool) => {
      const title    = tool.title?.toLowerCase() ?? "";
      const topic    = tool.topic?.toLowerCase() ?? "";
      const category = tool.categoryName?.toLowerCase() ?? "";
      const longTail = tool.longTailKeyword?.toLowerCase() ?? "";
      const summary  = tool.summary?.toLowerCase() ?? "";

      let score = 0;

      // Title — highest priority
      if (title.startsWith(q))        score += 200;
      else if (wordBound.test(title)) score += 100;
      else if (title.includes(q))     score += 40;

      // Topic
      if (wordBound.test(topic))      score += 60;

      // Category
      if (wordBound.test(category))   score += 50;

      // Long-tail keyword
      if (wordBound.test(longTail))   score += 40;

      // Summary — word boundary only (avoids "wage"→"age" false matches)
      if (wordBound.test(summary))    score += 15;

      return { tool, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ tool }) => tool);
}

// ─── Get "related" calculators: same category, not already in results ───────
function getRelated(
  results: Calculator[],
  all: Calculator[],
  limit = 6
): Calculator[] {
  if (!results.length) return [];
  const resultSlugs = new Set(results.map((t) => t.slug));
  // Collect category slugs from top results
  const categorySlugs = [...new Set(results.slice(0, 5).map((t) => t.categorySlug))];
  return all
    .filter((t) => !resultSlugs.has(t.slug) && categorySlugs.includes(t.categorySlug))
    .slice(0, limit);
}

// ───────────────────────────────────────────────────────────────────────────
export function SearchDirectory({ categories, calculators, initialQuery = "" }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);
  const popular = getPopularCalculators();

  // Auto-focus when initialQuery is set (from URL param)
  useEffect(() => {
    if (initialQuery && inputRef.current) inputRef.current.focus();
  }, [initialQuery]);

  const results = useMemo(
    () => searchCalculators(calculators, query),
    [calculators, query]
  );

  const related = useMemo(
    () => getRelated(results, calculators),
    [results, calculators]
  );

  const isSearching = query.trim().length > 0;

  return (
    <div className="space-y-14">

      {/* ── Hero / Search ─────────────────────────────────────────────────── */}
      <section
        id="search"
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
      >
        {/* subtle dot-grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%230f172a'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative p-6 sm:p-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Free · No sign-up · Instant results
          </div>

          {/* Headline */}
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl leading-[1.1]">
            The calculator directory<br className="hidden sm:block" />
            that just works.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
            200+ free calculators for finance, loans, mortgage, savings, tax,
            health, math, and more. No account needed.
          </p>

          {/* Stats */}
          <div className="mt-7 flex flex-wrap gap-6">
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
          <div className="mt-7 flex max-w-lg items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm transition-all focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search — try "mortgage", "BMI", "tax"…'
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              aria-label="Search calculators"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500 transition hover:bg-slate-300"
                aria-label="Clear search"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── SEARCH RESULTS ─────────────────────────────────────────────────── */}
      {isSearching && (
        <>
          {results.length > 0 ? (
            <section>
              <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-950">
                Results for &ldquo;{query}&rdquo;
              </h2>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {results.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          ) : (
            <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-slate-700 font-semibold text-lg">
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Try a different keyword — e.g. &ldquo;mortgage&rdquo;, &ldquo;loan&rdquo;, &ldquo;BMI&rdquo;
              </p>
              <button
                onClick={() => setQuery("")}
                className="mt-5 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Clear search
              </button>
            </section>
          )}

          {/* Related calculators */}
          {related.length > 0 && (
            <section>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-xl font-extrabold tracking-tight text-slate-950">
                  You might also need
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {related.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* ── DEFAULT VIEW (no search) ────────────────────────────────────────── */}
      {!isSearching && (
        <>
          {/* Categories grid */}
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
                  count={calculators.filter((t) => t.categorySlug === category.slug).length}
                />
              ))}
            </div>
          </section>

          {/* Featured / popular */}
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
                View financial <ArrowRight className="h-3.5 w-3.5" />
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
                const tools = calculators.filter(
                  (t) => t.categorySlug === category.slug
                );
                if (!tools.length) return null;
                return (
                  <div key={category.slug}>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold text-slate-900">
                        {category.name}
                      </h3>
                      <Link
                        href={`/categories/${category.slug}`}
                        className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
                      >
                        All {tools.length} tools →
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {tools.slice(0, 6).map((tool) => (
                        <ToolCard key={tool.slug} tool={tool} />
                      ))}
                    </div>
                    {tools.length > 6 && (
                      <Link
                        href={`/categories/${category.slug}`}
                        className="mt-4 flex w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 py-3 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:bg-slate-50"
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
                         
