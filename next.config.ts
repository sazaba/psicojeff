import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, // Asegura compresión Gzip/Brotli
  poweredByHeader: false, // Seguridad y ahorro de bytes
  images: {
    formats: ['image/avif', 'image/webp'], // Prioriza AVIF que es más ligero
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // Optimización agresiva de cabeceras para caché
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;