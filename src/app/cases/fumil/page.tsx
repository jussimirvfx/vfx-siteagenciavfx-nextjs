import type { Metadata } from "next";
import Image from "next/image";

import { Carousel, GalleryCarousel } from "@/components/carousel";
import { Schema } from "@/components/schema";
import { VideoDialog } from "@/components/video-dialog";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Estudo de Caso - Fumil | Agência VFX",
  description:
    "Veja como a Fumil acelerou marketing e atendimento com videomarketing, landing page, social media e automação com IA.",
  path: "/cases/fumil",
  image: "/assets/case-fumil/hero-intro.jpeg",
  type: "article",
});

const productImages = [
  { src: "/assets/case-fumil/product-1.jpeg", alt: "Produto Fumil 1" },
  { src: "/assets/case-fumil/product-2.jpg", alt: "Produto Fumil 2" },
  { src: "/assets/case-fumil/product-3.jpeg", alt: "Produto Fumil 3" },
  { src: "/assets/case-fumil/product-4.jpeg", alt: "Produto Fumil 4" },
  { src: "/assets/case-fumil/product-5.jpeg", alt: "Produto Fumil 5" },
  { src: "/assets/case-fumil/product-6.jpeg", alt: "Produto Fumil 6" },
];

const instaImages = [
  { src: "/assets/case-fumil/insta-1.jpeg", alt: "Criativo Instagram Fumil 1" },
  { src: "/assets/case-fumil/insta-2.jpeg", alt: "Criativo Instagram Fumil 2" },
  { src: "/assets/case-fumil/insta-3.jpeg", alt: "Criativo Instagram Fumil 3" },
  { src: "/assets/case-fumil/insta-4.jpeg", alt: "Criativo Instagram Fumil 4" },
  { src: "/assets/case-fumil/insta-5.jpeg", alt: "Criativo Instagram Fumil 5" },
  { src: "/assets/case-fumil/insta-6.jpeg", alt: "Criativo Instagram Fumil 6" },
];

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10">
        <polygon points="23,41 22,46 27,45 42,30 38,26" />
        <line x1="39" y1="33" x2="35" y2="29" />
        <polyline points="23,8 10,8 10,63 54,63 54,8 41,8" />
        <polygon points="36,5 36,1 28,1 28,5 24,5 22,13 42,13 40,5" />
      </svg>
    ),
    label: "Planejamento Estratégico de Marketing Digital e Copywriting",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="bevel" strokeMiterlimit="10">
        <rect x="1" y="1" width="62" height="62" />
        <polygon points="26,21 42,32 26,43" />
      </svg>
    ),
    label: "Videomarketing de Performance",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10">
        <rect x="29" y="13" width="2" height="39" fill="currentColor" stroke="none" />
        <rect x="33" y="13" width="2" height="39" fill="currentColor" stroke="none" />
        <path d="M40.988,23c0,0,0-6-9-6s-8,7-8,7s0,7,8,7c9,0,10.012,6,10.012,7c0,2,0.988,8-10.012,8c-9,0-8.988-4-8.988-5" />
        <path d="M53.92,10.081c12.107,12.105,12.107,31.732,0,43.838c-12.106,12.108-31.734,12.108-43.839,0c-12.107-12.105-12.107-31.732,0-43.838C22.186-2.027,41.813-2.027,53.92,10.081z" />
      </svg>
    ),
    label: "Social Media com Foco em Vendas",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10">
        <rect x="10" y="45" width="12" height="18" />
        <rect x="42" y="18" width="12" height="45" />
        <rect x="26" y="32" width="12" height="31" />
        <line x1="14" y1="38" x2="51" y2="1" />
        <polyline points="40,1 51,1 51,12" strokeLinejoin="bevel" />
      </svg>
    ),
    label: "Campanhas de Tráfego Pago Otimizadas",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="bevel" strokeMiterlimit="10">
        <polygon points="40,1 17,37 31,37 24,63 50,27 36,27" />
      </svg>
    ),
    label: "Automação de Chatbots com IA",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10">
        <rect x="1" y="7" width="62" height="50" />
        <line x1="1" y1="15" x2="63" y2="15" />
        <line x1="10" y1="11" x2="6" y2="11" />
        <line x1="18" y1="11" x2="14" y2="11" />
        <line x1="26" y1="11" x2="22" y2="11" />
        <line x1="6" y1="25" x2="33" y2="25" />
        <line x1="6" y1="33" x2="33" y2="33" />
        <line x1="6" y1="41" x2="33" y2="41" />
        <rect x="38" y="25" width="19" height="16" />
      </svg>
    ),
    label: "Webdesign e Criação de Landing Page",
  },
];

const planningBullets = [
  "Briefing, Acessos e Reuniões Iniciais",
  "Configuração do Painel de Estratégia Digital®",
  "Mapeamento dos Produtos, Serviços e Diferenciais da Empresa",
  "Público Alvo e o Mapeamento de suas Objeções e Dores",
  "Pesquisa e criação dos ICPs (Perfis de Cliente Ideal)",
  "Pesquisa de Concorrência",
  "Identidade Visual do Projeto e elaboração do Brand Board",
  "Definição das Metas e Objetivos",
];

const socialBullets = [
  "Criação de conteúdo com foco em vendas",
  "Copywriting persuasivo com metodologias AIDA e 3W1H",
  "Visual consistente e profissional",
  "Análise de dados e adaptação contínua",
  "Otimização para descoberta e atração orgânica",
];

const landingBullets = [
  "Foco em vendas",
  "Design profissional",
  "Vídeo",
  "Copywriting persuasivo",
  "Chamada para ação clara",
  "Chatbot integrado",
  "Responsivo a diferentes tamanhos de tela",
];

const videoBullets = [
  "Roteiro persuasivo e objetivo",
  "Clareza do objetivo e do público",
  "Alinhamento com as campanhas de tráfego",
  "Duração e formato de vídeo ideais",
  "Alto nível estético",
  "Narração e trilha sonora",
  "Plano de divulgação",
];

const chatbotFeatures = [
  {
    title: "Atendimento Humanizado",
    text: "Responde de forma humanizada as dúvidas dos clientes, incluindo áudios.",
  },
  {
    title: "Qualificação de Leads",
    text: "Identifica e direciona automaticamente os leads qualificados para o CRM do cliente para serem atendidos por sua equipe de vendas.",
  },
  {
    title: "Disponibilidade 24/7",
    text: "Garante atendimento contínuo, mesmo fora do horário comercial.",
  },
  {
    title: "Eficiência Operacional",
    text: "Automatiza respostas a perguntas frequentes, economizando milhares de horas do time do cliente.",
  },
  {
    title: "Integração com Campanhas",
    text: "Alinhado com campanhas de tráfego pago e social media, ele permite um atendimento inicial muito rápido, transformando esse interesse inicial das pessoas que vieram através das campanhas em leads qualificados.",
  },
];

const results = [
  {
    value: "494",
    label: "Leads Qualificados Gerados nos Primeiros 60 Dias de Campanha",
    bg: "/assets/case-fumil/challenge-2.jpeg",
  },
  {
    value: "114X",
    label: "Melhora no tempo de atendimento",
    bg: "/assets/case-fumil/result-bg-2.jpeg",
  },
  {
    value: "R$ 150.213,54",
    label: "em vendas para leads das campanhas",
    bg: "/assets/case-fumil/challenge-1.jpeg",
  },
];

export default function CaseFumilPage() {
  return (
    <main className="case-fumil">
      {/* ── HERO ── */}
      <section className="cf-hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="cf-hero__video"
          poster="/assets/case-fumil/hero-intro.jpeg"
        >
          <source src="/assets/case-fumil/videos/bg-panelamineira.mp4" type="video/mp4" />
        </video>
        <div className="cf-hero__overlay" />
        <div className="cf-hero__content">
          <h1>
            Como melhoramos em 10X o marketing digital e o atendimento de leads de
            uma tradicional indústria com Videomarketing e IA
          </h1>
          <a href="#intro" className="cf-hero__scroll" aria-label="Rolar para baixo">
            <svg className="cf-hero__scroll-svg" viewBox="0 0 100 100" width="80" height="80">
              <defs>
                <path id="scrollCircle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              </defs>
              <text fill="rgba(255,255,255,0.7)" fontSize="11.5" fontWeight="500" letterSpacing="5">
                <textPath href="#scrollCircle">SCROLL · SCROLL · SCROLL ·</textPath>
              </text>
            </svg>
          </a>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="cf-intro" id="intro">
        <div className="section__inner cf-intro__grid">
          <div className="cf-intro__text">
            <p className="cf-label">CASE DE SUCESSO</p>
            <h2>Fumil (Panela Mineira®)</h2>
            <p>
              Muito tradicional no mercado brasileiro, desde 1970 a Fumil sempre
              foi sinônimo de qualidade e inovação em utensílios de ferro fundido.
              Descubra como levamos a estratégia digital da sua linha de produtos
              Panela Mineira® a novos patamares de resultados ainda nos primeiros 60
              dias do projeto através de nossas metodologias proprietárias
              Aceleração de Estratégia Digital® e Videomarketing 10X®
            </p>
            <div className="cf-intro__stats">
              <div className="cf-intro__stat">
                <strong>54+</strong>
                <span>Anos de Tradição</span>
              </div>
              <div className="cf-intro__stat">
                <strong>10x</strong>
                <span>
                  Melhora de Eficiência no Atendimento e na Geração de Leads
                  Qualificados
                </span>
              </div>
            </div>
          </div>
          <div className="cf-intro__images">
            <div className="cf-intro__img-main">
              <Image
                src="/assets/case-fumil/hero-intro.jpeg"
                alt="Produtos Panela Mineira em exposição"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="cf-intro__img-float">
              <Image
                src="/assets/case-fumil/fumil-frente.jpg"
                alt="Fachada Fumil"
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CAROUSEL ── */}
      <section className="cf-products section">
        <div className="section__inner">
          <h3 className="cf-products__title">
            Confira algumas imagens da incrível linha de produtos da Fumil:
          </h3>
          <Carousel items={productImages} aspectRatio="4 / 5" />
        </div>
      </section>

      {/* ── O DESAFIO ── */}
      <section className="cf-challenge section">
        <div className="section__inner cf-challenge__grid">
          <div className="cf-challenge__images">
            <div className="cf-challenge__img-back">
              <Image
                src="/assets/case-fumil/challenge-1.jpeg"
                alt="Produtos Fumil"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="cf-challenge__img-front">
              <Image
                src="/assets/case-fumil/challenge-2.jpeg"
                alt="Linha Panela Mineira"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
              />
            </div>
          </div>
          <div className="cf-challenge__text">
            <p className="cf-label">O INÍCIO DO PROJETO</p>
            <h2>O Desafio</h2>
            <p>
              A Fumil precisava inovar para expandir sua base de clientes B2B
              (principalmente revendedores), aumentar vendas e melhorar a eficiência
              no seu atendimento, transformando interações em oportunidades de
              negócio sem comprometer a qualidade e tradição da Panela Mineira®.
            </p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="cf-marquee" aria-hidden="true">
        <div className="cf-marquee__track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="cf-marquee__text">
              Inovação Estratégica
            </span>
          ))}
        </div>
      </section>

      {/* ── STRATEGY INTRO ── */}
      <section className="cf-strategy">
        <video autoPlay loop muted playsInline className="cf-strategy__video">
          <source src="/assets/case-fumil/videos/fundobg-agencia5.mp4" type="video/mp4" />
        </video>
        <div className="cf-strategy__overlay" />
        <div className="section__inner cf-strategy__content">
          <h3>
            Veja agora qual foi a combinação de <strong>estratégias</strong> que
            sugerimos para resolver os desafios que a Fumil enfrentava e como
            fizemos todo o processo de implementação para que a empresa já começasse
            a ter os primeiros <strong>resultados</strong> em pouco tempo:
          </h3>
        </div>
      </section>

      {/* ── 6 SERVICES ── */}
      <section className="cf-services">
        <div className="section__inner">
          <div className="cf-services__grid">
            {services.map((s) => (
              <div className="cf-services__item" key={s.label}>
                <div className="cf-services__icon">{s.icon}</div>
                <h4>{s.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION ── */}
      <section className="cf-implementation">
        <div className="section__inner cf-implementation__content">
          <h3>
            Do planejamento à execução, implementamos cada estratégia com uma
            equipe de mais de 15 profissionais — sempre em alta proximidade com
            o cliente.
          </h3>
          <p>
            Análise de mercado, criação de ativos e gestão integrada de projetos,
            tudo em um plano de ação personalizado para gerar resultados desde o
            início.
          </p>
        </div>
      </section>

      {/* ── PLANEJAMENTO ESTRATÉGICO ── */}
      <section className="cf-planning">
        <div className="cf-planning__bg">
          <Image
            src="/assets/case-fumil/planning-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div className="cf-planning__overlay" />
        <div className="section__inner cf-planning__wrapper">
          <div className="cf-planning__header">
            <h2>Planejamento Estratégico de Marketing Digital</h2>
            <p>
              Durante a etapa de planejamento estratégico de marketing digital,
              diversas ações específicas são feitas, garantindo que as estratégias a
              serem executas sejam assertivas e trabalhem de forma unificada.
              Através do nosso processo otimizado, todas essas etapas inicias podem
              ser concluídas em pouco mais de uma semana.
            </p>
          </div>
          <div className="cf-planning__grid">
            <div className="cf-planning__images">
              <div className="cf-planning__color-block" />
              <div className="cf-planning__img cf-planning__img--1">
                <Image
                  src="/assets/case-fumil/painel-fumil.jpg"
                  alt="Painel de Estratégia Digital da Fumil"
                  fill
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>
              <div className="cf-planning__img cf-planning__img--2">
                <Image
                  src="/assets/case-fumil/painel-screenshot.png"
                  alt="Screenshot do painel estratégico"
                  fill
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>
              <div className="cf-planning__img cf-planning__img--3">
                <Image
                  src="/assets/case-fumil/brandboard.jpg"
                  alt="Brand Board Fumil"
                  fill
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>
            </div>
            <div className="cf-planning__bullets">
              <ul className="cf-check-list">
                {planningBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAINEL DE ESTRATÉGIA ── */}
      <section className="cf-strategy-panel">
        <div className="section__inner cf-strategy-panel__content">
          <span className="cf-strategy-panel__badge">Painel de Estratégia Digital®</span>
          <h3>
            Todo o material do planejamento fica disponível num painel unificado
            online exclusivo do cliente.
          </h3>
          <p>
            Num diferencial único de nossa metodologia proprietária, toda a equipe
            envolvida acompanha os resultados, os materiais já produzidos e tem
            acesso rápido a informações cruciais para realizar suas entregas
            individuais com máxima assertividade.
          </p>
        </div>
      </section>

      {/* ── FUNIL ── */}
      <section className="cf-funnel section">
        <div className="section__inner">
          <div className="cf-funnel__header">
            <h2>Mapeamento do Funil de Marketing Digital</h2>
            <p>
              Através do mapeamento do funil de marketing digital definimos de forma
              visual a estratégia geral do projeto, com os próximos passos sendo a
              criação dos ativos que vão permitir que essa &quot;máquina de vendas&quot;
              funcione na prática.
            </p>
          </div>
          <div className="cf-funnel__image">
            <Image
              src="/assets/case-fumil/funnel.png"
              alt="Funil de marketing digital da Fumil"
              width={1692}
              height={1005}
              sizes="(max-width: 1200px) 100vw, 1180px"
            />
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA ── */}
      <section className="cf-sticky section">
        <div className="section__inner cf-sticky__grid">
          <div className="cf-sticky__media">
            <div className="cf-sticky__img">
              <Image
                src="/assets/case-fumil/perfil-panelamineira-02.jpg"
                alt="Perfil Instagram Panela Mineira"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
          <div className="cf-sticky__content">
            <div className="cf-sticky__block">
              <h2>Social Media</h2>
              <p>
                A Fumil já tinha uma boa presença no Instagram antes de iniciarmos o
                projeto, mas faltava uma abordagem mais estratégica em relação aos
                posts, com criativos realmente pensados para maximizar os resultados,
                além de melhorias em relação ao design. Paralelamente, iniciamos um
                trabalho no YouTube para ampliar ainda mais a presença digital do
                cliente nessa que é a segunda maior rede social do Brasil. No Social
                Media, alguns dos pontos trabalhados foram:
              </p>
              <ul className="cf-check-list">
                {socialBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── LANDING PAGE ── */}
      <section className="cf-sticky section">
        <div className="section__inner cf-sticky__grid">
          <div className="cf-sticky__media">
            <div className="cf-sticky__img">
              <Image
                src="/assets/case-fumil/lp-mockup.jpg"
                alt="Mockup da Landing Page Fumil"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
          <div className="cf-sticky__content">
            <div className="cf-sticky__block">
              <h2>Landing Page</h2>
              <p>
                Atuando como um &quot;hub&quot; que receberia tráfego de diferentes
                campanhas, essa landing page criada com o foco no público de
                revendedores tinha o objetivo claro de mostrar todos os diferenciais
                da linha de produtos Panela Mineira® e transformar esse interesse em
                contatos de venda potenciais que seriam atendidos pelo time de vendas
                da Fumil. Um diferencial aqui foi o uso de um chatbot com
                inteligência artificial, para conversar de forma humanizada com o
                público alvo e separar o público final dos contatos com real potencial
                de serem revendedores para a Fumil.
              </p>
              <ul className="cf-check-list">
                {landingBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL GALLERY ── */}
      <section className="cf-gallery">
        <div className="section__inner cf-gallery__header">
          <span className="cf-gallery__label">Social Media</span>
          <h2>Criativos produzidos</h2>
          <p>Alguns dos materiais criados para as redes sociais da Panela Mineira.</p>
        </div>
        <GalleryCarousel items={instaImages} />
      </section>

      {/* ── VIDEOMARKETING ── */}
      <section className="cf-video section section--surface">
        <div className="section__inner">
          <div className="cf-video__header">
            <div className="cf-video__divider" />
            <h2>Videomarketing</h2>
            <p>
              Os vídeos são peça central na estratégia que desenvolvemos para esse
              cliente, e para o primeiro vídeo deles optamos por um no estilo Quadro
              Branco que é um dos melhores em relação a resultados, em grande parte
              por causa do seu estilo único, utilizando ilustrações exclusivas para
              capturar a atenção do público e criar uma conexão emocional, ao mesmo
              tempo em que consegue transmitir com clareza a mensagem pensada no
              roteiro do vídeo.
            </p>
          </div>
          <div className="cf-video__player">
            <VideoDialog
              title="Vídeo Fumil - Quadro Branco"
              buttonLabel="Assistir vídeo"
              embedUrl="https://www.youtube.com/embed/sQrc4f-ukQ0"
              className="cf-video__trigger"
            >
              <Image
                src="/assets/case-fumil/video-thumbnail.jpg"
                alt="Thumbnail do vídeo Fumil"
                fill
                sizes="(max-width: 1200px) 100vw, 900px"
              />
              <span className="cf-video__play" aria-hidden="true">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
                  <polygon points="26,20 26,44 46,32" fill="#fff" />
                </svg>
              </span>
            </VideoDialog>
          </div>
        </div>
      </section>

      {/* ── VIDEO DETAILS ── */}
      <section className="cf-video-details section">
        <div className="section__inner cf-video-details__grid">
          <div className="cf-video-details__text">
            <p>
              Para um vídeo funcionar na campanha, é necessária uma série de fatores,
              e todos foram trabalhados pela nossa equipe para que fosse possível
              atingir o resultado desse projeto:
            </p>
            <ul className="cf-check-list">
              {videoBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="cf-video-details__images">
            <div className="cf-video-details__color-block" />
            <div className="cf-video-details__img cf-video-details__img--1">
              <Image
                src="/assets/case-fumil/video-detail-1.jpeg"
                alt="Detalhe da produção do vídeo Fumil"
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
              />
            </div>
            <div className="cf-video-details__img cf-video-details__img--2">
              <Image
                src="/assets/case-fumil/video-detail-2.jpeg"
                alt="Cena do vídeo animado Fumil"
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CHATBOT ── */}
      <section className="cf-chatbot section">
        <div className="section__inner cf-chatbot__grid">
          <div className="cf-chatbot__text">
            <h2>Automação de Chatbots com IA</h2>
            <p>
              Um dos pontos chaves desse projeto foi a implementação de um chatbot
              com inteligência artificial multicanal, atuando tanto no Whatsapp,
              quanto direct do Instagram e numa versão web integrada na Landing Page,
              desempenhando um papel essencial na estratégia digital da Fumil:
            </p>
            <ul className="cf-chatbot__list">
              {chatbotFeatures.map((f) => (
                <li key={f.title}>
                  <strong>{f.title}:</strong> {f.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="cf-chatbot__media">
            <div className="cf-chatbot__video-wrap">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                controls
                controlsList="nodownload"
                poster="/assets/case-fumil/celular-bg-video-bot-2-800x800-1.png"
                className="cf-chatbot__video"
              >
                <source src="/assets/case-fumil/videos/video-botfumil-01.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS HEADING ── */}
      <section className="cf-results-heading section">
        <div className="section__inner">
          <h2>
            Os{" "}
            <em>
              resultados:
              <svg className="cf-scribble" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path
                  d="M2 8 C40 2, 80 10, 120 4 S180 10, 198 6"
                  fill="none"
                  stroke="#3d84ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </em>
          </h2>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="cf-results">
        <div className="cf-results__slider">
          {results.map((r) => (
            <div className="cf-results__slide" key={r.value}>
              <Image
                src={r.bg}
                alt=""
                fill
                sizes="100vw"
                aria-hidden="true"
              />
              <div className="cf-results__slide-overlay" />
              <div className="cf-results__slide-content">
                <strong>{r.value}</strong>
                <span>{r.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="cf-testimonial section">
        <div className="section__inner cf-testimonial__grid">
          <div className="cf-testimonial__quote">
            <p className="cf-label">O cliente:</p>
            <blockquote>
              &ldquo;Estamos muito satisfeitos com o trabalho do time da VFX, e
              sabemos que esse é só o começo de uma parceria duradoura!&rdquo;
            </blockquote>
          </div>
          <div className="cf-testimonial__text">
            <p>
              Através do conjunto de estratégias e da metodologia que mostramos,
              conseguimos em pouco tempo ajudar a Fumil com toda sua estratégia de
              marketing de atração.
            </p>
            <p>
              Além da melhora em toda a presença digital da empresa, com uma presença
              mais eficaz nas principais redes sociais, campanhas de tráfego pago
              otimizadas garantindo que os vídeos e criativos estáticos cheguem no
              público alvo, implementamos uma landing page de alto nível para aquecer
              o público alvo e uma chatbot que reduziu de várias horas para que todos
              as solicitações fossem atendidas para menos de 3 segundos de resposta,
              ao mesmo tempo economizando tempo do time do cliente e com um impacto
              muito positivo na conversão desses leads em vendas.
            </p>
          </div>
        </div>
      </section>


      {/* ── SCHEMAS ── */}
      <Schema
        id="case-breadcrumb-schema"
        data={buildBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Cases", path: "/cases/fumil" },
          { name: "Fumil (Panela Mineira)", path: "/cases/fumil" },
        ])}
      />
      <Schema
        id="case-creativework-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Estudo de Caso - Fumil",
          description:
            "Veja como a Fumil acelerou marketing e atendimento com videomarketing, landing page, social media e automação com IA.",
          about: "Fumil (Panela Mineira)",
          creator: {
            "@type": "Organization",
            name: "Agência VFX",
          },
          image: "https://agenciavfx.com.br/assets/case-fumil/hero-intro.jpeg",
          url: "https://agenciavfx.com.br/cases/fumil",
        }}
      />
    </main>
  );
}
