import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { Schema } from "@/components/schema";
import { FaqList } from "@/components/ui";
import { VideoDialog } from "@/components/video-dialog";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tráfego Pago para Pequenas Empresas | Agência VFX",
  description:
    "Campanhas de anúncios no Google e redes sociais que trazem clientes prontos para comprar. Sem complicação, sem desperdício. Resultados reais para pequenas empresas.",
  path: "/solucoes/trafego-pago",
});

const breadcrumbItems = [
  { name: "Início", path: "/" },
  { name: "Tráfego Pago", path: "/solucoes/trafego-pago" },
];

const painPoints = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 28V18" />
        <path d="M14 28V12" />
        <path d="M22 28V8" />
        <path d="M6 18l8-6 8-4" />
        <circle cx="28" cy="6" r="3" fill="none" />
      </svg>
    ),
    title: "Você depende de indicação para vender",
    description:
      "Quando as indicações param, as vendas param junto. Sua empresa fica refém do boca a boca e você nunca sabe quantos clientes vai ter no próximo mês.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="13" />
        <path d="M16 10v6l4 4" />
      </svg>
    ),
    title: "Você já tentou anunciar e só perdeu dinheiro",
    description:
      "Impulsionou posts, clicou em \"promover\" no Instagram e o resultado foi zero. Sem estratégia, anunciar é como jogar dinheiro fora.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="26" height="20" rx="3" />
        <path d="M3 12h26" />
        <path d="M10 18h5" />
        <path d="M10 22h8" />
      </svg>
    ),
    title: "Seus concorrentes aparecem e você não",
    description:
      "Quando alguém pesquisa no Google o que você vende, quem aparece é o seu concorrente. Ele leva o cliente que deveria ser seu, simplesmente porque investiu em aparecer.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16c0-6.627 5.373-12 12-12s12 5.373 12 12" />
        <path d="M16 4v4" />
        <path d="M28 16h-4" />
        <path d="M16 16l-5 5" />
        <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
        <path d="M8 28h16" />
      </svg>
    ),
    title: "Você não sabe se o marketing está dando resultado",
    description:
      "Gasta com agência, com posts, com arte, mas não faz ideia de quantos clientes vieram de cada ação. Sem números claros, qualquer investimento vira adivinhação.",
  },
];

const serviceTypes = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="16" />
        <path d="M20 12v3" />
        <path d="M20 25v3" />
        <path d="M12 20h3" />
        <path d="M25 20h3" />
        <circle cx="20" cy="20" r="5" />
      </svg>
    ),
    title: "Google Ads",
    subtitle: "Apareça para quem está procurando",
    description:
      "Quando alguém pesquisa no Google exatamente o que você vende, seu anúncio aparece ali, na hora certa. Você só paga quando a pessoa clica. É o tipo de anúncio mais direto que existe: o cliente já quer comprar, só precisa encontrar você.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="4" width="24" height="32" rx="4" />
        <circle cx="20" cy="30" r="2" />
        <path d="M14 14h12" />
        <path d="M14 18h8" />
      </svg>
    ),
    title: "Meta Ads",
    subtitle: "Instagram e Facebook trabalhando por você",
    description:
      "Seus anúncios aparecem no feed, nos stories e no reels das pessoas certas — aquelas que têm o perfil exato do seu cliente ideal. Mesmo que elas ainda não conheçam sua empresa, vamos despertar o interesse e transformar atenção em contato.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6l14 8v12l-14 8-14-8V14z" />
        <path d="M20 22V6" />
        <path d="M20 22l14-8" />
        <path d="M20 22L6 14" />
      </svg>
    ),
    title: "Remarketing",
    subtitle: "Traga de volta quem já demonstrou interesse",
    description:
      "Sabe quando você visita um site e depois o anúncio dele aparece em todo lugar? É exatamente isso. Lembramos o seu cliente que ele estava interessado no que você oferece. Muitas vendas acontecem na segunda ou terceira vez que a pessoa vê seu anúncio.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="32" height="24" rx="3" />
        <polygon points="17,15 17,25 26,20" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "YouTube Ads",
    subtitle: "Vídeos que vendem antes do conteúdo começar",
    description:
      "Seu anúncio em vídeo aparece antes dos vídeos que seu público assiste no YouTube. Com a segmentação certa, você mostra sua empresa para milhares de potenciais clientes por um custo muito menor do que imagina.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Analisamos seu negócio",
    description:
      "Antes de qualquer coisa, entendemos o que você vende, quem é seu cliente e quanto você pode investir. Tudo em uma conversa simples, sem jargões técnicos.",
  },
  {
    number: "02",
    title: "Montamos a estratégia",
    description:
      "Definimos onde anunciar (Google, Instagram, Facebook, YouTube), como falar com seu público e qual o melhor caminho para gerar resultados com o seu orçamento.",
  },
  {
    number: "03",
    title: "Criamos e publicamos as campanhas",
    description:
      "Escrevemos os textos, criamos os anúncios e configuramos tudo de forma profissional. Você aprova antes de ir ao ar. Sem surpresas.",
  },
  {
    number: "04",
    title: "Otimizamos todos os dias",
    description:
      "Acompanhamos os resultados diariamente e ajustamos o que for necessário para cada real investido trazer o máximo de retorno possível. Você recebe relatórios claros.",
  },
];

const results = [
  { value: "R$ 8.2 Mi+", label: "em tráfego gerenciado em campanhas de sucesso para empresas em todo o Brasil" },
  { value: "12 anos", label: "de experiência no mercado" },
  { value: "3.763+", label: "clientes atendidos" },
];

const benefits = [
  {
    title: "Você escolhe quanto quer investir",
    description:
      "Não existe valor mínimo exigido pelas plataformas. Você define o orçamento que cabe no seu bolso e nós extraímos o máximo desse valor. Pode começar com pouco e aumentar conforme os resultados aparecem.",
  },
  {
    title: "Resultados que você consegue medir",
    description:
      "Nada de \"acho que está funcionando\". Você vai saber exatamente quantas pessoas viram seu anúncio, quantas clicaram, quantas entraram em contato e quanto custou cada cliente novo.",
  },
  {
    title: "Seus anúncios aparecem para as pessoas certas",
    description:
      "Segmentamos por localização, idade, interesses e até pelo que a pessoa pesquisou no Google. Seu dinheiro não é gasto com quem nunca vai comprar de você.",
  },
  {
    title: "Você para de depender de indicação",
    description:
      "Com tráfego pago, você tem um fluxo previsível de novos clientes todos os meses. Sua empresa não fica mais à mercê da sorte ou do boca a boca para crescer.",
  },
  {
    title: "Funciona para qualquer tipo de negócio",
    description:
      "Clínicas, escritórios, lojas, prestadores de serviço, indústrias — não importa o segmento. Se tem alguém procurando o que você vende, a gente faz você aparecer.",
  },
  {
    title: "Relatórios que você entende de verdade",
    description:
      "Sem gráficos confusos ou métricas que ninguém entende. Você recebe um relatório claro mostrando quanto investiu, quantos clientes vieram e quanto cada um custou.",
  },
];

const faqs = [
  {
    question: "Quanto preciso investir em anúncios por mês?",
    answer:
      "O investimento varia conforme o mercado, a concorrência e os objetivos da sua empresa. Na nossa reunião, vamos analisar seu cenário e sugerir o investimento ideal para gerar retorno real dentro da sua realidade.",
  },
  {
    question: "Em quanto tempo vou começar a ver resultados?",
    answer:
      "Diferente do marketing orgânico, com tráfego pago os resultados tendem a aparecer mais rápido. O prazo exato depende do seu mercado, da concorrência e do investimento, mas conforme acumulamos dados, otimizamos continuamente para melhorar os resultados.",
  },
  {
    question: "Vocês cuidam de tudo ou eu preciso fazer alguma coisa?",
    answer:
      "Nós cuidamos de toda a parte técnica: criação dos anúncios, segmentação do público, configuração das campanhas e otimização diária. O que precisamos de você é responder rápido os contatos que chegarem — afinal, de nada adianta gerar clientes se eles ficam sem resposta.",
  },
  {
    question: "Qual a diferença entre tráfego pago e impulsionar posts?",
    answer:
      "Impulsionar um post é a forma mais básica e limitada de anunciar. Com tráfego pago profissional, usamos segmentações avançadas, públicos personalizados, remarketing e estratégias que realmente geram vendas, não apenas curtidas. É como comparar uma bicicleta com um carro de corrida.",
  },
  {
    question: "Eu vou saber para onde está indo o meu dinheiro?",
    answer:
      "Sim. Você recebe relatórios claros e objetivos mostrando quanto foi investido, quantas pessoas viram seus anúncios, quantas clicaram, quantas entraram em contato e quanto custou cada resultado. Total transparência, sempre.",
  },
  {
    question: "Preciso ter um site para anunciar?",
    answer:
      "Ter um site ou landing page ajuda muito, porque é para lá que direcionamos as pessoas que clicam no anúncio. Se você ainda não tem, a Agência VFX também cria landing pages otimizadas para conversão. Podemos resolver tudo junto.",
  },
  {
    question: "Funciona para o meu tipo de negócio?",
    answer:
      "Se alguém pesquisa no Google o que você vende, ou se seu público está no Instagram e Facebook, sim — tráfego pago funciona para você. Já atendemos clínicas, escritórios de advocacia, lojas, indústrias, prestadores de serviço e muitos outros segmentos.",
  },
];

const testimonials = [
  {
    quote:
      "Nós fomos de 15 novos clientes por mês para mais de 300 com a ajuda da equipe da VFX. O retorno foi muito acima do que a gente esperava.",
    name: "Diogo Sampaio",
    role: "Fundador da Startup AvalieJá",
    image:
      "/assets/reference/diogo-sampaio-case-da-vfx-produtora-de-videos-institucionais-animados-03-1.webp",
  },
  {
    quote:
      "Já fizemos mais de 7 projetos com a VFX e o resultado sempre foi ótimo. A comunicação com eles é 100%!",
    name: "Rodrigo Schreiner",
    role: "Kurier Sistemas",
    image: "/assets/reference/rodrigo-kurier-1.webp",
  },
  {
    quote:
      "Encontrei na VFX uma equipe organizada, com metodologia de trabalho e muito conhecimento. Os resultados falam por si só!",
    name: "Vinícius Rockenbach",
    role: "Fundador, Converte",
    image: "/assets/reference/vinicius-rockenbach.webp",
  },
];

const portfolioItems = [
  {
    title: "Gramas Santa Maria",
    subtitle: "Vídeo animado para empresa de produtos",
    duration: "1:07",
    image: "/assets/home/gramas.jpg",
    videoUrl: "https://www.youtube.com/embed/nJYJCXuY8pQ?autoplay=1&rel=0",
  },
  {
    title: "Naipi Travel",
    subtitle: "Vídeo para agência de turismo",
    duration: "1:04",
    image: "/assets/home/naipi.jpg",
    videoUrl: "https://www.youtube.com/embed/j95bCedRpJ0?autoplay=1&rel=0",
  },
  {
    title: "Topos Work",
    subtitle: "Vídeo marketing para plataforma SAAS",
    duration: "1:19",
    image: "/assets/home/topos.jpg",
    videoUrl: "https://www.youtube.com/embed/JBsDrCgRegw?autoplay=1&rel=0",
  },
  {
    title: "Indústria Brasileira de Serviços",
    subtitle: "Vídeo para empresa de serviços",
    duration: "0:47",
    image: "/assets/home/industria.jpg",
    videoUrl: "https://www.youtube.com/embed/u8Nn0IDvwfg?autoplay=1&rel=0",
  },
  {
    title: "Lab2u",
    subtitle: "Vídeo para plataforma de marketing digital",
    duration: "1:06",
    image: "/assets/home/lab2u.jpg",
    videoUrl: "https://www.youtube.com/embed/dBKeFpV80jU?autoplay=1&rel=0",
  },
  {
    title: "Briw Telecom",
    subtitle: "Vídeo animado para provedor de internet",
    duration: "0:45",
    image: "/assets/home/briw.jpg",
    videoUrl: "https://www.youtube.com/embed/D8jBAmz7qrA?autoplay=1&rel=0",
  },
];

export default function TrafegoPagoPage() {
  return (
    <main className="sv">
      <Schema
        id="schema-breadcrumb-trafego"
        data={buildBreadcrumbSchema(breadcrumbItems)}
      />
      <Schema
        id="schema-service-trafego"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tráfego Pago para Pequenas Empresas",
          description:
            "Gestão profissional de campanhas de anúncios no Google Ads, Meta Ads (Instagram e Facebook), YouTube e remarketing para pequenas empresas que precisam de clientes todos os dias.",
          provider: {
            "@type": "Organization",
            name: "Agência VFX",
          },
          areaServed: "BR",
        }}
      />

      {/* ── Hero ── */}
      <section className="sv-hero">
        <div className="sv-hero__bg">
          <video
            aria-hidden="true"
            autoPlay
            className="sv-hero__bg-video"
            loop
            muted
            playsInline
            poster="/assets/reference/trafego-4.jpg"
            preload="metadata"
          >
            <source src="/assets/reference/home-hero-loop.mp4" type="video/mp4" />
          </video>
          <Image
            alt="Gestão de tráfego pago na Agência VFX"
            fill
            priority
            sizes="100vw"
            src="/assets/reference/trafego-4.jpg"
          />
        </div>
        <div className="sv-hero__overlay" />
        <div className="section__inner sv-hero__inner">
          <Reveal as="span" className="sv-hero__eyebrow" variant="fade">
            Tráfego Pago
          </Reveal>
          <Reveal as="h1" variant="clip-up" delay={100}>
            E se todo dia aparecessem clientes novos procurando exatamente o que
            você vende?
          </Reveal>
          <Reveal as="p" className="sv-hero__sub" delay={200} variant="fade">
            Com tráfego pago, sua empresa aparece para as pessoas certas, na hora
            certa. Sem depender de indicação, sem jogar dinheiro fora. Só
            resultados que você consegue medir.
          </Reveal>
          <Reveal delay={300} variant="fade-up">
            <WhatsAppLink
              className="sv-hero__cta"
              message="Olá, tenho interesse em saber mais sobre tráfego pago para minha empresa."
            >
              Quero atrair mais clientes agora
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
              Se você sente que está invisível na internet enquanto seus
              concorrentes levam todos os clientes, isso tem solução
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
        <div className="sv-solution__overlay" />
        <div className="section__inner sv-solution__inner">
          <Reveal as="h2" variant="clip-up">
            A verdade é simples: quem aparece, vende. Quem não aparece, perde
            clientes todos os dias.
          </Reveal>
          <Reveal as="p" delay={100} variant="fade">
            Tráfego pago é a forma mais rápida e previsível de colocar sua
            empresa na frente de quem quer comprar. Não é sorte, não é mágica. É
            estratégia, dados e ajuste constante para cada centavo trabalhar a
            seu favor.
          </Reveal>
        </div>
      </section>

      {/* ── Portfolio — vídeos para anúncios ── */}
      <section className="tp-portfolio">
        <div className="section__inner">
          <Reveal as="div" className="tp-portfolio__header" variant="fade-up">
            <p className="sv-label">Vídeo + tráfego pago</p>
            <h2>
              Seu anúncio aparece, mas o cliente não compra? O problema pode
              ser a mensagem.
            </h2>
            <p>
              Um vídeo profissional faz o cliente entender o que você vende em
              segundos — sem precisar ler, sem precisar pensar. Ele para, assiste
              e já chega pronto para comprar. É por isso que nossos clientes que
              combinam tráfego pago com vídeo vendem mais: o anúncio atrai, o
              vídeo convence.
            </p>
          </Reveal>
          <div className="tp-portfolio__grid">
            {portfolioItems.slice(0, 4).map((item, index) => (
              <Reveal
                as="article"
                className="tp-portfolio__card"
                delay={index * 80}
                key={item.title}
                variant="fade-up"
              >
                <div className="tp-portfolio__media">
                  <Image
                    alt={item.title}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
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
                <h3>{item.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service types ── */}
      <section className="sv-pain">
        <div className="section__inner">
          <Reveal as="div" className="sv-pain__header" variant="fade-up">
            <p className="sv-label">Onde você vai aparecer</p>
            <h2>Cada plataforma é uma porta de entrada para novos clientes</h2>
            <p>
              Escolhemos os canais certos para o seu negócio. Não é sobre estar
              em todo lugar — é sobre estar onde seu cliente está.
            </p>
          </Reveal>
          <div className="tp-services__grid">
            {serviceTypes.map((item, index) => (
              <Reveal
                as="article"
                className="tp-services__card"
                delay={index * 100}
                key={item.title}
                variant="fade-up"
              >
                <div className="tp-services__icon">{item.icon}</div>
                <div className="tp-services__copy">
                  <h3>{item.title}</h3>
                  <span className="tp-services__subtitle">{item.subtitle}</span>
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
              Do primeiro contato aos primeiros clientes: simples, transparente e
              sem enrolação
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

      {/* ── Benefits ── */}
      <section className="tp-benefits">
        <div className="section__inner">
          <Reveal as="div" className="tp-benefits__header" variant="fade-up">
            <p className="sv-label">Por que tráfego pago</p>
            <h2>
              Vantagens que fazem donos de pequenas empresas escolherem investir
              em tráfego pago
            </h2>
          </Reveal>
          <div className="tp-benefits__grid">
            {benefits.map((item, index) => (
              <Reveal
                as="article"
                className="tp-benefits__card"
                delay={index * 80}
                key={item.title}
                variant="fade-up"
              >
                <div className="tp-benefits__check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="tp-results">
        <div className="section__inner tp-results__inner">
          <Reveal as="div" className="tp-results__hero" variant="fade-up">
            <p className="sv-label">Resultados reais</p>
            <strong className="tp-results__value">R$ 8.2 Milhões+</strong>
            <p className="tp-results__desc">
              Em tráfego gerenciado em campanhas de sucesso para empresas em
              todo o Brasil
            </p>
          </Reveal>
          <div className="tp-results__side">
            <Reveal as="div" className="tp-results__stat" delay={100} variant="fade-up">
              <strong>12 anos</strong>
              <span>de experiência no mercado</span>
            </Reveal>
            <Reveal as="div" className="tp-results__stat" delay={200} variant="fade-up">
              <strong>3.763+</strong>
              <span>clientes atendidos</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="sv-testimonials">
        <div className="section__inner">
          <Reveal
            as="div"
            className="sv-testimonials__header"
            variant="fade-up"
          >
            <p className="sv-label">O que dizem nossos clientes</p>
            <h2>Empresários que decidiram parar de esperar e agir</h2>
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
            <h2>
              Perguntas que todo dono de empresa faz antes de investir em
              tráfego pago
            </h2>
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
            Seus clientes estão pesquisando agora. A pergunta é: eles vão
            encontrar você ou seu concorrente?
          </Reveal>
          <Reveal as="p" delay={100} variant="fade">
            Agende uma conversa com nossa equipe. Vamos analisar seu negócio e
            mostrar como o tráfego pago pode trazer clientes novos todos os
            meses. Sem compromisso, sem enrolação.
          </Reveal>
          <Reveal delay={200} variant="fade-up">
            <WhatsAppLink
              className="sv-cta__button"
              message="Olá, tenho interesse em saber mais sobre tráfego pago para minha empresa."
            >
              Quero atrair mais clientes
            </WhatsAppLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
