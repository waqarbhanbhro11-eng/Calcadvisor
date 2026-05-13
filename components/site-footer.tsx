import Link from "next/link";
import { Calculator } from "lucide-react";
import { categories } from "@/data/calculators";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 font-semibold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Calculator className="h-4 w-4" />
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
              A free calculator directory with 200+ focused tools for finance, math, health, and everyday decisions.
            </p>
            <p className="mt-4 text-xs leading-5 text-slate-400">
              For informational purposes only. Not financial, legal, or medical advice. Always verify critical calculations with a qualified professional.
            </p>
          </div>

          {/* Categories column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Categories</h3>
            <ul className="mt-4 space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/categories/${cat.slug}`} className="text-sm text-slate-600 transition hover:text-slate-900">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">&nbsp;</h3>
            <ul className="mt-4 space-y-2">
              {categories.slice(6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/categories/${cat.slug}`} className="text-sm text-slate-600 transition hover:text-slate-900">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company / Trust column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate-600 transition hover:text-slate-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-600 transition hover:text-slate-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-slate-600 transition hover:text-slate-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link href="/privacy" className="transition hover:text-slate-700">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/contact" className="transition hover:text-slate-700">
              Contact
            </Link>
            <span>·</span>
            <Link href="/about" className="transition hover:text-slate-700">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
