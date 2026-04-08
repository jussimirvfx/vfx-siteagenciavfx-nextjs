"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaHidden?: boolean;
  ariaLabel?: string;
};

export function LazyVideo({
  src,
  poster,
  className,
  ariaHidden,
  ariaLabel,
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isNear, setIsNear] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = ref.current;

    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const togglePlay = useCallback(() => {
    const video = ref.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  }, []);

  return (
    <span
      className={`lazy-video-wrap${paused ? " lazy-video-wrap--paused" : ""}`}
      onClick={togglePlay}
    >
      <video
        ref={ref}
        aria-hidden={ariaHidden}
        aria-label={ariaLabel}
        autoPlay={isNear}
        className={className}
        loop
        muted
        playsInline
        poster={poster}
        preload="none"
      >
        {isNear ? <source src={src} type="video/mp4" /> : null}
      </video>
      <span className="lazy-video-play-btn" aria-hidden="true">
        {paused ? (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </span>
    </span>
  );
}
