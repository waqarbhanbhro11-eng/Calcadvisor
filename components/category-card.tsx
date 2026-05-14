import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/calculators";

const CATEGORY_META: Record<string, { icon: string; accent: string; bg: string; border: string }> = {
  financial:     { icon: "💰", accent: "text-blue-700",    bg: "bg-blue-50",    border: "border-blue-100" },
  loans:         { icon: "🏦", accent: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-100" },
  mortgage:      { icon: "🏠", accent: "text-violet-700",  bg: "bg-violet-50",  border: "border-violet-100" },
  savings:       { icon: "🐖", accent: "text-green-700",   bg: "bg-green-50",   border: "border-green-100" },
  investment:    { icon: "📈", accent: "text-indigo-700",  bg: "bg-indigo-50",  border: "border-indigo-100" },
  retirement:    { icon: "🌴", accent: "text-orange-700",  bg: "bg-orange-50",  border: "border-orange-100" },
  tax:           { icon: "🧾", accent: "text-red-700",     bg: "bg-red-50",     border: "border-red-100" },
  health:        { icon: "❤️", accent: "text-rose-700",    bg: "bg-rose-50",    border: "border-rose-100" },
  math:          { icon: "📐", accent: "text-slate-700",   bg: "bg-slate-50",   border: "border-slate-200" },
  conversion:    { icon: "🔄", accent: "text-cyan-700",    bg: "bg-cyan-50",    border: "border-cyan-100" },
  business:      { icon: "💼", accent: "text-amber-700",   bg: "bg-amber-50",   border: "border-amber-100" },
  "other-tools": { icon: "🔧", accent: "text-slate-700",   bg: "bg-slate-50",   border: "border-slate-200" },
};

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  const meta = CATEGORY_META[category.slug] ?? CATEGORY_META["other-tools"];

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${meta.bg} border ${meta.border} text-xl select-none`}>
          {meta.icon}
        </div>
        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-slate-700" />
      </div>

      <h3 className={`mt-3.5 text-base font-bold ${meta.accent}`}>{category.name}</h3>
      <p className="mt-1.5 text-sm leading-6 text-slate-500 flex-1">{category.description}</p>

      <div className="mt-4 flex items-center gap-2">
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${meta.bg} ${meta.border} ${meta.accent}`}>
          {count} tools
        </span>
        <span className="text-xs text-slate-400 group-hover:text-slate-600 transition">Browse →</span>
      </div>
    </Link>
  );
                  }
