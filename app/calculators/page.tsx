import { Suspense } from "react";
import { categories, calculators } from "@/data/calculators";
import { SearchDirectory } from "@/components/search-directory";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Calculators",
  description: siteConfig.description,
  alternates: {
    canonical: `${siteConfig.url}/calculators`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/calculators`,
    title: "All Calculators | CalcAdvisor",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Calculators | CalcAdvisor",
    description: siteConfig.description,
    images: ["/og-default.png"],
  },
};

type Props = { searchParams: Promise<{ q?: string }> };

export default async function CalculatorsPage({ searchParams }: Props) {
  const { q } = await searchParams;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20 text-sm text-slate-500">
            Loading calculators…
          </div>
        }
      >
        <SearchDirectory
          categories={categories}
          calculators={calculators}
          initialQuery={q ?? ""}
        />
      </Suspense>
    </main>
  );
      }
