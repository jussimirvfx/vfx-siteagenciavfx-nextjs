"use client";

import Image from "next/image";
import {
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

type ShowcaseRevealProps = {
  title: string;
  duration: string;
  imageSrc: string;
  videoUrl: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ShowcaseReveal({
  title,
  duration,
  imageSrc,
  videoUrl,
}: ShowcaseRevealProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.88;
      const end = viewportHeight * 0.18;
      const next = clamp((start - rect.top) / (start - end), 0, 1);

      setProgress(next);
    };

    const schedule = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <>
      <section className="homev2__showcase-video" ref={sectionRef}>
        <div className="section__inner">
          <div
            className="homev2__showcase-frame"
            style={{ "--showcase-progress": progress } as CSSProperties}
          >
            <div
              className="homev2__showcase-media"
              ref={mediaRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={(event) => {
                const rect = mediaRef.current?.getBoundingClientRect();

                if (!rect) {
                  return;
                }

                setCursor({
                  x: event.clientX - rect.left,
                  y: event.clientY - rect.top,
                });
              }}
            >
              <Image
                alt="Equipe da Agencia VFX"
                fill
                priority={false}
                quality={85}
                sizes="min(100vw, 2560px)"
                src={imageSrc}
              />

              <button
                aria-label={`Assistir ${title}`}
                className="homev2__showcase-hitarea"
                type="button"
                onClick={() => setIsOpen(true)}
              />

              <div
                aria-hidden="true"
                className={`homev2__showcase-cursor${
                  isHovering ? " is-visible" : ""
                }`}
                style={
                  {
                    "--cursor-x": `${cursor.x}px`,
                    "--cursor-y": `${cursor.y}px`,
                  } as CSSProperties
                }
              >
                <span className="homev2__showcase-cursor-icon" />
              </div>

              <div className="homev2__showcase-copy">
                <h2>{title}</h2>
                <p>{duration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpen ? (
        <div
          aria-label={title}
          aria-modal="true"
          className="video-modal"
          role="dialog"
        >
          <button
            aria-label="Fechar video"
            className="video-modal__backdrop"
            type="button"
            onClick={() => setIsOpen(false)}
          />
          <div className="video-modal__panel">
            <button
              aria-label="Fechar video"
              className="video-modal__close"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="video-modal__frame">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src={videoUrl}
                title={title}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
