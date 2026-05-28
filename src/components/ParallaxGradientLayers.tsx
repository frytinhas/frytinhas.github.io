import { memo } from 'react'

function ParallaxGradientLayersComponent() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" style={{ filter: 'blur(60px)' }} />
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-radial from-accent/20 via-accent/5 to-transparent rounded-full" style={{ filter: 'blur(80px)' }} />
      <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full" style={{ filter: 'blur(70px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-accent/15 via-transparent to-transparent rounded-full" style={{ filter: 'blur(90px)' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(153,180,255,0.06),transparent_70%)]" />
    </div>
  )
}

export const ParallaxGradientLayers = memo(ParallaxGradientLayersComponent)
