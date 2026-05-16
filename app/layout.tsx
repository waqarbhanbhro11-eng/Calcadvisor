import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Calculate Anything. Free. Instant. No Sign-up | CalcAdvisor",
    template: `%s | CalcAdvisor`,
  },
  description: "200+ free calculators for mortgage payments, loan EMI, compound interest, BMI, tax estimates, budget planning, and more. No sign-up. Instant results. Trusted tools for everyday decisions.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.creator,
  verification: {
    google: "8ZSG2kPJ1T22r6Fb5gFiMiqJTvJ87eUkkprNqh5XfoE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/logo.svg", color: "#1e40af" },
    ],
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "CalcAdvisor — 200+ Free Calculators for Finance, Math & Health",
    description: "Free calculators for mortgage, loans, BMI, tax, compound interest, budget planner and 200+ more. No sign-up. Instant answers.",
    siteName: siteConfig.name,
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "CalcAdvisor — Free Calculator Directory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcAdvisor — 200+ Free Calculators",
    description: "Free calculators for mortgage, loans, BMI, tax, compound interest and 200+ more. No sign-up required.",
    images: ["/og-default.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/logo.svg`,
    width: 512,
    height: 512,
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4907064961010150"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
