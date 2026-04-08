import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Caveat,
  Open_Sans,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Schema } from "@/components/schema";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const accentFont = Caveat({
  variable: "--font-accent",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Agencia VFX | Videomarketing de Performance",
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "marketing",
  keywords: [
    "videomarketing",
    "marketing de performance",
    "landing pages",
    "anuncios",
    "whatsapp marketing",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/brand/icon.png",
    apple: "/assets/brand/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
      </head>
      <body>
        <Schema id="schema-organization" data={buildOrganizationSchema()} />
        <Schema id="schema-website" data={buildWebsiteSchema()} />
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
