import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Target, Lightbulb, TrendUp, Clock, Users, Briefcase } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ParallaxHeroImage } from '@/components/ParallaxHeroImage'
import { Project } from '@/data/projects'
import { useNavigate } from 'react-router-dom'
import { useLanguage, Language } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

interface ProjectDetailProps {
  project: Project
}

function getProjectField(project: Project, field: keyof Project, lang: Language): any {
  if (lang === 'pt' && project.pt) {
    const ptField = field as keyof typeof project.pt
    if (ptField in project.pt) {
      return (project.pt as any)[ptField]
    }
  }
  return project[field]
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const navigate = useNavigate()
  const { language } = useLanguage()
  
  const title = getProjectField(project, 'title', language)
  const description = getProjectField(project, 'description', language)
  const overview = getProjectField(project, 'overview', language)
  const challenge = getProjectField(project, 'challenge', language)
  const solution = getProjectField(project, 'solution', language)
  const results = getProjectField(project, 'results', language)
  const role = getProjectField(project, 'role', language)
  const technicalDetails = getProjectField(project, 'technicalDetails', language)
  const keyFeatures = getProjectField(project, 'keyFeatures', language)
  const metrics = language === 'pt' && project.pt ? project.pt.metrics.map((m, i) => ({
    ...project.metrics[i],
    label: m.label,
    description: m.description
  })) : project.metrics
  
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Button
            variant="ghost"
            className="group"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t(language, 'projectDetail.backToProjects')}
          </Button>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                {t(language, 'projectDetail.viewProject')}
              </Button>
            </a>
          </div>
        </div>
      </div>

      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(153,180,255,0.15),transparent_60%)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="mb-6">
            <Badge className="mb-4 bg-primary/20 text-accent border-primary/30">
              {project.category}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-primary" weight="duotone" />
              <div>
                <p className="text-sm text-muted-foreground">{t(language, 'projectDetail.duration')}</p>
                <p className="font-semibold">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" weight="duotone" />
              <div>
                <p className="text-sm text-muted-foreground">{t(language, 'projectDetail.role')}</p>
                <p className="font-semibold">{role}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" weight="duotone" />
              <div>
                <p className="text-sm text-muted-foreground">{t(language, 'projectDetail.teamSize')}</p>
                <p className="font-semibold">{project.teamSize}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm bg-primary/10 text-accent border-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <ParallaxHeroImage src={project.image} alt={title} />
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 border-border hover:border-primary/50 transition-all"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" weight="duotone" />
              <h2 className="text-3xl font-bold">{t(language, 'projectDetail.overview')}</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {overview}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-accent" weight="duotone" />
              <h2 className="text-3xl font-bold">{t(language, 'projectDetail.challenge')}</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {challenge}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-primary" weight="duotone" />
              <h2 className="text-3xl font-bold">{t(language, 'projectDetail.solution')}</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {solution}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendUp className="w-8 h-8 text-accent" weight="duotone" />
              <h2 className="text-3xl font-bold">{t(language, 'projectDetail.results')}</h2>
            </div>
            <div className="space-y-3">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" weight="fill" />
                  <p className="text-lg text-muted-foreground">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">{t(language, 'projectDetail.technicalDetails')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card hover:bg-card/80 border-border hover:border-primary/30 transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {detail.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {detail.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">{t(language, 'projectDetail.keyFeatures')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {keyFeatures.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card/30 border border-border hover:border-primary/30 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" weight="bold" />
                  <p className="text-muted-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              {language === 'en' ? 'Interested in similar work?' : 'Interessado em trabalhos similares?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'en' 
                ? "Let's discuss how I can contribute to your project" 
                : 'Vamos discutir como posso contribuir para seu projeto'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => {
                  navigate('/')
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
                className="transition-transform hover:scale-105"
              >
                {language === 'en' ? 'Get In Touch' : 'Entre em Contato'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  navigate('/')
                  setTimeout(() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                {language === 'en' ? 'View More Projects' : 'Ver Mais Projetos'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
