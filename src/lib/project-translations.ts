export const projectTranslationsPt: Record<string, {
  title: string
  description: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  metrics: { label: string; description: string }[]
  technicalDetails: { title: string; description: string }[]
  keyFeatures: string[]
  role: string
}> = {
  'ai-director-encounter-system': {
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
  },
  'network-optimization-pipeline': {
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
  },
  'weapon-system-framework': {
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
        description: 'Construí sistema de projétil com queda de bala e arrasto baseados em física. Suportou tanto armas hitscan quanto projéteis através de interface unificada. Implementei sistema de penetração de balas checando tipos de materiais. Otimizei chamadas de trace para performance.'
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
  },
  'character-movement-extension': {
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
}

export function getProjectTranslation(projectId: string, lang: 'en' | 'pt', field: string): any {
  if (lang === 'pt' && projectTranslationsPt[projectId]) {
    const translation = projectTranslationsPt[projectId]
    const keys = field.split('.')
    let value: any = translation
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value
  }
  return undefined
}
