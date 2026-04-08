export const siteConfig = {
  name: "VFX Videos",
  legalName: "VFX Produtora de Videos",
  shortDescription:
    "Videos profissionais para empresas que querem gerar credibilidade, explicar melhor sua oferta e vender com mais clareza.",
  description:
    "Produtora especializada em videos institucionais, videos animados, videos para ads e conteudos visuais para empresas que precisam se destacar no mercado.",
  url: "https://agenciavfx.com.br",
  locale: "pt_BR",
  email: "contato@vfxvideos.com.br",
  phoneDisplay: "+55 47 9106-4338",
  phoneHref: "+554791064338",
  whatsappMessage:
    "Ola, vim atraves do site da Agencia VFX e gostaria de mais informacoes.",
  city: "Santa Catarina - Brasil",
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Cases", href: "/cases/fumil" },
    { label: "Recursos", href: "/recursos/kit-super-video-marketing" },
    { label: "Contato", href: "/contato" },
  ],
  footerLinks: [
    { label: "Politica de Privacidade", href: "/politica-de-privacidade" },
    { label: "Case Fumil", href: "/cases/fumil" },
  ],
  socials: [
    { label: "WhatsApp", href: "https://wa.me/554791064338" },
    { label: "Instagram", href: "https://www.instagram.com/vfx.videos" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/vfx-v%C3%ADdeos",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCplYcvjlfGTB6yRodOaFFPg",
    },
  ],
} as const;

export function createWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/554791064338?text=${text}`;
}
