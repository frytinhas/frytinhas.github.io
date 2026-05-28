export const articleTranslationsPt: Record<string, {
  title: string
  excerpt: string
  content: string
}> = {
  'optimizing-gameplay-ability-system': {
    title: 'Otimizando Gameplay Ability System para Performance',
    excerpt: 'Análise profunda sobre otimização do GAS da Unreal para ambientes multiplayer em larga escala. Aprenda como reduzir sobrecarga de replicação e melhorar performance de execução de habilidades.',
    content: `# Otimizando Gameplay Ability System para Performance

O Gameplay Ability System (GAS) é poderoso mas pode se tornar um gargalo de performance em jogos multiplayer se não for otimizado adequadamente. Este artigo explora técnicas práticas de otimização que usei em produção.

## Entendendo a Sobrecarga do GAS

O GAS introduz várias considerações de performance:
- Gameplay Effects com múltiplos modificadores
- Replicação e agregação de atributos
- Consultas e atualizações de tags
- Ativação e predição de habilidades

## Otimização de Replicação

Um dos maiores ganhos vem da otimização de quais dados realmente precisam replicar. Nem todas mudanças de atributos precisam ir pela rede, e nem todos clientes precisam de todos os dados.

### Replicação Condicional
Use DOREPLIFETIME_CONDITION para controlar quando atributos replicam. Por exemplo, saúde pode precisar replicar apenas para o jogador proprietário e companheiros de equipe próximos.

### Agregação de Atributos
Agregue múltiplas mudanças de atributos antes da replicação. Ao invés de enviar 5 atualizações separadas, agrupe-as em um evento de replicação.

## Otimização de Consultas de Tags

Gameplay Tags são usadas extensivamente no GAS, mas comparações de strings podem ser caras quando feitas frequentemente.

### Cache de Consultas de Tags
Ao invés de repetidamente consultar "Character.State.Stunned", faça cache do resultado e atualize apenas quando tags mudarem.

### Use Hierarquias de Tags Sabiamente
Hierarquias de tags mais profundas significam mais comparações de strings. Mantenha hierarquias rasas para tags verificadas frequentemente.

## Execução de Habilidades

Ativação de habilidades envolve múltiplos passos que podem ser otimizados:

### Habilidades Preditivas
Marque habilidades como preditivas quando possível. Isso elimina latência de ida e volta para ações do cliente.

### Minimize RPCs de Servidor
Agrupe inputs de habilidades quando possível. Se ativando múltiplas habilidades em rápida sucessão, considere combinar os RPCs.

## Resultados

Após implementar essas otimizações em um projeto multiplayer de 100 jogadores:
- Reduziu sobrecarga de CPU do GAS em 40%
- Eliminou lag de ativação de habilidades para jogadores locais
- Diminuiu uso de largura de banda em 30% para replicação de habilidades

## Conclusão

Otimização do GAS requer entender quais dados são críticos e o que pode ser adiado ou eliminado. Profile primeiro, otimize depois, e sempre teste com condições de rede realistas.`
  },
  'building-responsive-combat-systems': {
    title: 'Construindo Sistemas de Combate Responsivos no Unreal Engine',
    excerpt: 'Técnicas para criar combate que seja imediato e satisfatório. Cobrindo detecção de acertos, sistemas de feedback e integração de animação.',
    content: `# Construindo Sistemas de Combate Responsivos no Unreal Engine

Combate responsivo é o que separa bons jogos de ação de ótimos. Jogadores devem sentir cada acerto, cada esquiva, cada aparada. Este artigo detalha como alcançar essa sensação.

## A Regra dos 100ms

Input para feedback visual deve acontecer dentro de 100 milissegundos. Mais do que isso e o combate parece lento. Isso significa otimizar cada etapa:

1. Processamento de input
2. Ativação de habilidade
3. Início de animação
4. Detecção de acerto
5. Feedback visual/áudio

## Estratégias de Detecção de Acertos

Escolha a detecção de acertos certa para as necessidades do seu jogo:

### Traces Varridos
Melhor para armas de movimento rápido. Previne perder acertos entre frames.

### Volumes de Overlap
Ideal para ataques de área. Atualize volumes em notificações de animação para timing preciso.

### Simulação de Projéteis
Para combate à distância. Use predição para esconder latência de rede.

## Camadas de Feedback

Ótima sensação de combate vem de camadas de múltiplos sistemas de feedback:

### Feedback Visual
- Pausa de acerto (1-3 frames)
- Tremor de tela
- Efeitos de partículas no ponto de impacto
- Efeitos de material em superfícies atingidas

### Feedback Áudio
- Sons de impacto em camadas baseados na força do acerto
- Sons específicos de materiais
- Áudio espacializado para consciência direcional

### Feedback Háptico
- Padrões de vibração do controle correspondendo à força do acerto
- Vibração variada para diferentes tipos de armas

## Integração de Animação

Animações devem suportar gameplay responsivo, não lutar contra ele:

### Controle de Root Motion
Use root motion para movimentos requerendo posicionamento preciso (investidas, estocadas). Desabilite para movimentos onde controle do jogador é priorizado.

### Blend Spaces para Responsividade
Crie blend spaces permitindo transições suaves de qualquer estado de animação. Jogadores nunca devem se sentir presos em animações.

### Seções de Montagem
Quebre animações de ataque em seções: preparação, ativo, recuperação. Permita cancelamento durante seções específicas para sistemas de combo.

## Gerenciamento de Estado

Implemente uma máquina de estados de combate robusta:

### Estados de Ataque
- Inativo
- Preparação (pode cancelar para esquiva)
- Ativo (detecção de acerto ativa)
- Recuperação (vulnerável)
- Cooldown

### Transições de Estado
Defina regras claras para quais estados podem transitar para outros. Isso previne combinações impossíveis enquanto permite expressão de habilidade.

## Considerações de Rede

Em multiplayer, combate responsivo requer predição:

### Predição do Lado do Cliente
Prediga detecção de acerto localmente. Mostre feedback imediato enquanto aguarda validação do servidor.

### Reconciliação de Servidor
Quando servidor discorda, corrija suavemente o estado do cliente sem teleportes bruscos.

## Resultados

Seguindo esses princípios em um projeto recente:
- Latência de combate reduzida para média de 65ms
- Avaliações de satisfação de jogadores melhoraram 45%
- Combate tornou-se o recurso #1 elogiado em análises

## Conclusão

Combate responsivo requer atenção a cada milissegundo da experiência do jogador. Camadas de múltiplos sistemas de feedback, otimize para performance, e sempre priorize sensação do jogador sobre pureza técnica.`
  },
  'network-prediction-multiplayer-games': {
    title: 'Predição do Lado do Cliente em Jogos Multiplayer',
    excerpt: 'Entendendo e implementando predição de cliente para criar experiências multiplayer responsivas apesar da latência de rede.',
    content: `# Predição do Lado do Cliente em Jogos Multiplayer

Latência de rede é o inimigo do gameplay multiplayer responsivo. Predição do lado do cliente é a arma que usamos para combatê-la.

## O Problema da Latência

Em um jogo multiplayer não-predito:
1. Jogador pressiona botão
2. Cliente envia input para servidor (20-100ms)
3. Servidor processa input
4. Servidor envia resultado de volta ao cliente (20-100ms)
5. Cliente mostra resultado

Atraso total: 40-200ms. Isso é inaceitável para jogos de ação.

## Como a Predição Funciona

Predição de cliente executa simulação do jogo localmente enquanto aguarda confirmação do servidor:

1. Jogador pressiona botão
2. Cliente imediatamente simula resultado localmente (0ms)
3. Cliente mostra resultado predito
4. Servidor processa input
5. Servidor envia resultado autoritativo
6. Cliente reconcilia se predição estava errada

## Implementando Predição na Unreal

O Componente de Movimento de Personagem da Unreal tem predição embutida, mas gameplay personalizado precisa de predição personalizada.

### Movimentos Salvos

Armazene inputs e timestamps para que você possa reproduzi-los se o servidor discordar:

\`\`\`cpp
struct FSavedMove_MyCharacter : public FSavedMove_Character {
    uint8 bWantsToAbility:1;
    uint32 AbilityInputID;
    
    virtual void Clear() override;
    virtual void SetMoveFor(ACharacter* Character, float InDeltaTime, FVector const& NewAccel);
    virtual bool CanCombineWith(const FSavedMovePtr& NewMove, ACharacter* Character, float MaxDelta) const override;
};
\`\`\`

### Validação de Servidor

Servidor deve validar ações preditas para prevenir trapaça:

\`\`\`cpp
void AMyCharacter::ServerAbility_Implementation(uint32 AbilityID, FVector_NetQuantize Location) {
    // Validar: Habilidade está em cooldown?
    // Validar: Jogador está em estado válido?
    // Validar: Localização é razoável dada posição do jogador?
    
    if (IsValid) {
        ExecuteAbility(AbilityID, Location);
    } else {
        ClientCorrectAbility(AbilityID); // Dizer ao cliente que estava errado
    }
}
\`\`\`

### Reconciliação de Cliente

Quando servidor discorda, corrija suavemente:

\`\`\`cpp
void AMyCharacter::ClientCorrectAbility_Implementation(uint32 AbilityID) {
    // Não apenas ajuste para estado do servidor - isso é ruim
    // Ao invés, interpole suavemente ao longo de alguns frames
    
    // Se predição estava muito errada, pode precisar reproduzir movimentos
    ReplaySavedMoves();
}
\`\`\`

## O Que Predizer

Nem tudo deve ser predito. Diretrizes:

### Sempre Prediga
- Movimento do jogador
- Ações do jogador com feedback imediato
- Efeitos apenas visuais

### Nunca Prediga
- Ações de outros jogadores (você não tem seus inputs)
- Resultados aleatórios (servidor deve ser autoridade)
- Mudanças de recursos (previne trapaça)

### Às Vezes Prediga
- Acertos de projéteis (prediga visuais, aguarde servidor para dano)
- Coleta de itens (prediga visualmente, reverta se servidor negar)

## Lidando com Predição Errada

Quando predição de cliente está errada:

### Correção por Ajuste
Para erros pequenos (<5cm de movimento, <2° de rotação), apenas ajuste. Jogadores não notarão.

### Correção Suave
Para erros maiores, interpole ao longo de 100-200ms.

### Reproduzir Movimentos
Para predições erradas de estado do jogo, reproduza todos inputs desde o frame predito erroneamente.

## Testando Predição

Você deve testar com condições de rede realistas:

### Latência Artificial
Unreal fornece ferramentas de emulação de rede. Teste com:
- 50ms de latência (jogo local/regional)
- 100ms de latência (inter-nacional)
- 150ms+ de latência (internacional)

### Perda de Pacotes
Teste com 1-5% de perda de pacotes. Predição deve lidar com reconhecimentos faltando graciosamente.

## Considerações de Performance

Predição adiciona sobrecarga de CPU:

### Limite Atores Preditos
Apenas prediga personagens controlados pelo jogador e suas ações imediatas.

### Simplifique Simulação Predita
Simulação predita pode pular efeitos caros como física detalhada.

### Reconciliação Incremental
Não reproduza 100 frames de uma vez. Distribua reconciliação ao longo de múltiplos frames se necessário.

## Resultados

Em um projeto multiplayer recente de 100 jogadores:
- Movimento sentiu responsivo mesmo com 100ms de latência
- Ações de combate tiveram <50ms de latência percebida
- Taxa de predição errada: <0,1% (1 em 1000 ações)

## Conclusão

Predição do lado do cliente é complexa mas essencial para jogos multiplayer competitivos. O objetivo: tornar latência de rede invisível para jogadores enquanto mantém autoridade do servidor para justiça.`
  },
  'data-driven-game-design': {
    title: 'Design Orientado por Dados: Empoderando Designers',
    excerpt: 'Como arquitetar sistemas que permitem designers iterarem sem suporte de programador, reduzindo gargalos e acelerando desenvolvimento.',
    content: `# Design Orientado por Dados: Empoderando Designers

Os melhores sistemas de gameplay são aqueles que designers podem modificar sem tocar em código. Este artigo explora como construir arquiteturas orientadas por dados que empoderam sua equipe.

## O Problema

Abordagem tradicional:
1. Designer tem ideia
2. Designer escreve especificação
3. Programador implementa em C++
4. Designer testa
5. Designer percebe que precisa ajustar
6. Volta ao passo 2

Esse ciclo leva dias ou semanas por iteração.

## A Solução: Arquitetura Orientada por Dados

Mova regras de jogo e parâmetros do C++ para assets de dados que designers podem editar diretamente.

### O Que Deve Ser Orientado por Dados?

Bons candidatos:
- Valores de dano
- Temporizadores de cooldown
- Velocidades de movimento
- Efeitos de habilidades
- Parâmetros de comportamento de IA
- Curvas de progressão

Maus candidatos:
- Sistemas centrais do engine
- Lógica de replicação de rede
- Caminhos de código críticos para performance
- Validação sensível à segurança

## Implementação na Unreal

### Data Assets

Crie classes de Data Asset para cada sistema:

\`\`\`cpp
UCLASS(BlueprintType)
class UWeaponData : public UDataAsset {
    GENERATED_BODY()
    
    UPROPERTY(EditAnywhere, BlueprintReadOnly)
    float Damage;
    
    UPROPERTY(EditAnywhere, BlueprintReadOnly)
    float FireRate;
    
    UPROPERTY(EditAnywhere, BlueprintReadOnly)
    FRuntimeFloatCurve DamageFalloff;
    
    UPROPERTY(EditAnywhere, BlueprintReadOnly)
    TSubclassOf<class UGameplayEffect> ImpactEffect;
};
\`\`\`

### Validação

Adicione validação para capturar erros de designer:

\`\`\`cpp
#if WITH_EDITOR
virtual EDataValidationResult IsDataValid(TArray<FText>& ValidationErrors) override {
    if (Damage <= 0) {
        ValidationErrors.Add(FText::FromString("Dano deve ser positivo"));
        return EDataValidationResult::Invalid;
    }
    return EDataValidationResult::Valid;
}
#endif
\`\`\`

### Extensões de Editor

Crie editores de propriedade personalizados para dados complexos:
- Editores de curva visuais para queda de dano
- Avisos de validação codificados por cor
- Ferramentas de preview mostrando efeitos de gameplay

## Ferramentas para Designers

Além de data assets, construa ferramentas no editor:

### Visualizações de Debug
Mostre ranges de percepção de IA, ranges efetivos de armas, raios de habilidades no editor.

### Ferramentas de Simulação
Deixe designers executarem simulações de gameplay sem entrar no modo de jogo.

### Calculadoras de Balanceamento
Construa ferramentas que calculam tempo-para-matar, DPS, etc., de dados de armas.

## Benefícios

Após mover para arquitetura orientada por dados em um projeto recente:
- Tempo de iteração de designer caiu de 3 dias para 4 horas (redução de 93%)
- Programadores gastaram 60% menos tempo em ajustes de balanceamento
- Equipe de design criou mais de 50 habilidades únicas independentemente
- Patches de balanceamento implantados sem mudanças de código

## Armadilhas Comuns

### Abstração Excessiva
Não torne sistemas tão genéricos que se tornem impossíveis de entender. Às vezes comportamento hard-coded é mais claro.

### Performance
Data assets são carregados em runtime. Profile para garantir que você não está carregando assets massivos desnecessariamente.

### Controle de Versão
Data assets podem criar conflitos de merge. Estabeleça propriedade clara de assets.

## Melhores Práticas

1. **Valores Padrão**: Sempre forneça padrões sensatos
2. **Documentação**: Comente o que cada parâmetro afeta
3. **Exemplos**: Forneça data assets de exemplo como templates
4. **Validação**: Capture erros em tempo de edição, não runtime
5. **Testes**: Crie testes automatizados para carregamento de data assets

## Conclusão

Design orientado por dados é um investimento que rende dividendos ao longo do desenvolvimento. Empodere seus designers, reduza gargalos, e lance melhores jogos mais rápido.`
  },
  'debugging-multiplayer-issues': {
    title: 'Debugging Multiplayer: Ferramentas e Técnicas',
    excerpt: 'Estratégias práticas de debugging para jogos multiplayer, desde profiling de rede até testes de determinismo.',
    content: `# Debugging Multiplayer: Ferramentas e Técnicas

Debugging multiplayer é unicamente desafiador. O bug pode aparecer apenas no servidor, ou apenas em clientes, ou apenas quando condições de rede degradam. Aqui está como eu abordo isso.

## A Mentalidade de Debugging Multiplayer

Em single-player, você tem uma autoridade: a simulação do jogo. Em multiplayer, você tem múltiplas autoridades que devem concordar.

### Perguntas Chave
- Este problema é do lado do cliente, servidor, ou ambos?
- Acontece em todas condições de rede?
- É um problema de predição ou replicação?
- Reproduz no PIE com latência simulada?

## Ferramentas Essenciais

### Profiler de Rede

O profiler de rede da Unreal mostra exatamente o que está replicando:

\`\`\`
stat net
\`\`\`

Procure por:
- Picos inesperados de largura de banda
- Atores replicando para clientes errados
- Propriedades atualizando mais frequentemente que o necessário

### Emulação de Rede

Teste com condições de rede realistas:

\`\`\`
Net PktLag=100  // Adicionar 100ms de latência
Net PktLoss=5   // Adicionar 5% de perda de pacotes
Net PktOrder=1  // Habilitar reordenação de pacotes
\`\`\`

### Logging Visual

Registre eventos visualmente em espaço 3D:

\`\`\`cpp
UE_VLOG_LOCATION(this, LogCombat, Log, ImpactLocation, 50.f, FColor::Red, TEXT("Acerto!"));
UE_VLOG_SEGMENT(this, LogCombat, Log, StartLocation, EndLocation, FColor::Green, TEXT("Trace"));
\`\`\`

## Problemas Comuns e Soluções

### Problema: Rubber-Banding

**Sintoma**: Posição do personagem volta após movimento

**Causa**: Correção de posição do servidor sobrescrevendo predição do cliente

**Debug**:
1. Habilite \`ShowCorrections\` para ver quando correções acontecem
2. Registre posição predita vs servidor
3. Verifique se validação de movimento é muito restrita

**Solução**: Amplie tolerâncias de validação do servidor ou melhore precisão de predição

### Problema: Dessincronia

**Sintoma**: Clientes veem estados de jogo diferentes

**Causa**: Lógica de gameplay não-determinística

**Debug**:
1. Registre toda geração de números aleatórios
2. Compare eventos de gameplay em servidor vs clientes
3. Verifique condições de corrida em spawn de atores

**Solução**: Garanta que lógica de gameplay seja determinística. Use seeds fornecidas pelo servidor para aleatoriedade.

### Problema: Registro de Acertos

**Sintoma**: Tiros erram quando parecem acertar

**Causa**: Servidor e cliente discordam sobre posições

**Debug**:
1. Registre traces de acerto tanto em servidor quanto cliente
2. Visualize traces usando debug draws
3. Verifique se compensação de lag está funcionando

**Solução**: Implemente compensação de lag para detecção de acertos

## Técnicas Avançadas

### Debugging de Replay

Grave sessões de gameplay e reproduza-as deterministicamente:

\`\`\`cpp
// Gravar
GetWorld()->GetGameInstance()->StartRecordingReplay(TEXT("MyReplay"), TEXT("Sessão de Debug"));

// Reproduzir
GetWorld()->GetGameInstance()->PlayReplay(TEXT("MyReplay"));
\`\`\`

### Breakpoints Condicionais

Quebre apenas em clientes específicos ou no servidor:

\`\`\`cpp
if (GetNetMode() == NM_Client && GetLocalRole() == ROLE_AutonomousProxy) {
    // Breakpoint aqui só ativa no cliente proprietário
}
\`\`\`

### Comandos de Debug Personalizados

Crie comandos de console para testar cenários:

\`\`\`cpp
void AMyGameMode::SimulateNetworkConditions(float Latency, float PacketLoss) {
    // Aplicar a todas conexões
}
\`\`\`

## Fluxos de Trabalho de Testes

### Testes Locais
1. PIE com 1 servidor dedicado + 2 clientes
2. Habilite emulação de rede
3. Teste funcionalidade básica

### Testes LAN
1. Construa servidor de desenvolvimento
2. Conecte de 2-4 máquinas locais
3. Teste com contagens de jogadores realistas

### Testes Remotos
1. Implante em servidor na nuvem
2. Conecte de diferentes regiões
3. Teste com latência real de internet

## Prevenção Através de Arquitetura

Os melhores bugs são os que você previne:

### Design para Multiplayer Primeiro
Não adicione multiplayer como pensamento posterior. Design sistemas com replicação em mente desde o primeiro dia.

### Valide Cedo
Servidor deve validar todas ações do cliente. Nunca confie no cliente.

### Teste Continuamente
Não espere por "semana de testes de rede". Teste funcionalidade multiplayer conforme você constrói.

## Conclusão

Debugging multiplayer requer entender como código de rede funciona e ter as ferramentas certas. Construa boa infraestrutura de debugging cedo, e você economizará incontáveis horas caçando fantasmas.`
  },
  'animation-system-integration': {
    title: 'Integração Profunda: Sistemas de Animação e Gameplay',
    excerpt: 'Melhores práticas para integrar o sistema de animação da Unreal com código de gameplay para comportamento de personagem fluido e responsivo.',
    content: `# Integração Profunda: Sistemas de Animação e Gameplay

Ótimo gameplay e animação não são sistemas separados—eles são profundamente interligados. Este artigo cobre como integrá-los perfeitamente.

## O Contrato Entre Gameplay e Animação

Código de gameplay e animação devem concordar sobre responsabilidades:

### Gameplay Controla:
- Quando animações tocam
- Velocidade e direção de movimento
- Transições de estado
- Aplicação de root motion

### Animação Controla:
- Como movimento parece
- Blending de transições
- Ajustes de IK
- Matching de poses

## Arquitetura

### Instância de Animação

Seu Animation Blueprint se comunica com gameplay através da Instância de Animação:

\`\`\`cpp
UCLASS()
class UMyAnimInstance : public UAnimInstance {
    GENERATED_BODY()
    
public:
    virtual void NativeUpdateAnimation(float DeltaSeconds) override;
    
    UPROPERTY(BlueprintReadOnly)
    float Speed;
    
    UPROPERTY(BlueprintReadOnly)
    bool bInAir;
    
    UPROPERTY(BlueprintReadOnly)
    EWeaponState WeaponState;
};
\`\`\`

### Fluxo de Atualização

1. Personagem atualiza estado de gameplay
2. Instância de animação lê estado do personagem
3. Animation Blueprint avalia
4. Pose gerada e aplicada
5. Root motion (se houver) aplicado ao personagem

## Notificações de Animação

Notificações disparam eventos de gameplay em timings precisos de animação:

### Janelas de Detecção de Acertos

\`\`\`cpp
UCLASS()
class UAnimNotify_AttackHitWindow : public UAnimNotify {
    GENERATED_BODY()
    
    virtual void Notify(USkeletalMeshComponent* MeshComp, UAnimSequenceBase* Animation) override {
        if (AMyCharacter* Character = Cast<AMyCharacter>(MeshComp->GetOwner())) {
            Character->BeginAttackHitDetection();
        }
    }
};
\`\`\`

### Estados de Notificação

Para efeitos durando múltiplos frames:

\`\`\`cpp
UCLASS()
class UAnimNotifyState_Invulnerable : public UAnimNotifyState {
    GENERATED_BODY()
    
    virtual void NotifyBegin(USkeletalMeshComponent* MeshComp, UAnimSequenceBase* Animation, float TotalDuration) override;
    virtual void NotifyEnd(USkeletalMeshComponent* MeshComp, UAnimSequenceBase* Animation) override;
};
\`\`\`

## Root Motion

Root motion permite animações dirigirem posição do personagem:

### Quando Usar Root Motion
- Investidas, estocadas, dashes
- Movimento de ataque corpo a corpo
- Posicionamento preciso (escalada, montagem)

### Quando Evitar Root Motion
- Movimento básico (caminhar, correr)
- Ações onde controle do jogador é prioridade
- Movimento replicado em rede (causa problemas)

### Implementação

\`\`\`cpp
void AMyCharacter::OnMontageBlendingOut(UAnimMontage* Montage, bool bInterrupted) {
    // Parar extração de root motion
    GetCharacterMovement()->SetMovementMode(MOVE_Walking);
}
\`\`\`

## Blending e Transições

Transições suaves fazem a diferença entre robótico e fluido:

### Blending em Camadas

Parte superior e inferior do corpo podem animar independentemente:
- Pernas: Locomoção
- Torso: Mira ou idle de arma
- Braços: Animações de arma

### Regras de Transição

Defina regras claras para validade de transição:

\`\`\`cpp
bool CanTransitionToAttack() const {
    return !bInAir && !bStunned && !bCurrentlyAttacking;
}
\`\`\`

### Tratamento de Interrupções

Algumas animações podem ser interrompidas, outras não:

\`\`\`cpp
void AMyCharacter::TryInterruptCurrentAction() {
    if (CurrentMontage && CurrentMontage->bInterruptable) {
        StopAnimMontage(CurrentMontage);
    }
}
\`\`\`

## Otimização de Performance

Animação é cara. Otimize sabiamente:

### Sistema LOD

Reduza complexidade de animação à distância:
- LOD0 (perto): Esqueleto completo, IK habilitado
- LOD1 (médio): Esqueleto reduzido, IK desabilitado  
- LOD2 (longe): Esqueleto mínimo, taxa de atualização reduzida

### Otimização de Taxa de Atualização

Nem todos personagens precisam de atualizações de animação a 60fps:

\`\`\`cpp
void AMyCharacter::OptimizeAnimationUpdateRate() {
    if (DistanceToPlayer > 5000.f) {
        GetMesh()->VisibilityBasedAnimTickOption = EVisibilityBasedAnimTickOption::OnlyTickPoseWhenRendered;
    }
}
\`\`\`

### Contagem de Ossos

Minimize ossos animados:
- Use ossos virtuais para alvos de IK
- Marque ossos como não-animados quando possível
- Use LODs de skeletal mesh

## Debugging de Animação

### Debugging Visual

\`\`\`
ShowDebug Animation
\`\`\`

Mostra animações tocando atualmente, pesos de blend e estado da máquina de estados.

### Animation Insights

Unreal Insights mostra performance detalhada de animação:
- Tempo gasto em avaliação de animação
- Pesos de perfil de blend
- Custo de solver de IK

## Armadilhas Comuns

### Máquinas de Estado Supercomplicadas

Máquinas de estado crescem descontroladamente rápido. Mantenha-as simples:
- Limite a 10-15 estados
- Use blend spaces dentro de estados
- Separe preocupações (locomoção vs ações)

### Lutando Contra Root Motion

Não misture root motion e movimento dirigido por código. Escolha uma autoridade.

### Ignorando Rede

Animações não replicam bem. Replique estado, deixe clientes tocarem animações apropriadas localmente.

## Conclusão

Ótima integração de animação requer entender ambos sistemas profundamente e definir contratos claros entre eles. O resultado: personagens fluidos e responsivos que são incríveis de controlar.`
  }
}

export function getArticleTranslation(articleId: string, lang: 'en' | 'pt', field: string): any {
  if (lang === 'pt' && articleTranslationsPt[articleId]) {
    const translation = articleTranslationsPt[articleId]
    const keys = field.split('.')
    let value: any = translation
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value
  }
  return undefined
}
