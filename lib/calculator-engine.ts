import type { Calculator } from "@/data/calculators";

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

const round = (value: number, digits = 2) => {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
};

const number = (value: unknown, fallback = 0) => {
  const parsed = typeof value === "string" ? Number(value) : Number(value ?? fallback);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const positiveNumber = (value: unknown, fallback = 0) => Math.max(0, number(value, fallback));

const safeDivide = (numerator: number, denominator: number, fallback = 0) => {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) return fallback;
  return numerator / denominator;
};


export function getFields(calculator: Calculator): CalculatorField[] {
  const variant = calculator.variant;

  switch (calculator.formulaType) {
    case "percentage": {
      const customInputsPct: string[] = (calculator as any).inputs || [];
      const variantDefaults: Record<string, string[]> = {
        "net-worth":        ["10000", "25000", "200000", "15000", "150000", "5000"],
        "roi":              ["10000", "13000", "200", "1"],
        "markup":           ["50", "75"],
        "profit-margin":    ["50000", "30000", "8000"],
        "commission":       ["20000", "5", "3000", "10000", "500"],
        "pricing-strategy": ["40", "30", "10", "10"],
        "mutual-fund-fee":  ["50000", "0.75", "20", "500"],
        "investment-return":["10000", "13500", "500", "100"],
        "stock-profit":     ["50", "65", "100", "10"],
        "expense-split":    ["120", "3"],
      };
      const defs = variantDefaults[calculator.variant] || [];
      if (customInputsPct.length >= 2) {
        return customInputsPct.map((label: string, i: number) => ({
          name: label.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/, "") || `input_${i}`,
          label,
          type: "number" as const,
          step: "any",
          defaultValue: defs[i] ?? (i === 0 ? "10000" : i === 1 ? "8" : "0"),
        }));
      }
      return [
        { name: "part", label: "Part amount", type: "number", step: "any", defaultValue: "35" },
        { name: "whole", label: "Whole amount", type: "number", step: "any", defaultValue: "120" },
      ];
    }
    case "ratio":
      return [
        { name: "a", label: "Value A", type: "number", step: "any", defaultValue: "8" },
        { name: "b", label: "Value B", type: "number", step: "any", defaultValue: "2" },
      ];
    case "growth":
      return [
        { name: "start", label: "Starting amount", type: "number", step: "any", defaultValue: "5000" },
        { name: "monthly", label: "Monthly addition", type: "number", step: "any", defaultValue: "150" },
        { name: "rate", label: "Annual growth rate (%)", type: "number", step: "any", defaultValue: "6" },
        { name: "years", label: "Years", type: "number", step: "any", defaultValue: "10" },
      ];
    case "compound":
      return [
        { name: "principal", label: "Principal", type: "number", step: "any", defaultValue: "10000" },
        { name: "rate", label: "Annual return (%)", type: "number", step: "any", defaultValue: "7" },
        { name: "compoundingFrequency", label: "Compounding frequency per year", type: "number", step: "1", defaultValue: "12" },
        { name: "years", label: "Years", type: "number", step: "any", defaultValue: "15" },
      ];
    case "breakEven":
      return [
        { name: "fixed", label: "Fixed cost", type: "number", step: "any", defaultValue: "1000" },
        { name: "price", label: "Price per unit", type: "number", step: "any", defaultValue: "25" },
        { name: "variable", label: "Variable cost per unit", type: "number", step: "any", defaultValue: "10" },
      ];
    case "loan":
      return [
        { name: "amount", label: "Loan amount", type: "number", step: "any", defaultValue: "20000" },
        { name: "rate", label: "APR (%)", type: "number", step: "any", defaultValue: "9.5" },
        { name: "years", label: "Term (years)", type: "number", step: "any", defaultValue: "5" },
      ];
    case "mortgage":
      return [
        { name: "price", label: "Home price", type: "number", step: "any", defaultValue: "350000" },
        { name: "down", label: "Down payment", type: "number", step: "any", defaultValue: "70000" },
        { name: "rate", label: "Mortgage rate (%)", type: "number", step: "any", defaultValue: "6.5" },
        { name: "years", label: "Term (years)", type: "number", step: "any", defaultValue: "30" },
      ];
    case "annuity":
      return [
        { name: "balance", label: "Starting balance", type: "number", step: "any", defaultValue: "25000" },
        { name: "monthly", label: "Monthly contribution", type: "number", step: "any", defaultValue: "250" },
        { name: "rate", label: "Annual return (%)", type: "number", step: "any", defaultValue: "6.5" },
        { name: "years", label: "Years", type: "number", step: "any", defaultValue: "20" },
      ];
    case "withdrawal":
      return [
        { name: "portfolio", label: "Portfolio value", type: "number", step: "any", defaultValue: "500000" },
        { name: "rate", label: "Withdrawal rate (%)", type: "number", step: "any", defaultValue: "4" },
        { name: "years", label: "Years", type: "number", step: "any", defaultValue: "25" },
      ];
    case "tax":
      return [
        { name: "income", label: "Income", type: "number", step: "any", defaultValue: "75000" },
        { name: "rate", label: "Tax rate (%)", type: "number", step: "any", defaultValue: "18" },
        { name: "deduction", label: "Deduction", type: "number", step: "any", defaultValue: "5000" },
      ];
    case "bmi":
      return [
        { name: "weight", label: "Weight (kg)", type: "number", step: "any", defaultValue: "72" },
        { name: "height", label: "Height (m)", type: "number", step: "any", defaultValue: "1.75" },
      ];
    case "pace":
      return [
        { name: "distance", label: "Distance (km)", type: "number", step: "any", defaultValue: "5" },
        { name: "time", label: "Time (minutes)", type: "number", step: "any", defaultValue: "28" },
      ];
    case "dateSpan":
      return [
        { name: "startDate", label: "Start date", type: "date", defaultValue: "2026-01-01" },
        { name: "endDate", label: "End date", type: "date", defaultValue: "2026-12-31" },
      ];
    case "timeSum":
      return [
        { name: "hours", label: "Hours per day", type: "number", step: "any", defaultValue: "8" },
        { name: "days", label: "Days per week", type: "number", step: "any", defaultValue: "5" },
        { name: "weeks", label: "Weeks", type: "number", step: "any", defaultValue: "4" },
      ];
    case "area":
      return [
        { name: "length", label: "Length", type: "number", step: "any", defaultValue: "12" },
        { name: "width", label: "Width", type: "number", step: "any", defaultValue: "9" },
      ];
    case "geometry":
      return [
        { name: "a", label: "Dimension A", type: "number", step: "any", defaultValue: "12" },
        { name: "b", label: "Dimension B", type: "number", step: "any", defaultValue: "8" },
        { name: "c", label: "Dimension C", type: "number", step: "any", defaultValue: "6" },
      ];
    case "statistics":
      return [
        { name: "values", label: "Values (comma separated)", type: "text", defaultValue: "12, 18, 22, 28, 30" },
      ];
    case "conversion": {
      const family = calculator.unitFamily || "length";
      if (family === "temperature") {
        return [
          { name: "value", label: "Temperature", type: "number", step: "any", defaultValue: "25" },
          { name: "from", label: "From unit", type: "select", options: ["C", "F", "K"], defaultValue: "C" },
          { name: "to", label: "To unit", type: "select", options: ["C", "F", "K"], defaultValue: "F" },
        ];
      }
      if (family === "currency") {
        return [
          { name: "value", label: "Amount", type: "number", step: "any", defaultValue: "100" },
          { name: "rate", label: "Exchange rate", type: "number", step: "any", defaultValue: "280" },
          { name: "from", label: "From currency", type: "select", options: ["USD", "EUR", "GBP", "PKR", "INR"], defaultValue: "USD" },
          { name: "to", label: "To currency", type: "select", options: ["PKR", "USD", "EUR", "GBP", "INR"], defaultValue: "PKR" },
        ];
      }
      if (family === "numberBase") {
        return [
          { name: "value", label: "Number", type: "text", defaultValue: "1010" },
          { name: "from", label: "From base", type: "select", options: ["Binary", "Decimal", "Hex"], defaultValue: "Binary" },
          { name: "to", label: "To base", type: "select", options: ["Binary", "Decimal", "Hex"], defaultValue: "Decimal" },
        ];
      }
      if (family === "ascii") {
        return [
          { name: "value", label: "Character", type: "text", defaultValue: "A" },
        ];
      }
      if (family === "dataSize") {
        return [
          { name: "value", label: "Data size", type: "number", step: "any", defaultValue: "1024" },
          { name: "from", label: "From unit", type: "select", options: ["B", "KB", "MB", "GB", "TB"], defaultValue: "MB" },
          { name: "to", label: "To unit", type: "select", options: ["B", "KB", "MB", "GB", "TB"], defaultValue: "GB" },
        ];
      }
      const map: Record<string, string[]> = {
        length: ["m", "km", "mi", "ft", "in"],
        weight: ["kg", "g", "lb", "oz"],
        area: ["sqm", "sqft", "acre", "hectare"],
        volume: ["l", "ml", "gal", "cup"],
        speed: ["mps", "kph", "mph", "knot"],
        pressure: ["pa", "kpa", "bar", "psi"],
        time: ["sec", "min", "hr", "day"],
        power: ["w", "kw", "hp"],
        energy: ["j", "kj", "kcal"],
        fuelEconomy: ["l100", "mpg"],
        cooking: ["tsp", "tbsp", "cup"],
        angle: ["deg", "rad"],
      };
      const units = map[family] || ["a", "b"];
      return [
        { name: "value", label: "Value", type: "number", step: "any", defaultValue: "10" },
        { name: "from", label: "From unit", type: "select", options: units, defaultValue: units[0] },
        { name: "to", label: "To unit", type: "select", options: units, defaultValue: units[1] || units[0] },
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
          return [
            { name: "weight", label: "Weight (kg)", type: "number", step: "any", defaultValue: "72" },
            { name: "height", label: "Height (m)", type: "number", step: "any", defaultValue: "1.75" },
          ];
        case "body-fat":
          return [
            { name: "height", label: "Height (cm)",              type: "number", step: "any", defaultValue: "175" },
            { name: "neck",   label: "Neck circumference (cm)",  type: "number", step: "any", defaultValue: "38"  },
            { name: "waist",  label: "Waist circumference (cm)", type: "number", step: "any", defaultValue: "82"  },
            { name: "hip",    label: "Hip circumference (cm, females only)", type: "number", step: "any", defaultValue: "0" },
            { name: "sex",    label: "Biological sex", type: "select", options: ["Male", "Female"], defaultValue: "Male" },
          ];
        case "calorie-needs":
        case "bmr":
          return [
            { name: "weight", label: "Body weight (kg)", type: "number", step: "any", defaultValue: "72" },
            { name: "height", label: "Height (cm)", type: "number", step: "any", defaultValue: "175" },
            { name: "age", label: "Age (years)", type: "number", step: "any", defaultValue: "30" },
            { name: "activity", label: "Activity level (1.2–1.9)", type: "number", step: "0.05", defaultValue: "1.55" },
          ];
        case "ideal-weight":
          return [
            { name: "height", label: "Height (cm)", type: "number", step: "any", defaultValue: "175" },
            { name: "sex", label: "Biological sex", type: "select", options: ["Male", "Female"], defaultValue: "Male" },
            { name: "frame", label: "Frame size", type: "select", options: ["Small", "Medium", "Large"], defaultValue: "Medium" },
          ];
        case "heart-rate-zone":
          return [
            { name: "age",        label: "Age (years)",          type: "number", step: "any", defaultValue: "34" },
            { name: "resting_hr", label: "Resting heart rate (bpm)", type: "number", step: "any", defaultValue: "65" },
            { name: "intensity",  label: "Intensity (%)",        type: "number", step: "any", defaultValue: "70" },
          ];
        case "water-intake":
        case "hydration-goal":
          return [
            { name: "weight",   label: "Weight (kg)",    type: "number", step: "any", defaultValue: "72" },
            { name: "activity", label: "Activity level", type: "select",
              options: ["Sedentary", "Light", "Moderate", "Active", "Very active"], defaultValue: "Moderate" },
            { name: "climate",  label: "Climate",        type: "select",
              options: ["Cool", "Temperate", "Hot"], defaultValue: "Temperate" },
          ];
        case "pregnancy-due-date":
        case "ovulation":
          return [
            { name: "startDate", label: "Start date", type: "date", defaultValue: "2026-01-01" },
          ];
        case "waist-to-height-ratio":
          return [
            { name: "waist", label: "Waist (cm)", type: "number", step: "any", defaultValue: "82" },
            { name: "height", label: "Height (cm)", type: "number", step: "any", defaultValue: "175" },
          ];
        case "pace":
          return [
            { name: "distance", label: "Distance (km)", type: "number", step: "any", defaultValue: "5" },
            { name: "time", label: "Time (minutes)", type: "number", step: "any", defaultValue: "28" },
          ];
        case "steps-to-calories":
          return [
            { name: "steps", label: "Steps", type: "number", step: "any", defaultValue: "8000" },
            { name: "weight", label: "Weight (kg)", type: "number", step: "any", defaultValue: "72" },
          ];
        case "sleep-duration":
          return [
            { name: "bed", label: "Bedtime hour", type: "number", step: "any", defaultValue: "22" },
            { name: "wake", label: "Wake hour", type: "number", step: "any", defaultValue: "6" },
          ];
        case "protein-intake":
          return [
            { name: "weight", label: "Weight (kg)", type: "number", step: "any", defaultValue: "72" },
            { name: "multiplier", label: "Protein multiplier", type: "number", step: "any", defaultValue: "0.8" },
          ];
        case "body-surface-area":
          return [
            { name: "height", label: "Height (cm)", type: "number", step: "any", defaultValue: "175" },
            { name: "weight", label: "Weight (kg)", type: "number", step: "any", defaultValue: "72" },
          ];
      }
      return [
        { name: "valueA", label: "Value A", type: "number", step: "any", defaultValue: "72" },
        { name: "valueB", label: "Value B", type: "number", step: "any", defaultValue: "1.75" },
      ];
    case "budget":
      return [
        { name: "income",    label: "Monthly income",    type: "number", step: "any", defaultValue: "5000" },
        { name: "fixed",     label: "Fixed expenses",    type: "number", step: "any", defaultValue: "1500" },
        { name: "variable",  label: "Variable expenses", type: "number", step: "any", defaultValue: "800"  },
        { name: "savings",   label: "Savings target",    type: "number", step: "any", defaultValue: "500"  },
      ];
    case "salaryToHourly":
      return [
        { name: "annual_salary",   label: "Annual salary ($)",    type: "number", step: "any", defaultValue: "60000" },
        { name: "hours_per_week",  label: "Hours per week",       type: "number", step: "any", defaultValue: "40"    },
        { name: "weeks_per_year",  label: "Weeks worked per year",type: "number", step: "any", defaultValue: "50"    },
      ];
    case "annualIncome":
      return [
        { name: "hourly_rate",    label: "Hourly rate ($)",       type: "number", step: "any", defaultValue: "25"  },
        { name: "hours_per_week", label: "Hours per week",        type: "number", step: "any", defaultValue: "40"  },
        { name: "weeks_per_year", label: "Weeks worked per year", type: "number", step: "any", defaultValue: "50"  },
        { name: "bonuses",        label: "Annual bonuses ($)",    type: "number", step: "any", defaultValue: "0"   },
      ];
    case "cashRunway":
      return [
        { name: "cash_balance",    label: "Cash balance ($)",     type: "number", step: "any", defaultValue: "500000" },
        { name: "monthly_burn",    label: "Monthly burn rate ($)", type: "number", step: "any", defaultValue: "40000" },
        { name: "monthly_revenue", label: "Monthly revenue ($)",  type: "number", step: "any", defaultValue: "15000" },
      ];
    default:
      return [
        { name: "value", label: "Value", type: "number", step: "any", defaultValue: "10" },
        { name: "value2", label: "Value 2", type: "number", step: "any", defaultValue: "5" },
      ];
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function toNumberArray(text: string) {
  return text
    .split(/[ ,\s]+/g)
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value));
}

function gcf(a: number, b: number): number {
  return b === 0 ? Math.abs(a) : gcf(b, a % b);
}

function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcf(a, b || 1);
}

function toMeters(value: number, unit: string) {
  const map: Record<string, number> = {
    m: 1,
    km: 1000,
    mi: 1609.344,
    ft: 0.3048,
    in: 0.0254,
  };
  return value * (map[unit] || 1);
}

function fromMeters(value: number, unit: string) {
  const map: Record<string, number> = {
    m: 1,
    km: 1000,
    mi: 1609.344,
    ft: 0.3048,
    in: 0.0254,
  };
  return value / (map[unit] || 1);
}

function toKilograms(value: number, unit: string) {
  const map: Record<string, number> = {
    kg: 1,
    g: 0.001,
    lb: 0.45359237,
    oz: 0.0283495,
  };
  return value * (map[unit] || 1);
}

function fromKilograms(value: number, unit: string) {
  const map: Record<string, number> = {
    kg: 1,
    g: 0.001,
    lb: 0.45359237,
    oz: 0.0283495,
  };
  return value / (map[unit] || 1);
}

function conversionValue(value: number, from: string, to: string, family?: string | null) {
  switch (family) {
    case "length":
      return fromMeters(toMeters(value, from), to);
    case "weight":
      return fromKilograms(toKilograms(value, from), to);
    case "area": {
      const map: Record<string, number> = { sqm: 1, sqft: 0.092903, acre: 4046.86, hectare: 10000 };
      return (value * (map[from] || 1)) / (map[to] || 1);
    }
    case "volume": {
      const map: Record<string, number> = { l: 1, ml: 0.001, gal: 3.78541, cup: 0.236588 };
      return (value * (map[from] || 1)) / (map[to] || 1);
    }
    case "speed": {
      const map: Record<string, number> = { mps: 1, kph: 0.277778, mph: 0.44704, knot: 0.514444 };
      return (value * (map[from] || 1)) / (map[to] || 1);
    }
    case "pressure": {
      const map: Record<string, number> = { pa: 1, kpa: 1000, bar: 100000, psi: 6894.76 };
      return (value * (map[from] || 1)) / (map[to] || 1);
    }
    case "time": {
      const map: Record<string, number> = { sec: 1, min: 60, hr: 3600, day: 86400 };
      return (value * (map[from] || 1)) / (map[to] || 1);
    }
    case "dataSize": {
      const map: Record<string, number> = { B: 1, KB: 1024, MB: 1048576, GB: 1073741824, TB: 1099511627776 };
      return (value * (map[from] || 1)) / (map[to] || 1);
    }
    case "power": {
      const map: Record<string, number> = { w: 1, kw: 1000, hp: 745.7 };
      return (value * (map[from] || 1)) / (map[to] || 1);
    }
    case "energy": {
      const map: Record<string, number> = { j: 1, kj: 1000, kcal: 4184 };
      return (value * (map[from] || 1)) / (map[to] || 1);
    }
    case "fuelEconomy": {
      if (from === to) return value;
      // L/100km and MPG are reciprocal: MPG = 235.215 / L100, L100 = 235.215 / MPG
      if (from === "l100" && to === "mpg") return value > 0 ? 235.215 / value : 0;
      if (from === "mpg" && to === "l100") return value > 0 ? 235.215 / value : 0;
      return value;
    }
    case "cooking": {
      const map: Record<string, number> = { tsp: 1, tbsp: 3, cup: 48 };
      return (value * (map[from] || 1)) / (map[to] || 1);
    }
    case "angle":
      return from === "deg" && to === "rad"
        ? (value * Math.PI) / 180
        : from === "rad" && to === "deg"
        ? (value * 180) / Math.PI
        : value;
    case "currency":
      return value;
    case "numberBase": {
      const fromBase = from === "Binary" ? 2 : from === "Hex" ? 16 : 10;
      const toBase = to === "Binary" ? 2 : to === "Hex" ? 16 : 10;
      const asDecimal = parseInt(String(value), fromBase);
      return Number.isFinite(asDecimal) ? asDecimal.toString(toBase).toUpperCase() : "0";
    }
    case "ascii":
      return value;
    default:
      return value;
  }
}

// ─── Main Compute Function ───────────────────────────────────────────────────

export function computeCalculator(calculator: Calculator, values: Record<string, string | number>) {
  const v = (name: string, fallback = 0) => number(values[name], fallback);

  switch (calculator.formulaType) {
    case "percentage": {
      const variant = calculator.variant;
      const customInputsPct: string[] = (calculator as any).inputs || [];
      const customOutputsPct: string[] = (calculator as any).outputs || [];

      if (customInputsPct.length >= 2) {
        const fieldNames = customInputsPct.map((lbl: string, i: number) =>
          lbl.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/, "") || `input_${i}`
        );
        const vals = fieldNames.map((name: string) => number(values[name]));

        // ── Net Worth: (assets) - (liabilities) ──────────────────────────────
        if (variant === "net-worth") {
          const assets      = vals[0] + vals[1] + vals[2] + vals[3];
          const liabilities = (vals[4] || 0) + (vals[5] || 0);
          const netWorth    = assets - liabilities;
          return {
            primaryLabel: "Net worth",
            primaryValue: `$${round(netWorth)}`,
            supporting: [
              { label: "Total assets",      value: `$${round(assets)}`      },
              { label: "Total liabilities", value: `$${round(liabilities)}` },
            ],
          };
        }

        // ── ROI: (FinalValue - Investment - Costs) / Investment × 100 ────────
        if (variant === "roi") {
          const investment     = vals[0];
          const finalValue     = vals[1];
          const additionalCost = vals[2] || 0;
          const years          = Math.max(1, vals[3] || 1);
          const netProfit      = finalValue - investment - additionalCost;
          const roi            = investment > 0 ? (netProfit / investment) * 100 : 0;
          const annualizedRoi  = investment > 0
            ? (Math.pow(Math.max(0, finalValue) / Math.max(0.01, investment + additionalCost), 1 / years) - 1) * 100
            : 0;
          return {
            primaryLabel: "ROI",
            primaryValue: `${round(roi)}%`,
            supporting: [
              { label: "Net profit",      value: `$${round(netProfit)}`      },
              { label: "Annualized ROI",  value: `${round(annualizedRoi)}%`  },
            ],
          };
        }

        // ── Markup: (SellingPrice - Cost) / Cost × 100 ───────────────────────
        if (variant === "markup") {
          const cost          = vals[0];
          const sellingPrice  = vals[1];
          const markupAmount  = sellingPrice - cost;
          const markupPct     = cost > 0 ? (markupAmount / cost) * 100 : 0;
          return {
            primaryLabel: "Markup %",
            primaryValue: `${round(markupPct)}%`,
            supporting: [
              { label: "Markup amount", value: `$${round(markupAmount)}` },
              { label: "Selling price", value: `$${round(sellingPrice)}` },
            ],
          };
        }

        // ── Profit Margin: (Revenue - COGS - Other) / Revenue × 100 ─────────
        if (variant === "profit-margin") {
          const revenue    = vals[0];
          const cogs       = vals[1];
          const otherCosts = vals[2] || 0;
          const grossProfit = revenue - cogs;
          const netProfit   = grossProfit - otherCosts;
          const marginPct   = revenue > 0 ? (netProfit / revenue) * 100 : 0;
          return {
            primaryLabel: "Profit margin",
            primaryValue: `${round(marginPct)}%`,
            supporting: [
              { label: "Gross profit", value: `$${round(grossProfit)}` },
              { label: "Net profit",   value: `$${round(netProfit)}`   },
            ],
          };
        }

        // ── Commission: (Sales × Rate%) + Base Salary ────────────────────────
        if (variant === "commission") {
          const salesAmount    = vals[0];
          const commissionRate = vals[1];
          const baseSalary     = vals[2] || 0;
          const commission     = salesAmount * (commissionRate / 100);
          const totalEarnings  = commission + baseSalary;
          return {
            primaryLabel: "Total earnings",
            primaryValue: `$${round(totalEarnings)}`,
            supporting: [
              { label: "Commission earned", value: `$${round(commission)}`  },
              { label: "Base salary",       value: `$${round(baseSalary)}`  },
            ],
          };
        }

        // ── Pricing Strategy: Cost / (1 - TargetMargin%) ─────────────────────
        if (variant === "pricing-strategy") {
          const unitCost              = vals[0];
          const targetMarginPct       = vals[1];
          const overhead              = vals[2] || 0;
          const discountAllowancePct  = vals[3] || 0;
          const totalCost             = unitCost + overhead;
          const safeMargin            = Math.min(Math.max(targetMarginPct, 0), 99.9);
          const price                 = safeMargin > 0 ? totalCost / (1 - safeMargin / 100) : totalCost;
          const discountFloor         = price * (1 - discountAllowancePct / 100);
          return {
            primaryLabel: "Suggested price",
            primaryValue: `$${round(price)}`,
            supporting: [
              { label: "Margin at price",  value: `${round(targetMarginPct)}%` },
              { label: "Discount floor",   value: `$${round(discountFloor)}`   },
            ],
          };
        }

        // ── Investment Return: (FinalValue + Dist - Investment - Fees) / Investment × 100
        if (variant === "investment-return") {
          const initialInvestment = vals[0];
          const finalValue        = vals[1];
          const distributions     = vals[2] || 0;
          const fees              = vals[3] || 0;
          const netProfit         = finalValue + distributions - initialInvestment - fees;
          const totalReturn       = initialInvestment > 0 ? (netProfit / initialInvestment) * 100 : 0;
          return {
            primaryLabel: "Total return",
            primaryValue: `${round(totalReturn)}%`,
            supporting: [
              { label: "Net profit", value: `$${round(netProfit)}` },
              { label: "Final value", value: `$${round(finalValue)}` },
            ],
          };
        }

        // ── Stock Profit: (SellPrice - BuyPrice) × Shares - Fees ─────────────
        if (variant === "stock-profit") {
          const buyPrice   = vals[0];
          const sellPrice  = vals[1];
          const shares     = vals[2] || 1;
          const fees       = vals[3] || 0;
          const grossProfit = (sellPrice - buyPrice) * shares;
          const netProfit   = grossProfit - fees;
          const returnPct   = buyPrice > 0 ? ((sellPrice - buyPrice) / buyPrice) * 100 : 0;
          return {
            primaryLabel: "Net profit",
            primaryValue: `$${round(netProfit)}`,
            supporting: [
              { label: "Gross profit", value: `$${round(grossProfit)}` },
              { label: "Return %",     value: `${round(returnPct)}%`   },
            ],
          };
        }

        // ── Mutual Fund Fee: Balance × ExpenseRatio% per year ────────────────
        if (variant === "mutual-fund-fee") {
          const balance      = vals[0];
          const expenseRatio = vals[1]; // already in % (e.g. 0.75 means 0.75%)
          const years        = Math.max(1, vals[2] || 20);
          const annualFee    = balance * (expenseRatio / 100);
          const lifetimeFee  = annualFee * years; // simplified (non-compounding estimate)
          return {
            primaryLabel: "Annual fee",
            primaryValue: `$${round(annualFee)}`,
            supporting: [
              { label: "Expense ratio",  value: `${round(expenseRatio)}%`  },
              { label: "Lifetime drag",  value: `$${round(lifetimeFee)}`   },
            ],
          };
        }

        // ── Generic fallback (commission/rate pattern) ────────────────────────
        const isRate = customInputsPct[1].toLowerCase().includes("rate") || customInputsPct[1].toLowerCase().includes("%");
        const result = isRate
          ? vals[0] * (vals[1] / 100)
          : vals[0] - vals.slice(1).reduce((a: number, b: number) => a + b, 0);
        return {
          primaryLabel: customOutputsPct[0] ?? "Result",
          primaryValue: `$${round(result)}`,
          supporting: vals.slice(1, 4).map((val: number, i: number) => ({
            label: customInputsPct[i + 1] ?? `Input ${i + 2}`,
            value: isRate && i === 0 ? `${round(val)}%` : `$${round(val)}`,
          })) as ResultRow[],
        };
      }

      // ── Simple percentage (no custom inputs) ──────────────────────────────
      const part  = positiveNumber(values.part);
      const whole = positiveNumber(values.whole, 1);
      const pct   = whole > 0 ? safeDivide(part, whole) * 100 : 0;
      return {
        primaryLabel: "Percentage",
        primaryValue: whole > 0 ? `${round(pct)}%` : "—",
        supporting: [
          { label: "Part",  value: round(part)  },
          { label: "Whole", value: round(whole) },
        ] as ResultRow[],
      };
    }

    case "ratio": {
      const a = positiveNumber(values.a, 1);
      const b = positiveNumber(values.b, 1);
      const ratio = b > 0 ? safeDivide(a, b) : 0;
      return {
        primaryLabel: "Ratio",
        primaryValue: b > 0 ? `${round(ratio)} : 1` : "—",
        supporting: [
          { label: "A", value: round(a) },
          { label: "B", value: round(b) },
        ],
      };
    }

    case "growth": {
      const start = positiveNumber(values.start);
      const monthly = positiveNumber(values.monthly);
      const rate = number(values.rate);
      const years = positiveNumber(values.years);
      const periods = Math.max(0, Math.round(years * 12));
      const monthlyRate = Math.max(0, rate) / 100 / 12;
      const growthFactor = Math.pow(1 + monthlyRate, periods);
      const future =
        monthlyRate === 0
          ? start + monthly * periods
          : start * growthFactor + monthly * ((growthFactor - 1) / monthlyRate);
      return {
        primaryLabel: "Projected amount",
        primaryValue: `$${round(future)}`,
        supporting: [
          { label: "Starting amount", value: `$${round(start)}` },
          { label: "Added over time", value: `$${round(monthly * periods)}` },
        ],
      };
    }

    case "compound": {
      // Formula: A = P × (1 + r/n)^(n×t)
      // where P = principal, r = annual rate (decimal), n = compounding frequency, t = time in years
      const principal = positiveNumber(values.principal);
      const rate = Math.max(0, number(values.rate)) / 100;
      const frequency = Math.max(1, positiveNumber(values.compoundingFrequency, 12));
      const years = positiveNumber(values.years);

      if (principal <= 0 || years <= 0) {
        return {
          primaryLabel: "Future value",
          primaryValue: "—",
          supporting: [
            { label: "Principal", value: "—" },
            { label: "Estimated gain", value: "—" },
          ],
        };
      }

      const exponent = frequency * years;
      const base = 1 + rate / frequency;
      const future = principal * Math.pow(base, exponent);

      return {
        primaryLabel: "Future value",
        primaryValue: Number.isFinite(future) ? `$${round(future)}` : "—",
        supporting: [
          { label: "Principal", value: `$${round(principal)}` },
          { label: "Estimated gain", value: Number.isFinite(future) ? `$${round(Math.max(0, future - principal))}` : "—" },
        ],
      };
    }

    case "breakEven": {
      const fixed = positiveNumber(values.fixed);
      const price = positiveNumber(values.price);
      const variable = positiveNumber(values.variable);

      if (price <= variable) {
        return {
          primaryLabel: "Break-even units",
          primaryValue: "Error: Price must exceed variable cost",
          supporting: [
            { label: "Fixed cost", value: `$${round(fixed)}` },
            { label: "Issue", value: "Price ≤ Variable cost" },
          ],
        };
      }

      // Units = Fixed / (Price - Variable)
      const contribution = price - variable;
      const units = fixed > 0 ? fixed / contribution : 0;

      return {
        primaryLabel: "Break-even units",
        primaryValue: round(units, 0),
        supporting: [
          { label: "Fixed cost", value: `$${round(fixed)}` },
          { label: "Contribution per unit", value: `$${round(contribution)}` },
        ],
      };
    }

    case "loan": {
      // EMI Formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1)
      const amount = positiveNumber(values.amount);
      const annualRate = Math.max(0, number(values.rate));
      const years = Math.max(0, positiveNumber(values.years, 1));

      if (amount <= 0 || years <= 0) {
        return {
          primaryLabel: "Monthly payment",
          primaryValue: "—",
          supporting: [
            { label: "Loan amount", value: "—" },
            { label: "Total paid", value: "—" },
          ],
        };
      }

      const monthlyRate = annualRate / 100 / 12;
      const n = Math.round(years * 12);

      let payment: number;
      if (monthlyRate === 0) {
        payment = amount / n;
      } else {
        const numerator = amount * monthlyRate * Math.pow(1 + monthlyRate, n);
        const denominator = Math.pow(1 + monthlyRate, n) - 1;
        payment = numerator / denominator;
      }

      if (!Number.isFinite(payment) || payment < 0) {
        return {
          primaryLabel: "Monthly payment",
          primaryValue: "—",
          supporting: [
            { label: "Loan amount", value: `$${round(amount)}` },
            { label: "Total paid", value: "—" },
          ],
        };
      }

      return {
        primaryLabel: "Monthly payment",
        primaryValue: `$${round(payment)}`,
        supporting: [
          { label: "Loan amount",    value: `$${round(amount)}`                              },
          { label: "Total paid",     value: `$${round(payment * n)}`                         },
          { label: "Total interest", value: `$${round(Math.max(0, payment * n - amount))}`   },
        ],
      };
    }

    case "mortgage": {
      const price = positiveNumber(values.price);
      const down = positiveNumber(values.down);
      const rate = Math.max(0, number(values.rate));
      const years = Math.max(1, positiveNumber(values.years, 30));
      const amount = Math.max(0, price - down);

      if (amount <= 0 || years <= 0) {
        return {
          primaryLabel: "Estimated mortgage payment",
          primaryValue: "—",
          supporting: [
            { label: "Loan amount", value: "—" },
            { label: "Down payment", value: `$${round(down)}` },
          ],
        };
      }

      const monthlyRate = rate / 100 / 12;
      const n = Math.round(years * 12);
      let payment: number;

      if (monthlyRate === 0) {
        payment = amount / n;
      } else {
        const numerator = amount * monthlyRate * Math.pow(1 + monthlyRate, n);
        const denominator = Math.pow(1 + monthlyRate, n) - 1;
        payment = numerator / denominator;
      }

      if (!Number.isFinite(payment) || payment < 0) {
        return {
          primaryLabel: "Estimated mortgage payment",
          primaryValue: "—",
          supporting: [
            { label: "Loan amount", value: `$${round(amount)}` },
            { label: "Down payment", value: `$${round(down)}` },
          ],
        };
      }

      return {
        primaryLabel: "Estimated mortgage payment",
        primaryValue: `$${round(payment)}`,
        supporting: [
          { label: "Loan amount",    value: `$${round(amount)}`                              },
          { label: "Down payment",   value: `$${round(down)}`                                },
          { label: "Total interest", value: `$${round(Math.max(0, payment * n - amount))}`   },
        ],
      };
    }

    case "annuity": {
      const balance = positiveNumber(values.balance);
      const monthly = positiveNumber(values.monthly);
      const rate = Math.max(0, number(values.rate));
      const years = positiveNumber(values.years);
      const periods = Math.max(0, Math.round(years * 12));
      const monthlyRate = rate / 100 / 12;
      const growthFactor = Math.pow(1 + monthlyRate, periods);
      const future =
        monthlyRate === 0
          ? balance + monthly * periods
          : balance * growthFactor + monthly * ((growthFactor - 1) / monthlyRate);
      return {
        primaryLabel: "Projected balance",
        primaryValue: `$${round(future)}`,
        supporting: [
          { label: "Starting balance", value: `$${round(balance)}` },
          { label: "Contributions", value: `$${round(monthly * periods)}` },
        ],
      };
    }

    case "withdrawal": {
      const portfolio = positiveNumber(values.portfolio);
      const rate = Math.max(0, number(values.rate));
      const years = positiveNumber(values.years);
      const yearly = portfolio * (rate / 100);
      return {
        primaryLabel: "Annual withdrawal",
        primaryValue: `$${round(yearly)}`,
        supporting: [
          { label: "Portfolio value", value: `$${round(portfolio)}` },
          { label: "Projection span", value: `${round(years, 0)} years` },
        ],
      };
    }

    case "budget": {
      const income = v("income");
      const fixed = v("fixed");
      const variable = v("variable");
      const savings = v("savings");
      const totalOutflow = fixed + variable + savings;
      const balance = income - totalOutflow;
      return {
        primaryLabel: "Budget balance",
        primaryValue: `$${round(balance)}`,
        supporting: [
          { label: "Income", value: `$${round(income)}` },
          { label: "Total outflow", value: `$${round(totalOutflow)}` },
        ],
      };
    }

    case "tax": {
      const income = positiveNumber(values.income);
      const rate = Math.max(0, number(values.rate));
      const deduction = positiveNumber(values.deduction);
      const taxable = Math.max(0, income - deduction);
      const tax = taxable * (rate / 100);
      return {
        primaryLabel: "Estimated tax",
        primaryValue: `$${round(tax)}`,
        supporting: [
          { label: "Taxable income", value: `$${round(taxable)}` },
          { label: "Net after tax", value: `$${round(income - tax)}` },
        ],
      };
    }

    case "bmi": {
      // BMI = weight(kg) / height(m)²
      // Categories: <18.5 underweight, 18.5-24.9 normal, 25-29.9 overweight, ≥30 obese
      const weight = positiveNumber(values.weight);
      const height = Math.max(0.01, positiveNumber(values.height, 1));

      if (weight <= 0 || height <= 0) {
        return {
          primaryLabel: "BMI",
          primaryValue: "—",
          supporting: [
            { label: "Category", value: "—" },
            { label: "Weight", value: "—" },
          ],
        };
      }

      const bmi = weight / (height * height);
      let category = "—";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 25) category = "Normal weight";
      else if (bmi < 30) category = "Overweight";
      else category = "Obese";

      return {
        primaryLabel: "BMI",
        primaryValue: Number.isFinite(bmi) ? round(bmi) : "—",
        supporting: [
          { label: "Category", value: category },
          { label: "Weight", value: `${round(weight)} kg` },
        ],
      };
    }

    case "pace": {
      const distance = Math.max(0.01, positiveNumber(values.distance));
      const time = positiveNumber(values.time, 1);
      const pace = safeDivide(time, distance);
      return {
        primaryLabel: "Pace (min/km)",
        primaryValue: round(pace),
        supporting: [
          { label: "Distance", value: `${round(distance)} km` },
          { label: "Time", value: `${round(time)} min` },
        ],
      };
    }

    case "dateSpan": {
      const start = new Date(String(values.startDate || "2026-01-01"));
      const end = new Date(String(values.endDate || "2026-12-31"));
      const valid = !Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime());
      const diffMs = valid ? Math.abs(end.getTime() - start.getTime()) : 0;
      const diffDays = Math.max(0, Math.round(diffMs / (1000 * 60 * 60 * 24)));
      return {
        primaryLabel: "Days between dates",
        primaryValue: valid ? `${diffDays}` : "—",
        supporting: [
          { label: "Start date", value: valid ? start.toISOString().slice(0, 10) : "—" },
          { label: "End date", value: valid ? end.toISOString().slice(0, 10) : "—" },
        ],
      };
    }

    case "timeSum": {
      const hours = positiveNumber(values.hours);
      const days = positiveNumber(values.days);
      const weeks = positiveNumber(values.weeks);
      const total = hours * days * weeks;
      return {
        primaryLabel: "Total hours",
        primaryValue: round(total, 0),
        supporting: [
          { label: "Hours/day", value: round(hours, 0) },
          { label: "Total weeks", value: round(weeks, 0) },
        ],
      };
    }

    case "area": {
      const length = positiveNumber(values.length);
      const width = positiveNumber(values.width);
      const area = length * width;
      return {
        primaryLabel: "Area",
        primaryValue: `${round(area)} sq units`,
        supporting: [
          { label: "Length", value: round(length) },
          { label: "Width", value: round(width) },
        ],
      };
    }

    case "geometry": {
      const a = positiveNumber(values.a);
      const b = positiveNumber(values.b);
      const c = positiveNumber(values.c);
      const type = calculator.variant;
      if (type.includes("triangle")) {
        return {
          primaryLabel: "Triangle area",
          primaryValue: `${round((a * b) / 2)} sq units`,
          supporting: [
            { label: "Base", value: round(a) },
            { label: "Height", value: round(b) },
          ],
        };
      }
      if (type.includes("circle")) {
        return {
          primaryLabel: "Circle area",
          primaryValue: `${round(Math.PI * a * a)} sq units`,
          supporting: [
            { label: "Radius", value: round(a) },
            { label: "Diameter", value: round(a * 2) },
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

    case "statistics": {
      const parsedValues = toNumberArray(String(values.values || ""));
      if (!parsedValues.length) {
        return {
          primaryLabel: "Mean",
          primaryValue: "—",
          supporting: [
            { label: "Median", value: "—" },
            { label: "Std. dev.", value: "—" },
          ],
        };
      }
      const mean = parsedValues.reduce((sum, current) => sum + current, 0) / parsedValues.length;
      const sorted = [...parsedValues].sort((x, y) => x - y);
      const middle = Math.floor(sorted.length / 2);
      const median =
        sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
      const variance =
        parsedValues.reduce((sum, current) => sum + Math.pow(current - mean, 2), 0) /
        parsedValues.length;
      return {
        primaryLabel: "Mean",
        primaryValue: round(mean),
        supporting: [
          { label: "Median", value: round(median) },
          { label: "Std. dev.", value: round(Math.sqrt(variance)) },
        ],
      };
    }

    case "conversion": {
      const family = calculator.unitFamily || "length";
      const value = v("value");
      const from = String(values.from || "");
      const to = String(values.to || "");
      if (family === "temperature") {
        let c = value;
        if (from === "F") c = (value - 32) / 1.8;
        if (from === "K") c = value - 273.15;
        let out = c;
        if (to === "F") out = c * 1.8 + 32;
        if (to === "K") out = c + 273.15;
        return {
          primaryLabel: "Converted value",
          primaryValue: `${round(out)} ${to}`,
          supporting: [{ label: "Source", value: `${round(value)} ${from}` }],
        };
      }
      if (family === "currency") {
        const rate = v("rate", 1);
        return {
          primaryLabel: "Converted amount",
          primaryValue: `${round(value * rate)} ${to}`,
          supporting: [
            { label: "Amount", value: `${round(value)} ${from}` },
            { label: "Rate", value: `1 ${from} = ${round(rate)} ${to}` },
          ],
        };
      }
      if (family === "numberBase") {
        const source = String(values.from || "Binary");
        const target = String(values.to || "Decimal");
        const fromBase = source === "Binary" ? 2 : source === "Hex" ? 16 : 10;
        const toBase = target === "Binary" ? 2 : target === "Hex" ? 16 : 10;
        const decimal = parseInt(String(values.value || "0"), fromBase);
        const converted = Number.isFinite(decimal) ? decimal.toString(toBase).toUpperCase() : "0";
        return {
          primaryLabel: "Converted value",
          primaryValue: converted,
          supporting: [{ label: "Decimal form", value: Number.isFinite(decimal) ? String(decimal) : "0" }],
        };
      }
      if (family === "ascii") {
        const char = String(values.value || "A").charAt(0);
        return {
          primaryLabel: "ASCII code",
          primaryValue: String(char.charCodeAt(0)),
          supporting: [{ label: "Character", value: char }],
        };
      }
      const out = conversionValue(value, from, to, family);
      return {
        primaryLabel: "Converted value",
        primaryValue: `${typeof out === "number" ? round(out) : out} ${to}`,
        supporting: [
          { label: "Source", value: `${round(value)} ${from}` },
          { label: "Target", value: to },
        ],
      };
    }

    case "mathOps": {
      const variant = calculator.variant;
      const a = v("a", 1);
      const b = v("b", 1);
      const c = v("c", 1);
      if (variant === "scientific") {
        return {
          primaryLabel: "Scientific result",
          primaryValue: round(Math.sin(a) + Math.pow(a, b)),
          supporting: [{ label: "Inputs", value: `${round(a)} and ${round(b)}` }],
        };
      }
      if (variant === "exponent") {
        const result = Math.pow(a, b);
        return {
          primaryLabel: "Result",
          primaryValue: Number.isFinite(result) ? round(result) : "—",
          supporting: [{ label: "Base", value: round(a) }, { label: "Power", value: round(b) }],
        };
      }
      if (variant === "logarithm") {
        const base = Math.max(b, 2);
        const result = a > 0 ? Math.log(a) / Math.log(base) : NaN;
        return {
          primaryLabel: "Log result",
          primaryValue: Number.isFinite(result) ? round(result) : "—",
          supporting: [{ label: "Value", value: round(a) }, { label: "Base", value: round(base) }],
        };
      }
      if (variant === "square-root") {
        const result = Math.sqrt(Math.abs(a));
        return {
          primaryLabel: "Square root",
          primaryValue: Number.isFinite(result) ? round(result) : "—",
          supporting: [{ label: "Input", value: round(a) }],
        };
      }
      if (variant === "permutation") {
        const n = Math.max(0, Math.round(a));
        const r = Math.max(0, Math.round(b));
        if (r > n)
          return {
            primaryLabel: "nPr",
            primaryValue: "0",
            supporting: [{ label: "n", value: String(n) }, { label: "r", value: String(r) }],
          };
        let out = 1;
        for (let i = 0; i < r; i++) out *= n - i;
        return {
          primaryLabel: "nPr",
          primaryValue: round(out, 0),
          supporting: [{ label: "n", value: String(n) }, { label: "r", value: String(r) }],
        };
      }
      if (variant === "combination") {
        const n = Math.max(0, Math.round(a));
        const r = Math.max(0, Math.round(b));
        if (r > n)
          return {
            primaryLabel: "nCr",
            primaryValue: "0",
            supporting: [{ label: "n", value: String(n) }, { label: "r", value: String(r) }],
          };
        let numerator = 1;
        let denominator = 1;
        for (let i = 1; i <= r; i++) {
          numerator *= n - (r - i);
          denominator *= i;
        }
        return {
          primaryLabel: "nCr",
          primaryValue: round(safeDivide(numerator, denominator, 0), 0),
          supporting: [{ label: "n", value: String(n) }, { label: "r", value: String(r) }],
        };
      }
      if (variant === "rounding") {
        const digits = Math.max(0, Math.round(b));
        return {
          primaryLabel: "Rounded",
          primaryValue: round(a, digits),
          supporting: [{ label: "Digits", value: round(digits, 0) }],
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
      if (variant === "quadratic-formula") {
        const disc = Math.pow(b, 2) - 4 * a * c;
        const root =
          disc >= 0
            ? Math.abs(a) > 0
              ? (-b + Math.sqrt(disc)) / (2 * a)
              : safeDivide(-c, b, 0)
            : 0;
        return {
          primaryLabel: "Root",
          primaryValue: round(root),
          supporting: [{ label: "Discriminant", value: round(disc) }],
        };
      }
      if (variant === "random-number") {
        const min = Math.min(a, b);
        const max = Math.max(a, b);
        return {
          primaryLabel: "Random value",
          primaryValue: round((min + max) / 2),
          supporting: [{ label: "Range", value: `${round(min, 0)} to ${round(max, 0)}` }],
        };
      }
      return {
        primaryLabel: "Result",
        primaryValue: round(a + b + c),
        supporting: [{ label: "Inputs", value: `${round(a)}, ${round(b)}, ${round(c)}` }],
      };
    }

    case "health": {
      const variant = calculator.variant;
      if (variant === "bmi") {
        const weight = positiveNumber(values.weight);
        const height = Math.max(0.01, positiveNumber(values.height, 1));

        if (weight <= 0 || height <= 0) {
          return {
            primaryLabel: "BMI",
            primaryValue: "—",
            supporting: [{ label: "Category", value: "—" }],
          };
        }

        const bmi = weight / (height * height);
        let category = "—";
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 25) category = "Normal weight";
        else if (bmi < 30) category = "Overweight";
        else category = "Obese";

        return {
          primaryLabel: "BMI",
          primaryValue: Number.isFinite(bmi) ? round(bmi) : "—",
          supporting: [{ label: "Category", value: category }],
        };
      }
      if (variant === "body-fat") {
        const heightCm = Math.max(1, positiveNumber(values.height, 175));
        const neck     = Math.max(1, positiveNumber(values.neck,   38));
        const waist    = Math.max(1, positiveNumber(values.waist,  82));
        const sex      = String(values.sex || "Male");

        if (heightCm <= 0 || neck <= 0 || waist <= 0) {
          return {
            primaryLabel: "Body fat (Navy method)",
            primaryValue: "—",
            supporting: [{ label: "Enter all measurements", value: "—" }],
          };
        }

        let bodyFat: number;
        if (sex === "Female") {
          const hip = Math.max(1, positiveNumber(values.hip, 92));
          bodyFat = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(heightCm) - 78.387;
        } else {
          bodyFat = 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(heightCm) + 36.76;
        }
        bodyFat = Math.max(0, Math.min(60, bodyFat));

        const category =
          sex === "Female"
            ? bodyFat < 14 ? "Essential fat" : bodyFat < 21 ? "Athlete" : bodyFat < 25 ? "Fitness" : bodyFat < 32 ? "Acceptable" : "Obese"
            : bodyFat < 6  ? "Essential fat" : bodyFat < 14 ? "Athlete" : bodyFat < 18 ? "Fitness" : bodyFat < 25 ? "Acceptable" : "Obese";

        return {
          primaryLabel: "Body fat (Navy method)",
          primaryValue: `${round(bodyFat, 1)}%`,
          supporting: [
            { label: "Category", value: category          },
            { label: "Height",   value: `${heightCm} cm`  },
          ],
        };
      }
      if (variant === "calorie-needs" || variant === "bmr") {
        const weight = positiveNumber(values.weight);
        const height = positiveNumber(values.height, 175);
        const age = positiveNumber(values.age, 30);
        const activity = Math.max(1.2, number(values.activity, 1.55));

        if (weight <= 0) {
          return {
            primaryLabel: "Daily calorie needs",
            primaryValue: "—",
            supporting: [
              { label: "BMR", value: "—" },
              { label: "Activity level", value: "—" },
            ],
          };
        }

        // Mifflin-St Jeor BMR (male baseline — unisex approximation)
        const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        const tdee = bmr * activity;
        return {
          primaryLabel: "Daily calorie needs (TDEE)",
          primaryValue: `${round(tdee, 0)} kcal`,
          supporting: [
            { label: "BMR (base)", value: `${round(bmr, 0)} kcal` },
            { label: "Activity multiplier", value: round(activity) },
          ],
        };
      }
      if (variant === "ideal-weight") {
        const heightCm = Math.max(1, positiveNumber(values.height, 175));
        const sex = String(values.sex || "Male");
        const frame = String(values.frame || "Medium");

        if (heightCm <= 0) {
          return {
            primaryLabel: "Ideal weight range",
            primaryValue: "—",
            supporting: [{ label: "Height", value: "—" }],
          };
        }

        // Devine formula (inches) — 1 in = 2.54 cm
        const inchesOver5ft = Math.max(0, heightCm / 2.54 - 60);
        const base = sex === "Female" ? 45.5 : 50.0;
        const mid = base + 2.3 * inchesOver5ft;
        const adj = frame === "Small" ? -2.5 : frame === "Large" ? 2.5 : 0;
        const ideal = Math.max(30, mid + adj);
        return {
          primaryLabel: "Ideal weight (Devine formula)",
          primaryValue: `${round(ideal, 1)} kg`,
          supporting: [
            { label: "Height", value: `${heightCm} cm` },
            { label: "Frame", value: frame },
            { label: "Range", value: `${round(ideal - 2.5, 1)}–${round(ideal + 2.5, 1)} kg` },
          ],
        };
      }
      if (variant === "heart-rate-zone") {
        const age        = Math.max(0, positiveNumber(values.age, 34));
        const restingHR  = Math.max(0, positiveNumber(values.resting_hr, 65));
        const intensity  = Math.min(100, Math.max(0, number(values.intensity, 70)));
        const maxHR      = Math.max(0, 220 - age);
        // Karvonen formula: THR = (MaxHR - RestingHR) × Intensity% + RestingHR
        const targetHR   = Math.round((maxHR - restingHR) * (intensity / 100) + restingHR);
        return {
          primaryLabel: "Target heart rate (Karvonen)",
          primaryValue: `${targetHR} bpm`,
          supporting: [
            { label: "Max heart rate",     value: `${round(maxHR, 0)} bpm`     },
            { label: "Resting heart rate", value: `${round(restingHR, 0)} bpm` },
          ],
        };
      }
      if (variant === "water-intake" || variant === "hydration-goal") {
        const weight   = positiveNumber(values.weight);
        const activity = String(values.activity || "Moderate");
        const climate  = String(values.climate  || "Temperate");

        if (weight <= 0) {
          return {
            primaryLabel: "Daily water goal",
            primaryValue: "—",
            supporting: [{ label: "Weight", value: "—" }],
          };
        }

        const activityMl: Record<string, number> = {
          "Sedentary": 30, "Light": 33, "Moderate": 35, "Active": 38, "Very active": 42,
        };
        const climateBonus: Record<string, number> = { "Cool": 0, "Temperate": 200, "Hot": 500 };
        const ml = weight * (activityMl[activity] ?? 35) + (climateBonus[climate] ?? 0);

        return {
          primaryLabel: "Daily water goal",
          primaryValue: `${round(ml / 1000, 1)} L (${round(ml, 0)} ml)`,
          supporting: [
            { label: "Activity level", value: activity },
            { label: "Climate",        value: climate  },
          ],
        };
      }
      if (variant === "pregnancy-due-date" || variant === "ovulation") {
        const start = new Date(String(values.startDate || "2026-01-01"));
        const valid = !Number.isNaN(start.getTime());
        const due = valid ? new Date(start.getTime() + 280 * 24 * 60 * 60 * 1000) : new Date();
        return {
          primaryLabel: "Estimated date",
          primaryValue: valid ? due.toISOString().slice(0, 10) : "—",
          supporting: [
            { label: "Start date", value: valid ? start.toISOString().slice(0, 10) : "—" },
          ],
        };
      }
      if (variant === "waist-to-height-ratio") {
        const waist = positiveNumber(values.waist);
        const height = Math.max(0.01, positiveNumber(values.height));

        if (waist <= 0 || height <= 0) {
          return {
            primaryLabel: "Ratio",
            primaryValue: "—",
            supporting: [
              { label: "Waist", value: "—" },
              { label: "Height", value: "—" },
            ],
          };
        }

        const ratio = waist / height;
        return {
          primaryLabel: "Ratio",
          primaryValue: Number.isFinite(ratio) ? round(ratio) : "—",
          supporting: [
            { label: "Waist", value: `${round(waist)} cm` },
            { label: "Height", value: `${round(height)} cm` },
          ],
        };
      }
      if (variant === "pace") {
        const distance = Math.max(0.01, positiveNumber(values.distance));
        const time = positiveNumber(values.time);

        if (distance <= 0) {
          return {
            primaryLabel: "Pace",
            primaryValue: "—",
            supporting: [{ label: "Distance", value: "—" }],
          };
        }

        const pace = time / distance;
        return {
          primaryLabel: "Pace",
          primaryValue: `${Number.isFinite(pace) ? round(pace) : "—"} min/km`,
          supporting: [{ label: "Distance", value: `${round(distance)} km` }],
        };
      }
      if (variant === "steps-to-calories") {
        const steps = positiveNumber(values.steps);
        const weight = positiveNumber(values.weight);

        if (weight <= 0) {
          return {
            primaryLabel: "Calories burned",
            primaryValue: "—",
            supporting: [{ label: "Steps", value: "—" }],
          };
        }

        const calories = steps * 0.04 * (weight / 70);
        return {
          primaryLabel: "Calories burned",
          primaryValue: `${round(calories, 0)} kcal`,
          supporting: [{ label: "Steps", value: round(steps, 0) }],
        };
      }
      if (variant === "sleep-duration") {
        const bed = number(values.bed);
        const wake = number(values.wake);
        const hours = ((wake - bed) + 24) % 24;
        return {
          primaryLabel: "Sleep duration",
          primaryValue: `${round(hours, 0)} hours`,
          supporting: [
            { label: "Bedtime", value: String(bed) },
            { label: "Wake time", value: String(wake) },
          ],
        };
      }
      if (variant === "protein-intake") {
        const weight = positiveNumber(values.weight);
        const multiplier = Math.max(0, number(values.multiplier));

        if (weight <= 0) {
          return {
            primaryLabel: "Protein target",
            primaryValue: "—",
            supporting: [{ label: "Weight", value: "—" }],
          };
        }

        return {
          primaryLabel: "Protein target",
          primaryValue: `${round(weight * multiplier, 0)} g`,
          supporting: [{ label: "Weight", value: `${round(weight)} kg` }],
        };
      }
      if (variant === "body-surface-area") {
        const height = positiveNumber(values.height);
        const weight = positiveNumber(values.weight);

        if (height <= 0 || weight <= 0) {
          return {
            primaryLabel: "BSA",
            primaryValue: "—",
            supporting: [
              { label: "Height", value: "—" },
              { label: "Weight", value: "—" },
            ],
          };
        }

        const bsa = Math.sqrt(Math.max(0, (height * weight) / 3600));
        return {
          primaryLabel: "BSA",
          primaryValue: `${Number.isFinite(bsa) ? round(bsa, 2) : "—"} m²`,
          supporting: [
            { label: "Height", value: `${round(height)} cm` },
            { label: "Weight", value: `${round(weight)} kg` },
          ],
        };
      }
      return { primaryLabel: "Result", primaryValue: "—", supporting: [] };
    }

    case "salaryToHourly": {
      const salary       = positiveNumber(values.annual_salary);
      const hoursPerWeek = Math.max(1, positiveNumber(values.hours_per_week, 40));
      const weeksPerYear = Math.max(1, positiveNumber(values.weeks_per_year, 50));
      const totalHours   = hoursPerWeek * weeksPerYear;
      const hourlyRate   = totalHours > 0 ? salary / totalHours : 0;
      const dailyRate    = hourlyRate * (hoursPerWeek / 5);
      const weeklyRate   = hourlyRate * hoursPerWeek;
      return {
        primaryLabel: "Hourly rate",
        primaryValue: `$${round(hourlyRate, 2)}`,
        supporting: [
          { label: "Daily rate",  value: `$${round(dailyRate, 2)}`  },
          { label: "Weekly rate", value: `$${round(weeklyRate, 2)}` },
        ],
      };
    }

    case "annualIncome": {
      const hourlyRate   = positiveNumber(values.hourly_rate);
      const hoursPerWeek = Math.max(1, positiveNumber(values.hours_per_week, 40));
      const weeksPerYear = Math.max(1, positiveNumber(values.weeks_per_year, 50));
      const bonuses      = positiveNumber(values.bonuses);
      const annualIncome = hourlyRate * hoursPerWeek * weeksPerYear + bonuses;
      const monthlyIncome= annualIncome / 12;
      const weeklyIncome = hourlyRate * hoursPerWeek;
      return {
        primaryLabel: "Annual income",
        primaryValue: `$${round(annualIncome)}`,
        supporting: [
          { label: "Monthly income", value: `$${round(monthlyIncome)}` },
          { label: "Weekly income",  value: `$${round(weeklyIncome)}`  },
        ],
      };
    }

    case "cashRunway": {
      const cashBalance    = positiveNumber(values.cash_balance);
      const monthlyBurn    = positiveNumber(values.monthly_burn);
      const monthlyRevenue = positiveNumber(values.monthly_revenue);
      const netBurn        = Math.max(0, monthlyBurn - monthlyRevenue);
      const runwayMonths   = netBurn > 0 ? cashBalance / netBurn : Infinity;
      return {
        primaryLabel: "Runway",
        primaryValue: Number.isFinite(runwayMonths) ? `${round(runwayMonths, 1)} months` : "Cash-flow positive",
        supporting: [
          { label: "Net monthly burn", value: `$${round(netBurn)}`        },
          { label: "Cash balance",     value: `$${round(cashBalance)}`    },
        ],
      };
    }

    default:
      return { primaryLabel: "Result", primaryValue: "—", supporting: [] };
  }
}

// ─── Utilities ───────────────────────────────────────────────────────────────

export function getInitialValues(fields: CalculatorField[]) {
  return Object.fromEntries(
    fields.map((field) => [
      field.name,
      field.defaultValue ??
        (field.type === "select"
          ? field.options?.[0] ?? ""
          : field.type === "date"
          ? "2026-01-01"
          : "0"),
    ])
  );
}

export function formatFieldLabel(label: string) {
  return label;
}
