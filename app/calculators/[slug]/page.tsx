import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculators, getCalculatorBySlug } from "@/data/calculators";
import { CalculatorPage } from "@/components/calculator-page";
import { siteConfig, defaultOgImage } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return calculators.map((calculator) => ({ slug: calculator.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);
  if (!calculator) return {};

  const title = calculator.title;
  const description = calculator.metaDescription;

  return {
    title,
    description,
    keywords: [calculator.longTailKeyword, calculator.categoryName, calculator.title],
    alternates: {
      canonical: `/calculators/${calculator.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/calculators/${calculator.slug}`,
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

export default async function CalculatorDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug) ?? notFound();

  return <CalculatorPage calculator={calculator} />;
}
