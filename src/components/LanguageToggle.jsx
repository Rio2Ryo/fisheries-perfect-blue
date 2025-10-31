import { useTranslation } from 'react-i18next'

function LanguageToggle({ className = '' }) {
  const { i18n, t } = useTranslation()
  const toggleLanguage = () => {
    const next = i18n.language === 'ja' ? 'en' : 'ja'
    i18n.changeLanguage(next)
  }

  const label = i18n.language === 'ja' ? t('lang.en') : t('lang.ja')

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`px-4 py-2 border border-[#2E7D32] text-sm font-medium text-white hover:bg-[#2E7D32] hover:text-white transition-all duration-200 ${className}`}
      aria-label="Toggle language"
    >
      {label}
    </button>
  )
}

export default LanguageToggle
