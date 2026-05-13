import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculators, getCalculatorBySlug } from "@/data/calculators";
import { CalculatorPage } from "@/components/calculator-page";

const SITE_URL = "https://www.calcadvisor.com";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

function cleanTitle(raw: string, categoryName: string): string {
  return raw.replace(` | ${categoryName}`, "").trim();
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);
  if (!calculator) return {};

  const title = cleanTitle(calculator.title, calculator.categoryName);
  const description = calculator.metaDescription;
  const canonicalUrl = `${SITE_URL}/calculators/${slug}`;

  return {
    title: `${title} — Free Online Calculator`,
    description,
    keywords: [
      calculator.longTailKeyword,
      `free ${title.toLowerCase()}`,
      `${calculator.categoryName.toLowerCase()} calculator`,
      "online calculator",
      "CalcAdvisor",
    ],
    alternates: {
      canonical: canonicalUrl, // ✅ full www URL, not relative
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: `${title} — Free Online Tool`,
      description,
      siteName: "CalcAdvisor",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Free Online Tool`,
      description,
    },
    other: {
      "google-site-verification": "8ZSG2kPJ1T22r6Fb5gFiMiqJTvJ87eUkkprNqh5XfoE",
    },
  };
}

export default async function CalculatorDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug) ?? notFound();

  const title = cleanTitle(calculator.title, calculator.categoryName);
  const canonicalUrl = `${SITE_URL}/calculators/${slug}`;

  // ✅ JSON-LD Schema — Google rich results ke liye
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    description: calculator.metaDescription,
    url: canonicalUrl,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
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
          name: `${calculator.categoryName} Calculators`,
          item: `${SITE_URL}/categories/${calculator.categorySlug}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
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
      <CalculatorPage calculator={calculator} />
    </>
  );
  }
