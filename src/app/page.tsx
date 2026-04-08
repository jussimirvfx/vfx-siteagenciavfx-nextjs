import type { ReactNode } from "react";

import Image from "next/image";

import { LottiePlayer } from "@/components/lottie-player";
import { Reveal } from "@/components/reveal";
import { ShowcaseReveal } from "@/components/showcase-reveal";
import { VideoDialog } from "@/components/video-dialog";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Agência VFX | Videomarketing de Performance",
  description:
    "Agência de videomarketing de performance com vídeos, campanhas, landing pages e automação no WhatsApp para gerar mais vendas.",
  path: "/",
  image: "/assets/reference/fachada-vfx-wide-01.jpg",
});

const scribbleVariants = {
  basic: {
    viewBox: "-400 -55 730 60",
    path: "m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15",
    stroke: "#3d84ff",
    strokeWidth: 14,
  },
  squiggle: {
    viewBox: "-347 -30.1947 694 96.19",
    path: "M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.042999267578125 147.14700317382812,-29.308000564575195 335,2",
    stroke: "#3d84ff",
    strokeWidth: 20,
  },
  squiggle2: {
    viewBox: "-320 -70.8161 640.4 59.82",
    path: "M-300,-56 C-50,-72 298,-65 300,-59 C332,-53 -239,-36 -255,-27 C-271,-18 -88,-24 91,-20",
    stroke: "#53a9ef",
    strokeWidth: 11.111111111111,
  },
} as const;

type ScribbleVariant = keyof typeof scribbleVariants;

function ScribbleText({
  children,
  variant,
}: {
  children: ReactNode;
  variant: ScribbleVariant;
}) {
  const config = scribbleVariants[variant];

  return (
    <span className={`homev2__scribble homev2__scribble--${variant}`}>
      <span className="homev2__scribble-text">{children}</span>
      <svg
        aria-hidden="true"
        className={`homev2__scribble-mark homev2__scribble-mark--${variant}`}
        preserveAspectRatio="none"
        role="presentation"
        viewBox={config.viewBox}
      >
        <path
          d={config.path}
          fill="none"
          pathLength="1"
          stroke={config.stroke}
          strokeWidth={config.strokeWidth}
        />
      </svg>
    </span>
  );
}

const partnerLogos = [
  {
    title: "Accredited Agency",
    image: "/assets/solutions/accredited-agency.png",
  },
  {
    title: "Top Video Marketing Companies",
    image: "/assets/solutions/top-companies.png",
  },
  {
    title: "Meta Business Partner",
    image: "/assets/solutions/meta-partner.png",
  },
  {
    title: "Google Partner",
    image: "/assets/solutions/google-partner.png",
  },
] as const;

const featureSections: ReadonlyArray<{
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  video?: string;
  poster?: string;
  reverse: boolean;
  surface?: "soft";
  bullets?: readonly string[];
}> = [
  {
    title: "Atinja seus potenciais clientes onde eles estão: online",
    body:
      "Independente do público da sua empresa ser empresarial ou cliente final, hoje é possível atingir esse público utilizando as principais plataformas de anúncios do marketing digital.",
    image: "/assets/home/social-proof.png",
    imageAlt: "Painel com resultados de campanhas digitais",
    reverse: false,
  },
  {
    title: "Vídeos + Anúncios + Whatsapp = A combinação de marketing perfeita.",
    body:
      "Utilize vídeos, que são a melhor ferramenta de vendas da atualidade, combinados com anúncios para mostrar esses vídeos ao seu público e deixe a automação do WhatsApp fazer o atendimento inicial e a qualificação desses leads.",
    image: "/assets/reference/celular-bg-video-bot-1.png",
    imageAlt: "Celular com automação de WhatsApp",
    video: "/assets/reference/agenciavfx_videobot_07.mp4",
    poster: "/assets/reference/celular-bg-video-bot-1.png",
    reverse: true,
    surface: "soft",
  },
  {
    title: "Vídeos que vendem",
    body:
      "Vídeos são uma das armas secretas do marketing digital de resultados porque conseguem transmitir seu melhor discurso de vendas em poucos segundos com clareza, ritmo e alto nível estético.",
    bullets: [
      "Roteiro persuasivo e objetivo",
      "Clareza do objetivo e do público",
      "Alinhamento com as campanhas de tráfego",
      "Duração e formato ideais",
      "Narração, trilha sonora e plano de divulgação",
    ],
    image: "/assets/reference/computer-dpguy-03.jpg",
    imageAlt: "Monitor exibindo vídeo de vendas",
    reverse: false,
  },
] as const;

const serviceCards = [
  {
    title: "Vídeos Marketing",
    description:
      "A melhor ferramenta do marketing digital atual para comunicar o melhor discurso de vendas da sua empresa com rapidez e clareza.",
    image: "/assets/reference/portfolio-2.jpg",
  },
  {
    title: "Campanhas de Anúncios",
    description:
      "Sua empresa precisa aparecer para o público certo. Estruturamos campanhas para gerar visibilidade, leads e vendas com retorno rápido.",
    image: "/assets/reference/trafego-4.jpg",
  },
  {
    title: "Páginas de Venda",
    description:
      "Landing pages pensadas para converter a maior quantidade possível de visitantes em oportunidades reais para o comercial.",
    image: "/assets/reference/landing-page-02.jpg",
  },
  {
    title: "Automação de MKT com Whatsapp",
    description:
      "Ganhe tempo, dinheiro e velocidade no atendimento inicial usando automações focadas em qualificação e distribuição de leads.",
    image: "/assets/reference/automacao-whatsapp-03.jpg",
  },
  {
    title: "Social Media",
    description:
      "Não fazemos posts bonitinhos. Implementamos uma presença nas redes sociais focada em resultado, distribuição e consistência de marca.",
    image: "/assets/reference/social-media-01.jpg",
  },
] as const;

const trustCards: ReadonlyArray<{
  title: string;
  description: string;
  accent?: boolean;
  animation: string;
  animationSpeed: number;
}> = [
  {
    title: "Equipe Experiente",
    description:
      "Com mais de 3700 clientes atendidos e mais de 11 anos de experiência, trabalhamos com base no que já foi testado e funciona em dezenas de mercados.",
    animation: "/assets/lottie/trust-experiente.json",
    animationSpeed: 0.8,
  },
  {
    title: "Gerente de Projeto",
    description:
      "Seu projeto tem acompanhamento próximo, clareza de prazos e uma pessoa responsável por manter tudo alinhado com o objetivo comercial.",
    accent: true,
    animation: "/assets/lottie/trust-gerente.json",
    animationSpeed: 1.6,
  },
  {
    title: "Qualidade Premium",
    description:
      "A mesma experiência e profissionalismo que construíram a maior produtora de vídeos animados para marketing do Brasil agora orientam a agência.",
    animation: "/assets/lottie/trust-qualidade.json",
    animationSpeed: 2.3,
  },
] as const;

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
    subtitle: "Vídeo para plataforma de marketing digital para ecommerce",
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
] as const;

const enterpriseLogos = [
  { title: "Chilli Beans", image: "/assets/solutions/chilli.png", width: 202, height: 102 },
  { title: "CyberArk", image: "/assets/solutions/cyberark.png", width: 194, height: 102 },
  { title: "Ambev", image: "/assets/solutions/ambev.png", width: 180, height: 92 },
  { title: "Gerdau", image: "/assets/solutions/gerdau.png", width: 196, height: 92 },
  { title: "Unicred", image: "/assets/solutions/unicred.png", width: 174, height: 92 },
  { title: "Campari", image: "/assets/solutions/campari.png", width: 176, height: 92 },
  { title: "Dupont", image: "/assets/solutions/dupont.png", width: 172, height: 92 },
  { title: "Senior", image: "/assets/solutions/senior.png", width: 182, height: 92 },
] as const;

const testimonials = [
  {
    quote:
      "Já fizemos mais de 7 vídeos com a VFX e o resultado sempre foi ótimo. A comunicação com eles é 100%!",
    name: "Rodrigo Schreiner",
    role: "Kurier Sistemas",
    image: "/assets/reference/rodrigo-kurier-1.webp",
  },
  {
    quote:
      "Foi muito bom trabalhar com a VFX! Nos surpreendemos com o impacto da apresentação do vídeo, os resultados estão sendo incríveis!",
    name: "Dimas Francisco Silva Jr",
    role: "CEO, MedCloud",
    image: "/assets/reference/dimas-medcloud.webp",
  },
  {
    quote:
      "Encontrei na VFX uma equipe organizada, com metodologia de trabalho e muito conhecimento. Os resultados que tivemos com o vídeo falam por si só!",
    name: "Vinicius Rockenbach",
    role: "Fundador, Converte",
    image: "/assets/reference/vinicius-rockenbach.webp",
  },
  {
    quote:
      "Nós fomos de 15 novos clientes por mês para mais de 300 com a ajuda de um vídeo animado criado pela equipe da VFX.",
    name: "Diogo Sampaio",
    role: "Fundador da Startup AvalieJa",
    image:
      "/assets/reference/diogo-sampaio-case-da-vfx-produtora-de-videos-institucionais-animados-03-1.webp",
  },
] as const;

const expertCards = [
  {
    title: "Copywriters",
    description:
      "Profissionais que dominam a arte de escrever para vender, desde roteiros a landing pages.",
    image: "/assets/reference/copys.jpg",
    iconPath:
      "M1.54 31.105c-0.175 0-0.345-0.069-0.472-0.195-0.163-0.161-0.229-0.397-0.179-0.621l2.223-9.761c0.028-0.123 0.089-0.235 0.179-0.323l17.98-17.98c1.531-1.532 3.984-1.787 5.243-0.528l3.771 3.773c0.651 0.649 0.94 1.573 0.815 2.595-0.12 0.96-0.596 1.899-1.344 2.644l-17.979 17.981c-0.088 0.088-0.201 0.149-0.324 0.177l-9.765 2.221c-0.048 0.009-0.097 0.016-0.147 0.016zM4.371 21.011l-1.944 8.543 8.543-1.944 17.845-17.844c0.536-0.537 0.877-1.2 0.961-1.867 0.076-0.607-0.079-1.135-0.432-1.488l-3.771-3.773c-0.372-0.375-0.857-0.452-1.195-0.452-0.74 0-1.547 0.365-2.161 0.979l-17.847 17.847zM26.029 12.575l-7.333-7.331 0.943-0.943 7.333 7.331-0.943 0.943zM23.391 15.567l-7.333-7.329 0.943-0.943 7.333 7.329-0.943 0.943zM11.889 28.303c-4.067 0-8.209-4.141-8.209-8.211h1.333c0 3.343 3.535 6.877 6.876 6.877v1.333zM7.658 25.266l-0.943-0.943 13.082-13.082 0.943 0.943-13.082 13.082z",
  },
  {
    title: "Ilustradores / Designers",
    description:
      "Profissionais capazes de simplificar conceitos complexos em comunicação visual clara e atraente.",
    image: "/assets/reference/landing-page-02.jpg",
    iconPath:
      "M22.667 25.333h-20c-0.368 0-0.667-0.3-0.667-0.667v-24c0-0.367 0.299-0.667 0.667-0.667h20c0.367 0 0.667 0.3 0.667 0.667v24c0 0.367-0.3 0.667-0.667 0.667zM3.333 24h18.667v-22.667h-18.667v22.667zM29.333 32h-20c-0.368 0-0.667-0.3-0.667-0.667v-6c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v5.333h18.667v-22.667h-5.333c-0.367 0-0.667-0.3-0.667-0.667s0.3-0.667 0.667-0.667h6c0.367 0 0.667 0.3 0.667 0.667v24c0 0.367-0.3 0.667-0.667 0.667zM9.333 24.667c-0.368 0-0.667-0.3-0.667-0.667v-1.333c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v1.333c0 0.367-0.299 0.667-0.667 0.667zM9.333 20.667c-0.368 0-0.667-0.3-0.667-0.667v-1.333c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v1.333c0 0.367-0.299 0.667-0.667 0.667zM9.333 16.667c-0.368 0-0.667-0.3-0.667-0.667v-1.333c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v1.333c0 0.367-0.299 0.667-0.667 0.667zM9.333 12.667c-0.368 0-0.667-0.3-0.667-0.667v-1.333c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v1.333c0 0.367-0.299 0.667-0.667 0.667zM9.333 8.667c-0.368 0-0.667-0.3-0.667-0.667v-0.667c0-0.367 0.299-0.667 0.667-0.667h0.667c0.368 0 0.667 0.3 0.667 0.667s-0.299 0.667-0.667 0.667c0 0.367-0.299 0.667-0.667 0.667zM22 8h-1.333c-0.367 0-0.667-0.3-0.667-0.667s0.3-0.667 0.667-0.667h1.333c0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667zM18 8h-1.333c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h1.333c0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667zM14 8h-1.333c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h1.333c0.368 0 0.667 0.3 0.667 0.667s-0.299 0.667-0.667 0.667z",
  },
  {
    title: "Gestores de Tráfego Pago",
    description:
      "Especialistas em campanhas que distribuem o conteúdo certo para o público certo nas plataformas certas.",
    image: "/assets/reference/trafego-4.jpg",
    iconPath:
      "M16 29.333c-7.352 0-13.333-5.981-13.333-13.333s5.981-13.333 13.333-13.333c7.352 0 13.333 5.981 13.333 13.333s-5.981 13.333-13.333 13.333zM16 4c-6.616 0-12 5.383-12 12s5.384 12 12 12 12-5.383 12-12-5.384-12-12-12zM31.333 16.667h-9.333c-0.367 0-0.667-0.3-0.667-0.667s0.3-0.667 0.667-0.667h9.333c0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667zM10 16.667h-9.333c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h9.333c0.368 0 0.667 0.3 0.667 0.667s-0.299 0.667-0.667 0.667zM16 10.667c-0.368 0-0.667-0.3-0.667-0.667v-9.333c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v9.333c0 0.367-0.299 0.667-0.667 0.667zM16 32c-0.368 0-0.667-0.3-0.667-0.667v-9.333c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v9.333c0 0.367-0.299 0.667-0.667 0.667zM16 25.333c-5.147 0-9.333-4.188-9.333-9.333s4.187-9.333 9.333-9.333c5.145 0 9.333 4.188 9.333 9.333s-4.188 9.333-9.333 9.333zM16 8c-4.412 0-8 3.588-8 8s3.588 8 8 8c4.412 0 8-3.588 8-8s-3.588-8-8-8zM16 18c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM16 15.333c-0.368 0-0.667 0.3-0.667 0.667s0.299 0.667 0.667 0.667 0.667-0.3 0.667-0.667-0.299-0.667-0.667-0.667z",
  },
  {
    title: "Animadores / Editores de Vídeo",
    description:
      "Profissionais que dão vida aos projetos e criam vídeos capazes de capturar a atenção do público alvo.",
    image: "/assets/home/team.png",
    iconPath:
      "M22.167 24.667h-20c-0.367 0-0.667-0.3-0.667-0.667v-12c0-0.367 0.3-0.667 0.667-0.667h20c0.367 0 0.667 0.3 0.667 0.667v12c0 0.367-0.3 0.667-0.667 0.667zM2.833 23.333h18.667v-10.667h-18.667v10.667zM30.167 27.333c-0.071 0-0.14-0.012-0.211-0.033l-8-2.667c-0.271-0.088-0.456-0.347-0.456-0.633v-12c0-0.287 0.185-0.541 0.456-0.633l8-2.667c0.204-0.068 0.425-0.031 0.6 0.089 0.175 0.127 0.277 0.325 0.277 0.537v17.333c0 0.216-0.103 0.417-0.277 0.54-0.115 0.091-0.251 0.133-0.389 0.133zM22.833 23.521l6.667 2.221v-15.483l-6.667 2.223v11.039zM7.167 12c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6zM7.167 1.333c-2.573 0-4.667 2.093-4.667 4.667s2.093 4.667 4.667 4.667 4.667-2.093 4.667-4.667-2.093-4.667-4.667-4.667zM17.833 12c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6zM17.833 1.333c-2.573 0-4.667 2.093-4.667 4.667s2.093 4.667 4.667 4.667 4.667-2.093 4.667-4.667-2.093-4.667-4.667-4.667zM2.751 32c-0.195 0-0.393-0.088-0.527-0.255-0.227-0.293-0.175-0.711 0.116-0.937l9.417-7.333c0.291-0.227 0.708-0.175 0.935 0.117s0.175 0.708-0.115 0.935l-9.417 7.333c-0.124 0.095-0.267 0.14-0.409 0.14zM22.917 32c-0.14 0-0.287-0.045-0.411-0.14l-9.417-7.333c-0.289-0.227-0.341-0.641-0.115-0.935 0.227-0.292 0.641-0.344 0.935-0.117l9.417 7.333c0.291 0.227 0.343 0.644 0.116 0.937-0.133 0.167-0.328 0.255-0.525 0.255zM12.833 32c-0.367 0-0.667-0.3-0.667-0.667v-6.667c0-0.367 0.3-0.667 0.667-0.667s0.667 0.3 0.667 0.667v6.667c0 0.367-0.3 0.667-0.667 0.667z",
  },
  {
    title: "Especialistas em Automação",
    description:
      "O futuro do marketing digital passa pela automação, especialmente com robô de WhatsApp e qualificação.",
    image: "/assets/reference/automacao-whatsapp-03.jpg",
    iconPath:
      "M24 32h-16c-2.941 0-5.333-2.392-5.333-5.333v-16c0-2.941 2.392-5.333 5.333-5.333h16c2.941 0 5.333 2.392 5.333 5.333v16c0 2.941-2.392 5.333-5.333 5.333zM8 6.667c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4v-16c0-2.205-1.795-4-4-4h-16zM24.667 28h-17.333c-0.368 0-0.667-0.3-0.667-0.667v-6c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v5.333h16v-5.333c0-0.367 0.3-0.667 0.667-0.667s0.667 0.3 0.667 0.667v6c0 0.367-0.3 0.667-0.667 0.667zM14 17.333h-4c-0.368 0-0.667-0.3-0.667-0.667v-4c0-0.368 0.299-0.667 0.667-0.667h4c0.368 0 0.667 0.299 0.667 0.667v4c0 0.367-0.299 0.667-0.667 0.667zM10.667 16h2.667v-2.667h-2.667v2.667zM22 17.333h-4c-0.367 0-0.667-0.3-0.667-0.667v-4c0-0.368 0.3-0.667 0.667-0.667h4c0.367 0 0.667 0.299 0.667 0.667v4c0 0.367-0.3 0.667-0.667 0.667zM18.667 16h2.667v-2.667h-2.667v2.667zM12.667 4h-2.667c-0.368 0-0.667-0.299-0.667-0.667v-2.667c0-0.368 0.299-0.667 0.667-0.667h2.667c0.368 0 0.667 0.299 0.667 0.667v2.667c0 0.368-0.299 0.667-0.667 0.667zM10.667 2.667h1.333v-1.333h-1.333v1.333zM17.333 6c-0.367 0-0.667-0.299-0.667-0.667 0-1.837-1.496-3.333-3.333-3.333-0.368 0-0.667-0.299-0.667-0.667s0.299-0.667 0.667-0.667c2.573 0 4.667 2.093 4.667 4.667 0 0.368-0.3 0.667-0.667 0.667z",
  },
  {
    title: "Especialistas em Inbound Sales",
    description:
      "Quando os leads chegam, estruturamos a etapa comercial para transformar interesse em venda.",
    image: "/assets/reference/imagem-caito2.jpg",
    iconPath:
      "M24.521 19.333c-0.008 0-0.019 0-0.027 0-0.297-0.011-0.549-0.216-0.623-0.505l-0.817-3.288-0.519 1.361c-0.099 0.26-0.347 0.429-0.625 0.429h-1.388c-0.367 0-0.667-0.297-0.667-0.667 0-0.368 0.3-0.667 0.667-0.667h0.932l1.109-2.924c0.104-0.272 0.341-0.475 0.664-0.425 0.292 0.017 0.536 0.221 0.607 0.504l0.776 3.128 1.94-5.823c0.093-0.287 0.339-0.477 0.675-0.455 0.303 0.019 0.552 0.239 0.612 0.535l1.031 5.183 0.573-0.78c0.129-0.171 0.327-0.273 0.537-0.273h1.211c0.367 0 0.667 0.299 0.667 0.667s-0.3 0.667-0.667 0.667h-0.869l-1.268 1.728c-0.156 0.211-0.424 0.309-0.683 0.255-0.257-0.057-0.459-0.26-0.511-0.524l-0.836-4.196-1.869 5.612c-0.091 0.276-0.347 0.459-0.632 0.459zM11.191 21.333h-5.323c-3.263 0-5.725-2.292-5.725-5.333 0-3.040 2.463-5.333 5.725-5.333h5.323c0.367 0 0.667 0.299 0.667 0.667s-0.3 0.667-0.667 0.667h-5.323c-2.544 0-4.392 1.683-4.392 4s1.848 4 4.392 4h5.323c0.367 0 0.667 0.3 0.667 0.667 0 0.369-0.3 0.667-0.667 0.667zM19.857 28.667c-0.153 0-0.307-0.052-0.429-0.156l-8.667-7.333c-0.281-0.24-0.316-0.659-0.079-0.94 0.237-0.279 0.661-0.312 0.94-0.079l7.568 6.404v-21.124l-7.569 6.404c-0.279 0.237-0.703 0.203-0.94-0.077-0.237-0.281-0.203-0.703 0.079-0.94l8.667-7.333c0.197-0.169 0.476-0.205 0.711-0.095 0.235 0.107 0.387 0.344 0.387 0.603v24c0 0.26-0.151 0.497-0.385 0.604-0.089 0.041-0.188 0.063-0.281 0.063z",
  },
] as const;

export default function HomePage() {
  return (
    <main className="homev2">
      <section className="homev2__hero">
        <div className="homev2__hero-backdrop">
          <video
            aria-hidden="true"
            autoPlay
            className="homev2__hero-backdrop-video"
            loop
            muted
            playsInline
            poster="/assets/reference/fachada-vfx-wide-01.jpg"
            preload="metadata"
          >
            <source src="/assets/reference/home-hero-loop.mp4" type="video/mp4" />
          </video>
          <Image
            alt="Fachada da Agência VFX"
            fill
            priority
            sizes="100vw"
            src="/assets/reference/fachada-vfx-wide-01.jpg"
          />
        </div>
        <div className="homev2__hero-overlay" />

        <div className="section__inner homev2__hero-inner">
          <div className="homev2__hero-copy">
            <p className="homev2__hero-kicker">
              Vamos ajudar a <strong>sua empresa</strong> a vender mais com
            </p>
            <h1>
              Videomarketing de{" "}
              <ScribbleText variant="basic">resultados</ScribbleText>
            </h1>

            <div className="homev2__hero-actions">
              <WhatsAppLink className="homev2__button homev2__button--hero">
                Agende uma reunião
              </WhatsAppLink>
            </div>
          </div>

          <div className="homev2__hero-media">
            <Image
              alt="Apresentação em vídeo da Agência VFX"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1000px"
              src="/assets/reference/fachada-vfx-wide-01.jpg"
            />
            <div className="homev2__hero-play">
              <VideoDialog
                buttonLabel="Assistir apresentação"
                className="homev2__play-button homev2__play-button--hero"
                embedUrl="https://www.youtube.com/embed/GbF3SWzioAQ?autoplay=1&rel=0"
                title="Videomarketing de resultados"
              >
                <span className="homev2__play-icon" aria-hidden="true" />
              </VideoDialog>
            </div>
          </div>
        </div>
      </section>

      <section className="homev2__partner-strip" aria-label="Selos e plataformas">
        <div className="section__inner homev2__partner-grid">
          {partnerLogos.map((item, index) => (
            <Reveal
              as="div"
              className="homev2__partner-item"
              delay={index * 80}
              key={item.title}
              variant="fade-up"
            >
              <Image
                alt={item.title}
                height={120}
                sizes="(max-width: 768px) 45vw, 20vw"
                src={item.image}
                width={240}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="homev2__manifesto" id="intro">
        <div className="section__inner">
          <Reveal as="div" className="homev2__manifesto-card" variant="fade-up">
            <div className="homev2__manifesto-bubble" aria-hidden="true" />
            <h2>
              A melhor combinação de estratégias do marketing digital para{" "}
              <ScribbleText variant="squiggle">revolucionar</ScribbleText> a
              forma com que sua empresa vende.
            </h2>
            <p>
              Nós vamos te ajudar a transformar pessoas que nunca ouviram falar
              da sua empresa em clientes combinando a nova geração de
              estratégias do marketing digital: videomarketing, campanhas de
              anúncios, presença nas redes sociais focada em resultados e
              automação de marketing com WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <ShowcaseReveal
        duration="3m42s"
        imageSrc="/assets/reference/team-showcase-2025.jpg"
        title="Multiplique as vendas de sua empresa"
        videoUrl="https://www.youtube.com/embed/QdK6FbjtRPA?autoplay=1&rel=0"
      />

      {featureSections.map((section) => (
        <section
          className={`homev2__feature${
            section.reverse ? " homev2__feature--reverse" : ""
          }${section.surface === "soft" ? " homev2__feature--soft" : ""}`}
          key={section.title}
        >
          <div className="section__inner homev2__feature-inner">
            <Reveal as="div" className="homev2__feature-media" variant="grow">
              {section.video ? (
                <video
                  aria-label={section.imageAlt}
                  autoPlay
                  className="homev2__feature-video"
                  loop
                  muted
                  playsInline
                  poster={section.poster}
                  preload="metadata"
                >
                  <source src={section.video} type="video/mp4" />
                </video>
              ) : (
                <Image
                  alt={section.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src={section.image}
                />
              )}
            </Reveal>

            <div className="homev2__feature-copy">
              <Reveal as="h2" variant="clip-up">
                {section.title}
              </Reveal>
              <Reveal as="p" delay={90} variant="fade">
                {section.body}
              </Reveal>

              {section.bullets ? (
                <Reveal
                  as="ul"
                  className="homev2__bullet-list"
                  delay={150}
                  variant="fade-up"
                >
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </Reveal>
              ) : null}

              <Reveal delay={220} variant="fade-up">
                <WhatsAppLink className="homev2__button homev2__button--secondary">
                  Fale com um especialista
                </WhatsAppLink>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="homev2__reveal-band">
        <video
          aria-hidden="true"
          autoPlay
          className="homev2__reveal-video"
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/reference/fundobg-agencia5.jpg"
        >
          <source src="/assets/reference/reveal-loop.mp4" type="video/mp4" />
        </video>
        <div className="homev2__reveal-overlay" />
        <div className="section__inner homev2__reveal-inner">
          <Reveal delay={60} variant="fade-up">
            <VideoDialog
              buttonLabel="Assistir agora"
              className="homev2__reveal-play"
              embedUrl="https://www.youtube.com/embed/2MEE7kjpYX4?autoplay=1&rel=0"
              title="As 5 estratégias que estão funcionando hoje"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 2l10 6-10 6V2z"/></svg>
              Assistir agora
            </VideoDialog>
          </Reveal>
          <Reveal as="h2" delay={140} variant="clip-up">
            Revelamos quais são as únicas 5 estratégias de marketing digital
            que estão funcionando hoje
          </Reveal>
        </div>
      </section>

      <section className="homev2__services" id="services">
        <div className="homev2__services-inner">
          <div className="homev2__section-heading homev2__section-heading--center">
            <Reveal as="h2" variant="clip-up">
              A nova geração de estratégias de marketing para sua empresa:
            </Reveal>
          </div>

          <div className="homev2__service-grid">
            {serviceCards.map((item, index) => (
              <Reveal
                as="article"
                className="homev2__service-card"
                delay={index * 80}
                key={item.title}
                variant="fade-up"
              >
                <div className="homev2__service-card-image">
                  <Image
                    alt={item.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 20vw"
                    src={item.image}
                  />
                </div>
                <div className="homev2__service-card-overlay" />
                <div className="homev2__service-card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="homev2__marquees" aria-label="Mensagens de destaque">
        <div className="homev2__marquee homev2__marquee--dark">
          <div className="homev2__marquee-track">
            <span>Aumente suas vendas</span>
            <span>Aumente suas vendas</span>
            <span>Aumente suas vendas</span>
            <span>Aumente suas vendas</span>
          </div>
        </div>
        <div className="homev2__marquee homev2__marquee--light">
          <div className="homev2__marquee-track homev2__marquee-track--reverse">
            <span>Cresca sua empresa</span>
            <span>Cresca sua empresa</span>
            <span>Cresca sua empresa</span>
            <span>Cresca sua empresa</span>
          </div>
        </div>
      </section>

      <section className="homev2__trust">
        <div className="section__inner homev2__trust-grid">
          {trustCards.map((item, index) => (
            <Reveal
              as="article"
              className={`homev2__trust-card${
                item.accent ? " homev2__trust-card--accent" : ""
              }`}
              delay={index * 100}
              key={item.title}
              variant="fade-up"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="homev2__trust-card-animation">
                <LottiePlayer
                  className="homev2__trust-card-lottie"
                  speed={item.animationSpeed}
                  src={item.animation}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="homev2__portfolio" id="portfolio">
        <div className="section__inner">
          <div className="homev2__section-heading homev2__section-heading--center">
            <Reveal as="h2" variant="clip-up">
              Confira alguns dos vídeos incríveis que já criamos:
            </Reveal>
            <Reveal as="p" delay={100} variant="fade">
              Dê o play e veja como um vídeo em animação apresenta todos os
              benefícios e diferenciais do seu produto de forma clara, rápida e
              dinâmica.
            </Reveal>
          </div>

          <div className="homev2__portfolio-grid">
            {portfolioItems.map((item, index) => (
              <Reveal
                as="article"
                className="homev2__portfolio-card"
                delay={index * 90}
                key={item.title}
                variant="fade-up"
              >
                <VideoDialog
                  buttonLabel={`Assistir ${item.title}`}
                  className="homev2__portfolio-trigger"
                  embedUrl={item.videoUrl}
                  title={item.title}
                >
                  <span className="homev2__portfolio-trigger-badge" aria-hidden="true">
                    <span />
                  </span>
                </VideoDialog>
                <div className="homev2__portfolio-thumb">
                  <Image
                    alt={item.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    src={item.image}
                  />
                </div>
                <div className="homev2__portfolio-copy">
                  <h3>
                    {item.title} <span>{item.duration}</span>
                  </h3>
                  <p>{item.subtitle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="homev2__social-proof">
        <div className="section__inner homev2__social-proof-inner">
          <Reveal as="h2" delay={80} variant="clip-up">
            <span className="homev2__social-proof-line">
              Mais de <strong>3763</strong> clientes
            </span>
            <span className="homev2__social-proof-line homev2__social-proof-line--with-avatars">
              atendidos
              <span className="homev2__avatar-row" aria-hidden="true">
                <Image
                  alt=""
                  height={96}
                  src="/assets/reference/vinicius-rockenbach.webp"
                  width={96}
                />
                <Image
                  alt=""
                  height={96}
                  src="/assets/reference/diogo-sampaio-case-da-vfx-produtora-de-videos-institucionais-animados-03-1.webp"
                  width={96}
                />
                <Image
                  alt=""
                  height={96}
                  src="/assets/reference/dimas-medcloud.webp"
                  width={96}
                />
              </span>
            </span>
          </Reveal>
          <Reveal as="p" delay={150} variant="fade">
            A maior produtora de vídeos para marketing do Brasil agora é uma
            agência de videomarketing de performance.
          </Reveal>
        </div>
      </section>

      <section className="homev2__enterprise-strip" aria-label="Marcas atendidas">
        <div className="section__inner homev2__enterprise-grid">
          {enterpriseLogos.map((item, index) => (
            <Reveal
              as="div"
              className="homev2__enterprise-item"
              delay={index * 55}
              key={item.title}
              variant="fade-up"
            >
              <Image
                alt={item.title}
                height={item.height}
                sizes="(max-width: 768px) 40vw, 12vw"
                src={item.image}
                width={item.width}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="homev2__chilli">
        <div className="section__inner homev2__chilli-inner">
          <div className="homev2__chilli-copy">
            <Reveal as="p" className="homev2__eyebrow" variant="fade-up">
              Parceria de sucesso
            </Reveal>
            <Reveal as="h2" delay={80} variant="clip-up">
              VFX e Chilli Beans
            </Reveal>
            <Reveal as="p" delay={150} variant="fade">
              Faça como a Chilli Beans, um dos maiores cases do
              empreendedorismo nacional, e venha ser nosso cliente também.
            </Reveal>
            <Reveal delay={220} variant="fade-up">
              <WhatsAppLink className="homev2__button homev2__button--primary">
                Quero ser um caso de sucesso também
              </WhatsAppLink>
            </Reveal>
          </div>

          <Reveal as="div" className="homev2__chilli-media" delay={120} variant="grow">
            <Image
              alt="Case de sucesso da VFX com a Chilli Beans"
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              src="/assets/reference/imagem-caito2.jpg"
            />
            <div className="homev2__chilli-play">
              <VideoDialog
                buttonLabel="Assistir case"
                className="homev2__play-button homev2__play-button--dark"
                embedUrl="https://www.youtube.com/embed/ylHH4BTcKiA?autoplay=1&rel=0"
                title="Parceria de sucesso: VFX e Chilli Beans"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="homev2__testimonials">
        <div className="section__inner homev2__testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal
              as="article"
              className="homev2__testimonial-card"
              delay={index * 100}
              key={item.name}
              variant="fade-up"
            >
              <div className="homev2__testimonial-person">
                <Image alt={item.name} height={72} src={item.image} width={72} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
              <blockquote>{`"${item.quote}"`}</blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="homev2__experts">
        <div className="section__inner">
          <div className="homev2__section-heading">
            <Reveal as="h2" variant="clip-up">
              Trabalhando conosco sua empresa contará com um time de experts:
            </Reveal>
          </div>

          <div className="homev2__experts-grid">
            {expertCards.map((item, index) => (
              <Reveal
                as="article"
                className="homev2__expert-card"
                delay={index * 90}
                key={item.title}
                variant="fade-up"
              >
                <div className="homev2__expert-image">
                  <Image
                    alt={item.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    src={item.image}
                  />
                </div>
                <div className="homev2__expert-copy">
                  <span className="homev2__expert-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" role="presentation">
                      <path d={item.iconPath} />
                    </svg>
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="homev2__package">
        <div className="section__inner">
          <div className="homev2__section-heading homev2__section-heading--center">
            <Reveal as="h2" variant="fade-up">
              Uma equipe de especialistas trabalhando para sua empresa pelo
              preço de{" "}
              <ScribbleText variant="squiggle2">
                um funcionário:
              </ScribbleText>
            </Reveal>
          </div>

          <div className="homev2__package-grid" id="contato">
            <Reveal as="div" className="homev2__package-copy" variant="fade-up">
              <p className="homev2__eyebrow">Pacote Agência VFX</p>
              <ul className="homev2__package-list">
                <li>Criação de vídeos</li>
                <li>Campanhas de anúncios</li>
                <li>Presença nas redes sociais focada em resultados</li>
                <li>Estruturação de funil de vendas e métricas</li>
                <li>Automação de marketing com WhatsApp</li>
                <li>Páginas de venda e landing pages</li>
                <li>Reuniões de estratégia e consultoria</li>
              </ul>
              <WhatsAppLink className="homev2__button homev2__button--light">
                Eu quero
              </WhatsAppLink>
            </Reveal>

            <Reveal
              as="div"
              className="homev2__package-side"
              delay={130}
              variant="fade-up"
            >
              <h2>Que tal começar agora?</h2>
              <p>
                Preencha o formulário para solicitar um contato de nossa equipe
                ou fale direto conosco pelo WhatsApp.
              </p>
              <WhatsAppLink className="homev2__button homev2__button--secondary">
                Fale com um especialista
              </WhatsAppLink>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
