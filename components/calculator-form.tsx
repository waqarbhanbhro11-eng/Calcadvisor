'use client';

import { useMemo, useState } from "react";
import { Calculator as CalculatorIcon } from "lucide-react";
import type { Calculator } from "@/data/calculators";
import { getFields, getInitialValues, computeCalculator } from "@/lib/calculator-engine";

type Props = {
  calculator: Calculator;
};

export function CalculatorForm({ calculator }: Props) {
  const fields = useMemo(() => getFields(calculator), [calculator]);
  const [values, setValues] = useState<Record<string, string>>(getInitialValues(fields));

  const result = useMemo(() => computeCalculator(calculator, values), [calculator, values]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <form className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <CalculatorIcon className="h-4 w-4" />
          </span>
          <div>
            <div className="text-sm font-semibold text-slate-900">{calculator.title}</div>
            <div className="text-xs text-slate-500">Interactive calculator form</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <label key={field.name} className={`space-y-2 ${field.type === "text" && fields.length === 1 ? "sm:col-span-2" : ""}`}>
              <span className="block text-sm font-medium text-slate-700">{field.label}</span>
              {field.type === "select" ? (
                <select
                  value={values[field.name]}
                  onChange={(e) => setValues((current) => ({ ...current, [field.name]: e.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                >
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "date" ? (
                <input
                  type="date"
                  value={values[field.name]}
                  onChange={(e) => setValues((current) => ({ ...current, [field.name]: e.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                />
              ) : (
                <input
                  type={field.type === "number" ? "number" : "text"}
                  step={field.step}
                  value={values[field.name]}
                  onChange={(e) => setValues((current) => ({ ...current, [field.name]: e.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                />
              )}
            </label>
          ))}
        </div>
      </form>

      <aside className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
        <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Results panel</div>
        <div className="mt-4 text-4xl font-semibold tracking-tight">{result.primaryValue}</div>
        <div className="mt-2 text-sm text-slate-300">{result.primaryLabel}</div>
        <div className="mt-6 grid gap-3">
          {result.supporting.map((row) => (
            <div key={row.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{row.label}</div>
              <div className="mt-1 text-sm font-medium text-white">{row.value}</div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
