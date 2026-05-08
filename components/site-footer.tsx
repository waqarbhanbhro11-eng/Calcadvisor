import Link from "next/link";
import { categories } from "@/data/calculators";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <div className="text-lg font-semibold text-slate-900">{siteConfig.name}</div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            A modern calculator directory for fast planning, comparison, and clear decision-making.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="text-slate-600 transition hover:text-slate-900">
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
