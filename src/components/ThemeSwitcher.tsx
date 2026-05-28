import { Moon, Sun } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'nocturne' ? 'white' : 'nocturne')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative"
      aria-label={`Switch to ${theme === 'nocturne' ? 'white' : 'nocturne'} theme`}
    >
      {theme === 'nocturne' ? (
        <Sun className="text-foreground" weight="duotone" />
      ) : (
        <Moon className="text-foreground" weight="duotone" />
      )}
    </Button>
  )
}
