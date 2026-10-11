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
  hero: { headline: string; intro: string; projects: string; contact: string };
  projects: { title: string; intro: string; visit: string; otherLabel: string };
  experiences: { title: string; intro: string };
  expertise: { title: string; groups: { label: string; items: string[] }[] };
  contact: { title: string; intro: string; email: string; linkedin: string; github: string };
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
      headline: 'José Nunes',
      intro: 'I am a Gameplay Engineer with 5+ years of experience building production-ready gameplay systems, reusable tools, and mobile products. I work as Lead Developer & Game Designer at Neo Soft Entertainment.',
      projects: 'Selected work',
      contact: 'Get in touch',
    },
    projects: {
      title: 'Projects',
      intro: 'From map-first mobile products to replicated gameplay frameworks, I build clear player-facing experiences on maintainable technical foundations.',
      visit: 'Visit project',
      otherLabel: 'More selected work',
    },
    experiences: {
      title: 'Career',
      intro: 'My experience building gameplay, leading delivery, and collaborating remotely with multidisciplinary teams.',
    },
    expertise: {
      title: 'Technical Knowledge',
      groups: [
        { label: 'Gameplay systems', items: ['Replication & multiplayer', 'EOS & matchmaking', 'Gameplay Ability System', 'Common UI & Enhanced Input', 'AI, UI & game design'] },
        { label: 'Languages & engines', items: ['C++', 'C#', 'Blueprint', 'Verse', 'Python & Shell', 'Unreal Engine & Unity'] },
        { label: 'Workflow', items: ['Git & GitHub', 'Perforce, Diversion & SVN', 'Rider, VS Code & Android Studio', 'CI/CD & cybersecurity', 'Debugging & troubleshooting'] },
      ],
    },
    contact: {
      title: 'Get in touch.',
      intro: 'For gameplay engineering, technical collaboration, or a good systems conversation.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: '© 2026 José Nunes.',
    projectsList: [
      { name: 'Imóbi', kind: 'Mobile App', description: 'I developed a map-first real-estate marketplace for discovering, publishing, and managing properties, with a clear mobile experience and scalable marketplace flows.', tags: ['Android', 'Mobile UI', 'App architecture', 'CI/CD'], href: external.imobi, image: '/projects/imobi.png', imageAlt: 'Imóbi app graphic', featured: true },
      { name: 'Universal Inventory System', kind: 'Plugin', description: 'I developed a replicated, extensible inventory framework for storing and managing any item type, with weight and integration systems.', tags: ['C++', 'Blueprint', 'Replication'], href: external.inventory, image: '/projects/inventory.jpg', imageAlt: 'Universal Inventory System preview' },
      { name: 'Universal Interaction System', kind: 'Plugin', description: 'I developed a documented replicated interaction framework that validates and executes gameplay interactions simply and reliably.', tags: ['C++', 'Blueprint', 'Replication'], href: external.interaction, image: '/projects/interaction.jpg', imageAlt: 'Universal Interaction System preview' },
      { name: 'Universal Economy System', kind: 'Plugin', description: 'I developed a multiplayer-ready economy layer for currencies, player money, storage methods, and game-specific monetary systems.', tags: ['C++', 'Blueprint', 'Replication'], href: external.economy, image: '/projects/economy.jpg', imageAlt: 'Universal Economy System preview' },
      { name: 'FRONTLINE', kind: 'Tactical shooter', description: 'I worked on gameplay for a competitive tactical shooter, including multiplayer systems, EOS matchmaking, Steam integration, UI, and replicated game state.', tags: ['Unreal Engine', 'C++', 'EOS', 'GAS'], href: external.frontline, image: '/projects/frontline.jpg', imageAlt: 'FRONTLINE game key art', metric: '14k+ Steam wishlists' },
      { name: 'Fries Library', kind: 'Engine tools', description: 'I developed a C++ utility library that fills practical Unreal Engine gaps with developer-focused functions exposed to Blueprint.', tags: ['Unreal Engine', 'C++', 'Blueprint'], href: external.fries, image: '/projects/fries.jpg', imageAlt: 'Fries Library preview' },
    ],
    experiencesList: [
      { company: 'Poseidon Studios', role: 'Pleno Gameplay Engineer', period: 'Jan 2026 — Jun 2026', location: 'Bucharest, Romania · Remote', description: 'I built gameplay features, UI, AI, and scalable frameworks for AA Unreal Engine projects in C++ and Blueprint.' },
      { company: 'Neo Soft Entertainment', role: 'Lead Developer & Game Designer', period: 'Feb 2025 — Present', location: 'Salvador, Brazil · Remote', description: 'I lead multidisciplinary delivery across commercial games and software, connecting technical architecture, gameplay design, and production decisions.' },
      { company: 'Freelance', role: 'Software & Gameplay Developer', period: 'Nov 2022 — Present', location: 'Worldwide · Remote', description: 'I develop custom games, software, multiplayer systems, backend integrations, and production-ready tooling for distributed clients.' },
    ],
  },
  pt: {
    pageTitle: 'José Nunes — Gameplay Engineer',
    description: 'Gameplay Engineer que desenvolve sistemas escaláveis, ferramentas e produtos com Unreal Engine e além.',
    navigation: { about: 'Sobre', work: 'Projetos', experience: 'Experiência', expertise: 'Conhecimento', contact: 'Contato' },
    languageLabel: 'Idioma',
    switchLanguage: 'English',
    hero: {
      headline: 'José Nunes',
      intro: 'Sou Gameplay Engineer com mais de 5 anos de experiência criando sistemas de gameplay prontos para produção, ferramentas reutilizáveis e produtos mobile. Trabalho como Lead Developer & Game Designer na Neo Soft Entertainment.',
      projects: 'Projetos selecionados',
      contact: 'Entre em contato',
    },
    projects: {
      title: 'Projetos',
      intro: 'De produtos mobile centrados em mapa a frameworks de gameplay replicados, desenvolvo experiências claras para o jogador sobre uma base técnica sustentável.',
      visit: 'Visitar projeto',
      otherLabel: 'Mais projetos selecionados',
    },
    experiences: {
      title: 'Carreira',
      intro: 'Minha experiência no desenvolvimento de gameplay, na liderança de entregas e na colaboração remota com equipes multidisciplinares.',
    },
    expertise: {
      title: 'Conhecimento Técnico',
      groups: [
        { label: 'Sistemas de gameplay', items: ['Replicação & multiplayer', 'EOS & matchmaking', 'Gameplay Ability System', 'Common UI & Enhanced Input', 'IA, UI & game design'] },
        { label: 'Linguagens & engines', items: ['C++', 'C#', 'Blueprint', 'Verse', 'Python & Shell', 'Unreal Engine & Unity'] },
        { label: 'Fluxo de trabalho', items: ['Git & GitHub', 'Perforce, Diversion & SVN', 'Rider, VS Code & Android Studio', 'CI/CD & segurança cibernética', 'Debugging & troubleshooting'] },
      ],
    },
    contact: {
      title: 'Entre em contato.',
      intro: 'Para engenharia de gameplay, colaboração técnica ou uma boa conversa sobre sistemas.',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: '© 2026 José Nunes.',
    projectsList: [
      { name: 'Imóbi', kind: 'App Mobile', description: 'Desenvolvi um marketplace imobiliário centrado em mapa para descobrir, publicar e acompanhar imóveis, com uma experiência mobile clara e fluxos escaláveis.', tags: ['Android', 'Mobile UI', 'Arquitetura de app', 'CI/CD'], href: external.imobi, image: '/projects/imobi.png', imageAlt: 'Arte do app Imóbi', featured: true },
      { name: 'Universal Inventory System', kind: 'Plugin', description: 'Desenvolvi um framework de inventário extensível e replicado para armazenar e gerenciar qualquer tipo de item, com peso e sistemas de integração.', tags: ['C++', 'Blueprint', 'Replicação'], href: external.inventory, image: '/projects/inventory.jpg', imageAlt: 'Prévia do Universal Inventory System' },
      { name: 'Universal Interaction System', kind: 'Plugin', description: 'Desenvolvi um framework de interação replicado e documentado que valida e executa interações de gameplay de forma simples e confiável.', tags: ['C++', 'Blueprint', 'Replicação'], href: external.interaction, image: '/projects/interaction.jpg', imageAlt: 'Prévia do Universal Interaction System' },
      { name: 'Universal Economy System', kind: 'Plugin', description: 'Desenvolvi uma camada de economia pronta para multiplayer, com moedas, dinheiro do jogador, métodos de armazenamento e sistemas monetários específicos para cada jogo.', tags: ['C++', 'Blueprint', 'Replicação'], href: external.economy, image: '/projects/economy.jpg', imageAlt: 'Prévia do Universal Economy System' },
      { name: 'FRONTLINE', kind: 'Tactical shooter', description: 'Trabalhei no gameplay de um shooter tático competitivo, incluindo sistemas multiplayer, matchmaking com EOS, Steam, UI e estado de jogo replicado.', tags: ['Unreal Engine', 'C++', 'EOS', 'GAS'], href: external.frontline, image: '/projects/frontline.jpg', imageAlt: 'Key art de FRONTLINE', metric: '14 mil+ wishlists na Steam' },
      { name: 'Fries Library', kind: 'Ferramentas de engine', description: 'Desenvolvi uma biblioteca de utilitários em C++ que resolve lacunas práticas da Unreal Engine com funções voltadas a desenvolvedores e expostas ao Blueprint.', tags: ['Unreal Engine', 'C++', 'Blueprint'], href: external.fries, image: '/projects/fries.jpg', imageAlt: 'Prévia da Fries Library' },
    ],
    experiencesList: [
      { company: 'Poseidon Studios', role: 'Pleno Gameplay Engineer', period: 'Jan 2026 — Jun 2026', location: 'Bucareste, Romênia · Remoto', description: 'Desenvolvi features de gameplay, UI, IA e frameworks escaláveis para projetos AA em Unreal Engine com C++ e Blueprint.' },
      { company: 'Neo Soft Entertainment', role: 'Lead Developer & Game Designer', period: 'Fev 2025 — Presente', location: 'Salvador, Brasil · Remoto', description: 'Lidero entregas multidisciplinares em games e software comercial, conectando arquitetura técnica, game design e decisões de produção.' },
      { company: 'Freelance', role: 'Desenvolvedor de Software & Gameplay', period: 'Nov 2022 — Presente', location: 'Global · Remoto', description: 'Desenvolvo jogos, software, sistemas multiplayer, integrações de backend e ferramentas prontas para produção para clientes distribuídos.' },
    ],
  },
};
