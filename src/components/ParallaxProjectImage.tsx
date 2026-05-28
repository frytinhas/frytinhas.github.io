import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { LazyImage } from '@/components/LazyImage'

interface ParallaxProjectImageProps {
  src: string
  alt: string
  onClick: () => void
}

export function ParallaxProjectImage({ src, alt, onClick }: ParallaxProjectImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig)
  
  const imageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)
  const imageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig)

  const overlayOpacity = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isLoaded) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top
    
    const xPct = (mouseXPos / width) - 0.5
    const yPct = (mouseYPos / height) - 0.5
    
    mouseX.set(xPct)
    mouseY.set(yPct)
    overlayOpacity.set(1)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    overlayOpacity.set(0)
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    if (isLoaded) {
      setIsHovered(true)
    }
  }

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative w-full h-48 overflow-hidden bg-card cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <LazyImage
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={() => setIsLoaded(true)}
          style={{
            x: imageX,
            y: imageY,
            scale: isHovered ? 1.15 : 1,
            transformStyle: 'preserve-3d',
            translateZ: 20,
          }}
        />

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(153, 180, 255, 0.3) 0%, transparent 50%)',
            opacity: overlayOpacity,
            translateZ: 40,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent pointer-events-none"
          style={{
            opacity: isHovered ? 0.8 : 0,
            translateZ: 30,
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 border-2 border-primary/0 pointer-events-none"
          style={{
            borderColor: isHovered ? 'rgba(153, 180, 255, 0.4)' : 'rgba(153, 180, 255, 0)',
            translateZ: 50,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="absolute top-2 right-2 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground pointer-events-none"
        style={{
          translateZ: 60,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        Click to explore
      </motion.div>
    </motion.div>
  )
}
