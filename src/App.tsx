import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { Home } from '@/components/Home'
import { ProjectDetail } from '@/components/ProjectDetail'
import { ArticleDetail } from '@/components/ArticleDetail'
import { projects } from '@/data/projects'
import { articles } from '@/data/articles'
import { useEffect } from 'react'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

function ProjectDetailWrapper() {
  const { projectId } = useParams()
  const project = projects.find(p => p.id === projectId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <a href="/" className="text-primary hover:text-accent">
            Return to Home
          </a>
        </div>
      </div>
    )
  }

  return <ProjectDetail project={project} />
}

function ArticleDetailWrapper() {
  const { articleId } = useParams()
  const article = articles.find(a => a.id === articleId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [articleId])

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <a href="/" className="text-primary hover:text-accent">
            Return to Home
          </a>
        </div>
      </div>
    )
  }

  return <ArticleDetail article={article} />
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:projectId" element={<ProjectDetailWrapper />} />
            <Route path="/article/:articleId" element={<ArticleDetailWrapper />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
