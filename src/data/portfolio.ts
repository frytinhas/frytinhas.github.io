import project1 from '../../ext/frontline_.png'
import project2 from '../../ext/endz_.png'
import project3 from '../../ext/imóbi.png'

export type LocalizedString = {
  en: string
  pt: string
}

export interface FeaturedPortfolioProject {
  id: string
  title: LocalizedString
  subtitle: LocalizedString
  description: LocalizedString
  contributions: LocalizedString[]
  highlights: string[]
  media?: {
    image?: string
    alt: LocalizedString
  }
  caseStudyUrl?: string
  demoUrl?: string
}

export interface PluginTool {
  id: string
  title: string
  description: LocalizedString
  highlights: string[]
}

export interface SkillCategory {
  id: string
  title: LocalizedString
  skills: string[]
}

export const profileLinks = {
  github: 'https://github.com/frytinhas',
  linkedin: 'https://www.linkedin.com/in/jg-nunes.',
  email: 'mailto:contactfrytinhas1910@gmail.com',
  resumeUrl: undefined as string | undefined,
}

export const featuredProjects: FeaturedPortfolioProject[] = [
  {
    id: 'frontline',
    title: {
      en: 'Frontline',
      pt: 'Frontline',
    },
    subtitle: {
      en: 'Multiplayer FPS · Unreal Engine · C++ · Blueprint · GAS · EOS',
      pt: 'FPS Multiplayer · Unreal Engine · C++ · Blueprint · GAS · EOS',
    },
    description: {
      en: 'Frontline is a multiplayer FPS focused on replicated gameplay systems, synchronized match flow, and server-authoritative architecture built for scale.',
      pt: 'Frontline é um FPS multiplayer focado em sistemas replicados de gameplay, fluxo de partida sincronizado e arquitetura server-authoritative preparada para escalar.',
    },
    contributions: [
      {
        en: 'Designed GameMode/GameState architecture for synchronized multiplayer match flow.',
        pt: 'Projetei a arquitetura de GameMode/GameState para sincronização do fluxo de partidas multiplayer.',
      },
      {
        en: 'Implemented replicated gameplay systems, scoring, and match phase management.',
        pt: 'Implementei sistemas replicados de gameplay, pontuação e gerenciamento de fases da partida.',
      },
      {
        en: 'Built multiplayer features such as weapons, grenades, and player interaction workflows.',
        pt: 'Desenvolvi features multiplayer como armas, granadas e fluxos de interação do jogador.',
      },
      {
        en: 'Supported server authority, network reliability, and gameplay synchronization with GAS and EOS workflows.',
        pt: 'Fortaleci autoridade de servidor, confiabilidade de rede e sincronização de gameplay com workflows de GAS e EOS.',
      },
    ],
    highlights: [
      'Replication',
      'Dedicated Servers',
      'GameMode/GameState',
      'Match Flow',
      'Server Authority',
      'GAS',
      'EOS',
    ],
    media: {
      image: project1,
      alt: {
        en: 'Frontline project preview',
        pt: 'Prévia do projeto Frontline',
      },
    },
  },
  {
    id: 'endz',
    title: {
      en: 'EndZ',
      pt: 'EndZ',
    },
    subtitle: {
      en: 'Gameplay Systems · Inventory · UI · Unreal Engine',
      pt: 'Sistemas de Gameplay · Inventário · UI · Unreal Engine',
    },
    description: {
      en: 'EndZ is a gameplay-focused project where I implemented core inventory workflows, player-facing UI systems, and feature planning with design collaboration.',
      pt: 'EndZ é um projeto focado em gameplay onde implementei fluxos centrais de inventário, sistemas de UI voltados ao jogador e planejamento de features com colaboração de design.',
    },
    contributions: [
      {
        en: 'Developed inventory and item management systems with scalable architecture.',
        pt: 'Desenvolvi sistemas de inventário e gerenciamento de itens com arquitetura escalável.',
      },
      {
        en: 'Implemented gameplay UI and interaction flows for player usability.',
        pt: 'Implementei UI de gameplay e fluxos de interação com foco em usabilidade.',
      },
      {
        en: 'Contributed to feature planning and game design decisions from concept to implementation.',
        pt: 'Contribuí com planejamento de features e decisões de game design do conceito à implementação.',
      },
      {
        en: 'Translated design ideas into production-ready C++/Blueprint systems with iteration and polish.',
        pt: 'Transformei ideias de design em sistemas C++/Blueprint prontos para produção com iteração e polimento.',
      },
    ],
    highlights: [
      'Inventory Architecture',
      'Item Interactions',
      'Gameplay UI',
      'Player Systems',
      'Design Collaboration',
      'C++/Blueprint',
    ],
    media: {
      image: project2,
      alt: {
        en: 'EndZ project preview',
        pt: 'Prévia do projeto EndZ',
      },
    },
  },
  {
    id: 'imobi',
    title: {
      en: 'Imóbi',
      pt: 'Imóbi',
    },
    subtitle: {
      en: 'Mobile Real Estate App · Marketplace · UI/UX · Product Design',
      pt: 'App Mobile Imobiliário · Marketplace · UI/UX · Product Design',
    },
    description: {
      en: 'Imóbi is a mobile-first real estate concept focused on map-based discovery, listing visibility, and a simple property marketplace experience.',
      pt: 'Imóbi é um conceito mobile-first de mercado imobiliário focado em descoberta por mapa, visibilidade de anúncios e experiência simples de marketplace.',
    },
    contributions: [
      {
        en: 'Defined concept and product direction for a property marketplace app.',
        pt: 'Defini conceito e direção de produto para um app de marketplace imobiliário.',
      },
      {
        en: 'Designed UX flows around map-centered property discovery and listing exploration.',
        pt: 'Desenhei fluxos de UX com descoberta de imóveis centrada em mapa e exploração de anúncios.',
      },
      {
        en: 'Structured search, listing, and subscription flows for product scalability.',
        pt: 'Estruturei fluxos de busca, anúncio e assinatura pensando em escalabilidade do produto.',
      },
      {
        en: 'Led branding direction with the slogan “Seu imóvel? Está no mapa.”',
        pt: 'Liderei a direção de branding com o slogan “Seu imóvel? Está no mapa.”',
      },
    ],
    highlights: [
      'Mobile-first UX',
      'Real Estate Marketplace',
      'Map-centered Discovery',
      'Listing System',
      'Subscription Model',
      'Brand Positioning',
    ],
    media: {
      image: project3,
      alt: {
        en: 'Imóbi project preview',
        pt: 'Prévia do projeto Imóbi',
      },
    },
  },
]

export const pluginTools: PluginTool[] = [
  {
    id: 'universal-inventory-system',
    title: 'Universal Inventory System',
    description: {
      en: 'A modular Unreal Engine inventory framework for item storage, item management, and reusable gameplay inventory workflows.',
      pt: 'Framework modular de inventário para Unreal Engine com foco em armazenamento de itens, gerenciamento e fluxos reutilizáveis de gameplay.',
    },
    highlights: ['Inventory Architecture', 'Item Storage', 'Data-driven Systems', 'Gameplay Systems', 'C++/Blueprint Extensibility'],
  },
  {
    id: 'universal-interaction-system',
    title: 'Universal Interaction System',
    description: {
      en: 'A reusable interaction framework to standardize interactions between players and gameplay objects in Unreal projects.',
      pt: 'Framework reutilizável para padronizar interações entre jogadores e objetos de gameplay em projetos Unreal.',
    },
    highlights: ['Interaction Systems', 'Interactable Actors', 'Player Workflows', 'Gameplay Architecture', 'C++/Blueprint Integration'],
  },
  {
    id: 'universal-economy-system',
    title: 'Universal Economy System',
    description: {
      en: 'A flexible economy framework for currencies, pricing, rewards, shops, and transaction-driven gameplay loops.',
      pt: 'Framework flexível de economia para moedas, precificação, recompensas, lojas e loops de gameplay orientados por transações.',
    },
    highlights: ['Economy Systems', 'Currency Logic', 'Shops & Rewards', 'Transaction Workflows', 'Data-driven Architecture'],
  },
  {
    id: 'fries-library',
    title: 'Fries Library',
    description: {
      en: 'A personal Unreal Engine utility library focused on reusable helpers, tooling quality of life, and shared technical utilities.',
      pt: 'Biblioteca utilitária pessoal para Unreal Engine focada em helpers reutilizáveis, qualidade de vida de tooling e utilidades técnicas compartilhadas.',
    },
    highlights: ['Utility Functions', 'Blueprint Function Library', 'Developer Productivity', 'Shared Helpers', 'Reusable Systems'],
  },
]

export const technicalSkills: SkillCategory[] = [
  {
    id: 'unreal-engine',
    title: {
      en: 'Unreal Engine',
      pt: 'Unreal Engine',
    },
    skills: ['Unreal Engine 5', 'C++', 'Blueprint', 'Gameplay Framework', 'GameMode', 'GameState', 'PlayerController', 'Actor Components', 'Data Assets', 'Replication', 'Dedicated Servers'],
  },
  {
    id: 'gameplay-engineering',
    title: {
      en: 'Gameplay Engineering',
      pt: 'Engenharia de Gameplay',
    },
    skills: ['Gameplay Systems', 'Combat Systems', 'Inventory Systems', 'Interaction Systems', 'Economy Systems', 'UI Implementation', 'Game Design Support', 'Player Progression'],
  },
  {
    id: 'multiplayer',
    title: {
      en: 'Multiplayer',
      pt: 'Multiplayer',
    },
    skills: ['Replication', 'Server Authority', 'Match Flow', 'Online Sessions', 'Dedicated Servers', 'EOS', 'Networking Optimization'],
  },
  {
    id: 'engine-technologies',
    title: {
      en: 'Engine Technologies',
      pt: 'Tecnologias de Engine',
    },
    skills: ['Gameplay Ability System', 'Enhanced Input', 'Common UI', 'Chaos', 'Niagara', 'Animation Systems', 'AI Systems'],
  },
  {
    id: 'software-engineering',
    title: {
      en: 'Software Engineering',
      pt: 'Engenharia de Software',
    },
    skills: ['Architecture', 'Event-driven Systems', 'Data-driven Design', 'Debugging', 'Profiling', 'QA Testing', 'Automation', 'Git', 'SVN', 'Perforce'],
  },
]
