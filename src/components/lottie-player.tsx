"use client";

import { createElement, useEffect, useRef, useState } from "react";

import Script from "next/script";

type LottiePlayerProps = {
  src: string;
  speed?: number;
  className?: string;
};

export function LottiePlayer({
  src,
  speed = 1,
  className,
}: LottiePlayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {shouldLoad ? (
        <>
          <Script
            src="https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js"
            strategy="lazyOnload"
          />
          {createElement("lottie-player", {
            autoplay: true,
            class: className,
            loop: true,
            mode: "normal",
            speed,
            src,
          } as never)}
        </>
      ) : (
        <div className={className} style={{ minHeight: 120 }} />
      )}
    </div>
  );
}
