"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

type VideoDialogProps = {
  title: string;
  buttonLabel: string;
  embedUrl: string;
  className?: string;
  children?: ReactNode;
  format?: "landscape" | "portrait";
};

export function VideoDialog({
  title,
  buttonLabel,
  embedUrl,
  className,
  children,
  format = "landscape",
}: VideoDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        aria-label={children ? buttonLabel : undefined}
        className={className}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        {children ?? buttonLabel}
      </button>

      {isOpen
        ? createPortal(
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
              <div
                className={`video-modal__panel${
                  format === "portrait" ? " video-modal__panel--portrait" : ""
                }`}
              >
                <button
                  aria-label="Fechar video"
                  className="video-modal__close"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div
                  className={`video-modal__frame${
                    format === "portrait" ? " video-modal__frame--portrait" : ""
                  }`}
                >
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    src={embedUrl}
                    title={title}
                  />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
