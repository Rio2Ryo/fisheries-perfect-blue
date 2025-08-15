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
      className={`px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors ${className}`}
      aria-label="Toggle language"
    >
      {label}
    </button>
  )
}

export default LanguageToggle
