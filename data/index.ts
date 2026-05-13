// Central index — imports all category files and re-exports everything
import type { Calculator } from './types';

import { financialCalculators }   from './financial';
import { loansCalculators }        from './loans';
import { mortgageCalculators }     from './mortgage';
import { savingsCalculators }      from './savings';
import { investmentCalculators }   from './investment';
import { retirementCalculators }   from './retirement';
import { taxCalculators }          from './tax';
import { healthCalculators }       from './health';
import { mathCalculators }         from './math';
import { conversionCalculators }   from './conversion';
import { businessCalculators }     from './business';
import { otherToolsCalculators }   from './other-tools';

export type { Calculator, Category, FormulaType } from './types';

export const categories = [
  { slug: 'financial',    name: 'Financial',    description: 'Track budgets, cash flow, spending, and net worth with practical money-planning tools.' },
  { slug: 'loans',        name: 'Loans',        description: 'Compare payment schedules, APR, payoff speed, and refinance options before borrowing.' },
  { slug: 'mortgage',     name: 'Mortgage',     description: 'Estimate home affordability, monthly housing costs, down payments, and refinance tradeoffs.' },
  { slug: 'savings',      name: 'Savings',      description: 'Plan savings goals, emergency funds, timelines, and recurring contributions with clarity.' },
  { slug: 'investment',   name: 'Investment',   description: 'Model returns, fees, future value, risk, and portfolio outcomes across common scenarios.' },
  { slug: 'retirement',   name: 'Retirement',   description: 'Project retirement income, contribution growth, withdrawal plans, and long-term gaps.' },
  { slug: 'tax',          name: 'Tax',          description: 'Estimate income tax, deductions, withholding, and tax-related planning scenarios.' },
  { slug: 'health',       name: 'Health',       description: 'Check wellness metrics, fitness targets, body measurements, and daily health benchmarks.' },
  { slug: 'math',         name: 'Math',         description: 'Solve common math problems, formulas, patterns, and classroom-style calculation tasks.' },
  { slug: 'conversion',   name: 'Conversion',   description: 'Convert units, measurements, and values quickly across everyday and technical systems.' },
  { slug: 'business',     name: 'Business',     description: 'Support pricing, profit, payroll, runway, and operating decisions for small businesses.' },
  { slug: 'other-tools',  name: 'Other Tools',  description: 'Use practical everyday tools for dates, grades, tips, time, and quick reference tasks.' },
];

export const calculators = [
  ...financialCalculators,
  ...loansCalculators,
  ...mortgageCalculators,
  ...savingsCalculators,
  ...investmentCalculators,
  ...retirementCalculators,
  ...taxCalculators,
  ...healthCalculators,
  ...mathCalculators,
  ...conversionCalculators,
  ...businessCalculators,
  ...otherToolsCalculators,
];

export function getCalculatorBySlug(slug: string) {
  return calculators.find(c => c.slug === slug);
}
export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}
export function getCalculatorsByCategory(slug: string) {
  return calculators.filter(c => c.categorySlug === slug);
}
export function getPopularCalculators(): Calculator[] {
  const wanted = [
    "mortgage-mortgage-payment-calculator",
    "health-bmi-calculator",
    "loans-loan-payment-calculator",
    "investment-compound-interest-calculator",
    "tax-income-tax-calculator",
    "financial-budget-planner-calculator",
    "business-profit-margin-calculator",
    "math-percentage-calculator",
    "retirement-safe-withdrawal-rate-calculator",
    "health-calorie-needs-calculator",
    "other-tools-age-calculator",
    "tax-sales-tax-calculator",
  ];
  const result = wanted
    .map((slug) => calculators.find((c) => c.slug === slug))
    .filter(Boolean) as Calculator[];
  return result.length >= 6 ? result : calculators.slice(0, 12);
}
export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://calcadvisor.com';
}
export function getCalculatorUrl(slug: string) { return `/calculators/${slug}`; }
export function getCategoryUrl(slug: string)   { return `/categories/${slug}`; }
export function formatTitle(value: string) {
  return value.split('-').filter(Boolean)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}
