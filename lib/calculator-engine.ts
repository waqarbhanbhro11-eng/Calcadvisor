import type { Calculator } from "@/data/calculators";

// ─── Types ────────────────────────────────────────────────────────────────────

export type FieldType = "number" | "text" | "date" | "select";

export type CalculatorField = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  step?: string;
  options?: string[];
  defaultValue?: string;
};

export type ResultRow = {
  label: string;
  value: string;
};

export type ComputeResult = {
  primaryLabel: string;
  primaryValue: string;
  supporting: ResultRow[];
  error?: string;
};

// ─── Utilities ────────────────────────────────────────────────────────────────

const round = (value: number, digits = 2): string => {
  if (!Number.isFinite(value) || isNaN(value)) return "—";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
};

const number = (value: unknown, fallback = 0): number => {
  const parsed = typeof value === "string" ? Number(value) : Number(value ?? fallback);
  return Number.isFinite(parsed) && !isNaN(parsed) ? parsed : fallback;
};

const positiveNumber = (value: unknown, fallback = 0): number =>
  Math.max(0, number(value, fallback));

const safeDivide = (num: number, den: number, fallback = 0): number => {
  if (!Number.isFinite(num) || !Number.isFinite(den) || den === 0) return fallback;
  return num / den;
};

// FIX: pace returns MM:SS format instead of decimal minutes
function formatPace(decimalMinutes: number): string {
  if (!Number.isFinite(decimalMinutes) || decimalMinutes <= 0) return "—";
  const mins = Math.floor(decimalMinutes);
  const secs = Math.round((decimalMinutes - mins) * 60);
  return `${mins}:${secs.toString().padStart(2, "0")} min/km`;
}

// FIX: dynamic field-name slug (shared between getFields + computeCalculator)
function labelToName(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

// FIX: today's date for default date fields
function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function toNumberArray(text: string): number[] {
  return text
    .split(/[,\s]+/)
    .map((v) => Number(v.trim()))
    .filter((v) => Number.isFinite(v) && !isNaN(v));
}

function gcf(a: number, b: number): number {
  return b === 0 ? Math.abs(Math.round(a)) : gcf(b, a % b);
}

function lcm(a: number, b: number): number {
  const g = gcf(a, b);
  return g === 0 ? 0 : Math.abs(Math.round(a) * Math.round(b)) / g;
}

function toMeters(v: number, u: string): number {
  const m: Record<string, number> = { m: 1, km: 1000, mi: 1609.344, ft: 0.3048, in: 0.0254 };
  return v * (m[u] ?? 1);
}
function fromMeters(v: number, u: string): number {
  const m: Record<string, number> = { m: 1, km: 1000, mi: 1609.344, ft: 0.3048, in: 0.0254 };
  return v / (m[u] ?? 1);
}
function toKilograms(v: number, u: string): number {
  const m: Record<string, number> = { kg: 1, g: 0.001, lb: 0.45359237, oz: 0.0283495 };
  return v * (m[u] ?? 1);
}
function fromKilograms(v: number, u: string): number {
  const m: Record<string, number> = { kg: 1, g: 0.001, lb: 0.45359237, oz: 0.0283495 };
  return v / (m[u] ?? 1);
}

// FIX: conversionValue return type is string | number (numberBase returns string)
function conversionValue(
  value: number,
  from: string,
  to: string,
  family?: string | null,
): number | string {
  switch (family) {
    case "length":
      return fromMeters(toMeters(value, from), to);
    case "weight":
      return fromKilograms(toKilograms(value, from), to);
    case "area": {
      const m: Record<string, number> = { sqm: 1, sqft: 0.092903, acre: 4046.86, hectare: 10000 };
      return (value * (m[from] ?? 1)) / (m[to] ?? 1);
    }
    case "volume": {
      const m: Record<string, number> = { l: 1, ml: 0.001, gal: 3.78541, cup: 0.236588 };
      return (value * (m[from] ?? 1)) / (m[to] ?? 1);
    }
    case "speed": {
      const m: Record<string, number> = { mps: 1, kph: 0.277778, mph: 0.44704, knot: 0.514444 };
      return (value * (m[from] ?? 1)) / (m[to] ?? 1);
    }
    case "pressure": {
      const m: Record<string, number> = { pa: 1, kpa: 1000, bar: 100000, psi: 6894.76 };
      return (value * (m[from] ?? 1)) / (m[to] ?? 1);
    }
    case "time": {
      const m: Record<string, number> = { sec: 1, min: 60, hr: 3600, day: 86400 };
      return (value * (m[from] ?? 1)) / (m[to] ?? 1);
    }
    case "dataSize": {
      const m: Record<string, number> = {
        B: 1, KB: 1024, MB: 1048576, GB: 1073741824, TB: 1099511627776,
      };
      return (value * (m[from] ?? 1)) / (m[to] ?? 1);
    }
    case "power": {
      const m: Record<string, number> = { w: 1, kw: 1000, hp: 745.7 };
      return (value * (m[from] ?? 1)) / (m[to] ?? 1);
    }
    case "energy": {
      const m: Record<string, number> = { j: 1, kj: 1000, kcal: 4184 };
      return (value * (m[from] ?? 1)) / (m[to] ?? 1);
    }
    case "fuelEconomy": {
      if (from === to) return value;
      if ((from === "l100" && to === "mpg") || (from === "mpg" && to === "l100"))
        return value > 0 ? 235.215 / value : 0;
      return value;
    }
    case "cooking": {
      const m: Record<string, number> = { tsp: 1, tbsp: 3, cup: 48 };
      return (value * (m[from] ?? 1)) / (m[to] ?? 1);
    }
    case "angle":
      if (from === "deg" && to === "rad") return (value * Math.PI) / 180;
      if (from === "rad" && to === "deg") return (value * 180) / Math.PI;
      return value;
    case "currency":
      return value;
    case "numberBase": {
      const fromBase = from === "Binary" ? 2 : from === "Hex" ? 16 : 10;
      const toBase = to === "Binary" ? 2 : to === "Hex" ? 16 : 10;
      const decimal = parseInt(String(value), fromBase);
      return Number.isFinite(decimal)
        ? decimal.toString(toBase).toUpperCase()
        : "0";
    }
    default:
      return value;
  }
}

// ─── Budget helpers ───────────────────────────────────────────────────────────

const DEFAULT_BUDGET_LABELS = [
  "Monthly Income",
  "Fixed Expenses",
  "Variable Expenses",
  "Savings Target",
  "Other Buffers",
];

// FIX BUG-1: single source of truth for budget field names so getFields and
// computeCalculator always agree on the field name for each label.
function getBudgetLabels(calculator: Calculator): string[] {
  const override = (calculator as any).inputs as string[] | undefined;
  return override && override.length >= 3 ? override : DEFAULT_BUDGET_LABELS;
}

// ─── getFields ────────────────────────────────────────────────────────────────

export function getFields(calculator: Calculator): CalculatorField[] {
  const { variant, formulaType } = calculator;

  switch (formulaType) {
    case "percentage":
      return [
        { name: "part",  label: "Part amount",  type: "number", step: "any", defaultValue: "35" },
        { name: "whole", label: "Whole amount", type: "number", step: "any", defaultValue: "120" },
      ];

    case "ratio":
      return [
        { name: "a", label: "Value A", type: "number", step: "any", defaultValue: "8" },
        { name: "b", label: "Value B", type: "number", step: "any", defaultValue: "2" },
      ];

    case "growth":
      return [
        { name: "start",   label: "Starting amount",        type: "number", step: "any", defaultValue: "5000" },
        { name: "monthly", label: "Monthly addition",       type: "number", step: "any", defaultValue: "150" },
        { name: "rate",    label: "Annual growth rate (%)", type: "number", step: "any", defaultValue: "6" },
        { name: "years",   label: "Years",                  type: "number", step: "any", defaultValue: "10" },
      ];

    case "compound":
      return [
        { name: "principal",            label: "Principal",                        type: "number", step: "any", defaultValue: "10000" },
        { name: "rate",                 label: "Annual return (%)",                type: "number", step: "any", defaultValue: "7" },
        { name: "compoundingFrequency", label: "Compounding frequency (per year)", type: "number", step: "1",   defaultValue: "12" },
        { name: "years",                label: "Years",                            type: "number", step: "any", defaultValue: "15" },
      ];

    case "breakEven":
      return [
        { name: "fixed",    label: "Fixed cost",             type: "number", step: "any", defaultValue: "1000" },
        { name: "price",    label: "Price per unit",         type: "number", step: "any", defaultValue: "25" },
        { name: "variable", label: "Variable cost per unit", type: "number", step: "any", defaultValue: "10" },
      ];

    case "loan":
      return [
        { name: "amount", label: "Loan amount",  type: "number", step: "any", defaultValue: "20000" },
        { name: "rate",   label: "APR (%)",       type: "number", step: "any", defaultValue: "9.5" },
        { name: "years",  label: "Term (years)", type: "number", step: "any", defaultValue: "5" },
      ];

    case "mortgage":
      return [
        { name: "price", label: "Home price",       type: "number", step: "any", defaultValue: "350000" },
        { name: "down",  label: "Down payment",     type: "number", step: "any", defaultValue: "70000" },
        { name: "rate",  label: "Mortgage rate (%)", type: "number", step: "any", defaultValue: "6.5" },
        { name: "years", label: "Term (years)",     type: "number", step: "any", defaultValue: "30" },
      ];

    case "annuity":
      return [
        { name: "balance", label: "Starting balance",       type: "number", step: "any", defaultValue: "25000" },
        { name: "monthly", label: "Monthly contribution",   type: "number", step: "any", defaultValue: "250" },
        { name: "rate",    label: "Annual return (%)",      type: "number", step: "any", defaultValue: "6.5" },
        { name: "years",   label: "Years",                  type: "number", step: "any", defaultValue: "20" },
      ];

    case "withdrawal":
      return [
        { name: "portfolio", label: "Portfolio value",      type: "number", step: "any", defaultValue: "500000" },
        { name: "rate",      label: "Withdrawal rate (%)", type: "number", step: "any", defaultValue: "4" },
        { name: "years",     label: "Years",               type: "number", step: "any", defaultValue: "25" },
      ];

    case "tax":
      return [
        { name: "income",    label: "Income",       type: "number", step: "any", defaultValue: "75000" },
        { name: "rate",      label: "Tax rate (%)", type: "number", step: "any", defaultValue: "18" },
        { name: "deduction", label: "Deduction",   type: "number", step: "any", defaultValue: "5000" },
      ];

    case "bmi":
      return [
        { name: "weight", label: "Weight (kg)", type: "number", step: "any", defaultValue: "72" },
        { name: "height", label: "Height (m)",  type: "number", step: "any", defaultValue: "1.75" },
      ];

    case "pace":
      return [
        { name: "distance", label: "Distance (km)",    type: "number", step: "any", defaultValue: "5" },
        { name: "time",     label: "Time (minutes)", type: "number", step: "any", defaultValue: "28" },
      ];

    case "dateSpan":
      return [
        { name: "startDate", label: "Start date", type: "date", defaultValue: todayISO() },
        { name: "endDate",   label: "End date",   type: "date", defaultValue: new Date(Date.now() + 364 * 86400000).toISOString().slice(0, 10) },
      ];

    case "timeSum":
      return [
        { name: "hours", label: "Hours per day",  type: "number", step: "any", defaultValue: "8" },
        { name: "days",  label: "Days per week",  type: "number", step: "any", defaultValue: "5" },
        { name: "weeks", label: "Weeks",          type: "number", step: "any", defaultValue: "4" },
      ];

    case "area":
      return [
        { name: "length", label: "Length", type: "number", step: "any", defaultValue: "12" },
        { name: "width",  label: "Width",  type: "number", step: "any", defaultValue: "9" },
      ];

    case "geometry":
      return [
        { name: "a", label: "Dimension A", type: "number", step: "any", defaultValue: "12" },
        { name: "b", label: "Dimension B", type: "number", step: "any", defaultValue: "8" },
        { name: "c", label: "Dimension C", type: "number", step: "any", defaultValue: "6" },
      ];

    case "statistics":
      return [
        {
          name: "values",
          label: "Values (comma separated)",
          type: "text",
          defaultValue: "12, 18, 22, 28, 30",
          placeholder: "e.g. 10, 25, 30, 45",
        },
      ];

    case "conversion": {
      const family = calculator.unitFamily ?? "length";

      if (family === "temperature")
        return [
          { name: "value", label: "Temperature",   type: "number", step: "any", defaultValue: "25" },
          { name: "from",  label: "From unit",     type: "select", options: ["C", "F", "K"],        defaultValue: "C" },
          { name: "to",    label: "To unit",       type: "select", options: ["C", "F", "K"],        defaultValue: "F" },
        ];

      if (family === "currency")
        return [
          { name: "value", label: "Amount",         type: "number", step: "any", defaultValue: "100" },
          { name: "rate",  label: "Exchange rate",  type: "number", step: "any", defaultValue: "280" },
          { name: "from",  label: "From currency",  type: "select", options: ["USD", "EUR", "GBP", "PKR", "INR"], defaultValue: "USD" },
          { name: "to",    label: "To currency",    type: "select", options: ["PKR", "USD", "EUR", "GBP", "INR"], defaultValue: "PKR" },
        ];

      if (family === "numberBase")
        return [
          { name: "value", label: "Number",     type: "text",   defaultValue: "1010",    placeholder: "Enter number" },
          { name: "from",  label: "From base",  type: "select", options: ["Binary", "Decimal", "Hex"], defaultValue: "Binary" },
          { name: "to",    label: "To base",    type: "select", options: ["Binary", "Decimal", "Hex"], defaultValue: "Decimal" },
        ];

      if (family === "ascii")
        return [{ name: "value", label: "Character", type: "text", defaultValue: "A", placeholder: "Enter one character" }];

      if (family === "dataSize")
        return [
          { name: "value", label: "Data size",  type: "number", step: "any", defaultValue: "1024" },
          { name: "from",  label: "From unit",  type: "select", options: ["B", "KB", "MB", "GB", "TB"], defaultValue: "MB" },
          { name: "to",    label: "To unit",    type: "select", options: ["B", "KB", "MB", "GB", "TB"], defaultValue: "GB" },
        ];

      const unitMap: Record<string, string[]> = {
        length:     ["m", "km", "mi", "ft", "in"],
        weight:     ["kg", "g", "lb", "oz"],
        area:       ["sqm", "sqft", "acre", "hectare"],
        volume:     ["l", "ml", "gal", "cup"],
        speed:      ["mps", "kph", "mph", "knot"],
        pressure:   ["pa", "kpa", "bar", "psi"],
        time:       ["sec", "min", "hr", "day"],
        power:      ["w", "kw", "hp"],
        energy:     ["j", "kj", "kcal"],
        fuelEconomy:["l100", "mpg"],
        cooking:    ["tsp", "tbsp", "cup"],
        angle:      ["deg", "rad"],
      };
      const units = unitMap[family] ?? ["a", "b"];
      return [
        { name: "value", label: "Value",     type: "number", step: "any", defaultValue: "10" },
        { name: "from",  label: "From unit", type: "select", options: units, defaultValue: units[0] },
        { name: "to",    label: "To unit",   type: "select", options: units, defaultValue: units[1] ?? units[0] },
      ];
    }

    case "mathOps":
      return [
        { name: "a", label: "Value A", type: "number", step: "any", defaultValue: "8" },
        { name: "b", label: "Value B", type: "number", step: "any", defaultValue: "3" },
        { name: "c", label: "Value C", type: "number", step: "any", defaultValue: "2" },
      ];

    case "health":
      switch (variant) {
        case "bmi":
        case "body-fat":
          return [
            { name: "weight", label: "Weight (kg)", type: "number", step: "any", defaultValue: "72" },
            { name: "height", label: "Height (m)",  type: "number", step: "any", defaultValue: "1.75" },
          ];
        case "calorie-needs":
        case "bmr":
          return [
            { name: "weight",   label: "Weight (kg)",    type: "number", step: "any", defaultValue: "72" },
            { name: "activity", label: "Activity factor (1.2–1.9)", type: "number", step: "any", defaultValue: "1.4" },
          ];
        case "ideal-weight":
          return [
            { name: "height", label: "Height (m)",   type: "number", step: "any", defaultValue: "1.75" },
            { name: "frame",  label: "Target BMI",   type: "number", step: "any", defaultValue: "22" },
          ];
        case "heart-rate-zone":
          return [
            { name: "age",       label: "Age",          type: "number", step: "any", defaultValue: "34" },
            { name: "intensity", label: "Intensity (%)", type: "number", step: "any", defaultValue: "70" },
          ];
        case "water-intake":
        case "hydration-goal":
          return [
            { name: "weight",     label: "Weight (kg)",       type: "number", step: "any", defaultValue: "72" },
            { name: "multiplier", label: "ml per kg (30–35)", type: "number", step: "any", defaultValue: "35" },
          ];
        case "pregnancy-due-date":
        case "ovulation":
          return [{ name: "startDate", label: "First day of last period", type: "date", defaultValue: todayISO() }];
        case "waist-to-height-ratio":
          return [
            { name: "waist",  label: "Waist (cm)",  type: "number", step: "any", defaultValue: "82" },
            { name: "height", label: "Height (cm)", type: "number", step: "any", defaultValue: "175" },
          ];
        case "pace":
          return [
            { name: "distance", label: "Distance (km)",  type: "number", step: "any", defaultValue: "5" },
            { name: "time",     label: "Time (minutes)", type: "number", step: "any", defaultValue: "28" },
          ];
        case "steps-to-calories":
          return [
            { name: "steps",  label: "Steps",       type: "number", step: "any", defaultValue: "8000" },
            { name: "weight", label: "Weight (kg)", type: "number", step: "any", defaultValue: "72" },
          ];
        case "sleep-duration":
          return [
            { name: "bed",  label: "Bedtime hour (0–23)",  type: "number", step: "1", defaultValue: "22" },
            { name: "wake", label: "Wake hour (0–23)",     type: "number", step: "1", defaultValue: "6" },
          ];
        case "protein-intake":
          return [
            { name: "weight",     label: "Weight (kg)",        type: "number", step: "any", defaultValue: "72" },
            { name: "multiplier", label: "g per kg (0.8–2.2)", type: "number", step: "any", defaultValue: "0.8" },
          ];
        case "body-surface-area":
          return [
            { name: "height", label: "Height (cm)", type: "number", step: "any", defaultValue: "175" },
            { name: "weight", label: "Weight (kg)", type: "number", step: "any", defaultValue: "72" },
          ];
        default:
          return [
            { name: "valueA", label: "Value A", type: "number", step: "any", defaultValue: "72" },
            { name: "valueB", label: "Value B", type: "number", step: "any", defaultValue: "1.75" },
          ];
      }

    // FIX BUG-1: budget field names now dynamic — derived from labels using
    // the same labelToName() helper that computeCalculator uses.
    case "budget": {
      const labels = getBudgetLabels(calculator);
      return labels.map((label, i) => ({
        name: labelToName(label),
        label,
        type: "number" as const,
        step: "any",
        defaultValue: i === 0 ? "5000" : i === labels.length - 1 ? "200" : "500",
      }));
    }

    // FIX BUG-3: default case — reads from calculator.inputs[] dynamically.
    default: {
      const autoInputs = ((calculator as any).inputs as string[] | undefined) ?? [];
      if (autoInputs.length > 0) {
        return autoInputs.map((label: string) => ({
          name: labelToName(label),
          label,
          type: "number" as const,
          step: "any",
          defaultValue: "0",
        }));
      }
      return [
        { name: "value",  label: "Value",   type: "number" as const, step: "any", defaultValue: "10" },
        { name: "value2", label: "Value 2", type: "number" as const, step: "any", defaultValue: "5" },
      ];
    }
  }
}

// ─── computeCalculator ────────────────────────────────────────────────────────

export function computeCalculator(
  calculator: Calculator,
  values: Record<string, string | number>,
): ComputeResult {
  const v = (name: string, fallback = 0) => number(values[name], fallback);
  const err = (msg: string): ComputeResult => ({
    primaryLabel: "Error",
    primaryValue: "—",
    supporting: [],
    error: msg,
  });

  switch (calculator.formulaType) {
    // ── Percentage ──────────────────────────────────────────────────────────
    case "percentage": {
      const part  = number(values.part, 0);
      const whole = number(values.whole, 0);
      if (whole === 0) return err("Whole amount cannot be zero.");
      const pct = safeDivide(part, whole) * 100;
      return {
        primaryLabel: "Percentage",
        primaryValue: `${round(pct)}%`,
        supporting: [
          { label: "Part",  value: round(part) },
          { label: "Whole", value: round(whole) },
        ],
      };
    }

    // ── Ratio ───────────────────────────────────────────────────────────────
    case "ratio": {
      const a = positiveNumber(values.a, 1);
      const b = positiveNumber(values.b, 1);
      if (b === 0) return err("Value B cannot be zero.");
      return {
        primaryLabel: "Ratio A : B",
        primaryValue: `${round(safeDivide(a, b), 4)} : 1`,
        supporting: [
          { label: "A", value: round(a) },
          { label: "B", value: round(b) },
        ],
      };
    }

    // ── Growth (compound with monthly contributions) ─────────────────────────
    case "growth": {
      const start   = positiveNumber(values.start);
      const monthly = positiveNumber(values.monthly);
      const rate    = number(values.rate);
      const years   = positiveNumber(values.years);
      const periods = Math.max(0, Math.round(years * 12));
      const r = Math.max(0, rate) / 100 / 12;
      const g = Math.pow(1 + r, periods);
      const future = r === 0
        ? start + monthly * periods
        : start * g + monthly * ((g - 1) / r);
      const contributions = monthly * periods;
      return {
        primaryLabel: "Projected amount",
        primaryValue: `$${round(future)}`,
        supporting: [
          { label: "Starting amount",   value: `$${round(start)}` },
          { label: "Total contributed", value: `$${round(contributions)}` },
          { label: "Growth earned",     value: `$${round(Math.max(0, future - start - contributions))}` },
        ],
      };
    }

    // ── Compound interest ────────────────────────────────────────────────────
    case "compound": {
      const principal = positiveNumber(values.principal);
      const rate      = Math.max(0, number(values.rate)) / 100;
      const freq      = Math.max(1, positiveNumber(values.compoundingFrequency, 12));
      const years     = positiveNumber(values.years);
      if (principal <= 0) return err("Principal must be greater than 0.");
      if (years <= 0)     return err("Years must be greater than 0.");
      const future = principal * Math.pow(1 + rate / freq, freq * years);
      if (!Number.isFinite(future)) return err("Result too large — check your inputs.");
      return {
        primaryLabel: "Future value",
        primaryValue: `$${round(future)}`,
        supporting: [
          { label: "Principal",      value: `$${round(principal)}` },
          { label: "Estimated gain", value: `$${round(future - principal)}` },
          { label: "Growth multiple", value: `${round(safeDivide(future, principal), 2)}×` },
        ],
      };
    }

    // ── Break-even ───────────────────────────────────────────────────────────
    case "breakEven": {
      const fixed    = positiveNumber(values.fixed);
      const price    = positiveNumber(values.price);
      const variable = positiveNumber(values.variable);
      if (price <= variable) return err("Price must be greater than variable cost.");
      const contribution = price - variable;
      const units = safeDivide(fixed, contribution);
      return {
        primaryLabel: "Break-even units",
        primaryValue: `${round(units, 0)} units`,
        supporting: [
          { label: "Fixed cost",          value: `$${round(fixed)}` },
          { label: "Contribution/unit",   value: `$${round(contribution)}` },
          { label: "Break-even revenue",  value: `$${round(units * price)}` },
        ],
      };
    }

    // ── Loan ─────────────────────────────────────────────────────────────────
    case "loan": {
      const amount = positiveNumber(values.amount);
      const rate   = Math.max(0, number(values.rate));
      const years  = Math.max(0, positiveNumber(values.years, 1));
      if (amount <= 0) return err("Loan amount must be greater than 0.");
      if (years  <= 0) return err("Loan term must be at least 1 year.");
      const r = rate / 100 / 12;
      const n = Math.round(years * 12);
      const payment = r === 0
        ? amount / n
        : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      if (!Number.isFinite(payment) || payment < 0) return err("Invalid inputs — check rate and term.");
      const total = payment * n;
      return {
        primaryLabel: "Monthly payment",
        primaryValue: `$${round(payment)}`,
        supporting: [
          { label: "Loan amount",    value: `$${round(amount)}` },
          { label: "Total repaid",   value: `$${round(total)}` },
          { label: "Total interest", value: `$${round(total - amount)}` },
        ],
      };
    }

    // ── Mortgage ──────────────────────────────────────────────────────────────
    case "mortgage": {
      const price  = positiveNumber(values.price);
      const down   = positiveNumber(values.down);
      const rate   = Math.max(0, number(values.rate));
      const years  = Math.max(1, positiveNumber(values.years, 30));
      const amount = Math.max(0, price - down);
      if (amount <= 0) return err("Loan amount is 0 — down payment covers full price.");
      const r = rate / 100 / 12;
      const n = Math.round(years * 12);
      const payment = r === 0
        ? amount / n
        : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      if (!Number.isFinite(payment) || payment < 0) return err("Invalid inputs.");
      return {
        primaryLabel: "Monthly payment (P + I)",
        primaryValue: `$${round(payment)}`,
        supporting: [
          { label: "Loan amount",    value: `$${round(amount)}` },
          { label: "Down payment",   value: `$${round(down)}` },
          { label: "Total interest", value: `$${round(payment * n - amount)}` },
        ],
      };
    }

    // ── Annuity ───────────────────────────────────────────────────────────────
    case "annuity": {
      const balance = positiveNumber(values.balance);
      const monthly = positiveNumber(values.monthly);
      const rate    = Math.max(0, number(values.rate));
      const years   = positiveNumber(values.years);
      const periods = Math.max(0, Math.round(years * 12));
      const r = rate / 100 / 12;
      const g = Math.pow(1 + r, periods);
      const future = r === 0
        ? balance + monthly * periods
        : balance * g + monthly * ((g - 1) / r);
      const contributions = monthly * periods;
      return {
        primaryLabel: "Projected balance",
        primaryValue: `$${round(future)}`,
        supporting: [
          { label: "Starting balance", value: `$${round(balance)}` },
          { label: "Contributions",    value: `$${round(contributions)}` },
          { label: "Growth earned",    value: `$${round(Math.max(0, future - balance - contributions))}` },
        ],
      };
    }

    // ── Withdrawal ────────────────────────────────────────────────────────────
    case "withdrawal": {
      const portfolio = positiveNumber(values.portfolio);
      const rate      = Math.max(0, number(values.rate));
      const years     = positiveNumber(values.years);
      if (portfolio <= 0) return err("Portfolio value must be greater than 0.");
      const yearly  = portfolio * (rate / 100);
      const monthly = yearly / 12;
      return {
        primaryLabel: "Annual withdrawal",
        primaryValue: `$${round(yearly)}`,
        supporting: [
          { label: "Monthly withdrawal",              value: `$${round(monthly)}` },
          { label: "Portfolio value",                 value: `$${round(portfolio)}` },
          { label: `Total over ${round(years, 0)} yrs`, value: `$${round(yearly * years)}` },
        ],
      };
    }

    // ── Budget (FIX BUG-2: reads dynamic names matching getFields) ───────────
    case "budget": {
      const labels  = getBudgetLabels(calculator);
      const names   = labels.map(labelToName);
      // First field = income, rest = expenses/outflows
      const income  = v(names[0] ?? "monthly_income");
      const outflow = names.slice(1).map((n) => v(n));
      const totalOut = outflow.reduce((a, b) => a + b, 0);
      const balance = income - totalOut;
      // Find savings by matching label
      const savingsIdx = labels.findIndex((l) =>
        l.toLowerCase().includes("saving")
      );
      const savings     = savingsIdx > 0 ? v(names[savingsIdx]) : 0;
      const savingsRate = income > 0 ? safeDivide(savings, income) * 100 : 0;
      return {
        primaryLabel: "Monthly Surplus / Deficit",
        primaryValue: `$${round(balance)}`,
        supporting: [
          { label: "Income",       value: `$${round(income)}` },
          { label: "Total Outflow", value: `$${round(totalOut)}` },
          { label: "Savings Rate", value: `${round(savingsRate)}%` },
        ],
      };
    }

    // ── Tax ───────────────────────────────────────────────────────────────────
    case "tax": {
      const income    = positiveNumber(values.income);
      const rate      = Math.max(0, number(values.rate));
      const deduction = positiveNumber(values.deduction);
      if (rate > 100) return err("Tax rate cannot exceed 100%.");
      const taxable = Math.max(0, income - deduction);
      const tax     = taxable * (rate / 100);
      return {
        primaryLabel: "Estimated tax",
        primaryValue: `$${round(tax)}`,
        supporting: [
          { label: "Gross income",   value: `$${round(income)}` },
          { label: "Taxable income", value: `$${round(taxable)}` },
          { label: "Net after tax",  value: `$${round(income - tax)}` },
        ],
      };
    }

    // ── BMI ───────────────────────────────────────────────────────────────────
    case "bmi": {
      const weight = positiveNumber(values.weight);
      const height = Math.max(0.01, positiveNumber(values.height, 1));
      if (weight <= 0) return err("Weight must be greater than 0.");
      const bmi = weight / (height * height);
      const category =
        bmi < 18.5 ? "Underweight"
        : bmi < 25 ? "Normal weight"
        : bmi < 30 ? "Overweight"
        : "Obese";
      return {
        primaryLabel: "BMI",
        primaryValue: round(bmi),
        supporting: [
          { label: "Category", value: category },
          { label: "Weight",   value: `${round(weight)} kg` },
          { label: "Height",   value: `${round(height, 2)} m` },
        ],
      };
    }

    // ── Pace (FIX: MM:SS format) ──────────────────────────────────────────────
    case "pace": {
      const distance = Math.max(0.01, positiveNumber(values.distance));
      const time     = positiveNumber(values.time, 1);
      if (distance <= 0) return err("Distance must be greater than 0.");
      if (time <= 0)     return err("Time must be greater than 0.");
      const paceDecimal = safeDivide(time, distance);
      const speed       = safeDivide(distance, time / 60); // km/h
      return {
        primaryLabel: "Pace",
        primaryValue: formatPace(paceDecimal),
        supporting: [
          { label: "Speed",    value: `${round(speed)} km/h` },
          { label: "Distance", value: `${round(distance)} km` },
          { label: "Time",     value: `${round(time)} min` },
        ],
      };
    }

    // ── Date span ─────────────────────────────────────────────────────────────
    case "dateSpan": {
      const start = new Date(String(values.startDate ?? todayISO()));
      const end   = new Date(String(values.endDate   ?? todayISO()));
      if (isNaN(start.getTime()) || isNaN(end.getTime()))
        return err("Invalid date — please check your inputs.");
      const ms      = Math.abs(end.getTime() - start.getTime());
      const days    = Math.round(ms / 86400000);
      const weeks   = Math.floor(days / 7);
      const months  = Math.floor(days / 30.44);
      return {
        primaryLabel: "Days between dates",
        primaryValue: `${days} day${days !== 1 ? "s" : ""}`,
        supporting: [
          { label: "Weeks",           value: `${weeks} week${weeks !== 1 ? "s" : ""}` },
          { label: "Months (approx)", value: `${months} month${months !== 1 ? "s" : ""}` },
          { label: "Start",           value: start.toISOString().slice(0, 10) },
        ],
      };
    }

    // ── Time sum ──────────────────────────────────────────────────────────────
    case "timeSum": {
      const hours = positiveNumber(values.hours);
      const days  = positiveNumber(values.days);
      const weeks = positiveNumber(values.weeks);
      const total = hours * days * weeks;
      return {
        primaryLabel: "Total hours",
        primaryValue: `${round(total, 0)} hours`,
        supporting: [
          { label: "Hours/day",      value: round(hours, 0) },
          { label: "Days/week",      value: round(days, 0) },
          { label: "Equivalent days", value: `${round(total / 24, 1)} days` },
        ],
      };
    }

    // ── Area ──────────────────────────────────────────────────────────────────
    case "area": {
      const length = positiveNumber(values.length);
      const width  = positiveNumber(values.width);
      const area   = length * width;
      return {
        primaryLabel: "Area",
        primaryValue: `${round(area)} sq units`,
        supporting: [
          { label: "Length",    value: round(length) },
          { label: "Width",     value: round(width) },
          { label: "Perimeter", value: `${round(2 * (length + width))} units` },
        ],
      };
    }

    // ── Geometry ──────────────────────────────────────────────────────────────
    case "geometry": {
      const a = positiveNumber(values.a);
      const b = positiveNumber(values.b);
      const c = positiveNumber(values.c);
      if (calculator.variant.includes("circle")) {
        const area = Math.PI * a * a;
        return {
          primaryLabel: "Circle area",
          primaryValue: `${round(area)} sq units`,
          supporting: [
            { label: "Radius",        value: round(a) },
            { label: "Circumference", value: `${round(2 * Math.PI * a)} units` },
          ],
        };
      }
      if (calculator.variant.includes("triangle")) {
        return {
          primaryLabel: "Triangle area",
          primaryValue: `${round((a * b) / 2)} sq units`,
          supporting: [
            { label: "Base",   value: round(a) },
            { label: "Height", value: round(b) },
          ],
        };
      }
      return {
        primaryLabel: "Volume",
        primaryValue: `${round(a * b * c)} cu units`,
        supporting: [
          { label: "A", value: round(a) },
          { label: "B", value: round(b) },
          { label: "C", value: round(c) },
        ],
      };
    }

    // ── Statistics ────────────────────────────────────────────────────────────
    case "statistics": {
      const nums = toNumberArray(String(values.values ?? ""));
      if (nums.length === 0) return err("Enter at least one valid number.");
      const mean   = nums.reduce((s, x) => s + x, 0) / nums.length;
      const sorted = [...nums].sort((x, y) => x - y);
      const mid    = Math.floor(sorted.length / 2);
      const median = sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
      const variance = nums.reduce((s, x) => s + (x - mean) ** 2, 0) / nums.length;
      return {
        primaryLabel: "Mean",
        primaryValue: round(mean),
        supporting: [
          { label: "Median",        value: round(median) },
          { label: "Std. deviation", value: round(Math.sqrt(variance)) },
          { label: "Count",         value: String(nums.length) },
        ],
      };
    }

    // ── Conversion ────────────────────────────────────────────────────────────
    case "conversion": {
      const family = calculator.unitFamily ?? "length";
      const raw    = v("value");
      const from   = String(values.from ?? "");
      const to     = String(values.to   ?? "");

      if (family === "temperature") {
        let celsius = raw;
        if (from === "F") celsius = (raw - 32) / 1.8;
        if (from === "K") celsius = raw - 273.15;
        let out = celsius;
        if (to === "F") out = celsius * 1.8 + 32;
        if (to === "K") out = celsius + 273.15;
        return {
          primaryLabel: "Converted temperature",
          primaryValue: `${round(out)} °${to}`,
          supporting: [{ label: "Source", value: `${round(raw)} °${from}` }],
        };
      }

      if (family === "currency") {
        const rate = v("rate", 1);
        if (rate <= 0) return err("Exchange rate must be greater than 0.");
        return {
          primaryLabel: "Converted amount",
          primaryValue: `${round(raw * rate)} ${to}`,
          supporting: [
            { label: "Amount", value: `${round(raw)} ${from}` },
            { label: "Rate",   value: `1 ${from} = ${round(rate)} ${to}` },
          ],
        };
      }

      if (family === "numberBase") {
        const fromBase = from === "Binary" ? 2 : from === "Hex" ? 16 : 10;
        const toBase   = to   === "Binary" ? 2 : to   === "Hex" ? 16 : 10;
        const input    = String(values.value ?? "0").trim();
        const decimal  = parseInt(input, fromBase);
        if (isNaN(decimal)) return err(`"${input}" is not a valid ${from} number.`);
        const converted = decimal.toString(toBase).toUpperCase();
        return {
          primaryLabel: "Converted value",
          primaryValue: converted,
          supporting: [
            { label: "Decimal (base 10)", value: String(decimal) },
            { label: "Input",             value: `${input} (${from})` },
          ],
        };
      }

      if (family === "ascii") {
        const char = String(values.value ?? "A").charAt(0);
        const code = char.charCodeAt(0);
        return {
          primaryLabel: "ASCII code",
          primaryValue: String(code),
          supporting: [
            { label: "Character", value: char },
            { label: "Hex",       value: `0x${code.toString(16).toUpperCase()}` },
            { label: "Binary",    value: code.toString(2).padStart(8, "0") },
          ],
        };
      }

      if (from === to) {
        return {
          primaryLabel: "Converted value",
          primaryValue: `${round(raw)} ${to}`,
          supporting: [{ label: "Note", value: "Same unit selected" }],
        };
      }

      const out = conversionValue(raw, from, to, family);
      return {
        primaryLabel: "Converted value",
        primaryValue: `${typeof out === "number" ? round(out) : out} ${to}`,
        supporting: [
          { label: "Source", value: `${round(raw)} ${from}` },
        ],
      };
    }

    // ── Math operations ───────────────────────────────────────────────────────
    case "mathOps": {
      const { variant } = calculator;
      const a = v("a", 1);
      const b = v("b", 1);
      const c = v("c", 1);

      if (variant === "exponent") {
        const result = Math.pow(a, b);
        return {
          primaryLabel: `${round(a, 0)}^${round(b, 0)}`,
          primaryValue: Number.isFinite(result) ? round(result) : "—",
          supporting: [{ label: "Base", value: round(a) }, { label: "Power", value: round(b) }],
        };
      }

      if (variant === "logarithm") {
        if (a <= 0)  return err("Value must be positive for logarithm.");
        if (b <= 1)  return err("Log base must be greater than 1.");
        const result = Math.log(a) / Math.log(b);
        return {
          primaryLabel: `log${round(b, 0)}(${round(a, 0)})`,
          primaryValue: round(result),
          supporting: [{ label: "Natural log", value: round(Math.log(a)) }],
        };
      }

      // FIX BUG-4: square root — error on negative instead of silently abs()
      if (variant === "square-root") {
        if (a < 0) return err("Cannot take square root of a negative number.");
        return {
          primaryLabel: "Square root",
          primaryValue: round(Math.sqrt(a)),
          supporting: [{ label: "Input", value: round(a) }],
        };
      }

      if (variant === "scientific") {
        return {
          primaryLabel: "Result",
          primaryValue: round(Math.sin((a * Math.PI) / 180) + Math.pow(a, b)),
          supporting: [{ label: "sin(A°)", value: round(Math.sin((a * Math.PI) / 180)) }],
        };
      }

      if (variant === "permutation") {
        const n = Math.max(0, Math.round(a));
        const r = Math.max(0, Math.round(b));
        if (r > n) return err("r cannot exceed n in permutations.");
        let out = 1;
        for (let i = 0; i < r; i++) out *= n - i;
        return {
          primaryLabel: "P(n,r)",
          primaryValue: round(out, 0),
          supporting: [{ label: "n", value: String(n) }, { label: "r", value: String(r) }],
        };
      }

      if (variant === "combination") {
        const n = Math.max(0, Math.round(a));
        const r = Math.max(0, Math.round(b));
        if (r > n) return err("r cannot exceed n in combinations.");
        let num = 1, den = 1;
        for (let i = 1; i <= r; i++) { num *= n - (r - i); den *= i; }
        return {
          primaryLabel: "C(n,r)",
          primaryValue: round(safeDivide(num, den, 0), 0),
          supporting: [{ label: "n", value: String(n) }, { label: "r", value: String(r) }],
        };
      }

      if (variant === "rounding") {
        const digits = Math.max(0, Math.round(b));
        return {
          primaryLabel: "Rounded",
          primaryValue: round(a, digits),
          supporting: [{ label: "Decimal places", value: String(digits) }],
        };
      }

      if (variant === "greatest-common-factor") {
        return {
          primaryLabel: "GCF",
          primaryValue: String(gcf(Math.round(a), Math.round(b))),
          supporting: [{ label: "A", value: round(a, 0) }, { label: "B", value: round(b, 0) }],
        };
      }

      if (variant === "least-common-multiple") {
        return {
          primaryLabel: "LCM",
          primaryValue: String(lcm(Math.round(a), Math.round(b))),
          supporting: [{ label: "A", value: round(a, 0) }, { label: "B", value: round(b, 0) }],
        };
      }

      // FIX BUG-5: quadratic — show "No real roots" when discriminant < 0
      if (variant === "quadratic-formula") {
        if (a === 0) return err("Coefficient a cannot be 0.");
        const disc = b * b - 4 * a * c;
        if (disc < 0) {
          return {
            primaryLabel: "No real roots",
            primaryValue: "—",
            supporting: [{ label: "Discriminant", value: round(disc) }],
          };
        }
        const r1 = (-b + Math.sqrt(disc)) / (2 * a);
        const r2 = (-b - Math.sqrt(disc)) / (2 * a);
        return {
          primaryLabel: "Root 1",
          primaryValue: round(r1),
          supporting: [
            { label: "Root 2",        value: round(r2) },
            { label: "Discriminant",  value: round(disc) },
          ],
        };
      }

      // FIX BUG-6: random-number — actual Math.random(), not midpoint
      if (variant === "random-number") {
        const min = Math.min(Math.round(a), Math.round(b));
        const max = Math.max(Math.round(a), Math.round(b));
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        return {
          primaryLabel: "Random number",
          primaryValue: String(rand),
          supporting: [
            { label: "Range", value: `${min} – ${max}` },
            { label: "Tip",   value: "Click Calculate again for a new number" },
          ],
        };
      }

      return {
        primaryLabel: "Result",
        primaryValue: round(a + b + c),
        supporting: [{ label: "Inputs", value: `${round(a)}, ${round(b)}, ${round(c)}` }],
      };
    }

    // ── Health ────────────────────────────────────────────────────────────────
    case "health": {
      const { variant } = calculator;

      if (variant === "bmi") {
        const weight = positiveNumber(values.weight);
        const height = Math.max(0.01, positiveNumber(values.height, 1));
        if (weight <= 0) return err("Weight must be greater than 0.");
        const bmi = weight / (height * height);
        const cat =
          bmi < 18.5 ? "Underweight"
          : bmi < 25 ? "Normal weight"
          : bmi < 30 ? "Overweight"
          : "Obese";
        return {
          primaryLabel: "BMI",
          primaryValue: round(bmi),
          supporting: [
            { label: "Category", value: cat },
            { label: "Weight",   value: `${round(weight)} kg` },
          ],
        };
      }

      // FIX BUG-7: body-fat — use better BMI-based approximation with note
      if (variant === "body-fat") {
        const weight = positiveNumber(values.weight);
        const height = Math.max(0.01, positiveNumber(values.height, 1));
        if (weight <= 0 || height <= 0) return err("Enter valid weight and height.");
        const bmi     = weight / (height * height);
        // Deurenberg simplified (no age/sex — approximation only)
        const bodyFat = Math.max(0, 1.2 * bmi + 0.23 * 30 - 5.4);
        return {
          primaryLabel: "Body fat (estimate)",
          primaryValue: `${round(bodyFat)}%`,
          supporting: [
            { label: "BMI",  value: round(bmi) },
            { label: "Note", value: "Add age for accuracy" },
          ],
        };
      }

      if (variant === "calorie-needs" || variant === "bmr") {
        const weight   = positiveNumber(values.weight);
        const activity = Math.max(1, number(values.activity, 1.2));
        if (weight <= 0) return err("Weight must be greater than 0.");
        const bmrVal = weight * 24;
        const tdee   = bmrVal * activity;
        return {
          primaryLabel: "Daily calories (TDEE)",
          primaryValue: `${round(tdee, 0)} kcal`,
          supporting: [
            { label: "BMR (at rest)",    value: `${round(bmrVal, 0)} kcal` },
            { label: "Activity factor", value: round(activity) },
          ],
        };
      }

      if (variant === "ideal-weight") {
        const height = Math.max(0.01, positiveNumber(values.height, 1));
        const bmiTarget = Math.max(1, number(values.frame, 22));
        return {
          primaryLabel: "Ideal weight",
          primaryValue: `${round(height * height * bmiTarget, 1)} kg`,
          supporting: [
            { label: "Height",     value: `${round(height, 2)} m` },
            { label: "Target BMI", value: round(bmiTarget) },
          ],
        };
      }

      if (variant === "heart-rate-zone") {
        const age       = Math.max(1, positiveNumber(values.age));
        const intensity = Math.max(0, number(values.intensity));
        const maxHR     = Math.max(0, 220 - age);
        return {
          primaryLabel: "Target heart rate",
          primaryValue: `${round((maxHR * intensity) / 100, 0)} bpm`,
          supporting: [
            { label: "Max HR",     value: `${round(maxHR, 0)} bpm` },
            { label: "Intensity",  value: `${round(intensity)}%` },
          ],
        };
      }

      if (variant === "water-intake" || variant === "hydration-goal") {
        const weight = positiveNumber(values.weight);
        const mult   = Math.max(0, number(values.multiplier));
        if (weight <= 0) return err("Weight must be greater than 0.");
        const ml = weight * mult;
        return {
          primaryLabel: "Daily water goal",
          primaryValue: `${round(ml / 1000, 1)} L`,
          supporting: [
            { label: "In millilitres", value: `${round(ml, 0)} ml` },
            { label: "Weight",         value: `${round(weight)} kg` },
          ],
        };
      }

      if (variant === "pregnancy-due-date" || variant === "ovulation") {
        const start = new Date(String(values.startDate ?? todayISO()));
        if (isNaN(start.getTime())) return err("Invalid date.");
        const due      = new Date(start.getTime() + 280 * 86400000);
        const ovulation = new Date(start.getTime() + 14 * 86400000);
        return {
          primaryLabel: "Estimated due date",
          primaryValue: due.toISOString().slice(0, 10),
          supporting: [
            { label: "Est. ovulation", value: ovulation.toISOString().slice(0, 10) },
            { label: "LMP",            value: start.toISOString().slice(0, 10) },
          ],
        };
      }

      if (variant === "waist-to-height-ratio") {
        const waist  = positiveNumber(values.waist);
        const height = Math.max(0.01, positiveNumber(values.height));
        if (waist <= 0 || height <= 0) return err("Enter valid waist and height.");
        const ratio = safeDivide(waist, height);
        const cat   = ratio < 0.4 ? "Very lean" : ratio < 0.5 ? "Healthy" : ratio < 0.6 ? "Overweight" : "High risk";
        return {
          primaryLabel: "Waist-to-height ratio",
          primaryValue: round(ratio, 3),
          supporting: [
            { label: "Category", value: cat },
            { label: "Waist",    value: `${round(waist)} cm` },
          ],
        };
      }

      if (variant === "pace") {
        const dist = Math.max(0.01, positiveNumber(values.distance));
        const time = positiveNumber(values.time, 1);
        if (dist <= 0) return err("Distance must be greater than 0.");
        return {
          primaryLabel: "Pace",
          primaryValue: formatPace(safeDivide(time, dist)),
          supporting: [
            { label: "Speed",    value: `${round(safeDivide(dist, time / 60))} km/h` },
            { label: "Distance", value: `${round(dist)} km` },
          ],
        };
      }

      if (variant === "steps-to-calories") {
        const steps  = positiveNumber(values.steps);
        const weight = positiveNumber(values.weight);
        if (weight <= 0) return err("Weight must be greater than 0.");
        const cal = steps * 0.04 * (weight / 70);
        return {
          primaryLabel: "Calories burned",
          primaryValue: `${round(cal, 0)} kcal`,
          supporting: [
            { label: "Steps",  value: round(steps, 0) },
            { label: "Weight", value: `${round(weight)} kg` },
          ],
        };
      }

      if (variant === "sleep-duration") {
        const bed  = number(values.bed);
        const wake = number(values.wake);
        const hrs  = ((wake - bed) + 24) % 24;
        const cycles = Math.floor(hrs / 1.5);
        return {
          primaryLabel: "Sleep duration",
          primaryValue: `${round(hrs, 1)} hours`,
          supporting: [
            { label: "Sleep cycles (~90 min)", value: `~${cycles}` },
            { label: "Bedtime",                value: `${Math.round(bed)}:00` },
          ],
        };
      }

      if (variant === "protein-intake") {
        const weight = positiveNumber(values.weight);
        const mult   = Math.max(0, number(values.multiplier));
        if (weight <= 0) return err("Weight must be greater than 0.");
        const grams = weight * mult;
        return {
          primaryLabel: "Daily protein target",
          primaryValue: `${round(grams, 0)} g`,
          supporting: [
            { label: "Per meal (3×)", value: `${round(grams / 3, 0)} g` },
            { label: "Weight",        value: `${round(weight)} kg` },
          ],
        };
      }

      if (variant === "body-surface-area") {
        const height = positiveNumber(values.height);
        const weight = positiveNumber(values.weight);
        if (height <= 0 || weight <= 0) return err("Enter valid height and weight.");
        // Mosteller formula: BSA = sqrt((H_cm × W_kg) / 3600)
        const bsa = Math.sqrt((height * weight) / 3600);
        return {
          primaryLabel: "Body surface area",
          primaryValue: `${round(bsa, 3)} m²`,
          supporting: [
            { label: "Height", value: `${round(height)} cm` },
            { label: "Weight", value: `${round(weight)} kg` },
          ],
        };
      }

      return { primaryLabel: "Result", primaryValue: "—", supporting: [] };
    }

    // FIX BUG-3: default — reads dynamic names from calculator.inputs[]
    // Uses outputs[] for label, falls back to first-minus-rest formula.
    default: {
      const autoInputs  = ((calculator as any).inputs  as string[] | undefined) ?? [];
      const autoOutputs = ((calculator as any).outputs as string[] | undefined) ?? [];

      if (autoInputs.length > 0) {
        const names  = autoInputs.map(labelToName);
        const vals   = names.map((n: string) => v(n));
        const income = vals[0] ?? 0;
        const costs  = vals.slice(1).reduce((a: number, b: number) => a + b, 0);
        const result = income - costs;
        const isMoney = !["health", "math", "conversion"].includes(
          (calculator as any).categorySlug ?? ""
        );
        const fmt = (n: number) => (isMoney ? `$${round(n)}` : round(n));
        return {
          primaryLabel: autoOutputs[0] ?? "Result",
          primaryValue: fmt(result),
          supporting: vals.slice(1, 4).map((val: number, i: number) => ({
            label: autoInputs[i + 1] ?? `Input ${i + 2}`,
            value: fmt(val),
          })) as ResultRow[],
        };
      }

      return { primaryLabel: "Result", primaryValue: "—", supporting: [] };
    }
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getInitialValues(
  fields: CalculatorField[],
): Record<string, string> {
  return Object.fromEntries(
    fields.map((f) => [
      f.name,
      f.defaultValue ??
        (f.type === "select"
          ? (f.options?.[0] ?? "")
          : f.type === "date"
          ? todayISO()
          : "0"),
    ]),
  );
}

export function formatFieldLabel(label: string): string {
  return label;
}
