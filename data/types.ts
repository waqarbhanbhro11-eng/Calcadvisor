// Shared types for all calculator data files

export type FormulaType =
  | 'percentage' | 'ratio' | 'growth' | 'compound' | 'breakEven'
  | 'loan' | 'mortgage' | 'annuity' | 'withdrawal' | 'tax'
  | 'bmi' | 'health' | 'pace' | 'dateSpan' | 'timeSum'
  | 'area' | 'geometry' | 'statistics' | 'conversion' | 'mathOps' | 'budget';

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Calculator = {
  slug: string;
  variant: string;
  title: string;
  topic: string;
  categorySlug: string;
  categoryName: string;
  formulaType: FormulaType;
  formula: string;
  inputs: string[];
  outputs: string[];
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
