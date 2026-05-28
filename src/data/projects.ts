import project1 from '@/assets/images/project-1.svg'
import project2 from '@/assets/images/project-2.svg'
import project3 from '@/assets/images/project-3.svg'
import project4 from '@/assets/images/project-4.svg'
import project5 from '@/assets/images/project-5.svg'
import project6 from '@/assets/images/project-6.svg'

export type ProjectCategory = 'All' | 'Combat' | 'Networking' | 'AI' | 'Systems' | 'Unity'

export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  link: string
  image: string
  category: ProjectCategory
  overview: string
  challenge: string
  solution: string
  results: string[]
  metrics: {
    label: string
    value: string
    description: string
  }[]
  technicalDetails: {
    title: string
    description: string
  }[]
  keyFeatures: string[]
  duration: string
  role: string
  teamSize: string
  pt: {
    title: string
    description: string
    overview: string
    challenge: string
    solution: string
    results: string[]
    metrics: {
      label: string
      description: string
    }[]
    technicalDetails: {
      title: string
      description: string
    }[]
    keyFeatures: string[]
    role: string
  }
}

export const projects: Project[] = [
  {
    id: 'multiplayer-combat-system',
    title: 'Combat Gameplay Mechanics',
    description: 'Advanced combat mechanics featuring combo system, hit reactions, weapon variety, and responsive player feedback. Designed and implemented core combat feel and player progression systems.',
    stack: ['UE5', 'C++', 'GAS', 'Animation System'],
    link: 'https://github.com',
    image: project1,
    category: 'Combat',
    duration: '8 months',
    role: 'Lead Gameplay Programmer',
    teamSize: '12 developers',
    overview: 'Designed and implemented comprehensive combat gameplay mechanics for a multiplayer action game. Focused on creating responsive, satisfying combat feel with deep combo systems, varied weapon behaviors, and meaningful player progression.',
    challenge: 'Creating combat that felt responsive and impactful while balancing depth for competitive play was the core challenge. Players needed immediate feedback for every action, combos needed to feel natural to execute, and weapon variety required each weapon type to have distinct feel and strategic purpose. The system needed to work seamlessly across different character classes while maintaining balance.',
    solution: 'Designed modular combat system built on core hit detection and response framework. Implemented combo system using state machine architecture allowing for fluid attack chains with cancel windows and recovery frames. Created weapon archetypes with unique timing, range, and damage patterns. Developed hit reaction system with directional impacts, stagger states, and knockback mechanics. Integrated gameplay effects for buffs, debuffs, and status conditions using GAS.',
    results: [
      'Achieved fluid combat feel with responsive input at 60fps',
      'Implemented 8 unique weapon types with distinct combat styles',
      'Created combo system with 30+ attack variations',
      'Player engagement with combat increased by 40%',
      'Combat system became core selling point in marketing'
    ],
    metrics: [
      {
        label: 'Weapon Types',
        value: '8',
        description: 'Distinct weapon archetypes implemented'
      },
      {
        label: 'Combo Variations',
        value: '30+',
        description: 'Unique attack sequences'
      },
      {
        label: 'Engagement Increase',
        value: '40%',
        description: 'Player satisfaction with combat'
      },
      {
        label: 'Performance',
        value: '60fps',
        description: 'Consistent frame rate maintained'
      }
    ],
    technicalDetails: [
      {
        title: 'Combat State Machine',
        description: 'Designed hierarchical state machine managing attack states, combo windows, and cancellation rules. States tracked current attack phase, allowed transitions, and recovery timing for responsive yet balanced combat flow.'
      },
      {
        title: 'Hit Detection & Response',
        description: 'Implemented multi-layered hit detection supporting different attack types (melee, ranged, area). Built directional hit reaction system applying appropriate animations, impulses, and camera shake based on attack angle and force.'
      },
      {
        title: 'Weapon Archetypes',
        description: 'Created data-driven weapon system with distinct archetypes - fast/weak, slow/heavy, ranged, hybrid. Each archetype featured unique timing windows, range profiles, and combo opportunities. Designers could tune feel through exposed parameters.'
      },
      {
        title: 'Gameplay Effects Integration',
        description: 'Integrated GAS for buffs, debuffs, and status effects. Implemented stacking rules, duration management, and effect priority. Effects could modify damage output, attack speed, movement, creating strategic depth in combat encounters.'
      }
    ],
    keyFeatures: [
      'State machine-based combat flow with combo windows',
      'Directional hit detection and reaction system',
      '8 weapon archetypes with unique combat feel',
      '30+ combo variations across weapon types',
      'Gameplay effects for buffs and status conditions',
      'Player progression affecting combat stats',
      'Camera feedback and hit pause for impact',
      'Designer-friendly tuning parameters'
    ],
    pt: {
      title: 'Mecânicas de Gameplay de Combate',
      description: 'Mecânicas de combate avançadas com sistema de combos, reações de impacto, variedade de armas e feedback responsivo ao jogador. Projetado e implementado o feeling central de combate e sistemas de progressão do jogador.',
      overview: 'Projetei e implementei mecânicas abrangentes de gameplay de combate para um jogo de ação multiplayer. Focado em criar uma sensação de combate responsiva e satisfatória com sistemas profundos de combos, comportamentos variados de armas e progressão significativa do jogador.',
      challenge: 'Criar um combate que fosse responsivo e impactante enquanto equilibrava profundidade para jogo competitivo era o desafio central. Os jogadores precisavam de feedback imediato para cada ação, combos precisavam ser naturais de executar, e a variedade de armas exigia que cada tipo tivesse sensação distinta e propósito estratégico. O sistema precisava funcionar perfeitamente entre diferentes classes de personagens mantendo o equilíbrio.',
      solution: 'Projetei sistema modular de combate construído sobre framework central de detecção e resposta de impacto. Implementei sistema de combos usando arquitetura de máquina de estados permitindo cadeias fluidas de ataques com janelas de cancelamento e frames de recuperação. Criei arquétipos de armas com tempo, alcance e padrões de dano únicos. Desenvolvi sistema de reação de impacto com impactos direcionais, estados de atordoamento e mecânicas de knockback. Integrei efeitos de gameplay para buffs, debuffs e condições de status usando GAS.',
      results: [
        'Alcançada sensação fluida de combate com entrada responsiva a 60fps',
        'Implementados 8 tipos únicos de armas com estilos de combate distintos',
        'Criado sistema de combos com mais de 30 variações de ataque',
        'Engajamento do jogador com o combate aumentou em 40%',
        'Sistema de combate tornou-se ponto de venda central no marketing'
      ],
      metrics: [
        {
          label: 'Tipos de Arma',
          description: 'Arquétipos distintos de armas implementados'
        },
        {
          label: 'Variações de Combo',
          description: 'Sequências únicas de ataque'
        },
        {
          label: 'Aumento de Engajamento',
          description: 'Satisfação do jogador com o combate'
        },
        {
          label: 'Performance',
          description: 'Taxa de quadros consistente mantida'
        }
      ],
      technicalDetails: [
        {
          title: 'Máquina de Estados de Combate',
          description: 'Projetada máquina de estados hierárquica gerenciando estados de ataque, janelas de combo e regras de cancelamento. Estados rastreavam fase atual do ataque, transições permitidas e tempo de recuperação para fluxo de combate responsivo mas equilibrado.'
        },
        {
          title: 'Detecção e Resposta de Impacto',
          description: 'Implementada detecção de impacto multi-camadas suportando diferentes tipos de ataque (corpo a corpo, à distância, área). Construído sistema de reação direcional de impacto aplicando animações apropriadas, impulsos e shake de câmera baseado no ângulo e força do ataque.'
        },
        {
          title: 'Arquétipos de Armas',
          description: 'Criado sistema de armas orientado por dados com arquétipos distintos - rápido/fraco, lento/pesado, à distância, híbrido. Cada arquétipo apresentava janelas de tempo únicas, perfis de alcance e oportunidades de combo. Designers podiam ajustar a sensação através de parâmetros expostos.'
        },
        {
          title: 'Integração de Efeitos de Gameplay',
          description: 'Integrado GAS para buffs, debuffs e efeitos de status. Implementadas regras de empilhamento, gerenciamento de duração e prioridade de efeitos. Efeitos podiam modificar saída de dano, velocidade de ataque, movimento, criando profundidade estratégica em encontros de combate.'
        }
      ],
      keyFeatures: [
        'Fluxo de combate baseado em máquina de estados com janelas de combo',
        'Sistema de detecção e reação de impacto direcional',
        '8 arquétipos de armas com sensação de combate única',
        'Mais de 30 variações de combo entre tipos de armas',
        'Efeitos de gameplay para buffs e condições de status',
        'Progressão do jogador afetando estatísticas de combate',
        'Feedback de câmera e pausa de impacto para impacto',
        'Parâmetros de ajuste amigáveis para designers'
      ],
      role: 'Programador Líder de Gameplay'
    }
  },
  {
    id: 'modular-gameplay-ability-system',
    title: 'Modular Gameplay Ability System',
    description: 'Custom GAS implementation with dynamic ability composition, attribute aggregation, and gameplay effect stacking. Reduced ability iteration time by 70%.',
    stack: ['Unreal C++', 'Blueprint Integration', 'Gameplay Tags'],
    link: 'https://github.com',
    image: project2,
    category: 'Systems',
    duration: '6 months',
    role: 'Systems Architect',
    teamSize: '8 developers',
    overview: 'Designed and built a flexible gameplay ability framework extending Unreal\'s native Gameplay Ability System. The goal was to create a designer-friendly system that allowed rapid iteration on character abilities, buffs, and status effects while maintaining performance at scale.',
    challenge: 'Designers needed to create and modify abilities quickly without programmer support, but Unreal\'s base GAS required significant C++ knowledge. The system also needed to support complex ability interactions, dynamic attribute modifications, and efficient replication across network. Previous iteration cycles took multiple days as designers waited for programmer implementation of new ability variants.',
    solution: 'Extended GAS with a modular component architecture allowing abilities to be composed from reusable building blocks. Created a data-driven ability definition system using Data Assets that designers could modify directly. Implemented a tag-based ability interaction system for handling ability cancellations, prerequisites, and combos. Built custom Blueprint nodes exposing complex GAS functionality through simple interfaces. Developed an attribute aggregation system supporting temporary and permanent modifications with proper replication.',
    results: [
      'Reduced ability iteration time from 3 days to 4 hours (70% reduction)',
      'Empowered design team to create 50+ ability variants independently',
      'Achieved 60fps on target hardware with 20+ active abilities per character',
      'Enabled complex ability combos and status effect interactions',
      'Zero post-launch bugs related to ability system core functionality'
    ],
    metrics: [
      {
        label: 'Iteration Speed',
        value: '70%',
        description: 'Faster ability creation and modification'
      },
      {
        label: 'Ability Variants',
        value: '50+',
        description: 'Unique abilities created by designers'
      },
      {
        label: 'Performance',
        value: '60fps',
        description: 'Target frame rate maintained'
      },
      {
        label: 'Designer Adoption',
        value: '100%',
        description: 'Team self-sufficiency achieved'
      }
    ],
    technicalDetails: [
      {
        title: 'Modular Ability Components',
        description: 'Architected abilities as composition of smaller components (targeting, damage, cooldown, cost, animation). Each component implemented as reusable UObject that could be mixed and matched in Data Assets.'
      },
      {
        title: 'Tag-Based Interaction System',
        description: 'Leveraged Gameplay Tags for ability relationships. Tags controlled which abilities could run simultaneously, which ones canceled others, and prerequisites for activation. Made ability interactions declarative and easy to modify.'
      },
      {
        title: 'Attribute Aggregation',
        description: 'Implemented custom attribute system supporting multiple modification types (additive, multiplicative, override) with proper priority ordering. Attributes automatically replicated with delta compression and supported rollback for prediction.'
      },
      {
        title: 'Blueprint Integration Layer',
        description: 'Created specialized Blueprint function library exposing common GAS operations. Designed custom Blueprint nodes for ability creation, allowing designers to script complex logic without touching C++.'
      }
    ],
    keyFeatures: [
      'Data-driven ability definition through Data Assets',
      'Modular component-based ability architecture',
      'Tag-based ability interaction and prerequisites',
      'Custom attribute system with aggregation',
      'Blueprint scripting support for designers',
      'Gameplay effect stacking and duration management',
      'Network-optimized ability replication',
      'Visual debugging tools for ability state'
    ],
    pt: {
      title: 'Sistema Modular de Habilidades de Gameplay',
      description: 'Implementação GAS personalizada com composição dinâmica de habilidades, agregação de atributos e empilhamento de efeitos de gameplay. Reduziu tempo de iteração de habilidades em 70%.',
      overview: 'Projetei e construí um framework flexível de habilidades de gameplay estendendo o Sistema de Habilidades de Gameplay nativo da Unreal. O objetivo era criar um sistema amigável para designers que permitisse iteração rápida em habilidades de personagens, buffs e efeitos de status mantendo performance em escala.',
      challenge: 'Designers precisavam criar e modificar habilidades rapidamente sem suporte de programadores, mas o GAS base da Unreal exigia conhecimento significativo de C++. O sistema também precisava suportar interações complexas de habilidades, modificações dinâmicas de atributos e replicação eficiente através da rede. Ciclos de iteração anteriores levavam vários dias enquanto designers aguardavam implementação de programadores para novas variantes de habilidades.',
      solution: 'Estendi o GAS com arquitetura modular de componentes permitindo que habilidades fossem compostas de blocos de construção reutilizáveis. Criei sistema de definição de habilidades orientado por dados usando Data Assets que designers podiam modificar diretamente. Implementei sistema de interação de habilidades baseado em tags para lidar com cancelamentos de habilidades, pré-requisitos e combos. Construí nós Blueprint personalizados expondo funcionalidade complexa do GAS através de interfaces simples. Desenvolvi sistema de agregação de atributos suportando modificações temporárias e permanentes com replicação apropriada.',
      results: [
        'Reduziu tempo de iteração de habilidades de 3 dias para 4 horas (redução de 70%)',
        'Capacitou equipe de design a criar mais de 50 variantes de habilidades independentemente',
        'Alcançou 60fps no hardware alvo com mais de 20 habilidades ativas por personagem',
        'Habilitou combos complexos de habilidades e interações de efeitos de status',
        'Zero bugs pós-lançamento relacionados à funcionalidade central do sistema de habilidades'
      ],
      metrics: [
        {
          label: 'Velocidade de Iteração',
          description: 'Criação e modificação de habilidades mais rápida'
        },
        {
          label: 'Variantes de Habilidade',
          description: 'Habilidades únicas criadas por designers'
        },
        {
          label: 'Performance',
          description: 'Taxa de quadros alvo mantida'
        },
        {
          label: 'Adoção do Designer',
          description: 'Auto-suficiência da equipe alcançada'
        }
      ],
      technicalDetails: [
        {
          title: 'Componentes Modulares de Habilidade',
          description: 'Arquitetei habilidades como composição de componentes menores (mira, dano, cooldown, custo, animação). Cada componente implementado como UObject reutilizável que podia ser misturado e combinado em Data Assets.'
        },
        {
          title: 'Sistema de Interação Baseado em Tags',
          description: 'Aproveitei Gameplay Tags para relacionamentos de habilidades. Tags controlavam quais habilidades podiam executar simultaneamente, quais cancelavam outras e pré-requisitos para ativação. Tornou interações de habilidades declarativas e fáceis de modificar.'
        },
        {
          title: 'Agregação de Atributos',
          description: 'Implementei sistema personalizado de atributos suportando múltiplos tipos de modificação (aditiva, multiplicativa, substituição) com ordenação apropriada de prioridade. Atributos automaticamente replicados com compressão delta e suportavam rollback para predição.'
        },
        {
          title: 'Camada de Integração Blueprint',
          description: 'Criei biblioteca de funções Blueprint especializada expondo operações comuns do GAS. Projetei nós Blueprint personalizados para criação de habilidades, permitindo designers programar lógica complexa sem tocar em C++.'
        }
      ],
      keyFeatures: [
        'Definição de habilidades orientada por dados através de Data Assets',
        'Arquitetura modular de habilidades baseada em componentes',
        'Interação e pré-requisitos de habilidades baseados em tags',
        'Sistema personalizado de atributos com agregação',
        'Suporte a scripting Blueprint para designers',
        'Empilhamento e gerenciamento de duração de efeitos de gameplay',
        'Replicação de habilidades otimizada para rede',
        'Ferramentas de debugging visual para estado de habilidades'
      ],
      role: 'Arquiteto de Sistemas'
    }
  },
  {
    id: 'ai-director-encounter-system',
    title: 'AI Director & Encounter System',
    description: 'Dynamic difficulty adjustment system analyzing player performance metrics. Controls enemy spawning, resource distribution, and pacing across sessions.',
    stack: ['UE5', 'Behavior Trees', 'EQS', 'Analytics'],
    link: 'https://github.com',
    image: project3,
    category: 'AI',
    duration: '5 months',
    role: 'AI Systems Programmer',
    teamSize: '6 developers',
    overview: 'Developed an intelligent encounter director that dynamically adjusts game difficulty and pacing based on individual player performance. The system analyzes player skill metrics in real-time and adapts enemy behavior, spawn rates, and resource availability to maintain engagement without overwhelming or boring players.',
    challenge: 'Static difficulty settings failed to accommodate the wide skill range of players. Casual players felt frustrated by overwhelming enemy encounters, while skilled players found the game too easy after the first few hours. Manual difficulty selection didn\'t solve this as player skill varied within a single session. The system needed to be sophisticated enough to detect player struggle or mastery while remaining invisible - players shouldn\'t feel they\'re being manipulated.',
    solution: 'Built an AI director analyzing multiple player performance signals: health management, ammo efficiency, combat duration, death frequency, and time between encounters. Developed weighted scoring system converting these signals into a player mastery index ranging from 0-100. Director uses this score to adjust encounter parameters: enemy count, enemy aggression, spawn timing, health pack availability, and ammunition drops. Implemented gradual transitions to prevent sudden difficulty spikes. Created EQS queries for intelligent enemy spawn positioning that challenges players appropriately. Added analytics pipeline tracking adjustment effectiveness.',
    results: [
      'Player retention improved by 28% in first 10 hours of gameplay',
      'Average session length increased by 42 minutes',
      'Death frustration complaints reduced by 65%',
      'Positive difficulty balance reviews increased from 42% to 78%',
      'Successfully maintained engagement across skill levels'
    ],
    metrics: [
      {
        label: 'Retention Increase',
        value: '+28%',
        description: 'Player retention in first 10 hours'
      },
      {
        label: 'Session Length',
        value: '+42min',
        description: 'Average play session duration gain'
      },
      {
        label: 'Frustration Reduction',
        value: '65%',
        description: 'Fewer difficulty complaints'
      },
      {
        label: 'Positive Reviews',
        value: '78%',
        description: 'Difficulty balance satisfaction'
      }
    ],
    technicalDetails: [
      {
        title: 'Performance Signal Analysis',
        description: 'Tracked 15+ player performance signals including accuracy, damage taken per encounter, time to kill, resource consumption, and death locations. Used weighted moving average to smooth signals and prevent overreaction to single events.'
      },
      {
        title: 'Dynamic Difficulty Scaling',
        description: 'Mapped player mastery index to encounter parameters through configurable curves. Designers could tune how aggressively system responds to player performance. Implemented rate limiting preventing difficulty from changing too rapidly.'
      },
      {
        title: 'Intelligent Spawn System',
        description: 'Built EQS-based spawn system considering player position, sight lines, recent combat locations, and escape routes. Spawn decisions influenced by director difficulty state, creating appropriate challenge without feeling cheap.'
      },
      {
        title: 'Pacing Control',
        description: 'Monitored player stress levels through combat intensity metrics. Inserted breathing room after difficult encounters by reducing spawn frequency. Distributed health and ammo pickups based on player resource management patterns.'
      }
    ],
    keyFeatures: [
      'Real-time player performance analysis',
      'Dynamic difficulty adjustment per-player',
      'Intelligent enemy spawn positioning via EQS',
      'Resource distribution based on player need',
      'Pacing control preventing burnout',
      'Analytics dashboard for tuning',
      'Designer-tunable response curves',
      'Invisible difficulty transitions'
    ],
    pt: {
      title: 'Diretor de IA & Sistema de Encontros',
      description: 'Sistema de ajuste dinâmico de dificuldade analisando métricas de performance do jogador. Controla spawning de inimigos, distribuição de recursos e ritmo entre sessões.',
      overview: 'Desenvolvi um diretor de encontros inteligente que ajusta dinamicamente a dificuldade e ritmo do jogo baseado na performance individual do jogador. O sistema analisa métricas de habilidade do jogador em tempo real e adapta comportamento de inimigos, taxas de spawn e disponibilidade de recursos para manter o engajamento sem sobrecarregar ou entediar os jogadores.',
      challenge: 'Configurações estáticas de dificuldade falhavam em acomodar a ampla gama de habilidades dos jogadores. Jogadores casuais se sentiam frustrados por encontros avassaladores de inimigos, enquanto jogadores habilidosos achavam o jogo muito fácil após as primeiras horas. Seleção manual de dificuldade não resolvia isso pois a habilidade do jogador variava dentro de uma única sessão. O sistema precisava ser sofisticado o suficiente para detectar luta ou maestria do jogador permanecendo invisível - jogadores não deveriam sentir que estavam sendo manipulados.',
      solution: 'Construí um diretor de IA analisando múltiplos sinais de performance do jogador: gerenciamento de saúde, eficiência de munição, duração de combate, frequência de morte e tempo entre encontros. Desenvolvi sistema de pontuação ponderada convertendo esses sinais em índice de maestria do jogador variando de 0-100. Diretor usa essa pontuação para ajustar parâmetros de encontro: contagem de inimigos, agressão de inimigos, tempo de spawn, disponibilidade de kits de saúde e quedas de munição. Implementei transições graduais para prevenir picos súbitos de dificuldade. Criei consultas EQS para posicionamento inteligente de spawn de inimigos que desafia jogadores apropriadamente. Adicionei pipeline de analytics rastreando efetividade do ajuste.',
      results: [
        'Retenção de jogadores melhorou em 28% nas primeiras 10 horas de gameplay',
        'Duração média de sessão aumentou em 42 minutos',
        'Reclamações de frustração com mortes reduzidas em 65%',
        'Avaliações positivas de equilíbrio de dificuldade aumentaram de 42% para 78%',
        'Manteve engajamento com sucesso entre níveis de habilidade'
      ],
      metrics: [
        { label: 'Aumento de Retenção', description: 'Retenção de jogadores nas primeiras 10 horas' },
        { label: 'Duração de Sessão', description: 'Ganho na duração média de sessão de jogo' },
        { label: 'Redução de Frustração', description: 'Menos reclamações de dificuldade' },
        { label: 'Avaliações Positivas', description: 'Satisfação com equilíbrio de dificuldade' }
      ],
      technicalDetails: [
        {
          title: 'Análise de Sinais de Performance',
          description: 'Rastreei mais de 15 sinais de performance do jogador incluindo precisão, dano recebido por encontro, tempo para matar, consumo de recursos e locais de morte. Usei média móvel ponderada para suavizar sinais e prevenir reação exagerada a eventos únicos.'
        },
        {
          title: 'Escalonamento Dinâmico de Dificuldade',
          description: 'Mapeei índice de maestria do jogador para parâmetros de encontro através de curvas configuráveis. Designers podiam ajustar quão agressivamente o sistema responde à performance do jogador. Implementei limitação de taxa prevenindo mudança de dificuldade muito rápida.'
        },
        {
          title: 'Sistema de Spawn Inteligente',
          description: 'Construí sistema de spawn baseado em EQS considerando posição do jogador, linhas de visão, locais de combate recentes e rotas de fuga. Decisões de spawn influenciadas pelo estado de dificuldade do diretor, criando desafio apropriado sem parecer injusto.'
        },
        {
          title: 'Controle de Ritmo',
          description: 'Monitorei níveis de estresse do jogador através de métricas de intensidade de combate. Inseri espaço para respirar após encontros difíceis reduzindo frequência de spawn. Distribuí coletáveis de saúde e munição baseado em padrões de gerenciamento de recursos do jogador.'
        }
      ],
      keyFeatures: [
        'Análise de performance do jogador em tempo real',
        'Ajuste dinâmico de dificuldade por jogador',
        'Posicionamento inteligente de spawn de inimigos via EQS',
        'Distribuição de recursos baseada na necessidade do jogador',
        'Controle de ritmo prevenindo burnout',
        'Painel de analytics para ajuste',
        'Curvas de resposta ajustáveis por designers',
        'Transições invisíveis de dificuldade'
      ],
      role: 'Programador de Sistemas de IA'
    }
  },
  {
    id: 'network-optimization-pipeline',
    title: 'Network Optimization Pipeline',
    description: 'Custom replication solution reducing bandwidth by 45% through delta compression, relevancy filtering, and prioritized channel allocation for large-scale multiplayer.',
    stack: ['Low-Level Networking', 'C++', 'Profiling'],
    link: 'https://github.com',
    image: project4,
    category: 'Networking',
    duration: '4 months',
    role: 'Network Engineer',
    teamSize: '5 developers',
    overview: 'Optimized multiplayer networking infrastructure for large-scale game supporting 100+ players per server. Focused on reducing bandwidth consumption while maintaining responsive gameplay and implementing custom replication strategies for different actor types.',
    challenge: 'Initial networking implementation consumed excessive bandwidth, limiting server capacity to 40 players before performance degraded. Standard Unreal replication replicated too much unnecessary data and didn\'t prioritize critical updates. Monthly hosting costs were projected to be unsustainable at launch scale. Players on slower connections experienced rubber-banding and high packet loss.',
    solution: 'Implemented custom replication graph with actor relevancy determination based on distance, team affiliation, and gameplay importance. Developed delta compression system for frequently updated properties, sending only changes rather than full values. Created priority-based channel allocation ensuring critical updates (player positions, hits) sent before less important data. Built adaptive update frequency system reducing tick rate for distant or occluded actors. Implemented packet merging to maximize payload utilization and minimize packet overhead.',
    results: [
      'Reduced average bandwidth per player from 220kbps to 120kbps (45% reduction)',
      'Increased maximum player capacity from 40 to 100 per server',
      'Lowered monthly hosting costs by estimated $180k annually',
      'Improved experience for players on 2-5Mbps connections',
      'Eliminated rubber-banding for 95% of players'
    ],
    metrics: [
      {
        label: 'Bandwidth Savings',
        value: '45%',
        description: 'Per-player bandwidth reduction'
      },
      {
        label: 'Player Capacity',
        value: '2.5x',
        description: 'Server capacity multiplier'
      },
      {
        label: 'Cost Reduction',
        value: '$180k',
        description: 'Annual hosting savings'
      },
      {
        label: 'Rubber-band Fix',
        value: '95%',
        description: 'Players with improved experience'
      }
    ],
    technicalDetails: [
      {
        title: 'Custom Replication Graph',
        description: 'Extended Unreal\'s replication graph with custom relevancy rules. Actors outside certain distance thresholds marked irrelevant unless specifically tagged as always-relevant. Team-based relevancy ensured players only received full data for teammates.'
      },
      {
        title: 'Delta Compression',
        description: 'Implemented bit-packing and delta encoding for vector positions, rotations, and velocities. Quantized values to appropriate precision - distant objects needed less accuracy. Reduced property replication overhead by 60% for frequently updated actors.'
      },
      {
        title: 'Priority System',
        description: 'Assigned dynamic priority scores to each replicated actor per connection. Priority based on distance, time since last update, whether recently damaged player, and actor type. Built priority queue ensuring critical updates sent first when bandwidth constrained.'
      },
      {
        title: 'Adaptive Update Rates',
        description: 'Implemented variable tick rates for replication. Nearby important actors replicated at full server tick rate (60Hz), distant actors at reduced rate (10-20Hz), occluded actors at minimum (5Hz). Update frequency recalculated every frame.'
      }
    ],
    keyFeatures: [
      'Custom actor relevancy determination',
      'Delta compression for property replication',
      'Priority-based update scheduling',
      'Adaptive tick rates per actor',
      'Packet merging and optimization',
      'Team-based replication filtering',
      'Bandwidth monitoring and profiling tools',
      'Graceful degradation for poor connections'
    ],
    pt: {
      title: 'Pipeline de Otimização de Rede',
      description: 'Solução de replicação personalizada reduzindo largura de banda em 45% através de compressão delta, filtragem de relevância e alocação priorizada de canal para multiplayer em larga escala.',
      overview: 'Otimizei infraestrutura de networking multiplayer para jogo em larga escala suportando mais de 100 jogadores por servidor. Focado em reduzir consumo de largura de banda mantendo gameplay responsivo e implementando estratégias de replicação personalizadas para diferentes tipos de atores.',
      challenge: 'Implementação inicial de networking consumia largura de banda excessiva, limitando capacidade do servidor a 40 jogadores antes da performance degradar. Replicação padrão da Unreal replicava dados desnecessários demais e não priorizava atualizações críticas. Custos mensais de hospedagem eram projetados como insustentáveis na escala de lançamento. Jogadores em conexões mais lentas experimentavam rubber-banding e alta perda de pacotes.',
      solution: 'Implementei grafo de replicação personalizado com determinação de relevância de ator baseada em distância, afiliação de equipe e importância de gameplay. Desenvolvi sistema de compressão delta para propriedades frequentemente atualizadas, enviando apenas mudanças ao invés de valores completos. Criei alocação de canal baseada em prioridade garantindo atualizações críticas (posições de jogador, hits) enviadas antes de dados menos importantes. Construí sistema de frequência de atualização adaptativa reduzindo taxa de tick para atores distantes ou oclusos. Implementei mesclagem de pacotes para maximizar utilização de payload e minimizar sobrecarga de pacotes.',
      results: [
        'Reduziu largura de banda média por jogador de 220kbps para 120kbps (redução de 45%)',
        'Aumentou capacidade máxima de jogadores de 40 para 100 por servidor',
        'Reduziu custos mensais de hospedagem em $180k anuais estimados',
        'Melhorou experiência para jogadores em conexões de 2-5Mbps',
        'Eliminou rubber-banding para 95% dos jogadores'
      ],
      metrics: [
        { label: 'Economia de Largura de Banda', description: 'Redução de largura de banda por jogador' },
        { label: 'Capacidade de Jogadores', description: 'Multiplicador de capacidade do servidor' },
        { label: 'Redução de Custos', description: 'Economia anual de hospedagem' },
        { label: 'Correção de Rubber-band', description: 'Jogadores com experiência melhorada' }
      ],
      technicalDetails: [
        {
          title: 'Grafo de Replicação Personalizado',
          description: 'Estendi grafo de replicação da Unreal com regras de relevância personalizadas. Atores fora de certos limites de distância marcados como irrelevantes a menos que especificamente marcados como sempre-relevantes. Relevância baseada em equipe garantiu que jogadores recebessem apenas dados completos para companheiros de equipe.'
        },
        {
          title: 'Compressão Delta',
          description: 'Implementei bit-packing e codificação delta para posições de vetor, rotações e velocidades. Quantizei valores para precisão apropriada - objetos distantes precisavam menos precisão. Reduzi sobrecarga de replicação de propriedade em 60% para atores frequentemente atualizados.'
        },
        {
          title: 'Sistema de Prioridade',
          description: 'Atribuí pontuações de prioridade dinâmica a cada ator replicado por conexão. Prioridade baseada em distância, tempo desde última atualização, se recentemente danificou jogador e tipo de ator. Construí fila de prioridade garantindo atualizações críticas enviadas primeiro quando largura de banda restrita.'
        },
        {
          title: 'Taxas de Atualização Adaptativas',
          description: 'Implementei taxas de tick variáveis para replicação. Atores importantes próximos replicados em taxa de tick completa do servidor (60Hz), atores distantes em taxa reduzida (10-20Hz), atores oclusos em taxa mínima (5Hz). Frequência de atualização recalculada a cada frame.'
        }
      ],
      keyFeatures: [
        'Determinação de relevância de ator personalizada',
        'Compressão delta para replicação de propriedades',
        'Agendamento de atualização baseado em prioridade',
        'Taxas de tick adaptativas por ator',
        'Mesclagem e otimização de pacotes',
        'Filtragem de replicação baseada em equipe',
        'Ferramentas de monitoramento e profiling de largura de banda',
        'Degradação graciosa para conexões ruins'
      ],
      role: 'Engenheiro de Rede'
    }
  },
  {
    id: 'weapon-system-framework',
    title: 'Weapon System Framework',
    description: 'Data-driven weapon system supporting 50+ weapon variants with modular attachment system, procedural recoil, and ballistic simulation.',
    stack: ['C++', 'Data Assets', 'Physics', 'VFX Integration'],
    link: 'https://github.com',
    image: project5,
    category: 'Combat',
    duration: '7 months',
    role: 'Combat Systems Programmer',
    teamSize: '10 developers',
    overview: 'Architected comprehensive weapon system framework supporting diverse weapon types, attachments, and customization options. System needed to be flexible enough for designers to create unique weapon feels while maintaining consistent quality and performance across all variants.',
    challenge: 'Initial weapon implementation hard-coded behavior in C++ classes, making each new weapon require programmer time and causing code duplication. Designers couldn\'t tune weapon feel without programmer support, creating bottlenecks. No support for weapon attachments or customization. Weapon switching and ammo management was buggy across network. The team wanted 50+ unique weapons but lacked the engineering bandwidth for individual implementations.',
    solution: 'Designed data-driven weapon framework where weapon behavior defined entirely in Data Assets. Created base weapon component handling firing logic, ammo management, and replication, with all parameters (damage, fire rate, spread, recoil patterns) exposed to data. Implemented modular attachment system where attachments modify base weapon stats through multiplication or addition. Built procedural recoil system using noise functions and recovery curves for authentic weapon feel. Integrated with animation system and VFX for cohesive weapon feedback.',
    results: [
      'Enabled creation of 50+ unique weapon variants by design team',
      'Reduced new weapon implementation time from 2 days to 2 hours',
      'Supported 8 attachment types with stat modification system',
      'Maintained 60fps with multiple players firing simultaneously',
      'Zero critical weapon-related bugs at launch'
    ],
    metrics: [
      {
        label: 'Weapon Variants',
        value: '50+',
        description: 'Unique weapons created'
      },
      {
        label: 'Implementation Time',
        value: '2 hours',
        description: 'Time to create new weapon'
      },
      {
        label: 'Attachment Types',
        value: '8',
        description: 'Modular attachment categories'
      },
      {
        label: 'Launch Bugs',
        value: '0',
        description: 'Critical weapon issues'
      }
    ],
    technicalDetails: [
      {
        title: 'Data-Driven Architecture',
        description: 'Created extensive Data Asset hierarchy defining all weapon properties. Base weapon class implemented generic firing, reloading, and replication logic. Specific weapon behavior emerged from data rather than code, enabling designer autonomy.'
      },
      {
        title: 'Attachment System',
        description: 'Designed attachment socket system with multiple attachment points per weapon. Attachments defined stat modifiers applied to base weapon. System supported attachment incompatibilities and prerequisites. All attachments properly replicated and synchronized.'
      },
      {
        title: 'Procedural Recoil',
        description: 'Implemented recoil using Perlin noise for horizontal randomness and configurable vertical climb curves. Added recoil recovery system gradually returning aim to original position. Recoil patterns tuneable per-weapon for distinct feel.'
      },
      {
        title: 'Ballistic Simulation',
        description: 'Built projectile system with physics-based bullet drop and drag. Supported both hitscan and projectile weapons through unified interface. Implemented bullet penetration system checking material types. Optimized trace calls for performance.'
      }
    ],
    keyFeatures: [
      'Data-driven weapon definition system',
      'Modular attachment system with stat modifiers',
      'Procedural recoil with designer-tunable patterns',
      'Physics-based ballistic simulation',
      'Bullet penetration through materials',
      'Network-optimized ammo and reload replication',
      'Integration with animation and VFX systems',
      'Visual debug tools for weapon tuning'
    ],
    pt: {
      title: 'Framework de Sistema de Armas',
      description: 'Sistema de armas orientado por dados suportando mais de 50 variantes de armas com sistema modular de anexos, recuo procedural e simulação balística.',
      overview: 'Arquitetei framework abrangente de sistema de armas suportando tipos diversos de armas, anexos e opções de customização. Sistema precisava ser flexível o suficiente para designers criarem sensações únicas de armas mantendo qualidade e performance consistentes entre todas as variantes.',
      challenge: 'Implementação inicial de armas tinha comportamento hard-coded em classes C++, fazendo cada nova arma requerer tempo de programador e causando duplicação de código. Designers não podiam ajustar sensação de arma sem suporte de programador, criando gargalos. Sem suporte para anexos ou customização de armas. Troca de armas e gerenciamento de munição era bugado através da rede. A equipe queria mais de 50 armas únicas mas não tinha largura de banda de engenharia para implementações individuais.',
      solution: 'Projetei framework de armas orientado por dados onde comportamento de arma definido inteiramente em Data Assets. Criei componente base de arma lidando com lógica de disparo, gerenciamento de munição e replicação, com todos parâmetros (dano, taxa de disparo, dispersão, padrões de recuo) expostos para dados. Implementei sistema modular de anexos onde anexos modificam estatísticas base da arma através de multiplicação ou adição. Construí sistema de recuo procedural usando funções de ruído e curvas de recuperação para sensação autêntica de arma. Integrei com sistema de animação e VFX para feedback coeso de arma.',
      results: [
        'Habilitou criação de mais de 50 variantes únicas de armas pela equipe de design',
        'Reduziu tempo de implementação de nova arma de 2 dias para 2 horas',
        'Suportou 8 tipos de anexos com sistema de modificação de estatísticas',
        'Manteve 60fps com múltiplos jogadores atirando simultaneamente',
        'Zero bugs críticos relacionados a armas no lançamento'
      ],
      metrics: [
        { label: 'Variantes de Armas', description: 'Armas únicas criadas' },
        { label: 'Tempo de Implementação', description: 'Tempo para criar nova arma' },
        { label: 'Tipos de Anexos', description: 'Categorias de anexos modulares' },
        { label: 'Bugs no Lançamento', description: 'Problemas críticos de armas' }
      ],
      technicalDetails: [
        {
          title: 'Arquitetura Orientada por Dados',
          description: 'Criei hierarquia extensiva de Data Asset definindo todas propriedades de armas. Classe base de arma implementou lógica genérica de disparo, recarga e replicação. Comportamento específico de arma emergiu dos dados ao invés de código, habilitando autonomia do designer.'
        },
        {
          title: 'Sistema de Anexos',
          description: 'Projetei sistema de soquete de anexos com múltiplos pontos de anexo por arma. Anexos definiram modificadores de estatística aplicados à arma base. Sistema suportou incompatibilidades e pré-requisitos de anexos. Todos anexos propriamente replicados e sincronizados.'
        },
        {
          title: 'Recuo Procedural',
          description: 'Implementei recuo usando ruído Perlin para aleatoriedade horizontal e curvas de subida vertical configuráveis. Adicionei sistema de recuperação de recuo gradualmente retornando mira à posição original. Padrões de recuo ajustáveis por arma para sensação distinta.'
        },
        {
          title: 'Simulação Balística',
          description: 'Construí sistema de projétil com queda de bala e arrasto baseados em física. Suportei tanto armas hitscan quanto projéteis através de interface unificada. Implementei sistema de penetração de balas checando tipos de materiais. Otimizei chamadas de trace para performance.'
        }
      ],
      keyFeatures: [
        'Sistema de definição de armas orientado por dados',
        'Sistema modular de anexos com modificadores de estatística',
        'Recuo procedural com padrões ajustáveis por designer',
        'Simulação balística baseada em física',
        'Penetração de balas através de materiais',
        'Replicação de munição e recarga otimizada para rede',
        'Integração com sistemas de animação e VFX',
        'Ferramentas de debug visual para ajuste de armas'
      ],
      role: 'Programador de Sistemas de Combate'
    }
  },
  {
    id: 'character-movement-extension',
    title: 'Character Movement Extension',
    description: 'Advanced movement component extending CMC with mantling, sliding, wall-running, and contextual traversal. Fully networked with root motion support.',
    stack: ['Character Movement', 'C++', 'Animation Integration'],
    link: 'https://github.com',
    image: project6,
    category: 'Systems',
    duration: '6 months',
    role: 'Gameplay Programmer',
    teamSize: '7 developers',
    overview: 'Extended Unreal\'s Character Movement Component with advanced traversal mechanics including mantling, sliding, wall-running, and contextual climbing. System needed to feel responsive and fluid while maintaining network integrity and integrating seamlessly with animation system.',
    challenge: 'Unreal\'s default CMC only supported basic walking, jumping, and falling. Modern action games require advanced movement for engaging traversal. Implementing custom movement modes was complex due to CMC\'s intricate network prediction and replication systems. Animation integration was challenging - movements needed to look natural across varying ledge heights, wall angles, and player speeds. Network prediction for custom movement modes frequently caused rubber-banding.',
    solution: 'Extended CharacterMovementComponent with custom movement modes for each traversal type. Implemented comprehensive trace-based detection system identifying mantleable ledges, slide-able slopes, and wall-run surfaces. Built movement state machine managing transitions between modes with proper entry/exit conditions. Created root motion integration allowing animations to drive character position during complex moves. Implemented custom network prediction and replication for each movement mode, carefully managing client prediction, server validation, and correction. Developed animation blueprint interfaces providing smooth transitions and blending.',
    results: [
      'Shipped with 5 advanced movement modes feeling responsive and fluid',
      'Zero rubber-banding issues with custom movement on live servers',
      'Movement mechanics became core selling point in marketing',
      'Player feedback rated movement as "best in class"',
      'System used as foundation for sequel\'s movement'
    ],
    metrics: [
      {
        label: 'Movement Modes',
        value: '5',
        description: 'Advanced traversal systems'
      },
      {
        label: 'Network Stability',
        value: '100%',
        description: 'Zero rubber-banding issues'
      },
      {
        label: 'Player Rating',
        value: '4.8/5',
        description: 'Movement satisfaction score'
      },
      {
        label: 'Frame Time',
        value: '<0.5ms',
        description: 'Movement system overhead'
      }
    ],
    technicalDetails: [
      {
        title: 'Custom Movement Modes',
        description: 'Created new movement mode enum values and implemented full movement logic for each. Mantling used multiple trace queries determining optimal climb height and position. Sliding calculated velocity based on slope angle and player speed. Wall-running continuously traced for wall presence and valid angle.'
      },
      {
        title: 'Network Prediction',
        description: 'Implemented SavedMove serialization for custom movement data. Built correction logic comparing client prediction with server result. Created smooth interpolation system for corrections minimizing visual artifacts. Ensured all movement modes properly predicted and reconciled.'
      },
      {
        title: 'Root Motion Integration',
        description: 'Developed system allowing animations to drive character position during specific movement phases. Mantling animation positions character precisely at ledge top. Blend spaces controlled animation speed matching character velocity. Properly networked root motion transforms.'
      },
      {
        title: 'Contextual Detection',
        description: 'Built sophisticated trace and overlap query system continuously checking for traversal opportunities. Implemented scoring system choosing best option when multiple available. Added visual indicators showing valid traversal points. Optimized queries to maintain performance.'
      }
    ],
    keyFeatures: [
      'Mantling over ledges with automatic height adjustment',
      'Sliding on slopes with speed-based duration',
      'Wall-running with angle and duration limits',
      'Contextual climbing for marked surfaces',
      'Seamless transition between movement modes',
      'Full network prediction and replication',
      'Root motion animation support',
      'Visual debug tools for movement tuning'
    ],
    pt: {
      title: 'Extensão de Movimento de Personagem',
      description: 'Componente de movimento avançado estendendo CMC com escalada, deslizamento, corrida em parede e travessia contextual. Totalmente em rede com suporte a root motion.',
      overview: 'Estendi o Componente de Movimento de Personagem da Unreal com mecânicas avançadas de travessia incluindo escalada, deslizamento, corrida em parede e subida contextual. Sistema precisava ser responsivo e fluido mantendo integridade de rede e integrando perfeitamente com sistema de animação.',
      challenge: 'CMC padrão da Unreal apenas suportava caminhada, pulo e queda básicos. Jogos de ação modernos requerem movimento avançado para travessia envolvente. Implementar modos de movimento personalizados era complexo devido aos sistemas intrincados de predição e replicação de rede do CMC. Integração de animação era desafiadora - movimentos precisavam parecer naturais entre alturas variadas de bordas, ângulos de parede e velocidades de jogador. Predição de rede para modos de movimento personalizados frequentemente causava rubber-banding.',
      solution: 'Estendi CharacterMovementComponent com modos de movimento personalizados para cada tipo de travessia. Implementei sistema abrangente de detecção baseado em traces identificando bordas escaláveis, inclinações deslizáveis e superfícies para corrida em parede. Construí máquina de estados de movimento gerenciando transições entre modos com condições apropriadas de entrada/saída. Criei integração de root motion permitindo animações dirigirem posição do personagem durante movimentos complexos. Implementei predição e replicação de rede personalizadas para cada modo de movimento, gerenciando cuidadosamente predição do cliente, validação do servidor e correção. Desenvolvi interfaces de blueprint de animação fornecendo transições suaves e blending.',
      results: [
        'Lançado com 5 modos avançados de movimento sentindo responsivos e fluidos',
        'Zero problemas de rubber-banding com movimento personalizado em servidores live',
        'Mecânicas de movimento tornaram-se ponto de venda central no marketing',
        'Feedback de jogadores avaliou movimento como "melhor da classe"',
        'Sistema usado como fundação para movimento da sequência'
      ],
      metrics: [
        { label: 'Modos de Movimento', description: 'Sistemas avançados de travessia' },
        { label: 'Estabilidade de Rede', description: 'Zero problemas de rubber-banding' },
        { label: 'Avaliação de Jogadores', description: 'Pontuação de satisfação com movimento' },
        { label: 'Tempo de Frame', description: 'Sobrecarga do sistema de movimento' }
      ],
      technicalDetails: [
        {
          title: 'Modos de Movimento Personalizados',
          description: 'Criei novos valores de enum de modo de movimento e implementei lógica completa de movimento para cada. Escalada usou múltiplas consultas de trace determinando altura e posição ótimas de subida. Deslizamento calculou velocidade baseada em ângulo de inclinação e velocidade do jogador. Corrida em parede continuamente traçou presença de parede e ângulo válido.'
        },
        {
          title: 'Predição de Rede',
          description: 'Implementei serialização de SavedMove para dados de movimento personalizado. Construí lógica de correção comparando predição do cliente com resultado do servidor. Criei sistema de interpolação suave para correções minimizando artefatos visuais. Garanti que todos modos de movimento fossem propriamente preditos e reconciliados.'
        },
        {
          title: 'Integração de Root Motion',
          description: 'Desenvolvi sistema permitindo animações dirigirem posição do personagem durante fases específicas de movimento. Animação de escalada posiciona personagem precisamente no topo da borda. Blend spaces controlaram velocidade de animação correspondendo velocidade do personagem. Transformadas de root motion propriamente em rede.'
        },
        {
          title: 'Detecção Contextual',
          description: 'Construí sistema sofisticado de trace e overlap query continuamente checando oportunidades de travessia. Implementei sistema de pontuação escolhendo melhor opção quando múltiplas disponíveis. Adicionei indicadores visuais mostrando pontos de travessia válidos. Otimizei consultas para manter performance.'
        }
      ],
      keyFeatures: [
        'Escalada sobre bordas com ajuste automático de altura',
        'Deslizamento em inclinações com duração baseada em velocidade',
        'Corrida em parede com limites de ângulo e duração',
        'Subida contextual para superfícies marcadas',
        'Transição perfeita entre modos de movimento',
        'Predição e replicação de rede completas',
        'Suporte a animação de root motion',
        'Ferramentas de debug visual para ajuste de movimento'
      ],
      role: 'Programador de Gameplay'
    }
  },
  {
    id: 'unity-inventory-crafting',
    title: 'Inventory & Crafting System (Unity)',
    description: 'Comprehensive inventory and crafting framework built in Unity C#. Features grid-based storage, drag-and-drop UI, recipe system, and item serialization with save/load support.',
    stack: ['Unity', 'C#', 'ScriptableObjects', 'UI Toolkit'],
    link: 'https://github.com',
    image: project1,
    category: 'Unity',
    duration: '4 months',
    role: 'Lead Gameplay Programmer',
    teamSize: '6 developers',
    overview: 'Designed and implemented a flexible inventory and crafting system for an RPG-style game in Unity. System supports grid-based inventory management, item stacking, equipment slots, drag-and-drop interactions, recipe-based crafting, and persistent data storage.',
    challenge: 'The game required a sophisticated inventory system handling hundreds of item types with complex interactions. Players needed intuitive drag-and-drop UI that felt responsive. Crafting recipes needed to support multiple ingredients, varying quantities, and prerequisite conditions. System had to serialize efficiently for save/load functionality and support modding through data files.',
    solution: 'Architected inventory system using ScriptableObject-based item definitions for designer-friendly workflow. Implemented grid-based storage using 2D arrays with collision detection for differently-sized items. Created event-driven architecture allowing UI and gameplay systems to react to inventory changes. Built crafting system using recipe ScriptableObjects with ingredient requirements and crafting station prerequisites. Developed custom serialization handling inventory state, item instances, and player progression. Integrated Unity UI Toolkit for responsive, scalable interface.',
    results: [
      'System supports 200+ unique items with varied properties',
      'Crafting system handles 80+ recipes with complex requirements',
      'Save/load completes in under 100ms for full inventory state',
      'Zero UI performance issues with large inventories (500+ items)',
      'Modding community created 50+ custom item packs'
    ],
    metrics: [
      {
        label: 'Item Types',
        value: '200+',
        description: 'Unique items supported'
      },
      {
        label: 'Recipes',
        value: '80+',
        description: 'Crafting recipes implemented'
      },
      {
        label: 'Save Time',
        value: '<100ms',
        description: 'Full inventory serialization'
      },
      {
        label: 'Mod Support',
        value: '50+',
        description: 'Community item packs created'
      }
    ],
    technicalDetails: [
      {
        title: 'ScriptableObject Architecture',
        description: 'Item definitions stored as ScriptableObjects containing stats, icons, stack limits, and behavior flags. Created inheritance hierarchy supporting equipment, consumables, quest items, and crafting materials. Designers could create new items without programmer intervention.'
      },
      {
        title: 'Grid-Based Storage',
        description: 'Implemented flexible grid system supporting items of varying sizes (1x1, 2x2, etc.). Used collision detection preventing overlap and pathfinding for auto-arrange functionality. Supported multiple inventory containers with different capacities and restrictions.'
      },
      {
        title: 'Event-Driven Updates',
        description: 'Built UnityEvent-based system broadcasting inventory changes. UI elements subscribed to specific events (item added, removed, quantity changed) for efficient updates. Prevented unnecessary full UI refreshes improving performance.'
      },
      {
        title: 'Recipe System',
        description: 'Crafting recipes defined as ScriptableObjects with ingredient lists, output items, and crafting time. Supported conditional recipes requiring specific tools, player level, or completed quests. Implemented crafting queue allowing batch production.'
      }
    ],
    keyFeatures: [
      'ScriptableObject-based item definition system',
      'Grid-based inventory with item size support',
      'Drag-and-drop UI with visual feedback',
      'Item stacking with configurable stack limits',
      'Equipment slots with stat modification',
      'Recipe-based crafting with prerequisites',
      'Custom serialization for save/load',
      'Modding support through external data files'
    ],
    pt: {
      title: 'Sistema de Inventário & Criação (Unity)',
      description: 'Framework abrangente de inventário e criação construído em Unity C#. Possui armazenamento baseado em grade, UI de arrastar e soltar, sistema de receitas e serialização de itens com suporte a salvar/carregar.',
      overview: 'Projetei e implementei um sistema flexível de inventário e criação para um jogo estilo RPG em Unity. Sistema suporta gerenciamento de inventário baseado em grade, empilhamento de itens, slots de equipamento, interações de arrastar e soltar, criação baseada em receitas e armazenamento persistente de dados.',
      challenge: 'O jogo requeria um sistema sofisticado de inventário lidando com centenas de tipos de itens com interações complexas. Jogadores precisavam de UI intuitiva de arrastar e soltar que fosse responsiva. Receitas de criação precisavam suportar múltiplos ingredientes, quantidades variadas e condições de pré-requisito. Sistema tinha que serializar eficientemente para funcionalidade de salvar/carregar e suportar modding através de arquivos de dados.',
      solution: 'Arquitetei sistema de inventário usando definições de itens baseadas em ScriptableObject para workflow amigável para designers. Implementei armazenamento baseado em grade usando arrays 2D com detecção de colisão para itens de tamanhos diferentes. Criei arquitetura orientada a eventos permitindo sistemas de UI e gameplay reagirem a mudanças de inventário. Construí sistema de criação usando ScriptableObjects de receitas com requisitos de ingredientes e pré-requisitos de estações de criação. Desenvolvi serialização personalizada lidando com estado de inventário, instâncias de itens e progressão do jogador. Integrei Unity UI Toolkit para interface responsiva e escalável.',
      results: [
        'Sistema suporta mais de 200 itens únicos com propriedades variadas',
        'Sistema de criação lida com mais de 80 receitas com requisitos complexos',
        'Salvar/carregar completa em menos de 100ms para estado completo de inventário',
        'Zero problemas de performance de UI com inventários grandes (mais de 500 itens)',
        'Comunidade de modding criou mais de 50 pacotes de itens personalizados'
      ],
      metrics: [
        { label: 'Tipos de Itens', description: 'Itens únicos suportados' },
        { label: 'Receitas', description: 'Receitas de criação implementadas' },
        { label: 'Tempo de Salvamento', description: 'Serialização completa de inventário' },
        { label: 'Suporte a Mods', description: 'Pacotes de itens da comunidade criados' }
      ],
      technicalDetails: [
        {
          title: 'Arquitetura ScriptableObject',
          description: 'Definições de itens armazenadas como ScriptableObjects contendo estatísticas, ícones, limites de pilha e flags de comportamento. Criei hierarquia de herança suportando equipamentos, consumíveis, itens de missão e materiais de criação. Designers podiam criar novos itens sem intervenção de programador.'
        },
        {
          title: 'Armazenamento Baseado em Grade',
          description: 'Implementei sistema de grade flexível suportando itens de tamanhos variados (1x1, 2x2, etc.). Usei detecção de colisão prevenindo sobreposição e pathfinding para funcionalidade de auto-arranjo. Suportei múltiplos containers de inventário com diferentes capacidades e restrições.'
        },
        {
          title: 'Atualizações Orientadas a Eventos',
          description: 'Construí sistema baseado em UnityEvent transmitindo mudanças de inventário. Elementos de UI inscreveram-se em eventos específicos (item adicionado, removido, quantidade mudada) para atualizações eficientes. Preveni refreshes completos de UI desnecessários melhorando performance.'
        },
        {
          title: 'Sistema de Receitas',
          description: 'Receitas de criação definidas como ScriptableObjects com listas de ingredientes, itens de saída e tempo de criação. Suportei receitas condicionais requerendo ferramentas específicas, nível de jogador ou missões completadas. Implementei fila de criação permitindo produção em lote.'
        }
      ],
      keyFeatures: [
        'Sistema de definição de itens baseado em ScriptableObject',
        'Inventário baseado em grade com suporte a tamanho de item',
        'UI de arrastar e soltar com feedback visual',
        'Empilhamento de itens com limites de pilha configuráveis',
        'Slots de equipamento com modificação de estatísticas',
        'Criação baseada em receitas com pré-requisitos',
        'Serialização personalizada para salvar/carregar',
        'Suporte a modding através de arquivos de dados externos'
      ],
      role: 'Programador Líder de Gameplay'
    }
  },
  {
    id: 'unity-state-machine-ai',
    title: 'Hierarchical State Machine AI (Unity)',
    description: 'Flexible AI framework using hierarchical state machines and behavior trees. Supports dynamic state transitions, blackboard data sharing, and visual debugging tools.',
    stack: ['Unity', 'C#', 'State Machines', 'Editor Tools'],
    link: 'https://github.com',
    image: project3,
    category: 'Unity',
    duration: '5 months',
    role: 'AI Programmer',
    teamSize: '5 developers',
    overview: 'Developed comprehensive AI system combining hierarchical state machines with behavior tree elements for an action game. System allows designers to create complex enemy behaviors through visual tools while maintaining performance with dozens of active AI agents.',
    challenge: 'Game required varied enemy types with distinct behaviors while sharing common patterns (patrol, chase, attack, retreat). Pure state machines became unwieldy with many states and transitions. Behavior trees lacked clarity for designers. AI needed to react dynamically to environment and player actions. Debugging AI behavior in play mode was difficult without visualization tools.',
    solution: 'Implemented hierarchical state machine where states could contain sub-states, allowing behavior reuse and composition. Created blackboard system for data sharing between states and AI agents. Built visual state machine editor as Unity Editor extension allowing designers to create and modify AI graphs. Integrated sensory system providing AI with sight, hearing, and memory of player/world events. Developed runtime debugging visualizer showing active states, transitions, and blackboard data in Scene view.',
    results: [
      'Created 15 distinct enemy types using modular state compositions',
      'Designer iteration time reduced from days to hours',
      'Performance maintained at 60fps with 40+ active AI agents',
      'Visual tools enabled non-programmers to create AI behaviors',
      'Debugging time reduced by 60% with visualization tools'
    ],
    metrics: [
      {
        label: 'Enemy Types',
        value: '15',
        description: 'Distinct AI behaviors created'
      },
      {
        label: 'Active Agents',
        value: '40+',
        description: 'Concurrent AI at 60fps'
      },
      {
        label: 'Debug Time Saved',
        value: '60%',
        description: 'Faster issue resolution'
      },
      {
        label: 'Designer Adoption',
        value: '100%',
        description: 'Team self-sufficiency'
      }
    ],
    technicalDetails: [
      {
        title: 'Hierarchical State Structure',
        description: 'Implemented parent-child state relationships where child states inherit context from parents. States could be composite (containing substates) or leaf (executing behavior). Transitions evaluated hierarchically checking child conditions first, then parent conditions.'
      },
      {
        title: 'Blackboard System',
        description: 'Created centralized data storage accessible by all states. Supported typed data (Vector3, GameObjects, enums) with event notifications on value changes. Blackboard scoped per-agent preventing data leakage between AI instances.'
      },
      {
        title: 'Visual State Machine Editor',
        description: 'Built custom Unity Editor window for creating state graphs. Nodes represented states, edges showed transitions with condition labels. Supported copy-paste, templates, and prefab-like state machine assets. Editor validated graphs preventing invalid configurations.'
      },
      {
        title: 'Sensory System',
        description: 'Implemented sight using cone-based visibility checks with occlusion testing. Hearing system propagated sound events through distance-based attenuation. Memory system retained knowledge of player position even after losing sight, with decay over time.'
      }
    ],
    keyFeatures: [
      'Hierarchical state machine with parent-child relationships',
      'Blackboard data sharing between states',
      'Visual state machine editor as Unity extension',
      'Sensory system with sight, hearing, and memory',
      'Runtime visualization of active states and data',
      'Modular state composition for behavior reuse',
      'Event-driven transition conditions',
      'Performance-optimized update scheduling'
    ],
    pt: {
      title: 'IA com Máquina de Estados Hierárquica (Unity)',
      description: 'Framework de IA flexível usando máquinas de estados hierárquicas e árvores de comportamento. Suporta transições de estado dinâmicas, compartilhamento de dados blackboard e ferramentas de debugging visual.',
      overview: 'Desenvolvi sistema abrangente de IA combinando máquinas de estados hierárquicas com elementos de árvore de comportamento para um jogo de ação. Sistema permite designers criarem comportamentos complexos de inimigos através de ferramentas visuais mantendo performance com dezenas de agentes de IA ativos.',
      challenge: 'Jogo requeria tipos variados de inimigos com comportamentos distintos compartilhando padrões comuns (patrulha, perseguição, ataque, recuo). Máquinas de estados puras tornaram-se inmanejáveis com muitos estados e transições. Árvores de comportamento faltavam clareza para designers. IA precisava reagir dinamicamente ao ambiente e ações do jogador. Debugar comportamento de IA no modo de jogo era difícil sem ferramentas de visualização.',
      solution: 'Implementei máquina de estados hierárquica onde estados podiam conter sub-estados, permitindo reutilização e composição de comportamento. Criei sistema blackboard para compartilhamento de dados entre estados e agentes de IA. Construí editor visual de máquina de estados como extensão do Unity Editor permitindo designers criarem e modificarem grafos de IA. Integrei sistema sensorial fornecendo IA com visão, audição e memória de eventos do jogador/mundo. Desenvolvi visualizador de debugging em runtime mostrando estados ativos, transições e dados blackboard na Scene view.',
      results: [
        'Criados 15 tipos distintos de inimigos usando composições modulares de estado',
        'Tempo de iteração do designer reduzido de dias para horas',
        'Performance mantida a 60fps com mais de 40 agentes de IA ativos',
        'Ferramentas visuais habilitaram não-programadores a criar comportamentos de IA',
        'Tempo de debugging reduzido em 60% com ferramentas de visualização'
      ],
      metrics: [
        { label: 'Tipos de Inimigos', description: 'Comportamentos distintos de IA criados' },
        { label: 'Agentes Ativos', description: 'IA concorrente a 60fps' },
        { label: 'Tempo de Debug Economizado', description: 'Resolução de problemas mais rápida' },
        { label: 'Adoção do Designer', description: 'Auto-suficiência da equipe' }
      ],
      technicalDetails: [
        {
          title: 'Estrutura de Estados Hierárquica',
          description: 'Implementei relacionamentos pai-filho de estados onde estados filhos herdam contexto dos pais. Estados podiam ser compostos (contendo subestados) ou folhas (executando comportamento). Transições avaliadas hierarquicamente checando condições de filho primeiro, depois condições de pai.'
        },
        {
          title: 'Sistema Blackboard',
          description: 'Criei armazenamento centralizado de dados acessível por todos estados. Suportei dados tipados (Vector3, GameObjects, enums) com notificações de eventos em mudanças de valor. Blackboard com escopo por agente prevenindo vazamento de dados entre instâncias de IA.'
        },
        {
          title: 'Editor Visual de Máquina de Estados',
          description: 'Construí janela personalizada do Unity Editor para criar grafos de estado. Nós representavam estados, arestas mostravam transições com labels de condição. Suportei copiar-colar, templates e assets de máquina de estados tipo prefab. Editor validou grafos prevenindo configurações inválidas.'
        },
        {
          title: 'Sistema Sensorial',
          description: 'Implementei visão usando checagens de visibilidade baseadas em cone com teste de oclusão. Sistema auditivo propagou eventos de som através de atenuação baseada em distância. Sistema de memória reteve conhecimento de posição do jogador mesmo após perder visão, com decaimento ao longo do tempo.'
        }
      ],
      keyFeatures: [
        'Máquina de estados hierárquica com relacionamentos pai-filho',
        'Compartilhamento de dados blackboard entre estados',
        'Editor visual de máquina de estados como extensão Unity',
        'Sistema sensorial com visão, audição e memória',
        'Visualização em runtime de estados ativos e dados',
        'Composição modular de estados para reutilização de comportamento',
        'Condições de transição orientadas a eventos',
        'Agendamento de atualização otimizado para performance'
      ],
      role: 'Programador de IA'
    }
  },
  {
    id: 'unity-pooling-system',
    title: 'Object Pooling & Memory Management (Unity)',
    description: 'High-performance object pooling system with automatic lifecycle management, memory optimization, and profiling tools. Reduced GC allocations by 85% and improved frame stability.',
    stack: ['Unity', 'C#', 'Performance', 'Memory Management'],
    link: 'https://github.com',
    image: project5,
    category: 'Unity',
    duration: '3 months',
    role: 'Systems Programmer',
    teamSize: '4 developers',
    overview: 'Implemented comprehensive object pooling system addressing performance issues caused by frequent GameObject instantiation and destruction. System provides automatic pool management, configurable warm-up, and monitoring tools for identifying memory bottlenecks.',
    challenge: 'Game experienced frequent frame drops and stuttering due to garbage collection spikes. Profiling revealed hundreds of GameObjects being instantiated and destroyed each second (projectiles, VFX, enemies). Instantiate() and Destroy() calls were major performance bottlenecks. Manual pooling implementations were inconsistent and error-prone. Mobile platforms particularly affected by GC pauses.',
    solution: 'Built generic object pooling system using C# generics supporting any Component type. Implemented lazy initialization creating pool objects on-demand. Added configurable warm-up preloading expected quantities. Created automatic return-to-pool after lifetime expiration or manual release. Built pool monitoring showing active/inactive counts and memory usage. Integrated with Unity\'s ParticleSystem for automatic return on completion. Implemented pool cleanup strategies (time-based, size-based) preventing unlimited growth.',
    results: [
      'Reduced GC allocations by 85% in high-intensity scenes',
      'Frame time variance decreased from 12ms to 2ms',
      'Eliminated visible stuttering during combat sequences',
      'Mobile frame rate improved from 35fps to stable 60fps',
      'Memory footprint reduced by 40% through reuse'
    ],
    metrics: [
      {
        label: 'GC Reduction',
        value: '85%',
        description: 'Garbage collection allocations saved'
      },
      {
        label: 'Frame Stability',
        value: '2ms',
        description: 'Frame time variance (from 12ms)'
      },
      {
        label: 'Mobile FPS',
        value: '60fps',
        description: 'Stable performance (from 35fps)'
      },
      {
        label: 'Memory Saved',
        value: '40%',
        description: 'Footprint reduction through reuse'
      }
    ],
    technicalDetails: [
      {
        title: 'Generic Pool Implementation',
        description: 'Created ObjectPool<T> class using C# generics working with any Component. Pools stored in Dictionary keyed by prefab instance ID. Implemented Stack-based available object tracking for O(1) Get/Return operations.'
      },
      {
        title: 'Automatic Lifecycle Management',
        description: 'Added PooledObject component tracking pool membership and lifetime. OnDisable() automatically returns objects to pool. Optional auto-return timer for fire-and-forget spawns. Integrated with ParticleSystem.OnParticleSystemStopped event.'
      },
      {
        title: 'Warm-up System',
        description: 'Implemented configurable preloading creating initial pool capacity during load screens. Warm-up configurations stored in ScriptableObjects defining prefab, initial count, max size. Prevented first-spawn allocation hitches during gameplay.'
      },
      {
        title: 'Pool Monitoring Tools',
        description: 'Built custom Unity Editor window showing all active pools with stats (active, available, peak usage). Added runtime gizmos visualizing pooled objects in Scene view. Created profiler markers for easy identification in Unity Profiler.'
      }
    ],
    keyFeatures: [
      'Generic object pool supporting any Component type',
      'Automatic lifecycle management and return-to-pool',
      'Configurable warm-up for preloading pools',
      'ParticleSystem integration for automatic cleanup',
      'Pool monitoring and debugging tools',
      'Memory-efficient Stack-based storage',
      'Size limits and cleanup strategies',
      'Zero allocation Get/Return operations'
    ],
    pt: {
      title: 'Pooling de Objetos & Gerenciamento de Memória (Unity)',
      description: 'Sistema de pooling de objetos de alta performance com gerenciamento automático de ciclo de vida, otimização de memória e ferramentas de profiling. Reduziu alocações GC em 85% e melhorou estabilidade de frames.',
      overview: 'Implementei sistema abrangente de pooling de objetos abordando problemas de performance causados por instanciação e destruição frequentes de GameObject. Sistema fornece gerenciamento automático de pool, aquecimento configurável e ferramentas de monitoramento para identificar gargalos de memória.',
      challenge: 'Jogo experimentava quedas frequentes de frames e stuttering devido a picos de garbage collection. Profiling revelou centenas de GameObjects sendo instanciados e destruídos a cada segundo (projéteis, VFX, inimigos). Chamadas Instantiate() e Destroy() eram gargalos maiores de performance. Implementações manuais de pooling eram inconsistentes e propensas a erro. Plataformas móveis particularmente afetadas por pausas GC.',
      solution: 'Construí sistema genérico de pooling de objetos usando generics C# suportando qualquer tipo Component. Implementei inicialização lazy criando objetos de pool sob demanda. Adicionei aquecimento configurável pré-carregando quantidades esperadas. Criei retorno automático ao pool após expiração de tempo de vida ou liberação manual. Construí monitoramento de pool mostrando contagens ativo/inativo e uso de memória. Integrei com ParticleSystem da Unity para retorno automático na conclusão. Implementei estratégias de limpeza de pool (baseadas em tempo, tamanho) prevenindo crescimento ilimitado.',
      results: [
        'Reduziu alocações GC em 85% em cenas de alta intensidade',
        'Variação de tempo de frame diminuiu de 12ms para 2ms',
        'Eliminou stuttering visível durante sequências de combate',
        'Taxa de frames móvel melhorou de 35fps para 60fps estável',
        'Pegada de memória reduzida em 40% através de reutilização'
      ],
      metrics: [
        { label: 'Redução GC', description: 'Alocações de garbage collection economizadas' },
        { label: 'Estabilidade de Frame', description: 'Variação de tempo de frame (de 12ms)' },
        { label: 'FPS Móvel', description: 'Performance estável (de 35fps)' },
        { label: 'Memória Economizada', description: 'Redução de pegada através de reutilização' }
      ],
      technicalDetails: [
        {
          title: 'Implementação de Pool Genérico',
          description: 'Criei classe ObjectPool<T> usando generics C# funcionando com qualquer Component. Pools armazenados em Dictionary com chave por instance ID de prefab. Implementei rastreamento de objeto disponível baseado em Stack para operações Get/Return O(1).'
        },
        {
          title: 'Gerenciamento Automático de Ciclo de Vida',
          description: 'Adicionei componente PooledObject rastreando associação a pool e tempo de vida. OnDisable() retorna automaticamente objetos ao pool. Timer opcional de auto-retorno para spawns fire-and-forget. Integrado com evento ParticleSystem.OnParticleSystemStopped.'
        },
        {
          title: 'Sistema de Aquecimento',
          description: 'Implementei pré-carregamento configurável criando capacidade inicial de pool durante telas de carregamento. Configurações de aquecimento armazenadas em ScriptableObjects definindo prefab, contagem inicial, tamanho máximo. Preveni hitches de alocação de primeiro-spawn durante gameplay.'
        },
        {
          title: 'Ferramentas de Monitoramento de Pool',
          description: 'Construí janela personalizada do Unity Editor mostrando todos pools ativos com estatísticas (ativo, disponível, uso de pico). Adicionei gizmos em runtime visualizando objetos em pool na Scene view. Criei marcadores de profiler para identificação fácil no Unity Profiler.'
        }
      ],
      keyFeatures: [
        'Pool de objetos genérico suportando qualquer tipo Component',
        'Gerenciamento automático de ciclo de vida e retorno ao pool',
        'Aquecimento configurável para pré-carregamento de pools',
        'Integração ParticleSystem para limpeza automática',
        'Ferramentas de monitoramento e debugging de pool',
        'Armazenamento eficiente em memória baseado em Stack',
        'Limites de tamanho e estratégias de limpeza',
        'Operações Get/Return com zero alocação'
      ],
      role: 'Programador de Sistemas'
    }
  },
  {
    id: 'unity-procedural-generation',
    title: 'Procedural Level Generation (Unity)',
    description: 'Wave Function Collapse-based procedural generation system creating coherent game levels. Features constraint-based tile placement, multi-layer generation, and seed-based reproducibility.',
    stack: ['Unity', 'C#', 'Algorithms', 'Procedural Generation'],
    link: 'https://github.com',
    image: project2,
    category: 'Unity',
    duration: '6 months',
    role: 'Technical Designer',
    teamSize: '7 developers',
    overview: 'Developed procedural level generation system using Wave Function Collapse algorithm for roguelike game. System generates diverse, playable levels following designer-defined rules while ensuring gameplay quality and visual coherence.',
    challenge: 'Manual level design couldn\'t provide enough content variety for roguelike with high replayability requirements. Pure random generation created nonsensical, unplayable layouts. System needed to respect gameplay constraints (player must reach exit, no inaccessible areas, proper difficulty curve). Generated levels needed visual consistency matching hand-crafted quality. Performance was critical - generation had to complete within loading screen duration.',
    solution: 'Implemented Wave Function Collapse algorithm adapted for tile-based level generation. Created constraint system defining valid tile adjacencies (walls connect properly, corridors align, rooms have entrances). Built multi-pass generation: layout skeleton first (rooms and corridors), then detail tiles (decorations, props), finally gameplay elements (enemies, items, exit). Implemented path validation ensuring player can reach all required locations. Added seeded random generation for reproducible levels. Developed visual rule editor allowing designers to author constraints without code.',
    results: [
      'Generated unique levels with 95% playability success rate',
      'Level generation completes in under 2 seconds',
      'Player feedback rated generated levels as "hand-crafted quality"',
      'Replayability increased with effectively infinite level variety',
      'Designers created 8 distinct level themes using rule editor'
    ],
    metrics: [
      {
        label: 'Playability',
        value: '95%',
        description: 'Generated levels meeting quality standards'
      },
      {
        label: 'Generation Time',
        value: '<2s',
        description: 'Complete level generation duration'
      },
      {
        label: 'Level Themes',
        value: '8',
        description: 'Distinct visual themes created'
      },
      {
        label: 'Replayability',
        value: '∞',
        description: 'Effectively infinite level variety'
      }
    ],
    technicalDetails: [
      {
        title: 'Wave Function Collapse Algorithm',
        description: 'Implemented WFC selecting tiles iteratively based on lowest entropy (fewest possibilities). Each tile placement propagates constraints to neighbors reducing their possibilities. Backtracking handles contradictions restarting from previous valid state.'
      },
      {
        title: 'Constraint System',
        description: 'Tile adjacency rules defined in ScriptableObjects specifying valid neighbors for each edge. Supported weighted probabilities for tile selection creating natural variation. Constraints included rotation and mirroring for tile reuse.'
      },
      {
        title: 'Multi-Pass Generation',
        description: 'First pass generates high-level layout (rooms, corridors) using coarse tiles. Second pass fills details using fine tiles respecting layout boundaries. Third pass places gameplay elements using heatmaps and rules. Each pass validates constraints before proceeding.'
      },
      {
        title: 'Path Validation',
        description: 'After generation, A* pathfinding verifies player can reach all required locations (keys, exit). If unreachable areas detected, algorithm places connecting corridors or regenerates problematic sections. Ensured all levels completable.'
      }
    ],
    keyFeatures: [
      'Wave Function Collapse procedural generation',
      'Constraint-based tile placement system',
      'Multi-pass generation (layout, detail, gameplay)',
      'Seed-based reproducible generation',
      'Path validation ensuring level completability',
      'Visual rule editor for designers',
      'Multiple level themes with distinct aesthetics',
      'Performance-optimized for fast generation'
    ],
    pt: {
      title: 'Geração Procedural de Níveis (Unity)',
      description: 'Sistema de geração procedural baseado em Wave Function Collapse criando níveis de jogo coerentes. Possui posicionamento de tiles baseado em restrições, geração multi-camadas e reprodutibilidade baseada em seed.',
      overview: 'Desenvolvi sistema de geração procedural de níveis usando algoritmo Wave Function Collapse para jogo roguelike. Sistema gera níveis diversos e jogáveis seguindo regras definidas por designers garantindo qualidade de gameplay e coerência visual.',
      challenge: 'Design manual de níveis não podia fornecer variedade de conteúdo suficiente para roguelike com requisitos altos de rejogabilidade. Geração puramente aleatória criava layouts sem sentido e não-jogáveis. Sistema precisava respeitar restrições de gameplay (jogador deve alcançar saída, sem áreas inacessíveis, curva de dificuldade apropriada). Níveis gerados precisavam de consistência visual correspondendo qualidade artesanal. Performance era crítica - geração tinha que completar dentro da duração da tela de carregamento.',
      solution: 'Implementei algoritmo Wave Function Collapse adaptado para geração de níveis baseados em tiles. Criei sistema de restrições definindo adjacências válidas de tiles (paredes conectam apropriadamente, corredores alinham, salas têm entradas). Construí geração multi-passo: esqueleto de layout primeiro (salas e corredores), depois tiles de detalhe (decorações, props), finalmente elementos de gameplay (inimigos, itens, saída). Implementei validação de caminho garantindo que jogador possa alcançar todos locais requeridos. Adicionei geração aleatória com seed para níveis reprodutíveis. Desenvolvi editor visual de regras permitindo designers autorizarem restrições sem código.',
      results: [
        'Gerou níveis únicos com taxa de sucesso de jogabilidade de 95%',
        'Geração de nível completa em menos de 2 segundos',
        'Feedback de jogadores avaliou níveis gerados como "qualidade artesanal"',
        'Rejogabilidade aumentada com variedade de nível efetivamente infinita',
        'Designers criaram 8 temas distintos de nível usando editor de regras'
      ],
      metrics: [
        { label: 'Jogabilidade', description: 'Níveis gerados atendendo padrões de qualidade' },
        { label: 'Tempo de Geração', description: 'Duração completa de geração de nível' },
        { label: 'Temas de Nível', description: 'Temas visuais distintos criados' },
        { label: 'Rejogabilidade', description: 'Variedade de nível efetivamente infinita' }
      ],
      technicalDetails: [
        {
          title: 'Algoritmo Wave Function Collapse',
          description: 'Implementei WFC selecionando tiles iterativamente baseado em menor entropia (menos possibilidades). Cada posicionamento de tile propaga restrições para vizinhos reduzindo suas possibilidades. Backtracking lida com contradições reiniciando de estado válido anterior.'
        },
        {
          title: 'Sistema de Restrições',
          description: 'Regras de adjacência de tile definidas em ScriptableObjects especificando vizinhos válidos para cada borda. Suportei probabilidades ponderadas para seleção de tile criando variação natural. Restrições incluíram rotação e espelhamento para reutilização de tile.'
        },
        {
          title: 'Geração Multi-Passo',
          description: 'Primeiro passo gera layout de alto nível (salas, corredores) usando tiles grossos. Segundo passo preenche detalhes usando tiles finos respeitando limites de layout. Terceiro passo coloca elementos de gameplay usando heatmaps e regras. Cada passo valida restrições antes de prosseguir.'
        },
        {
          title: 'Validação de Caminho',
          description: 'Após geração, pathfinding A* verifica que jogador pode alcançar todos locais requeridos (chaves, saída). Se áreas inalcançáveis detectadas, algoritmo coloca corredores conectores ou regenera seções problemáticas. Garantiu que todos níveis fossem completáveis.'
        }
      ],
      keyFeatures: [
        'Geração procedural Wave Function Collapse',
        'Sistema de posicionamento de tiles baseado em restrições',
        'Geração multi-passo (layout, detalhe, gameplay)',
        'Geração reprodutível baseada em seed',
        'Validação de caminho garantindo completabilidade de nível',
        'Editor visual de regras para designers',
        'Múltiplos temas de nível com estéticas distintas',
        'Otimizado para performance para geração rápida'
      ],
      role: 'Designer Técnico'
    }
  }
]
