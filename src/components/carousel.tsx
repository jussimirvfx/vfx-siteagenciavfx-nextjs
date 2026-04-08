"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

type CarouselItem = {
  src: string;
  alt: string;
};

type CarouselProps = {
  items: CarouselItem[];
  aspectRatio?: string;
  className?: string;
};

export function Carousel({ items, aspectRatio = "4 / 5", className }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Array.from(track.children).indexOf(entry.target as HTMLElement);
            if (idx >= 0) setCurrent(idx);
          }
        }
      },
      { root: track, threshold: 0.6 },
    );

    Array.from(track.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [items.length]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { isDown: true, startX: e.pageX - track.offsetLeft, scrollLeft: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
    track.style.cursor = "grabbing";
    track.style.scrollSnapType = "none";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current.isDown) return;
    const track = trackRef.current;
    if (!track) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.5;
    track.scrollLeft = dragState.current.scrollLeft - walk;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    dragState.current.isDown = false;
    const track = trackRef.current;
    if (!track) return;
    track.releasePointerCapture(e.pointerId);
    track.style.cursor = "";
    track.style.scrollSnapType = "x mandatory";
  }, []);

  return (
    <div className={`carousel ${className ?? ""}`}>
      <div
        className="carousel__track"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {items.map((item, i) => (
          <div className="carousel__slide" key={i} style={{ aspectRatio }}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 80vw, 300px"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="carousel__dots">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel__dot ${i === current ? "is-active" : ""}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

type GalleryCarouselProps = {
  items: CarouselItem[];
};

export function GalleryCarousel({ items }: GalleryCarouselProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(".gallery-carousel__slide") as HTMLElement | null;
    if (!slide) return;
    const amount = (slide.offsetWidth + 16) * dir;
    track.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  // Duplicate items so the track is wide enough for seamless marquee
  const doubled = [...items, ...items];

  return (
    <div className="gallery-carousel" ref={wrapperRef}>
      <div className="gallery-carousel__track" ref={trackRef}>
        {doubled.map((item, i) => (
          <div className="gallery-carousel__slide" key={i}>
            <Image
              src={item.src}
              alt={item.alt}
              width={1280}
              height={693}
              draggable={false}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="gallery-carousel__arrow gallery-carousel__arrow--prev"
        onClick={() => scroll(-1)}
        aria-label="Anterior"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        className="gallery-carousel__arrow gallery-carousel__arrow--next"
        onClick={() => scroll(1)}
        aria-label="Próximo"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
