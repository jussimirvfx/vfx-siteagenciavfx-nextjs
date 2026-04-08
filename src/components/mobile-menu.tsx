"use client";

import Link from "next/link";

import { WhatsAppLink } from "@/components/whatsapp-link";

type MobileMenuItem = { readonly label: string; readonly href: string };

type MobileMenuProps = {
  items: readonly MobileMenuItem[];
  isOpen: boolean;
  buttonClass: string;
  buttonLabel: string;
  onClose: () => void;
};

export function MobileMenu({
  items,
  isOpen,
  buttonClass,
  buttonLabel,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="site-header__mobile-panel is-open">
      <nav aria-label="Menu mobile">
        <ul className="site-header__mobile-list">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={onClose}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <WhatsAppLink className={`button button--full ${buttonClass}`}>
        {buttonLabel}
      </WhatsAppLink>
    </div>
  );
}
