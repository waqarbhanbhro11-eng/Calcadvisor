import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug, getCalculatorsByCategory } from "@/data/calculators";
import { ToolCard } from "@/components/tool-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const count = getCalculatorsByCategory(category.slug).length;
  const title = `${category.name} Calculators — Free Online Tools`;
  const description = `${category.description} Browse ${count} free ${category.name.toLowerCase()} calculators — no sign-up required.`;
  const canonicalUrl = `${siteConfig.url}/categories/${category.slug}`;

  return {
    title,
    description,
    keywords: [
      `${category.name.toLowerCase()} calculator`,
      `free ${category.name.toLowerCase()} tools`,
      "online calculator",
      siteConfig.name,
    ],
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title,
      description,
      siteName: siteConfig.name,
      // opengraph-image.tsx in this folder auto-generates unique OG per category
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug) ?? notFound();
  const tools = getCalculatorsByCategory(category.slug);
  const featured = tools.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />

      {/* Hero */}
      <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
              {category.name} Calculators
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              {category.description}
            </p>
            <p className="mt-3 text-sm font-medium text-slate-500">
              {tools.length} free calculators · No sign-up required
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            ← Back to directory
          </Link>
        </div>
      </section>

      {/* Featured tools */}
      {featured.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-950">Most used tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* All tools */}
      <section className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-950">
          All {category.name} calculators
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
        <p>
          Explore more tools on the{" "}
          <Link href="/" className="font-medium text-slate-900 underline underline-offset-4">
            CalcAdvisor homepage
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
