import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About CalcAdvisor",
  description:
    "CalcAdvisor is a free calculator directory with 200+ tools for finance, math, health, and everyday decisions. Learn about our mission and how we build our tools.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/about`,
    title: "About CalcAdvisor",
    description:
      "CalcAdvisor is a free calculator directory with 200+ tools for finance, math, health, and everyday decisions.",
    siteName: siteConfig.name,
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/" className="transition hover:text-slate-900">← Back to calculator directory</Link>
      </nav>

      <h1 className="text-4xl font-semibold tracking-tight text-slate-950">About CalcAdvisor</h1>

      <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
        <p>
          <strong className="font-semibold text-slate-900">CalcAdvisor</strong> is a free,
          ad-free calculator directory built to help people make faster, more confident decisions.
          We offer 200+ focused tools covering finance, loans, mortgage, savings, investment,
          retirement, tax, health, math, unit conversion, business, and more.
        </p>

        <p>
          Every calculator on this site is free to use, requires no account or sign-up, and
          runs entirely in your browser. We do not store the numbers you enter.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-950">Our mission</h2>
        <p>
          Financial and mathematical decisions should not require expensive software or a
          professional consultation for every question. Our mission is to give anyone — from
          a first-time home buyer to a small business owner — clear, accurate tools that turn
          raw numbers into actionable answers.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-950">How our tools are built</h2>
        <p>
          Each calculator is based on standard, widely-used formulas. We document the formula
          and the inputs on every tool page so you can verify the math independently. We aim
          for transparency over black-box results.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-950">Disclaimer</h2>
        <p>
          CalcAdvisor tools are for informational and planning purposes only. They do not
          constitute financial, legal, tax, medical, or any other form of professional advice.
          For decisions with significant legal or financial consequences, always consult a
          qualified professional.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm text-slate-600">
            Questions or feedback?{" "}
            <Link href="/contact" className="font-medium text-slate-900 underline underline-offset-4">
              Contact us
            </Link>
            . Read our{" "}
            <Link href="/privacy" className="font-medium text-slate-900 underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
