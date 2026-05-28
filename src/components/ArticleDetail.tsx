import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { type Article } from '@/data/articles'
import { marked } from 'marked'
import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/translations'
import { getArticleTranslation } from '@/lib/article-translations'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

interface ArticleDetailProps {
  article: Article
}

export function ArticleDetail({ article }: ArticleDetailProps) {
  const { language } = useLanguage()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const translatedTitle = getArticleTranslation(article.id, language, 'title') || article.title
  const translatedContent = getArticleTranslation(article.id, language, 'content') || article.content
  
  const contentHtml = marked(translatedContent)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft />
            {t(language, 'articleDetail.backToArticles')}
          </Button>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      <article className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {article.category}
              </Badge>
              {article.featured && (
                <Badge variant="outline" className="border-accent/50 text-accent">
                  {language === 'en' ? 'Featured' : 'Destaque'}
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {translatedTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(article.date).toLocaleDateString(language === 'en' ? 'en-US' : 'pt-BR', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} {t(language, 'articleDetail.readTime')}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-secondary/30 border-secondary text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:gradient-text prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent
              prose-strong:text-foreground prose-strong:font-semibold
              prose-code:text-accent prose-code:bg-secondary/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-secondary/20 prose-pre:border prose-pre:border-border/50 prose-pre:rounded-lg
              prose-ul:text-muted-foreground prose-ul:mb-6
              prose-ol:text-muted-foreground prose-ol:mb-6
              prose-li:mb-2
              prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <ArrowLeft />
              {t(language, 'articleDetail.backToArticles')}
            </Button>
          </motion.div>
        </div>
      </article>
    </div>
  )
}
