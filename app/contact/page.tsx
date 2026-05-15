import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — CalcAdvisor",
  description:
    "Get in touch with the CalcAdvisor team. Report a bug, suggest a new calculator, or ask a question.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/contact`,
    title: "Contact — CalcAdvisor",
    description: "Get in touch with the CalcAdvisor team.",
    siteName: siteConfig.name,
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/" className="transition hover:text-slate-900">
          ← Back to calculator directory
        </Link>
      </nav>

      <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Contact</h1>
      <p className="mt-3 text-base leading-7 text-slate-600">
        Have a question, spotted a bug, or want to suggest a new calculator? We would love to
        hear from you.
      </p>

      <ContactForm />
    </main>
  );
}
