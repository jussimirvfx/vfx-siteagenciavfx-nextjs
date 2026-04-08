"use client";

import { createElement } from "react";

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
  return (
    <>
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        strategy="afterInteractive"
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
  );
}
