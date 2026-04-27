"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

const BARE_PATHS = ["/cardapio"];

function isBare(pathname: string | null) {
  if (!pathname) return false;
  return BARE_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

type SiteShellProps = {
  header: ReactNode;
  footer: ReactNode;
  whatsapp: ReactNode;
  children: ReactNode;
};

export function SiteShell({
  header,
  footer,
  whatsapp,
  children,
}: SiteShellProps) {
  const pathname = usePathname();
  if (isBare(pathname)) {
    return <>{children}</>;
  }
  return (
    <>
      <div className="site-shell">
        {header}
        {children}
        {footer}
      </div>
      {whatsapp}
    </>
  );
}
