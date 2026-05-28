import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Translate } from '@phosphor-icons/react'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Switch language"
    >
      <Translate className="w-4 h-4" />
      <span className="uppercase">{language}</span>
    </motion.button>
  )
}
