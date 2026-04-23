import Link from "next/link";

import { WhatsAppLink } from "@/components/whatsapp-link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section__inner site-footer__inner">
        <div className="site-footer__lead">
          <h2>Revolucione suas vendas e aumente seus lucros</h2>
        </div>

        <div className="site-footer__grid">
          <div>
            <h3>Soluções</h3>
            <ul>
              <li>
                <Link href="/solucoes/videos-marketing">Vídeos Marketing</Link>
              </li>
              <li>
                <Link href="/solucoes/trafego-pago">Tráfego Pago</Link>
              </li>
              <li>
                <Link href="/#services">Landing Pages</Link>
              </li>
              <li>
                <Link href="/#services">Automação de MKT com Whatsapp</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contato</h3>
            <ul>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>{siteConfig.city}</li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <WhatsAppLink className="site-footer__bottom-cta">
            Agende uma reunião
          </WhatsAppLink>
          <p>{new Date().getFullYear()}, copywriting VFX Videos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
