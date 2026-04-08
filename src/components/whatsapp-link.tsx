import type { ReactNode } from "react";

import { createWhatsAppLink } from "@/lib/site-config";

type WhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  message?: string;
};

export function WhatsAppLink({
  children,
  className,
  message,
}: WhatsAppLinkProps) {
  return (
    <a
      className={className}
      href={createWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
