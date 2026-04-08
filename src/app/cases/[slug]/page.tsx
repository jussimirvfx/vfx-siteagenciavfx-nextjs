import Image from "next/image";
import { notFound } from "next/navigation";

import { Schema } from "@/components/schema";
import {
  Breadcrumbs,
  FeatureGrid,
  MediaGrid,
  SectionIntro,
  StatGrid,
} from "@/components/ui";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { caseStudies } from "@/lib/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CasePageProps) {
  const { slug } = await params;
  const page = caseStudies[slug];

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/cases/${slug}`,
    image: page.heroImage.image,
    type: "article",
  });
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const page = caseStudies[slug];

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
              { label: "Cases", href: "/cases/fumil" },
              { label: page.client },
            ]}
          />
          <div className="page-hero__panel">
            <div className="page-hero__content">
              <p className="eyebrow">{page.eyebrow}</p>
              <h1>{page.title}</h1>
              <p className="page-hero__note">{page.client}</p>
              <p>{page.description}</p>
              <div className="page-hero__actions">
                <WhatsAppLink className="button button--primary button--large">
                  Quero discutir um projeto parecido
                </WhatsAppLink>
              </div>
            </div>

            <div className="media-card__frame" style={{ aspectRatio: "16 / 10" }}>
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
          <StatGrid items={page.statItems} />
        </div>
      </section>

      <section className="section section--surface">
        <div className="section__inner">
          <SectionIntro
            eyebrow="Contexto"
            title="Da organizacao do funil ate a entrega de ativos"
            description="O case foi reorganizado para ficar mais legivel e mais facil de manter, preservando os resultados e a narrativa principal da pagina original."
          />
          <FeatureGrid items={page.context} />
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionIntro
            eyebrow="Entregas"
            title="A combinacao de estrategias que destravou o crescimento"
            description="Abaixo, os blocos centrais da operacao implementada para a Fumil."
          />
          <FeatureGrid items={page.deliverables} />
        </div>
      </section>

      <section className="section section--surface">
        <div className="section__inner">
          <SectionIntro
            eyebrow="Midias e ativos"
            title="Amostra do material produzido"
            description="Mantivemos a vitrine visual do case com os criativos e capturas mais representativos da operacao."
          />
          <MediaGrid items={page.media} />
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner">
          <SectionIntro
            align="center"
            eyebrow="Resultados"
            title="Os numeros que justificam a estrategia"
            description="Esta secao traduz as metas e ganhos destacados na pagina original do case."
          />
          <StatGrid items={page.resultItems} />
        </div>
      </section>

      <section className="section section--accent">
        <div className="section__inner cta-band">
          <div>
            <p className="eyebrow">Vamos conversar</p>
            <h2>Quer uma operacao parecida para a sua empresa?</h2>
            <p>
              A nova versao do site foi desenhada justamente para facilitar este
              primeiro contato.
            </p>
          </div>
          <WhatsAppLink className="button button--primary button--large">
            Abrir conversa
          </WhatsAppLink>
        </div>
      </section>

      <Schema
        id="case-breadcrumb-schema"
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Cases", path: "/cases/fumil" },
          { name: page.client, path: `/cases/${page.slug}` },
        ])}
      />
      <Schema
        id="case-creativework-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: page.title,
          description: page.metaDescription,
          about: page.client,
          creator: {
            "@type": "Organization",
            name: "Agencia VFX",
          },
          image: `${"https://agenciavfx.com.br"}${page.heroImage.image}`,
          url: `https://agenciavfx.com.br/cases/${page.slug}`,
        }}
      />
    </main>
  );
}
