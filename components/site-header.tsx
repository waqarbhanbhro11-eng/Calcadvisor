import Link from "next/link";
import { Calculator, Search } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
            <Calculator className="h-4 w-4" />
          </span>
          <span className="text-lg">{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <Link href="/#categories" className="transition hover:text-slate-900">Categories</Link>
          <Link href="/#popular" className="transition hover:text-slate-900">Popular</Link>
          <Link href="/categories/financial" className="transition hover:text-slate-900">Financial</Link>
          <Link href="/categories/math" className="transition hover:text-slate-900">Math</Link>
        </nav>
        <Link href="/#search" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          <Search className="h-4 w-4" />
          Search tools
        </Link>
      </div>
    </header>
  );
}
