import { Schema } from "@/components/schema";
import { Breadcrumbs, BulletList } from "@/components/ui";
import { privacyPolicySections } from "@/lib/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politica de Privacidade",
  description:
    "Saiba como a Agencia VFX trata dados pessoais, informacoes de contato e dados tecnicos basicos nesta nova versao do site.",
  path: "/politica-de-privacidade",
});

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section__inner">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Politica de Privacidade" },
            ]}
          />
          <div className="page-hero__panel">
            <div className="page-hero__content">
              <p className="eyebrow">Ultima atualizacao: 2 de abril de 2026</p>
              <h1>Politica de Privacidade</h1>
              <p className="page-hero__note">
                Esta pagina substitui a versao antiga do WordPress com a mesma
                intencao: deixar claro como a Agencia VFX trata dados e
                informacoes de contato.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner policy-stack">
          {privacyPolicySections.map((section) => (
            <article className="policy-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {"bullets" in section && section.bullets ? (
                <BulletList items={section.bullets} />
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <Schema
        id="privacy-breadcrumb-schema"
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Politica de Privacidade", path: "/politica-de-privacidade" },
        ])}
      />
    </main>
  );
}
