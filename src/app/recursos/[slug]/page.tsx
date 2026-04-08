import Image from "next/image";
import { notFound } from "next/navigation";

import { Schema } from "@/components/schema";
import { Breadcrumbs, FaqList, FeatureGrid, MediaGrid, SectionIntro } from "@/components/ui";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { resourcePages } from "@/lib/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(resourcePages).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ResourcePageProps) {
  const { slug } = await params;
  const page = resourcePages[slug];

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/recursos/${slug}`,
    image: page.heroImage.image,
  });
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const page = resourcePages[slug];

  if (!page) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="section__inner">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Recursos", href: "/recursos/kit-super-video-marketing" },
              { label: page.title },
            ]}
          />
          <div className="page-hero__panel">
            <div className="page-hero__content">
              <p className="eyebrow">{page.eyebrow}</p>
              <h1>{page.title}</h1>
              <p className="page-hero__note">{page.description}</p>
              <p>
                Esta pagina preserva a forca comercial da oferta original, mas
                troca checkout e scripts antigos por um CTA mais simples e mais
                alinhado ao novo site.
              </p>
              <div className="page-hero__actions">
                <WhatsAppLink className="button button--primary button--large">
                  Quero falar sobre este recurso
                </WhatsAppLink>
              </div>
            </div>

            <div className="media-card__frame" style={{ aspectRatio: "1 / 1" }}>
              <Image
                alt={page.heroImage.alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 40vw"
                src={page.heroImage.image}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionIntro
            eyebrow="O que entra"
            title="Uma pagina de recurso com a mesma identidade, mas muito mais leve"
            description="Os pontos abaixo sintetizam a proposta original do kit e reposicionam a conversa para o WhatsApp."
          />
          <FeatureGrid items={page.offerItems} />
        </div>
      </section>

      <section className="section section--surface">
        <div className="section__inner">
          <SectionIntro
            eyebrow="Entregaveis"
            title="Amostra visual dos ativos"
            description="Os itens centrais do kit foram mantidos como prova visual e apoio comercial."
          />
          <MediaGrid items={page.deliverables} />
        </div>
      </section>

      <section className="section">
        <div className="section__inner split-panel">
          <div className="split-panel__content">
            <SectionIntro
              eyebrow="Prova"
              title="Por que esta pagina continua importante"
              description="Mesmo com o CTA novo, o material segue sendo util para explicar repertorio, volume de entregas e autoridade."
            />
            <FeatureGrid items={page.proofItems} />
          </div>
          <div className="content-card">
            <SectionIntro
              eyebrow="Confianca"
              title="Ambiente comercial mais simples"
              description="Em vez de checkout, o visitante encontra um caminho direto para falar com a equipe."
            />
            <div className="media-card__frame" style={{ aspectRatio: "5 / 1" }}>
              <Image
                alt="Selo de compra segura"
                fill
                sizes="(max-width: 1200px) 100vw, 40vw"
                src="/assets/resource-kit/secure.webp"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="section__inner">
          <SectionIntro
            eyebrow="Depoimentos"
            title="Feedbacks que ajudam a contextualizar a autoridade da VFX"
            description="Os depoimentos foram condensados para deixar a leitura mais rapida."
          />
          <div className="feature-grid">
            {page.testimonialItems.map((item) => (
              <article className="feature-card" key={item.quote}>
                <h3>{item.author}</h3>
                <p>{item.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionIntro
            eyebrow="FAQ"
            title="Perguntas frequentes"
            description="As respostas foram simplificadas para caber melhor no novo site."
          />
          <FaqList items={page.faqItems} />
        </div>
      </section>

      <section className="section section--accent">
        <div className="section__inner cta-band">
          <div>
            <p className="eyebrow">CTA principal</p>
            <h2>Quer aplicar algo parecido no seu contexto?</h2>
            <p>
              O caminho agora e conversar com a equipe, entender o cenario e
              desenhar o proximo passo sem atrito.
            </p>
          </div>
          <WhatsAppLink className="button button--primary button--large">
            Falar com a VFX
          </WhatsAppLink>
        </div>
      </section>

      <Schema
        id="resource-breadcrumb-schema"
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Recursos", path: "/recursos/kit-super-video-marketing" },
          { name: page.title, path: `/recursos/${page.slug}` },
        ])}
      />
      <Schema
        id="resource-faq-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
    </main>
  );
}
