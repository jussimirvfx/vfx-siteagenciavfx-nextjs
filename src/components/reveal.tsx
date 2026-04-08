"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealTag =
  | "article"
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "p"
  | "section"
  | "span"
  | "ul";

type RevealVariant = "clip-up" | "fade" | "fade-up" | "grow";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: RevealTag;
  children: ReactNode;
  delay?: number;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
  variant?: RevealVariant;
};

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  once = true,
  rootMargin = "0px 0px -12% 0px",
  threshold = 0.18,
  variant = "fade-up",
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin,
        threshold,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  const Component = as;

  return (
    <Component
      className={`homev2__reveal homev2__reveal--${variant}${
        isVisible ? " is-visible" : ""
      }${className ? ` ${className}` : ""}`}
      ref={ref as never}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
      {...props}
    >
      {variant === "clip-up" ? (
        <span className="homev2__reveal-inner">{children}</span>
      ) : (
        children
      )}
    </Component>
  );
}
