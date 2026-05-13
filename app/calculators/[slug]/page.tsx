import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculators, getCalculatorBySlug } from "@/data/calculators";
import { CalculatorPage } from "@/components/calculator-page";
import { siteConfig } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return calculators.map((calculator) => ({ slug: calculator.slug }));
}

/** Strip the " | Category" suffix that the data layer appends to every title */
function cleanTitle(rawTitle: string, categoryName: string): string {
  return rawTitle.replace(` | ${categoryName}`, "").trim();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);
  if (!calculator) return {};

  const title = cleanTitle(calculator.title, calculator.categoryName);
  const description = calculator.metaDescription;
  const canonicalUrl = `${siteConfig.url}/calculators/${calculator.slug}`;

  return {
    title,
    description,
    keywords: [
      calculator.longTailKeyword,
      calculator.categoryName,
      title,
      "free online calculator",
    ],
    alternates: {
      canonical: `/calculators/${calculator.slug}`,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: `${title} — Free Online Tool`,
      description,
      siteName: siteConfig.name,
      // opengraph-image.tsx in this folder auto-generates a unique OG image per calculator
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Free Online Tool`,
      description,
    },
  };
}

export default async function CalculatorDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug) ?? notFound();

  return <CalculatorPage calculator={calculator} />;
}
