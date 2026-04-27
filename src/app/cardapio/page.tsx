import Image from "next/image";

import { VideoDialog } from "@/components/video-dialog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cardápio VFX Vídeos | Agência VFX",
  description: "Conheça nossos serviços de produção de vídeos.",
  path: "/cardapio",
});

const items = [
  {
    title: "Dinâmico",
    thumbnail: "/assets/cardapio/tb-cardapio-din-02.jpg",
    embedUrl: "https://www.youtube.com/embed/QE4OSwnbDhE?autoplay=1",
  },
  {
    title: "2D Produção",
    thumbnail: "/assets/cardapio/tb-cardapio-2dp-02.jpg",
    embedUrl: "https://www.youtube.com/embed/kIPCmobj6Vs?autoplay=1",
  },
  {
    title: "Quick Brief",
    thumbnail: "/assets/cardapio/tb-cardapio-qb-02.jpg",
    embedUrl: "https://www.youtube.com/embed/kBUGzrLZNmg?autoplay=1",
  },
  {
    title: "2D Exclusivo",
    thumbnail: "/assets/cardapio/tb-cardapio-2dexc-02.jpg",
    embedUrl: "https://www.youtube.com/embed/QBE2yVsz41k?autoplay=1",
  },
  {
    title: "Ator Estúdio",
    thumbnail: "/assets/cardapio/tb-cardapio-atorestudio-02.jpg",
    embedUrl: "https://www.youtube.com/embed/3R4a-R21NEE?autoplay=1",
  },
];

export default function CardapioPage() {
  return (
    <main className="cardapio">
      <div className="cardapio__container">
        <h1 className="cardapio__title">Cardápio VFX Vídeos</h1>
        <div className="cardapio__grid">
          {items.map((item, index) => {
            const isOddLast =
              index === items.length - 1 && items.length % 2 !== 0;
            return (
              <div
                key={item.embedUrl}
                className={`cardapio__cell${isOddLast ? " cardapio__cell--center" : ""}`}
              >
                <VideoDialog
                  title={`Assistir vídeo: ${item.title}`}
                  buttonLabel={`Assistir vídeo: ${item.title}`}
                  embedUrl={item.embedUrl}
                  className="cardapio__card"
                >
                  <span className="cardapio__thumb">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="cardapio__image"
                    />
                    <span aria-hidden="true" className="cardapio__overlay">
                      <span className="cardapio__play">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <polygon points="6 3 20 12 6 21 6 3" />
                        </svg>
                      </span>
                    </span>
                  </span>
                </VideoDialog>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
