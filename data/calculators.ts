import { financialContentOverrides } from './financial-content-overrides';
export type FormulaType =
  | 'percentage'
  | 'ratio'
  | 'growth'
  | 'compound'
  | 'breakEven'
  | 'loan'
  | 'mortgage'
  | 'annuity'
  | 'withdrawal'
  | 'tax'
  | 'bmi'
  | 'health'
  | 'pace'
  | 'dateSpan'
  | 'timeSum'
  | 'area'
  | 'geometry'
  | 'statistics'
  | 'conversion'
  | 'mathOps'
  | 'budget';

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Calculator = {
  slug: string;
  title: string;
  topic: string;
  categorySlug: string;
  categoryName: string;
  formulaType: FormulaType;
  variant: string;
  unitFamily?: string | null;
  longTailKeyword: string;
  metaDescription: string;
  intro: string;
  summary: string;
  article: string[];
  howItWorks: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
};

export const categories: Category[] = [
  {
    "slug": "financial",
    "name": "Financial",
    "description": "Track budgets, cash flow, spending, and net worth with practical money-planning tools."
  },
  {
    "slug": "loans",
    "name": "Loans",
    "description": "Compare payment schedules, APR, payoff speed, and refinance options before borrowing."
  },
  {
    "slug": "mortgage",
    "name": "Mortgage",
    "description": "Estimate home affordability, monthly housing costs, down payments, and refinance tradeoffs."
  },
  {
    "slug": "savings",
    "name": "Savings",
    "description": "Plan savings goals, emergency funds, timelines, and recurring contributions with clarity."
  },
  {
    "slug": "investment",
    "name": "Investment",
    "description": "Model returns, fees, future value, risk, and portfolio outcomes across common scenarios."
  },
  {
    "slug": "retirement",
    "name": "Retirement",
    "description": "Project retirement income, contribution growth, withdrawal plans, and long-term gaps."
  },
  {
    "slug": "tax",
    "name": "Tax",
    "description": "Estimate income tax, deductions, withholding, and tax-related planning scenarios."
  },
  {
    "slug": "health",
    "name": "Health",
    "description": "Check wellness metrics, fitness targets, body measurements, and daily health benchmarks."
  },
  {
    "slug": "math",
    "name": "Math",
    "description": "Solve common math problems, formulas, patterns, and classroom-style calculation tasks."
  },
  {
    "slug": "conversion",
    "name": "Conversion",
    "description": "Convert units, measurements, and values quickly across everyday and technical systems."
  },
  {
    "slug": "business",
    "name": "Business",
    "description": "Support pricing, profit, payroll, runway, and operating decisions for small businesses."
  },
  {
    "slug": "other-tools",
    "name": "Other Tools",
    "description": "Use practical everyday tools for dates, grades, tips, time, and quick reference tasks."
  }
];

const topicSeeds = {
  "financial": ["Budget Planner", "Net Worth", "Emergency Fund", "Cash Flow", "Savings Goal", "Inflation Impact", "Compound Growth Planner", "Expense Split", "Commission", "Salary to Hourly", "Annual Income", "Dividend Reinvestment Plan", "Break-even", "ROI", "Monthly Spending", "Purchase Affordability", "Subscription Cost"] as const,
  "loans": ["Loan Payment", "Loan Affordability", "Extra Payment Payoff", "Debt Consolidation Savings", "Personal Loan APR", "Amortization Schedule", "Simple Interest Loan", "Balloon Loan", "Refinance Savings", "Biweekly Payment", "Debt-to-Income Loan", "Secured vs Unsecured Loan", "Student Loan Payoff", "Auto Loan Payment", "Loan Term Comparison", "Interest-Only Loan", "Prepayment Penalty"] as const,
  "mortgage": ["Mortgage Payment", "Home Affordability", "Down Payment", "PMI", "Refinance Break-even", "Closing Cost", "Mortgage Amortization", "Rent vs Buy", "Property Tax Estimator", "HOA Fee", "Escrow", "Extra Principal Mortgage", "Fixed vs Adjustable Mortgage", "Mortgage Points", "Home Equity", "Recast Mortgage", "First-Time Buyer Budget"] as const,
  "savings": ["Savings Goal Timeline", "Compound Savings", "High-Yield Savings", "Rainy Day Fund", "Travel Savings", "School Savings", "Holiday Savings", "Monthly Savings Rate", "Automatic Savings", "Savings Withdrawal", "Goal Gap", "Short-Term Savings", "Cash Reserve", "Savings Ladder", "Sinking Fund", "House Down Payment Savings"] as const,
  "investment": ["Compound Interest", "Investment Growth", "Portfolio Allocation", "Dollar Cost Averaging", "Future Value", "Present Value", "Dividend Reinvestment", "Mutual Fund Fee", "ETF Expense", "Asset Allocation Rebalancer", "Investment Return", "Risk vs Return", "Stock Profit", "Capital Gains", "Inflation Adjusted Return", "Retirement Portfolio Projection", "SIP"] as const,
  "retirement": ["Retirement Income", "401k Growth", "IRA Contribution", "Pension Income", "Social Security Estimate", "Retirement Savings Gap", "Safe Withdrawal Rate", "Early Retirement", "Annuity Income", "Retirement Withdrawal", "Retirement Age", "Post-Retirement Budget", "Retirement Tax Estimator", "Longevity Planning", "Retirement Health Cost", "Catch-Up Contribution"] as const,
  "tax": ["Income Tax", "Sales Tax", "Tax Bracket", "Self-Employment Tax", "Capital Gains Tax", "VAT", "GST", "Payroll Tax", "Property Tax", "Tax Refund Estimator", "Tax Deduction", "Taxable Income", "Quarterly Tax", "Bonus Tax", "Tax Withholding", "Multi-State Tax"] as const,
  "health": ["BMI", "Body Fat", "Calorie Needs", "BMR", "Ideal Weight", "Heart Rate Zone", "Water Intake", "Pregnancy Due Date", "Ovulation", "Waist to Height Ratio", "Pace", "Steps to Calories", "Sleep Duration", "Protein Intake", "Body Surface Area", "Hydration Goal"] as const,
  "math": ["Percentage", "Scientific", "Fraction", "Ratio", "Proportion", "Exponent", "Logarithm", "Square Root", "Triangle", "Circle Area", "Volume", "Standard Deviation", "Mean Median Mode", "Permutation", "Combination", "Random Number", "Rounding", "Greatest Common Factor", "Least Common Multiple", "Quadratic Formula"] as const,
  "conversion": ["Length Converter", "Weight Converter", "Temperature Converter", "Currency Converter", "Area Converter", "Volume Converter", "Speed Converter", "Pressure Converter", "Time Converter", "Data Size Converter", "Power Converter", "Energy Converter", "Fuel Economy Converter", "Cooking Unit Converter", "Angle Converter"] as const,
  "business": ["Profit Margin", "Markup", "Break-even Sales", "Business Loan", "Cash Runway", "Employee Cost", "Payroll Budget", "Pricing Strategy", "Revenue Growth", "Inventory Turnover", "Sales Commission Planner", "Startup Burn Rate", "Invoice Due Date", "Project Cost", "Conversion Rate", "Customer Lifetime Value", "Marketing ROI", "Operating Expense", "Gross Profit"] as const,
  "other-tools": ["Age", "Date Difference", "Work Hours", "Countdown Timer", "GPA", "Grade", "Tip", "Split Bill", "Concrete", "Tile", "Area", "Binary to Decimal", "Hex to Decimal", "ASCII Converter", "Roman Numeral"] as const,
} as const;

const formulaSeeds = {
  "financial": ["percentage", "ratio", "growth", "percentage", "growth", "percentage", "compound", "ratio", "percentage", "ratio", "growth", "compound", "breakEven", "percentage", "percentage", "ratio", "percentage"] as const,
  "loans": ["loan", "loan", "loan", "loan", "loan", "loan", "loan", "loan", "loan", "loan", "loan", "loan", "loan", "loan", "loan", "loan", "loan"] as const,
  "mortgage": ["mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage", "mortgage"] as const,
  "savings": ["growth", "compound", "growth", "percentage", "growth", "growth", "growth", "percentage", "growth", "growth", "growth", "percentage", "growth", "growth", "growth", "growth"] as const,
  "investment": ["compound", "growth", "ratio", "compound", "growth", "growth", "compound", "percentage", "percentage", "ratio", "growth", "ratio", "percentage", "percentage", "growth", "compound", "compound"] as const,
  "retirement": ["annuity", "growth", "annuity", "annuity", "percentage", "percentage", "withdrawal", "percentage", "annuity", "withdrawal", "percentage", "budget", "percentage", "growth", "percentage", "annuity"] as const,
  "tax": ["tax", "tax", "tax", "tax", "tax", "tax", "tax", "tax", "tax", "tax", "tax", "tax", "tax", "tax", "tax", "tax"] as const,
  "health": ["bmi", "bmi", "health", "bmi", "bmi", "health", "health", "dateSpan", "health", "bmi", "pace", "percentage", "health", "health", "bmi", "health"] as const,
  "math": ["percentage", "mathOps", "ratio", "ratio", "ratio", "mathOps", "mathOps", "mathOps", "geometry", "area", "geometry", "statistics", "statistics", "mathOps", "mathOps", "mathOps", "mathOps", "mathOps", "mathOps", "mathOps"] as const,
  "conversion": ["conversion", "conversion", "conversion", "conversion", "conversion", "conversion", "conversion", "conversion", "conversion", "conversion", "conversion", "conversion", "conversion", "conversion", "conversion"] as const,
  "business": ["percentage", "percentage", "breakEven", "loan", "percentage", "percentage", "percentage", "percentage", "growth", "ratio", "percentage", "percentage", "dateSpan", "breakEven", "percentage", "percentage", "percentage", "percentage", "percentage"] as const,
  "other-tools": ["dateSpan", "dateSpan", "timeSum", "dateSpan", "percentage", "percentage", "percentage", "ratio", "area", "area", "area", "conversion", "conversion", "conversion", "conversion"] as const,
} as const;

const variantSeeds = {
  "financial": ["budget-planner", "net-worth", "emergency-fund", "cash-flow", "savings-goal", "inflation-impact", "compound-growth-planner", "expense-split", "commission", "salary-to-hourly", "annual-income", "dividend-reinvestment-plan", "break-even", "roi", "monthly-spending", "purchase-affordability", "subscription-cost"] as const,
  "loans": ["loan-payment", "loan-affordability", "extra-payment-payoff", "debt-consolidation-savings", "personal-loan-apr", "amortization-schedule", "simple-interest-loan", "balloon-loan", "refinance-savings", "biweekly-payment", "debt-to-income-loan", "secured-vs-unsecured-loan", "student-loan-payoff", "auto-loan-payment", "loan-term-comparison", "interest-only-loan", "prepayment-penalty"] as const,
  "mortgage": ["mortgage-payment", "home-affordability", "down-payment", "pmi", "refinance-break-even", "closing-cost", "mortgage-amortization", "rent-vs-buy", "property-tax-estimator", "hoa-fee", "escrow", "extra-principal-mortgage", "fixed-vs-adjustable-mortgage", "mortgage-points", "home-equity", "recast-mortgage", "first-time-buyer-budget"] as const,
  "savings": ["savings-goal-timeline", "compound-savings", "high-yield-savings", "rainy-day-fund", "travel-savings", "school-savings", "holiday-savings", "monthly-savings-rate", "automatic-savings", "savings-withdrawal", "goal-gap", "short-term-savings", "cash-reserve", "savings-ladder", "sinking-fund", "house-down-payment-savings"] as const,
  "investment": ["compound-interest", "investment-growth", "portfolio-allocation", "dollar-cost-averaging", "future-value", "present-value", "dividend-reinvestment", "mutual-fund-fee", "etf-expense", "asset-allocation-rebalancer", "investment-return", "risk-vs-return", "stock-profit", "capital-gains", "inflation-adjusted-return", "retirement-portfolio-projection", "sip"] as const,
  "retirement": ["retirement-income", "401k-growth", "ira-contribution", "pension-income", "social-security-estimate", "retirement-savings-gap", "safe-withdrawal-rate", "early-retirement", "annuity-income", "retirement-withdrawal", "retirement-age", "post-retirement-budget", "retirement-tax-estimator", "longevity-planning", "retirement-health-cost", "catch-up-contribution"] as const,
  "tax": ["income-tax", "sales-tax", "tax-bracket", "self-employment-tax", "capital-gains-tax", "vat", "gst", "payroll-tax", "property-tax", "tax-refund-estimator", "tax-deduction", "taxable-income", "quarterly-tax", "bonus-tax", "tax-withholding", "multi-state-tax"] as const,
  "health": ["bmi", "body-fat", "calorie-needs", "bmr", "ideal-weight", "heart-rate-zone", "water-intake", "pregnancy-due-date", "ovulation", "waist-to-height-ratio", "pace", "steps-to-calories", "sleep-duration", "protein-intake", "body-surface-area", "hydration-goal"] as const,
  "math": ["percentage", "scientific", "fraction", "ratio", "proportion", "exponent", "logarithm", "square-root", "triangle", "circle-area", "volume", "standard-deviation", "mean-median-mode", "permutation", "combination", "random-number", "rounding", "greatest-common-factor", "least-common-multiple", "quadratic-formula"] as const,
  "conversion": ["length-converter", "weight-converter", "temperature-converter", "currency-converter", "area-converter", "volume-converter", "speed-converter", "pressure-converter", "time-converter", "data-size-converter", "power-converter", "energy-converter", "fuel-economy-converter", "cooking-unit-converter", "angle-converter"] as const,
  "business": ["profit-margin", "markup", "break-even-sales", "business-loan", "cash-runway", "employee-cost", "payroll-budget", "pricing-strategy", "revenue-growth", "inventory-turnover", "sales-commission-planner", "startup-burn-rate", "invoice-due-date", "project-cost", "conversion-rate", "customer-lifetime-value", "marketing-roi", "operating-expense", "gross-profit"] as const,
  "other-tools": ["age", "date-difference", "work-hours", "countdown-timer", "gpa", "grade", "tip", "split-bill", "concrete", "tile", "area", "binary-to-decimal", "hex-to-decimal", "ascii-converter", "roman-numeral"] as const,
} as const;

const unitFamilySeeds = {
  "financial": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] as const,
  "loans": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] as const,
  "mortgage": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] as const,
  "savings": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] as const,
  "investment": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] as const,
  "retirement": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] as const,
  "tax": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] as const,
  "health": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] as const,
  "math": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] as const,
  "conversion": ["length", "weight", "temperature", "currency", "area", "volume", "speed", "pressure", "time", "dataSize", "power", "energy", "fuelEconomy", "cooking", "angle"] as const,
  "business": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null] as const,
  "other-tools": [null, null, null, null, null, null, null, null, null, null, null, "numberBase", "numberBase", "ascii", "numberBase"] as const,
} as const;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function titleFor(topic: string, categoryName: string): string {
  const base = topic.endsWith('Calculator') || topic.endsWith('Converter') ? topic : `${topic} Calculator`;
  return `${base} | ${categoryName}`;
}

function intentFor(formulaType: FormulaType, topic: string, categoryName: string, variant: string): string {
  const cleanVariant = variant.replace(/-/g, ' ');
  switch (formulaType) {
    case 'percentage':
      return `${topic.toLowerCase()} percentage review for ${categoryName.toLowerCase()} decisions`;
    case 'ratio':
      return `${topic.toLowerCase()} ratio comparison for ${categoryName.toLowerCase()} planning`;
    case 'growth':
      return `${topic.toLowerCase()} growth projection for ${categoryName.toLowerCase()} forecasting`;
    case 'compound':
      return `${topic.toLowerCase()} compound growth forecast for ${categoryName.toLowerCase()} planning`;
    case 'breakEven':
      return `${topic.toLowerCase()} break-even analysis for ${categoryName.toLowerCase()} pricing`;
    case 'loan':
      return `${topic.toLowerCase()} loan payment analysis for ${categoryName.toLowerCase()} borrowing`;
    case 'mortgage':
      return `${topic.toLowerCase()} mortgage planning for ${categoryName.toLowerCase()} home costs`;
    case 'annuity':
      return `${topic.toLowerCase()} annuity projection for ${categoryName.toLowerCase()} retirement income`;
    case 'withdrawal':
      return `${topic.toLowerCase()} withdrawal planning for ${categoryName.toLowerCase()} budgeting`;
    case 'tax':
      return `${topic.toLowerCase()} tax estimate for ${categoryName.toLowerCase()} filing`;
    case 'bmi':
      return `${topic.toLowerCase()} body measurement check for ${categoryName.toLowerCase()} goals`;
    case 'health':
      return `${topic.toLowerCase()} health estimate for ${categoryName.toLowerCase()} tracking`;
    case 'pace':
      return `${topic.toLowerCase()} pace calculation for ${categoryName.toLowerCase()} performance`;
    case 'dateSpan':
      return `${topic.toLowerCase()} date-span calculation for ${categoryName.toLowerCase()} scheduling`;
    case 'timeSum':
      return `${topic.toLowerCase()} time-total calculation for ${categoryName.toLowerCase()} work planning`;
    case 'area':
      return `${topic.toLowerCase()} area measurement for ${categoryName.toLowerCase()} projects`;
    case 'geometry':
      return `${topic.toLowerCase()} geometry result for ${categoryName.toLowerCase()} dimensions`;
    case 'statistics':
      return `${topic.toLowerCase()} statistics summary for ${categoryName.toLowerCase()} data`;
    case 'conversion':
      return `${topic.toLowerCase()} unit conversion for ${categoryName.toLowerCase()} reference`;
    case 'mathOps':
      return `${topic.toLowerCase()} math operation for ${categoryName.toLowerCase()} practice`;
    case 'budget':
      return `${topic.toLowerCase()} budget balance for ${categoryName.toLowerCase()} planning`;
    default:
      return `${topic.toLowerCase()} calculator for ${categoryName.toLowerCase()} planning and ${cleanVariant}`;
  }
}

function keywordFor(topic: string, categoryName: string, formulaType: FormulaType, variant: string): string {
  return `${topic.toLowerCase()} ${formulaType.replace(/[A-Z]/g, (m) => ` ${m.toLowerCase()}`)} calculator ${variant.replace(/-/g, ' ')} for ${categoryName.toLowerCase()}`.replace(/\s+/g, ' ').trim();
}

function descriptionFor(topic: string, categoryName: string, formulaType: FormulaType, variant: string): string {
  const intent = intentFor(formulaType, topic, categoryName, variant);
  return `CalcAdvisor's ${titleFor(topic, categoryName)} helps with ${intent}. Enter a few values, review the result, and compare another scenario in seconds.`;
}

function introFor(topic: string, title: string, categoryName: string, formulaType: FormulaType, variant: string): string {
  const t = topic.toLowerCase();
  const cat = categoryName.toLowerCase();
  const variantText = variant.replace(/-/g, ' ');
  const introMap: Partial<Record<FormulaType, string>> = {
    percentage: `The ${title} gives you an instant, accurate percentage result for any ${cat} scenario — no spreadsheet required. Whether you are checking a markup, tracking a budget share, or comparing a change over time, this tool turns raw numbers into a clear percentage you can act on right away.`,
    ratio: `The ${title} simplifies any two-value relationship into a clean ratio, making it easy to compare scale, balance, or proportion in your ${cat} planning. Enter both numbers and the calculator reduces them to their simplest form so the relationship is instantly clear.`,
    growth: `The ${title} shows how a value grows over time when a consistent rate, contribution, or compounding effect is applied — a key concept in ${cat} planning. It is designed to help you test projections, model scenarios, and understand how time and rate work together.`,
    compound: `The ${title} calculates how an initial amount grows when returns are reinvested each period, giving you a realistic picture of long-term ${cat} outcomes. Compounding means each period builds on the last, so even small rate differences produce large results over time.`,
    loan: `The ${title} estimates your monthly payment, total interest, and full repayment cost based on the loan amount, interest rate, and term you enter — all the numbers you need before agreeing to any ${cat} borrowing. It is designed to make loan comparison fast and transparent.`,
    mortgage: `The ${title} takes your home price, down payment, interest rate, and loan term and converts them into a monthly payment you can compare against your actual budget. Understanding your ${cat} numbers before you make an offer helps you avoid surprises at closing.`,
    annuity: `The ${title} shows how regular contributions, combined with a steady return rate, build up to a future balance — the foundation of most ${cat} savings and retirement plans. It is the right tool when you want to know where consistent effort will take you over time.`,
    withdrawal: `The ${title} estimates how long your saved balance will last under a planned withdrawal rate, helping you stress-test your ${cat} drawdown strategy before retirement or a major life transition. Enter your balance, expected return, and monthly withdrawal to see the full picture.`,
    tax: `The ${title} gives you a fast estimate of the tax owed, withheld, or saved based on the income and rate information you provide. Accurate ${cat} tax estimates help you plan payments, adjust withholding, and avoid year-end surprises.`,
    bmi: `The ${title} converts your height and weight into a Body Mass Index value and maps it to a standard weight category, giving you a quick health screening result you can review in seconds. BMI is a widely used starting point for ${cat} wellness assessments.`,
    health: `The ${title} translates personal measurements into a useful ${cat} health or fitness metric so you can track progress, set a realistic target, and make informed decisions about your daily routine. Adjust the inputs to reflect your own numbers and see how the result shifts.`,
    pace: `The ${title} turns your distance and time into a clean pace measurement, making it easy to compare training sessions, set targets, and track fitness progress over time. It is the standard tool for runners, cyclists, and coaches who want to quantify effort in ${cat} terms.`,
    dateSpan: `The ${title} counts the exact number of days, weeks, or months between any two dates, making it easy to verify deadlines, measure project timelines, or calculate someone's age with precision. Accurate ${cat} date arithmetic matters more than people expect.`,
    timeSum: `The ${title} adds up multiple time blocks and returns a single total, saving you the manual effort of converting hours and minutes across a full ${cat} schedule. It is especially useful for tracking work hours, study sessions, or project effort.`,
    area: `The ${title} converts the dimensions you enter into an area measurement, giving you a precise number for room layout, material ordering, or land planning in ${cat} contexts. Getting area right the first time prevents costly material shortfalls or overorders.`,
    geometry: `The ${title} applies the correct geometric formula to your inputs and returns the measurement you need — whether that is a volume, surface area, diagonal, or another shape property relevant to your ${cat} problem.`,
    statistics: `The ${title} summarizes your dataset with the key descriptive statistics — mean, median, range, and more — so you can understand the structure of your ${cat} data without writing a single formula. Paste in numbers and get an instant analytical overview.`,
    conversion: `The ${title} switches any value between units instantly, keeping the math transparent and the result easy to verify. Accurate ${cat} unit conversion prevents the kind of measurement errors that cause real-world problems.`,
    mathOps: `The ${title} handles the ${t} calculation precisely, making it a reliable tool for checking classroom work, professional estimates, or any ${cat} scenario where the formula matters. Enter your values and get a verified result in one step.`,
    budget: `The ${title} compares your income against planned spending and tells you immediately whether the ${cat} budget ends in surplus or deficit. Seeing the gap in clear numbers makes it much easier to adjust priorities before money gets tight.`,
    breakEven: `The ${title} finds the exact point at which revenue covers costs — the break-even threshold every ${cat} business or project needs to know before committing resources. Enter your fixed costs, variable costs, and price per unit to find the minimum volume you need to stay in the black.`,
  };
  return introMap[formulaType] ?? `${title} is a focused ${cat} tool for ${t} and ${variantText} calculations. It turns the numbers you know into the answer you need, quickly and without manual effort.`;
}

function articleFor(topic: string, categoryName: string, formulaType: FormulaType, variant: string): string[] {
  const t = topic.toLowerCase();
  const cat = categoryName.toLowerCase();
  const variantText = variant.replace(/-/g, ' ');
  const title = titleFor(topic, categoryName);

  const formulaDescriptions: Record<FormulaType, { formula: string; explanation: string; example: string; tips: string; whenToUse: string; commonMistake: string }> = {
    percentage: {
      formula: 'Percentage = (Part ÷ Whole) × 100. To find the part: Part = (Percentage × Whole) ÷ 100. To find the whole: Whole = (Part ÷ Percentage) × 100.',
      explanation: 'Percentages express a part as a fraction of 100. They are used everywhere in finance, health, and everyday math because they make proportions easy to compare regardless of scale. A 10% increase on $200 and a 10% increase on $2,000 are very different amounts — but the same proportion.',
      example: `Suppose you spent $450 on ${t} out of a total budget of $3,000. Dividing $450 by $3,000 gives 0.15, and multiplying by 100 gives 15%. That means ${t} accounts for 15% of the total budget — a useful benchmark when reviewing ${cat} spending.`,
      tips: 'Always clarify whether you are calculating percentage of total, percentage change, or percentage point difference — they are three distinct calculations that are often confused. Percentage change uses the original value as the denominator, not the new one.',
      whenToUse: `Use the ${title} any time you need to express a relationship as a proportion of 100. It is especially practical in ${cat} contexts when comparing categories, tracking changes over time, or checking whether a figure meets a target threshold.`,
      commonMistake: 'A common mistake is confusing "a 50% increase followed by a 50% decrease" with breaking even. The decrease applies to the larger number, so you actually end up below where you started. Always recalculate from each new baseline.',
    },
    ratio: {
      formula: 'Ratio = A : B. To simplify, divide both values by their Greatest Common Divisor (GCD). For example, 8:12 simplifies to 2:3 because GCD(8,12) = 4.',
      explanation: 'A ratio compares two quantities and expresses how much of one there is relative to the other. Ratios appear in finance (debt-to-equity), health (nutrient ratios), and everyday life (recipe scaling). Simplifying a ratio makes the relationship immediately visible.',
      example: `If your ${cat} plan allocates $1,200 to ${t} and $800 to savings, the ratio is 1200:800, which simplifies to 3:2. For every $3 spent on ${t}, $2 goes to savings — a clear way to communicate the balance between two priorities.`,
      tips: 'When comparing ratios, convert them to the same denominator or to decimals first. A ratio of 3:4 means 0.75, while 5:6 means 0.833 — the second is higher, which may not be obvious from the original form.',
      whenToUse: `Use the ${title} when you need to compare two values in ${cat} planning, communicate a proportion clearly, or scale a relationship up or down proportionally.`,
      commonMistake: 'Do not confuse ratio with percentage. A 3:7 ratio means 30% is the first part — but the "30%" only makes sense after you calculate part-over-total. Ratios and percentages are related but computed differently.',
    },
    growth: {
      formula: 'Future Value = Present Value × (1 + Growth Rate)^n, where n is the number of periods. For regular contributions: FV = PV × (1+r)^n + PMT × [((1+r)^n − 1) / r].',
      explanation: 'Growth calculations show how an initial value expands over time under a consistent rate. In finance, this is how savings accounts, investments, and business revenues are projected. The exponent means growth accelerates over time — the longer the period, the bigger the jump.',
      example: `Suppose you start with $5,000 in a ${cat} account growing at 6% annually. After 10 years: $5,000 × (1.06)^10 = $5,000 × 1.7908 = $8,954. That is nearly $4,000 in growth from a single deposit — and if you add $100 per month, the total climbs to roughly $21,800 over the same period.`,
      tips: 'Double-check whether your growth rate is annual, monthly, or daily — using the wrong period is one of the most common errors in growth calculations. Always match the rate period to the compounding period.',
      whenToUse: `Use the ${title} when projecting future ${cat} values, planning savings milestones, or comparing how different rates and time horizons change an outcome.`,
      commonMistake: 'People often underestimate how much compounding period matters. Monthly compounding at 6% produces slightly more than annual compounding at 6% — because interest is reinvested 12 times instead of once.',
    },
    compound: {
      formula: 'A = P × (1 + r/n)^(n×t), where P = principal, r = annual rate (decimal), n = compounding periods per year, t = years. For continuous compounding: A = P × e^(r×t).',
      explanation: 'Compound interest grows on both the original principal and the accumulated interest from previous periods. This contrasts with simple interest, which only grows on the principal. The difference is dramatic over long time horizons — which is why compounding is often called "the eighth wonder of the world."',
      example: `$10,000 invested at 7% compounded annually for 20 years becomes $10,000 × (1.07)^20 = $38,697. The same amount at simple interest for 20 years would only reach $24,000. Compounding added an extra $14,697 — without any additional deposits.`,
      tips: 'Increase the compounding frequency to maximize returns: monthly compounding beats annual for the same rate. But the rate itself matters most for long periods — a 1% higher rate over 30 years can double the final balance.',
      whenToUse: `Use the ${title} for any ${cat} scenario where returns are reinvested — savings accounts, investments, mortgages, and loan calculations all rely on compound arithmetic.`,
      commonMistake: 'Many people assume doubling the time doubles the balance. It does not — it more than doubles it, because of compounding. This underestimation leads to late-start saving and under-funded retirement plans.',
    },
    loan: {
      formula: 'Monthly Payment = P × [r(1+r)^n] / [(1+r)^n − 1], where P = principal, r = monthly interest rate (annual rate ÷ 12), n = total number of monthly payments.',
      explanation: 'Loan amortization spreads a borrowed amount plus interest across equal periodic payments. Each payment covers the interest for that period first, with the remainder reducing the principal. Early payments are mostly interest; later payments are mostly principal.',
      example: `A $25,000 ${cat} loan at 7% APR over 5 years (60 months) has a monthly rate of 0.07/12 = 0.00583. The monthly payment formula gives: $25,000 × [0.00583 × (1.00583)^60] / [(1.00583)^60 − 1] = $495.03. Total paid over 5 years: $29,701.80 — meaning $4,701.80 in interest.`,
      tips: 'Making even one extra payment per year significantly reduces total interest and shortens the loan term. Apply extra payments directly to principal — not future payments — to maximize the benefit.',
      whenToUse: `Use the ${title} before accepting any ${cat} borrowing offer. Compare the monthly payment and total interest across different rates and terms to find the combination that works for your budget.`,
      commonMistake: 'Focusing only on the monthly payment and ignoring total interest paid is a costly mistake. A longer term lowers the monthly payment but can add thousands of dollars in total interest.',
    },
    mortgage: {
      formula: 'Monthly Payment = P × [r(1+r)^n] / [(1+r)^n − 1]. Total Cost = Monthly Payment × n. Interest Paid = Total Cost − Principal. PMI applies when down payment < 20%.',
      explanation: 'A mortgage is a secured loan where the property itself serves as collateral. Monthly payments cover principal, interest, and often property taxes and insurance (PITI). The interest portion is highest in the early years and declines as the principal is paid down — this is known as amortization.',
      example: `A $350,000 home with a $70,000 down payment (20%) leaves a $280,000 mortgage. At 6.5% for 30 years: monthly payment = $1,770. Over 360 months, total paid = $637,200 — meaning $357,200 in interest on a $280,000 loan. That is more interest than the original principal over the life of the loan.`,
      tips: 'Getting the interest rate down by even 0.5% on a 30-year mortgage can save over $30,000 in total interest on a $300,000 loan. Shop at least three lenders and compare APR, not just the rate.',
      whenToUse: `Use the ${title} before making an offer on a home, when comparing refinancing options, or when stress-testing your ${cat} budget against different home prices and down payment amounts.`,
      commonMistake: 'Many buyers calculate only the principal and interest payment and forget property taxes, insurance, HOA fees, and maintenance — which can easily add 20–30% on top of the base mortgage payment.',
    },
    annuity: {
      formula: 'Future Value of Annuity = PMT × [((1+r)^n − 1) / r], where PMT = periodic payment, r = rate per period, n = number of periods. For present value: PV = PMT × [(1 − (1+r)^−n) / r].',
      explanation: 'An annuity is a series of equal payments made at regular intervals. Future value tells you what those payments grow to over time; present value tells you what a stream of future payments is worth today. Both concepts are central to retirement planning, pension valuation, and loan pricing.',
      example: `Contributing $400 per month to a retirement account earning 7% annually for 30 years: PMT = $400, r = 0.07/12 = 0.00583, n = 360. FV = $400 × [((1.00583)^360 − 1) / 0.00583] = $400 × 1,020 = $408,000. Total contributions: $144,000. Growth from compounding: $264,000.`,
      tips: 'Starting early matters enormously. The same $400/month contribution at 7% grows to $1.23M over 40 years versus $408,000 over 30 years — a decade of extra contributions adds $822,000, mostly from compounding.',
      whenToUse: `Use the ${title} when planning recurring contributions to a ${cat} savings or retirement account, or when evaluating pension payouts and structured settlements.`,
      commonMistake: 'Annuity-due (payments at the start of each period) produces a slightly higher result than an ordinary annuity (payments at the end). Most calculators default to ordinary annuity — confirm which one applies to your situation.',
    },
    withdrawal: {
      formula: 'Sustainable Withdrawal Rate: Annual Withdrawal = Balance × Rate. Years Remaining = −[ln(1 − (r × PV / PMT))] / ln(1+r). Rule of 25: Required Nest Egg = Annual Spending × 25 (based on 4% withdrawal rate).',
      explanation: 'Withdrawal planning answers the critical retirement question: how long will my money last? It depends on the balance, investment return, and how much you take out each year. The 4% rule is a common benchmark — it suggests a portfolio can sustain 30 years of inflation-adjusted withdrawals at 4% of the initial balance.',
      example: `A $800,000 portfolio with a 5% annual return and $40,000/year withdrawal: using the depletion formula, the money lasts approximately 36 years. Increasing withdrawals to $50,000/year reduces the runway to about 27 years — a 10-year difference from a 25% increase in spending.`,
      tips: 'Sequence-of-returns risk — the danger of poor market returns in the early years of retirement — is one of the biggest threats to a withdrawal plan. Consider holding 1–2 years of expenses in cash to avoid selling assets in a downturn.',
      whenToUse: `Use the ${title} when planning ${cat} retirement drawdowns, checking whether a savings balance can support a target lifestyle, or stress-testing spending limits under different return assumptions.`,
      commonMistake: 'Using a fixed withdrawal rate without adjusting for inflation is a common planning error. A $40,000/year withdrawal in year one is worth significantly less in purchasing power by year 20 if it has not been adjusted upward.',
    },
    tax: {
      formula: 'Marginal Tax: Tax = Income × Marginal Rate (for the top bracket portion). Effective Rate = Total Tax ÷ Gross Income. After-Tax Income = Gross Income − Total Tax − Deductions.',
      explanation: 'Tax calculations vary by jurisdiction, filing status, and income source, but the core concept is simple: taxable income times the applicable rate equals tax owed. Most tax systems use progressive brackets, meaning different portions of income are taxed at different rates. Understanding the distinction between marginal and effective tax rates prevents serious planning mistakes.',
      example: `If your taxable ${cat} income is $75,000 and the brackets are 10% on the first $20,000, 22% on the next $40,000, and 32% above that: Tax = ($20,000 × 0.10) + ($40,000 × 0.22) + ($15,000 × 0.32) = $2,000 + $8,800 + $4,800 = $15,600. Effective rate: $15,600 ÷ $75,000 = 20.8%. Marginal rate: 32%.`,
      tips: 'The marginal rate only applies to income above a threshold — not all income. Misunderstanding this leads people to decline raises or bonuses because they fear "moving into a higher bracket," which would actually improve their after-tax income.',
      whenToUse: `Use the ${title} when estimating quarterly tax payments, planning a major income event in your ${cat} year, evaluating the tax impact of a deduction, or comparing take-home pay across salary offers.`,
      commonMistake: 'Confusing gross income with taxable income is a persistent mistake. Deductions, exemptions, and pre-tax contributions reduce taxable income — sometimes by tens of thousands of dollars — before any rate is applied.',
    },
    bmi: {
      formula: 'BMI = Weight (kg) ÷ Height (m)². In imperial units: BMI = [Weight (lbs) ÷ Height (in)²] × 703. Categories: Underweight < 18.5, Normal 18.5–24.9, Overweight 25–29.9, Obese ≥ 30.',
      explanation: 'Body Mass Index is a screening tool that uses height and weight to estimate whether a person falls within a healthy weight range. It was developed in the 19th century and remains widely used in clinical and public health settings because it is simple to calculate and correlates reasonably well with body fat percentage at the population level.',
      example: `A person who is 175 cm (1.75 m) tall and weighs 80 kg has a BMI of 80 ÷ (1.75)² = 80 ÷ 3.0625 = 26.1. This falls in the Overweight category. Reducing weight by 5 kg to 75 kg would bring the BMI to 24.5 — within the Normal range.`,
      tips: 'BMI does not distinguish between muscle and fat, so it can misclassify athletes as overweight and older adults with low muscle mass as normal weight. Use it alongside waist circumference and body fat percentage for a more complete health picture.',
      whenToUse: `Use the ${title} as a first-pass screening tool for weight-related health risk. It is useful for tracking trends over time, setting a general weight goal, and understanding where you fall relative to clinical thresholds.`,
      commonMistake: 'Treating BMI as a diagnostic tool rather than a screening tool leads to misinterpretation. A "normal" BMI does not guarantee good metabolic health, and an "overweight" BMI does not necessarily indicate poor health in active, muscular individuals.',
    },
    health: {
      formula: 'Health metrics vary by the specific indicator. Common formulas: Calorie needs (Harris-Benedict): BMR = 88.36 + (13.4 × weight_kg) + (4.8 × height_cm) − (5.7 × age). Hydration: Daily water (ml) = weight_kg × 35. Body fat %: Navy Method uses neck, waist, and height measurements.',
      explanation: `${topic} is a measurable health indicator that can help you track wellness, set realistic goals, and monitor the impact of lifestyle changes over time. Tracking specific ${cat} metrics — rather than relying on general estimates — makes it possible to spot trends early and adjust before small changes become significant problems.`,
      example: `For a 35-year-old, 70 kg person who is 175 cm tall, the Harris-Benedict BMR is 88.36 + (13.4 × 70) + (4.8 × 175) − (5.7 × 35) = 88.36 + 938 + 840 − 199.5 = 1,666.86 calories/day at complete rest. Multiplying by an activity factor of 1.55 (moderately active) gives a daily maintenance need of about 2,584 calories.`,
      tips: 'Health calculators produce estimates, not clinical measurements. Use the results as a starting point for tracking and goal-setting, and consult a healthcare professional before making major changes to diet, exercise, or supplementation.',
      whenToUse: `Use the ${title} when setting a ${cat} health baseline, tracking progress toward a fitness goal, or checking whether your current habits align with recommended targets for your age, height, and weight.`,
      commonMistake: 'Relying solely on a single health metric — like weight or BMI — while ignoring related indicators like body composition, blood pressure, and sleep quality can give a misleadingly narrow picture of overall health.',
    },
    pace: {
      formula: 'Pace = Time ÷ Distance. Speed = Distance ÷ Time. Finish Time = Pace × Distance. To convert: 1 min/km = 60 ÷ km/h. For miles: 1 min/mile = 60 ÷ mph.',
      explanation: 'Pace measures how long it takes to cover a unit of distance and is the standard performance metric for running, cycling, walking, and rowing. Unlike speed, pace increases as performance improves — a faster runner has a lower pace number. Coaches and athletes use pace to set training zones, plan race strategy, and compare efforts across different courses.',
      example: `A runner completes a 10 km race in 52 minutes and 30 seconds (52.5 minutes). Pace = 52.5 ÷ 10 = 5:15 per km. To finish a half marathon (21.1 km) at the same pace: 5.25 × 21.1 = 110.8 minutes ≈ 1 hour 50 minutes 48 seconds.`,
      tips: 'Negative splits — running the second half faster than the first — consistently produce better race times than going out hard. Using this ${cat} pace calculator to set a realistic target from the start helps you conserve energy for the final kilometers.',
      whenToUse: `Use the ${title} when planning a race strategy, comparing workouts across different distances, or converting between pace and speed units for ${cat} training logs.`,
      commonMistake: 'Averaging pace across a full run hides important variation. Hill segments, wind, and fatigue affect pace significantly — reviewing split paces segment by segment reveals more about actual performance than a single average.',
    },
    dateSpan: {
      formula: 'Days Between Dates = |Date2 − Date1| (counting calendar days). Weeks = Days ÷ 7. Months ≈ Days ÷ 30.44. Business days = Total days − Saturdays − Sundays − Holidays.',
      explanation: 'Date span calculations count the exact time between two calendar dates. This is used for age verification, deadline tracking, contract durations, billing cycles, and project scheduling. The difficulty is that months have different lengths and years may include leap days — manual calculation is error-prone, which is why a dedicated calculator is worth using.',
      example: `The elapsed time between January 15, 2023 and October 3, 2025 is 991 days. That equals 141 weeks and 4 days, or approximately 32.6 months. If you need to know how many business days, subtract weekends (approximately 282 days) to get around 709 business days — relevant for any ${cat} deadline or contract milestone.`,
      tips: 'For legal or financial purposes, confirm whether "days" means calendar days or business days — the distinction can affect deadlines, penalty clauses, and interest calculations significantly.',
      whenToUse: `Use the ${title} for any ${cat} scenario requiring accurate elapsed time: project deadlines, subscription billing periods, trial expiry dates, age calculations, or employment duration.`,
      commonMistake: 'Counting the start date as day zero versus day one changes the result by a day — a difference that matters for payment due dates, notice periods, and legal contracts. Confirm the convention before applying the result.',
    },
    timeSum: {
      formula: 'Total Time = Sum of all time blocks. Convert hours to minutes (×60) or seconds (×3600) before adding, then convert back. For work hours: Total = Σ(End Time − Start Time) across all sessions.',
      explanation: 'Time addition requires careful unit conversion because minutes reset at 60, not 100. Adding 1 hour 45 minutes and 2 hours 30 minutes does not equal 3 hours 75 minutes — it equals 4 hours 15 minutes. This tool handles the conversion automatically so you get a correct total regardless of how the individual time blocks are entered.',
      example: `A freelancer worked the following hours on a ${cat} project: Monday 2h 45m, Tuesday 3h 20m, Thursday 1h 55m, Friday 4h 10m. Total = (2h45m) + (3h20m) + (1h55m) + (4h10m) = 12h 10m. At $85/hour, that rounds to 12.17 hours × $85 = $1,034.17 for the week.`,
      tips: 'When tracking time for invoicing or payroll, always record start and end times rather than estimating durations — estimates consistently undercount by 10–20% compared to measured values.',
      whenToUse: `Use the ${title} when totaling ${cat} work logs, calculating study or training time, tracking project effort across multiple sessions, or confirming that weekly hours meet a target.`,
      commonMistake: 'Adding time values as decimals without converting properly leads to errors: 1.75 hours is 1 hour 45 minutes, not 1 hour 75 minutes. Always use minutes as the base unit and convert at the end.',
    },
    area: {
      formula: 'Rectangle: A = l × w. Triangle: A = ½ × b × h. Circle: A = π × r². Irregular shapes: decompose into standard shapes and sum the areas. Unit conversions: 1 m² = 10.764 ft² = 10,000 cm².',
      explanation: 'Area is a two-dimensional measurement that quantifies how much surface a shape covers. It is essential in construction, real estate, gardening, interior design, and material estimation. The formula depends on the shape: rectangles use length times width, triangles use half base times height, and circles use π times radius squared.',
      example: `A rectangular room that is 4.8 meters wide and 6.2 meters long has an area of 4.8 × 6.2 = 29.76 m². To tile it with 0.4 m × 0.4 m tiles (each covering 0.16 m²): 29.76 ÷ 0.16 = 186 tiles needed. Adding 10% for cuts and waste: 186 × 1.1 = 205 tiles to order.`,
      tips: 'Always add a waste allowance (typically 10% for tiles, 15% for irregular rooms) when calculating materials. Ordering the exact calculated amount leaves no margin for cuts, breakage, or future repairs.',
      whenToUse: `Use the ${title} for any ${cat} scenario involving surface coverage — flooring, paint, lawn treatments, solar panel sizing, or land area planning.`,
      commonMistake: 'Measuring in mixed units — some dimensions in feet and others in meters — is a persistent error. Convert everything to the same unit before calculating, then convert the final area result to whichever unit you need.',
    },
    geometry: {
      formula: 'Sphere: V = (4/3)πr³, SA = 4πr². Cylinder: V = πr²h, SA = 2πr(r+h). Cone: V = (1/3)πr²h. Pythagorean Theorem: c² = a² + b². Area of general polygon: depends on number of sides and apothem.',
      explanation: `Geometry formulas connect the dimensions of a shape to its measurable properties — area, volume, surface area, perimeter, or diagonal. The ${title} applies the right formula based on the shape and inputs you provide, eliminating the need to look up and manually apply formulas that are easy to misremember.`,
      example: `A storage tank is a cylinder with a radius of 1.5 meters and a height of 4 meters. Volume = π × 1.5² × 4 = π × 2.25 × 4 = 28.27 m³. Converting to liters (1 m³ = 1,000 L): 28,270 liters of capacity. Surface area for painting = 2π × 1.5 × (1.5 + 4) = 2π × 1.5 × 5.5 = 51.84 m².`,
      tips: 'For irregular shapes, break them into recognizable components (rectangles, triangles, semicircles), calculate each piece separately, and combine the results. This decomposition approach works for both area and volume calculations.',
      whenToUse: `Use the ${title} for any ${cat} problem involving shape measurements — construction planning, packaging design, material estimation, or academic geometry problems.`,
      commonMistake: 'Confusing radius and diameter is extremely common. Many formulas use radius — if you measure diameter, divide by 2 before plugging the value in, or your result will be off by a factor of 4 (since r² would use the wrong value).',
    },
    statistics: {
      formula: 'Mean = Σx ÷ n. Median = middle value (sorted). Mode = most frequent value. Variance = Σ(x − μ)² ÷ n. Standard Deviation = √Variance. Range = Max − Min. IQR = Q3 − Q1.',
      explanation: `Descriptive statistics summarize the key properties of a dataset — its center, spread, and shape. The mean tells you the average; the median tells you the middle; the standard deviation tells you how spread out the values are. Together, these measures give a far more complete picture of ${cat} data than any single number alone.`,
      example: `A set of ${cat} measurements: 12, 15, 11, 18, 14, 16, 13, 15, 20, 11. Mean = (12+15+11+18+14+16+13+15+20+11) ÷ 10 = 145 ÷ 10 = 14.5. Sorted: 11,11,12,13,14,15,15,16,18,20. Median = (14+15)/2 = 14.5. Mode = 11 and 15 (both appear twice). Range = 20−11 = 9. Std Dev ≈ 2.77.`,
      tips: 'Use the mean for symmetric data without outliers; use the median for skewed data or when outliers are present. In income data, for example, the median is almost always more informative than the mean because a few very high earners pull the mean up significantly.',
      whenToUse: `Use the ${title} to summarize any ${cat} dataset — quality control measurements, survey responses, test scores, financial returns, or health tracking data.`,
      commonMistake: 'Using only the mean without checking the standard deviation gives a misleading summary. A mean of 50 could describe a dataset where all values are exactly 50, or one where values range from 0 to 100 — only the standard deviation reveals the difference.',
    },
    conversion: {
      formula: 'Conversion Factor Method: Target Value = Source Value × (Target Unit per Source Unit). Example: 1 inch = 2.54 cm, so 10 inches = 10 × 2.54 = 25.4 cm. Chain conversions: multiply by each factor in sequence.',
      explanation: 'Unit conversion translates a measurement expressed in one unit into an equivalent amount in another unit. The underlying quantity does not change — only its expression. Errors in unit conversion have caused real engineering failures, including the loss of the Mars Climate Orbiter in 1999, which crashed because one team used metric units and another used imperial.',
      example: `Converting a ${cat} measurement of 75 mph to km/h: 75 × 1.60934 = 120.7 km/h. Converting 120.7 km/h back: 120.7 ÷ 1.60934 = 75 mph. For a chain conversion — 75 mph to m/s: 75 mph × 1,609.34 m/mile ÷ 3,600 s/hr = 33.5 m/s.`,
      tips: 'For multi-step conversions, write out the conversion factors as fractions and cancel units one by one. This "dimensional analysis" approach prevents you from accidentally multiplying when you should divide.',
      whenToUse: `Use the ${title} any time you receive ${cat} data in one unit and need it in another — recipe scaling, international travel, engineering specs, scientific data, or everyday measurement tasks.`,
      commonMistake: 'Multiplying instead of dividing (or vice versa) is the most common conversion error. If you are converting from a smaller unit to a larger one, the number gets smaller — and if that does not seem right, check your conversion factor direction.',
    },
    mathOps: {
      formula: `${topic} formula: The specific mathematical operation for ${t} applies standard arithmetic or algebraic rules. Inputs are processed using the correct operator or function to produce a verified result.`,
      explanation: `${topic} is a fundamental ${cat} calculation that appears in academic, professional, and everyday contexts. Understanding the underlying operation — not just the answer — helps you verify results, catch errors, and apply the same logic to related problems without always reaching for a calculator.`,
      example: `Using realistic values for a typical ${cat} ${t} problem: enter your specific numbers in the calculator above to see the step-by-step result. The output includes the primary answer along with any supporting values that give context to the calculation.`,
      tips: 'For any math operation, it is worth understanding the rough magnitude of the expected answer before you calculate. Estimating in round numbers catches input errors early — if your estimate is 100 and the calculator gives 10,000, something was entered incorrectly.',
      whenToUse: `Use the ${title} when you need a verified ${t} result for ${cat} work, want to double-check a manual calculation, or need a fast answer without setting up a full spreadsheet.`,
      commonMistake: 'Entering values in the wrong order or wrong field is the most common source of incorrect results. For non-commutative operations (division, subtraction, exponentiation), the order of inputs matters — always check which field expects which value.',
    },
    budget: {
      formula: 'Budget Balance = Total Income − Total Expenses. Savings Rate = (Income − Expenses) ÷ Income × 100. 50/30/20 Rule: 50% needs, 30% wants, 20% savings and debt. Deficit = Expenses − Income (when negative).',
      explanation: 'A budget is a forward-looking plan that matches expected income against planned spending. When expenses exceed income the result is a deficit; when income exceeds expenses the result is a surplus. The goal of budgeting is not to produce a number, but to identify where adjustments can be made before money runs out.',
      example: `Monthly income: $5,200. Fixed expenses (rent, loan, insurance): $2,600. Variable expenses (food, transport, entertainment): $1,450. Savings contribution: $400. Budget balance: $5,200 − $2,600 − $1,450 − $400 = $750 surplus. Savings rate: ($400 + $750) ÷ $5,200 = 22.1% — above the 20% target.`,
      tips: 'Track actual spending against the budget at least monthly and adjust the next month\'s plan based on what happened. A budget that is never reviewed quickly becomes irrelevant to real financial behavior.',
      whenToUse: `Use the ${title} when starting a new ${cat} spending plan, reviewing whether current habits match stated goals, or preparing for a major financial change like a job switch, new expense, or income drop.`,
      commonMistake: 'Forgetting irregular expenses — annual subscriptions, car maintenance, holiday gifts, medical copays — is the most reliable way to blow a budget. Divide annual irregular costs by 12 and include them as a monthly line item.',
    },
    breakEven: {
      formula: 'Break-Even Units = Fixed Costs ÷ (Price per Unit − Variable Cost per Unit). Break-Even Revenue = Fixed Costs ÷ Contribution Margin Ratio. Contribution Margin = Price − Variable Cost. Margin Ratio = Contribution Margin ÷ Price.',
      explanation: 'Break-even analysis finds the minimum sales volume needed to cover all costs — the point where revenue equals total costs and profit is exactly zero. Below this point, the business loses money; above it, each additional unit generates pure profit. It is one of the most powerful planning tools in business finance.',
      example: `A ${cat} business has fixed costs of $12,000/month (rent, salaries, software). Each unit sells for $80 and costs $32 in variable costs (materials, shipping). Contribution margin = $80 − $32 = $48. Break-even units = $12,000 ÷ $48 = 250 units/month. At 300 units/month, profit = (300 − 250) × $48 = $2,400/month.`,
      tips: 'Sensitivity analysis — testing how the break-even point changes when costs or prices shift — is more valuable than a single break-even calculation. If raising the price by $5 reduces break-even by 30 units, that price increase may be worth pursuing.',
      whenToUse: `Use the ${title} when launching a new ${cat} product or service, evaluating a price change, deciding whether to expand, or checking whether a project covers its costs at realistic volumes.`,
      commonMistake: 'Treating all costs as either fixed or variable is an oversimplification. Semi-variable costs (like utilities and overtime labor) change with volume but not proportionally — excluding them leads to a break-even estimate that is too optimistic.',
    },
  };

  const fd = formulaDescriptions[formulaType] ?? formulaDescriptions.mathOps;

  return [
    `The ${title} is a practical tool for ${cat} planning that handles ${t} calculations with precision. ${fd.formula}`,
    `Understanding how the calculation works helps you interpret results correctly. ${fd.explanation}`,
    `Here is a concrete example of how the ${title} applies in a realistic ${cat} scenario: ${fd.example}`,
    `Tips for accurate results: ${fd.tips}`,
    `When to use this calculator: ${fd.whenToUse}`,
    `A common mistake to avoid: ${fd.commonMistake}`,
    `The ${title} is one of many ${cat} tools designed to turn complex formulas into clear, actionable numbers. Use realistic inputs, change one variable at a time, and compare results to build genuine confidence in your ${t} decisions.`,
  ];
}

function howItWorksFor(formulaType: FormulaType, topic: string, categoryName: string): string[] {
  const t = topic.toLowerCase();
  const cat = categoryName.toLowerCase();

  const stepsMap: Partial<Record<FormulaType, string[]>> = {
    conversion: [
      `Enter the ${t} value you want to convert in the first input field.`,
      'Select the source unit from the available options (the unit your measurement is currently in).',
      'Select the target unit you want to convert into.',
      'The converted value appears instantly — no button press needed.',
      'Adjust the input number to verify additional values or test edge cases.',
    ],
    loan: [
      `Enter the total loan amount — the principal you want to borrow for ${t}.`,
      'Enter the annual interest rate as a percentage (for example, 6.5 for 6.5%).',
      'Enter the loan term in months or years, depending on the calculator field.',
      'The calculator displays the monthly payment, total amount repaid, and total interest charged.',
      'Change one input — such as the term or rate — and compare the new result to find the most affordable option.',
    ],
    mortgage: [
      'Enter the home purchase price and your planned down payment amount.',
      'Enter the annual mortgage interest rate and the loan term in years.',
      'The calculator returns the estimated monthly principal and interest payment.',
      'Review the total interest paid over the full loan term — this number often surprises first-time buyers.',
      'Adjust the down payment or term to see how different scenarios change the monthly payment and total cost.',
    ],
    annuity: [
      'Enter the regular contribution amount (monthly, quarterly, or annual payment).',
      'Enter the expected annual return rate as a percentage.',
      'Enter the investment period in years.',
      'The calculator shows the projected future value of all contributions combined with reinvested growth.',
      'Increase the contribution or time period to see the impact of saving more or starting earlier.',
    ],
    withdrawal: [
      'Enter your current portfolio balance — the total savings available for withdrawal.',
      'Enter the expected annual return rate you anticipate earning during retirement.',
      'Enter the annual or monthly withdrawal amount you plan to take.',
      'The calculator estimates how many years your balance will last at that withdrawal rate.',
      'Adjust the withdrawal amount to find the level that extends your portfolio to your target retirement duration.',
    ],
    statistics: [
      'Enter your data values in the input field, separated by commas.',
      'The calculator automatically counts the values and validates the input.',
      'Review the mean, median, mode, range, and standard deviation in the results panel.',
      'Identify outliers by comparing the mean and median — a large difference indicates skew.',
      'Remove or adjust values to see how individual data points affect the overall summary statistics.',
    ],
    dateSpan: [
      'Select or type the start date in the first date field.',
      'Select or type the end date in the second date field.',
      'The calculator counts the exact number of days between the two dates, accounting for leap years.',
      'Review the result in days, weeks, and approximate months.',
      'Swap the dates or change one date to measure a different time span quickly.',
    ],
    bmi: [
      'Enter your body weight in kilograms or pounds (select your preferred unit).',
      'Enter your height in centimeters or feet and inches.',
      'The calculator applies the BMI formula and displays your index value.',
      'Review the weight category alongside your result: Underweight, Normal, Overweight, or Obese.',
      'Use the result as a starting point for a wellness conversation with your healthcare provider — not as a standalone diagnosis.',
    ],
    budget: [
      'Enter your total monthly or annual income from all sources.',
      'List each category of monthly expenses — housing, food, transport, subscriptions, and savings.',
      'The calculator subtracts total expenses from income and shows whether you have a surplus or deficit.',
      'Identify the largest expense categories and consider whether they align with your financial priorities.',
      'Adjust individual line items to build a revised budget that achieves a target savings rate.',
    ],
    breakEven: [
      'Enter your total fixed costs — expenses that do not change with output volume (rent, salaries, subscriptions).',
      'Enter the selling price per unit or service.',
      'Enter the variable cost per unit — materials, shipping, commissions, or other per-unit costs.',
      'The calculator divides fixed costs by the contribution margin (price minus variable cost) to find break-even units.',
      'Adjust the price or variable cost to see how changes in each affect the break-even threshold.',
    ],
    tax: [
      'Enter your gross income or the income amount subject to tax.',
      'Enter the applicable tax rate or select a bracket if the calculator supports tiered rates.',
      'The calculator applies the rate and returns the estimated tax owed.',
      'Review the effective tax rate (total tax ÷ total income) alongside the marginal rate.',
      'Adjust income or add deductions to model how different scenarios change your estimated tax liability.',
    ],
  };

  const defaultSteps = [
    `Enter all the required ${t} values into the input fields above.`,
    'Review each field label carefully — entering values in the correct field is the most important step.',
    'The calculator applies the formula and displays your result immediately in the output panel.',
    `Interpret the result in the context of your ${cat} goal — the number only becomes useful when you apply it to a real decision.`,
    'Change one input at a time and compare results to understand how each variable influences the outcome.',
  ];

  return stepsMap[formulaType] ?? defaultSteps;
}

function faqsFor(topic: string, categoryName: string, formulaType: FormulaType, variant: string) {
  const cleanVariant = variant.replace(/-/g, ' ');
  const t = topic.toLowerCase();
  const cat = categoryName.toLowerCase();
  const title = titleFor(topic, categoryName);

  const faqsByType: Partial<Record<FormulaType, Array<{ question: string; answer: string }>>> = {
    loan: [
      { question: `How does the ${title} calculate the monthly payment?`, answer: `It uses the standard amortization formula: Payment = Principal × [r(1+r)^n] / [(1+r)^n − 1], where r is the monthly interest rate (annual rate ÷ 12) and n is the total number of monthly payments. The result covers both principal and interest in each payment.` },
      { question: `Does a longer loan term always mean lower monthly payments?`, answer: `Yes — but a longer term also means more total interest paid over the life of the loan. A 5-year term at 7% on $20,000 costs about $2,200 in interest; extending to 7 years costs around $3,100. The monthly savings come at a long-term cost.` },
      { question: `How much does a 1% rate difference affect my loan cost?`, answer: `On a $30,000 loan over 5 years, the difference between 6% and 7% is about $820 in total interest. On a larger loan or longer term, the same 1% difference grows significantly — a 30-year mortgage at 7% versus 6% on $300,000 adds over $60,000 in total interest.` },
      { question: `Can I use this to estimate the impact of extra payments?`, answer: `The calculator gives you the baseline payment. To model extra payments, compare the remaining balance after extra principal payments using the same formula. Most lenders apply extra payments to principal, which shortens the term and reduces total interest.` },
      { question: `Is the monthly payment fixed for the entire loan term?`, answer: `For a fixed-rate loan, yes — the payment stays the same every month. For variable-rate or adjustable-rate loans, the payment changes when the rate adjusts. This calculator models fixed-rate scenarios unless otherwise specified.` },
    ],
    mortgage: [
      { question: `What does the ${title} include in the monthly payment estimate?`, answer: `The core calculation covers principal and interest only. Your actual monthly housing cost will also include property taxes, homeowner's insurance, and PMI (if your down payment is under 20%). Adding these typically increases the payment by 20–40% depending on your location and home value.` },
      { question: `How much does a larger down payment affect the monthly payment?`, answer: `A larger down payment reduces the loan principal directly. On a $400,000 home, going from 10% down ($40,000) to 20% down ($80,000) reduces the loan by $40,000. At 6.5% for 30 years, that saves approximately $252 per month and eliminates PMI — often another $150–$200/month.` },
      { question: `What is the difference between interest rate and APR?`, answer: `The interest rate is the cost of borrowing the principal alone. APR includes the interest rate plus fees, points, and other loan costs expressed as a yearly rate. APR gives a more accurate comparison of total loan cost across different lenders.` },
      { question: `Should I choose a 15-year or 30-year mortgage?`, answer: `A 15-year mortgage has higher monthly payments but a significantly lower total interest cost and typically a lower interest rate. A 30-year mortgage offers lower monthly payments and more flexibility. Use the calculator to compare both scenarios with your actual numbers before deciding.` },
      { question: `How does this calculator handle refinancing?`, answer: `Enter the remaining balance of your current loan as the principal, your new interest rate, and the new term to estimate the refinanced payment. Compare the new monthly payment and total remaining cost against continuing with your current loan to determine whether refinancing makes financial sense.` },
    ],
    bmi: [
      { question: `What does the ${title} actually measure?`, answer: `BMI measures the ratio of weight to height squared. It is a population-level screening tool, not a clinical measurement of body fat or health. A BMI in the normal range (18.5–24.9) is associated with lower statistical health risk, but individual health depends on many factors BMI does not capture.` },
      { question: `Why can BMI be misleading for muscular people?`, answer: `Muscle weighs more than fat per unit of volume. A highly trained athlete may have a BMI in the overweight range despite having very low body fat and excellent metabolic health. Conversely, an untrained person with "normal" BMI may carry excess body fat at a low weight.` },
      { question: `What is the healthy BMI range for adults?`, answer: `The World Health Organization defines Underweight as BMI < 18.5, Normal as 18.5–24.9, Overweight as 25–29.9, and Obese as ≥ 30. Some health organizations use slightly adjusted cutoffs for specific ethnic groups, particularly for Asian populations where health risks appear at lower BMI values.` },
      { question: `How much weight loss changes my BMI category?`, answer: `BMI decreases by approximately 1 unit for every 2.9 kg (6.4 lbs) of weight lost for someone 175 cm (5'9") tall. For a 5'5" person, the same BMI change requires about 2.4 kg. Use the calculator to enter a target weight and see what BMI it corresponds to.` },
      { question: `Should children use the same BMI calculator as adults?`, answer: `No. BMI for children and adolescents (ages 2–19) is interpreted differently using age- and sex-specific growth charts. Pediatric BMI percentiles — not the adult thresholds — determine whether a child's weight is healthy. This calculator is designed for adults only.` },
    ],
    compound: [
      { question: `What is the difference between compound and simple interest?`, answer: `Simple interest is calculated only on the original principal: Interest = P × r × t. Compound interest is calculated on the principal plus all previously earned interest. Over long periods, the difference is enormous: $10,000 at 7% simple interest for 30 years grows to $31,000; at 7% compound annual interest, it grows to $76,122.` },
      { question: `How does compounding frequency affect the final amount?`, answer: `More frequent compounding produces slightly higher returns. $10,000 at 6% for 10 years: annually = $17,908; monthly = $18,194; daily = $18,220. The differences are relatively small between monthly and daily compounding, but the jump from annual to monthly is more meaningful for larger amounts.` },
      { question: `What is the Rule of 72?`, answer: `The Rule of 72 is a shortcut for estimating how long it takes to double an investment. Divide 72 by the annual interest rate: at 6%, the money doubles in approximately 72 ÷ 6 = 12 years. At 9%, it doubles in 8 years. The rule is an approximation but is accurate enough for most planning purposes.` },
      { question: `How does inflation affect compound growth calculations?`, answer: `To find the real (inflation-adjusted) return, use the formula: Real Rate ≈ Nominal Rate − Inflation Rate. For example, a 7% nominal return with 3% inflation gives approximately 4% real growth per year. Over 30 years, $10,000 grows to $76,122 in nominal terms but only $32,434 in today's purchasing power.` },
      { question: `What inputs produce the most dramatic compound growth?`, answer: `The interest rate and time period have the greatest impact. Doubling the rate roughly squares the long-term result. Doubling the time period more than doubles the result due to compounding. Starting early — even with smaller amounts — consistently outperforms starting late with larger deposits.` },
    ],
    tax: [
      { question: `What is the difference between marginal and effective tax rate?`, answer: `The marginal rate is the rate applied to the last dollar of income — it is the highest bracket you reach. The effective rate is total tax paid divided by total income. Someone with a 32% marginal rate might have an effective rate of only 19% because most of their income is taxed at lower rates in lower brackets.` },
      { question: `Does a higher income always mean less take-home pay?`, answer: `No. Progressive tax systems only apply the higher rate to income above the bracket threshold — not to all income. Earning $1,000 more that pushes you into a higher bracket means only that $1,000 (or the portion above the threshold) is taxed at the higher rate. Your overall take-home always increases with more income.` },
      { question: `How can deductions reduce my tax bill?`, answer: `Deductions reduce taxable income before the tax rate is applied. A $5,000 deduction for someone in the 22% bracket reduces tax owed by $1,100. Pre-tax retirement contributions, mortgage interest, student loan interest, and business expenses are common deductions that lower taxable income.` },
      { question: `Is this calculator useful for quarterly estimated tax payments?`, answer: `Yes. For self-employed individuals or those with significant non-wage income, quarterly estimated payments are required. Use the calculator to estimate annual tax owed, divide by 4, and submit that amount each quarter to avoid underpayment penalties.` },
      { question: `Does this calculator account for multiple income sources?`, answer: `Enter your total combined taxable income from all sources to get an overall estimate. For complex situations with multiple income types, different rates (capital gains, self-employment), or significant deductions, the calculator provides a useful baseline — but a tax professional can optimize the full picture.` },
    ],
    statistics: [
      { question: `What is the difference between mean and median?`, answer: `The mean (average) is the sum of all values divided by the count. The median is the middle value when the dataset is sorted. In a symmetric dataset they are close; in a skewed dataset, they diverge. When outliers are present, the median is a more reliable measure of central tendency than the mean.` },
      { question: `When should I use standard deviation versus variance?`, answer: `Variance is standard deviation squared — it has the same mathematical meaning but is expressed in squared units, which makes it hard to interpret directly. Standard deviation is expressed in the same units as the data, making it more intuitive. Use variance for mathematical derivations; use standard deviation for reporting and interpretation.` },
      { question: `What does it mean if my standard deviation is very large?`, answer: `A large standard deviation means the values in your dataset are spread widely around the mean. A small standard deviation means they cluster closely. In quality control, a large standard deviation signals high process variability; in investment returns, it signals high risk.` },
      { question: `How do outliers affect the statistical summary?`, answer: `Outliers pull the mean toward them but do not affect the median. They inflate the range and standard deviation significantly. To check for outliers, look for values more than 2–3 standard deviations from the mean. Consider reporting both the full summary and the summary with outliers removed.` },
      { question: `What sample size do I need for reliable statistics?`, answer: `For descriptive statistics (mean, median, range), even small samples give useful summaries of the data you have. For inferential statistics — drawing conclusions about a larger population — sample size depends on the desired confidence level and margin of error. Typically, n ≥ 30 is considered the minimum for applying normal distribution assumptions.` },
    ],
  };

  const defaultFaqs = [
    {
      question: `What is the ${title} best used for?`,
      answer: `It is designed for ${cleanVariant} problems in ${cat} planning. Use it when you need a quick, accurate answer to a ${t} question without building a spreadsheet or doing manual arithmetic. It is especially useful when you want to compare two scenarios by changing one input at a time.`,
    },
    {
      question: `How accurate are the results from the ${title}?`,
      answer: `The calculator applies the standard formula for ${t} and produces results accurate to four decimal places. The accuracy of the output depends entirely on the accuracy of the inputs — garbage in, garbage out. Use realistic numbers based on your actual situation for the most useful results.`,
    },
    {
      question: `Can I use this ${title} for professional ${cat} planning?`,
      answer: `Yes, as a planning and estimation tool. The formulas are standard and widely used in ${cat} contexts. For legally binding decisions, tax filings, or clinical assessments, verify critical results with a qualified professional. This calculator gives you the right numbers to start the conversation.`,
    },
    {
      question: `What happens if I enter zero or leave a field blank?`,
      answer: `The calculator will either return zero, produce an error message, or show an undefined result — depending on which field is blank and what the formula requires. Fill in all required fields with realistic values for a valid result. Some calculators accept zero for optional inputs (like an initial balance of $0).`,
    },
    {
      question: `Is this ${title} free to use?`,
      answer: `Yes — completely free, with no account required, no ads, and no hidden costs. The tool is designed for fast, accessible ${cat} planning across all devices. All calculations happen instantly in your browser and no data is stored or transmitted.`,
    },
  ];

  return faqsByType[formulaType] ?? defaultFaqs;
}

function longTailFor(topic: string, categoryName: string, formulaType: FormulaType, variant: string): string {
  return intentFor(formulaType, topic, categoryName, variant);
}

function buildCalculator(categorySlug: keyof typeof topicSeeds, index: number): Calculator {
  const topic = topicSeeds[categorySlug][index];
  const formulaType = formulaSeeds[categorySlug][index] as FormulaType;
  const category = categories.find((item) => item.slug === categorySlug)!;
  const variant = variantSeeds[categorySlug][index];
  const title = titleFor(topic, category.name);
  const override = financialContentOverrides[variant];
  return {
    slug: slugify(`${category.slug}-${topic}-calculator`),
    title,
    topic,
    categorySlug,
    categoryName: category.name,
    formulaType,
    variant,
    unitFamily: unitFamilySeeds[categorySlug][index],
    longTailKeyword: override?.longTailKeyword ?? longTailFor(topic, category.name, formulaType, variant),
    metaDescription: override?.metaDescription ?? descriptionFor(topic, category.name, formulaType, variant),
    intro: override?.intro ?? introFor(topic, title, category.name, formulaType, variant),
    summary: override?.summary ?? `Quickly estimate ${topic.toLowerCase()} outcomes for ${category.name.toLowerCase()} planning with a focused ${variant.replace(/-/g, ' ')} workflow.`,
    article: override?.article ?? articleFor(topic, category.name, formulaType, variant),
    howItWorks: override?.howItWorks ?? howItWorksFor(formulaType, topic, category.name),
    faqs: override?.faqs ?? faqsFor(topic, category.name, formulaType, variant),
    relatedSlugs: [],
  };
}
export const calculators: Calculator[] = Object.entries(topicSeeds).flatMap(([categorySlug, topics]) =>
  topics.map((_, index) => buildCalculator(categorySlug as keyof typeof topicSeeds, index)),
);

const calculatorsByCategory: Record<string, Calculator[]> = calculators.reduce((acc, item) => {
  (acc[item.categorySlug] ||= []).push(item);
  return acc;
}, {} as Record<string, Calculator[]>);

for (const items of Object.values(calculatorsByCategory)) {
  items.forEach((calculator, index) => {
    calculator.relatedSlugs = items
      .filter((_, otherIndex) => otherIndex !== index)
      .slice(0, 4)
      .map((item) => item.slug);
  });
}

export function getCalculatorBySlug(slug: string): Calculator | undefined {
  return calculators.find((calculator) => calculator.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCalculatorsByCategory(slug: string): Calculator[] {
  return calculators.filter((calculator) => calculator.categorySlug === slug);
}

export function getPopularCalculators(): Calculator[] {
  return calculators.slice(0, 12);
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://calcadvisor.com';
}

export function formatTitle(value: string): string {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function getCalculatorUrl(slug: string): string {
  return `/calculators/${slug}`;
}

export function getCategoryUrl(slug: string): string {
  return `/categories/${slug}`;
}
