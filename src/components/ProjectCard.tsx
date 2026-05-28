import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowRight } from '@phosphor-icons/react'
import { ParallaxProjectImage } from '@/components/ParallaxProjectImage'
import { Project } from '@/data/projects'
import { memo } from 'react'

interface ProjectCardProps {
  project: Project
  index: number
  onNavigate: (projectId: string) => void
}

function ProjectCardComponent({ project, index, onNavigate }: ProjectCardProps) {
  return (
    <motion.div
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
            onClick={() => onNavigate(project.id)}
          />
          <div className="p-6 flex-grow flex flex-col cursor-pointer" onClick={() => onNavigate(project.id)}>
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
  )
}

export const ProjectCard = memo(ProjectCardComponent)
