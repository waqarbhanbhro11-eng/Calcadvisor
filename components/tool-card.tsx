import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Calculator } from "@/data/calculators";

const ACCENT: Record<string, { dot: string; badge: string; text: string }> = {
  financial:     { dot: "bg-blue-400",    badge: "bg-blue-50 text-blue-700 border-blue-100",       text: "text-blue-700" },
  loans:         { dot: "bg-emerald-400", badge: "bg-emerald-50 text-emerald-700 border-emerald-100", text: "text-emerald-700" },
  mortgage:      { dot: "bg-violet-400",  badge: "bg-violet-50 text-violet-700 border-violet-100",   text: "text-violet-700" },
  savings:       { dot: "bg-green-400",   badge: "bg-green-50 text-green-700 border-green-100",     text: "text-green-700" },
  investment:    { dot: "bg-indigo-400",  badge: "bg-indigo-50 text-indigo-700 border-indigo-100",   text: "text-indigo-700" },
  retirement:    { dot: "bg-orange-400",  badge: "bg-orange-50 text-orange-700 border-orange-100",   text: "text-orange-700" },
  tax:           { dot: "bg-red-400",     badge: "bg-red-50 text-red-700 border-red-100",           text: "text-red-700" },
  health:        { dot: "bg-rose-400",    badge: "bg-rose-50 text-rose-700 border-rose-100",         text: "text-rose-700" },
  math:          { dot: "bg-slate-400",   badge: "bg-slate-50 text-slate-700 border-slate-200",      text: "text-slate-700" },
  conversion:    { dot: "bg-cyan-400",    badge: "bg-cyan-50 text-cyan-700 border-cyan-100",         text: "text-cyan-700" },
  business:      { dot: "bg-amber-400",   badge: "bg-amber-50 text-amber-700 border-amber-100",      text: "text-amber-700" },
  "other-tools": { dot: "bg-slate-400",   badge: "bg-slate-50 text-slate-700 border-slate-200",      text: "text-slate-700" },
};

export function ToolCard({ tool }: { tool: Calculator }) {
  const accent = ACCENT[tool.categorySlug] ?? ACCENT["other-tools"];

  return (
    <Link
      href={`/calculators/${tool.slug}`}
      aria-label={`Open ${tool.title} calculator`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${accent.dot}`} />
          <span className={`text-xs font-semibold uppercase tracking-wide ${accent.text} truncate`}>
            {tool.categoryName}
          </span>
        </div>
        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-slate-700" />
      </div>

      <h3 className="mt-3 text-base font-bold text-slate-900 leading-snug">
        {tool.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500 line-clamp-2 flex-1">
        {tool.summary}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2">
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${accent.badge}`}>
          Free
        </span>
        <span className="text-xs font-medium text-slate-400 transition group-hover:text-slate-700">
          Open calculator →
        </span>
      </div>
    </Link>
  );
        }
