import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './components/LanguageToggle.jsx'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Building2, Waves, Ship, Truck, Leaf, MapPin, Phone, Mail, ArrowRight, ChevronRight, Factory, Users, Target, Menu, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import heroBg from './assets/hero-bg.jpg'
import sfcLogo from './assets/sfc-logo-new.svg'
import './App.css'

// =========================
// HomePage
// =========================
const HomePage = () => {
  const { t } = useTranslation()

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section
        className="relative rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            REBONE THE SEA
          </h2>
          <p className="text-xl text-blue-100 mb-8">{t('hero.subtitle')}</p>
          <p className="text-lg text-blue-50 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('hero.description')}
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg"
          >
            <span>{t('hero.cta')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Business Overview */}
      <section>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {t('business.title')}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Marine Business */}
          <Card className="group hover:shadow-xl transition-all duration-300 border border-blue-200 bg-white">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t('business.marine.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {t('business.marine.description')}
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>{t('business.marine.items.tourism')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>{t('business.marine.items.rv')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>{t('business.marine.items.jtb')}</span>
                </div>
              </div>
              <Link
                to="/marine"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 mt-8 font-medium"
              >
                <span>{t('business.marine.cta')}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Seaweed Cultivation */}
          <Card className="group hover:shadow-xl transition-all duration-300 border border-green-200 bg-white">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t('business.seaweed.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {t('business.seaweed.description')}
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>{t('business.seaweed.items.mother')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>{t('business.seaweed.items.factory')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>{t('business.seaweed.items.approval')}</span>
                </div>
              </div>
              <Link
                to="/seaweed"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 mt-8 font-medium"
              >
                <span>{t('business.seaweed.cta')}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white rounded-2xl p-8 sm:p-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {t('why.title')}
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              {t('why.network.title')}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {t('why.network.description')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Factory className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              {t('why.technology.title')}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {t('why.technology.description')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              {t('why.diversification.title')}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {t('why.diversification.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

// =========================
// MarinePage
// =========================
const MarinePage = () => {
  const { t } = useTranslation()
  return <div className="space-y-8">{/* MarinePage の内容 */}</div>
}

// =========================
// SeaweedPage
// =========================
const SeaweedPage = () => {
  const { t } = useTranslation()
  return <div className="space-y-8">{/* SeaweedPage の内容 */}</div>
}

// =========================
// CompanyPage
// =========================
const CompanyPage = () => {
  const { t } = useTranslation()
  return <div className="space-y-8">{/* CompanyPage の内容 */}</div>
}

// =========================
// ContactPage
// =========================
const ContactPage = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (err) {
      console.error('送信エラー:', err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return <div className="space-y-8">{/* ContactPage の内容 */}</div>
}

// =========================
// App
// =========================
function App() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navigationItems = [
    { id: 'home', label: 'ホーム', path: '/' },
    { id: 'marine', label: '海業', path: '/marine' },
    { id: 'seaweed', label: '藻の養殖', path: '/seaweed' },
    { id: 'company', label: '会社概要', path: '/company' },
    { id: 'contact', label: 'お問い合わせ', path: '/contact' }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* ...（省略：あなたの元コードそのまま）... */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marine" element={<MarinePage />} />
          <Route path="/seaweed" element={<SeaweedPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      {/* ...（省略：あなたの元コードそのまま）... */}
    </div>
  )
}

export default App
