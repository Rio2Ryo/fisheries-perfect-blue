// App.jsx
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
          {t('hero.subtitle', { defaultValue: '海の未来を、技術と連携で。' })}
        </p>
        <p className="text-lg text-blue-50 max-w-4xl mx-auto mb-12 leading-relaxed">
           {t('hero.description', { defaultValue: '私たちは海業・RV・藻類養殖の3本柱で、沿岸地域の活性化と持続可能な産業づくりに取り組んでいます。' })}
          </p>
        <Link
          to="/contact"
          className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg"
        >
           <span>{t('hero.cta', { defaultValue: 'お問い合わせ' })}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>

   {/* Business Overview */}
<section>
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-gray-900 mb-4">
      {t('business.title', { defaultValue: '事業内容' })}
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
          {t('business.marine.title', { defaultValue: '海業' })}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          {t('business.marine.description', { defaultValue: '観光・教育・物流を結ぶ新しい海の利活用モデルを構築しています。' })}
        </p>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>{t('business.marine.items.tourism', { defaultValue: 'マリンツーリズム' })}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>{t('business.marine.items.rv', { defaultValue: 'RV/モビリティ連携' })}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>{t('business.marine.items.jtb', { defaultValue: '地域事業者・旅行会社連携' })}</span>
          </div>
        </div>
        <Link
          to="/marine"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 mt-8 font-medium"
        >
          <span>{t('business.marine.cta', { defaultValue: '海業の詳細' })}</span>
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
      {t('business.seaweed.title', { defaultValue: '藻の養殖' })}
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <p className="text-gray-700 leading-relaxed">
      {t('business.seaweed.description', { defaultValue: '大学・工場・地域と連携し、食用・素材向けの藻類量産体制を整備しています。' })}
    </p>
    <div className="space-y-2">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
        <span>{t('business.seaweed.items.mother', { defaultValue: 'マザー培養' })}</span>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
        <span>{t('business.seaweed.items.factory', { defaultValue: '国内外工場連携' })}</span>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
        <span>{t('business.seaweed.items.approval', { defaultValue: '品質・認証対応' })}</span>
      </div>
    </div>
    <Link
      to="/seaweed"
      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 mt-8 font-medium"
    >
      <span>{t('business.seaweed.cta', { defaultValue: '藻の養殖の詳細' })}</span>
      <ChevronRight className="w-4 h-4" />
    </Link>
  </CardContent>
</Card>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="bg-white rounded-2xl p-8 sm:p-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('why.title', { defaultValue: 'なぜ私たちが選ばれるのか' })}</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('why.network.title', { defaultValue: '全国ネットワーク' })}</h4>
          <p className="text-gray-600 leading-relaxed">
            {t('why.network.desc', { defaultValue: '全国の漁業組合員数はおよそ15万人。準組合員数はおよそ16万人。31万人のネットワークを活かし海業を推進。' })}
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Factory className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('why.tech.title', { defaultValue: '独自技術' })}</h4>
          <p className="text-gray-600 leading-relaxed">
            {t('why.tech.desc', { defaultValue: '豪フリンダース大学との共同研究で藻類ゲノム解析を確立。24時間成長の特許技術を保有。' })}
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('why.multi.title', { defaultValue: '多角的事業展開' })}</h4>
          <p className="text-gray-600 leading-relaxed">
            {t('why.multi.desc', { defaultValue: '海業・RV・藻の養殖を組み合わせた独自モデルで、持続可能な海洋資源活用を実現。' })}
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
              <h3 className="text-2xl font-bold mb-6">{t('company.summary.title', { defaultValue: '会社概要' })}</h3>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5" />
                  <span>{t('company.summary.name', { defaultValue: '会社名' })}</span>
                  <span className="text-white">全国姉妹漁協推進協議会株式会社</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 invisible" />
                  <span>English Name</span>
                  <span className="text-white">National Sister Fisheries Promotion Council Co., Ltd.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>{t('company.summary.address', { defaultValue: '所在地' })}</span>
                  <span className="text-white">静岡県賀茂郡河津町谷津河津漁港512-2</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 invisible" />
                  <span>English Address</span>
                  <span className="text-white">512-2 Yatsu, Kawazu Fishing Port, Kawazu Town, Kamo District, Shizuoka Prefecture, 413-0515, Japan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Waves className="w-5 h-5" />
                  <span>{t('company.summary.business', { defaultValue: '事業内容' })}</span>
                  <span className="text-white">海業・RV・藻の養殖</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 md:ml-12 md:mt-8">
              <Link
                to="/company"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2 shadow-md"
              >
                <span>{t('company.summary.cta', { defaultValue: '詳細を見る' })}</span>
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

// Marine ページ
const MarinePage = () => {
  const { t } = useTranslation()
  return (
    <div className="space-y-12">
      <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
            <Waves className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('business.marine.title', { defaultValue: '海業' })}</h1>
        </div>
        <p className="text-gray-700 leading-relaxed">
          {t('pages.marine.intro', { defaultValue: '海の観光・教育・物流を繋ぐ新しい海業モデルを、地域連携のもとで推進しています。' })}
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">{t('pages.marine.sections.tourism', { defaultValue: 'マリンツーリズム' })}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              {t('pages.marine.sections.tourismDesc', { defaultValue: '地域の観光資源と航路を組み合わせ、持続可能な観光導線を設計します。' })}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">{t('pages.marine.sections.education', { defaultValue: '教育・体験' })}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              {t('pages.marine.sections.educationDesc', { defaultValue: '学校・企業研修向けの海洋学習や安全講習、乗船体験を提供します。' })}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">{t('pages.marine.sections.logistics', { defaultValue: '小規模物流' })}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              {t('pages.marine.sections.logisticsDesc', { defaultValue: '小規模離島間の配送やイベント輸送などの実証を進めています。' })}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

// Seaweed ページ
const SeaweedPage = () => {
  const { t } = useTranslation()
  return (
    <div className="space-y-12">
      <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('business.seaweed.title', { defaultValue: '藻の養殖' })}</h1>
        </div>
        <p className="text-gray-700 leading-relaxed">
          {t('pages.seaweed.intro', { defaultValue: '食用・素材・機能性原料としての藻類の量産と品質管理体制を構築しています。' })}
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">{t('pages.seaweed.sections.mother', { defaultValue: 'マザー培養' })}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              {t('pages.seaweed.sections.motherDesc', { defaultValue: '研究機関と連携し種株の増殖スキームを確立。' })}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">{t('pages.seaweed.sections.factory', { defaultValue: '工場生産' })}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              {t('pages.seaweed.sections.factoryDesc', { defaultValue: '国内外の工場と提携し安定供給体制を整備。' })}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">{t('pages.seaweed.sections.qc', { defaultValue: '品質・認証' })}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              {t('pages.seaweed.sections.qcDesc', { defaultValue: '安全性試験、規格書、各種認証に対応。' })}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

// Company ページ
const CompanyPage = () => {
  const { t } = useTranslation()
  return (
    <div className="space-y-12">
      <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('company.title', { defaultValue: '会社概要' })}</h1>
        </div>

        <div className="space-y-4 text-gray-700">
          <div className="flex items-center space-x-3">
            <Building2 className="w-5 h-5 text-gray-500" />
            <span className="font-medium">{t('company.fields.name', { defaultValue: '会社名' })}</span>
            <span>全国姉妹漁協推進協議会株式会社</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span className="font-medium">{t('company.fields.address', { defaultValue: '所在地' })}</span>
            <span>静岡県賀茂郡河津町谷津河津漁港512-2</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-500" />
            <span className="font-medium">TEL</span>
            <span>0558-34-1025</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-500" />
            <span className="font-medium">E-mail</span>
            <span>info@example.com</span>
          </div>
        </div>
      </section>
    </div>
  )
}

// Contact ページ
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
    <div className="space-y-12">
      <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.title', { defaultValue: 'お問い合わせ' })}</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.fields.name', { defaultValue: 'お名前' })}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder={t('contact.placeholders.name', { defaultValue: '山田 太郎' })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.fields.phone', { defaultValue: '電話番号' })}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="090-1234-5678"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.fields.subject', { defaultValue: '件名' })}</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder={t('contact.placeholders.subject', { defaultValue: 'お問い合わせの件名' })}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.fields.message', { defaultValue: 'お問い合わせ内容' })}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              rows={6}
              placeholder={t('contact.placeholders.message', { defaultValue: 'できるだけ具体的にご記入ください。' })}
              required
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
            >
              {isSubmitting ? t('contact.sending', { defaultValue: '送信中...' }) : t('contact.send', { defaultValue: '送信する' })}
            </button>
            {submitStatus === 'success' && (
              <span className="ml-4 text-green-600">{t('contact.success', { defaultValue: '送信しました。ありがとうございました。' })}</span>
            )}
            {submitStatus === 'error' && (
              <span className="ml-4 text-red-600">{t('contact.error', { defaultValue: '送信に失敗しました。時間をおいて再度お試しください。' })}</span>
            )}
          </div>
        </form>
      </section>
    </div>
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
                        {t(`nav.${item.id}`, { defaultValue: item.label })}
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
                aria-label={mobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                    {t(`nav.${item.id}`, { defaultValue: item.label })}
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
                {t('footer.desc', { defaultValue: '海業推進を基軸とし、日本の沿岸地域の活性化に貢献しています。' })}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.business', { defaultValue: '事業内容' })}</h4>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/marine"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {t('nav.marine', { defaultValue: '海業' })}
                </Link>
                <Link 
                  to="/seaweed"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {t('nav.seaweed', { defaultValue: '藻の養殖' })}
                </Link>
                <Link 
                  to="/company"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {t('nav.company', { defaultValue: '会社概要' })}
                </Link>
                <Link 
                  to="/contact"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {t('nav.contact', { defaultValue: 'お問い合わせ' })}
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
                  {t('nav.marine', { defaultValue: '海業' })}
                </Link>
                <Link 
                  to="/seaweed"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {t('nav.seaweed', { defaultValue: '藻の養殖' })}
                </Link>
                <Link 
                  to="/company"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {t('nav.company', { defaultValue: '会社概要' })}
                </Link>
                <Link 
                  to="/contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {t('nav.contact', { defaultValue: 'お問い合わせ' })}
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
