import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    const cityLandingsToConsolidate = [
      "/psicologo-online-pereira",
      "/psicologo-online-armenia",
      "/psicologo-online-medellin",
      "/psicologo-online-bogota",
    ];

    return [
      ...cityLandingsToConsolidate.map((source) => ({
        source,
        destination: "/psicoterapia-online",
        permanent: true,
      })),
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.psicologojeffersonbastidas.com",
          },
        ],
        destination: "https://psicologojeffersonbastidas.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
