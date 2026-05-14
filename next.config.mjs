/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Security + SEO headers on every response
        source: "/(.*)",
        headers: [
          { key: "X-Robots-Tag",           value: "index, follow" },
          { key: "X-Content-Type-Options",  value: "nosniff" },
          { key: "X-Frame-Options",         value: "SAMEORIGIN" },
          { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",      value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        // Long-term cache for immutable Next.js static assets
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache public assets (images, icons) for 7 days
        source: "/(.*)\\.(png|jpg|jpeg|gif|webp|svg|ico|woff2|woff)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // non-www → www (canonical enforce)
      {
        source: "/:path*",
        has: [{ type: "host", value: "calcadvisor.com" }],
        destination: "https://www.calcadvisor.com/:path*",
        permanent: true,
      },
      // Canonical: strip trailing slashes
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
