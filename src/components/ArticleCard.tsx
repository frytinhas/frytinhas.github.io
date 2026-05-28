import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, ArrowRight } from '@phosphor-icons/react'
import { type Article } from '@/data/articles'
import { useLanguage } from '@/contexts/LanguageContext'
import { getArticleTranslation } from '@/lib/article-translations'

interface ArticleCardProps {
  article: Article
  onClick: () => void
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  const { language } = useLanguage()
  
  const translatedTitle = getArticleTranslation(article.id, language, 'title') || article.title
  const translatedExcerpt = getArticleTranslation(article.id, language, 'excerpt') || article.excerpt
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card
        className="group relative p-6 cursor-pointer h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden"
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between gap-4 mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {article.category}
            </Badge>
            {article.featured && (
              <Badge variant="outline" className="border-accent/50 text-accent">
                {language === 'en' ? 'Featured' : 'Destaque'}
              </Badge>
            )}
          </div>

          <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
            {translatedTitle}
          </h3>

          <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
            {translatedExcerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>

            <motion.div
              className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all"
              whileHover={{ x: 5 }}
            >
              <span className="text-sm font-medium">Read</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-300 pointer-events-none" />
      </Card>
    </motion.div>
  )
}
