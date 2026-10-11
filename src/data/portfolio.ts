export type Locale = 'en' | 'pt';

type Project = {
  name: string;
  kind: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  metric?: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
};

type PortfolioCopy = {
  pageTitle: string;
  description: string;
  navigation: { about: string; work: string; experience: string; expertise: string; contact: string };
  languageLabel: string;
  switchLanguage: string;
  hero: { label: string; headline: string; intro: string; facts: string[]; projects: string; contact: string };
  projects: { label: string; title: string; intro: string; visit: string; otherLabel: string };
  experiences: { label: string; title: string; intro: string };
  expertise: { label: string; title: string; groups: { label: string; items: string[] }[] };
  contact: { label: string; title: string; intro: string; email: string; linkedin: string; github: string };
  footer: string;
  projectsList: Project[];
  experiencesList: Experience[];
};

const external = {
  imobi: 'https://play.google.com/store/apps/details?id=com.neosoftapps.homefolder',
  inventory: 'https://www.fab.com/listings/6620c276-9dfb-46c6-94c7-fa491eadb438',
  interaction: 'https://www.fab.com/listings/a313d8db-56b1-4a05-b8fa-1afbf89297ee',
  economy: 'https://www.fab.com/listings/824c128b-d896-4cbc-b349-e76bff9427f9',
  frontline: 'https://store.steampowered.com/app/1772220/FRONTLINE/',
  fries: 'https://www.fab.com/listings/afa21a0c-a7a2-4e71-a0f6-c1ef93ad7598',
};

export const portfolio: Record<Locale, PortfolioCopy> = {
  en: {
    pageTitle: 'José Nunes — Gameplay Engineer',
    description: 'Gameplay Engineer building scalable systems, tools, and products with Unreal Engine and beyond.',
    navigation: { about: 'About', work: 'Work', experience: 'Experience', expertise: 'Expertise', contact: 'Contact' },
    languageLabel: 'Language',
    switchLanguage: 'Português',
    hero: {
      label: 'Gameplay Engineer · Brazil / Global',
      headline: 'Systems that make ambitious games feel possible.',
      intro: 'José Nunes is a Gameplay Engineer with 5+ years of experience building production-ready gameplay systems, reusable tools, and mobile products. He is Lead Developer & Game Designer at Neo Soft Entertainment.',
      facts: ['Unreal Engine & C++', 'Multiplayer systems', 'Product-minded development'],
      projects: 'Selected work',
      contact: 'Get in touch',
    },
    projects: {
      label: 'Selected work',
      title: 'Built for players. Designed to scale.',
      intro: 'From map-first mobile products to replicated gameplay frameworks, each project connects clear player-facing experiences with maintainable technical foundations.',
      visit: 'Visit project',
      otherLabel: 'More selected work',
    },
    experiences: {
      label: 'Experience',
      title: 'Hands-on work across teams, platforms, and systems.',
      intro: 'A compact record of building gameplay, leading delivery, and collaborating remotely with multidisciplinary teams.',
    },
    expertise: {
      label: 'Technical perspective',
      title: 'Engineering that stays useful after the feature ships.',
      groups: [
        { label: 'Gameplay systems', items: ['Replication & multiplayer', 'EOS & matchmaking', 'Gameplay Ability System', 'Common UI & Enhanced Input', 'AI, UI & game design'] },
        { label: 'Languages & engines', items: ['C++', 'C#', 'Blueprint', 'Verse', 'Python & Shell', 'Unreal Engine & Unity'] },
        { label: 'Workflow', items: ['Git & GitHub', 'Perforce, Diversion & SVN', 'Rider, VS Code & Android Studio', 'CI/CD & cybersecurity', 'Debugging & troubleshooting'] },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Get in touch.',
      intro: 'For gameplay engineering, technical collaboration, or a good systems conversation.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: '© 2026 José Nunes. Built with care.',
    projectsList: [
      { name: 'Imóbi', kind: 'Mobile marketplace', description: 'A map-first real-estate marketplace for discovering, publishing, and managing properties. Built around a clear mobile experience and scalable marketplace flows.', tags: ['Android', 'Mobile UI', 'App architecture', 'CI/CD'], href: external.imobi, image: '/projects/imobi.png', imageAlt: 'Imóbi app graphic', featured: true },
      { name: 'Universal Inventory System', kind: 'Unreal Engine plugin', description: 'A replicated, extensible inventory framework for storing and managing any item type, with weight and integration systems.', tags: ['C++', 'Blueprint', 'Replication'], href: external.inventory, image: '/projects/inventory.jpg', imageAlt: 'Universal Inventory System preview' },
      { name: 'Universal Interaction System', kind: 'Unreal Engine plugin', description: 'A documented replicated interaction framework that validates and executes gameplay interactions simply and reliably.', tags: ['C++', 'Blueprint', 'Replication'], href: external.interaction, image: '/projects/interaction.jpg', imageAlt: 'Universal Interaction System preview' },
      { name: 'Universal Economy System', kind: 'Unreal Engine plugin', description: 'A multiplayer-ready economy layer for currencies, player money, storage methods, and game-specific monetary systems.', tags: ['C++', 'Blueprint', 'Replication'], href: external.economy, image: '/projects/economy.jpg', imageAlt: 'Universal Economy System preview' },
      { name: 'FRONTLINE', kind: 'Tactical shooter', description: 'Gameplay work for a competitive tactical shooter, spanning multiplayer systems, EOS matchmaking, Steam integration, UI, and replicated game state.', tags: ['Unreal Engine', 'C++', 'EOS', 'GAS'], href: external.frontline, image: '/projects/frontline.jpg', imageAlt: 'FRONTLINE game key art', metric: '14k+ Steam wishlists' },
      { name: 'Fries Library', kind: 'Engine tools', description: 'A C++ utility library that fills practical Unreal Engine gaps with developer-focused functions exposed to Blueprint.', tags: ['Unreal Engine', 'C++', 'Blueprint'], href: external.fries, image: '/projects/fries.jpg', imageAlt: 'Fries Library preview' },
    ],
    experiencesList: [
      { company: 'Poseidon Studios', role: 'Pleno Gameplay Engineer', period: 'Jan 2026 — Jun 2026', location: 'Bucharest, Romania · Remote', description: 'Built gameplay features, UI, AI, and scalable frameworks for AA Unreal Engine projects in C++ and Blueprint.' },
      { company: 'Neo Soft Entertainment', role: 'Lead Developer & Game Designer', period: 'Feb 2025 — Present', location: 'Salvador, Brazil · Remote', description: 'Leads multidisciplinary delivery across commercial games and software, connecting technical architecture, gameplay design, and production decisions.' },
      { company: 'Freelance', role: 'Software & Gameplay Developer', period: 'Nov 2022 — Present', location: 'Worldwide · Remote', description: 'Delivers custom games, software, multiplayer systems, backend integrations, and production-ready tooling for distributed clients.' },
    ],
  },
  pt: {
    pageTitle: 'José Nunes — Gameplay Engineer',
    description: 'Gameplay Engineer que desenvolve sistemas escaláveis, ferramentas e produtos com Unreal Engine e além.',
    navigation: { about: 'Sobre', work: 'Projetos', experience: 'Experiência', expertise: 'Conhecimento', contact: 'Contato' },
    languageLabel: 'Idioma',
    switchLanguage: 'English',
    hero: {
      label: 'Gameplay Engineer · Brasil / Global',
      headline: 'Sistemas que tornam jogos ambiciosos possíveis.',
      intro: 'José Nunes é Gameplay Engineer com mais de 5 anos de experiência criando sistemas de gameplay prontos para produção, ferramentas reutilizáveis e produtos mobile. É Lead Developer & Game Designer na Neo Soft Entertainment.',
      facts: ['Unreal Engine & C++', 'Sistemas multiplayer', 'Desenvolvimento orientado a produto'],
      projects: 'Projetos selecionados',
      contact: 'Entre em contato',
    },
    projects: {
      label: 'Projetos selecionados',
      title: 'Feito para jogadores. Projetado para escalar.',
      intro: 'De produtos mobile centrados em mapa a frameworks de gameplay replicados, cada projeto conecta experiências claras para o jogador a uma base técnica sustentável.',
      visit: 'Visitar projeto',
      otherLabel: 'Mais projetos selecionados',
    },
    experiences: {
      label: 'Experiência',
      title: 'Trabalho prático entre equipes, plataformas e sistemas.',
      intro: 'Um histórico conciso de desenvolvimento de gameplay, liderança de entregas e colaboração remota com equipes multidisciplinares.',
    },
    expertise: {
      label: 'Perspectiva técnica',
      title: 'Engenharia que continua útil depois que a feature é entregue.',
      groups: [
        { label: 'Sistemas de gameplay', items: ['Replicação & multiplayer', 'EOS & matchmaking', 'Gameplay Ability System', 'Common UI & Enhanced Input', 'IA, UI & game design'] },
        { label: 'Linguagens & engines', items: ['C++', 'C#', 'Blueprint', 'Verse', 'Python & Shell', 'Unreal Engine & Unity'] },
        { label: 'Fluxo de trabalho', items: ['Git & GitHub', 'Perforce, Diversion & SVN', 'Rider, VS Code & Android Studio', 'CI/CD & segurança cibernética', 'Debugging & troubleshooting'] },
      ],
    },
    contact: {
      label: 'Contato',
      title: 'Entre em contato.',
      intro: 'Para engenharia de gameplay, colaboração técnica ou uma boa conversa sobre sistemas.',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: '© 2026 José Nunes. Feito com cuidado.',
    projectsList: [
      { name: 'Imóbi', kind: 'Marketplace mobile', description: 'Um marketplace imobiliário centrado em mapa para descobrir, publicar e acompanhar imóveis. Construído em torno de uma experiência mobile clara e fluxos de marketplace escaláveis.', tags: ['Android', 'Mobile UI', 'Arquitetura de app', 'CI/CD'], href: external.imobi, image: '/projects/imobi.png', imageAlt: 'Arte do app Imóbi', featured: true },
      { name: 'Universal Inventory System', kind: 'Plugin para Unreal Engine', description: 'Um framework de inventário extensível e replicado para armazenar e gerenciar qualquer tipo de item, com peso e sistemas de integração.', tags: ['C++', 'Blueprint', 'Replicação'], href: external.inventory, image: '/projects/inventory.jpg', imageAlt: 'Prévia do Universal Inventory System' },
      { name: 'Universal Interaction System', kind: 'Plugin para Unreal Engine', description: 'Um framework de interação replicado e documentado que valida e executa interações de gameplay de forma simples e confiável.', tags: ['C++', 'Blueprint', 'Replicação'], href: external.interaction, image: '/projects/interaction.jpg', imageAlt: 'Prévia do Universal Interaction System' },
      { name: 'Universal Economy System', kind: 'Plugin para Unreal Engine', description: 'Uma camada de economia pronta para multiplayer, com moedas, dinheiro do jogador, métodos de armazenamento e sistemas monetários específicos para cada jogo.', tags: ['C++', 'Blueprint', 'Replicação'], href: external.economy, image: '/projects/economy.jpg', imageAlt: 'Prévia do Universal Economy System' },
      { name: 'FRONTLINE', kind: 'Tactical shooter', description: 'Trabalho de gameplay para um shooter tático competitivo, incluindo sistemas multiplayer, matchmaking com EOS, Steam, UI e estado de jogo replicado.', tags: ['Unreal Engine', 'C++', 'EOS', 'GAS'], href: external.frontline, image: '/projects/frontline.jpg', imageAlt: 'Key art de FRONTLINE', metric: '14 mil+ wishlists na Steam' },
      { name: 'Fries Library', kind: 'Ferramentas de engine', description: 'Uma biblioteca de utilitários em C++ que resolve lacunas práticas da Unreal Engine com funções voltadas a desenvolvedores e expostas ao Blueprint.', tags: ['Unreal Engine', 'C++', 'Blueprint'], href: external.fries, image: '/projects/fries.jpg', imageAlt: 'Prévia da Fries Library' },
    ],
    experiencesList: [
      { company: 'Poseidon Studios', role: 'Pleno Gameplay Engineer', period: 'Jan 2026 — Jun 2026', location: 'Bucareste, Romênia · Remoto', description: 'Desenvolveu features de gameplay, UI, IA e frameworks escaláveis para projetos AA em Unreal Engine com C++ e Blueprint.' },
      { company: 'Neo Soft Entertainment', role: 'Lead Developer & Game Designer', period: 'Fev 2025 — Presente', location: 'Salvador, Brasil · Remoto', description: 'Lidera entregas multidisciplinares em games e software comercial, conectando arquitetura técnica, game design e decisões de produção.' },
      { company: 'Freelance', role: 'Desenvolvedor de Software & Gameplay', period: 'Nov 2022 — Presente', location: 'Global · Remoto', description: 'Entrega jogos, software, sistemas multiplayer, integrações de backend e ferramentas prontas para produção a clientes distribuídos.' },
    ],
  },
};
