import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { ParticleBackground } from '@/components/ParticleBackground'
import { ParallaxGradientLayers } from '@/components/ParallaxGradientLayers'
import {
  featuredProjects,
  pluginTools,
  profileLinks,
  technicalSkills,
  type LocalizedString,
} from '@/data/portfolio'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'

function localize(text: LocalizedString, language: 'en' | 'pt') {
  return language === 'pt' ? text.pt : text.en
}

export function Home() {
  const { language } = useLanguage()
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const scrollToSection = useCallback((sectionId: string) => {
    const resolvedSection = sectionId === 'projects' ? 'portfolio' : sectionId
    const target = document.getElementById(resolvedSection)
    if (!target) {
      return
    }

    if (resolvedSection === 'portfolio') {
      const nextUrl = `${window.location.pathname}${window.location.search}#portfolio`
      window.history.replaceState(null, '', nextUrl)
    }

    target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const handleScroll = () => setShowScrollToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash === '#portfolio' || hash === '#projects') {
        const portfolioSection = document.getElementById('portfolio')
        if (portfolioSection) {
          const nextUrl = `${window.location.pathname}${window.location.search}#portfolio`
          window.history.replaceState(null, '', nextUrl)
          portfolioSection.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    handleHashNavigation()
    window.addEventListener('hashchange', handleHashNavigation)
    return () => window.removeEventListener('hashchange', handleHashNavigation)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const navItems = useMemo(
    () => ['portfolio', 'plugins', 'skills', 'contact'] as const,
    []
  )

  const frontlineProject = featuredProjects.find((project) => project.id === 'frontline')
  const imobiProject = featuredProjects.find((project) => project.id === 'imobi')
  const endzProject = featuredProjects.find((project) => project.id === 'endz')

  const renderProjectCard = (
    project: (typeof featuredProjects)[number],
    options?: { isPrimary?: boolean; imageVariant?: 'square' | 'wide' }
  ) => {
    const isPrimary = options?.isPrimary ?? false
    const imageVariant = options?.imageVariant ?? 'square'
    const links = [
      project.caseStudyUrl
        ? { href: project.caseStudyUrl, label: t(language, 'projects.caseStudy') }
        : null,
      project.demoUrl ? { href: project.demoUrl, label: t(language, 'projects.demo') } : null,
    ].filter(Boolean) as { href: string; label: string }[]

    return (
      <Card className="h-full p-6 bg-card/60 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">{localize(project.title, language)}</h3>
            <p className="text-sm text-accent font-medium">{localize(project.subtitle, language)}</p>
          </div>
          {isPrimary && (
            <Badge className="bg-primary/20 text-accent border-primary/30">
              {t(language, 'projects.primaryProject')}
            </Badge>
          )}
        </div>

        {project.media?.image && (
          <div className="mb-5 rounded-md border border-border/70 bg-background/70 p-4">
            <div
              className={`w-full rounded-md border border-border/60 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden ${
                imageVariant === 'wide' ? 'aspect-[16/7]' : 'aspect-square'
              }`}
            >
              <img
                src={project.media.image}
                alt={localize(project.media.alt, language)}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        )}

        <p className="text-muted-foreground leading-relaxed mb-6">
          {localize(project.description, language)}
        </p>

        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
            {t(language, 'projects.contributions')}
          </h4>
          <ul className="space-y-2 text-sm text-foreground/90">
            {project.contributions.map((item, contributionIndex) => (
              <li key={contributionIndex} className="flex gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>{localize(item, language)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
            {t(language, 'projects.highlights')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <Badge key={highlight} variant="secondary" className="bg-primary/10 text-accent border-primary/20">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>

        {links.length > 0 && (
          <div className="pt-6 mt-6 border-t border-border/70 flex flex-wrap gap-3">
            {links.map((link) => (
              <Button key={link.href} variant="outline" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        )}
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParallaxGradientLayers />

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-lg tracking-tight gradient-text"
          >
            JGN
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-6"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(language, `nav.${item}`)}
              </button>
            ))}
          </motion.nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(153,180,255,0.1),transparent_50%)]" />
          <ParticleBackground />
        </div>

        <motion.div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
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
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
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
              className="group"
              onClick={() => scrollToSection('portfolio')}
            >
              <span>{t(language, 'hero.cta')}</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-2" />
                {t(language, 'hero.github')}
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinLogo className="mr-2" />
                {t(language, 'hero.linkedin')}
              </a>
            </Button>

            {profileLinks.resumeUrl && (
              <Button size="lg" variant="outline" asChild>
                <a href={profileLinks.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <DownloadSimple className="mr-2" />
                  {t(language, 'hero.resume')}
                </a>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </section>

      <section id="summary" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t(language, 'summary.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {t(language, 'summary.description')}
          </motion.p>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
        <span id="projects" className="block scroll-mt-24 h-0" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(153,180,255,0.08),transparent_50%)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t(language, 'projects.title')}</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl">{t(language, 'projects.subtitle')}</p>

            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {frontlineProject && (
                  <article id="portfolio-frontline" className="scroll-mt-24">
                    {renderProjectCard(frontlineProject, { isPrimary: true, imageVariant: 'square' })}
                  </article>
                )}
                {imobiProject && (
                  <article id="portfolio-imobi" className="scroll-mt-24">
                    {renderProjectCard(imobiProject, { imageVariant: 'square' })}
                  </article>
                )}
              </div>
              {endzProject && (
                <article id="portfolio-endz" className="scroll-mt-24">
                  {renderProjectCard(endzProject, { imageVariant: 'wide' })}
                </article>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="plugins" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t(language, 'plugins.title')}</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">{t(language, 'plugins.subtitle')}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pluginTools.map((plugin, index) => (
                <motion.div
                  key={plugin.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Card className="h-full p-5 bg-card/40 border-border hover:border-primary/30 transition-colors">
                    <h3 className="text-lg font-semibold mb-2">{plugin.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {localize(plugin.description, language)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {plugin.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10 gradient-text">{t(language, 'skills.title')}</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <Card className="h-full p-6 bg-card/40 border-border hover:border-primary/30 transition-colors">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {localize(category.title, language)}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs md:text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">{t(language, 'contact.title')}</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t(language, 'contact.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <a href={profileLinks.email}>
                  <EnvelopeSimple className="mr-2" />
                  {t(language, 'contact.email')}
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">
                  <GithubLogo className="mr-2" />
                  {t(language, 'contact.github')}
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinLogo className="mr-2" />
                  {t(language, 'contact.linkedin')}
                </a>
              </Button>

              {profileLinks.resumeUrl && (
                <Button size="lg" asChild>
                  <a href={profileLinks.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <DownloadSimple className="mr-2" />
                    {t(language, 'hero.resume')}
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 José Gabriel Nunes. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="w-12 h-12 rounded-full shadow-2xl shadow-primary/40 bg-gradient-to-br from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" weight="bold" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
