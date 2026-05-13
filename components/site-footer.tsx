import Link from "next/link";
import { Calculator } from "lucide-react";
import { categories } from "@/data/calculators";

const SITE_NAME = "CalcAdvisor";
const CURRENT_YEAR = new Date().getFullYear();

export function SiteFooter() {
  const half = Math.ceil(categories.length / 2);
  const colA = categories.slice(0, half);
  const colB = categories.slice(half);

  return (
    <footer className="border-t border-slate-200 bg-white">
      {/* JSON-LD Organization schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: "https://www.calcadvisor.com",
            description:
              "Free calculator directory with 200+ tools for finance, math, health, and everyday decisions.",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              url: "https://www.calcadvisor.com/contact",
            },
          }),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-slate-900"
              aria-label="CalcAdvisor — back to homepage"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Calculator className="h-4 w-4" aria-hidden="true" />
              </span>
              {SITE_NAME}
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
              200+ free calculators for finance, loans, mortgage, health, math,
              tax, and everyday decisions. No sign-up required.
            </p>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              For informational purposes only. Not financial, legal, or medical
              advice. Always verify critical calculations with a qualified
              professional.
            </p>
          </div>

          {/* Categories — first half */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Categories
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {colA.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm text-slate-600 transition hover:text-slate-900"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories — second half */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              More Tools
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {colB.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm text-slate-600 transition hover:text-slate-900"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-4 space-y-2" role="list">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {CURRENT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link
              href="/privacy"
              className="transition hover:text-slate-700"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/contact"
              className="transition hover:text-slate-700"
            >
              Contact
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/about"
              className="transition hover:text-slate-700"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
