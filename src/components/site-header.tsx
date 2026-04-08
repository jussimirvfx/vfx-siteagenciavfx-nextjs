"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { WhatsAppLink } from "@/components/whatsapp-link";
import { siteConfig } from "@/lib/site-config";

const MobileMenu = dynamic(
  () => import("@/components/mobile-menu").then((m) => m.MobileMenu),
);

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isScrolledRef = useRef(false);
  const headerRef = useRef<HTMLElement>(null);

  const isHome = pathname === "/";
  const isCaseFumil = pathname === "/cases/fumil";
  const isServicePage = pathname.startsWith("/solucoes/");
  const isTransparent = isHome || isCaseFumil || isServicePage;

  const items = isHome
    ? [
        { label: "Como funciona?", href: "/#intro" },
        { label: "Serviços", href: "/#services" },
        { label: "Portfólio", href: "/#portfolio" },
      ]
    : siteConfig.navigation;

  const updateScrollClass = useCallback(() => {
    const scrolled = window.scrollY > 24;

    if (scrolled !== isScrolledRef.current) {
      isScrolledRef.current = scrolled;
      headerRef.current?.classList.toggle(
        "site-header--home-scrolled",
        scrolled,
      );
    }
  }, []);

  useEffect(() => {
    if (!isTransparent) {
      return;
    }

    const frame = window.requestAnimationFrame(updateScrollClass);
    window.addEventListener("scroll", updateScrollClass, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollClass);
    };
  }, [isTransparent, updateScrollClass]);

  const buttonClass = isCaseFumil
    ? "button--whatsapp"
    : "button--header-home";

  return (
    <header
      className={`site-header${isTransparent ? " site-header--home" : ""}`}
      ref={headerRef}
    >
      <div className="section__inner site-header__inner">
        <Link aria-label="VFX Videos" className="site-header__brand" href="/">
          <span className="site-header__logo-image">
            {isTransparent ? (
              <>
                <Image
                  alt="Logo da VFX Videos"
                  className="site-header__logo-light"
                  fill
                  priority
                  sizes="180px"
                  src="/assets/brand/Agencia-VFX-Logo-FundosEscuros-Alt-400x154.png"
                />
                <Image
                  alt=""
                  aria-hidden="true"
                  className="site-header__logo-dark"
                  fill
                  sizes="180px"
                  src="/assets/brand/logo-original.png"
                />
              </>
            ) : (
              <Image
                alt="Logo da VFX Videos"
                fill
                priority
                sizes="180px"
                src="/assets/brand/logo-original.png"
              />
            )}
          </span>
        </Link>

        <nav aria-label="Principal" className="site-header__nav">
          <ul className="site-header__nav-list">
            {items.map((item) => {
              const isActive =
                !isHome &&
                (pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href)));

              return (
                <li key={item.href}>
                  <Link
                    className={isActive ? "is-active" : undefined}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-header__actions">
          <WhatsAppLink className={`button ${buttonClass}`}>
            {isHome ? "Fale com um especialista" : "Falar no WhatsApp"}
          </WhatsAppLink>
          <button
            aria-expanded={isOpen}
            aria-label="Abrir menu"
            className="site-header__menu-button"
            type="button"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MobileMenu
        buttonClass={buttonClass}
        buttonLabel={isHome ? "Fale com um especialista" : "Chamar no WhatsApp"}
        isOpen={isOpen}
        items={items}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
}
