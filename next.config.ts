import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Para las que ya tienes
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Para las nuevas de Cloudinary
      },
    ],
  },
};

export default nextConfig;