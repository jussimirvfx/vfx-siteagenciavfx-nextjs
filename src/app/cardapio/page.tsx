import { buildMetadata } from "@/lib/seo";

import { CardapioGrid } from "./cardapio-grid";

export const metadata = buildMetadata({
  title: "Cardápio VFX Vídeos | Agência VFX",
  description: "Conheça nossos serviços de produção de vídeos.",
  path: "/cardapio",
});

const items = [
  {
    title: "Dinâmico",
    thumbnail: "/assets/cardapio/tb-cardapio-din-02.jpg",
    videoId: "QE4OSwnbDhE",
  },
  {
    title: "2D Produção",
    thumbnail: "/assets/cardapio/tb-cardapio-2dp-02.jpg",
    videoId: "kIPCmobj6Vs",
  },
  {
    title: "Quick Brief",
    thumbnail: "/assets/cardapio/tb-cardapio-qb-02.jpg",
    videoId: "kBUGzrLZNmg",
  },
  {
    title: "2D Exclusivo",
    thumbnail: "/assets/cardapio/tb-cardapio-2dexc-02.jpg",
    videoId: "QBE2yVsz41k",
  },
  {
    title: "Ator Estúdio",
    thumbnail: "/assets/cardapio/tb-cardapio-atorestudio-02.jpg",
    videoId: "3R4a-R21NEE",
  },
];

export default function CardapioPage() {
  return (
    <main className="cardapio">
      <div className="cardapio__container">
        <h1 className="cardapio__title">Cardápio VFX Vídeos</h1>
        <CardapioGrid items={items} />
      </div>
    </main>
  );
}
