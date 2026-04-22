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
      {
        source: "/briefing",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLScpWnabKvlN2hfQhNsu1jXWwmM4FjNj-nkWoJ30Kfl1wYxwGw/viewform?usp=sf_link",
        permanent: true,
      },
      {
        source: "/briefinglandingpage",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSdoZaB53jidINDex32cxPEy8B2iRpWm4uplcYiIF1q0p4IKIw/viewform",
        permanent: true,
      },
      {
        source: "/briefingchatbot",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLScilT0-mnvfEpfK0to5PYXpxTLOwcIZWPpGCzx3liX6d76MxA/viewform?usp=sf_link",
        permanent: true,
      },
      {
        source: "/briefingchatbotcaptacao",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSd7qcwSjPnPJ5mqZS16R3VR8Z0nDCDyt792o8wbBX-OEsLuAQ/viewform",
        permanent: true,
      },
      {
        source: "/vagas",
        destination: "https://agenciavfx.vagas.solides.com.br/vaga/289245",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
