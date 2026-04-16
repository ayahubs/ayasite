// ─── Conteúdo do site ────────────────────────────────────────
// Fonte única de verdade — edite aqui para refletir em todo o site.

export const NAV_LINKS = [
  { label: "Home",      href: "#hero"      },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato",   href: "#contact"   },
];

export const HERO = {
  badge: "Código que transforma negócios",
  heading1: "Construímos",
  heading2: "o seu futuro digital",
  description:
    "Somos uma empresa de programação apaixonada por resolver problemas reais com tecnologia. Do primeiro commit à entrega final, cada linha de código tem propósito.",
  cta1: { label: "Iniciar Projeto", href: "#contact"   },
  cta2: { label: "Ver Portfólio",   href: "/portfolio" },
  trust: {
    label: "Confiado por +50 empresas",
    stars: 5,
  },
  stats: [
    { value: "120+", label: "Projetos entregues" },
    { value: "4.9★", label: "Satisfação" },
  ],
  mockup: {
    badge:   "99.9% Uptime",
    chip:    "ARQUITETO DE SISTEMAS",
    status:  "ATIVO",
    message: "Processando dados em tempo real com arquitetura de baixa latência e alta disponibilidade.",
    // Unsplash: developer focused at dual monitors — humanized + tech context
    image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=900&q=85",
  },
};

export const SERVICES = {
  heading: "Engenharia de software\nque acelera o seu negócio",
  subheading:
    "Não apenas desenvolvemos — arquitetamos cada solução com código limpo, escalabilidade real e entrega que cresce junto com a sua visão.",
  items: [
    {
      id: "web",
      slug: "plataformas-web",
      icon: "Globe",
      color: "#10b981",
      bg: "#d1fae5",
      title: "Plataformas Web",
      pageTitle: "Plataformas Web | Ayahubs",
      heroSubtitle: "Sites e plataformas que vendem e encantam",
      heroImage: "/assets/img/portfolio/Site Construtora Litoral - João Pessoa.png",
      description:
        "Sites institucionais, sistemas web, e-commerce e plataformas SaaS construídos para performance máxima e experiências que convertem.",
      overview:
        "Arquitetura moderna, interfaces intuitivas e otimização de desempenho para projetos que crescem com seu negócio.",
      highlights: [
        {
          title: "Conversão otimizada",
          description: "Copy, layout e fluxo preparados para transformar visitantes em clientes.",
        },
        {
          title: "Escalabilidade garantida",
          description: "Plataformas pensadas para crescer sem perder velocidade ou estabilidade.",
        },
      ],
      features: [
        {
          title: "Sites institucionais modernos",
          description: "Posicione sua empresa com páginas limpas, rápidas e fáceis de atualizar.",
        },
        {
          title: "E-commerce performático",
          description: "Loja online integrada e preparada para altas taxas de conversão.",
        },
        {
          title: "Plataformas SaaS",
          description: "Experiências web robustas com autenticação, painel de controle e integrações.",
        },
      ],
      gallery: [
        {
          src: "/assets/img/portfolio/Lotus - Sistema de gestão de documentos.png",
          alt: "Dashboard moderno para plataforma web",
        },
        {
          src: "/assets/img/portfolio/e-Stocki - Sistema de gestão de estoque almoxarifado.png",
          alt: "Tela de gestão e relatórios para plataforma web",
        },
      ],
      tag: "React · Next.js · TypeScript",
    },
    {
      id: "systems",
      slug: "sistemas-sob-medida",
      icon: "Cpu",
      color: "#3b82f6",
      bg: "#dbeafe",
      title: "Sistemas Sob Medida",
      pageTitle: "Sistemas Sob Medida | Ayahubs",
      heroSubtitle: "Automação e backend que resolvem problemas reais",
      heroImage: "/assets/img/portfolio/e-Stocki - Sistema de gestão de estoque almoxarifado.png",
      description:
        "Backends robustos, APIs e automações que eliminam gargalos, conectam times e liberam o potencial real do seu processo.",
      overview:
        "Integramos dados, tarefas e pessoas em sistemas personalizados que reduzem custos e aceleram a tomada de decisão.",
      highlights: [
        {
          title: "APIs eficientes",
          description: "Conecte seu produto a serviços internos, parceiros e automações de forma segura.",
        },
        {
          title: "Automação inteligente",
          description: "Rotinas que eliminam trabalho manual e mantêm sua operação enxuta.",
        },
      ],
      features: [
        {
          title: "API REST / GraphQL",
          description: "Integrações com ERPs, CRMs e serviços externos em uma arquitetura sólida.",
        },
        {
          title: "Painéis de gestão",
          description: "Visibilidade total dos processos com relatórios e indicadores em tempo real.",
        },
        {
          title: "Microserviços e automações",
          description: "Soluções escaláveis para processos críticos sem comprometer a manutenibilidade.",
        },
      ],
      gallery: [
        {
          src: "/assets/img/portfolio/e-Sic sistema de busca  - Prefeitura de Carrapateiras..png",
          alt: "Busca avançada em sistema web sob medida",
        },
        {
          src: "/assets/img/portfolio/Leads Pj - Plataforma de CRM para Whatsapp com Lista de Empresas..png",
          alt: "Sistema de CRM e automação para processos empresariais",
        },
      ],
      tag: "Node.js · APIs · Cloud",
    },
    {
      id: "mobile",
      slug: "apps-mobile",
      icon: "Smartphone",
      color: "#a855f7",
      bg: "#f3e8ff",
      title: "Apps Mobile",
      pageTitle: "Apps Mobile | Ayahubs",
      heroSubtitle: "Aplicativos móveis que conectam marcas a pessoas",
      heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=85",
      description:
        "Experiências nativas e híbridas para iOS e Android com interfaces intuitivas e publicação assistida nas lojas digitais.",
      overview:
        "Desenvolvemos apps que funcionam perfeitamente no dia a dia do usuário e trazem valor real para o seu ecossistema digital.",
      highlights: [
        {
          title: "UX focado em ação",
          description: "Interfaces simples e claras que ajudam o usuário a concluir a jornada desejada.",
        },
        {
          title: "Publicação na App Store e Play Store",
          description: "Acompanhamos o processo de submissão para você lançar o app com confiança.",
        },
      ],
      features: [
        {
          title: "Apps nativos e híbridos",
          description: "React Native, Flutter e soluções cross-platform com alta performance.",
        },
        {
          title: "Notificações e integração mobile",
          description: "Conectamos seu app com backend, chat, pagamentos e serviços externos.",
        },
        {
          title: "Design responsivo para celulares",
          description: "Experiência pensada para telas pequenas, com fluxo intuitivo e rápido.",
        },
      ],
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=85",
          alt: "Interface de aplicativo mobile com design moderno",
        },
        {
          src: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=900&q=85",
          alt: "Pessoa utilizando aplicativo em smartphone",
        },
      ],
      tag: "React Native · Flutter",
    },
    {
      id: "landing",
      slug: "landing-pages",
      icon: "Layout",
      color: "#f59e0b",
      bg: "#fef3c7",
      title: "Landing Pages",
      pageTitle: "Landing Pages & Sites Institucionais | Ayahubs",
      heroSubtitle: "Páginas de alta conversão que transformam visitantes em clientes",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
      description:
        "Landing pages estratégicas, sites institucionais e páginas de captura projetadas para performance, velocidade e resultados mensuráveis.",
      overview:
        "Criamos páginas focadas em conversão com copy persuasiva, design limpo e otimização para mecanismos de busca. Cada detalhe é pensado para guiar o visitante até a ação desejada.",
      highlights: [
        {
          title: "Foco em conversão",
          description: "Estrutura de copy, design e CTAs testados para maximizar suas taxas de conversão.",
        },
        {
          title: "SEO e performance",
          description: "Páginas otimizadas para carregar rápido e ranquear bem nos buscadores.",
        },
      ],
      features: [
        {
          title: "Landing pages de captação",
          description: "Páginas com formulários inteligentes, integração com email marketing e análise de métricas.",
        },
        {
          title: "Sites institucionais profissionais",
          description: "Presença digital moderna com informações claras, blog integrado e gestão de conteúdo.",
        },
        {
          title: "Otimização para Google Ads",
          description: "Páginas preparadas para campanhas pagas com rastreamento de conversões e testes A/B.",
        },
      ],
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=85",
          alt: "Designer criando layout de landing page no computador",
        },
        {
          src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&q=85",
          alt: "Equipe analisando métricas de conversão de página web",
        },
      ],
      tag: "Next.js · Tailwind · SEO",
    },
    {
      id: "design",
      slug: "ui-ux-design",
      icon: "Palette",
      color: "#ec4899",
      bg: "#fce7f3",
      title: "UI/UX Design",
      pageTitle: "UI/UX Design | Ayahubs",
      heroSubtitle: "Interfaces intuitivas que encantam e retêm usuários",
      heroImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=85",
      description:
        "Design de interfaces centradas no usuário, com pesquisa, prototipagem e testes de usabilidade para criar experiências digitais memoráveis.",
      overview:
        "Do wireframe ao protótipo interativo, projetamos cada tela com foco em usabilidade, acessibilidade e consistência visual. Nosso processo reduz retrabalho e aumenta a satisfação do usuário final.",
      highlights: [
        {
          title: "Design centrado no usuário",
          description: "Pesquisa de uso, personas e jornadas para garantir que cada decisão visual resolva um problema real.",
        },
        {
          title: "Prototipagem interativa",
          description: "Protótipos navegáveis em Figma para validar fluxos antes de uma linha de código.",
        },
      ],
      features: [
        {
          title: "Design System completo",
          description: "Componentes reutilizáveis, tokens de cor e tipografia para manter a consistência em todo o produto.",
        },
        {
          title: "Testes de usabilidade",
          description: "Sessões com usuários reais para identificar fricções e oportunidades de melhoria na interface.",
        },
        {
          title: "Redesign de produtos existentes",
          description: "Auditoria visual e funcional do seu produto atual com proposta de evolução baseada em dados.",
        },
      ],
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=85",
          alt: "Designer trabalhando em wireframes e protótipos de interface",
        },
        {
          src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=85",
          alt: "Tela de computador com ferramentas de design UI/UX",
        },
      ],
      tag: "Figma · Design System · UX Research",
    },
    {
      id: "consulting",
      slug: "consultoria-tecnologia",
      icon: "Lightbulb",
      color: "#6366f1",
      bg: "#e0e7ff",
      title: "Consultoria em Tecnologia",
      pageTitle: "Consultoria em Tecnologia | Ayahubs",
      heroSubtitle: "Estratégia técnica para decisões que impactam o futuro do seu negócio",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85",
      description:
        "Consultoria técnica, arquitetura de software e mentoria para equipes que precisam de direção clara antes de investir em desenvolvimento.",
      overview:
        "Ajudamos empresas a tomar decisões técnicas com segurança — da escolha da stack à arquitetura de microsserviços, passando por revisão de código e planejamento de escalabilidade.",
      highlights: [
        {
          title: "Visão estratégica",
          description: "Análise do cenário atual e planejamento técnico alinhado com os objetivos do negócio.",
        },
        {
          title: "Redução de riscos",
          description: "Identificamos gargalos, débitos técnicos e pontos de falha antes que se tornem problemas reais.",
        },
      ],
      features: [
        {
          title: "Arquitetura de software",
          description: "Definição de stack, infraestrutura cloud e padrões de código para projetos novos ou em andamento.",
        },
        {
          title: "Code review e mentoria",
          description: "Revisão técnica do código existente com relatório de melhorias e acompanhamento da equipe.",
        },
        {
          title: "Planejamento de escalabilidade",
          description: "Roadmap técnico para crescer com segurança — de 100 a 100.000 usuários sem surpresas.",
        },
      ],
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=85",
          alt: "Equipe em reunião de planejamento técnico com quadro branco",
        },
        {
          src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=85",
          alt: "Profissional apresentando arquitetura de software para time",
        },
      ],
      tag: "Arquitetura · Cloud · Estratégia",
    },
  ],
};

export const PORTFOLIO = {
  heading: "Trabalhos em Destaque",
  subheading:
    "Uma amostra dos produtos digitais que construímos para nossos parceiros ao redor do mundo.",
  items: [
    {
      id: "esic",
      tag: "PREFEITURA / BUSCA",
      stack: ["Next.js", "Node.js", "PostgreSQL"],
      year: "2023",
      title: "e-Sic — Prefeitura de Carrapateiras",
      description: "Sistema de busca de informações públicas integrado ao portal da transparência municipal.",
      longDescription:
        "A Prefeitura de Carrapateiras precisava modernizar o acesso às informações públicas exigidas pela Lei de Acesso à Informação. Construímos uma plataforma de busca indexada, com filtros por categoria, período e órgão responsável — tornando a transparência municipal tão simples quanto uma pesquisa no Google. O resultado: tempo médio de resposta a cidadãos reduzido em 70% e conformidade total com a legislação federal.",
      image: "/assets/img/portfolio/e-Sic sistema de busca  - Prefeitura de Carrapateiras..png",
      featured: true,
    },
    {
      id: "estocki",
      tag: "GESTÃO DE ESTOQUE",
      stack: ["React", "Node.js", "MySQL"],
      year: "2023",
      title: "e-Stocki — Controle de Almoxarifado",
      description: "Sistema de gestão de estoque e almoxarifado para controle de entradas, saídas e inventário.",
      longDescription:
        "Gestão de estoque em planilhas é sinônimo de erro humano e retrabalho. Para um cliente do setor público, desenvolvemos o e-Stocki: um sistema completo de almoxarifado com controle de entradas, saídas, transferências entre setores e inventário em tempo real. Dashboards visuais mostram o consumo por período e alertas automáticos avisam quando produtos se aproximam do estoque mínimo. Resultado: zero divergências no inventário anual.",
      image: "/assets/img/portfolio/e-Stocki - Sistema de gestão de estoque almoxarifado.png",
      featured: true,
    },
    {
      id: "leadspj",
      tag: "CRM / WHATSAPP",
      stack: ["React", "Node.js", "Redis", "WhatsApp API"],
      year: "2024",
      title: "Leads PJ — CRM com IA para WhatsApp",
      description: "Plataforma de CRM para WhatsApp com lista de empresas e automação de contatos.",
      longDescription:
        "Vendas B2B vivem de prospecção eficiente. O Leads PJ combina uma base de dados com milhares de empresas brasileiras com um CRM integrado ao WhatsApp Business API. O vendedor localiza o prospect, personaliza a abordagem e dispara a conversa sem sair da plataforma. Pipeline visual, histórico de interações e métricas de conversão em tempo real transformaram o processo comercial de todos os clientes que adotaram o produto.",
      image: "/assets/img/portfolio/Leads Pj - Plataforma de CRM para Whatsapp com Lista de Empresas..png",
      featured: true,
    },
    {
      id: "lotus",
      tag: "GESTÃO DE DOCUMENTOS",
      stack: ["React", "Node.js", "S3", "PDF.js"],
      year: "2024",
      title: "Lotus — Gestão de Documentos",
      description: "Sistema para gestão digital de documentos, protocolos e assinaturas eletrônicas.",
      longDescription:
        "Documentos em papel se perdem, atrasam processos e custam caro. O Lotus digitaliza o ciclo de vida completo de documentos institucionais: upload, categorização automática, versionamento, controle de acesso por setor e assinatura eletrônica integrada. Um recurso de busca full-text permite localizar qualquer documento em segundos. Implantado em órgãos públicos regionais com mais de 50 mil documentos indexados no primeiro mês.",
      image: "/assets/img/portfolio/Lotus - Sistema de gestão de documentos.png",
      featured: false,
    },
    {
      id: "litoral",
      tag: "SITE INSTITUCIONAL",
      stack: ["React", "Vite", "Tailwind CSS"],
      year: "2024",
      title: "Construtora Litoral — Presença Digital",
      description: "Site institucional responsivo para construtora, com portfólio de obras e integração de contato.",
      longDescription:
        "Uma construtora de João Pessoa precisava de uma presença digital à altura dos empreendimentos que entrega. Criamos um site institucional com galeria de obras, página de lançamentos, formulário de interesse integrado ao WhatsApp e otimização para SEO local. O design transmite solidez e sofisticação, com animações sutis que guiam o visitante da inspiração até o contato. Triplicou os leads orgânicos em 60 dias após o lançamento.",
      image: "/assets/img/portfolio/Site Construtora Litoral - João Pessoa.png",
      featured: false,
    },
  ],
};

export const WHY_US = {
  heading: "Confiança construída\nlinha por linha.",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
  stats: [
    { value: "120+", label: "Projetos"  },
    { value: "50+",  label: "Clientes"  },
    { value: "5",    label: "Anos"      },
    { value: "4.9★", label: "Avaliação" },
  ],
  items: [
    {
      id: "tech",
      icon: "Zap",
      color: "#3b82f6",
      bg: "#dbeafe",
      title: "Tecnologia de Ponta",
      description:
        "Estamos na fronteira. Do backend de alta performance à computação em borda, utilizamos as stacks mais avançadas e seguras do mercado.",
    },
    {
      id: "design",
      icon: "Layers",
      color: "#10b981",
      bg: "#d1fae5",
      title: "Design com Propósito",
      description:
        "Código sem empatia é apenas lógica. Cada interface é projetada para humanos, garantindo experiências fluidas e memoráveis.",
    },
    {
      id: "agile",
      icon: "RefreshCw",
      color: "#f59e0b",
      bg: "#fef3c7",
      title: "Entrega Iterativa",
      description:
        "Velocidade é uma funcionalidade. Nosso processo ágil garante progresso real toda semana, não todo mês.",
    },
  ],
};

export const CONTACT = {
  heading: "Vamos Construir Juntos",
  subheading:
    "Pronto para transformar sua ideia em realidade? Nossa equipe entra em contato em até 24 horas.",
  benefits: [
    { icon: "Clock",        text: "Resposta em até 24 horas"       },
    { icon: "Lock",         text: "Sigilo e confidencialidade"      },
    { icon: "CheckCircle2", text: "Orçamento sem compromisso"       },
    { icon: "Users",        text: "Time dedicado ao seu projeto"    },
  ],
};

export const FOOTER = {
  logo: "Ayahubs",
  tagline:
    "Transformamos ideias em produtos digitais com engenharia séria e criatividade. Baseados no Brasil, entregamos para o mundo.",
  year: 2024,
  columns: [
    {
      heading: "Empresa",
      links: [
        { label: "Política de Privacidade", href: "/politica-de-privacidade" },
        { label: "Termos de Uso",           href: "/termos-de-uso" },
      ],
    },
    {
      heading: "Social",
      links: [
        { label: "LinkedIn", href: "#" },
        { label: "GitHub",   href: "https://github.com/ayahubs", target: "_blank" },
      ],
    },
  ],
};
