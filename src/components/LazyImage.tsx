import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MotionStyle } from 'framer-motion'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  style?: MotionStyle
  onLoad?: () => void
  placeholderClassName?: string
}

export function LazyImage({ 
  src, 
  alt, 
  className = '', 
  style,
  onLoad,
  placeholderClassName = 'bg-card/50'
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const currentImg = imgRef.current
    
    if (!currentImg) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observerRef.current?.disconnect()
          }
        })
      },
      {
        rootMargin: '200px',
        threshold: 0.01,
      }
    )

    observerRef.current.observe(currentImg)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {!isLoaded && (
        <motion.div
          className={`absolute inset-0 ${placeholderClassName}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-pulse" />
        </motion.div>
      )}
      
      <motion.img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        className={className}
        style={style}
        onLoad={handleLoad}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  )
}
