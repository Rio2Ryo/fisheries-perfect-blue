import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './components/LanguageToggle.jsx'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Building2, Waves, Ship, Truck, Leaf, MapPin, Phone, Mail, ArrowRight, ChevronRight, Factory, Users, Target, Menu, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import heroBg from './assets/hero-bg.jpg'
import sfcLogo from './assets/sfc-logo-new.svg'
import './App.css'

// ページコンポーネント
const HomePage = () => {
  const { t } = useTranslation() // ★ これを忘れずに

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
        <p className="text-xl text-blue-100 mb-8">
          {t('hero.subtitle')}
        </p>
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

    {/* Company Overview Card */}
    <section>
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-12 md:mb-0 flex-1">
              <h3 className="text-2xl font-bold mb-6">会社概要</h3>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5" />
                  <span>会社名</span>
                  <span className="text-white">全国姉妹漁協推進協議会株式会社</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 invisible" />
                  <span>English Name</span>
                  <span className="text-white">National Sister Fisheries Promotion Council Co., Ltd.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>所在地</span>
                  <span className="text-white">静岡県賀茂郡河津町谷津河津漁港512-2</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 invisible" />
                  <span>English Address</span>
                  <span className="text-white">512-2 Yatsu, Kawazu Fishing Port, Kawazu Town, Kamo District, Shizuoka Prefecture, 413-0515, Japan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Waves className="w-5 h-5" />
                  <span>事業内容</span>
                  <span className="text-white">海業・RV・藻の養殖</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 md:ml-12 md:mt-8">
              <Link
                to="/company"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2 shadow-md"
              >
                <span>詳細を見る</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  </div>
  )
}

// 他のページコンポーネントは簡易版として作成
const MarinePage = () => (
  /* …（あなたの元コードのまま）… */
  <div className="space-y-8">{/* 省略 */}</div>
)

const SeaweedPage = () => (
  /* …（あなたの元コードのまま）… */
  <div className="space-y-8">{/* 省略 */}</div>
)

const CompanyPage = () => (
  /* …（あなたの元コードのまま）… */
  <div className="space-y-8">{/* 省略 */}</div>
)

const ContactPage = () => {
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
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (e) {
      console.error('送信エラー:', e)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    /* …（あなたの元コードのまま）… */
    <div className="space-y-8">{/* 省略 */}</div>
  )
}

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

  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="block">
                <img 
                  src={sfcLogo} 
                  alt="SFC - Sisters Fisheries Cooperative Promotion Council" 
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:!flex flex-1 justify-end items-center">
              <nav role="navigation" aria-label="メインナビゲーション">
                <ul className="flex items-center space-x-2">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.path}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-current={location.pathname === item.path ? 'page' : undefined}
                      >
                        {t(`nav.${item.id}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <LanguageToggle className="ml-4" />
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="メニューを開く"
              >
                {mobileMenuOpen ? <Menu className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav role="navigation" aria-label="モバイルナビゲーション">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {t(`nav.${item.id}`)}
                  </Link>
                </li>
              ))}
              <li>
                <LanguageToggle className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50" />
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
     <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={sfcLogo} 
                  alt="SFC - Sisters Fisheries Cooperative Promotion Council" 
                  className="h-16 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                海業推進を基軸とし、日本の沿岸地域の活性化に貢献しています。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">事業内容</h4>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/marine"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  海業
                </Link>
                <Link 
                  to="/seaweed"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  藻の養殖
                </Link>
                <Link 
                  to="/company"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  会社概要
                </Link>
                <Link 
                  to="/contact"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex space-x-6 mb-4 md:mb-0 hidden md:flex">
                <Link 
                  to="/marine"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  海業
                </Link>
                <Link 
                  to="/seaweed"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  藻の養殖
                </Link>
                <Link 
                  to="/company"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  会社概要
                </Link>
                <Link 
                  to="/contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  お問い合わせ
                </Link>
              </div>
              <div className="text-gray-400 text-sm">
                TEL: 0558-34-1025
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
