import { Schema } from "@/components/schema";
import { Breadcrumbs, FeatureGrid, SectionIntro } from "@/components/ui";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const contactSteps = [
  {
    title: "Diagnostico rapido",
    description:
      "Entendemos seu momento comercial, a oferta principal e os gargalos de captacao ou conversao.",
  },
  {
    title: "Direcionamento objetivo",
    description:
      "Indicamos quais combinacoes de video, anuncios, pagina e automacao fazem mais sentido para o seu cenario.",
  },
  {
    title: "Proposta com menos atrito",
    description:
      "Sem funis pesados ou paginas intermediarias: a conversa ja comeca direto com o canal comercial da VFX.",
  },
];

export const metadata = buildMetadata({
  title: "Contato",
  description:
    "Converse com a Agencia VFX no WhatsApp e descubra como estruturar videos, anuncios e paginas para crescer com mais previsibilidade.",
  path: "/contato",
});

export default function ContactPage() {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Contato" },
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="section__inner">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="page-hero__panel">
            <div className="page-hero__content">
              <p className="eyebrow">Contato</p>
              <h1>Fale direto com a equipe da Agencia VFX</h1>
              <p className="page-hero__note">
                O fluxo novo do site foi simplificado para levar o visitante
                direto para uma conversa comercial mais rapida e clara.
              </p>
              <p>
                Se voce quer entender como videos, anuncios, landing pages e
                automacao podem apoiar o crescimento da sua empresa, o melhor
                caminho agora e o WhatsApp.
              </p>

              <div className="page-hero__actions">
                <WhatsAppLink className="button button--primary button--large">
                  Abrir conversa no WhatsApp
                </WhatsAppLink>
                <a
                  className="button button--secondary button--large"
                  href={`mailto:${siteConfig.email}`}
                >
                  Enviar email
                </a>
              </div>
            </div>

            <div className="content-card">
              <SectionIntro
                eyebrow="O que acontece depois"
                title="Uma conversa curta, objetiva e sem formularios longos"
                description="Voce entra em contato, compartilha o contexto e a equipe direciona os proximos passos."
              />
              <ul className="bullet-list">
                <li>Resposta pelo canal comercial oficial</li>
                <li>Contexto inicial sobre marketing, vendas e oferta</li>
                <li>Encaminhamento para a solucao mais adequada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionIntro
            eyebrow="Fluxo comercial"
            title="Menos atrito para marcar a primeira conversa"
            description="Estas sao as etapas que passam a orientar o contato nesta nova versao do site."
          />
          <FeatureGrid items={contactSteps} />
        </div>
      </section>

      <section className="section section--surface">
        <div className="section__inner split-panel">
          <div className="split-panel__content">
            <SectionIntro
              eyebrow="Informacoes"
              title="Contato comercial e base de operacao"
              description="Mantivemos os dados centrais de contato do site antigo e trocamos o funil tecnico por um CTA mais simples."
            />
            <ul className="bullet-list">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phoneDisplay}</li>
              <li>{siteConfig.city}</li>
            </ul>
          </div>

          <div className="content-card">
            <SectionIntro
              eyebrow="CTA principal"
              title="Agende uma conversa pelo WhatsApp"
              description="Se preferir, envie ja uma mensagem contando seu segmento, oferta principal e objetivo de crescimento."
            />
            <WhatsAppLink className="button button--primary button--full button--large">
              Falar agora
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <Schema
        id="contato-breadcrumb-schema"
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Contato", path: "/contato" },
        ])}
      />
    </main>
  );
}
