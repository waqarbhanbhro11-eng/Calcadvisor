import type { MetadataRoute } from "next";
import { calculators, categories } from "@/data/calculators";

const SITE_URL = "https://www.calcadvisor.com";

// Popular variants get higher priority in sitemap
const HIGH_PRIORITY_VARIANTS = new Set([
  "mortgage-payment", "loan-payment", "bmi", "compound-interest",
  "income-tax", "budget-planner", "profit-margin", "safe-withdrawal-rate",
  "dollar-cost-averaging", "sales-tax", "percentage", "age",
  "401k-growth", "calorie-needs", "auto-loan-payment", "home-affordability",
]);

// Categories that get top-tier priority
const HIGH_PRIORITY_CATEGORIES = new Set([
  "financial", "loans", "mortgage", "health", "tax", "investment",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/calculators`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Category pages — high-traffic cats get 0.9, rest get 0.8
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/categories/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: HIGH_PRIORITY_CATEGORIES.has(cat.slug) ? 0.9 : 0.8,
  }));

  // Calculator pages — popular get 0.85, rest get 0.7
  const calculatorPages: MetadataRoute.Sitemap = calculators.map((calc) => ({
    url: `${SITE_URL}/calculators/${calc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_VARIANTS.has(calc.variant) ? 0.85 : 0.7,
  }));

  return [...staticPages, ...categoryPages, ...calculatorPages];
}
