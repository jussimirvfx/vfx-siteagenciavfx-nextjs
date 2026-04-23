import { Schema } from "@/components/schema";
import { Breadcrumbs, BulletList } from "@/components/ui";
import { termsOfServiceSections } from "@/lib/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Termos de Servico",
  description:
    "Condicoes gerais que regem a contratacao e o uso dos servicos prestados pela Agencia VFX, incluindo responsabilidades, prazos, pagamentos e propriedade intelectual.",
  path: "/termos-de-servico",
});

export default function TermsOfServicePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section__inner">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Termos de Servico" },
            ]}
          />
          <div className="page-hero__panel">
            <div className="page-hero__content">
              <p className="eyebrow">Ultima atualizacao: 23 de abril de 2026</p>
              <h1>Termos de Servico</h1>
              <p className="page-hero__note">
                Esta pagina descreve as condicoes gerais que regem a contratacao
                e o uso dos servicos prestados pela Agencia VFX.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner policy-stack">
          {termsOfServiceSections.map((section) => (
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
        id="terms-breadcrumb-schema"
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Termos de Servico", path: "/termos-de-servico" },
        ])}
      />
    </main>
  );
}
