import { createContext, useContext, ReactNode, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'

export type Theme = 'nocturne' | 'white'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useKV<Theme>('portfolio-theme', 'nocturne')

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    root.classList.remove('nocturne', 'white')
    body.classList.remove('nocturne', 'white')
    const activeTheme = theme || 'nocturne'
    root.classList.add(activeTheme)
    body.classList.add(activeTheme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme: theme || 'nocturne', setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
