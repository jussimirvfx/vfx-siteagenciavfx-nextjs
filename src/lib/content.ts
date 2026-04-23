type MediaItem = {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  href?: string;
  ratio?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type CaseStudy = {
  slug: "fumil";
  title: string;
  eyebrow: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  client: string;
  heroImage: MediaItem;
  statItems: Array<{ value: string; label: string }>;
  context: Array<{ title: string; description: string }>;
  deliverables: Array<{ title: string; description: string }>;
  media: MediaItem[];
  resultItems: Array<{ value: string; label: string }>;
};

export type ResourcePage = {
  slug: "kit-super-video-marketing";
  title: string;
  eyebrow: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: MediaItem;
  offerItems: Array<{ title: string; description: string }>;
  deliverables: MediaItem[];
  proofItems: Array<{ title: string; description: string }>;
  testimonialItems: Array<{ quote: string; author: string }>;
  faqItems: FaqItem[];
};

export const homePage = {
  metaTitle: "Agencia VFX - Videomarketing de Performance",
  metaDescription:
    "Videos, anuncios, landing pages e automacao comercial para empresas que querem aumentar vendas com mais previsibilidade.",
  eyebrow: "Videomarketing de performance",
  title: "Videomarketing de resultados",
  description:
    "Combinamos videos, anuncios, landing pages e automacao comercial para transformar interesse em oportunidades qualificadas e vendas.",
  heroVideoUrl: "https://www.youtube.com/watch?v=GbF3SWzioAQ",
  heroVideoImage: {
    title: "Conheca o metodo VFX",
    subtitle: "Assista a apresentacao",
    image: "/assets/solutions/video-card.png",
    alt: "Cartao de video da Agencia VFX",
    ratio: "4 / 3",
  },
  statItems: [
    { value: "10+ anos", label: "de experiencia em marketing e video" },
    { value: "3.000+", label: "clientes atendidos ao longo da jornada" },
    { value: "360°", label: "operacao unindo criacao, midia e conversao" },
  ],
  partnerLogos: [
    { title: "Ambev", image: "/assets/solutions/ambev.webp", alt: "Logo da Ambev" },
    { title: "Campari", image: "/assets/solutions/campari.webp", alt: "Logo da Campari" },
    { title: "Chilli Beans", image: "/assets/solutions/chilli.webp", alt: "Logo da Chilli Beans" },
    { title: "CyberArk", image: "/assets/solutions/cyberark.webp", alt: "Logo da CyberArk" },
    { title: "Dupont", image: "/assets/solutions/dupont.webp", alt: "Logo da Dupont" },
    { title: "Gerdau", image: "/assets/solutions/gerdau.webp", alt: "Logo da Gerdau" },
    { title: "Senior", image: "/assets/solutions/senior.webp", alt: "Logo da Senior" },
    { title: "Unicred", image: "/assets/solutions/unicred.webp", alt: "Logo da Unicred" },
  ],
  valuePillars: [
    {
      title: "Videos que vendem",
      description:
        "Criativos, roteiros e apresentacoes que valorizam a oferta e tornam a mensagem mais clara.",
    },
    {
      title: "Campanhas com intencao",
      description:
        "Estruturamos anuncios para gerar demanda qualificada e aproveitar melhor cada contato captado.",
    },
    {
      title: "Landing pages e automacao",
      description:
        "Cada clique encontra uma pagina objetiva, CTA forte e caminho simples para o WhatsApp.",
    },
    {
      title: "Operacao orientada a metas",
      description:
        "Planejamento, funil, acompanhamento e proximidade comercial para transformar marketing em crescimento.",
    },
  ],
  serviceItems: [
    {
      title: "Videomarketing",
      description: "Estrategia, roteiro, producao e distribuicao de videos para aquisicao e conversao.",
    },
    {
      title: "Campanhas de anuncios",
      description: "Midia paga em Meta, Google e canais aderentes ao momento da sua operacao.",
    },
    {
      title: "Landing pages",
      description: "Paginas de alta conversao, leves e desenhadas para captar demanda com clareza.",
    },
    {
      title: "Automacao com WhatsApp",
      description: "Processos para acelerar resposta, nutricao e encaminhamento comercial.",
    },
    {
      title: "Social media orientado a resultado",
      description: "Conteudo e criativos que fortalecem presenca sem perder o foco em negocio.",
    },
  ],
  showcaseItems: [
    {
      title: "Gramas Santa Maria",
      subtitle: "1:07",
      image: "/assets/home/gramas.jpg",
      alt: "Thumbnail do projeto Gramas Santa Maria",
    },
    {
      title: "Naipi Travel",
      subtitle: "1:04",
      image: "/assets/home/naipi.jpg",
      alt: "Thumbnail do projeto Naipi Travel",
    },
    {
      title: "Topos Work",
      subtitle: "1:19",
      image: "/assets/home/topos.jpg",
      alt: "Thumbnail do projeto Topos Work",
    },
    {
      title: "Industria Brasileira de Servicos",
      subtitle: "0:47",
      image: "/assets/home/industria.jpg",
      alt: "Thumbnail do projeto Industria Brasileira de Servicos",
    },
    {
      title: "Lab2u",
      subtitle: "1:06",
      image: "/assets/home/lab2u.jpg",
      alt: "Thumbnail do projeto Lab2u",
    },
    {
      title: "Briw Telecom",
      subtitle: "0:45",
      image: "/assets/home/briw.jpg",
      alt: "Thumbnail do projeto Briw Telecom",
    },
  ],
  packageItems: [
    "Criacao de videos",
    "Campanhas de anuncios",
    "Presenca em redes sociais focada em negocio",
    "Estruturacao de funil e metricas",
    "Automacao comercial com WhatsApp",
    "Landing pages de alta conversao",
    "Reunioes estrategicas e consultoria",
  ],
};


export const caseStudies: Record<string, CaseStudy> = {
  fumil: {
    slug: "fumil",
    title: "Estudo de Caso - Fumil",
    eyebrow: "Case em destaque",
    description:
      "Como a Agencia VFX combinou videomarketing, landing page, social media e automacao para melhorar marketing e atendimento na Fumil.",
    metaTitle: "Case Fumil | Agencia VFX",
    metaDescription:
      "Veja como a Fumil acelerou marketing e atendimento com videomarketing, landing page, social media e automacao com IA.",
    client: "Fumil (Panela Mineira)",
    heroImage: {
      title: "Fumil",
      subtitle: "Linha de produtos e comunicacao visual",
      image: "/assets/case-fumil/products.jpg",
      alt: "Produtos da Fumil",
      ratio: "16 / 10",
    },
    statItems: [
      { value: "54+", label: "ativos e entregas criadas para a operacao" },
      { value: "10x", label: "evolucao na maturidade de marketing e atendimento" },
      { value: "60 dias", label: "para os primeiros resultados expressivos" },
    ],
    context: [
      {
        title: "O desafio",
        description:
          "A Fumil precisava modernizar marketing, ganhar tracao digital e responder leads com mais velocidade.",
      },
      {
        title: "A abordagem",
        description:
          "O projeto uniu planejamento de marketing digital, mapa de funil, social media, landing page, videomarketing e automacao com IA.",
      },
    ],
    deliverables: [
      {
        title: "Planejamento estrategico de marketing digital",
        description:
          "Mapeamento dos canais, etapas da jornada e prioridades para sair da dependencia de acoes isoladas.",
      },
      {
        title: "Mapeamento do funil",
        description:
          "Definicao visual e operacional de como trafego, conteudo, pagina e atendimento se conectariam.",
      },
      {
        title: "Social media",
        description:
          "Criativos para fortalecer a marca e aumentar a consistencia do material usado na captacao.",
      },
      {
        title: "Landing page e automacao com IA",
        description:
          "Aterrissagem mais clara para a oferta e atendimento mais rapido para leads vindos das campanhas.",
      },
      {
        title: "Videomarketing",
        description:
          "Pecas para explicar melhor a proposta da empresa e elevar percepcao de valor.",
      },
    ],
    media: [
      {
        title: "Landing page",
        image: "/assets/case-fumil/landing-page.png",
        alt: "Landing page criada para a Fumil",
        ratio: "16 / 10",
      },
      {
        title: "Criativo social 1",
        image: "/assets/case-fumil/social-1.jpeg",
        alt: "Criativo de social media da Fumil 1",
        ratio: "1 / 1",
      },
      {
        title: "Criativo social 2",
        image: "/assets/case-fumil/social-2.jpeg",
        alt: "Criativo de social media da Fumil 2",
        ratio: "1 / 1",
      },
      {
        title: "Criativo social 3",
        image: "/assets/case-fumil/social-3.jpeg",
        alt: "Criativo de social media da Fumil 3",
        ratio: "1 / 1",
      },
      {
        title: "Chatbot com IA",
        image: "/assets/case-fumil/chatbot.jpeg",
        alt: "Painel de automacao com chatbot",
        ratio: "16 / 10",
      },
      {
        title: "Automacao comercial",
        image: "/assets/case-fumil/automation.jpeg",
        alt: "Painel de automacao comercial",
        ratio: "16 / 10",
      },
    ],
    resultItems: [
      { value: "494", label: "leads qualificados gerados nos primeiros 60 dias" },
      { value: "114x", label: "melhora no tempo de atendimento" },
      { value: "R$ 150.213,54", label: "em vendas para leads das campanhas" },
    ],
  },
};

export const resourcePages: Record<string, ResourcePage> = {
  "kit-super-video-marketing": {
    slug: "kit-super-video-marketing",
    title: "Kit Super Video Marketing",
    eyebrow: "Recurso comercial",
    description:
      "Uma versao mais leve da antiga pagina de oferta, agora posicionada como recurso de apoio e porta de entrada para conversa com a equipe.",
    metaTitle: "Kit Super Video Marketing | Agencia VFX",
    metaDescription:
      "Conheca o Kit Super Video Marketing e veja como roteiros, plano de divulgacao e apoio estrategico podem acelerar seu marketing.",
    heroImage: {
      title: "Kit Super Video Marketing",
      subtitle: "Ativos do recurso",
      image: "/assets/resource-kit/kit-1.webp",
      alt: "Primeiro item do Kit Super Video Marketing",
      ratio: "1 / 1",
    },
    offerItems: [
      {
        title: "Roteiros pensados para conversao",
        description:
          "Estruturas de mensagem inspiradas no que a VFX vem testando em projetos de marketing e video ao longo dos anos.",
      },
      {
        title: "Plano de divulgacao orientado a acao",
        description:
          "O recurso ajuda a visualizar como distribuir o conteudo e transformar atencao em conversa comercial.",
      },
      {
        title: "Apoio dos especialistas da VFX",
        description:
          "O destino final deixa de ser checkout e passa a ser o WhatsApp, para aprofundar o contexto antes de qualquer proposta.",
      },
    ],
    deliverables: [
      {
        title: "Opcao de roteiro 1",
        subtitle: "Estrutura narrativa",
        image: "/assets/resource-kit/kit-1.webp",
        alt: "Primeiro material do kit",
        ratio: "1 / 1",
      },
      {
        title: "Opcao de roteiro 2",
        subtitle: "Abordagem alternativa",
        image: "/assets/resource-kit/kit-2.webp",
        alt: "Segundo material do kit",
        ratio: "1 / 1",
      },
      {
        title: "Opcao de roteiro 3",
        subtitle: "Variacao de narrativa",
        image: "/assets/resource-kit/kit-3.webp",
        alt: "Terceiro material do kit",
        ratio: "1 / 1",
      },
    ],
    proofItems: [
      {
        title: "Quase 3 mil clientes atendidos",
        description:
          "A pagina original usava esse numero como prova social central, e ele foi mantido como indicio da experiencia acumulada.",
      },
      {
        title: "Experiencia em video, anuncios e paginas",
        description:
          "O kit faz sentido porque nasce de uma operacao que enxerga criacao e distribuicao como partes do mesmo sistema.",
      },
      {
        title: "Compra segura",
        description:
          "Mantivemos o selo visual como elemento de confianca, ainda que a conversao principal agora seja via WhatsApp.",
      },
    ],
    testimonialItems: [
      {
        quote:
          "Nos fomos de 15 novos clientes por mes para mais de 300 com a ajuda de um video animado criado pela equipe da VFX.",
        author: "Cliente VFX",
      },
      {
        quote:
          "Nos surpreendemos com o impacto da apresentacao do video e os resultados estao sendo incriveis.",
        author: "Cliente VFX",
      },
    ],
    faqItems: [
      {
        question: "Para quem este recurso faz sentido?",
        answer:
          "Para empresas que querem entender melhor como usar video e divulgacao para vender com mais clareza e consistencia.",
      },
      {
        question: "O kit substitui uma estrategia completa?",
        answer:
          "Nao. Ele funciona como porta de entrada e apoio. Quando a operacao pede mais profundidade, a conversa segue com a equipe.",
      },
      {
        question: "Posso falar com a VFX antes de seguir?",
        answer:
          "Sim. O CTA principal foi simplificado justamente para isso: abrir uma conversa direta por WhatsApp.",
      },
    ],
  },
};

export const privacyPolicySections = [
  {
    title: "1. Introducao",
    body:
      "A Agencia VFX esta comprometida em proteger a privacidade e os dados pessoais de clientes, usuarios e parceiros. Esta pagina resume como os dados podem ser coletados, usados e protegidos na nova estrutura do site.",
  },
  {
    title: "2. Dados coletados",
    body:
      "Podemos tratar dados enviados voluntariamente pelo usuario em uma conversa comercial, alem de dados tecnicos basicos de navegacao anonimizados para fins operacionais e analiticos.",
    bullets: [
      "Nome, empresa, email, telefone e contexto comercial informado no contato.",
      "Dados tecnicos basicos como IP, navegador, dispositivo e paginas acessadas.",
      "Informacoes compartilhadas por terceiros quando a interacao nasce de uma campanha ou indicacao.",
    ],
  },
  {
    title: "3. Finalidade do tratamento",
    body:
      "Os dados sao usados para responder contatos, qualificar oportunidades, melhorar a experiencia do site, proteger a operacao e acompanhar a efetividade das iniciativas de marketing.",
  },
  {
    title: "4. Base legal",
    body:
      "O tratamento pode ocorrer com base em consentimento, execucao de procedimentos preliminares relacionados a servicos, cumprimento de obrigacoes legais e legitimo interesse em melhorar a operacao comercial.",
  },
  {
    title: "5. Compartilhamento",
    body:
      "Os dados podem ser compartilhados apenas quando necessario para a prestacao de servicos, hospedagem, analytics, seguranca ou cumprimento de obrigacoes legais, sempre buscando fornecedores confiaveis.",
  },
  {
    title: "6. Armazenamento e seguranca",
    body:
      "Adotamos medidas tecnicas e organizacionais razoaveis para reduzir risco de acesso indevido, vazamento, alteracao ou destruicao indevida das informacoes tratadas.",
  },
  {
    title: "7. Direitos do titular",
    body:
      "O titular pode solicitar acesso, correcao, atualizacao, exclusao, informacoes sobre compartilhamento e esclarecimentos sobre o tratamento de dados, observadas as exigencias legais.",
  },
  {
    title: "8. Cookies e tecnologias similares",
    body:
      "No lancamento desta nova versao usamos apenas recursos essenciais e analytics enxuto. Novas tecnologias de rastreamento poderao ser adicionadas futuramente com atualizacao desta politica.",
  },
  {
    title: "9. Transferencia internacional",
    body:
      "Dependendo da infraestrutura utilizada, alguns dados podem ser processados fora do Brasil, com observancia de medidas contratuais e salvaguardas adequadas.",
  },
  {
    title: "10. Contato",
    body:
      "Solicitacoes relacionadas a privacidade podem ser encaminhadas para contato@vfxvideos.com.br ou pelo canal comercial oficial da Agencia VFX.",
  },
];

export const termsOfServiceSections = [
  {
    title: "1. Aceitacao dos termos",
    body:
      "Ao contratar, acessar ou utilizar qualquer servico prestado pela Agencia VFX, o cliente declara estar ciente e de acordo com as condicoes descritas nestes Termos de Servico. Caso nao concorde com alguma clausula, a recomendacao e que a contratacao nao seja efetivada.",
  },
  {
    title: "2. Servicos prestados",
    body:
      "A Agencia VFX atua com producao audiovisual, videos de marketing, trafego pago, landing pages e automacao de marketing com WhatsApp, alem de outras solucoes correlatas que possam ser formalizadas em proposta comercial.",
    bullets: [
      "Producao e edicao de videos para marketing, vendas e institucional.",
      "Planejamento e gestao de campanhas de trafego pago.",
      "Criacao de landing pages orientadas a conversao.",
      "Automacoes de marketing e atendimento com WhatsApp e chatbots.",
    ],
  },
  {
    title: "3. Escopo e proposta comercial",
    body:
      "Cada projeto e regido por uma proposta comercial especifica, que detalha escopo, entregaveis, prazos, valores e condicoes de pagamento. A proposta aceita pelo cliente passa a integrar e complementar estes Termos de Servico.",
  },
  {
    title: "4. Responsabilidades do cliente",
    body:
      "Para a boa execucao do projeto, o cliente se compromete a fornecer informacoes, materiais, aprovacoes e retornos dentro dos prazos acordados, alem de garantir que os conteudos enviados nao violem direitos de terceiros.",
  },
  {
    title: "5. Responsabilidades da Agencia VFX",
    body:
      "A Agencia VFX se compromete a conduzir os trabalhos com diligencia tecnica, transparencia e confidencialidade, seguindo o escopo da proposta aprovada e comunicando previamente qualquer ajuste relevante no planejamento.",
  },
  {
    title: "6. Prazos e cronograma",
    body:
      "Os prazos informados sao estimados e podem variar conforme complexidade do projeto, aprovacoes do cliente, disponibilidade de insumos e eventuais solicitacoes adicionais feitas durante a execucao.",
  },
  {
    title: "7. Pagamentos",
    body:
      "As condicoes de pagamento seguem o descrito na proposta comercial aceita. Atrasos podem implicar em suspensao temporaria dos servicos, acrescimos legais e, em casos recorrentes, encerramento do contrato.",
  },
  {
    title: "8. Propriedade intelectual",
    body:
      "Apos a quitacao integral dos valores acordados, o cliente recebe o direito de uso das entregas finais conforme o escopo da proposta. Arquivos brutos, projetos-fonte e licencas de terceiros permanecem regidos por condicoes especificas descritas em contrato.",
  },
  {
    title: "9. Confidencialidade",
    body:
      "Informacoes estrategicas, comerciais e operacionais trocadas durante o relacionamento sao tratadas com sigilo pelas partes e nao podem ser divulgadas a terceiros sem autorizacao, salvo quando exigidas por obrigacao legal.",
  },
  {
    title: "10. Ausencia de garantia de resultados",
    body:
      "A Agencia VFX nao oferece nenhuma garantia de resultados comerciais, financeiros, de vendas, de faturamento, de audiencia, de engajamento ou de performance em plataformas de terceiros. Eventuais numeros, cases, estimativas e projecoes citados em propostas, reunioes, campanhas ou no proprio site sao referencias ilustrativas baseadas em experiencias anteriores e nao representam qualquer compromisso de retorno futuro.",
  },
  {
    title: "11. Carater informativo dos textos do site",
    body:
      "Todos os textos, numeros, depoimentos, cases e materiais publicados no site da Agencia VFX tem carater exclusivamente informativo e de divulgacao institucional. Nada do que esta publicado nestas paginas constitui promessa, oferta vinculante ou garantia contratual. As condicoes efetivas de qualquer servico serao sempre as descritas na proposta comercial aceita pelo cliente.",
  },
  {
    title: "12. Limitacao de responsabilidade",
    body:
      "A Agencia VFX nao se responsabiliza por performance de plataformas de terceiros (como redes sociais, ferramentas de anuncio, provedores de hospedagem e integracoes externas), por decisoes comerciais tomadas pelo cliente a partir das entregas, nem por eventos de forca maior fora do seu controle razoavel.",
  },
  {
    title: "13. Cancelamento e rescisao",
    body:
      "Qualquer das partes pode encerrar o relacionamento mediante comunicacao formal, respeitando as condicoes e eventuais multas descritas na proposta comercial, alem do pagamento proporcional aos servicos ja executados.",
  },
  {
    title: "14. Alteracoes destes termos",
    body:
      "Estes Termos de Servico podem ser atualizados a qualquer momento para refletir melhorias na operacao, exigencias legais ou mudancas no portfolio de servicos. A versao vigente sempre sera a publicada nesta pagina.",
  },
  {
    title: "15. Contato",
    body:
      "Duvidas sobre estes Termos de Servico podem ser encaminhadas para contato@vfxvideos.com.br ou pelo canal comercial oficial da Agencia VFX.",
  },
];
