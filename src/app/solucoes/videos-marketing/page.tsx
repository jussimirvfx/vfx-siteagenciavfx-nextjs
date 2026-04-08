import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { Schema } from "@/components/schema";
import { FaqList } from "@/components/ui";
import { VideoDialog } from "@/components/video-dialog";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vídeos Marketing para Empresas | Agência VFX",
  description:
    "Vídeos profissionais que apresentam sua empresa, explicam sua oferta e convencem seus clientes a comprar. Mais de 3700 empresas já usam vídeos para vender mais.",
  path: "/solucoes/videos-marketing",
  image: "/assets/reference/portfolio-2.jpg",
});

const breadcrumbItems = [
  { name: "Início", path: "/" },
  { name: "Vídeos Marketing", path: "/solucoes/videos-marketing" },
];

const painPoints = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="14" />
        <path d="M16 10v7" />
        <circle cx="16" cy="22" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Seu cliente não entende o que você vende",
    description:
      "Você sabe que seu produto é ótimo, mas na hora de explicar, as pessoas não entendem o valor. Isso faz você perder vendas todos os dias.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="26" height="20" rx="3" />
        <path d="M3 12h26" />
        <circle cx="8" cy="9" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="9" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Seu site não convence ninguém",
    description:
      "As pessoas entram, olham e saem. Sem um vídeo que prenda a atenção e mostre o que você faz, seu site é só mais um entre milhares.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v10l6 4" />
        <circle cx="16" cy="16" r="13" />
      </svg>
    ),
    title: "Você gasta tempo explicando a mesma coisa",
    description:
      "Toda reunião começa do zero. Você repete o mesmo discurso, gasta energia e tempo com pessoas que ainda não sabem se precisam de você.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28l6-6" />
        <path d="M28 4L18 14" />
        <circle cx="8" cy="24" r="4" />
        <circle cx="24" cy="8" r="4" />
        <path d="M12 22L20 12" strokeDasharray="2 3" />
      </svg>
    ),
    title: "Seus concorrentes já estão usando vídeo",
    description:
      "Enquanto você ainda pensa, seus concorrentes já estão aparecendo com vídeos profissionais e conquistando os clientes que poderiam ser seus.",
  },
];

const videoTypes = [
  {
    title: "Vídeo de Apresentação da Empresa",
    description:
      "Mostre quem você é, o que faz e por que seu cliente deveria confiar em você. Tudo isso em menos de 2 minutos, com clareza e profissionalismo.",
    image: "/assets/home/gramas.jpg",
    videoUrl: "https://www.youtube.com/embed/nJYJCXuY8pQ?autoplay=1&rel=0",
  },
  {
    title: "Vídeo para Redes Sociais e Anúncios",
    description:
      "Vídeos curtos e impactantes, feitos para chamar a atenção do seu cliente no celular e fazer ele parar de rolar a tela para prestar atenção em você.",
    image: "/assets/home/naipi.jpg",
    videoUrl: "https://www.youtube.com/embed/j95bCedRpJ0?autoplay=1&rel=0",
  },
  {
    title: "Vídeo Explicativo do Produto ou Serviço",
    description:
      "Transforme uma explicação complicada em algo simples de entender. Seu cliente vai finalmente saber o que você faz e por que precisa de você.",
    image: "/assets/home/topos.jpg",
    videoUrl: "https://www.youtube.com/embed/JBsDrCgRegw?autoplay=1&rel=0",
  },
  {
    title: "Vídeo para Página de Vendas",
    description:
      "Um vídeo estratégico que funciona como seu melhor vendedor: apresenta, convence e leva o cliente a tomar a decisão de comprar.",
    image: "/assets/home/industria.jpg",
    videoUrl: "https://www.youtube.com/embed/u8Nn0IDvwfg?autoplay=1&rel=0",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Entendemos o seu negócio",
    description:
      "Primeiro, nós sentamos com você para entender sua empresa, seu cliente e o que você precisa vender. Sem complicação, só uma conversa.",
  },
  {
    number: "02",
    title: "Criamos o roteiro perfeito",
    description:
      "Nossa equipe escreve um texto pensado para convencer o seu cliente. Você aprova antes de começarmos qualquer produção.",
  },
  {
    number: "03",
    title: "Produzimos o vídeo",
    description:
      "Com o roteiro aprovado, nossa equipe de ilustradores, animadores e editores cria um vídeo profissional que representa a qualidade da sua empresa.",
  },
  {
    number: "04",
    title: "Você começa a vender mais",
    description:
      "Entregamos o vídeo pronto para usar no seu site, redes sociais, anúncios e apresentações. E orientamos você sobre como usar para ter o máximo de resultado.",
  },
];

const results = [
  { value: "3.763+", label: "empresas já atendidas" },
  { value: "11+", label: "anos de experiência" },
  { value: "96%", label: "de aprovação dos clientes" },
  { value: "2x", label: "mais conversões com vídeo" },
];

const faqs = [
  {
    question: "Quanto custa um vídeo profissional?",
    answer:
      "O investimento varia de acordo com o tipo de vídeo, duração e complexidade. Temos opções para diferentes orçamentos. O melhor caminho é agendar uma conversa para entendermos o que você precisa e apresentarmos uma proposta personalizada.",
  },
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer:
      "Em média, um vídeo fica pronto entre 15 e 30 dias úteis após a aprovação do roteiro. O prazo exato depende da complexidade do projeto. Você acompanha cada etapa com o seu gerente de projeto.",
  },
  {
    question: "Eu preciso aparecer no vídeo?",
    answer:
      "Não necessariamente. Trabalhamos com vídeos em animação, onde não é preciso gravar ninguém. Essa é uma das nossas especialidades e funciona muito bem para explicar produtos e serviços de forma clara e atraente.",
  },
  {
    question: "Como o vídeo vai me ajudar a vender mais?",
    answer:
      "Um vídeo profissional apresenta sua empresa e sua oferta da melhor forma possível. Ele substitui aquela explicação longa por algo rápido e convincente. Você pode usar no site, nos anúncios, no WhatsApp e em reuniões. É como ter seu melhor vendedor trabalhando 24 horas por dia.",
  },
  {
    question: "Vocês fazem só o vídeo ou ajudam a divulgar também?",
    answer:
      "Além dos vídeos, oferecemos campanhas de anúncios, páginas de venda e automação de WhatsApp. Ou seja, podemos cuidar de toda a estratégia para que o vídeo chegue até o cliente certo e gere vendas de verdade.",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer:
      "Você participa de cada etapa do processo e aprova o roteiro antes da produção começar. Durante a animação, fazemos rodadas de revisão para garantir que o resultado final esteja exatamente como você precisa.",
  },
];

const testimonials = [
  {
    quote:
      "Nós fomos de 15 novos clientes por mês para mais de 300 com a ajuda de um vídeo animado criado pela equipe da VFX.",
    name: "Diogo Sampaio",
    role: "Fundador da Startup AvalieJá",
    image:
      "/assets/reference/diogo-sampaio-case-da-vfx-produtora-de-videos-institucionais-animados-03-1.webp",
  },
  {
    quote:
      "Já fizemos mais de 7 vídeos com a VFX e o resultado sempre foi ótimo. A comunicação com eles é 100%!",
    name: "Rodrigo Schreiner",
    role: "Kurier Sistemas",
    image: "/assets/reference/rodrigo-kurier-1.webp",
  },
  {
    quote:
      "Encontrei na VFX uma equipe organizada, com metodologia de trabalho e muito conhecimento. Os resultados que tivemos com o vídeo falam por si só!",
    name: "Vinícius Rockenbach",
    role: "Fundador, Converte",
    image: "/assets/reference/vinicius-rockenbach.webp",
  },
];

export default function VideosMarketingPage() {
  return (
    <main className="sv">
      <Schema
        id="schema-breadcrumb-videos"
        data={buildBreadcrumbSchema(breadcrumbItems)}
      />
      <Schema
        id="schema-service-videos"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Vídeos Marketing para Empresas",
          description:
            "Produção de vídeos profissionais para empresas que precisam vender mais: vídeos institucionais, explicativos, para anúncios e redes sociais.",
          provider: {
            "@type": "Organization",
            name: "VFX Produtora de Vídeos",
          },
          areaServed: "BR",
        }}
      />

      {/* ── Hero ── */}
      <section className="sv-hero">
        <div className="sv-hero__bg">
          <Image
            alt="Produção de vídeo profissional na Agência VFX"
            fill
            priority
            sizes="100vw"
            src="/assets/reference/portfolio-2.jpg"
          />
        </div>
        <div className="sv-hero__overlay" />
        <div className="section__inner sv-hero__inner">
          <Reveal as="h1" variant="clip-up">
            Imagine seu melhor discurso de vendas sendo apresentado para milhares
            de pessoas, todos os dias, sem você precisar estar lá
          </Reveal>
          <Reveal as="p" className="sv-hero__sub" delay={200} variant="fade">
            Um vídeo profissional faz exatamente isso. Ele explica, convence e
            vende por você enquanto você cuida do que realmente importa: sua
            empresa.
          </Reveal>
          <Reveal delay={300} variant="fade-up">
            <WhatsAppLink
              className="sv-hero__cta"
              message="Olá, tenho interesse em saber mais sobre vídeos marketing para minha empresa."
            >
              Quero vender mais com vídeo
            </WhatsAppLink>
          </Reveal>
        </div>
      </section>

      {/* ── Pain points ── */}
      <section className="sv-pain">
        <div className="section__inner">
          <Reveal as="div" className="sv-pain__header" variant="fade-up">
            <p className="sv-label">Você se identifica?</p>
            <h2>
              Se você sente que está perdendo vendas por não conseguir mostrar o
              valor do que faz, você não está sozinho
            </h2>
          </Reveal>
          <div className="sv-pain__grid">
            {painPoints.map((item, index) => (
              <Reveal
                as="article"
                className="sv-pain__card"
                delay={index * 100}
                key={item.title}
                variant="fade-up"
              >
                <div className="sv-pain__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution band ── */}
      <section className="sv-solution">
        <div className="sv-solution__bg">
          <video
            aria-hidden="true"
            autoPlay
            className="sv-solution__video"
            loop
            muted
            playsInline
            poster="/assets/reference/fundobg-agencia5.jpg"
            preload="metadata"
          >
            <source src="/assets/reference/reveal-loop.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="sv-solution__overlay" />
        <div className="section__inner sv-solution__inner">
          <Reveal as="h2" variant="clip-up">
            A boa notícia é que existe uma solução simples e comprovada
          </Reveal>
          <Reveal as="p" delay={100} variant="fade">
            Um vídeo profissional apresenta tudo o que sua empresa faz da melhor
            forma possível. Ele substitui horas de explicação por minutos de
            clareza. Transforma curiosos em clientes. E funciona 24 horas por
            dia, 7 dias por semana, sem pedir férias.
          </Reveal>
          <Reveal delay={200} variant="fade-up">
            <VideoDialog
              buttonLabel="Assistir apresentação da VFX"
              className="sv-solution__play"
              embedUrl="https://www.youtube.com/embed/GbF3SWzioAQ?autoplay=1&rel=0"
              title="Apresentação Agência VFX"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M4 2l10 6-10 6V2z" />
              </svg>
              Assistir apresentação
            </VideoDialog>
          </Reveal>
        </div>
      </section>

      {/* ── Video types ── */}
      <section className="sv-types">
        <div className="section__inner">
          <Reveal as="div" className="sv-types__header" variant="fade-up">
            <p className="sv-label">Tipos de vídeo</p>
            <h2>
              Qual tipo de vídeo a sua empresa precisa agora?
            </h2>
            <p>
              Cada empresa tem uma necessidade diferente. Veja qual tipo de vídeo
              faz mais sentido para o momento do seu negócio.
            </p>
          </Reveal>
          <div className="sv-types__grid">
            {videoTypes.map((item, index) => (
              <Reveal
                as="article"
                className="sv-types__card"
                delay={index * 100}
                key={item.title}
                variant="fade-up"
              >
                <div className="sv-types__card-media">
                  <Image
                    alt={item.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    src={item.image}
                  />
                  <VideoDialog
                    buttonLabel={`Assistir ${item.title}`}
                    className="sv-types__card-play"
                    embedUrl={item.videoUrl}
                    title={item.title}
                  >
                    <span className="sv-types__play-icon" aria-hidden="true" />
                  </VideoDialog>
                </div>
                <div className="sv-types__card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="sv-process">
        <div className="section__inner">
          <Reveal as="div" className="sv-process__header" variant="fade-up">
            <p className="sv-label">Como funciona</p>
            <h2>
              Do primeiro contato ao vídeo pronto: simples, transparente e sem
              surpresas
            </h2>
          </Reveal>
          <div className="sv-process__grid">
            {processSteps.map((step, index) => (
              <Reveal
                as="article"
                className="sv-process__step"
                delay={index * 120}
                key={step.number}
                variant="fade-up"
              >
                <span className="sv-process__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="sv-results">
        <div className="section__inner sv-results__inner">
          <Reveal as="div" className="sv-results__copy" variant="fade-up">
            <p className="sv-label">Resultados reais</p>
            <h2>
              Milhares de empresários já usaram vídeo para transformar a forma
              como vendem
            </h2>
            <p>
              Nos últimos 11 anos, ajudamos mais de 3.700 empresas a apresentar
              seus produtos e serviços com clareza, profissionalismo e
              resultado.
            </p>
          </Reveal>
          <div className="sv-results__stats">
            {results.map((item, index) => (
              <Reveal
                as="div"
                className="sv-results__stat"
                delay={index * 80}
                key={item.label}
                variant="fade-up"
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="sv-testimonials">
        <div className="section__inner">
          <Reveal as="div" className="sv-testimonials__header" variant="fade-up">
            <p className="sv-label">O que dizem nossos clientes</p>
            <h2>Empresários como você que decidiram agir</h2>
          </Reveal>
          <div className="sv-testimonials__grid">
            {testimonials.map((item, index) => (
              <Reveal
                as="article"
                className="sv-testimonials__card"
                delay={index * 100}
                key={item.name}
                variant="fade-up"
              >
                <blockquote>
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
                <div className="sv-testimonials__author">
                  <div className="sv-testimonials__avatar">
                    <Image
                      alt={item.name}
                      fill
                      sizes="56px"
                      src={item.image}
                    />
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sv-faq">
        <div className="section__inner sv-faq__inner">
          <Reveal as="div" className="sv-faq__header" variant="fade-up">
            <p className="sv-label">Dúvidas frequentes</p>
            <h2>Perguntas que todo empresário faz antes de começar</h2>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="sv-cta">
        <div className="section__inner sv-cta__inner">
          <Reveal as="h2" variant="clip-up">
            Sua empresa merece ser apresentada da melhor forma possível
          </Reveal>
          <Reveal as="p" delay={100} variant="fade">
            Agende uma conversa com nossa equipe. Vamos entender o seu negócio e
            mostrar como um vídeo profissional pode ajudar você a vender mais.
            Sem compromisso.
          </Reveal>
          <Reveal delay={200} variant="fade-up">
            <WhatsAppLink
              className="sv-cta__button"
              message="Olá, tenho interesse em saber mais sobre vídeos marketing para minha empresa."
            >
              Agendar uma conversa agora
            </WhatsAppLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
