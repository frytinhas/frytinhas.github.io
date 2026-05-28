# José Gabriel Nunes - Gameplay Programmer Portfolio

**Experience Qualities**:
1. **Technical Precision** - Every element communicates technical competence through clean, purposeful design that mirrors the discipline of systems programming
2. **Dynamic Sophistication** - Fluid animations and interactions that demonstrate attention to performance and user experience, reflecting gameplay engineering sensibilities
3. **Professional Authority** - Bold, confident visual presence that positions the developer as an experienced senior-level contributor to complex multiplayer projects

**Complexity Level**: Light Application (multiple features with basic state)
This is a multi-section portfolio with navigation, animated transitions, interactive project filtering, and project showcases. The focus is on presentation and smooth user experience rather than complex application logic.

## Essential Features

**Hero Section**
- Functionality: Full-viewport introduction with name, title, tagline, and CTA button
- Purpose: Immediate impact and professional positioning, setting visual tone
- Trigger: Page load
- Progression: Page loads → Animated particles/gradient fade in → Text reveals sequentially → CTA button appears with hover state
- Success criteria: Smooth 60fps animations, clear hierarchy, compelling first impression

**About Section**
- Functionality: Concise technical biography highlighting core competencies
- Purpose: Establish credibility in gameplay systems, multiplayer, and architecture
- Trigger: Scroll into view
- Progression: User scrolls → Section fades/slides into view → Text becomes readable with clear emphasis on key technical terms
- Success criteria: Information scans quickly, technical focus is clear, professional tone maintained

**Projects Showcase with Category Filtering**
- Functionality: Interactive grid of portfolio projects with category filters (All, Combat, Networking, AI, Systems)
- Purpose: Allow visitors to explore projects by specialty area and technical focus
- Trigger: Scroll into view, filter button clicks
- Progression: User scrolls to section → Filter buttons appear → User clicks category → Projects animate and filter → Hover on cards reveals elevation → Click navigates to project detail page
- Success criteria: Smooth filter transitions, clear category organization, responsive grid layout

**Project Detail Pages with Case Studies**
- Functionality: Comprehensive case study pages for each project showing full details, metrics, challenges, solutions, and technical implementation
- Purpose: Demonstrate depth of technical expertise and problem-solving approach through detailed project narratives
- Trigger: Click on project card from home page
- Progression: User clicks project card → Navigation to detail page → Hero section with project info → Key metrics display → Scroll through Overview, Challenge, Solution sections → Read technical deep dive → View key features → CTA to contact or return
- Success criteria: Detailed information architecture, smooth navigation, compelling narrative flow, clear technical communication

**Technical Skills Display**
- Functionality: Categorized skill badges organized by technical domain
- Purpose: Comprehensive overview of technical expertise in gameplay, networking, and tools
- Trigger: Scroll into view
- Progression: User scrolls → Categories appear with stagger → Badges fade in sequentially
- Success criteria: Skills are scannable, organization is clear, categories communicate specialization

**Experience Highlights**
- Functionality: Timeline-style presentation of key professional achievements
- Purpose: Demonstrate impact through specific metrics and results
- Trigger: Scroll into view
- Progression: User scrolls → Timeline items slide in from left → Clear hierarchy established
- Success criteria: Achievements are concrete, metrics stand out, timeline feel is established

**Contact Section**
- Functionality: Social links and email contact with hover states
- Purpose: Provide clear paths for professional outreach
- Trigger: Scroll to bottom
- Progression: User scrolls → Section fades in → Buttons reveal with hover states
- Success criteria: All links work, hover states are satisfying, professional tone maintained

## Edge Case Handling
- **Keyboard Navigation**: Full tab order support, visible focus states on filter buttons and links
- **Mobile Responsiveness**: Grid collapses to 1-2 columns, filter buttons wrap appropriately
- **Empty Filter States**: All categories guaranteed to have at least one project (by design)
- **Long Project Descriptions**: Cards maintain consistent heights through grid layout
- **Image Loading**: Placeholder SVGs ensure layout stability during load
- **Smooth Scrolling**: Polyfill and fallback for browsers without smooth scroll support

## Design Direction
The design should evoke technical precision, confidence, and modern engineering excellence. Visual language mirrors game development aesthetics with dark backgrounds, sharp contrast, and electric blue accents that suggest circuitry and systems architecture.

## Color Selection
Dark, technical color scheme with electric blue highlights creating a sophisticated game development aesthetic.

- **Primary Color (Electric Blue)**: `oklch(0.60 0.20 240)` - Sharp, technical accent suggesting code and systems
- **Secondary Color (Deep Black)**: `oklch(0.15 0 0)` - Structural base providing high contrast
- **Accent Color (Bright Cyan)**: `oklch(0.75 0.15 210)` - Attention-grabbing highlight for interactive elements
- **Background Hierarchy**: 
  - Pure Black `oklch(0.15 0 0)` - Structural base, headers, primary sections
  - Charcoal `oklch(0.25 0 0)` - Card backgrounds, elevated surfaces
  - Slate Gray `oklch(0.45 0 0)` - Borders, dividers, subtle accents

**Foreground/Background Pairings**:
- White on Black `oklch(0.98 0 0)` on `oklch(0.15 0 0)` - Ratio 16.8:1 ✓
- White on Charcoal `oklch(0.98 0 0)` on `oklch(0.25 0 0)` - Ratio 12.3:1 ✓
- Cyan on Black `oklch(0.75 0.15 210)` on `oklch(0.15 0 0)` - Ratio 7.2:1 ✓
- Blue on Black `oklch(0.60 0.20 240)` on `oklch(0.15 0 0)` - Ratio 4.9:1 ✓

## Font Selection
Typography should project technical confidence and modern engineering aesthetics with geometric precision.

- **Primary Font**: Space Grotesk - A geometric sans-serif with technical character, ideal for headers
- **Body Font**: Inter - Clean, highly legible sans-serif optimized for screen reading

**Typographic Hierarchy**:
- H1 (Hero Name): Space Grotesk Bold / 64px desktop, 40px mobile / -0.02em letter spacing / 1.1 line height
- H2 (Section Headers): Space Grotesk Bold / 48px desktop, 32px mobile / -0.01em / 1.15
- H3 (Project Titles): Space Grotesk Semibold / 28px desktop, 24px mobile / 0 / 1.2
- Body Text: Inter Regular / 18px desktop, 16px mobile / 0 / 1.6
- Small Text (Tags): Inter Medium / 14px / 0 / 1.4

## Animations
Animations reinforce technical precision with purposeful, smooth transitions that enhance comprehension without distraction.

- **Page Load**: Staggered fade-in of hero text elements (200ms intervals)
- **Scroll Reveals**: Sections fade and slide up on viewport entry (600ms duration)
- **Project Filter**: Smooth fade and scale animation when filtering (300ms with 50ms stagger)
- **Card Hovers**: Elevation increase with subtle shadow glow (300ms ease-out)
- **Button Interactions**: Scale transform on press (150ms) and icon translations (200ms)
- **Scroll Progress**: Linear fill animation on top progress bar
- **Particle Background**: Subtle, continuous float animation for atmospheric depth

## Component Selection

**Components Used**:
- Button (shadcn) - Primary CTA in hero, filter buttons, contact links (customized with blue theme and scale hover)
- Card (shadcn) - Project showcase containers with hover states
- Badge (shadcn) - Skill tags, technology stack indicators, category labels

**Custom Components**:
- ParticleBackground - Custom animated particle system for hero section ambiance

**States**: 
- Filter Buttons: Default (outline) → Selected (filled with primary color, shadow glow) → Hover (border color shift)
- Cards: Default (charcoal bg) → Hover (elevation increase, blue border glow) → Active (opens link)
- Contact Buttons: Default (outline) → Hover (filled, icon scale)

**Icon Selection**:
- @phosphor-icons/react for all UI elements
- ArrowRight - Navigation and CTA indicators
- GithubLogo, LinkedinLogo, EnvelopeSimple - Contact section icons

**Spacing**:
- Container max-width: max-w-6xl (readable line length, proper centering)
- Section padding: py-24 (96px vertical rhythm)
- Card gaps: gap-6 (24px between cards)
- Component spacing: mb-4, mb-8, mb-12 (16px, 32px, 48px progression)

**Mobile Adaptations**:
- Filter Buttons: Wrap to multiple rows with flex-wrap, maintain touch targets
- Project Grid: 3 columns desktop → 2 columns tablet → 1 column mobile
- Typography: Scale down by 30-40% on mobile while maintaining hierarchy
- Hero: Reduce vertical padding, stack elements vertically
- Contact: Stack buttons vertically on smallest screens
