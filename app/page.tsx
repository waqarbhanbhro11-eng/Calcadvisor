import type { Metadata } from "next";
import { categories, calculators } from "@/data/calculators";
import { SearchDirectory } from "@/components/search-directory";
import { siteConfig } from "@/lib/site";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculator Directory | CalcAdvisor",
    description: siteConfig.description,
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const resolvedParams = await searchParams;
  const initialQuery = resolvedParams?.q ?? "";

  return (
    <SearchDirectory
      categories={categories}
      calculators={calculators}
      initialQuery={initialQuery}
    />
  );
}
