import type { NextConfig } from "next";

// Security headers applied to every page. Vercel adds HTTPS (HSTS) automatically.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // The marketing pages used to live at the top level. Send old links and search results to their new address.
  async redirects() {
    return [
      { source: "/about", destination: "/marketing/about", permanent: true },
      { source: "/services", destination: "/marketing/services", permanent: true },
      { source: "/services/:slug", destination: "/marketing/services/:slug", permanent: true },
      { source: "/contact", destination: "/marketing/contact", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Brand renders and fonts rarely change; let browsers and Vercel's CDN keep them for a week.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
