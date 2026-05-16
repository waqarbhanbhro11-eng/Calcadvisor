'use client';

import { useMemo, useState, useCallback } from "react";
import type { Calculator } from "@/data/calculators";
import { getFields, getInitialValues, computeCalculator } from "@/lib/calculator-engine";

type Props = { calculator: Calculator };

const CURRENCY_FIELDS = ["income","fixed","variable","savings","outflows","debtPayments","sideIncome","savingsTransfer","goalAmount","currentSavings","monthlyContribution","currentValue","amount","price","down","principal","balance","monthly","portfolio","start","cash","investments","propertyValue","vehicles","loans","creditCardDebt","essentialMonthlyExpenses","buffers","monthlyIncome","fixedExpenses","variableExpenses","savingsTarget"];
const PERCENT_FIELDS  = ["rate","annualReturn","inflationRate","withdrawalRate","taxRate","coverage"];

function isCurrency(name: string) {
  return CURRENCY_FIELDS.some(k => name.toLowerCase().includes(k.toLowerCase()));
}
function isPercent(name: string) {
  return PERCENT_FIELDS.some(k => name.toLowerCase().includes(k.toLowerCase()));
}

export function CalculatorForm({ calculator }: Props) {
  const fields = useMemo(() => getFields(calculator), [calculator]);
  const [values, setValues] = useState<Record<string, string>>(() => getInitialValues(fields));

  const handleChange = useCallback((name: string, val: string) => {
    setValues(prev => ({ ...prev, [name]: val }));
  }, []);

  const result = useMemo(() => computeCalculator(calculator, values), [calculator, values]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

      {/* Input panel */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="border-b border-slate-100 bg-slate-50 px-5 py-3.5 flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white text-xs font-bold select-none">
            ƒ
          </span>
          <span className="text-sm font-semibold text-slate-800">Enter your values</span>
        </div>

        <div className="p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((field) => {
              const currency = isCurrency(field.name);
              const percent  = isPercent(field.name);

              return (
                <div
                  key={field.name}
                  className={field.type === "text" && fields.length === 1 ? "sm:col-span-2" : ""}
                >
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {field.label}
                  </label>

                  {field.type === "select" ? (
                    <select
                      value={values[field.name] ?? ""}
                      onChange={e => handleChange(field.name, e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    >
                      {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>

                  ) : field.type === "date" ? (
                    <input
                      type="date"
                      value={values[field.name] ?? ""}
                      onChange={e => handleChange(field.name, e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />

                  ) : (
                    <div className="relative flex items-center">
                      {currency && (
                        <span className="pointer-events-none absolute left-3.5 text-sm font-semibold text-slate-400 select-none">$</span>
                      )}
                      <input
                        type={field.type === "number" ? "number" : "text"}
                        step={field.step}
                        value={values[field.name] ?? ""}
                        onChange={e => handleChange(field.name, e.target.value)}
                        className={`w-full rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-900 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 ${currency ? "pl-7 pr-3.5" : percent ? "pl-3.5 pr-9" : "px-3.5"}`}
                      />
                      {percent && (
                        <span className="pointer-events-none absolute right-3.5 text-sm font-semibold text-slate-400 select-none">%</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 px-4 py-2.5 text-xs text-blue-700 font-medium">
            ⚡ Results update instantly as you type
          </div>
        </div>
      </div>

      {/* Results panel */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 shadow-sm overflow-hidden text-white">
        <div className="border-b border-white/10 bg-white/5 px-5 py-3.5">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Result</span>
        </div>

        <div className="px-5 pt-6 pb-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
            {result.primaryLabel}
          </div>
          <div className="text-4xl font-bold tracking-tight text-white leading-none">
            {result.primaryValue}
          </div>
        </div>

        {result.supporting.length > 0 && (
          <div className="px-5 pb-5 mt-4 space-y-2.5">
            {result.supporting.map(row => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{row.label}</span>
                <span className="text-sm font-semibold text-white">{row.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mx-5 mb-5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-slate-500">
          {["health","math","conversion"].includes(calculator.categorySlug ?? "")
            ? "For informational purposes only. Not a substitute for professional medical advice."
            : "For informational purposes only. Not financial or legal advice."}
        </div>
      </div>
    </div>
  );
}
