import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxHeroImageProps {
  src: string
  alt: string
}

export function ParallaxHeroImage({ src, alt }: ParallaxHeroImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const springConfig = { damping: 30, stiffness: 120 }
  
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), springConfig)
  
  const imageX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig)
  const imageY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig)

  const glowX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), springConfig)
  const glowY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width
    const yPct = (e.clientY - rect.top) / rect.height
    
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full h-[500px] rounded-lg overflow-hidden bg-card border border-border shadow-xl group"
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1200,
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
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            x: imageX,
            y: imageY,
            scale: 1.1,
            transformStyle: 'preserve-3d',
          }}
        />

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(153, 180, 255, 0.25) 0%, transparent 60%)`,
            opacity: 0.6,
          }}
        />

        <motion.div
          className="absolute inset-0 border-2 border-primary/0 pointer-events-none transition-colors duration-500 group-hover:border-primary/30"
          style={{
            translateZ: 50,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none"
          style={{
            translateZ: 30,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-4 px-4 py-2 bg-primary/80 backdrop-blur-md rounded-lg text-sm font-medium text-primary-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        Move cursor to interact
      </motion.div>
    </motion.div>
  )
}
