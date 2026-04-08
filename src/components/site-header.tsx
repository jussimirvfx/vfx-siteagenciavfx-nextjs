"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { WhatsAppLink } from "@/components/whatsapp-link";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeScrolled, setIsHomeScrolled] = useState(false);
  const isHome = pathname === "/";
  const isCaseFumil = pathname === "/cases/fumil";
  const isTransparent = isHome || isCaseFumil;

  const items = isHome
    ? [
        { label: "Como funciona?", href: "/#intro" },
        { label: "Serviços", href: "/#services" },
        { label: "Portfólio", href: "/#portfolio" },
      ]
    : siteConfig.navigation;

  useEffect(() => {
    if (!isTransparent) {
      return;
    }

    const updateHeaderState = () => {
      setIsHomeScrolled(window.scrollY > 24);
    };

    const frame = window.requestAnimationFrame(updateHeaderState);
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, [isTransparent]);

  return (
    <header
      className={`site-header${isTransparent ? " site-header--home" : ""}${
        isTransparent && isHomeScrolled ? " site-header--home-scrolled" : ""
      }`}
    >
      <div className="section__inner site-header__inner">
        <Link aria-label="VFX Videos" className="site-header__brand" href="/">
          <span className="site-header__logo-image">
            <Image
              alt="Logo da VFX Videos"
              fill
              priority
              sizes="180px"
              src={
                isTransparent && !isHomeScrolled
                  ? "/assets/brand/Agencia-VFX-Logo-FundosEscuros-Alt-400x154.png"
                  : "/assets/brand/logo-original.png"
              }
            />
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
          <WhatsAppLink
            className={`button ${
              isHome
                ? isHomeScrolled
                  ? "button--header-home-top"
                  : "button--header-home"
                : isCaseFumil
                  ? "button--whatsapp"
                  : "button--primary"
            }`}
          >
            {isHome ? "Agende uma reunião" : "Falar no WhatsApp"}
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

      <div
        className={`site-header__mobile-panel${isOpen ? " is-open" : ""}`}
      >
        <nav aria-label="Menu mobile">
          <ul className="site-header__mobile-list">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <WhatsAppLink
          className={`button button--full ${
            isHome
              ? isHomeScrolled
                ? "button--header-home-top"
                : "button--header-home"
              : "button--primary"
          }`}
        >
          {isHome ? "Agende uma reunião" : "Chamar no WhatsApp"}
        </WhatsAppLink>
      </div>
    </header>
  );
}
