import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="section__inner">
          <div className="page-hero__panel">
            <div className="page-hero__content">
              <p className="eyebrow">404</p>
              <h1>Pagina nao encontrada</h1>
              <p className="page-hero__note">
                Esta rota nao existe na nova estrutura do site.
              </p>
              <p>
                Se voce estava procurando uma pagina antiga do WordPress,
                provavelmente ela foi consolidada, redirecionada ou removida.
              </p>
              <div className="page-hero__actions">
                <Link className="button button--primary button--large" href="/">
                  Voltar para o inicio
                </Link>
                <Link
                  className="button button--secondary button--large"
                  href="/contato"
                >
                  Ir para contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
