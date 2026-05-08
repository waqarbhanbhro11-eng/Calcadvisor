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
  const variantText = variant.replace(/-/g, ' ');
  return `${title} is built for ${categoryName.toLowerCase()} users who need a fast answer for ${topic.toLowerCase()} and ${variantText}. It keeps the inputs simple, the output visible, and the next decision easy to compare.`;
}

function articleFor(topic: string, categoryName: string, formulaType: FormulaType, variant: string): string[] {
  const variantText = variant.replace(/-/g, ' ');
  const para1 = `The ${titleFor(topic, categoryName)} is useful when you want a precise estimate without opening a spreadsheet. It is especially helpful for ${categoryName.toLowerCase()} planning because it turns ${variantText} into a clear number you can review quickly.`;
  const para2Map: Record<FormulaType, string> = {
    percentage: `Try it when you need to compare a part against a whole, check markups, or understand how much one figure contributes to another. Small percentage changes can affect budgets, forecasts, and comparisons in a noticeable way.`,
    ratio: `Use it to compare two values side by side, simplify a relationship, or explain one quantity relative to another. Ratios are especially helpful when you want a clean view of scale or balance.`,
    growth: `Use it to project how a balance changes over time when a rate, contribution, or compounding effect is involved. That makes it easier to test savings plans, business assumptions, and long-term projections.`,
    compound: `Use it when growth should build on previous gains, not only on the original starting point. This is the right approach for long-term projections where each period influences the next.`,
    breakEven: `Use it to find the point where revenue covers cost. Once you know that threshold, pricing and volume decisions become much easier to evaluate.`,
    loan: `Use it to estimate how borrowing terms affect monthly repayment and total cost. This makes it easier to compare offers before you sign anything.`,
    mortgage: `Use it to test home price, down payment, and interest scenarios before making an offer. It helps you see whether a property fits the monthly budget you actually want to keep.`,
    annuity: `Use it to see how recurring contributions and returns can shape a future balance. It is a practical way to review retirement-style saving plans or regular investment habits.`,
    withdrawal: `Use it to estimate how long a portfolio can support planned withdrawals. That is helpful when you are mapping retirement income or checking spending limits.`,
    tax: `Use it to estimate a tax amount before filing, withholding, or planning a payment. It is also useful when deductions or taxable income change the final number.`,
    bmi: `Use it to check body mass index with a clean calculation and then interpret the result in context. It works best as a screening tool rather than a medical diagnosis.`,
    health: `Use it to estimate a daily health or fitness target, then adjust the inputs to reflect your own routine. That makes the output more useful for real-world tracking.`,
    pace: `Use it to turn distance and time into a simple performance measure. Runners, walkers, and coaches often use pace to compare training sessions quickly.`,
    dateSpan: `Use it to count elapsed time between two dates, build countdowns, or verify a deadline. It is handy for schedules, milestones, and age-related checks.`,
    timeSum: `Use it to total time across days or weeks when planning work, study, or project effort. It gives you one number that is easier to compare than several small blocks of time.`,
    area: `Use it to convert length and width into area for rooms, plots, or layout planning. Area results become more useful when you compare them against material needs or coverage.`,
    geometry: `Use it to work through shape-based measurements with a compact formula. That helps when you need volume, triangle area, or another geometry result quickly.`,
    statistics: `Use it to summarize a small dataset with mean, median, and variation measures. It is a practical way to spot the middle, spread, and structure of your numbers.`,
    conversion: `Use it to switch between units without manual math. The calculator keeps the input and output clear so you can confirm the value before reusing it elsewhere.`,
    mathOps: `Use it for classroom-style math, formula practice, or a quick check on a calculation. It is a useful way to validate an answer before you move forward.`,
    budget: `Use it to compare income against expected spending and see whether the budget ends in a surplus or deficit. That makes it easier to spot pressure points before they turn into a problem.`,
  };
  const para2 = para2Map[formulaType] || `Use it to review ${topic.toLowerCase()} values, test a change, or explain a number clearly to someone else.`;
  const para3 = `For a better read on the result, start with realistic numbers and then change one input at a time. That will show how ${topic.toLowerCase()} behaves in ${categoryName.toLowerCase()} planning, especially when ${variantText} changes.`;
  return [para1, para2, para3];
}

function howItWorksFor(formulaType: FormulaType, topic: string, categoryName: string): string[] {
  const t = topic.toLowerCase();
  if (formulaType === 'conversion') {
    return [
      `Enter the starting ${t} value you want to convert.`,
      'Choose the source and target units from the dropdowns.',
      'Review the converted value and adjust the number if needed.',
    ];
  }
  if (formulaType === 'loan' || formulaType === 'mortgage') {
    return [
      `Enter the key borrowing inputs for ${t}.`,
      'Review the estimated payment and total cost.',
      'Change one input at a time to compare alternative offers.',
    ];
  }
  if (formulaType === 'annuity' || formulaType === 'withdrawal' || formulaType === 'growth' || formulaType === 'compound' || formulaType === 'budget') {
    return [
      `Enter the starting amounts used in this ${categoryName.toLowerCase()} scenario.`,
      'Add the rate or recurring contribution values.',
      'Check the projected result and test a second scenario.',
    ];
  }
  if (formulaType === 'dateSpan') {
    return [
      'Pick the start date and the end date.',
      'Let the calculator count the elapsed time.',
      'Use the result to plan deadlines, age checks, or countdowns.',
    ];
  }
  if (formulaType === 'statistics') {
    return [
      'Paste or enter your data set.',
      'Let the calculator summarize the values.',
      'Use the spread and average to understand the result.',
    ];
  }
  if (formulaType === 'mathOps') {
    return [
      'Enter the values needed for the selected math operation.',
      'Review the computed result in the output panel.',
      'Adjust the inputs to test a new scenario.',
    ];
  }
  return [
    'Enter the main numbers that drive the calculation.',
    'Review the result panel for the output summary.',
    'Tune the inputs to compare a second scenario.',
  ];
}

function faqsFor(topic: string, categoryName: string, formulaType: FormulaType, variant: string) {
  const cleanVariant = variant.replace(/-/g, ' ');
  const faqs = [
    {
      question: `What is the ${titleFor(topic, categoryName)} best used for?`,
      answer: `It is designed for ${cleanVariant} questions in ${categoryName.toLowerCase()} planning, especially when you want a fast estimate and a clear next step.`,
    },
    {
      question: `Can I compare two different scenarios with this ${topic.toLowerCase()} tool?`,
      answer: `Yes. Change one input at a time and compare the result so you can see which option fits your plan better.`,
    },
    {
      question: `Is this calculator useful for everyday planning?`,
      answer: `Yes. It turns a rough idea into a structured result, which makes budgeting, checking, or comparing much easier.`,
    },
  ];
  if (formulaType === 'conversion') {
    faqs[1] = {
      question: `Does the ${topic} calculator convert units instantly?`,
      answer: 'Yes. It is built for quick unit changes so you can verify a number in seconds.',
    };
  } else if (formulaType === 'loan' || formulaType === 'mortgage' || formulaType === 'annuity' || formulaType === 'withdrawal') {
    faqs[1] = {
      question: `Can the ${topic} calculator help compare long-term costs?`,
      answer: 'Yes. It is useful for testing how rate, term, and recurring payments change the outcome.',
    };
  } else if (formulaType === 'dateSpan') {
    faqs[1] = {
      question: `Can the ${topic} calculator count the time between two dates?`,
      answer: 'Yes. It helps you measure elapsed days and schedule milestones in a simple format.',
    };
  } else if (formulaType === 'statistics') {
    faqs[1] = {
      question: `Can the ${topic} calculator summarize a dataset?`,
      answer: 'Yes. It calculates a useful set of summary values so you can review the spread at a glance.',
    };
  }
  return faqs;
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
  return {
    slug: slugify(`${category.slug}-${topic}-calculator`),
    title,
    topic,
    categorySlug,
    categoryName: category.name,
    formulaType,
    variant,
    unitFamily: unitFamilySeeds[categorySlug][index],
    longTailKeyword: longTailFor(topic, category.name, formulaType, variant),
    metaDescription: descriptionFor(topic, category.name, formulaType, variant),
    intro: introFor(topic, title, category.name, formulaType, variant),
    summary: `Quickly estimate ${topic.toLowerCase()} outcomes for ${category.name.toLowerCase()} planning with a focused ${variant.replace(/-/g, ' ')} workflow.`,
    article: articleFor(topic, category.name, formulaType, variant),
    howItWorks: howItWorksFor(formulaType, topic, category.name),
    faqs: faqsFor(topic, category.name, formulaType, variant),
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
