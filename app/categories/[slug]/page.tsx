import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug, getCalculatorsByCategory, getCategoryUrl } from "@/data/calculators";
import { ToolCard } from "@/components/tool-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig, defaultOgImage } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  const count = getCalculatorsByCategory(category.slug).length;
  const title = `${category.name} Calculators`;
  const description = `${category.description} Browse ${count} calculators in the ${category.name.toLowerCase()} category.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}/categories/${category.slug}`,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug) ?? notFound();
  const tools = getCalculatorsByCategory(category.slug);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />

      <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950">{category.name} Calculators</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{category.description}</p>
          </div>
          <Link href="/" className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
            Back to directory
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
        <p>
          Explore more from the{" "}
          <Link href="/" className="font-medium text-slate-900 underline underline-offset-4">
            CalcAdvisor homepage
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
