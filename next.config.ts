import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    deviceSizes: [640, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/casefumil",
        destination: "/cases/fumil",
        permanent: true,
      },
      {
        source: "/kit-super-video-marketing",
        destination: "/recursos/kit-super-video-marketing",
        permanent: true,
      },
      {
        source: "/agendar",
        destination: "/contato",
        permanent: true,
      },
      {
        source: "/criar-contato",
        destination: "/contato",
        permanent: true,
      },
      {
        source: "/confirmado",
        destination: "/contato",
        permanent: true,
      },
      {
        source: "/obrigado",
        destination: "/contato",
        permanent: true,
      },
      {
        source: "/assinar",
        destination: "/contato",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
