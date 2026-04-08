"use client";

import { useEffect, useRef, useState } from "react";

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

  return (
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
  );
}
