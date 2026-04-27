import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Caveat,
  Open_Sans,
  Plus_Jakarta_Sans,
} from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import { Schema } from "@/components/schema";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteShell } from "@/components/site-shell";
import { WhatsAppFloat } from "@/components/whatsapp-float";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body>
        <Schema id="schema-organization" data={buildOrganizationSchema()} />
        <Schema id="schema-website" data={buildWebsiteSchema()} />
        <SiteShell
          header={<SiteHeader />}
          footer={<SiteFooter />}
          whatsapp={<WhatsAppFloat />}
        >
          {children}
        </SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
