"use client";

import { NotifyForm } from "@/components/notify-form";
import { CategoryCard } from "@/components/category-card";
import { ToolCard } from "@/components/tool-card";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
type Category = {
  slug: string;
  name: string;
  description: string;
};

type Calculator = {
  slug: string;
  title: string;
  topic?: string;
  categoryName?: string;
  categorySlug: string;
  longTailKeyword?: string;
  summary?: string;
};

type Props = {
  categories: Category[];
  calculators: Calculator[];
  initialQuery?: string;
};

export function SearchDirectory({
  categories,
  calculators,
  initialQuery = "",
}: Props) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const onSearchChange = (value: string) => {
    setQuery(value);

    const params = new URLSearchParams(searchParams.toString());
    const trimmed = value.trim();

    if (trimmed) params.set("q", trimmed);
    else params.delete("q");

    const nextUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.replace(nextUrl, { scroll: false });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return calculators;

    return calculators.filter((tool) =>
      [tool.title, tool.topic, tool.categoryName, tool.longTailKeyword, tool.summary]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [calculators, query]);

  const grouped = useMemo(() => {
    return categories
      .map((category) => ({
        category,
        tools: filtered.filter((tool) => tool.categorySlug === category.slug),
      }))
      .filter((group) => group.tools.length > 0);
  }, [categories, filtered]);

  const popular = useMemo(() => calculators.slice(0, 6), [calculators]);

  return (
    <div className="space-y-12">
      <section
        id="search"
        className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm sm:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Calculator directory
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Practical calculators for fast, confident decisions.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              200+ free tools across finance, loans, mortgage, savings, investment, tax, health,
              math, conversion, business, and more. No sign-up required.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <label htmlFor="tool-search" className="mb-2 block text-sm font-medium text-slate-700">
                Search calculators
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  id="tool-search"
                  value={query}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Try mortgage payment, BMI, compound interest..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>

              {query && (
                <p className="mt-2 text-xs text-slate-500">
                  {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
                </p>
              )}
            </div>

            <NotifyForm />
          </div>
        </div>
      </section>

      <section id="categories" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Categories</h2>
            <p className="mt-2 text-sm text-slate-600">Browse the directory by topic.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
              count={calculators.filter((tool) => tool.categorySlug === category.slug).length}
            />
          ))}
        </div>
      </section>

      <section id="popular" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Featured calculators
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              High-intent tools across finance, health, and math.
            </p>
          </div>

          <Link
            href="/categories/financial"
            className="hidden items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-950 sm:inline-flex"
          >
            View financial tools <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {popular.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            All tools by category
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {query ? `Showing results for "${query}"` : "Search results update instantly as you type."}
          </p>
        </div>

        {grouped.map(({ category, tools }) => (
          <div key={category.slug} className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-950">{category.name}</h3>
              <Link
                href={`/categories/${category.slug}`}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                Browse category
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        ))}

        {grouped.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600">
            No calculators matched your search. Try a different keyword.
          </div>
        )}
      </section>
    </div>
  );
      }
