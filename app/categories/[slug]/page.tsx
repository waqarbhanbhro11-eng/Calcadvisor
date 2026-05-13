import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getCalculatorsByCategory,
} from "@/data/calculators";
import { ToolCard } from "@/components/tool-card";
import { Breadcrumbs } from "@/components/breadcrumbs";

const SITE_URL = "https://www.calcadvisor.com";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const count = getCalculatorsByCategory(slug).length;
  const title = `${category.name} Calculators — ${count} Free Online Tools`;
  const description = `${category.description} Browse all ${count} free ${category.name.toLowerCase()} calculators — no sign-up, no ads, instant results.`;
  const canonicalUrl = `${SITE_URL}/categories/${slug}`;

  return {
    title,
    description,
    keywords: [
      `free ${category.name.toLowerCase()} calculator`,
      `${category.name.toLowerCase()} tools online`,
      `best ${category.name.toLowerCase()} calculator 2026`,
      "CalcAdvisor",
    ],
    alternates: {
      canonical: canonicalUrl, // ✅ full www URL
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title,
      description,
      siteName: "CalcAdvisor",
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
  const tools = getCalculatorsByCategory(slug);
  const featured = tools.slice(0, 3);
  const canonicalUrl = `${SITE_URL}/categories/${slug}`;

  // ✅ JSON-LD Schema for category page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Calculators`,
    description: category.description,
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "CalcAdvisor",
      url: SITE_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: `${category.name} Calculators`,
          item: canonicalUrl,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: category.name },
          ]}
        />

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

        {/* Featured */}
        {featured.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-4 text-lg font-semibold text-slate-950">
              Most used tools
            </h2>
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
            Browse all tools on the{" "}
            <Link
              href="/"
              className="font-medium text-slate-900 underline underline-offset-4"
            >
              CalcAdvisor homepage
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
    }
