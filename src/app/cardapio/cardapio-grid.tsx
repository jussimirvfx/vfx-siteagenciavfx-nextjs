"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

type Item = {
  title: string;
  thumbnail: string;
  videoId: string;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        target: string | HTMLElement,
        config: Record<string, unknown>,
      ) => YouTubePlayer;
      PlayerState: { PAUSED: number; ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

type YouTubePlayer = {
  playVideo: () => void;
  destroy: () => void;
};

const YT_SRC = "https://www.youtube.com/iframe_api";

function loadYouTubeApi(): Promise<NonNullable<Window["YT"]>> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("YouTube API requires a browser"));
  }
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      if (window.YT?.Player) resolve(window.YT);
    };
    if (!document.querySelector(`script[src="${YT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = YT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
  });
}

export function CardapioGrid({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <div className="cardapio__grid">
        {items.map((item, index) => {
          const isOddLast =
            index === items.length - 1 && items.length % 2 !== 0;
          return (
            <div
              key={item.videoId}
              className={`cardapio__cell${isOddLast ? " cardapio__cell--center" : ""}`}
            >
              <button
                type="button"
                className="cardapio__card"
                onClick={() => setOpenId(item.videoId)}
                aria-label={`Assistir vídeo: ${item.title}`}
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
              </button>
            </div>
          );
        })}
      </div>
      {openId ? (
        <CardapioVideoModal
          videoId={openId}
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </>
  );
}

function CardapioVideoModal({
  videoId,
  onClose,
}: {
  videoId: string;
  onClose: () => void;
}) {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const hostIdRef = useRef(
    `yt-${Math.random().toString(36).slice(2, 10)}`,
  );
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled) return;
      const host = document.getElementById(hostIdRef.current);
      if (!host) return;
      playerRef.current = new YT.Player(host, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          disablekb: 1,
          iv_load_policy: 3,
        },
        events: {
          onStateChange: (event: { data: number }) => {
            if (cancelled) return;
            setIsPaused(
              event.data === YT.PlayerState.PAUSED ||
                event.data === YT.PlayerState.ENDED,
            );
          },
        },
      });
    });

    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy();
      } catch {
        // ignore: already detached
      }
    };
  }, [videoId]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const handlePlay = useCallback(() => {
    playerRef.current?.playVideo();
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className="video-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Player de vídeo"
    >
      <button
        type="button"
        className="video-modal__backdrop"
        onClick={onClose}
        aria-label="Fechar vídeo"
      />
      <div className="video-modal__panel">
        <button
          type="button"
          className="video-modal__close"
          onClick={onClose}
          aria-label="Fechar vídeo"
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="video-modal__frame cardapio-player">
          <div id={hostIdRef.current} className="cardapio-player__host" />
          {isPaused ? (
            <button
              type="button"
              className="cardapio-player__play"
              onClick={handlePlay}
              aria-label="Reproduzir vídeo"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}
