import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
