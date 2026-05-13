import Link from "next/link";
import { Calculator as CalculatorIcon, Home } from "lucide-react";
import { Breadcrumbs } from "./breadcrumbs";
import { CalculatorForm } from "./calculator-form";
import { ToolCard } from "./tool-card";
import {
  Calculator,
  getCalculatorBySlug,
  getCategoryBySlug,
  getCategoryUrl,
  getCalculatorUrl,
  getSiteUrl,
} from "@/data/calculators";
import { getFields, getInitialValues, computeCalculator } from "@/lib/calculator-engine";

type Props = {
  calculator: Calculator;
};

function jsonLd(data: object) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Strip the " | Category" suffix that the data layer appends to every title */
function cleanTitle(rawTitle: string, categoryName: string): string {
  return rawTitle.replace(` | ${categoryName}`, "").trim();
}

export function CalculatorPage({ calculator }: Props) {
  const category = getCategoryBySlug(calculator.categorySlug)!;
  const related = calculator.relatedSlugs
    .map((slug) => getCalculatorBySlug(slug))
    .filter((item): item is Calculator => Boolean(item));
  const fields = getFields(calculator);
  const initialValues = getInitialValues(fields);
  const result = computeCalculator(calculator, initialValues);
  const siteUrl = getSiteUrl();
  const displayTitle = cleanTitle(calculator.title, calculator.categoryName);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: category.name, href: getCategoryUrl(category.slug) },
          { label: displayTitle },
        ]}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <CalculatorIcon className="h-3.5 w-3.5" />
            {calculator.categoryName}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {displayTitle}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-slate-600">{calculator.intro}</p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={getCategoryUrl(category.slug)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Explore {category.name}
            </Link>
            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              <Home className="mr-2 inline-block h-4 w-4" />
              Back to homepage
            </Link>
          </div>
        </section>

        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Tool snapshot</div>
          <div className="mt-2 text-lg font-semibold text-slate-900">{calculator.summary}</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{calculator.metaDescription}</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
              Free
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
              No sign-up
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
              Instant results
            </span>
          </div>
        </aside>
      </div>

      <section className="mt-8">
        <CalculatorForm calculator={calculator} />
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">How it works</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {calculator.howItWorks.map((step, index) => (
              <p key={index}>
                <span className="font-semibold text-slate-900">Step {index + 1}.</span> {step}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Example calculation</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            With the default inputs loaded in the form, the calculator produces a starting result
            you can use as a baseline. Change one field at a time to compare a new scenario.
          </p>
          <div className="mt-4 rounded-2xl bg-slate-50 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Baseline result</div>
            <div className="mt-2 text-2xl font-semibold text-slate-950">{result.primaryValue}</div>
            <div className="mt-1 text-sm text-slate-600">{result.primaryLabel}</div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">About this calculator</h2>
        <div className="mt-5 grid gap-4 text-sm leading-7 text-slate-600">
          {calculator.article.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">Frequently asked questions</h2>
        <div className="mt-5 space-y-4">
          {calculator.faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer font-medium text-slate-900">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-slate-950">Related calculators</h2>
          <Link
            href={getCategoryUrl(category.slug)}
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            More in {category.name}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {related.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-500">
        <p>
          <strong className="font-medium text-slate-700">Disclaimer:</strong> Results from this calculator are for informational and planning purposes only and do not constitute financial, legal, or professional advice. Always verify important calculations with a qualified professional.
        </p>
        <p className="mt-3">
          <Link href="/" className="font-medium text-slate-700 underline underline-offset-4">← CalcAdvisor home</Link>
          {" · "}
          <Link href={getCategoryUrl(category.slug)} className="font-medium text-slate-700 underline underline-offset-4">{category.name} calculators</Link>
        </p>
      </section>

      {/* JSON-LD: FAQPage */}
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: calculator.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      })}

      {/* JSON-LD: BreadcrumbList */}
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: category.name, item: `${siteUrl}${getCategoryUrl(category.slug)}` },
          { "@type": "ListItem", position: 3, name: displayTitle, item: `${siteUrl}${getCalculatorUrl(calculator.slug)}` },
        ],
      })}

      {/* JSON-LD: SoftwareApplication */}
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: displayTitle,
        applicationCategory: "CalculatorApplication",
        operatingSystem: "Web",
        url: `${siteUrl}${getCalculatorUrl(calculator.slug)}`,
        description: calculator.metaDescription,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      })}

      {/* JSON-LD: HowTo */}
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to use the ${displayTitle}`,
        description: calculator.intro,
        step: calculator.howItWorks.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text: step,
        })),
      })}
    </main>
  );
}
