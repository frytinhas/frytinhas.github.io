import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, GithubLogo, LinkedinLogo, EnvelopeSimple, ArrowUp, Quotes, X, Sword, Network, Code, Lightning } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ParticleBackground } from '@/components/ParticleBackground'
import { ParallaxProjectImage } from '@/components/ParallaxProjectImage'
import { ParallaxGradientLayers } from '@/components/ParallaxGradientLayers'
import { ArticleCard } from '@/components/ArticleCard'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { useState, useEffect, useCallback, useMemo, memo } from 'react'
import { projects, type ProjectCategory } from '@/data/projects'
import { articles, type ArticleCategory } from '@/data/articles'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'

type EngineFilter = 'All' | 'Unreal Engine' | 'Unity'

type FilterPreset = {
  id: string
  label: string
  labelPt: string
  category: ProjectCategory
  engine: EngineFilter
  icon: React.ReactNode
}

const categories: ProjectCategory[] = ['All', 'Combat', 'Networking', 'AI', 'Systems', 'Unity']

const filterPresets: FilterPreset[] = [
  { id: 'combat', label: 'All Combat Projects', labelPt: 'Todos Projetos de Combate', category: 'Combat', engine: 'All', icon: <Sword className="w-4 h-4" /> },
  { id: 'multiplayer', label: 'Multiplayer Systems', labelPt: 'Sistemas Multiplayer', category: 'Networking', engine: 'All', icon: <Network className="w-4 h-4" /> },
  { id: 'unreal', label: 'Unreal C++ Projects', labelPt: 'Projetos Unreal C++', category: 'All', engine: 'Unreal Engine', icon: <Code className="w-4 h-4" /> },
  { id: 'unity', label: 'Unity C# Projects', labelPt: 'Projetos Unity C#', category: 'All', engine: 'Unity', icon: <Code className="w-4 h-4" /> },
  { id: 'ai-systems', label: 'AI & Systems', labelPt: 'IA & Sistemas', category: 'AI', engine: 'All', icon: <Lightning className="w-4 h-4" /> },
]

const articleCategories: ArticleCategory[] = ['All', 'Performance', 'Combat Design', 'Networking', 'Architecture', 'Debugging', 'Animation']

const skills = {
    'Gameplay Systems': [
      'Gameplay Ability System (GAS)',
      'Common UI',
      'Enhanced Input System (EIS)',
      'Character Movement',
      'Combat Systems',
      'AI & Behavior Trees',
      'Inventory & Items',
      'Unity Input System',
      'Unity Animation System',
    ],
    'Networking': [
      'EOS (Epic Online Services)',
      'Server Authority',
      'Client Prediction',
      'Replication Graph',
      'RPC Optimization',
      'Lag Compensation',
      'Network Profiling',
      'Unity Netcode',
      'Mirror Networking',
    ],
    'Engine & Tools': [
      'Unreal C++',
      'Unity C#',
      'PCG (Procedural Content Generation)',
      'Chaos Physics',
      'Iris Replication',
      'Blueprint Integration',
      'Unity Editor Scripting',
      'Scriptable Objects',
      'Memory Profiling',
      'Build Systems',
      'Version Control',
    ],
  }

  const experience = [
    {
      title: 'Gameplay Mechanics Developer',
      description: 'Designed and implemented core combat mechanics and player abilities for action game projects. Created responsive, satisfying gameplay systems with focus on player feedback and game feel.',
    },
    {
      title: 'Combat System Design',
      description: 'Developed comprehensive combat systems featuring combo mechanics, weapon variety, and hit reactions. Balanced gameplay elements to ensure engaging player experiences.',
    },
    {
      title: 'Game Design Implementation',
      description: 'Collaborated with design team to translate game design concepts into functional gameplay systems. Iterated on mechanics based on playtesting feedback and design goals.',
    },
  ]

  const testimonials = [
    {
      name: 'Victor Henrique',
      role: 'Founder and Lead Gameplay Engineer',
      company: 'Neo Soft Entertainment',
      content: 'José is one of the most talented gameplay programmers I\'ve worked with. His work on gameplay mechanics and game design elevated our project significantly. His ability to translate design concepts into polished, performant systems across both Unreal and Unity is outstanding. His code is clean, well-documented, and a pleasure to work with.',
      avatar: 'VH',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Game Designer',
      company: 'Infinity Games',
      content: 'Working with José was a game-changer for our combat system. He translated complex design requirements into elegant technical solutions in both C++ and C#, always finding ways to optimize without sacrificing gameplay feel. His versatility across multiple engines while maintaining code quality is exceptional.',
      avatar: 'MC',
    },
    {
      name: 'Sarah Thompson',
      role: 'Technical Director',
      company: 'Apex Studios',
      content: 'José\'s expertise in both Unreal Engine and Unity, along with his deep knowledge of C++ and C#, is exceptional. He consistently delivered robust gameplay systems ahead of schedule and his attention to detail in game mechanics design is remarkable. His collaborative approach made him a valuable asset to our development team.',
      avatar: 'ST',
    },
  ]

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All')
  const [selectedEngine, setSelectedEngine] = useState<EngineFilter>('All')
  const [selectedArticleCategory, setSelectedArticleCategory] = useState<ArticleCategory>('All')
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const navigate = useNavigate()
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const resetFilters = useCallback(() => {
    setSelectedCategory('All')
    setSelectedEngine('All')
  }, [])

  const applyPreset = useCallback((preset: FilterPreset) => {
    setSelectedCategory(preset.category)
    setSelectedEngine(preset.engine)
  }, [])

  const hasActiveFilters = selectedCategory !== 'All' || selectedEngine !== 'All'
  
  const filteredProjects = useMemo(() => {
    let filtered = projects

    if (selectedEngine !== 'All') {
      filtered = filtered.filter(project => {
        if (selectedEngine === 'Unity') {
          return project.category === 'Unity' || project.stack.some(tech => tech.toLowerCase().includes('unity'))
        } else {
          return project.category !== 'Unity' && !project.stack.some(tech => tech.toLowerCase().includes('unity'))
        }
      })
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory)
    }

    return filtered
  }, [selectedCategory, selectedEngine])

  const filteredArticles = useMemo(() => {
    return selectedArticleCategory === 'All'
      ? articles
      : articles.filter(article => article.category === selectedArticleCategory)
  }, [selectedArticleCategory])

  const articleCategoryCounts = useMemo(() => {
    const counts: Record<ArticleCategory, number> = {
      'All': articles.length,
      'Performance': 0,
      'Combat Design': 0,
      'Networking': 0,
      'Architecture': 0,
      'Debugging': 0,
      'Animation': 0,
    }
    
    articles.forEach(article => {
      counts[article.category]++
    })
    
    return counts
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParallaxGradientLayers />
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="font-bold text-lg tracking-tight gradient-text cursor-pointer"
          >
            JGN
          </motion.div>
          
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
            {['projects', 'skills', 'articles', 'testimonials', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(language, `nav.${item}`)}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </motion.button>
            ))}
            <LanguageSwitcher />
            <ThemeSwitcher />
            <motion.a
              href="https://github.com/frytinhas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubLogo className="w-5 h-5" />
            </motion.a>
          </motion.nav>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30">
          <div className="h-full bg-gradient-to-r from-primary via-accent to-primary" style={{ transformOrigin: '0%' }} />
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(153,180,255,0.1),transparent_50%)]" />
          <ParticleBackground />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm text-accent font-medium">{t(language, 'hero.badge')}</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t(language, 'hero.title')}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-accent mb-4 font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {t(language, 'hero.subtitle')}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {t(language, 'hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden transition-transform hover:scale-105 active:scale-95"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="relative z-10">{t(language, 'hero.cta')}</span>
              <ArrowRight className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{ backgroundSize: '200% 100%', animation: 'gradient-shift 3s ease infinite' }} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all hover:scale-105 active:scale-95"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>{t(language, 'hero.contact')}</span>
              <EnvelopeSimple className="ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t(language, 'about.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {t(language, 'about.content1')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(language, 'about.content2')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {t(language, 'about.content3')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(language, 'about.content4')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(153,180,255,0.08),transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">{t(language, 'projects.title')}</h2>
              <motion.p 
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {filteredProjects.length} {filteredProjects.length === 1 ? (language === 'en' ? 'project' : 'projeto') : (language === 'en' ? 'projects' : 'projetos')}
              </motion.p>
            </div>

            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.02 }}
            >
              <p className="text-sm font-medium text-muted-foreground mb-3">
                {language === 'en' ? 'Quick Filters' : 'Filtros Rápidos'}
              </p>
              <div className="flex flex-wrap gap-3">
                {filterPresets.map((preset, index) => (
                  <motion.div
                    key={preset.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className={`transition-all duration-300 flex items-center gap-2 ${
                        selectedCategory === preset.category && selectedEngine === preset.engine
                          ? 'bg-gradient-to-r from-primary/20 to-accent/20 border-primary/50 shadow-md'
                          : 'hover:bg-secondary/80 hover:border-accent/30'
                      }`}
                      onClick={() => applyPreset(preset)}
                    >
                      {preset.icon}
                      {language === 'en' ? preset.label : preset.labelPt}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <p className="text-sm font-medium text-muted-foreground mb-3">
                {language === 'en' ? 'Filter by Engine' : 'Filtrar por Engine'}
              </p>
              <div className="flex flex-wrap gap-3">
                {(['All', 'Unreal Engine', 'Unity'] as EngineFilter[]).map((engine, index) => (
                  <motion.div
                    key={engine}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={selectedEngine === engine ? 'default' : 'outline'}
                      size="sm"
                      className={`transition-all duration-300 ${
                        selectedEngine === engine
                          ? 'bg-gradient-to-r from-accent to-primary text-primary-foreground shadow-lg shadow-accent/30'
                          : 'border-border hover:border-accent/50 hover:bg-accent/10'
                      }`}
                      onClick={() => setSelectedEngine(engine)}
                    >
                      {engine === 'All' ? (language === 'en' ? 'All Engines' : 'Todas Engines') : engine}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-muted-foreground">
                  {language === 'en' ? 'Filter by Category' : 'Filtrar por Categoria'}
                </p>
                <AnimatePresence>
                  {hasActiveFilters && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 10 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={resetFilters}
                        className="text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10 border border-border hover:border-destructive/50 transition-all duration-300 gap-1.5"
                      >
                        <X className="w-3.5 h-3.5" weight="bold" />
                        {language === 'en' ? 'Clear Filters' : 'Limpar Filtros'}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      size="sm"
                      className={`transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30'
                          : 'border-border hover:border-primary/50 hover:bg-primary/10'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="group h-full overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-500 relative gradient-border">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="h-full flex flex-col relative z-10">
                        <ParallaxProjectImage
                          src={project.image}
                          alt={project.title}
                          onClick={() => navigate(`/project/${project.id}`)}
                        />
                        <div className="p-6 flex-grow flex flex-col cursor-pointer" onClick={() => navigate(`/project/${project.id}`)}>
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow line-clamp-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.slice(0, 3).map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + techIndex * 0.05 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="text-xs bg-primary/10 text-accent border-primary/20 hover:bg-primary/20 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                            {project.stack.length > 3 && (
                              <Badge
                                variant="secondary"
                                className="text-xs bg-primary/10 text-accent border-primary/20"
                              >
                                +{project.stack.length - 3}
                              </Badge>
                            )}
                          </div>
                          <div className="inline-flex items-center text-sm text-primary group-hover:text-accent transition-colors group/link">
                            View Case Study
                            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(153,180,255,0.08),transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">{t(language, 'skills.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-card/30 backdrop-blur-sm border border-border hover:border-primary/30 rounded-lg p-6 transition-all duration-300">
                    <motion.h3 
                      className="text-xl font-semibold mb-4 text-primary"
                      whileHover={{ scale: 1.05, originX: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category}
                    </motion.h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + skillIndex * 0.03 }}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-sm border-border hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">{t(language, 'experience.title')}</h2>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="border-l-2 border-primary pl-6 py-2"
                >
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(153,180,255,0.1),transparent_70%)]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t(language, 'testimonials.title')}</h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-12"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t(language, 'testimonials.subtitle')}
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30, rotateY: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10, rotateY: 2 }}
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                >
                  <Card className="h-full p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                    >
                      <Quotes className="w-10 h-10 text-primary/30 mb-4 relative z-10" weight="fill" />
                    </motion.div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow relative z-10">
                      {testimonial.content}
                    </p>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-border relative z-10">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.avatar}
                        </span>
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-muted-foreground/80">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="articles" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(153,180,255,0.08),transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">{t(language, 'articles.title')}</h2>
            </div>
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t(language, 'articles.subtitle')}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {articleCategories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Button
                    variant={selectedArticleCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedArticleCategory(category)}
                    className={`
                      transition-all duration-300 gap-2
                      ${selectedArticleCategory === category
                        ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30'
                        : 'border-border hover:border-primary hover:bg-primary/10'
                      }
                    `}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.span>
                    <Badge
                      variant="secondary"
                      className={`
                        text-xs font-medium transition-colors
                        ${selectedArticleCategory === category
                          ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30'
                          : 'bg-primary/10 text-accent border-primary/20'
                        }
                      `}
                    >
                      {articleCategoryCounts[category]}
                    </Badge>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArticleCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ArticleCard
                      article={article}
                      onClick={() => navigate(`/article/${article.id}`)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground text-lg">No articles found in this category.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(153,180,255,0.15),transparent_60%)]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t(language, 'contact.title')}
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t(language, 'contact.subtitle')}
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: EnvelopeSimple, label: 'Email', href: 'mailto:contactfrytinhas1910@gmail.com' },
                { icon: GithubLogo, label: 'GitHub', href: 'https://github.com/frytinhas' },
                { icon: LinkedinLogo, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jos%C3%A9-gabriel-nunes-246b09278/' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-primary/30"
                    asChild
                  >
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      <item.icon className="mr-2 w-5 h-5 group-hover:scale-110 group-hover:rotate-3 transition-transform" />
                      {item.label}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8"
          >
            <div className="text-center md:text-left">
              <motion.h3 
                className="font-bold text-xl mb-2"
                whileHover={{ scale: 1.05, originX: 0 }}
              >
                José Gabriel Nunes
              </motion.h3>
              <p className="text-sm text-muted-foreground">Unreal Engine C++ Gameplay Programmer</p>
            </div>
            
            <div className="flex items-center gap-4">
              {[
                { icon: EnvelopeSimple, href: 'mailto:contactfrytinhas1910@gmail.com', label: 'Email' },
                { icon: GithubLogo, href: 'https://github.com/frytinhas', label: 'GitHub' },
                { icon: LinkedinLogo, href: 'https://www.linkedin.com/in/jos%C3%A9-gabriel-nunes-246b09278/', label: 'LinkedIn' }
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="pt-6 border-t border-border/50 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>© 2024 José Gabriel Nunes. Built with React, TypeScript, and Tailwind CSS.</p>
          </motion.div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Button
                onClick={scrollToTop}
                size="icon"
                className="w-12 h-12 rounded-full shadow-2xl shadow-primary/40 bg-gradient-to-br from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 group relative overflow-hidden"
                aria-label="Scroll to top"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" 
                     style={{ transform: 'translateX(-100%)' }} />
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform relative z-10" weight="bold" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
