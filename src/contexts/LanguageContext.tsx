import { createContext, useContext, ReactNode } from 'react'
import { useKV } from '@github/spark/hooks'

export type Language = 'en' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useKV<Language>('portfolio-language', 'en')

  return (
    <LanguageContext.Provider value={{ language: language || 'en', setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
