import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Agencia VFX",
    short_name: "Agencia VFX",
    description:
      "Videomarketing de performance com foco em videos, anuncios, landing pages e automacao comercial.",
    start_url: "/",
    display: "standalone",
    background_color: "#081732",
    theme_color: "#3d7cff",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
