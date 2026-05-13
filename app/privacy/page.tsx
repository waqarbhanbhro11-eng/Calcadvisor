import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — CalcAdvisor",
  description: "CalcAdvisor Privacy Policy. Learn how we handle your data — spoiler: we barely collect any.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/privacy`,
    title: "Privacy Policy — CalcAdvisor",
    description: "CalcAdvisor Privacy Policy. Learn how we handle your data.",
    siteName: siteConfig.name,
  },
};

const LAST_UPDATED = "May 2026";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/" className="transition hover:text-slate-900">← Back to calculator directory</Link>
      </nav>

      <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

      <div className="mt-8 space-y-8 text-base leading-8 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. What we collect</h2>
          <p className="mt-3">
            CalcAdvisor is designed to collect as little data as possible.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <strong className="font-medium text-slate-800">Calculator inputs:</strong> The numbers
              you enter into any calculator are processed locally in your browser. They are never
              sent to our servers and are never stored.
            </li>
            <li>
              <strong className="font-medium text-slate-800">Waitlist email:</strong> If you join
              the AI Advisor waitlist, your email address is stored locally in your browser
              (localStorage). It is not sent to any server unless you explicitly consent to a
              future integration.
            </li>
            <li>
              <strong className="font-medium text-slate-800">Analytics:</strong> We may collect
              anonymous, aggregated usage statistics (page views, popular tools) to improve the
              directory. No personally identifiable information is collected via analytics.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Cookies</h2>
          <p className="mt-3">
            CalcAdvisor does not use advertising cookies or cross-site tracking. We may use a
            minimal, first-party session cookie solely for functionality (e.g., storing your search
            query state). No third-party advertising cookies are set.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Third-party services</h2>
          <p className="mt-3">
            We use standard web-hosting infrastructure. Our hosting provider may collect server
            logs (IP address, user-agent, request path) as part of normal server operations.
            These logs are retained according to the provider&apos;s data retention policy and
            are not used for advertising.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Children</h2>
          <p className="mt-3">
            CalcAdvisor is not directed at children under 13 and does not knowingly collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Changes to this policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. The date at the top of the page
            reflects when it was last revised. Continued use of the site after any changes
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">6. Contact</h2>
          <p className="mt-3">
            For privacy-related questions, please use our{" "}
            <Link href="/contact" className="font-medium text-slate-900 underline underline-offset-4">
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
