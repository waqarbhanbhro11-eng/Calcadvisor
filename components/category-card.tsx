import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/calculators";

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900">{category.name}</h3>
        <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-900" />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
      <div className="mt-4 text-sm font-medium text-slate-900">{count} calculators</div>
    </Link>
  );
}
