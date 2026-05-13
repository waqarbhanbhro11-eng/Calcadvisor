import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.calcadvisor.com";
const LAST_UPDATED = "May 2026";

export const metadata: Metadata = {
  title: "Privacy Policy — CalcAdvisor",
  description:
    "CalcAdvisor Privacy Policy. Calculator inputs stay in your browser — never sent to our servers. Learn exactly how we handle your data.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/privacy`,
    title: "Privacy Policy — CalcAdvisor",
    description:
      "CalcAdvisor Privacy Policy. Calculator inputs stay in your browser — never sent to our servers.",
    siteName: "CalcAdvisor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — CalcAdvisor",
    description:
      "CalcAdvisor Privacy Policy. Calculator inputs stay in your browser — never sent to our servers.",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/" className="transition hover:text-slate-900">
          ← Back to calculator directory
        </Link>
      </nav>

      <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-8 space-y-8 text-base leading-8 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            1. What we collect
          </h2>
          <p className="mt-3">
            CalcAdvisor is designed to collect as little data as possible. Here
            is exactly what happens when you use the site:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="font-medium text-slate-800">
                Calculator inputs:
              </strong>{" "}
              Every number you enter into any calculator is processed entirely
              in your browser. Nothing is sent to our servers and nothing is
              stored — not even temporarily.
            </li>
            <li>
              <strong className="font-medium text-slate-800">
                Waitlist email:
              </strong>{" "}
              If you join the AI Advisor waitlist, your email address is stored
              locally in your browser only. It is not transmitted to any server
              unless you explicitly consent at a future step.
            </li>
            <li>
              <strong className="font-medium text-slate-800">Analytics:</strong>{" "}
              We may collect anonymous, aggregated usage data — page views and
              popular tools — to improve the directory. No personally
              identifiable information is collected or linked to any individual
              user.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Cookies</h2>
          <p className="mt-3">
            CalcAdvisor does not use advertising cookies or cross-site tracking
            of any kind. We do not work with ad networks. A minimal first-party
            session cookie may be set solely to preserve basic functionality
            such as search state. No third-party cookies are set by this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            3. Third-party services
          </h2>
          <p className="mt-3">
            CalcAdvisor is hosted on standard web infrastructure. Our hosting
            provider may collect server-level logs — IP address, user-agent,
            and request path — as part of normal server operations. These logs
            are retained according to the provider&apos;s own data retention
            policy and are not used for advertising or profiling.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            4. Children
          </h2>
          <p className="mt-3">
            CalcAdvisor is not directed at children under the age of 13 and
            does not knowingly collect personal information from anyone under
            13. If you believe a child has submitted personal information
            through this site, please contact us and we will delete it
            promptly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            5. Data security
          </h2>
          <p className="mt-3">
            Because calculator inputs never leave your browser and we collect
            minimal data overall, your exposure on this site is extremely
            limited. All pages are served over HTTPS. We do not store passwords,
            payment information, or sensitive personal data of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            6. Changes to this policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. The date at
            the top of the page reflects when it was last revised. Continued
            use of the site after any update constitutes acceptance of the
            revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Contact</h2>
          <p className="mt-3">
            For privacy-related questions, please use our{" "}
            <Link
              href="/contact"
              className="font-medium text-slate-900 underline underline-offset-4"
            >
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
