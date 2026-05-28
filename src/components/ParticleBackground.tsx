import { useEffect, useRef, memo } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

function ParticleBackgroundComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const resizeTimeoutRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let lastFrameTime = 0
    const targetFPS = 60
    const frameDelay = 1000 / targetFPS

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      const rect = canvas.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      
      initParticles()
    }

    const initParticles = () => {
      const rect = canvas.getBoundingClientRect()
      const particleCount = Math.min(
        Math.floor((rect.width * rect.height) / 20000),
        80
      )
      particles = []

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
        })
      }
    }

    const drawParticles = (currentTime: number) => {
      const elapsed = currentTime - lastFrameTime

      if (elapsed > frameDelay) {
        lastFrameTime = currentTime - (elapsed % frameDelay)
        
        const rect = canvas.getBoundingClientRect()
        ctx.clearRect(0, 0, rect.width, rect.height)

        particles.forEach((particle) => {
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < 0 || particle.x > rect.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > rect.height) particle.vy *= -1

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(153, 180, 255, ${particle.opacity})`
          ctx.fill()
        })

        const connectionDistance = 100
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const distanceSquared = dx * dx + dy * dy

            if (distanceSquared < connectionDistance * connectionDistance) {
              const distance = Math.sqrt(distanceSquared)
              ctx.beginPath()
              ctx.strokeStyle = `rgba(153, 180, 255, ${0.08 * (1 - distance / connectionDistance)})`
              ctx.lineWidth = 0.5
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.stroke()
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    animationFrameId = requestAnimationFrame(drawParticles)

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      resizeTimeoutRef.current = window.setTimeout(resizeCanvas, 150)
    }

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export const ParticleBackground = memo(ParticleBackgroundComponent)
