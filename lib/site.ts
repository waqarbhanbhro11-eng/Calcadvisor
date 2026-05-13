export const siteConfig = {
  name: "CalcAdvisor",
  title: "CalcAdvisor — Free Calculator Directory for Finance, Math & More",
  description:
    "CalcAdvisor offers 200 free online calculators for finance, loans, mortgage, savings, investment, retirement, tax, health, math, conversion, business, and more. Fast, accurate, no sign-up required.",
  keywords: [
    "free online calculator",
    "financial calculator",
    "loan calculator",
    "mortgage calculator",
    "investment calculator",
    "retirement calculator",
    "tax calculator",
    "health calculator",
    "math calculator",
    "unit conversion calculator",
    "business calculator",
    "calculator directory",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.calcadvisor.com",
  creator: "CalcAdvisor",
};

export const defaultOgImage = "/og-default.png";

/** Background color per category slug — used for dynamic OG image generation */
export const categoryOgColors: Record<string, { bg: string; accent: string; label: string }> = {
  financial:   { bg: "#0F2C5A", accent: "#3B82F6", label: "Financial" },
  loans:       { bg: "#064E3B", accent: "#10B981", label: "Loans" },
  mortgage:    { bg: "#3B0764", accent: "#A855F7", label: "Mortgage" },
  savings:     { bg: "#022C22", accent: "#34D399", label: "Savings" },
  investment:  { bg: "#1E1B4B", accent: "#818CF8", label: "Investment" },
  retirement:  { bg: "#431407", accent: "#FB923C", label: "Retirement" },
  tax:         { bg: "#450A0A", accent: "#F87171", label: "Tax" },
  health:      { bg: "#042F2E", accent: "#2DD4BF", label: "Health" },
  math:        { bg: "#111827", accent: "#9CA3AF", label: "Math" },
  conversion:  { bg: "#083344", accent: "#22D3EE", label: "Conversion" },
  business:    { bg: "#422006", accent: "#FBBF24", label: "Business" },
  "other-tools": { bg: "#1E293B", accent: "#94A3B8", label: "Other Tools" },
};
