import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Calculator } from "@/data/calculators";

export function ToolCard({ tool }: { tool: Calculator }) {
  return (
    <Link
      href={`/calculators/${tool.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{tool.categoryName}</div>
          <h3 className="mt-2 text-base font-semibold text-slate-900">{tool.title}</h3>
        </div>
        <ArrowUpRight className="mt-1 h-4 w-4 text-slate-400 transition group-hover:text-slate-900" />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{tool.summary}</p>
      <div className="mt-4 text-sm font-medium text-slate-900">Open calculator</div>
    </Link>
  );
}
