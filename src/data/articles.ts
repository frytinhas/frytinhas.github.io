export type ArticleCategory = 'All' | 'Performance' | 'Combat Design' | 'Networking' | 'Architecture' | 'Debugging' | 'Animation'

export interface Article {
  id: string
  title: string
  excerpt: string
  category: Exclude<ArticleCategory, 'All'>
  readTime: string
  date: string
  content: string
  tags: string[]
  featured?: boolean
}

export const articles: Article[] = [
  {
    id: 'optimizing-gameplay-ability-system',
    title: 'Optimizing Gameplay Ability System for Performance',
    excerpt: 'Deep dive into optimizing Unreal\'s GAS for large-scale multiplayer environments. Learn how to reduce replication overhead and improve ability execution performance.',
    category: 'Performance',
    readTime: '8 min',
    date: '2024-01-15',
    featured: true,
    tags: ['UE5', 'GAS', 'Optimization', 'Networking'],
    content: `# Optimizing Gameplay Ability System for Performance

The Gameplay Ability System (GAS) is powerful but can become a performance bottleneck in multiplayer games if not properly optimized. This article explores practical optimization techniques I've used in production.

## Understanding GAS Overhead

GAS introduces several performance considerations:
- Gameplay Effects with multiple modifiers
- Attribute replication and aggregation
- Tag queries and updates
- Ability activation and prediction

## Replication Optimization

One of the biggest wins comes from optimizing what data actually needs to replicate. Not all attribute changes need to go over the network, and not all clients need all data.

### Conditional Replication
Use DOREPLIFETIME_CONDITION to control when attributes replicate. For example, health might only need to replicate to the owning player and nearby teammates.

### Attribute Aggregation
Aggregate multiple attribute changes before replication. Instead of sending 5 separate updates, batch them into one replication event.

## Tag Query Optimization

Gameplay Tags are used extensively in GAS, but string comparisons can be expensive when done frequently.

### Cache Tag Queries
Instead of repeatedly querying "Character.State.Stunned", cache the result and only update when tags change.

### Use Tag Hierarchies Wisely
Deeper tag hierarchies mean more string comparisons. Keep hierarchies shallow for frequently-checked tags.

## Ability Execution

Ability activation involves multiple steps that can be optimized:

### Predictive Abilities
Mark abilities as predictive when possible. This eliminates round-trip latency for client actions.

### Minimize Server RPCs
Batch ability inputs when possible. If activating multiple abilities in quick succession, consider combining the RPCs.

## Results

After implementing these optimizations in a 100-player multiplayer project:
- Reduced GAS CPU overhead by 40%
- Eliminated ability activation lag for local players
- Decreased bandwidth usage by 30% for ability replication

## Conclusion

GAS optimization requires understanding what data is critical and what can be deferred or eliminated. Profile first, optimize second, and always test with realistic network conditions.`
  },
  {
    id: 'building-responsive-combat-systems',
    title: 'Building Responsive Combat Systems in Unreal Engine',
    excerpt: 'Techniques for creating combat that feels immediate and satisfying. Covering hit detection, feedback systems, and animation integration.',
    category: 'Combat Design',
    readTime: '10 min',
    date: '2024-01-08',
    featured: true,
    tags: ['Combat', 'Animation', 'Game Feel', 'C++'],
    content: `# Building Responsive Combat Systems in Unreal Engine

Responsive combat is what separates good action games from great ones. Players should feel every hit, every dodge, every parry. This article breaks down how to achieve that feeling.

## The 100ms Rule

Input to visual feedback should happen within 100 milliseconds. Any longer and combat feels sluggish. This means optimizing every step:

1. Input processing
2. Ability activation
3. Animation start
4. Hit detection
5. Visual/audio feedback

## Hit Detection Strategies

Choose the right hit detection for your game's needs:

### Swept Traces
Best for fast-moving weapons. Prevents missing hits between frames.

### Overlap Volumes
Ideal for area attacks. Update volumes in animation notifies for precise timing.

### Projectile Simulation
For ranged combat. Use prediction to hide network latency.

## Feedback Layering

Great combat feel comes from layering multiple feedback systems:

### Visual Feedback
- Hit pause (1-3 frames)
- Screen shake
- Particle effects at impact point
- Material effects on hit surfaces

### Audio Feedback
- Layered impact sounds based on hit strength
- Material-specific sounds
- Spatialized audio for directional awareness

### Haptic Feedback
- Controller rumble patterns matching hit strength
- Varied rumble for different weapon types

## Animation Integration

Animations must support responsive gameplay, not fight against it:

### Root Motion Control
Use root motion for moves requiring precise positioning (charges, lunges). Disable it for moves where player control is prioritized.

### Blend Spaces for Responsiveness
Create blend spaces allowing smooth transitions from any animation state. Players should never feel locked into animations.

### Montage Sections
Break attack animations into sections: startup, active, recovery. Allow canceling during specific sections for combo systems.

## State Management

Implement a robust combat state machine:

### Attack States
- Idle
- Startup (can cancel to dodge)
- Active (hit detection active)
- Recovery (vulnerable)
- Cooldown

### State Transitions
Define clear rules for which states can transition to others. This prevents impossible combinations while allowing skill expression.

## Network Considerations

In multiplayer, responsive combat requires prediction:

### Client-Side Prediction
Predict hit detection locally. Show immediate feedback while waiting for server validation.

### Server Reconciliation
When server disagrees, smoothly correct client state without jarring teleports.

## Results

Following these principles in a recent project:
- Combat latency reduced to 65ms average
- Player satisfaction ratings improved 45%
- Combat became the #1 praised feature in reviews

## Conclusion

Responsive combat requires attention to every millisecond of the player experience. Layer multiple feedback systems, optimize for performance, and always prioritize player feel over technical purity.`
  },
  {
    id: 'network-prediction-multiplayer-games',
    title: 'Client-Side Prediction in Multiplayer Games',
    excerpt: 'Understanding and implementing client prediction to create responsive multiplayer experiences despite network latency.',
    category: 'Networking',
    readTime: '12 min',
    date: '2023-12-20',
    tags: ['Networking', 'Multiplayer', 'Prediction', 'C++'],
    content: `# Client-Side Prediction in Multiplayer Games

Network latency is the enemy of responsive multiplayer gameplay. Client-side prediction is the weapon we use to fight it.

## The Latency Problem

In a non-predicted multiplayer game:
1. Player presses button
2. Client sends input to server (20-100ms)
3. Server processes input
4. Server sends result back to client (20-100ms)
5. Client shows result

Total delay: 40-200ms. That's unacceptable for action games.

## How Prediction Works

Client prediction runs game simulation locally while waiting for server confirmation:

1. Player presses button
2. Client immediately simulates result locally (0ms)
3. Client shows predicted result
4. Server processes input
5. Server sends authoritative result
6. Client reconciles if prediction was wrong

## Implementing Prediction in Unreal

Unreal's Character Movement Component has prediction built-in, but custom gameplay needs custom prediction.

### Saved Moves

Store inputs and timestamps so you can replay them if the server disagrees:

\`\`\`cpp
struct FSavedMove_MyCharacter : public FSavedMove_Character {
    uint8 bWantsToAbility:1;
    uint32 AbilityInputID;
    
    virtual void Clear() override;
    virtual void SetMoveFor(ACharacter* Character, float InDeltaTime, FVector const& NewAccel);
    virtual bool CanCombineWith(const FSavedMovePtr& NewMove, ACharacter* Character, float MaxDelta) const override;
};
\`\`\`

### Server Validation

Server must validate predicted actions to prevent cheating:

\`\`\`cpp
void AMyCharacter::ServerAbility_Implementation(uint32 AbilityID, FVector_NetQuantize Location) {
    // Validate: Is ability on cooldown?
    // Validate: Is player in valid state?
    // Validate: Is location reasonable given player position?
    
    if (IsValid) {
        ExecuteAbility(AbilityID, Location);
    } else {
        ClientCorrectAbility(AbilityID); // Tell client they were wrong
    }
}
\`\`\`

### Client Reconciliation

When server disagrees, smoothly correct:

\`\`\`cpp
void AMyCharacter::ClientCorrectAbility_Implementation(uint32 AbilityID) {
    // Don't just snap to server state - that feels bad
    // Instead, smoothly interpolate over a few frames
    
    // If prediction was very wrong, you may need to replay moves
    ReplaySavedMoves();
}
\`\`\`

## What to Predict

Not everything should be predicted. Guidelines:

### Always Predict
- Player movement
- Player actions with immediate feedback
- Visual-only effects

### Never Predict
- Other players' actions (you don't have their inputs)
- Random outcomes (server must be authority)
- Resource changes (prevents cheating)

### Sometimes Predict
- Projectile hits (predict visuals, wait for server for damage)
- Item pickups (predict visually, revert if server denies)

## Handling Misprediction

When client prediction is wrong:

### Snap Correction
For small errors (<5cm movement, <2° rotation), just snap. Players won't notice.

### Smooth Correction
For larger errors, interpolate over 100-200ms.

### Replay Moves
For game state mispredictions, replay all inputs since the mispredicted frame.

## Testing Prediction

You must test with realistic network conditions:

### Artificial Latency
Unreal provides network emulation tools. Test with:
- 50ms latency (local/regional play)
- 100ms latency (cross-country)
- 150ms+ latency (international)

### Packet Loss
Test with 1-5% packet loss. Prediction should handle missing acknowledgments gracefully.

## Performance Considerations

Prediction adds CPU overhead:

### Limit Predicted Actors
Only predict player-controlled characters and their immediate actions.

### Simplify Predicted Simulation
Predicted simulation can skip expensive effects like detailed physics.

### Incremental Reconciliation
Don't replay 100 frames at once. Spread reconciliation over multiple frames if needed.

## Results

In a recent 100-player multiplayer project:
- Movement felt responsive even with 100ms latency
- Combat actions had <50ms perceived latency
- Misprediction rate: <0.1% (1 in 1000 actions)

## Conclusion

Client-side prediction is complex but essential for competitive multiplayer games. The goal: make network latency invisible to players while maintaining server authority for fairness.`
  },
  {
    id: 'data-driven-game-design',
    title: 'Data-Driven Design: Empowering Designers',
    excerpt: 'How to architect systems that allow designers to iterate without programmer support, reducing bottlenecks and accelerating development.',
    category: 'Architecture',
    readTime: '7 min',
    date: '2023-12-05',
    tags: ['Architecture', 'Workflow', 'Tools', 'UE5'],
    content: `# Data-Driven Design: Empowering Designers

The best gameplay systems are ones designers can modify without touching code. This article explores how to build data-driven architectures that empower your team.

## The Problem

Traditional approach:
1. Designer has idea
2. Designer writes specification
3. Programmer implements in C++
4. Designer tests
5. Designer realizes it needs tweaking
6. Back to step 2

This cycle takes days or weeks per iteration.

## The Solution: Data-Driven Architecture

Move game rules and parameters from C++ into data assets that designers can edit directly.

### What Should Be Data-Driven?

Good candidates:
- Damage values
- Cooldown timers
- Movement speeds
- Ability effects
- AI behavior parameters
- Progression curves

Bad candidates:
- Core engine systems
- Network replication logic
- Performance-critical code paths
- Security-sensitive validation

## Implementation in Unreal

### Data Assets

Create Data Asset classes for each system:

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

### Validation

Add validation to catch designer mistakes:

\`\`\`cpp
#if WITH_EDITOR
virtual EDataValidationResult IsDataValid(TArray<FText>& ValidationErrors) override {
    if (Damage <= 0) {
        ValidationErrors.Add(FText::FromString("Damage must be positive"));
        return EDataValidationResult::Invalid;
    }
    return EDataValidationResult::Valid;
}
#endif
\`\`\`

### Editor Extensions

Create custom property editors for complex data:
- Visual curve editors for damage falloff
- Color-coded validation warnings
- Preview tools showing gameplay effects

## Designer Tools

Beyond data assets, build in-editor tools:

### Debug Visualizations
Show AI perception ranges, weapon effective ranges, ability radiuses in-editor.

### Simulation Tools
Let designers run gameplay simulations without entering play mode.

### Balance Calculators
Build tools that calculate time-to-kill, DPS, etc., from weapon data.

## Benefits

After moving to data-driven architecture on a recent project:
- Designer iteration time dropped from 3 days to 4 hours (93% reduction)
- Programmers spent 60% less time on balance tweaks
- Design team created 50+ unique abilities independently
- Balance patches deployed without code changes

## Common Pitfalls

### Over-Abstraction
Don't make systems so generic they become impossible to understand. Sometimes hard-coded behavior is clearer.

### Performance
Data assets are loaded at runtime. Profile to ensure you're not loading massive assets unnecessarily.

### Version Control
Data assets can create merge conflicts. Establish clear ownership of assets.

## Best Practices

1. **Default Values**: Always provide sensible defaults
2. **Documentation**: Comment what each parameter affects
3. **Examples**: Provide example data assets as templates
4. **Validation**: Catch errors at edit-time, not runtime
5. **Testing**: Create automated tests for data asset loading

## Conclusion

Data-driven design is an investment that pays dividends throughout development. Empower your designers, reduce bottlenecks, and ship better games faster.`
  },
  {
    id: 'debugging-multiplayer-issues',
    title: 'Debugging Multiplayer: Tools and Techniques',
    excerpt: 'Practical debugging strategies for multiplayer games, from network profiling to determinism testing.',
    category: 'Debugging',
    readTime: '9 min',
    date: '2023-11-18',
    tags: ['Debugging', 'Networking', 'Tools', 'Multiplayer'],
    content: `# Debugging Multiplayer: Tools and Techniques

Multiplayer debugging is uniquely challenging. The bug might only appear on the server, or only on clients, or only when network conditions degrade. Here's how I approach it.

## The Multiplayer Debugging Mindset

In single-player, you have one authority: the game simulation. In multiplayer, you have multiple authorities that must agree.

### Key Questions
- Is this issue client-side, server-side, or both?
- Does it happen in all network conditions?
- Is it a prediction issue or a replication issue?
- Does it reproduce in PIE with simulated latency?

## Essential Tools

### Network Profiler

Unreal's network profiler shows exactly what's replicating:

\`\`\`
stat net
\`\`\`

Look for:
- Unexpected bandwidth spikes
- Actors replicating to wrong clients
- Properties updating more frequently than needed

### Network Emulation

Test with realistic network conditions:

\`\`\`
Net PktLag=100  // Add 100ms latency
Net PktLoss=5   // Add 5% packet loss
Net PktOrder=1  // Enable packet reordering
\`\`\`

### Visual Logging

Log events visually in 3D space:

\`\`\`cpp
UE_VLOG_LOCATION(this, LogCombat, Log, ImpactLocation, 50.f, FColor::Red, TEXT("Hit!"));
UE_VLOG_SEGMENT(this, LogCombat, Log, StartLocation, EndLocation, FColor::Green, TEXT("Trace"));
\`\`\`

## Common Issues and Solutions

### Issue: Rubber-Banding

**Symptom**: Character position snaps back after movement

**Cause**: Server position correction overriding client prediction

**Debug**:
1. Enable \`ShowCorrections\` to see when corrections happen
2. Log predicted vs server position
3. Check if movement validation is too strict

**Solution**: Widen server validation tolerances or improve prediction accuracy

### Issue: Desync

**Symptom**: Clients see different game states

**Cause**: Non-deterministic gameplay logic

**Debug**:
1. Log all random number generation
2. Compare gameplay events on server vs clients
3. Check for race conditions in actor spawning

**Solution**: Ensure gameplay logic is deterministic. Use server-provided seeds for randomness.

### Issue: Hit Registration

**Symptom**: Shots miss when they appear to hit

**Cause**: Server and client disagree on positions

**Debug**:
1. Log hit traces on both server and client
2. Visualize traces using debug draws
3. Check if lag compensation is working

**Solution**: Implement lag compensation for hit detection

## Advanced Techniques

### Replay Debugging

Record gameplay sessions and replay them deterministically:

\`\`\`cpp
// Record
GetWorld()->GetGameInstance()->StartRecordingReplay(TEXT("MyReplay"), TEXT("Debug Session"));

// Playback
GetWorld()->GetGameInstance()->PlayReplay(TEXT("MyReplay"));
\`\`\`

### Conditional Breakpoints

Break only on specific clients or the server:

\`\`\`cpp
if (GetNetMode() == NM_Client && GetLocalRole() == ROLE_AutonomousProxy) {
    // Breakpoint here only hits on the owning client
}
\`\`\`

### Custom Debug Commands

Create console commands for testing scenarios:

\`\`\`cpp
void AMyGameMode::SimulateNetworkConditions(float Latency, float PacketLoss) {
    // Apply to all connections
}
\`\`\`

## Testing Workflows

### Local Testing
1. PIE with 1 dedicated server + 2 clients
2. Enable network emulation
3. Test basic functionality

### LAN Testing
1. Build development server
2. Connect from 2-4 local machines
3. Test with realistic player counts

### Remote Testing
1. Deploy to cloud server
2. Connect from different regions
3. Test with actual internet latency

## Prevention Through Architecture

The best bugs are ones you prevent:

### Design for Multiplayer First
Don't add multiplayer as an afterthought. Design systems with replication in mind from day one.

### Validate Early
Server should validate all client actions. Never trust the client.

### Test Continuously
Don't wait for "network testing week". Test multiplayer functionality as you build it.

## Conclusion

Multiplayer debugging requires understanding how network code works and having the right tools. Build good debugging infrastructure early, and you'll save countless hours chasing ghosts.`
  },
  {
    id: 'animation-system-integration',
    title: 'Deep Integration: Animation Systems and Gameplay',
    excerpt: 'Best practices for integrating Unreal\'s animation system with gameplay code for fluid, responsive character behavior.',
    category: 'Animation',
    readTime: '11 min',
    date: '2023-11-02',
    tags: ['Animation', 'Gameplay', 'Integration', 'C++'],
    content: `# Deep Integration: Animation Systems and Gameplay

Great gameplay and animation aren't separate systems—they're deeply intertwined. This article covers how to integrate them seamlessly.

## The Contract Between Gameplay and Animation

Gameplay code and animation must agree on responsibilities:

### Gameplay Controls:
- When animations play
- Movement speed and direction
- State transitions
- Root motion application

### Animation Controls:
- How movement looks
- Transition blending
- IK adjustments
- Pose matching

## Architecture

### Animation Instance

Your Animation Blueprint communicates with gameplay through the Animation Instance:

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

### Update Flow

1. Character updates gameplay state
2. Animation instance reads character state
3. Animation Blueprint evaluates
4. Pose generated and applied
5. Root motion (if any) applied to character

## Animation Notifies

Notifies trigger gameplay events at precise animation timings:

### Hit Detection Windows

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

### Notify States

For effects lasting multiple frames:

\`\`\`cpp
UCLASS()
class UAnimNotifyState_Invulnerable : public UAnimNotifyState {
    GENERATED_BODY()
    
    virtual void NotifyBegin(USkeletalMeshComponent* MeshComp, UAnimSequenceBase* Animation, float TotalDuration) override;
    virtual void NotifyEnd(USkeletalMeshComponent* MeshComp, UAnimSequenceBase* Animation) override;
};
\`\`\`

## Root Motion

Root motion allows animations to drive character position:

### When to Use Root Motion
- Charges, lunges, dashes
- Melee attack movement
- Precise positioning (climbing, mounting)

### When to Avoid Root Motion
- Basic movement (walking, running)
- Actions where player control is priority
- Network-replicated movement (causes issues)

### Implementation

\`\`\`cpp
void AMyCharacter::OnMontageBlendingOut(UAnimMontage* Montage, bool bInterrupted) {
    // Stop extracting root motion
    GetCharacterMovement()->SetMovementMode(MOVE_Walking);
}
\`\`\`

## Blending and Transitions

Smooth transitions make the difference between robotic and fluid:

### Layered Blending

Upper and lower body can animate independently:
- Legs: Locomotion
- Torso: Aiming or weapon idle
- Arms: Weapon animations

### Transition Rules

Define clear rules for transition validity:

\`\`\`cpp
bool CanTransitionToAttack() const {
    return !bInAir && !bStunned && !bCurrentlyAttacking;
}
\`\`\`

### Interrupt Handling

Some animations can be interrupted, others cannot:

\`\`\`cpp
void AMyCharacter::TryInterruptCurrentAction() {
    if (CurrentMontage && CurrentMontage->bInterruptable) {
        StopAnimMontage(CurrentMontage);
    }
}
\`\`\`

## Performance Optimization

Animation is expensive. Optimize wisely:

### LOD System

Reduce animation complexity at distance:
- LOD0 (close): Full skeleton, IK enabled
- LOD1 (medium): Reduced skeleton, IK disabled  
- LOD2 (far): Minimal skeleton, update rate reduced

### Update Rate Optimization

Not all characters need 60fps animation updates:

\`\`\`cpp
void AMyCharacter::OptimizeAnimationUpdateRate() {
    if (DistanceToPlayer > 5000.f) {
        GetMesh()->VisibilityBasedAnimTickOption = EVisibilityBasedAnimTickOption::OnlyTickPoseWhenRendered;
    }
}
\`\`\`

### Bone Count

Minimize animated bones:
- Use virtual bones for IK targets
- Mark bones as non-animated when possible
- Use skeletal mesh LODs

## Debugging Animation

### Visual Debugging

\`\`\`
ShowDebug Animation
\`\`\`

Shows currently playing animations, blend weights, and state machine state.

### Animation Insights

Unreal Insights shows detailed animation performance:
- Time spent in animation evaluation
- Blend profile weights
- IK solver cost

## Common Pitfalls

### Overcomplicated State Machines

State machines grow unwieldy fast. Keep them simple:
- Limit to 10-15 states
- Use blend spaces within states
- Separate concerns (locomotion vs actions)

### Fighting Root Motion

Don't mix root motion and code-driven movement. Choose one authority.

### Ignoring Network

Animations don't replicate well. Replicate state, let clients play appropriate animations locally.

## Conclusion

Great animation integration requires understanding both systems deeply and defining clear contracts between them. The result: fluid, responsive characters that feel amazing to control.`
  }
]
